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


SEEDS = (2801, 2902, 3003)
PROBLEM_COUNT = 24
SKILL = 'grade2-review'
TITLE = '小学2年 算数 総復習'
FORMAT = 'grade2-review-mixed'
DISTRIBUTION = {
    'add': 4,
    'sub': 4,
    'mul': 6,
    'place-digit': 3,
    'compare': 3,
    'fraction-read': 2,
    'fraction-whole': 2,
}
PLACE_LABELS = {1000: '千', 100: '百', 10: '十', 1: '一'}


def independent_answer(problem):
    kind = problem['type']
    if kind == 'add':
        return problem['a'] + problem['b']
    if kind == 'sub':
        return problem['a'] - problem['b']
    if kind == 'mul':
        return problem['a'] * problem['b']
    if kind == 'place-digit':
        return (problem['number'] // problem['place']) % 10
    if kind == 'compare':
        if problem['a'] == problem['b']:
            return '='
        return '<' if problem['a'] < problem['b'] else '>'
    if kind == 'fraction-read':
        return f"1/{problem['parts']}"
    if kind == 'fraction-whole':
        return problem['parts']
    raise ValueError(kind)


def validate_problem(problem):
    kind = problem['type']
    assert independent_answer(problem) == problem['answer']
    if kind == 'add':
        assert 10 <= problem['a'] <= 99 and 10 <= problem['b'] <= 99
        assert problem['answer'] <= 100
    elif kind == 'sub':
        assert 10 <= problem['b'] < problem['a'] <= 99
    elif kind == 'mul':
        assert 2 <= problem['a'] <= 9 and 1 <= problem['b'] <= 9
    elif kind == 'place-digit':
        assert 1000 <= problem['number'] <= 9999 and problem['place'] in PLACE_LABELS
    elif kind == 'compare':
        assert 1000 <= problem['a'] <= 10000 and 1000 <= problem['b'] <= 10000
        assert problem['answer'] in ('<', '>', '=')
    elif kind in ('fraction-read', 'fraction-whole'):
        assert problem['parts'] in (2, 3)
        assert problem['total'] % problem['parts'] == 0
        assert problem['part_size'] * problem['parts'] == problem['total']
    else:
        raise ValueError(kind)


def _add_candidates(carry):
    out = []
    for a in range(10, 100):
        for b in range(10, 100):
            if a + b > 100:
                continue
            has_carry = (a % 10) + (b % 10) >= 10
            if has_carry == carry:
                out.append((a, b))
    return out


def _sub_candidates(borrow):
    out = []
    for a in range(11, 100):
        for b in range(10, a):
            has_borrow = (a % 10) < (b % 10)
            if has_borrow == borrow:
                out.append((a, b))
    return out


def generate(seed, count=PROBLEM_COUNT):
    assert seed in SEEDS
    assert count == PROBLEM_COUNT
    rng = random.Random(seed * 1009 + 2026)
    problems = []

    for carry in (False, True):
        for a, b in rng.sample(_add_candidates(carry), 2):
            problems.append({'type': 'add', 'a': a, 'b': b, 'answer': a + b, 'carry': carry})

    for borrow in (False, True):
        for a, b in rng.sample(_sub_candidates(borrow), 2):
            problems.append({'type': 'sub', 'a': a, 'b': b, 'answer': a - b, 'borrow': borrow})

    stages = rng.sample(range(2, 10), 6)
    for stage in stages:
        multiplier = rng.randint(1, 9)
        problems.append({'type': 'mul', 'a': stage, 'b': multiplier, 'answer': stage * multiplier})

    places = rng.sample(list(PLACE_LABELS), 3)
    for place in places:
        number = rng.randint(1000, 9999)
        problems.append({'type': 'place-digit', 'number': number, 'place': place, 'answer': (number // place) % 10})

    relations = ['<', '>', '=']
    rng.shuffle(relations)
    for relation in relations:
        if relation == '=':
            a = b = rng.randint(1000, 10000)
        else:
            x, y = rng.sample(range(1000, 10001), 2)
            lo, hi = min(x, y), max(x, y)
            a, b = (lo, hi) if relation == '<' else (hi, lo)
        problems.append({'type': 'compare', 'a': a, 'b': b, 'answer': relation})

    for parts in (2, 3):
        total = parts * rng.randint(2, 20)
        problems.append({
            'type': 'fraction-read', 'parts': parts, 'total': total,
            'part_size': total // parts, 'answer': f'1/{parts}',
        })

    for parts in (2, 3):
        total = parts * rng.randint(2, 20)
        problems.append({
            'type': 'fraction-whole', 'parts': parts, 'total': total,
            'part_size': total // parts, 'answer': parts,
        })

    rng.shuffle(problems)
    assert len(problems) == count
    assert Counter(problem['type'] for problem in problems) == DISTRIBUTION
    assert Counter(problem.get('carry') for problem in problems if problem['type'] == 'add') == {False: 2, True: 2}
    assert Counter(problem.get('borrow') for problem in problems if problem['type'] == 'sub') == {False: 2, True: 2}
    assert len({problem['a'] for problem in problems if problem['type'] == 'mul'}) == 6
    assert {problem['parts'] for problem in problems if problem['type'] == 'fraction-read'} == {2, 3}
    assert {problem['parts'] for problem in problems if problem['type'] == 'fraction-whole'} == {2, 3}
    for problem in problems:
        validate_problem(problem)
    return problems


def problem_lines(problem):
    kind = problem['type']
    if kind == 'add':
        return [f"{problem['a']} + {problem['b']} = □"]
    if kind == 'sub':
        return [f"{problem['a']} - {problem['b']} = □"]
    if kind == 'mul':
        return [f"{problem['a']} × {problem['b']} = □"]
    if kind == 'place-digit':
        return [f"{problem['number']} の {PLACE_LABELS[problem['place']]}のくらいの数字は □"]
    if kind == 'compare':
        return [f"{problem['a']}  □  {problem['b']}"]
    if kind == 'fraction-read':
        return [
            f"{problem['total']}こを {problem['parts']}とうぶん。",
            f"1つぶん（{problem['part_size']}こ）は、もとの □。",
        ]
    if kind == 'fraction-whole':
        return [
            f"{problem['total']}こを {problem['parts']}とうぶん。",
            f"1つぶんを □こ集めるともとにもどる。",
        ]
    raise ValueError(kind)


def draw_problem(c, x, y, number, problem, answer_mode=False):
    c.setFillColor(colors.black)
    c.setFont(FONT, 9.5)
    c.drawString(x, y, str(number))
    lines = problem_lines(problem)
    for line_index, line in enumerate(lines):
        c.drawString(x + 22, y - line_index * 14, line)
    if answer_mode:
        c.setFillColor(colors.red)
        answer_y = y - (len(lines) * 14 + 2)
        c.drawString(x + 22, answer_y, f"こたえ：{independent_answer(problem)}")
        c.setFillColor(colors.black)


def render_pdf(path, problems):
    c = canvas.Canvas(str(path), pagesize=A4)
    w, h = A4
    for page_index, answer_mode in enumerate((False, True)):
        c.setFillColor(colors.black)
        c.setFont(FONT, 18)
        c.drawString(45, h - 55, TITLE)
        c.setFont(FONT, 10)
        c.drawRightString(w - 45, h - 52, 'こたえ' if answer_mode else 'もんだい')
        c.drawString(45, h - 78, 'なまえ：____________________________')
        for index, problem in enumerate(problems):
            col = index // 12
            row = index % 12
            x = 42 + col * 278
            y = h - 115 - row * 55
            draw_problem(c, x, y, index + 1, problem, answer_mode)
        if page_index == 0:
            c.showPage()
    c.save()


def publish(repo_root):
    root = Path(repo_root)
    catalog_path = root / 'worksheets' / 'catalog.json'
    catalog = json.loads(catalog_path.read_text(encoding='utf-8'))
    output_dir = root / 'materials' / 'worksheets' / 'elementary' / 'grade-02'
    output_dir.mkdir(parents=True, exist_ok=True)
    existing_ids = {entry['id'] for entry in catalog}
    published = 0

    for variant, seed in enumerate(SEEDS, start=1):
        wid = f'e2-{SKILL}-{variant:02d}'
        if wid in existing_ids:
            continue
        problems = generate(seed)
        content_hash = normalized_hash(problems)
        assert all(entry['content_hash'] != content_hash for entry in catalog), f'duplicate worksheet content: {wid}'
        filename = f'{wid}.pdf'
        render_pdf(output_dir / filename, problems)
        catalog.append({
            'id': wid,
            'school_level': 'elementary',
            'grade': 2,
            'subject': '算数',
            'unit': '小学2年 総復習',
            'skill': SKILL,
            'problem_count': PROBLEM_COUNT,
            'seed': seed,
            'variant': variant,
            'title': f'{TITLE} {variant:02d}',
            'description': '小学2年で学ぶ2桁の加減、九九、4桁の位取り、1万までの大小、1/2・1/3の簡単な分数を1枚で横断復習する24問プリントです。2ページ目は同じ問題配置に赤字で解答を加えています。',
            'url': f'materials/worksheets/elementary/grade-02/{filename}',
            'content_hash': content_hash,
            'difficulty': 'basic',
            'worksheet_series': 'review',
            'worksheet_format': FORMAT,
            'answer_type': 'accepted-set',
        })
        existing_ids.add(wid)
        published += 1

    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} grade-2 review worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
