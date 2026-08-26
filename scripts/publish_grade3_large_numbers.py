import json
import random
import sys
from collections import Counter
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas

try:
    from scripts.worksheet_factory import FONT, normalized_hash, validate_catalog
except ModuleNotFoundError:
    from worksheet_factory import FONT, normalized_hash, validate_catalog


SEEDS = (4601, 4702, 4803)
PROBLEM_COUNT = 20
UNIT_TITLE = '万・億までの数と位取り'
PLACE_LABELS = {
    10_000_000: '千万',
    1_000_000: '百万',
    100_000: '十万',
    10_000: '万',
    1_000: '千',
    100: '百',
    10: '十',
    1: '一',
}
SKILLS = {
    'large-number-place-digit': {
        'title': '1億までの数の位取り',
        'answer_type': 'numeric',
        'format': 'place-value-digit',
    },
    'large-number-compose': {
        'title': '1億までの数の構成',
        'answer_type': 'numeric',
        'format': 'expanded-form',
    },
    'large-number-compare': {
        'title': '1億までの数の大小',
        'answer_type': 'accepted-set',
        'format': 'number-comparison',
    },
    'large-number-scale': {
        'title': '10倍・100倍・1000倍・10分の1',
        'answer_type': 'numeric',
        'format': 'place-value-scale',
    },
    'large-number-relative-units': {
        'title': '十・百・千・万を単位にした数',
        'answer_type': 'numeric',
        'format': 'relative-place-value',
    },
}


def independent_answer(problem):
    ptype = problem['type']
    if ptype == 'place-digit':
        return (problem['number'] // problem['place']) % 10
    if ptype == 'compose':
        return sum(problem['digits'][str(place)] * place for place in PLACE_LABELS)
    if ptype == 'compare':
        return '=' if problem['a'] == problem['b'] else ('<' if problem['a'] < problem['b'] else '>')
    if ptype == 'scale':
        if problem['factor'] == 10:
            return problem['number'] * 10
        if problem['factor'] == 100:
            return problem['number'] * 100
        if problem['factor'] == 1000:
            return problem['number'] * 1000
        if problem['factor'] == -10:
            return problem['number'] // 10
    if ptype == 'relative-units':
        return problem['unit'] * problem['count']
    raise ValueError(ptype)


def validate_problem(skill, problem):
    assert independent_answer(problem) == problem['answer']
    if skill == 'large-number-place-digit':
        assert problem['type'] == 'place-digit'
        assert 10_000 <= problem['number'] <= 99_999_999
        assert problem['place'] in PLACE_LABELS
    elif skill == 'large-number-compose':
        assert problem['type'] == 'compose'
        digits = problem['digits']
        assert set(digits) == {str(place) for place in PLACE_LABELS}
        assert 0 <= problem['answer'] <= 99_999_999
        assert problem['answer'] >= 10_000
        assert any(digits[str(place)] for place in PLACE_LABELS if place >= 10_000)
    elif skill == 'large-number-compare':
        assert problem['type'] == 'compare'
        assert 10_000 <= problem['a'] <= 100_000_000
        assert 10_000 <= problem['b'] <= 100_000_000
        assert problem['answer'] in ('<', '>', '=')
    elif skill == 'large-number-scale':
        assert problem['type'] == 'scale'
        assert problem['factor'] in (10, 100, 1000, -10)
        assert 1 <= problem['answer'] <= 100_000_000
        if problem['factor'] == -10:
            assert problem['number'] % 10 == 0
    elif skill == 'large-number-relative-units':
        assert problem['type'] == 'relative-units'
        assert problem['unit'] in (10, 100, 1000, 10_000)
        assert 2 <= problem['count'] <= 9999
        assert problem['answer'] <= 100_000_000
    else:
        raise ValueError(skill)


def generate(skill, seed, count=PROBLEM_COUNT):
    assert count == PROBLEM_COUNT
    assert seed in SEEDS
    rng = random.Random(seed + sum(ord(ch) for ch in skill) * 1009)
    problems = []

    if skill == 'large-number-place-digit':
        places = list(PLACE_LABELS) * 2 + list(PLACE_LABELS)[:4]
        rng.shuffle(places)
        used = set()
        for place in places:
            while True:
                number = rng.randint(10_000, 99_999_999)
                key = (number, place)
                if key not in used:
                    used.add(key)
                    break
            problems.append({'type': 'place-digit', 'number': number, 'place': place, 'answer': (number // place) % 10})
        counts = Counter(p['place'] for p in problems)
        assert all(2 <= counts[place] <= 3 for place in PLACE_LABELS)

    elif skill == 'large-number-compose':
        used = set()
        places = list(PLACE_LABELS)
        while len(problems) < count:
            digits = {str(place): rng.randint(0, 9) for place in places}
            if all(digits[str(place)] == 0 for place in places if place >= 10_000):
                continue
            answer = sum(digits[str(place)] * place for place in places)
            if answer < 10_000:
                continue
            key = tuple(digits[str(place)] for place in places)
            if key in used:
                continue
            used.add(key)
            problems.append({'type': 'compose', 'digits': digits, 'answer': answer})

    elif skill == 'large-number-compare':
        relations = ['='] * 4 + ['<'] * 8 + ['>'] * 8
        rng.shuffle(relations)
        used = set()
        for relation in relations:
            while True:
                if relation == '=':
                    a = b = rng.randint(10_000, 100_000_000)
                else:
                    x, y = rng.sample(range(10_000, 100_000_001), 2)
                    lo, hi = min(x, y), max(x, y)
                    a, b = (lo, hi) if relation == '<' else (hi, lo)
                if (a, b) not in used:
                    used.add((a, b))
                    break
            problems.append({'type': 'compare', 'a': a, 'b': b, 'answer': relation})
        assert Counter(p['answer'] for p in problems) == {'<': 8, '>': 8, '=': 4}

    elif skill == 'large-number-scale':
        factors = [10] * 5 + [100] * 5 + [1000] * 5 + [-10] * 5
        rng.shuffle(factors)
        used = set()
        for factor in factors:
            while True:
                if factor == 10:
                    number = rng.randint(1, 10_000_000)
                elif factor == 100:
                    number = rng.randint(1, 1_000_000)
                elif factor == 1000:
                    number = rng.randint(1, 100_000)
                else:
                    number = rng.randint(1, 10_000_000) * 10
                key = (number, factor)
                if key not in used:
                    used.add(key)
                    break
            answer = number // 10 if factor == -10 else number * factor
            problems.append({'type': 'scale', 'number': number, 'factor': factor, 'answer': answer})
        assert Counter(p['factor'] for p in problems) == {10: 5, 100: 5, 1000: 5, -10: 5}

    elif skill == 'large-number-relative-units':
        units = [10, 100, 1000, 10_000] * 5
        rng.shuffle(units)
        used = set()
        for unit in units:
            max_count = min(9999, 100_000_000 // unit)
            while True:
                amount = rng.randint(2, max_count)
                key = (unit, amount)
                if key not in used:
                    used.add(key)
                    break
            problems.append({'type': 'relative-units', 'unit': unit, 'count': amount, 'answer': unit * amount})
        assert Counter(p['unit'] for p in problems) == {10: 5, 100: 5, 1000: 5, 10_000: 5}
    else:
        raise ValueError(skill)

    assert len(problems) == count
    for problem in problems:
        validate_problem(skill, problem)
    return problems


def text_problem(problem):
    ptype = problem['type']
    if ptype == 'place-digit':
        return f"{problem['number']} の {PLACE_LABELS[problem['place']]}のくらいの数字は □"
    if ptype == 'compose':
        terms = []
        for place in PLACE_LABELS:
            digit = problem['digits'][str(place)]
            if digit:
                terms.append(str(digit * place))
        return ' + '.join(terms) + ' = □'
    if ptype == 'compare':
        return f"{problem['a']}  □  {problem['b']}"
    if ptype == 'scale':
        label = '10分の1' if problem['factor'] == -10 else f"{problem['factor']}倍"
        return f"{problem['number']} の {label} は □"
    if ptype == 'relative-units':
        return f"{problem['unit']} を {problem['count']}こ 集めた数は □"
    raise ValueError(ptype)


def draw_problem(c, x, y, number, problem, answer_mode=False):
    c.setFillColor(colors.black)
    font_size = 9 if problem['type'] == 'compose' else 10
    c.setFont(FONT, font_size)
    c.drawString(x, y, str(number))
    c.drawString(x + 23, y, text_problem(problem))
    if answer_mode:
        c.setFillColor(colors.red)
        c.drawString(x + 23, y - 16, f"こたえ：{independent_answer(problem)}")
        c.setFillColor(colors.black)


def render_pdf(path, title, problems):
    c = canvas.Canvas(str(path), pagesize=A4)
    w, h = A4
    for page_index, answer_mode in enumerate((False, True)):
        c.setFillColor(colors.black)
        c.setFont(FONT, 17)
        c.drawString(45, h - 55, title)
        c.setFont(FONT, 10)
        c.drawRightString(w - 45, h - 52, 'こたえ' if answer_mode else 'もんだい')
        c.drawString(45, h - 78, 'なまえ：____________________________')
        for index, problem in enumerate(problems):
            col = index // 10
            row = index % 10
            x = 48 + col * 274
            y = h - 120 - row * 63
            draw_problem(c, x, y, index + 1, problem, answer_mode)
        if page_index == 0:
            c.showPage()
    c.save()


def publish(repo_root):
    root = Path(repo_root)
    catalog_path = root / 'worksheets' / 'catalog.json'
    catalog = json.loads(catalog_path.read_text(encoding='utf-8'))
    output_dir = root / 'materials' / 'worksheets' / 'elementary' / 'grade-03'
    output_dir.mkdir(parents=True, exist_ok=True)
    existing_ids = {entry['id'] for entry in catalog}
    published = 0

    for skill, spec in SKILLS.items():
        for variant, seed in enumerate(SEEDS, start=1):
            wid = f'e3-{skill}-{variant:02d}'
            if wid in existing_ids:
                continue
            problems = generate(skill, seed)
            content_hash = normalized_hash(problems)
            assert all(entry['content_hash'] != content_hash for entry in catalog), f'duplicate worksheet content: {wid}'
            filename = f'{wid}.pdf'
            render_pdf(output_dir / filename, spec['title'], problems)
            catalog.append({
                'id': wid,
                'school_level': 'elementary',
                'grade': 3,
                'subject': '算数',
                'unit': UNIT_TITLE,
                'skill': skill,
                'problem_count': PROBLEM_COUNT,
                'seed': seed,
                'variant': variant,
                'title': f"{spec['title']} {variant:02d}",
                'description': '小学3年で扱う万の単位・1億までの整数・10倍/100倍/1000倍/10分の1・数の相対的な大きさを反復するプリントです。2ページ目は同じ問題配置に赤字で解答を加えています。',
                'url': f'materials/worksheets/elementary/grade-03/{filename}',
                'content_hash': content_hash,
                'difficulty': 'basic',
                'worksheet_series': 'focused',
                'worksheet_format': spec['format'],
                'answer_type': spec['answer_type'],
            })
            existing_ids.add(wid)
            published += 1

    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} grade-3 large-number worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
