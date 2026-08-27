import json
import math
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

SEEDS = (13707, 13808, 13909)
PROBLEM_COUNT = 20
SKILLS = {
    'simultaneous-equations-substitution-basic': {
        'title': '連立方程式 代入法 基本',
        'format': 'simultaneous-equations-substitution',
    },
    'simultaneous-equations-align-coefficients': {
        'title': '係数をそろえる連立方程式',
        'format': 'simultaneous-equations-alignment',
    },
    'simultaneous-equations-parentheses': {
        'title': 'かっこを含む連立方程式',
        'format': 'simultaneous-equations-parentheses',
    },
    'simultaneous-equations-decimals': {
        'title': '小数を含む連立方程式',
        'format': 'simultaneous-equations-decimals',
    },
}


def _nonzero(rng, lo=-8, hi=8):
    while True:
        value = rng.randint(lo, hi)
        if value != 0:
            return value


def _signed_term(coef, symbol, first=False):
    if coef == 0:
        return ''
    magnitude = '' if abs(coef) == 1 else str(abs(coef))
    body = f'{magnitude}{symbol}'
    if first:
        return f'-{body}' if coef < 0 else body
    return ('− ' if coef < 0 else '+ ') + body


def linear_text(a, b):
    parts = []
    if a:
        parts.append(_signed_term(a, 'x', True))
    if b:
        parts.append(_signed_term(b, 'y', not parts))
    return ' '.join(parts) if parts else '0'


def _fraction_text(value):
    value = Fraction(value)
    if value.denominator == 1:
        return str(value.numerator)
    return f'{value.numerator}/{value.denominator}'


def _decimal_text(tenths):
    tenths = int(tenths)
    sign = '-' if tenths < 0 else ''
    n = abs(tenths)
    return f'{sign}{n // 10}.{n % 10}'


def solve_coefficients(a, b, c, d, e, f):
    a, b, c, d, e, f = map(Fraction, (a, b, c, d, e, f))
    det = a * e - b * d
    assert det != 0
    x = (c * e - b * f) / det
    y = (a * f - c * d) / det
    return x, y


def independent_answer(problem):
    kind = problem['type']
    if kind in {
        'simultaneous-equations-substitution-basic',
        'simultaneous-equations-align-coefficients',
    }:
        x, y = solve_coefficients(
            problem['a'], problem['b'], problem['c'],
            problem['d'], problem['e'], problem['f'],
        )
    elif kind == 'simultaneous-equations-parentheses':
        # k(ax+by)=c is expanded independently here.
        x, y = solve_coefficients(
            problem['k1'] * problem['a'], problem['k1'] * problem['b'], problem['c'],
            problem['k2'] * problem['d'], problem['k2'] * problem['e'], problem['f'],
        )
    elif kind == 'simultaneous-equations-decimals':
        # Stored coefficients/constants are integer tenths; divide all by 10 independently.
        x, y = solve_coefficients(
            Fraction(problem['a10'], 10), Fraction(problem['b10'], 10), Fraction(problem['c10'], 10),
            Fraction(problem['d10'], 10), Fraction(problem['e10'], 10), Fraction(problem['f10'], 10),
        )
    else:
        raise ValueError(kind)
    return f'x={_fraction_text(x)}, y={_fraction_text(y)}'


def validate_problem(skill, problem):
    assert problem['type'] == skill
    assert independent_answer(problem) == problem['answer']
    assert problem['x_solution'] == int(problem['answer'].split(',')[0].split('=')[1])
    assert problem['y_solution'] == int(problem['answer'].split('=')[2])

    if skill == 'simultaneous-equations-substitution-basic':
        # First equation is x + by = c or ax + y = c, so one variable is immediately isolated.
        assert abs(problem['a']) == 1 or abs(problem['b']) == 1
        assert problem['a'] * problem['e'] - problem['b'] * problem['d'] != 0
    elif skill == 'simultaneous-equations-align-coefficients':
        assert problem['a'] * problem['e'] - problem['b'] * problem['d'] != 0
        assert abs(problem['a']) != abs(problem['d']) and abs(problem['b']) != abs(problem['e'])
        x_lcm = math.lcm(abs(problem['a']), abs(problem['d']))
        y_lcm = math.lcm(abs(problem['b']), abs(problem['e']))
        assert x_lcm // abs(problem['a']) > 1 or x_lcm // abs(problem['d']) > 1
        assert y_lcm // abs(problem['b']) > 1 or y_lcm // abs(problem['e']) > 1
    elif skill == 'simultaneous-equations-parentheses':
        assert abs(problem['k1']) >= 2 and abs(problem['k2']) >= 2
        assert (problem['k1'] * problem['a']) * (problem['k2'] * problem['e']) - (problem['k1'] * problem['b']) * (problem['k2'] * problem['d']) != 0
    elif skill == 'simultaneous-equations-decimals':
        assert all(v % 10 != 0 for v in (problem['a10'], problem['b10'], problem['d10'], problem['e10']))
        x, y = solve_coefficients(
            Fraction(problem['a10'], 10), Fraction(problem['b10'], 10), Fraction(problem['c10'], 10),
            Fraction(problem['d10'], 10), Fraction(problem['e10'], 10), Fraction(problem['f10'], 10),
        )
        assert x.denominator == 1 and y.denominator == 1
    else:
        raise ValueError(skill)


def generate(skill, seed):
    assert skill in SKILLS and seed in SEEDS
    rng = random.Random(seed + sum(ord(ch) for ch in skill) * 1009)
    problems, seen = [], set()
    while len(problems) < PROBLEM_COUNT:
        x_sol, y_sol = rng.randint(-8, 8), rng.randint(-8, 8)
        if x_sol == 0 and y_sol == 0:
            continue

        if skill == 'simultaneous-equations-substitution-basic':
            if rng.choice((True, False)):
                a = rng.choice((-1, 1)); b = _nonzero(rng, -7, 7)
            else:
                a = _nonzero(rng, -7, 7); b = rng.choice((-1, 1))
            d, e = _nonzero(rng, -7, 7), _nonzero(rng, -7, 7)
            if a * e - b * d == 0:
                continue
            problem = {
                'type': skill, 'a': a, 'b': b, 'c': a * x_sol + b * y_sol,
                'd': d, 'e': e, 'f': d * x_sol + e * y_sol,
                'x_solution': x_sol, 'y_solution': y_sol,
            }
        elif skill == 'simultaneous-equations-align-coefficients':
            a, b, d, e = (_nonzero(rng, -6, 6) for _ in range(4))
            if a * e - b * d == 0:
                continue
            if abs(a) == abs(d) or abs(b) == abs(e):
                continue
            problem = {
                'type': skill, 'a': a, 'b': b, 'c': a * x_sol + b * y_sol,
                'd': d, 'e': e, 'f': d * x_sol + e * y_sol,
                'x_solution': x_sol, 'y_solution': y_sol,
            }
        elif skill == 'simultaneous-equations-parentheses':
            k1 = rng.choice((-4, -3, -2, 2, 3, 4))
            k2 = rng.choice((-4, -3, -2, 2, 3, 4))
            a, b, d, e = (_nonzero(rng, -5, 5) for _ in range(4))
            if a * e - b * d == 0:
                continue
            c = k1 * (a * x_sol + b * y_sol)
            f = k2 * (d * x_sol + e * y_sol)
            problem = {
                'type': skill, 'k1': k1, 'a': a, 'b': b, 'c': c,
                'k2': k2, 'd': d, 'e': e, 'f': f,
                'x_solution': x_sol, 'y_solution': y_sol,
            }
        elif skill == 'simultaneous-equations-decimals':
            # Non-integer one-decimal coefficients. Constants are derived exactly in tenths.
            a10, b10, d10, e10 = (_nonzero(rng, -29, 29) for _ in range(4))
            if any(v % 10 == 0 for v in (a10, b10, d10, e10)):
                continue
            if a10 * e10 - b10 * d10 == 0:
                continue
            c10 = a10 * x_sol + b10 * y_sol
            f10 = d10 * x_sol + e10 * y_sol
            problem = {
                'type': skill, 'a10': a10, 'b10': b10, 'c10': c10,
                'd10': d10, 'e10': e10, 'f10': f10,
                'x_solution': x_sol, 'y_solution': y_sol,
            }
        else:
            raise ValueError(skill)

        problem['answer'] = independent_answer(problem)
        key = json.dumps(problem, ensure_ascii=False, sort_keys=True)
        if key in seen:
            continue
        seen.add(key)
        validate_problem(skill, problem)
        problems.append(problem)
    return problems


def problem_text(problem):
    kind = problem['type']
    if kind in {
        'simultaneous-equations-substitution-basic',
        'simultaneous-equations-align-coefficients',
    }:
        return f"{linear_text(problem['a'], problem['b'])}={problem['c']} / {linear_text(problem['d'], problem['e'])}={problem['f']}"
    if kind == 'simultaneous-equations-parentheses':
        return f"{problem['k1']}（{linear_text(problem['a'], problem['b'])}）={problem['c']} / {problem['k2']}（{linear_text(problem['d'], problem['e'])}）={problem['f']}"
    if kind == 'simultaneous-equations-decimals':
        left1 = f"{_decimal_text(problem['a10'])}x {'+' if problem['b10'] > 0 else '−'} {_decimal_text(abs(problem['b10']))}y"
        left2 = f"{_decimal_text(problem['d10'])}x {'+' if problem['e10'] > 0 else '−'} {_decimal_text(abs(problem['e10']))}y"
        return f"{left1}={_decimal_text(problem['c10'])} / {left2}={_decimal_text(problem['f10'])}"
    raise ValueError(kind)


def render_pdf(path, title, problems):
    c = canvas.Canvas(str(path), pagesize=A4)
    _, h = A4
    for answer_mode in (False, True):
        c.setFillColor(colors.black)
        c.setFont(FONT, 18)
        c.drawString(45, h - 55, title)
        c.setFont(FONT, 10)
        c.drawRightString(A4[0] - 45, h - 52, '解答' if answer_mode else '問題')
        c.drawString(45, h - 78, '名前：____________________________')
        for index, problem in enumerate(problems):
            x = 45 + (index // 10) * 275
            y = h - 120 - (index % 10) * 63
            c.setFillColor(colors.black)
            c.setFont(FONT, 7.5 if problem['type'] in {'simultaneous-equations-parentheses', 'simultaneous-equations-decimals'} else 8)
            c.drawString(x, y, str(index + 1))
            c.drawString(x + 24, y, problem_text(problem))
            if answer_mode:
                c.setFillColor(colors.red)
                c.setFont(FONT, 9)
                c.drawString(x + 24, y - 19, f"答え：{independent_answer(problem)}")
        if not answer_mode:
            c.showPage()
    c.save()


def publish(repo_root):
    root = Path(repo_root)
    catalog_path = root / 'worksheets' / 'catalog.json'
    catalog = json.loads(catalog_path.read_text(encoding='utf-8'))
    out = root / 'materials' / 'worksheets' / 'junior-high' / 'grade-02'
    out.mkdir(parents=True, exist_ok=True)
    existing = {entry['id'] for entry in catalog}
    published = 0
    for skill, spec in SKILLS.items():
        for variant, seed in enumerate(SEEDS, 1):
            wid = f'jh2-{skill}-{variant:02d}'
            if wid in existing:
                continue
            problems = generate(skill, seed)
            content_hash = normalized_hash(problems)
            assert all(entry['content_hash'] != content_hash for entry in catalog)
            filename = f'{wid}.pdf'
            render_pdf(out / filename, spec['title'], problems)
            catalog.append({
                'id': wid, 'school_level': 'junior-high', 'grade': 2, 'subject': '数学',
                'unit': '連立方程式', 'skill': skill, 'problem_count': PROBLEM_COUNT, 'seed': seed,
                'variant': variant, 'title': f"{spec['title']} {variant:02d}",
                'description': f"中学2年の『{spec['title']}』を20問反復するプリントです。2ページ目は同じ問題配置に赤字で解答を加えています。",
                'url': f'materials/worksheets/junior-high/grade-02/{filename}',
                'content_hash': content_hash, 'difficulty': 'basic', 'worksheet_series': 'focused',
                'worksheet_format': spec['format'], 'answer_type': 'accepted-set',
            })
            existing.add(wid)
            published += 1
    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} junior-high grade-2 simultaneous-equation worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
