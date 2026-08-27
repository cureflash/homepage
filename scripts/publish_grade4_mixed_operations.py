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

SKILL = 'mixed-four-operations'
TITLE = '四則混合計算'
UNIT_TITLE = '計算のきまり'
SEEDS = (8604, 8705, 8806)
PROBLEM_COUNT = 20
PATTERNS = (
    'all-four-no-paren-a',
    'all-four-no-paren-b',
    'all-four-paren-a',
    'all-four-paren-b',
)


def independent_answer(problem):
    a, b, c, d, e = (
        problem['a'], problem['b'], problem['c'], problem['d'], problem['e']
    )
    pattern = problem['pattern']
    if pattern == 'all-four-no-paren-a':
        assert d % e == 0
        return a + b * c - d // e
    if pattern == 'all-four-no-paren-b':
        assert c % d == 0
        return a * b + c // d - e
    if pattern == 'all-four-paren-a':
        assert d % e == 0
        return (a + b) * c - d // e
    if pattern == 'all-four-paren-b':
        assert a % b == 0
        return a // b + (c - d) * e
    raise AssertionError(f'unknown pattern: {pattern}')


def validate_problem(problem):
    assert problem['pattern'] in PATTERNS
    for name in ('a', 'b', 'c', 'd', 'e'):
        assert isinstance(problem[name], int) and problem[name] > 0
    answer = independent_answer(problem)
    assert answer == problem['answer']
    assert 0 <= answer <= 999
    if problem['pattern'] in ('all-four-no-paren-a', 'all-four-paren-a'):
        assert problem['d'] % problem['e'] == 0
    if problem['pattern'] == 'all-four-no-paren-b':
        assert problem['c'] % problem['d'] == 0
    if problem['pattern'] == 'all-four-paren-b':
        assert problem['a'] % problem['b'] == 0
        assert problem['c'] > problem['d']


def _candidate(rng, pattern):
    if pattern == 'all-four-no-paren-a':
        a = rng.randint(10, 80)
        b = rng.randint(2, 12)
        c = rng.randint(2, 9)
        e = rng.randint(2, 9)
        d = e * rng.randint(1, 12)
    elif pattern == 'all-four-no-paren-b':
        a = rng.randint(2, 12)
        b = rng.randint(2, 9)
        d = rng.randint(2, 9)
        c = d * rng.randint(1, 12)
        e = rng.randint(1, min(30, a * b + c // d))
    elif pattern == 'all-four-paren-a':
        a = rng.randint(2, 25)
        b = rng.randint(2, 25)
        c = rng.randint(2, 9)
        e = rng.randint(2, 9)
        d = e * rng.randint(1, 12)
    elif pattern == 'all-four-paren-b':
        b = rng.randint(2, 9)
        a = b * rng.randint(1, 12)
        d = rng.randint(1, 12)
        c = rng.randint(d + 1, min(30, d + 15))
        e = rng.randint(2, 9)
    else:
        raise AssertionError(pattern)

    problem = {'pattern': pattern, 'a': a, 'b': b, 'c': c, 'd': d, 'e': e}
    problem['answer'] = independent_answer(problem)
    if not 0 <= problem['answer'] <= 999:
        return None
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
        key = (
            problem['pattern'], problem['a'], problem['b'],
            problem['c'], problem['d'], problem['e'],
        )
        if key in seen:
            continue
        seen.add(key)
        targets[pattern] -= 1
        problems.append(problem)
    rng.shuffle(problems)
    return problems


def problem_text(problem):
    a, b, c, d, e = (
        problem['a'], problem['b'], problem['c'], problem['d'], problem['e']
    )
    pattern = problem['pattern']
    if pattern == 'all-four-no-paren-a':
        return f'{a} + {b} × {c} − {d} ÷ {e} = □'
    if pattern == 'all-four-no-paren-b':
        return f'{a} × {b} + {c} ÷ {d} − {e} = □'
    if pattern == 'all-four-paren-a':
        return f'（{a} + {b}）× {c} − {d} ÷ {e} = □'
    if pattern == 'all-four-paren-b':
        return f'{a} ÷ {b} +（{c} − {d}）× {e} = □'
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
        c.setFont(FONT, 12)
        for index, problem in enumerate(problems):
            x = 45 + (index // 10) * 275
            y = height - 120 - (index % 10) * 63
            c.setFillColor(colors.black)
            c.drawString(x, y, str(index + 1))
            c.drawString(x + 24, y, problem_text(problem))
            if answer_mode:
                c.setFillColor(colors.red)
                c.drawString(x + 24, y - 20, f"こたえ：{independent_answer(problem)}")
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
            'description': '1つの式にたし算・ひき算・かけ算・わり算を組み合わせた20問です。計算順序とかっこを使い分け、2ページ目は同じ問題配置に赤字で解答を加えています。',
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
    print(f'published {published} grade-4 mixed-operations worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
