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

SEEDS = (12404, 12505, 12606)
PROBLEM_COUNT = 20
SKILLS = {
    'substitution': {'title': '式への代入', 'unit': '文字と式', 'format': 'algebra-substitution'},
    'linear-equation-basic': {'title': '一元一次方程式 基本', 'unit': '一元一次方程式', 'format': 'linear-equation'},
    'linear-equation-transposition': {'title': '移項だけの反復', 'unit': '一元一次方程式', 'format': 'linear-equation-transposition'},
    'linear-equation-parentheses': {'title': 'かっこを含む一次方程式', 'unit': '一元一次方程式', 'format': 'linear-equation-parentheses'},
}


def _nonzero(rng, lo=-9, hi=9):
    while True:
        value = rng.randint(lo, hi)
        if value != 0:
            return value


def independent_answer(problem):
    kind = problem['type']
    if kind == 'substitution':
        return problem['a'] * problem['x'] + problem['b']
    if kind == 'linear-basic':
        assert problem['a'] != 0
        assert (problem['c'] - problem['b']) % problem['a'] == 0
        return (problem['c'] - problem['b']) // problem['a']
    if kind == 'transposition':
        return problem['c'] - problem['b']
    if kind == 'parentheses':
        assert problem['a'] != 0 and problem['c'] % problem['a'] == 0
        return problem['c'] // problem['a'] - problem['b']
    raise ValueError(kind)


def validate_problem(skill, problem):
    assert independent_answer(problem) == problem['answer']
    assert -30 <= problem['answer'] <= 30
    if skill == 'substitution':
        assert problem['type'] == 'substitution' and problem['a'] != 0
    elif skill == 'linear-equation-basic':
        assert problem['type'] == 'linear-basic' and problem['a'] not in {0, 1, -1}
    elif skill == 'linear-equation-transposition':
        assert problem['type'] == 'transposition' and problem['b'] != 0
    elif skill == 'linear-equation-parentheses':
        assert problem['type'] == 'parentheses' and problem['a'] not in {0, 1, -1} and problem['b'] != 0
    else:
        raise ValueError(skill)


def generate(skill, seed):
    assert skill in SKILLS and seed in SEEDS
    rng = random.Random(seed + sum(ord(c) for c in skill) * 1009)
    problems, seen = [], set()
    while len(problems) < PROBLEM_COUNT:
        if skill == 'substitution':
            a = _nonzero(rng, -8, 8); x = rng.randint(-9, 9); b = rng.randint(-12, 12)
            problem = {'type': 'substitution', 'a': a, 'b': b, 'x': x}
        elif skill == 'linear-equation-basic':
            a = rng.choice((-8,-7,-6,-5,-4,-3,-2,2,3,4,5,6,7,8))
            x = rng.randint(-12, 12); b = rng.randint(-15, 15); c = a * x + b
            problem = {'type': 'linear-basic', 'a': a, 'b': b, 'c': c}
        elif skill == 'linear-equation-transposition':
            x = rng.randint(-20, 20); b = _nonzero(rng, -18, 18); c = x + b
            problem = {'type': 'transposition', 'b': b, 'c': c}
        elif skill == 'linear-equation-parentheses':
            a = rng.choice((-6,-5,-4,-3,-2,2,3,4,5,6)); b = _nonzero(rng, -10, 10); x = rng.randint(-12, 12); c = a * (x + b)
            problem = {'type': 'parentheses', 'a': a, 'b': b, 'c': c}
        else:
            raise ValueError(skill)
        problem['answer'] = independent_answer(problem)
        if not -30 <= problem['answer'] <= 30:
            continue
        key = json.dumps(problem, ensure_ascii=False, sort_keys=True)
        if key in seen:
            continue
        seen.add(key)
        validate_problem(skill, problem)
        problems.append(problem)
    return problems


def _ax_plus_b(a, b):
    if a == 1: left = 'x'
    elif a == -1: left = '−x'
    else: left = f'{a}x'
    if b > 0: return f'{left} + {b}'
    if b < 0: return f'{left} − {abs(b)}'
    return left


def problem_text(problem):
    kind = problem['type']
    if kind == 'substitution':
        return f"x = {problem['x']} のとき、{_ax_plus_b(problem['a'], problem['b'])} = □"
    if kind == 'linear-basic':
        return f"{_ax_plus_b(problem['a'], problem['b'])} = {problem['c']} のとき x = □"
    if kind == 'transposition':
        sign = '+' if problem['b'] > 0 else '−'
        return f"x {sign} {abs(problem['b'])} = {problem['c']} のとき x = □"
    if kind == 'parentheses':
        sign = '+' if problem['b'] > 0 else '−'
        return f"{problem['a']}（x {sign} {abs(problem['b'])}）= {problem['c']} のとき x = □"
    raise ValueError(kind)


def render_pdf(path, title, problems):
    c = canvas.Canvas(str(path), pagesize=A4)
    w, h = A4
    for answer_mode in (False, True):
        c.setFillColor(colors.black); c.setFont(FONT, 18); c.drawString(45, h - 55, title)
        c.setFont(FONT, 10); c.drawRightString(w - 45, h - 52, '解答' if answer_mode else '問題')
        c.drawString(45, h - 78, '名前：____________________________')
        for index, problem in enumerate(problems):
            x = 45 + (index // 10) * 275; y = h - 120 - (index % 10) * 63
            c.setFillColor(colors.black); c.setFont(FONT, 10)
            c.drawString(x, y, str(index + 1)); c.drawString(x + 24, y, problem_text(problem))
            if answer_mode:
                c.setFillColor(colors.red); c.drawString(x + 24, y - 19, f"答え：{independent_answer(problem)}")
        if not answer_mode: c.showPage()
    c.save()


def publish(repo_root):
    root = Path(repo_root); catalog_path = root / 'worksheets' / 'catalog.json'
    catalog = json.loads(catalog_path.read_text(encoding='utf-8'))
    out = root / 'materials' / 'worksheets' / 'junior-high' / 'grade-01'; out.mkdir(parents=True, exist_ok=True)
    existing = {entry['id'] for entry in catalog}; published = 0
    for skill, spec in SKILLS.items():
        for variant, seed in enumerate(SEEDS, 1):
            wid = f'jh1-{skill}-{variant:02d}'
            if wid in existing: continue
            problems = generate(skill, seed); content_hash = normalized_hash(problems)
            assert all(entry['content_hash'] != content_hash for entry in catalog)
            filename = f'{wid}.pdf'; render_pdf(out / filename, spec['title'], problems)
            catalog.append({'id': wid, 'school_level': 'junior-high', 'grade': 1, 'subject': '数学', 'unit': spec['unit'], 'skill': skill,
                'problem_count': PROBLEM_COUNT, 'seed': seed, 'variant': variant, 'title': f"{spec['title']} {variant:02d}",
                'description': f"中学1年の『{spec['title']}』を20問反復するプリントです。2ページ目は同じ問題配置に赤字で解答を加えています。",
                'url': f'materials/worksheets/junior-high/grade-01/{filename}', 'content_hash': content_hash, 'difficulty': 'basic',
                'worksheet_series': 'focused', 'worksheet_format': spec['format'], 'answer_type': 'numeric'})
            existing.add(wid); published += 1
    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} junior-high grade-1 substitution/equation worksheets')

if __name__ == '__main__': publish(sys.argv[1] if len(sys.argv) > 1 else '.')
