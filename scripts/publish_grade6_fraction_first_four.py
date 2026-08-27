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

SEEDS = (11106, 11207, 11308)
PROBLEM_COUNT = 20
SKILLS = {
    'fraction-times-integer': ('分数×整数', '分数の乗法'),
    'fraction-times-fraction': ('分数×分数', '分数の乗法'),
    'fraction-div-integer': ('分数÷整数', '分数の除法'),
    'fraction-div-fraction': ('分数÷分数', '分数の除法'),
}


def fraction_text(value):
    value = Fraction(value)
    if value.denominator == 1:
        return str(value.numerator)
    return f'{value.numerator}/{value.denominator}'


def independent_answer(problem):
    left = Fraction(problem['a_num'], problem['a_den'])
    if problem['type'] == 'times-integer':
        return left * problem['b']
    if problem['type'] == 'times-fraction':
        return left * Fraction(problem['b_num'], problem['b_den'])
    if problem['type'] == 'div-integer':
        return left / problem['b']
    if problem['type'] == 'div-fraction':
        return left / Fraction(problem['b_num'], problem['b_den'])
    raise AssertionError(problem['type'])


def validate_problem(skill, problem):
    left = Fraction(problem['a_num'], problem['a_den'])
    assert 0 < left <= 9
    answer = independent_answer(problem)
    assert answer > 0
    assert answer.numerator <= 200 and answer.denominator <= 120
    if skill == 'fraction-times-integer':
        assert problem['type'] == 'times-integer' and 2 <= problem['b'] <= 9
    elif skill == 'fraction-times-fraction':
        assert problem['type'] == 'times-fraction'
        right = Fraction(problem['b_num'], problem['b_den'])
        assert 0 < right <= 3
    elif skill == 'fraction-div-integer':
        assert problem['type'] == 'div-integer' and 2 <= problem['b'] <= 9
    elif skill == 'fraction-div-fraction':
        assert problem['type'] == 'div-fraction'
        right = Fraction(problem['b_num'], problem['b_den'])
        assert 0 < right <= 3
    else:
        raise AssertionError(skill)


def _properish_fraction(rng, max_den=12, max_num_factor=2):
    den = rng.randint(2, max_den)
    num = rng.randint(1, den * max_num_factor)
    value = Fraction(num, den)
    return value.numerator, value.denominator


def generate(skill, seed):
    rng = random.Random(seed + sum(map(ord, skill)) * 1009)
    out, seen = [], set()
    while len(out) < PROBLEM_COUNT:
        a_num, a_den = _properish_fraction(rng, 12, 2)
        if skill == 'fraction-times-integer':
            problem = {'type': 'times-integer', 'a_num': a_num, 'a_den': a_den, 'b': rng.randint(2, 9)}
        elif skill == 'fraction-times-fraction':
            b_num, b_den = _properish_fraction(rng, 12, 1)
            problem = {'type': 'times-fraction', 'a_num': a_num, 'a_den': a_den, 'b_num': b_num, 'b_den': b_den}
        elif skill == 'fraction-div-integer':
            problem = {'type': 'div-integer', 'a_num': a_num, 'a_den': a_den, 'b': rng.randint(2, 9)}
        elif skill == 'fraction-div-fraction':
            b_num, b_den = _properish_fraction(rng, 12, 1)
            problem = {'type': 'div-fraction', 'a_num': a_num, 'a_den': a_den, 'b_num': b_num, 'b_den': b_den}
        else:
            raise AssertionError(skill)
        key = json.dumps(problem, ensure_ascii=False, sort_keys=True)
        if key in seen:
            continue
        try:
            validate_problem(skill, problem)
        except AssertionError:
            continue
        seen.add(key)
        out.append(problem)
    return out


def problem_text(problem):
    left = fraction_text(Fraction(problem['a_num'], problem['a_den']))
    if problem['type'] == 'times-integer':
        return f"{left} × {problem['b']} = □"
    if problem['type'] == 'times-fraction':
        right = fraction_text(Fraction(problem['b_num'], problem['b_den']))
        return f'{left} × {right} = □'
    if problem['type'] == 'div-integer':
        return f"{left} ÷ {problem['b']} = □"
    if problem['type'] == 'div-fraction':
        right = fraction_text(Fraction(problem['b_num'], problem['b_den']))
        return f'{left} ÷ {right} = □'
    raise AssertionError(problem['type'])


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
            c.setFont(FONT, 12)
            c.drawString(x, y, str(index + 1))
            c.drawString(x + 24, y, problem_text(problem))
            if answer_mode:
                c.setFillColor(colors.red)
                c.setFont(FONT, 11)
                c.drawString(x + 24, y - 19, f'こたえ：{fraction_text(independent_answer(problem))}')
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
    for skill, (title, unit) in SKILLS.items():
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
                'description': f'小学6年の「{title}」を20問反復するプリントです。答えは約分した分数で示し、2ページ目は同じ問題配置に赤字で解答を加えています。',
                'url': f'materials/worksheets/elementary/grade-06/{filename}',
                'content_hash': content_hash,
                'difficulty': 'basic',
                'worksheet_series': 'focused',
                'worksheet_format': 'fraction-horizontal',
                'answer_type': 'accepted-set',
            })
            existing.add(worksheet_id)
            published += 1
    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} grade-6 fraction first-four worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
