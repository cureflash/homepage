import json
import random
import sys
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas

try:
    from scripts.worksheet_factory import FONT, normalized_hash, validate_catalog
except ModuleNotFoundError:
    from worksheet_factory import FONT, normalized_hash, validate_catalog

SKILL = 'order-of-operations-parentheses'
TITLE = '計算の順序・かっこ付き計算'
UNIT_TITLE = '計算のきまり'
SEEDS = (8301, 8402, 8503)
PROBLEM_COUNT = 20
PATTERNS = ('mul-before-add', 'div-before-sub', 'paren-mul', 'paren-div')


def independent_answer(problem):
    a, b, c = problem['a'], problem['b'], problem['c']
    pattern = problem['pattern']
    if pattern == 'mul-before-add':
        return a + b * c
    if pattern == 'div-before-sub':
        assert b % c == 0
        return a - b // c
    if pattern == 'paren-mul':
        return (a + b) * c
    if pattern == 'paren-div':
        assert (a + b) % c == 0
        return (a + b) // c
    raise AssertionError(f'unknown pattern: {pattern}')


def validate_problem(problem):
    assert problem['pattern'] in PATTERNS
    assert 1 <= problem['a'] <= 99
    assert 1 <= problem['b'] <= 99
    assert 2 <= problem['c'] <= 9
    answer = independent_answer(problem)
    assert answer == problem['answer']
    assert 0 <= answer <= 999
    if problem['pattern'] == 'div-before-sub':
        assert problem['b'] % problem['c'] == 0
        assert problem['a'] >= problem['b'] // problem['c']
    if problem['pattern'] == 'paren-div':
        assert (problem['a'] + problem['b']) % problem['c'] == 0


def _candidate(rng, pattern):
    if pattern == 'mul-before-add':
        a = rng.randint(5, 60)
        b = rng.randint(2, 12)
        c = rng.randint(2, 9)
    elif pattern == 'div-before-sub':
        c = rng.randint(2, 9)
        q = rng.randint(2, 12)
        b = c * q
        a = rng.randint(q, min(99, q + 60))
    elif pattern == 'paren-mul':
        a = rng.randint(2, 30)
        b = rng.randint(2, 30)
        c = rng.randint(2, 9)
    elif pattern == 'paren-div':
        c = rng.randint(2, 9)
        q = rng.randint(3, 18)
        total = c * q
        a = rng.randint(1, total - 1)
        b = total - a
        if a > 99 or b > 99:
            return None
    else:
        raise AssertionError(pattern)
    problem = {'pattern': pattern, 'a': a, 'b': b, 'c': c}
    problem['answer'] = independent_answer(problem)
    validate_problem(problem)
    return problem


def generate(seed):
    rng = random.Random(seed)
    problems, seen = [], set()
    targets = {pattern: PROBLEM_COUNT // len(PATTERNS) for pattern in PATTERNS}
    while len(problems) < PROBLEM_COUNT:
        pattern = PATTERNS[len(problems) % len(PATTERNS)]
        if targets[pattern] <= 0:
            pattern = next(name for name, remaining in targets.items() if remaining > 0)
        problem = _candidate(rng, pattern)
        if problem is None:
            continue
        key = (problem['pattern'], problem['a'], problem['b'], problem['c'])
        if key in seen:
            continue
        seen.add(key)
        targets[pattern] -= 1
        problems.append(problem)
    rng.shuffle(problems)
    return problems


def problem_text(problem):
    a, b, c = problem['a'], problem['b'], problem['c']
    pattern = problem['pattern']
    if pattern == 'mul-before-add':
        return f'{a} + {b} × {c} = □'
    if pattern == 'div-before-sub':
        return f'{a} − {b} ÷ {c} = □'
    if pattern == 'paren-mul':
        return f'（{a} + {b}）× {c} = □'
    if pattern == 'paren-div':
        return f'（{a} + {b}）÷ {c} = □'
    raise AssertionError(pattern)


def render_pdf(path, title, problems):
    c = canvas.Canvas(str(path), pagesize=A4)
    width, height = A4
    for answer_mode in (False, True):
        c.setFillColor(colors.black)
        c.setFont(FONT, 18)
        c.drawString(45, height - 55, title)
        c.setFont(FONT, 10)
        c.drawRightString(width - 45, height - 52, 'こたえ' if answer_mode else 'もんだい')
        c.drawString(45, height - 78, 'なまえ：____________________________')
        c.setFont(FONT, 14)
        for index, problem in enumerate(problems):
            x = 55 + (index // 10) * 260
            y = height - 120 - (index % 10) * 63
            c.setFillColor(colors.black)
            c.drawString(x, y, str(index + 1))
            c.drawString(x + 28, y, problem_text(problem))
            if answer_mode:
                c.setFillColor(colors.red)
                c.drawString(x + 28, y - 20, f"こたえ：{independent_answer(problem)}")
        if not answer_mode:
            c.showPage()
    c.save()


def publish(repo_root):
    root = Path(repo_root)
    catalog_path = root / 'worksheets' / 'catalog.json'
    catalog = json.loads(catalog_path.read_text(encoding='utf-8'))
    out = root / 'materials' / 'worksheets' / 'elementary' / 'grade-04'
    out.mkdir(parents=True, exist_ok=True)
    existing = {entry['id'] for entry in catalog}
    published = 0
    for variant, seed in enumerate(SEEDS, 1):
        worksheet_id = f'e4-{SKILL}-{variant:02d}'
        if worksheet_id in existing:
            continue
        problems = generate(seed)
        content_hash = normalized_hash(problems)
        assert all(entry['content_hash'] != content_hash for entry in catalog)
        filename = f'{worksheet_id}.pdf'
        render_pdf(out / filename, TITLE, problems)
        catalog.append({
            'id': worksheet_id,
            'school_level': 'elementary',
            'grade': 4,
            'subject': '算数',
            'unit': UNIT_TITLE,
            'skill': SKILL,
            'problem_count': PROBLEM_COUNT,
            'seed': seed,
            'variant': variant,
            'title': f'{TITLE} {variant:02d}',
            'description': 'かけ算・わり算を先に計算する式と、かっこの中を先に計算する式を20問反復します。2ページ目は同じ問題配置に赤字で解答を加えています。',
            'url': f'materials/worksheets/elementary/grade-04/{filename}',
            'content_hash': content_hash,
            'difficulty': 'basic',
            'worksheet_series': 'focused',
            'worksheet_format': 'expression-horizontal',
            'answer_type': 'numeric',
        })
        existing.add(worksheet_id)
        published += 1
    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} grade-4 order-of-operations worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
