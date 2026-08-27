import json
import random
import sys
from fractions import Fraction
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas

try:
    from scripts.worksheet_factory import FONT, normalized_hash, validate_catalog
except ModuleNotFoundError:
    from worksheet_factory import FONT, normalized_hash, validate_catalog

SEEDS = (12707, 12808, 12909)
PROBLEM_COUNT = 20
SKILLS = {
    'linear-equation-decimal': {'title': '小数を含む一次方程式', 'unit': '一元一次方程式', 'format': 'linear-equation-decimal'},
    'linear-equation-fraction': {'title': '分数を含む一次方程式', 'unit': '一元一次方程式', 'format': 'linear-equation-fraction'},
    'proportion-equation': {'title': '比例式型の方程式', 'unit': '一元一次方程式', 'format': 'proportion-equation'},
    'proportional-inverse-substitution': {'title': '比例・反比例の式への代入', 'unit': '比例・反比例', 'format': 'proportional-inverse-substitution'},
}


def _signed_decimal(tenths):
    sign = '−' if tenths < 0 else ''
    value = abs(tenths)
    return f'{sign}{value // 10}.{value % 10}'


def _signed_fraction(numerator, denominator):
    if denominator == 1:
        return str(numerator)
    sign = '−' if numerator < 0 else ''
    return f'{sign}{abs(numerator)}/{denominator}'


def independent_answer(problem):
    kind = problem['type']
    if kind == 'decimal-equation':
        # (a/10)x + b/10 = c/10  ->  ax + b = c
        assert problem['a'] != 0
        assert (problem['c'] - problem['b']) % problem['a'] == 0
        return (problem['c'] - problem['b']) // problem['a']
    if kind == 'fraction-equation':
        a = Fraction(problem['a_num'], problem['a_den'])
        b = Fraction(problem['b_num'], problem['b_den'])
        c = Fraction(problem['c_num'], problem['c_den'])
        x = (c - b) / a
        assert x.denominator == 1
        return x.numerator
    if kind == 'proportion-equation':
        # a:b = x:d
        assert problem['b'] != 0
        numerator = problem['a'] * problem['d']
        assert numerator % problem['b'] == 0
        return numerator // problem['b']
    if kind == 'proportional-substitution':
        return problem['a'] * problem['x']
    if kind == 'inverse-substitution':
        assert problem['x'] != 0 and problem['k'] % problem['x'] == 0
        return problem['k'] // problem['x']
    raise ValueError(kind)


def validate_problem(skill, problem):
    assert independent_answer(problem) == problem['answer']
    if skill == 'linear-equation-decimal':
        assert problem['type'] == 'decimal-equation'
        assert problem['a'] not in {0, 10, -10}
        assert -20 <= problem['answer'] <= 20
    elif skill == 'linear-equation-fraction':
        assert problem['type'] == 'fraction-equation'
        assert problem['a_num'] != 0 and 2 <= problem['a_den'] <= 6 and 2 <= problem['b_den'] <= 6
        assert -20 <= problem['answer'] <= 20
    elif skill == 'proportion-equation':
        assert problem['type'] == 'proportion-equation'
        assert all(value > 0 for value in (problem['a'], problem['b'], problem['d'], problem['answer']))
    elif skill == 'proportional-inverse-substitution':
        assert problem['type'] in {'proportional-substitution', 'inverse-substitution'}
        assert -100 <= problem['answer'] <= 100
    else:
        raise ValueError(skill)


def generate(skill, seed):
    assert skill in SKILLS and seed in SEEDS
    rng = random.Random(seed + sum(ord(c) for c in skill) * 1009)
    problems, seen = [], set()
    while len(problems) < PROBLEM_COUNT:
        if skill == 'linear-equation-decimal':
            a = rng.choice((-9,-8,-7,-6,-5,-4,-3,-2,2,3,4,5,6,7,8,9))
            x = rng.randint(-15, 15)
            b = rng.randint(-30, 30)
            c = a * x + b
            problem = {'type': 'decimal-equation', 'a': a, 'b': b, 'c': c}
        elif skill == 'linear-equation-fraction':
            a_den = rng.randint(2, 6)
            a_num = rng.choice([n for n in range(-9, 10) if n not in (0,) and abs(n) != a_den])
            b_den = rng.randint(2, 6)
            b_num = rng.randint(-12, 12)
            x = rng.randint(-12, 12)
            c = Fraction(a_num, a_den) * x + Fraction(b_num, b_den)
            problem = {
                'type': 'fraction-equation', 'a_num': a_num, 'a_den': a_den,
                'b_num': b_num, 'b_den': b_den, 'c_num': c.numerator, 'c_den': c.denominator,
            }
        elif skill == 'proportion-equation':
            p = rng.randint(1, 9)
            q = rng.randint(1, 9)
            m = rng.randint(1, 8)
            n = rng.randint(1, 8)
            a, b, answer, d = p * m, q * m, p * n, q * n
            problem = {'type': 'proportion-equation', 'a': a, 'b': b, 'd': d}
        elif skill == 'proportional-inverse-substitution':
            if len(problems) % 2 == 0:
                a = rng.choice((-8,-7,-6,-5,-4,-3,-2,2,3,4,5,6,7,8))
                x = rng.randint(-9, 9)
                if x == 0:
                    continue
                problem = {'type': 'proportional-substitution', 'a': a, 'x': x}
            else:
                x = rng.choice((-9,-8,-7,-6,-5,-4,-3,-2,2,3,4,5,6,7,8,9))
                y = rng.choice((-9,-8,-7,-6,-5,-4,-3,-2,2,3,4,5,6,7,8,9))
                k = x * y
                problem = {'type': 'inverse-substitution', 'k': k, 'x': x}
        else:
            raise ValueError(skill)
        problem['answer'] = independent_answer(problem)
        if not -100 <= problem['answer'] <= 100:
            continue
        key = json.dumps(problem, ensure_ascii=False, sort_keys=True)
        if key in seen:
            continue
        seen.add(key)
        validate_problem(skill, problem)
        problems.append(problem)
    if skill == 'proportional-inverse-substitution':
        assert sum(p['type'] == 'proportional-substitution' for p in problems) == 10
        assert sum(p['type'] == 'inverse-substitution' for p in problems) == 10
    return problems


def problem_text(problem):
    kind = problem['type']
    if kind == 'decimal-equation':
        a = _signed_decimal(problem['a'])
        b = problem['b']
        b_text = f" + {_signed_decimal(b)}" if b >= 0 else f" − {_signed_decimal(abs(b))}"
        return f'{a}x{b_text} = {_signed_decimal(problem["c"])}  のとき x = □'
    if kind == 'fraction-equation':
        a = _signed_fraction(problem['a_num'], problem['a_den'])
        b_num, b_den = problem['b_num'], problem['b_den']
        b_text = f" + {_signed_fraction(b_num, b_den)}" if b_num >= 0 else f" − {_signed_fraction(abs(b_num), b_den)}"
        c = _signed_fraction(problem['c_num'], problem['c_den'])
        return f'{a}x{b_text} = {c}  のとき x = □'
    if kind == 'proportion-equation':
        return f"{problem['a']} : {problem['b']} = x : {problem['d']}  のとき x = □"
    if kind == 'proportional-substitution':
        return f"y = {problem['a']}x、x = {problem['x']} のとき y = □"
    if kind == 'inverse-substitution':
        return f"y = {problem['k']}/x、x = {problem['x']} のとき y = □"
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
            c.setFillColor(colors.black); c.setFont(FONT, 9)
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
            if wid in existing:
                continue
            problems = generate(skill, seed); content_hash = normalized_hash(problems)
            assert all(entry['content_hash'] != content_hash for entry in catalog)
            filename = f'{wid}.pdf'; render_pdf(out / filename, spec['title'], problems)
            catalog.append({
                'id': wid, 'school_level': 'junior-high', 'grade': 1, 'subject': '数学', 'unit': spec['unit'], 'skill': skill,
                'problem_count': PROBLEM_COUNT, 'seed': seed, 'variant': variant, 'title': f"{spec['title']} {variant:02d}",
                'description': f"中学1年の『{spec['title']}』を20問反復するプリントです。2ページ目は同じ問題配置に赤字で解答を加えています。",
                'url': f'materials/worksheets/junior-high/grade-01/{filename}', 'content_hash': content_hash,
                'difficulty': 'basic', 'worksheet_series': 'focused', 'worksheet_format': spec['format'], 'answer_type': 'numeric',
            })
            existing.add(wid); published += 1
    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} junior-high grade-1 decimal/fraction/ratio worksheets')

if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
