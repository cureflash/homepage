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

SEEDS = (11101, 11202, 11303)
PROBLEM_COUNT = 20
SKILLS = {
    'signed-addition': ('正負の数の加法', 'add'),
    'signed-subtraction': ('正負の数の減法', 'sub'),
    'signed-multiplication': ('正負の数の乗法', 'mul'),
    'signed-division': ('正負の数の除法', 'div'),
}


def independent_answer(problem):
    t = problem['type']
    a, b = problem['a'], problem['b']
    if t == 'add': return a + b
    if t == 'sub': return a - b
    if t == 'mul': return a * b
    if t == 'div':
        assert b != 0 and a % b == 0
        return a // b
    raise ValueError(t)


def validate_problem(problem):
    assert problem['type'] in {'add','sub','mul','div'}
    assert isinstance(problem['a'], int) and isinstance(problem['b'], int)
    if problem['type'] == 'div':
        assert problem['b'] != 0 and problem['a'] % problem['b'] == 0
    assert independent_answer(problem) == problem['answer']
    assert -400 <= problem['answer'] <= 400


def _nonzero(rng, lo=-20, hi=20):
    while True:
        value = rng.randint(lo, hi)
        if value != 0:
            return value


def generate(skill, seed):
    title, kind = SKILLS[skill]
    rng = random.Random(seed + sum(ord(c) for c in skill) * 1009)
    problems, seen = [], set()
    while len(problems) < PROBLEM_COUNT:
        if kind == 'add':
            a, b = rng.randint(-30, 30), rng.randint(-30, 30)
        elif kind == 'sub':
            a, b = rng.randint(-30, 30), rng.randint(-30, 30)
        elif kind == 'mul':
            a, b = _nonzero(rng, -15, 15), _nonzero(rng, -15, 15)
        elif kind == 'div':
            b = _nonzero(rng, -12, 12)
            q = _nonzero(rng, -15, 15)
            a = b * q
        else:
            raise ValueError(kind)
        key = (a, b)
        if key in seen:
            continue
        seen.add(key)
        problem = {'type': kind, 'a': a, 'b': b}
        problem['answer'] = independent_answer(problem)
        validate_problem(problem)
        problems.append(problem)
    return problems


def fmt(n):
    return f'({n})' if n < 0 else str(n)


def problem_text(problem):
    op = {'add': '+', 'sub': '−', 'mul': '×', 'div': '÷'}[problem['type']]
    return f"{fmt(problem['a'])} {op} {fmt(problem['b'])} = □"


def render_pdf(path, title, problems):
    c = canvas.Canvas(str(path), pagesize=A4)
    w, h = A4
    for answer_mode in (False, True):
        c.setFillColor(colors.black)
        c.setFont(FONT, 18)
        c.drawString(45, h - 55, title)
        c.setFont(FONT, 10)
        c.drawRightString(w - 45, h - 52, '解答' if answer_mode else '問題')
        c.drawString(45, h - 78, '名前：____________________________')
        c.setFont(FONT, 12)
        for index, problem in enumerate(problems):
            x = 45 + (index // 10) * 275
            y = h - 120 - (index % 10) * 63
            c.setFillColor(colors.black)
            c.drawString(x, y, str(index + 1))
            c.drawString(x + 24, y, problem_text(problem))
            if answer_mode:
                c.setFillColor(colors.red)
                c.drawString(x + 24, y - 20, f"答え：{independent_answer(problem)}")
        if not answer_mode:
            c.showPage()
    c.save()


def publish(repo_root):
    root = Path(repo_root)
    catalog_path = root / 'worksheets' / 'catalog.json'
    catalog = json.loads(catalog_path.read_text(encoding='utf-8'))
    out = root / 'materials' / 'worksheets' / 'junior-high' / 'grade-01'
    out.mkdir(parents=True, exist_ok=True)
    existing = {entry['id'] for entry in catalog}
    published = 0
    for skill, (title, kind) in SKILLS.items():
        for variant, seed in enumerate(SEEDS, 1):
            wid = f'jh1-{skill}-{variant:02d}'
            if wid in existing:
                continue
            problems = generate(skill, seed)
            content_hash = normalized_hash(problems)
            assert all(entry['content_hash'] != content_hash for entry in catalog)
            filename = f'{wid}.pdf'
            render_pdf(out / filename, title, problems)
            catalog.append({
                'id': wid,
                'school_level': 'junior-high',
                'grade': 1,
                'subject': '数学',
                'unit': '正の数・負の数',
                'skill': skill,
                'problem_count': PROBLEM_COUNT,
                'seed': seed,
                'variant': variant,
                'title': f'{title} {variant:02d}',
                'description': f'中学1年の「{title}」を20問反復するプリントです。2ページ目は同じ問題配置に赤字で解答を加えています。',
                'url': f'materials/worksheets/junior-high/grade-01/{filename}',
                'content_hash': content_hash,
                'difficulty': 'basic',
                'worksheet_series': 'focused',
                'worksheet_format': 'expression-horizontal',
                'answer_type': 'numeric',
            })
            existing.add(wid)
            published += 1
    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} junior-high grade-1 signed-operation worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
