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

SEEDS = (10711, 10812, 10913)
PROBLEM_COUNT = 20
SKILLS = {
    'reduce-fraction': ('約分', '分数', 'fraction-reduction'),
    'unlike-denominator-add': ('異分母分数のたし算', '分数', 'fraction-addition'),
    'unlike-denominator-sub': ('異分母分数のひき算', '分数', 'fraction-subtraction'),
    'fraction-decimal-conversion': ('分数・小数の変換', '分数と小数', 'fraction-decimal-conversion'),
}
FINITE_DENOMINATORS = (2, 4, 5, 8, 10, 20, 25, 40, 50, 100)


def fraction_text(value):
    value = Fraction(value)
    if value.denominator == 1:
        return str(value.numerator)
    return f'{value.numerator}/{value.denominator}'


def decimal_text(value):
    value = Fraction(value)
    d = value.denominator
    for prime in (2, 5):
        while d % prime == 0:
            d //= prime
    assert d == 1
    scale = 1
    places = 0
    while scale % value.denominator:
        scale *= 10
        places += 1
    scaled = value.numerator * (scale // value.denominator)
    whole, frac = divmod(abs(scaled), scale)
    sign = '-' if scaled < 0 else ''
    if places == 0:
        return str(scaled)
    digits = f'{frac:0{places}d}'.rstrip('0')
    return f'{sign}{whole}' if not digits else f'{sign}{whole}.{digits}'


def independent_answer(problem):
    t = problem['type']
    if t == 'reduce':
        return Fraction(problem['num'], problem['den'])
    if t == 'unlike-add':
        return Fraction(problem['a_num'], problem['a_den']) + Fraction(problem['b_num'], problem['b_den'])
    if t == 'unlike-sub':
        return Fraction(problem['a_num'], problem['a_den']) - Fraction(problem['b_num'], problem['b_den'])
    if t == 'fraction-to-decimal':
        return Fraction(problem['num'], problem['den'])
    if t == 'decimal-to-fraction':
        return Fraction(problem['scaled'], problem['scale'])
    raise AssertionError(t)


def validate_problem(skill, problem):
    answer = independent_answer(problem)
    if skill == 'reduce-fraction':
        assert problem['type'] == 'reduce'
        assert 2 <= problem['num'] < problem['den'] <= 60
        assert math.gcd(problem['num'], problem['den']) > 1
        assert answer.numerator < problem['num'] and answer.denominator < problem['den']
    elif skill == 'unlike-denominator-add':
        assert problem['type'] == 'unlike-add'
        assert 2 <= problem['a_den'] <= 12 and 2 <= problem['b_den'] <= 12
        assert problem['a_den'] != problem['b_den']
        assert 1 <= problem['a_num'] < problem['a_den']
        assert 1 <= problem['b_num'] < problem['b_den']
        assert answer > 0
    elif skill == 'unlike-denominator-sub':
        assert problem['type'] == 'unlike-sub'
        a = Fraction(problem['a_num'], problem['a_den'])
        b = Fraction(problem['b_num'], problem['b_den'])
        assert problem['a_den'] != problem['b_den']
        assert a > b > 0 and answer == a - b
    elif skill == 'fraction-decimal-conversion':
        assert problem['type'] in ('fraction-to-decimal', 'decimal-to-fraction')
        assert 0 < answer < 1
        if problem['type'] == 'fraction-to-decimal':
            assert problem['den'] in FINITE_DENOMINATORS
            assert decimal_text(answer)
        else:
            assert problem['scale'] in (10, 100)
            assert 1 <= problem['scaled'] < problem['scale']
            assert Fraction(problem['scaled'], problem['scale']) == answer
    else:
        raise AssertionError(skill)


def generate(skill, seed):
    rng = random.Random(seed + sum(map(ord, skill)) * 1013)
    out, seen = [], set()
    while len(out) < PROBLEM_COUNT:
        if skill == 'reduce-fraction':
            den = rng.randint(4, 60)
            num = rng.randint(2, den - 1)
            if math.gcd(num, den) == 1:
                continue
            problem = {'type': 'reduce', 'num': num, 'den': den}
        elif skill in ('unlike-denominator-add', 'unlike-denominator-sub'):
            den1, den2 = rng.sample(range(2, 13), 2)
            num1, num2 = rng.randint(1, den1 - 1), rng.randint(1, den2 - 1)
            a, b = Fraction(num1, den1), Fraction(num2, den2)
            if a == b:
                continue
            if skill == 'unlike-denominator-add':
                problem = {'type': 'unlike-add', 'a_num': num1, 'a_den': den1, 'b_num': num2, 'b_den': den2}
            else:
                if a < b:
                    num1, den1, num2, den2 = num2, den2, num1, den1
                problem = {'type': 'unlike-sub', 'a_num': num1, 'a_den': den1, 'b_num': num2, 'b_den': den2}
        elif skill == 'fraction-decimal-conversion':
            if len(out) % 2 == 0:
                den = rng.choice(FINITE_DENOMINATORS)
                num = rng.randint(1, den - 1)
                value = Fraction(num, den)
                problem = {'type': 'fraction-to-decimal', 'num': value.numerator, 'den': value.denominator}
            else:
                scale = rng.choice((10, 100))
                scaled = rng.randint(1, scale - 1)
                problem = {'type': 'decimal-to-fraction', 'scaled': scaled, 'scale': scale}
        else:
            raise AssertionError(skill)
        key = json.dumps(problem, ensure_ascii=False, sort_keys=True)
        if key in seen:
            continue
        validate_problem(skill, problem)
        seen.add(key)
        out.append(problem)
    return out


def problem_text(problem):
    t = problem['type']
    if t == 'reduce':
        return f"{problem['num']}/{problem['den']} を約分しましょう。"
    if t == 'unlike-add':
        return f"{problem['a_num']}/{problem['a_den']} + {problem['b_num']}/{problem['b_den']} = □"
    if t == 'unlike-sub':
        return f"{problem['a_num']}/{problem['a_den']} − {problem['b_num']}/{problem['b_den']} = □"
    if t == 'fraction-to-decimal':
        return f"{problem['num']}/{problem['den']} を小数で表しましょう。"
    if t == 'decimal-to-fraction':
        return f"{problem['scaled'] / problem['scale']:g} を分数で表しましょう。"
    raise AssertionError(t)


def answer_text(problem):
    answer = independent_answer(problem)
    if problem['type'] == 'fraction-to-decimal':
        return decimal_text(answer)
    return fraction_text(answer)


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
            c.setFont(FONT, 11)
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
    output_dir = root / 'materials/worksheets/elementary/grade-05'
    output_dir.mkdir(parents=True, exist_ok=True)
    existing = {entry['id'] for entry in catalog}
    published = 0
    for skill, (title, unit, worksheet_format) in SKILLS.items():
        for variant, seed in enumerate(SEEDS, 1):
            worksheet_id = f'e5-{skill}-{variant:02d}'
            if worksheet_id in existing:
                continue
            problems = generate(skill, seed)
            content_hash = normalized_hash(problems)
            assert all(entry['content_hash'] != content_hash for entry in catalog)
            filename = f'{worksheet_id}.pdf'
            render_pdf(output_dir / filename, title, problems)
            catalog.append({
                'id': worksheet_id,
                'school_level': 'elementary',
                'grade': 5,
                'subject': '算数',
                'unit': unit,
                'skill': skill,
                'problem_count': PROBLEM_COUNT,
                'seed': seed,
                'variant': variant,
                'title': f'{title} {variant:02d}',
                'description': f'小学5年の「{title}」を20問反復するプリントです。2ページ目は同じ問題配置に赤字で解答を加えています。',
                'url': f'materials/worksheets/elementary/grade-05/{filename}',
                'content_hash': content_hash,
                'difficulty': 'basic',
                'worksheet_series': 'focused',
                'worksheet_format': worksheet_format,
                'answer_type': 'accepted-set',
            })
            existing.add(worksheet_id)
            published += 1
    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} grade-5 fraction-core worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
