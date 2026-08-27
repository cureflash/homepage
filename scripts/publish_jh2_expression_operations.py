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

SEEDS = (13101, 13202, 13303)
PROBLEM_COUNT = 20
SKILLS = {
    'monomial-multiplication': {
        'title': '単項式の乗法',
        'format': 'monomial-multiplication',
    },
    'monomial-division': {
        'title': '単項式の除法',
        'format': 'monomial-division',
    },
    'polynomial-addition': {
        'title': '多項式の加法',
        'format': 'polynomial-addition',
    },
    'polynomial-subtraction': {
        'title': '多項式の減法',
        'format': 'polynomial-subtraction',
    },
}


def _nonzero(rng, lo=-9, hi=9):
    while True:
        value = rng.randint(lo, hi)
        if value != 0:
            return value


def _power(var, exponent):
    if exponent == 0:
        return ''
    if exponent == 1:
        return var
    supers = str(exponent).translate(str.maketrans('0123456789', '⁰¹²³⁴⁵⁶⁷⁸⁹'))
    return f'{var}{supers}'


def monomial_text(coef, x_exp, y_exp):
    letters = _power('x', x_exp) + _power('y', y_exp)
    if not letters:
        return str(coef)
    if coef == 1:
        return letters
    if coef == -1:
        return f'-{letters}'
    return f'{coef}{letters}'


def polynomial_text(x_coef, y_coef, constant):
    parts = []
    for coef, symbol in ((x_coef, 'x'), (y_coef, 'y')):
        if coef == 0:
            continue
        term = symbol if abs(coef) == 1 else f'{abs(coef)}{symbol}'
        if not parts:
            parts.append(f'-{term}' if coef < 0 else term)
        else:
            parts.append(('− ' if coef < 0 else '+ ') + term)
    if constant != 0 or not parts:
        value = str(abs(constant))
        if not parts:
            parts.append(str(constant))
        else:
            parts.append(('− ' if constant < 0 else '+ ') + value)
    return ' '.join(parts)


def independent_answer(problem):
    kind = problem['type']
    if kind == 'monomial-multiplication':
        return monomial_text(
            problem['a_coef'] * problem['b_coef'],
            problem['a_x'] + problem['b_x'],
            problem['a_y'] + problem['b_y'],
        )
    if kind == 'monomial-division':
        assert problem['numerator_coef'] % problem['divisor_coef'] == 0
        return monomial_text(
            problem['numerator_coef'] // problem['divisor_coef'],
            problem['numerator_x'] - problem['divisor_x'],
            problem['numerator_y'] - problem['divisor_y'],
        )
    if kind in {'polynomial-addition', 'polynomial-subtraction'}:
        sign = 1 if kind == 'polynomial-addition' else -1
        return polynomial_text(
            problem['a_x'] + sign * problem['b_x'],
            problem['a_y'] + sign * problem['b_y'],
            problem['a_c'] + sign * problem['b_c'],
        )
    raise ValueError(kind)


def validate_problem(skill, problem):
    assert independent_answer(problem) == problem['answer']
    if skill == 'monomial-multiplication':
        assert problem['type'] == skill
        assert problem['a_coef'] != 0 and problem['b_coef'] != 0
        assert 0 <= problem['a_x'] <= 3 and 0 <= problem['a_y'] <= 3
        assert 0 <= problem['b_x'] <= 3 and 0 <= problem['b_y'] <= 3
        assert problem['a_x'] + problem['a_y'] > 0
        assert problem['b_x'] + problem['b_y'] > 0
    elif skill == 'monomial-division':
        assert problem['type'] == skill
        assert problem['divisor_coef'] not in {0, 1, -1}
        assert problem['numerator_coef'] % problem['divisor_coef'] == 0
        assert problem['numerator_x'] >= problem['divisor_x']
        assert problem['numerator_y'] >= problem['divisor_y']
        assert problem['divisor_x'] + problem['divisor_y'] > 0
    elif skill in {'polynomial-addition', 'polynomial-subtraction'}:
        assert problem['type'] == skill
        assert problem['a_x'] != 0 and problem['b_x'] != 0
        assert problem['a_y'] != 0 and problem['b_y'] != 0
        assert isinstance(problem['answer'], str) and problem['answer']
    else:
        raise ValueError(skill)


def generate(skill, seed):
    assert skill in SKILLS and seed in SEEDS
    rng = random.Random(seed + sum(ord(c) for c in skill) * 1009)
    problems, seen = [], set()
    while len(problems) < PROBLEM_COUNT:
        if skill == 'monomial-multiplication':
            a_x, a_y = rng.randint(0, 3), rng.randint(0, 3)
            b_x, b_y = rng.randint(0, 3), rng.randint(0, 3)
            if a_x + a_y == 0 or b_x + b_y == 0:
                continue
            problem = {
                'type': skill,
                'a_coef': _nonzero(rng, -8, 8), 'a_x': a_x, 'a_y': a_y,
                'b_coef': _nonzero(rng, -8, 8), 'b_x': b_x, 'b_y': b_y,
            }
        elif skill == 'monomial-division':
            divisor_coef = rng.choice((-6, -5, -4, -3, -2, 2, 3, 4, 5, 6))
            quotient_coef = _nonzero(rng, -8, 8)
            divisor_x, divisor_y = rng.randint(0, 2), rng.randint(0, 2)
            if divisor_x + divisor_y == 0:
                continue
            qx, qy = rng.randint(0, 3), rng.randint(0, 3)
            problem = {
                'type': skill,
                'numerator_coef': divisor_coef * quotient_coef,
                'numerator_x': divisor_x + qx,
                'numerator_y': divisor_y + qy,
                'divisor_coef': divisor_coef,
                'divisor_x': divisor_x,
                'divisor_y': divisor_y,
            }
        elif skill in {'polynomial-addition', 'polynomial-subtraction'}:
            problem = {
                'type': skill,
                'a_x': _nonzero(rng, -9, 9),
                'a_y': _nonzero(rng, -9, 9),
                'a_c': rng.randint(-12, 12),
                'b_x': _nonzero(rng, -9, 9),
                'b_y': _nonzero(rng, -9, 9),
                'b_c': rng.randint(-12, 12),
            }
            sign = 1 if skill == 'polynomial-addition' else -1
            if problem['a_x'] + sign * problem['b_x'] == 0 and problem['a_y'] + sign * problem['b_y'] == 0:
                continue
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
    if kind == 'monomial-multiplication':
        left = monomial_text(problem['a_coef'], problem['a_x'], problem['a_y'])
        right = monomial_text(problem['b_coef'], problem['b_x'], problem['b_y'])
        return f'{left} × {right} = □'
    if kind == 'monomial-division':
        left = monomial_text(problem['numerator_coef'], problem['numerator_x'], problem['numerator_y'])
        right = monomial_text(problem['divisor_coef'], problem['divisor_x'], problem['divisor_y'])
        return f'{left} ÷ {right} = □'
    if kind in {'polynomial-addition', 'polynomial-subtraction'}:
        left = polynomial_text(problem['a_x'], problem['a_y'], problem['a_c'])
        right = polynomial_text(problem['b_x'], problem['b_y'], problem['b_c'])
        op = '+' if kind == 'polynomial-addition' else '−'
        return f'（{left}） {op} （{right}） = □'
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
            c.setFont(FONT, 9 if problem['type'].startswith('polynomial') else 10)
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
                'id': wid,
                'school_level': 'junior-high',
                'grade': 2,
                'subject': '数学',
                'unit': '式の計算',
                'skill': skill,
                'problem_count': PROBLEM_COUNT,
                'seed': seed,
                'variant': variant,
                'title': f"{spec['title']} {variant:02d}",
                'description': f"中学2年の『{spec['title']}』を20問反復するプリントです。2ページ目は同じ問題配置に赤字で解答を加えています。",
                'url': f'materials/worksheets/junior-high/grade-02/{filename}',
                'content_hash': content_hash,
                'difficulty': 'basic',
                'worksheet_series': 'focused',
                'worksheet_format': spec['format'],
                'answer_type': 'accepted-set',
            })
            existing.add(wid)
            published += 1
    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} junior-high grade-2 expression-operation worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
