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

SEEDS = (10408, 10509, 10610)
PROBLEM_COUNT = 20
SKILLS = {
    'list-multiples': ('倍数の列挙', '整数の性質', 'accepted-set', 'number-properties'),
    'greatest-common-divisor': ('最大公約数', '整数の性質', 'numeric', 'number-properties'),
    'least-common-multiple': ('最小公倍数', '整数の性質', 'numeric', 'number-properties'),
    'common-denominator': ('通分', '分数', 'accepted-set', 'fraction-common-denominator'),
}


def gcd(a, b):
    return math.gcd(a, b)


def lcm(a, b):
    return abs(a * b) // gcd(a, b)


def independent_answer(problem):
    t = problem['type']
    if t == 'multiples':
        n = problem['n']
        return [n * i for i in range(1, 7)]
    if t == 'gcd':
        return gcd(problem['a'], problem['b'])
    if t == 'lcm':
        return lcm(problem['a'], problem['b'])
    if t == 'common-denominator':
        a, b = problem['a_num'], problem['a_den']
        c, d = problem['b_num'], problem['b_den']
        common = lcm(b, d)
        return (a * (common // b), common, c * (common // d), common)
    raise AssertionError(t)


def validate_problem(skill, problem):
    answer = independent_answer(problem)
    if skill == 'list-multiples':
        assert problem['type'] == 'multiples'
        assert 2 <= problem['n'] <= 25
        assert len(answer) == 6 and answer == sorted(answer)
    elif skill == 'greatest-common-divisor':
        assert problem['type'] == 'gcd'
        assert 4 <= problem['a'] <= 96 and 4 <= problem['b'] <= 96
        assert problem['a'] != problem['b']
        assert 2 <= answer < min(problem['a'], problem['b'])
    elif skill == 'least-common-multiple':
        assert problem['type'] == 'lcm'
        assert 2 <= problem['a'] <= 24 and 2 <= problem['b'] <= 24
        assert problem['a'] != problem['b']
        assert max(problem['a'], problem['b']) < answer <= 240
    elif skill == 'common-denominator':
        assert problem['type'] == 'common-denominator'
        assert 2 <= problem['a_den'] <= 12 and 2 <= problem['b_den'] <= 12
        assert problem['a_den'] != problem['b_den']
        assert 1 <= problem['a_num'] < problem['a_den']
        assert 1 <= problem['b_num'] < problem['b_den']
        an, den1, bn, den2 = answer
        assert den1 == den2 == lcm(problem['a_den'], problem['b_den'])
        assert Fraction(an, den1) == Fraction(problem['a_num'], problem['a_den'])
        assert Fraction(bn, den2) == Fraction(problem['b_num'], problem['b_den'])
    else:
        raise AssertionError(skill)


def generate(skill, seed):
    rng = random.Random(seed + sum(map(ord, skill)) * 1009)
    out, seen = [], set()
    while len(out) < PROBLEM_COUNT:
        if skill == 'list-multiples':
            problem = {'type': 'multiples', 'n': rng.randint(2, 25)}
        elif skill == 'greatest-common-divisor':
            common = rng.randint(2, 12)
            x, y = rng.sample(range(2, 9), 2)
            if math.gcd(x, y) != 1:
                continue
            a, b = common * x, common * y
            if max(a, b) > 96:
                continue
            problem = {'type': 'gcd', 'a': min(a, b), 'b': max(a, b)}
        elif skill == 'least-common-multiple':
            a, b = rng.sample(range(2, 25), 2)
            value = lcm(a, b)
            if value <= max(a, b) or value > 240:
                continue
            problem = {'type': 'lcm', 'a': min(a, b), 'b': max(a, b)}
        elif skill == 'common-denominator':
            den1, den2 = rng.sample(range(2, 13), 2)
            common = lcm(den1, den2)
            if common > 60:
                continue
            num1 = rng.randint(1, den1 - 1)
            num2 = rng.randint(1, den2 - 1)
            # Avoid equal fractions so the exercise shows two genuinely distinct quantities.
            if Fraction(num1, den1) == Fraction(num2, den2):
                continue
            problem = {
                'type': 'common-denominator',
                'a_num': num1, 'a_den': den1,
                'b_num': num2, 'b_den': den2,
            }
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
    if t == 'multiples':
        return f"{problem['n']} の倍数を小さい方から6つ書きましょう。"
    if t == 'gcd':
        return f"{problem['a']} と {problem['b']} の最大公約数は □"
    if t == 'lcm':
        return f"{problem['a']} と {problem['b']} の最小公倍数は □"
    if t == 'common-denominator':
        return f"{problem['a_num']}/{problem['a_den']} と {problem['b_num']}/{problem['b_den']} を最小公倍数で通分しましょう。"
    raise AssertionError(t)


def answer_text(problem):
    answer = independent_answer(problem)
    if problem['type'] == 'multiples':
        return '、'.join(map(str, answer))
    if problem['type'] == 'common-denominator':
        an, den, bn, _ = answer
        return f'{an}/{den}、{bn}/{den}'
    return str(answer)


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
            c.setFont(FONT, 9 if problem['type'] in ('multiples', 'common-denominator') else 11)
            c.drawString(x + 24, y, problem_text(problem))
            if answer_mode:
                c.setFillColor(colors.red)
                c.setFont(FONT, 9 if problem['type'] in ('multiples', 'common-denominator') else 11)
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
    for skill, (title, unit, answer_type, worksheet_format) in SKILLS.items():
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
                'answer_type': answer_type,
            })
            existing.add(worksheet_id)
            published += 1
    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} grade-5 number-properties/common-denominator worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
