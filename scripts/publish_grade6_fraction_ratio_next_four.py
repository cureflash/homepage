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

SEEDS = (11409, 11510, 11611)
PROBLEM_COUNT = 20
SKILLS = {
    'mixed-number-mul-div': ('帯分数を含む乗除', '分数の乗法・除法', 'accepted-set', 'fraction-horizontal'),
    'fraction-decimal-mixed': ('分数・小数混合計算', '分数の乗法・除法', 'accepted-set', 'fraction-decimal-horizontal'),
    'fraction-four-operations': ('分数四則混合', '分数の計算', 'accepted-set', 'fraction-mixed-horizontal'),
    'simplify-ratio': ('比を簡単にする', '比', 'accepted-set', 'ratio-horizontal'),
}
DECIMALS = (Fraction(1, 2), Fraction(1, 4), Fraction(3, 4), Fraction(1, 5), Fraction(2, 5), Fraction(3, 5), Fraction(4, 5), Fraction(1, 10), Fraction(3, 10), Fraction(7, 10))


def ftext(value):
    value = Fraction(value)
    if value.denominator == 1:
        return str(value.numerator)
    return f'{value.numerator}/{value.denominator}'


def mixed_text(value):
    value = Fraction(value)
    whole = value.numerator // value.denominator
    rem = value.numerator % value.denominator
    if rem == 0:
        return str(whole)
    if whole == 0:
        return f'{rem}/{value.denominator}'
    return f'{whole}と{rem}/{value.denominator}'


def decimal_text(value):
    value = Fraction(value)
    return f'{float(value):g}'


def independent_answer(problem):
    kind = problem['type']
    if kind == 'mixed-number-mul-div':
        a = Fraction(problem['a_num'], problem['a_den'])
        b = Fraction(problem['b_num'], problem['b_den'])
        return a * b if problem['op'] == '×' else a / b
    if kind == 'fraction-decimal-mixed':
        a = Fraction(problem['a_num'], problem['a_den'])
        b = Fraction(problem['b_num'], problem['b_den'])
        return a * b if problem['op'] == '×' else a / b
    if kind == 'fraction-four-operations':
        a = Fraction(problem['a_num'], problem['a_den'])
        b = Fraction(problem['b_num'], problem['b_den'])
        c = Fraction(problem['c_num'], problem['c_den'])
        if problem['pattern'] == 'add-times':
            return a + b * c
        if problem['pattern'] == 'sub-times':
            return a - b * c
        if problem['pattern'] == 'times-div':
            return a * b / c
        if problem['pattern'] == 'paren-add-div':
            return (a + b) / c
        raise AssertionError(problem['pattern'])
    if kind == 'simplify-ratio':
        g = math.gcd(problem['a'], problem['b'])
        return f"{problem['a'] // g}:{problem['b'] // g}"
    raise AssertionError(kind)


def _fraction(rng, min_value=Fraction(1, 4), max_value=Fraction(4, 1), require_mixed=False):
    while True:
        den = rng.randint(2, 12)
        if require_mixed:
            num = rng.randint(den + 1, den * 4 - 1)
        else:
            num = rng.randint(1, den * 3)
        value = Fraction(num, den)
        if min_value <= value <= max_value and (not require_mixed or value.numerator > value.denominator):
            return value


def generate(skill, seed):
    rng = random.Random(seed + sum(map(ord, skill)) * 1009)
    out, seen = [], set()
    while len(out) < PROBLEM_COUNT:
        if skill == 'mixed-number-mul-div':
            a = _fraction(rng, Fraction(5, 4), Fraction(4, 1), True)
            b = _fraction(rng, Fraction(5, 4), Fraction(3, 1), True)
            op = rng.choice(('×', '÷'))
            p = {'type': skill, 'a_num': a.numerator, 'a_den': a.denominator, 'b_num': b.numerator, 'b_den': b.denominator, 'op': op}
        elif skill == 'fraction-decimal-mixed':
            a = _fraction(rng, Fraction(1, 4), Fraction(4, 1))
            b = rng.choice(DECIMALS)
            op = rng.choice(('×', '÷'))
            p = {'type': skill, 'a_num': a.numerator, 'a_den': a.denominator, 'b_num': b.numerator, 'b_den': b.denominator, 'op': op}
        elif skill == 'fraction-four-operations':
            pattern = rng.choice(('add-times', 'sub-times', 'times-div', 'paren-add-div'))
            a = _fraction(rng, Fraction(1, 2), Fraction(5, 1))
            b = _fraction(rng, Fraction(1, 4), Fraction(3, 1))
            c = _fraction(rng, Fraction(1, 4), Fraction(3, 1))
            p = {'type': skill, 'pattern': pattern, 'a_num': a.numerator, 'a_den': a.denominator, 'b_num': b.numerator, 'b_den': b.denominator, 'c_num': c.numerator, 'c_den': c.denominator}
        elif skill == 'simplify-ratio':
            g = rng.randint(2, 12)
            a0, b0 = rng.randint(1, 15), rng.randint(1, 15)
            if math.gcd(a0, b0) != 1:
                continue
            p = {'type': skill, 'a': a0 * g, 'b': b0 * g}
        else:
            raise AssertionError(skill)
        key = json.dumps(p, ensure_ascii=False, sort_keys=True)
        if key in seen:
            continue
        ans = independent_answer(p)
        if skill == 'fraction-four-operations' and (ans <= 0 or ans.numerator > 240 or ans.denominator > 120):
            continue
        if skill in ('mixed-number-mul-div', 'fraction-decimal-mixed') and (ans <= 0 or ans.numerator > 240 or ans.denominator > 120):
            continue
        if skill == 'simplify-ratio':
            left, right = map(int, ans.split(':'))
            assert math.gcd(left, right) == 1
        seen.add(key)
        out.append(p)
    return out


def problem_text(problem):
    kind = problem['type']
    if kind == 'mixed-number-mul-div':
        a = mixed_text(Fraction(problem['a_num'], problem['a_den']))
        b = mixed_text(Fraction(problem['b_num'], problem['b_den']))
        return f"{a} {problem['op']} {b} = □"
    if kind == 'fraction-decimal-mixed':
        a = ftext(Fraction(problem['a_num'], problem['a_den']))
        b = decimal_text(Fraction(problem['b_num'], problem['b_den']))
        return f"{a} {problem['op']} {b} = □"
    if kind == 'fraction-four-operations':
        a = ftext(Fraction(problem['a_num'], problem['a_den']))
        b = ftext(Fraction(problem['b_num'], problem['b_den']))
        c = ftext(Fraction(problem['c_num'], problem['c_den']))
        return {
            'add-times': f'{a} + {b} × {c} = □',
            'sub-times': f'{a} − {b} × {c} = □',
            'times-div': f'{a} × {b} ÷ {c} = □',
            'paren-add-div': f'（{a} + {b}）÷ {c} = □',
        }[problem['pattern']]
    if kind == 'simplify-ratio':
        return f"{problem['a']} : {problem['b']} を簡単にすると □"
    raise AssertionError(kind)


def answer_text(problem):
    ans = independent_answer(problem)
    return ans if isinstance(ans, str) else ftext(ans)


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
        for index, problem in enumerate(problems):
            x = 45 + (index // 10) * 275
            y = height - 120 - (index % 10) * 63
            c.setFillColor(colors.black)
            c.setFont(FONT, 11)
            c.drawString(x, y, str(index + 1))
            c.drawString(x + 24, y, problem_text(problem))
            if answer_mode:
                c.setFillColor(colors.red)
                c.setFont(FONT, 10)
                c.drawString(x + 24, y - 19, f'こたえ：{answer_text(problem)}')
        if not answer_mode:
            c.showPage()
    c.save()


def publish(repo_root):
    root = Path(repo_root)
    catalog_path = root / 'worksheets/catalog.json'
    catalog = json.loads(catalog_path.read_text(encoding='utf-8'))
    out = root / 'materials/worksheets/elementary/grade-06'
    out.mkdir(parents=True, exist_ok=True)
    existing = {entry['id'] for entry in catalog}
    published = 0
    for skill, (title, unit, answer_type, worksheet_format) in SKILLS.items():
        for variant, seed in enumerate(SEEDS, 1):
            worksheet_id = f'e6-{skill}-{variant:02d}'
            if worksheet_id in existing:
                continue
            problems = generate(skill, seed)
            content_hash = normalized_hash(problems)
            assert all(entry['content_hash'] != content_hash for entry in catalog)
            filename = f'{worksheet_id}.pdf'
            render_pdf(out / filename, title, problems)
            catalog.append({
                'id': worksheet_id,
                'school_level': 'elementary',
                'grade': 6,
                'subject': '算数',
                'unit': unit,
                'skill': skill,
                'problem_count': PROBLEM_COUNT,
                'seed': seed,
                'variant': variant,
                'title': f'{title} {variant:02d}',
                'description': f'小学6年の「{title}」を20問反復するプリントです。2ページ目は同じ問題配置に赤字で解答を加えています。',
                'url': f'materials/worksheets/elementary/grade-06/{filename}',
                'content_hash': content_hash,
                'difficulty': 'basic',
                'worksheet_series': 'focused',
                'worksheet_format': worksheet_format,
                'answer_type': answer_type,
            })
            existing.add(worksheet_id)
            published += 1
    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} grade-6 next-four worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
