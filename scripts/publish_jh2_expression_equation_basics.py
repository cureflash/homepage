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

SEEDS = (13404, 13505, 13606)
PROBLEM_COUNT = 20
SKILLS = {
    'polynomial-times-number': {'title': '多項式×数', 'unit': '式の計算', 'format': 'polynomial-times-number'},
    'expression-four-operations': {'title': '式の四則混合', 'unit': '式の計算', 'format': 'expression-four-operations'},
    'expression-substitution': {'title': '式への代入', 'unit': '式の計算', 'format': 'expression-substitution'},
    'simultaneous-equations-elimination-basic': {'title': '連立方程式 加減法 基本', 'unit': '連立方程式', 'format': 'simultaneous-equations-elimination'},
}


def _nonzero(rng, lo=-9, hi=9):
    while True:
        value = rng.randint(lo, hi)
        if value != 0:
            return value


def linear_text(x_coef, constant):
    parts = []
    if x_coef:
        if x_coef == 1:
            parts.append('x')
        elif x_coef == -1:
            parts.append('-x')
        else:
            parts.append(f'{x_coef}x')
    if constant or not parts:
        if not parts:
            parts.append(str(constant))
        elif constant > 0:
            parts.append(f'+ {constant}')
        elif constant < 0:
            parts.append(f'− {abs(constant)}')
    return ' '.join(parts)


def polynomial_text(x_coef, y_coef, constant):
    parts = []
    for coef, symbol in ((x_coef, 'x'), (y_coef, 'y')):
        if coef == 0:
            continue
        body = symbol if abs(coef) == 1 else f'{abs(coef)}{symbol}'
        if not parts:
            parts.append(f'-{body}' if coef < 0 else body)
        else:
            parts.append(('− ' if coef < 0 else '+ ') + body)
    if constant != 0 or not parts:
        if not parts:
            parts.append(str(constant))
        else:
            parts.append(('− ' if constant < 0 else '+ ') + str(abs(constant)))
    return ' '.join(parts)


def independent_answer(problem):
    kind = problem['type']
    if kind == 'polynomial-times-number':
        return polynomial_text(
            problem['k'] * problem['x_coef'],
            problem['k'] * problem['y_coef'],
            problem['k'] * problem['constant'],
        )
    if kind == 'expression-four-operations':
        # ((P + Q) * multiplier) / divisor - R
        x_num = (problem['p_x'] + problem['q_x']) * problem['multiplier']
        c_num = (problem['p_c'] + problem['q_c']) * problem['multiplier']
        assert x_num % problem['divisor'] == 0 and c_num % problem['divisor'] == 0
        return linear_text(
            x_num // problem['divisor'] - problem['r_x'],
            c_num // problem['divisor'] - problem['r_c'],
        )
    if kind == 'expression-substitution':
        return problem['a'] * problem['x'] + problem['b'] * problem['y'] + problem['c']
    if kind == 'simultaneous-equations-elimination-basic':
        a, b, c = problem['a'], problem['b'], problem['c']
        d, e, f = problem['d'], problem['e'], problem['f']
        det = a * e - b * d
        assert det != 0
        x_num = c * e - b * f
        y_num = a * f - c * d
        assert x_num % det == 0 and y_num % det == 0
        return f"x={x_num // det}, y={y_num // det}"
    raise ValueError(kind)


def validate_problem(skill, problem):
    assert problem['type'] == skill
    assert independent_answer(problem) == problem['answer']
    if skill == 'polynomial-times-number':
        assert problem['k'] not in {-1, 0, 1}
        assert problem['x_coef'] != 0 and problem['y_coef'] != 0
    elif skill == 'expression-four-operations':
        assert problem['multiplier'] not in {-1, 0, 1}
        assert problem['divisor'] >= 2
        assert ((problem['p_x'] + problem['q_x']) * problem['multiplier']) % problem['divisor'] == 0
        assert ((problem['p_c'] + problem['q_c']) * problem['multiplier']) % problem['divisor'] == 0
        assert isinstance(problem['answer'], str) and problem['answer']
    elif skill == 'expression-substitution':
        assert problem['a'] != 0 and problem['b'] != 0
        assert -9 <= problem['x'] <= 9 and -9 <= problem['y'] <= 9
        assert isinstance(problem['answer'], int)
    elif skill == 'simultaneous-equations-elimination-basic':
        det = problem['a'] * problem['e'] - problem['b'] * problem['d']
        assert det != 0
        assert problem['x_solution'] == int(problem['answer'].split(',')[0].split('=')[1])
        assert problem['y_solution'] == int(problem['answer'].split('=')[2])
        # Basic elimination form: one variable already has equal or opposite coefficients.
        assert abs(problem['a']) == abs(problem['d']) or abs(problem['b']) == abs(problem['e'])
    else:
        raise ValueError(skill)


def generate(skill, seed):
    assert skill in SKILLS and seed in SEEDS
    rng = random.Random(seed + sum(ord(c) for c in skill) * 1009)
    problems, seen = [], set()
    while len(problems) < PROBLEM_COUNT:
        if skill == 'polynomial-times-number':
            problem = {
                'type': skill,
                'k': rng.choice((-6, -5, -4, -3, -2, 2, 3, 4, 5, 6)),
                'x_coef': _nonzero(rng, -8, 8),
                'y_coef': _nonzero(rng, -8, 8),
                'constant': rng.randint(-10, 10),
            }
        elif skill == 'expression-four-operations':
            divisor = rng.randint(2, 6)
            multiplier = rng.choice((-6, -5, -4, -3, -2, 2, 3, 4, 5, 6))
            # Pick the sum coefficients so the later division is exact.
            target_x = rng.randint(-8, 8)
            target_c = rng.randint(-12, 12)
            if target_x == 0 and target_c == 0:
                continue
            sum_x = divisor * target_x
            sum_c = divisor * target_c
            p_x = _nonzero(rng, -12, 12)
            p_c = rng.randint(-15, 15)
            problem = {
                'type': skill,
                'p_x': p_x, 'p_c': p_c,
                'q_x': sum_x - p_x, 'q_c': sum_c - p_c,
                'multiplier': multiplier, 'divisor': divisor,
                'r_x': _nonzero(rng, -8, 8), 'r_c': rng.randint(-12, 12),
            }
        elif skill == 'expression-substitution':
            problem = {
                'type': skill,
                'a': _nonzero(rng, -9, 9), 'b': _nonzero(rng, -9, 9), 'c': rng.randint(-15, 15),
                'x': rng.randint(-9, 9), 'y': rng.randint(-9, 9),
            }
        elif skill == 'simultaneous-equations-elimination-basic':
            x_sol, y_sol = rng.randint(-8, 8), rng.randint(-8, 8)
            if x_sol == 0 and y_sol == 0:
                continue
            mode = rng.choice(('same-x', 'opposite-x', 'same-y', 'opposite-y'))
            if mode.endswith('x'):
                a = _nonzero(rng, -6, 6)
                d = a if mode == 'same-x' else -a
                b, e = _nonzero(rng, -7, 7), _nonzero(rng, -7, 7)
                if a * e - b * d == 0:
                    continue
            else:
                b = _nonzero(rng, -6, 6)
                e = b if mode == 'same-y' else -b
                a, d = _nonzero(rng, -7, 7), _nonzero(rng, -7, 7)
                if a * e - b * d == 0:
                    continue
            problem = {
                'type': skill, 'a': a, 'b': b, 'c': a * x_sol + b * y_sol,
                'd': d, 'e': e, 'f': d * x_sol + e * y_sol,
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
    if kind == 'polynomial-times-number':
        return f"{problem['k']}（{polynomial_text(problem['x_coef'], problem['y_coef'], problem['constant'])}） = □"
    if kind == 'expression-four-operations':
        p = linear_text(problem['p_x'], problem['p_c'])
        q = linear_text(problem['q_x'], problem['q_c'])
        r = linear_text(problem['r_x'], problem['r_c'])
        return f"（（{p}）+（{q}））×{problem['multiplier']}÷{problem['divisor']}−（{r}） = □"
    if kind == 'expression-substitution':
        expr = polynomial_text(problem['a'], problem['b'], problem['c'])
        return f"x={problem['x']}, y={problem['y']} のとき {expr} = □"
    if kind == 'simultaneous-equations-elimination-basic':
        left1 = polynomial_text(problem['a'], problem['b'], 0)
        left2 = polynomial_text(problem['d'], problem['e'], 0)
        return f"{left1}={problem['c']} / {left2}={problem['f']}  → x,yを求めよ"
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
            c.setFont(FONT, 8 if problem['type'] in {'expression-four-operations', 'simultaneous-equations-elimination-basic'} else 9)
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
                'unit': spec['unit'], 'skill': skill, 'problem_count': PROBLEM_COUNT, 'seed': seed,
                'variant': variant, 'title': f"{spec['title']} {variant:02d}",
                'description': f"中学2年の『{spec['title']}』を20問反復するプリントです。2ページ目は同じ問題配置に赤字で解答を加えています。",
                'url': f'materials/worksheets/junior-high/grade-02/{filename}',
                'content_hash': content_hash, 'difficulty': 'basic', 'worksheet_series': 'focused',
                'worksheet_format': spec['format'], 'answer_type': 'accepted-set' if skill != 'expression-substitution' else 'numeric',
            })
            existing.add(wid)
            published += 1
    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} junior-high grade-2 expression/equation worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
