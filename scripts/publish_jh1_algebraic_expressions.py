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

SEEDS = (12101, 12202, 12303)
PROBLEM_COUNT = 20
SKILLS = {
    'algebra-terms-coefficients': {
        'title': '文字式の項・係数',
        'answer_type': 'numeric',
        'format': 'algebra-coefficient',
    },
    'combine-like-terms': {
        'title': '同類項をまとめる',
        'answer_type': 'numeric',
        'format': 'algebra-like-terms',
    },
    'algebra-add-sub': {
        'title': '文字式の加減',
        'answer_type': 'accepted-set',
        'format': 'algebra-linear-expression',
    },
    'algebra-mul-div': {
        'title': '文字式の乗除',
        'answer_type': 'numeric',
        'format': 'algebra-mul-div',
    },
}


def _nonzero(rng, lo=-9, hi=9):
    while True:
        value = rng.randint(lo, hi)
        if value != 0:
            return value


def _term(coef, var):
    if coef == 1:
        return var
    if coef == -1:
        return f'-{var}'
    return f'{coef}{var}'


def _signed_term(coef, var):
    if coef > 0:
        return f'+ {_term(coef, var)}'
    return f'− {_term(abs(coef), var)}'


def linear_text(a, b):
    xpart = _term(a, 'x')
    if b == 0:
        return xpart
    sign = '+' if b > 0 else '−'
    return f'{xpart} {sign} {abs(b)}'


def canonical_linear(a, b):
    return linear_text(a, b).replace(' ', '')


def independent_answer(problem):
    kind = problem['type']
    if kind == 'coefficient':
        return problem['x_coef'] if problem['target'] == 'x' else problem['y_coef']
    if kind == 'combine-like':
        return problem['a'] + problem['b'] + problem['c']
    if kind == 'linear-add-sub':
        if problem['op'] == 'add':
            a = problem['a'] + problem['c']
            b = problem['b'] + problem['d']
        else:
            a = problem['a'] - problem['c']
            b = problem['b'] - problem['d']
        return canonical_linear(a, b)
    if kind == 'monomial-mul':
        return problem['scalar'] * problem['coef']
    if kind == 'monomial-div':
        assert problem['coef'] % problem['divisor'] == 0
        return problem['coef'] // problem['divisor']
    raise ValueError(kind)


def validate_problem(skill, problem):
    assert independent_answer(problem) == problem['answer']
    if skill == 'algebra-terms-coefficients':
        assert problem['type'] == 'coefficient'
        assert problem['target'] in {'x', 'y'}
        assert problem['x_coef'] != 0 and problem['y_coef'] != 0
        assert problem['constant'] != 0
    elif skill == 'combine-like-terms':
        assert problem['type'] == 'combine-like'
        assert all(problem[k] != 0 for k in ('a', 'b', 'c'))
        assert -20 <= problem['answer'] <= 20 and problem['answer'] != 0
    elif skill == 'algebra-add-sub':
        assert problem['type'] == 'linear-add-sub'
        assert problem['op'] in {'add', 'sub'}
        assert all(problem[k] != 0 for k in ('a', 'c'))
        assert isinstance(problem['answer'], str) and 'x' in problem['answer']
    elif skill == 'algebra-mul-div':
        assert problem['type'] in {'monomial-mul', 'monomial-div'}
        if problem['type'] == 'monomial-div':
            assert problem['divisor'] not in {0, 1, -1}
            assert problem['coef'] % problem['divisor'] == 0
        assert problem['answer'] != 0
    else:
        raise ValueError(skill)


def generate(skill, seed):
    assert skill in SKILLS and seed in SEEDS
    rng = random.Random(seed + sum(ord(c) for c in skill) * 1009)
    problems, seen = [], set()

    while len(problems) < PROBLEM_COUNT:
        if skill == 'algebra-terms-coefficients':
            x_coef = _nonzero(rng)
            y_coef = _nonzero(rng)
            constant = _nonzero(rng, -12, 12)
            target = 'x' if len(problems) % 2 == 0 else 'y'
            problem = {
                'type': 'coefficient', 'x_coef': x_coef, 'y_coef': y_coef,
                'constant': constant, 'target': target,
            }
        elif skill == 'combine-like-terms':
            a, b, c = _nonzero(rng), _nonzero(rng), _nonzero(rng)
            total = a + b + c
            if total == 0 or not -20 <= total <= 20:
                continue
            problem = {'type': 'combine-like', 'a': a, 'b': b, 'c': c}
        elif skill == 'algebra-add-sub':
            a, c = _nonzero(rng, -8, 8), _nonzero(rng, -8, 8)
            b, d = rng.randint(-12, 12), rng.randint(-12, 12)
            op = 'add' if len(problems) % 2 == 0 else 'sub'
            out_a = a + c if op == 'add' else a - c
            if out_a == 0:
                continue
            problem = {'type': 'linear-add-sub', 'a': a, 'b': b, 'c': c, 'd': d, 'op': op}
        elif skill == 'algebra-mul-div':
            if len(problems) % 2 == 0:
                scalar = _nonzero(rng, -6, 6)
                coef = _nonzero(rng, -9, 9)
                problem = {'type': 'monomial-mul', 'scalar': scalar, 'coef': coef}
            else:
                divisor = rng.choice((-6, -5, -4, -3, -2, 2, 3, 4, 5, 6))
                quotient = _nonzero(rng, -9, 9)
                problem = {'type': 'monomial-div', 'coef': divisor * quotient, 'divisor': divisor}
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
    if kind == 'coefficient':
        expr = f"{_term(problem['x_coef'], 'x')} {_signed_term(problem['y_coef'], 'y')}"
        if problem['constant'] > 0:
            expr += f" + {problem['constant']}"
        else:
            expr += f" − {abs(problem['constant'])}"
        return f"{expr} の {problem['target']} の係数は □"
    if kind == 'combine-like':
        a, b, c = problem['a'], problem['b'], problem['c']
        expr = f"{_term(a, 'x')} {_signed_term(b, 'x')} {_signed_term(c, 'x')}"
        return f'{expr} = □x'
    if kind == 'linear-add-sub':
        left = linear_text(problem['a'], problem['b'])
        right = linear_text(problem['c'], problem['d'])
        op = '+' if problem['op'] == 'add' else '−'
        return f'（{left}） {op} （{right}） = □'
    if kind == 'monomial-mul':
        return f"{problem['scalar']} × {_term(problem['coef'], 'x')} = □x"
    if kind == 'monomial-div':
        return f"{_term(problem['coef'], 'x')} ÷ {problem['divisor']} = □x"
    raise ValueError(kind)


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
        for index, problem in enumerate(problems):
            x = 45 + (index // 10) * 275
            y = h - 120 - (index % 10) * 63
            c.setFillColor(colors.black)
            c.setFont(FONT, 10 if problem['type'] in {'coefficient', 'linear-add-sub'} else 11)
            c.drawString(x, y, str(index + 1))
            c.drawString(x + 24, y, problem_text(problem))
            if answer_mode:
                c.setFillColor(colors.red)
                c.setFont(FONT, 10)
                c.drawString(x + 24, y - 19, f"答え：{independent_answer(problem)}")
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

    for skill, spec in SKILLS.items():
        for variant, seed in enumerate(SEEDS, 1):
            wid = f'jh1-{skill}-{variant:02d}'
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
                'grade': 1,
                'subject': '数学',
                'unit': '文字と式',
                'skill': skill,
                'problem_count': PROBLEM_COUNT,
                'seed': seed,
                'variant': variant,
                'title': f"{spec['title']} {variant:02d}",
                'description': f"中学1年の『{spec['title']}』を20問反復するプリントです。2ページ目は同じ問題配置に赤字で解答を加えています。",
                'url': f'materials/worksheets/junior-high/grade-01/{filename}',
                'content_hash': content_hash,
                'difficulty': 'basic',
                'worksheet_series': 'focused',
                'worksheet_format': spec['format'],
                'answer_type': spec['answer_type'],
            })
            existing.add(wid)
            published += 1

    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} junior-high grade-1 algebraic-expression worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
