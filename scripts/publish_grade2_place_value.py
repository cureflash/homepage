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


SEEDS = (2201, 2302, 2403)
PROBLEM_COUNT = 20
SKILLS = {
    'place-digit-4digit': {
        'title': '4桁の数の位取り',
        'answer_type': 'numeric',
        'format': 'place-value-digit',
    },
    'expanded-form-4digit': {
        'title': '4桁の数の構成',
        'answer_type': 'numeric',
        'format': 'expanded-form',
    },
    'compare-to-10000': {
        'title': '1万までの数の大小',
        'answer_type': 'accepted-set',
        'format': 'number-comparison',
    },
}
PLACE_LABELS = {1000: '千', 100: '百', 10: '十', 1: '一'}


def independent_answer(problem):
    if problem['type'] == 'place-digit':
        return (problem['number'] // problem['place']) % 10
    if problem['type'] == 'expanded-form':
        return problem['thousands'] * 1000 + problem['hundreds'] * 100 + problem['tens'] * 10 + problem['ones']
    if problem['type'] == 'compare':
        if problem['a'] == problem['b']:
            return '='
        return '<' if problem['a'] < problem['b'] else '>'
    raise ValueError(problem['type'])


def validate_problem(skill, problem):
    assert independent_answer(problem) == problem['answer']
    if skill == 'place-digit-4digit':
        assert problem['type'] == 'place-digit'
        assert 1000 <= problem['number'] <= 9999
        assert problem['place'] in PLACE_LABELS
    elif skill == 'expanded-form-4digit':
        assert problem['type'] == 'expanded-form'
        assert 1 <= problem['thousands'] <= 9
        assert all(0 <= problem[key] <= 9 for key in ('hundreds', 'tens', 'ones'))
        assert 1000 <= problem['answer'] <= 9999
    elif skill == 'compare-to-10000':
        assert problem['type'] == 'compare'
        assert 1000 <= problem['a'] <= 10000 and 1000 <= problem['b'] <= 10000
        assert problem['answer'] in ('<', '>', '=')
    else:
        raise ValueError(skill)


def generate(skill, seed, count=PROBLEM_COUNT):
    assert count == PROBLEM_COUNT
    assert seed in SEEDS
    rng = random.Random(seed + sum(ord(ch) for ch in skill) * 1009)
    problems = []

    if skill == 'place-digit-4digit':
        places = [1000, 100, 10, 1] * 5
        rng.shuffle(places)
        used = set()
        for place in places:
            while True:
                number = rng.randint(1000, 9999)
                key = (number, place)
                if key not in used:
                    used.add(key)
                    break
            problems.append({'type': 'place-digit', 'number': number, 'place': place, 'answer': (number // place) % 10})
        assert Counter(p['place'] for p in problems) == {1000: 5, 100: 5, 10: 5, 1: 5}

    elif skill == 'expanded-form-4digit':
        used = set()
        while len(problems) < count:
            digits = (rng.randint(1, 9), rng.randint(0, 9), rng.randint(0, 9), rng.randint(0, 9))
            if digits in used:
                continue
            used.add(digits)
            th, hu, te, on = digits
            problems.append({
                'type': 'expanded-form', 'thousands': th, 'hundreds': hu, 'tens': te, 'ones': on,
                'answer': th * 1000 + hu * 100 + te * 10 + on,
            })

    elif skill == 'compare-to-10000':
        relations = ['='] * 4 + ['<'] * 8 + ['>'] * 8
        rng.shuffle(relations)
        used = set()
        for relation in relations:
            while True:
                if relation == '=':
                    a = b = rng.randint(1000, 10000)
                else:
                    x, y = rng.sample(range(1000, 10001), 2)
                    lo, hi = min(x, y), max(x, y)
                    a, b = (lo, hi) if relation == '<' else (hi, lo)
                key = (a, b)
                if key not in used:
                    used.add(key)
                    break
            problems.append({'type': 'compare', 'a': a, 'b': b, 'answer': relation})
        assert Counter(p['answer'] for p in problems) == {'<': 8, '>': 8, '=': 4}
    else:
        raise ValueError(skill)

    assert len(problems) == count
    for problem in problems:
        validate_problem(skill, problem)
    return problems


def text_problem(problem):
    if problem['type'] == 'place-digit':
        return f"{problem['number']} の {PLACE_LABELS[problem['place']]}のくらいの数字は □"
    if problem['type'] == 'expanded-form':
        return f"{problem['thousands'] * 1000} + {problem['hundreds'] * 100} + {problem['tens'] * 10} + {problem['ones']} = □"
    if problem['type'] == 'compare':
        return f"{problem['a']}  □  {problem['b']}"
    raise ValueError(problem['type'])


def draw_problem(c, x, y, number, problem, answer_mode=False):
    c.setFillColor(colors.black)
    c.setFont(FONT, 11 if problem['type'] != 'expanded-form' else 10)
    c.drawString(x, y, str(number))
    c.drawString(x + 25, y, text_problem(problem))
    if answer_mode:
        c.setFillColor(colors.red)
        c.drawString(x + 25, y - 16, f"こたえ：{independent_answer(problem)}")
        c.setFillColor(colors.black)


def render_pdf(path, title, problems):
    c = canvas.Canvas(str(path), pagesize=A4)
    w, h = A4
    for page_index, answer_mode in enumerate((False, True)):
        c.setFillColor(colors.black)
        c.setFont(FONT, 18)
        c.drawString(45, h - 55, title)
        c.setFont(FONT, 10)
        c.drawRightString(w - 45, h - 52, 'こたえ' if answer_mode else 'もんだい')
        c.drawString(45, h - 78, 'なまえ：____________________________')
        for index, problem in enumerate(problems):
            col = index // 10
            row = index % 10
            x = 50 + col * 272
            y = h - 120 - row * 63
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

    for skill, spec in SKILLS.items():
        for variant, seed in enumerate(SEEDS, start=1):
            wid = f'e2-{skill}-{variant:02d}'
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
                'grade': 2,
                'subject': '算数',
                'unit': '1000・10000までの数',
                'skill': skill,
                'problem_count': PROBLEM_COUNT,
                'seed': seed,
                'variant': variant,
                'title': f"{spec['title']} {variant:02d}",
                'description': '小学2年で扱う4位数までの位取り・数の構成・1万までの大小を反復するプリントです。2ページ目は同じ問題配置に赤字で解答を加えています。',
                'url': f'materials/worksheets/elementary/grade-02/{filename}',
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
    print(f'published {published} grade-2 place-value worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
