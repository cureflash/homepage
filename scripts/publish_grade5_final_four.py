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

SEEDS = (11014, 11115, 11216)
PROBLEM_COUNT = 20
SKILLS = {
    'fraction-add-sub-mixed': ('分数計算混合', '分数', 'fraction-add-sub-mixed', 'focused'),
    'decimal-percent-conversion': ('小数・百分率の変換', '割合', 'decimal-percent-conversion', 'focused'),
    'basic-ratio-calculation': ('割合の基本数値計算', '割合', 'basic-ratio-calculation', 'focused'),
    'grade5-review': ('小学5年 算数 総復習', '小学5年 総復習', 'grade5-review', 'review'),
}


def fraction_text(value):
    value = Fraction(value)
    return str(value.numerator) if value.denominator == 1 else f'{value.numerator}/{value.denominator}'


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
    if t == 'fraction-mixed':
        a = Fraction(problem['a_num'], problem['a_den'])
        b = Fraction(problem['b_num'], problem['b_den'])
        c = Fraction(problem['c_num'], problem['c_den'])
        return a + b - c if problem['pattern'] == 'add-sub' else a - b + c
    if t == 'decimal-to-percent':
        return Fraction(problem['scaled'], problem['scale']) * 100
    if t == 'percent-to-decimal':
        return Fraction(problem['percent'], 100)
    if t == 'ratio-find-rate':
        return Fraction(problem['compared'], problem['base'])
    if t == 'ratio-find-compared':
        return Fraction(problem['base'] * problem['rate_num'], problem['rate_den'])
    if t == 'ratio-find-base':
        return Fraction(problem['compared'] * problem['rate_den'], problem['rate_num'])
    if t == 'review-decimal-mul':
        return Fraction(problem['a_scaled'], 10) * Fraction(problem['b_scaled'], 10)
    if t == 'review-fraction-add':
        return Fraction(problem['a_num'], problem['a_den']) + Fraction(problem['b_num'], problem['b_den'])
    if t == 'review-percent':
        return Fraction(problem['scaled'], 100) * 100
    if t == 'review-divisor':
        n = problem['number']
        return tuple(d for d in range(1, n + 1) if n % d == 0)
    raise AssertionError(t)


def validate_problem(skill, problem):
    answer = independent_answer(problem)
    if skill == 'fraction-add-sub-mixed':
        assert problem['type'] == 'fraction-mixed'
        assert problem['pattern'] in ('add-sub', 'sub-add')
        assert len({problem['a_den'], problem['b_den'], problem['c_den']}) >= 2
        assert answer > 0
    elif skill == 'decimal-percent-conversion':
        assert problem['type'] in ('decimal-to-percent', 'percent-to-decimal')
        if problem['type'] == 'decimal-to-percent':
            assert problem['scale'] in (10, 100)
            assert 0 < problem['scaled'] < problem['scale']
            assert 0 < answer < 100
        else:
            assert 1 <= problem['percent'] <= 200
            assert answer > 0
    elif skill == 'basic-ratio-calculation':
        assert problem['type'] in ('ratio-find-rate', 'ratio-find-compared', 'ratio-find-base')
        assert answer > 0
        if problem['type'] == 'ratio-find-rate':
            assert problem['base'] > 0 and 0 < problem['compared'] <= problem['base'] * 2
        else:
            assert 1 <= problem['rate_num'] <= 20 and problem['rate_den'] in (10, 20, 100)
            assert Fraction(problem['rate_num'], problem['rate_den']) <= 2
            assert answer.denominator == 1
    elif skill == 'grade5-review':
        assert problem['type'] in ('review-decimal-mul', 'review-fraction-add', 'review-percent', 'review-divisor')
        if problem['type'] == 'review-divisor':
            assert len(answer) >= 2 and answer[0] == 1 and answer[-1] == problem['number']
        else:
            assert answer >= 0
    else:
        raise AssertionError(skill)


def _fraction_mixed_candidate(rng):
    den1, den2, den3 = (rng.randint(2, 12) for _ in range(3))
    a_num = rng.randint(1, den1 - 1)
    b_num = rng.randint(1, den2 - 1)
    c_num = rng.randint(1, den3 - 1)
    pattern = rng.choice(('add-sub', 'sub-add'))
    p = {'type': 'fraction-mixed', 'pattern': pattern, 'a_num': a_num, 'a_den': den1, 'b_num': b_num, 'b_den': den2, 'c_num': c_num, 'c_den': den3}
    return p if independent_answer(p) > 0 else None


def _ratio_candidate(rng, index):
    form = index % 3
    if form == 0:
        base = rng.choice((20, 25, 40, 50, 80, 100, 120, 200))
        rate = Fraction(rng.randint(1, 20), rng.choice((10, 20, 100)))
        compared = base * rate
        if compared.denominator != 1 or compared <= 0:
            return None
        return {'type': 'ratio-find-rate', 'base': base, 'compared': compared.numerator}
    if form == 1:
        rate_den = rng.choice((10, 20, 100))
        rate_num = rng.randint(1, min(20, rate_den * 2))
        base = rng.choice((20, 40, 50, 80, 100, 120, 200))
        p = {'type': 'ratio-find-compared', 'base': base, 'rate_num': rate_num, 'rate_den': rate_den}
        return p if independent_answer(p).denominator == 1 else None
    rate_den = rng.choice((10, 20, 100))
    rate_num = rng.randint(1, min(20, rate_den * 2))
    base = rng.choice((20, 40, 50, 80, 100, 120, 200))
    compared = Fraction(base * rate_num, rate_den)
    if compared.denominator != 1 or compared <= 0:
        return None
    return {'type': 'ratio-find-base', 'compared': compared.numerator, 'rate_num': rate_num, 'rate_den': rate_den}


def _review_candidate(rng, kind):
    if kind == 0:
        return {'type': 'review-decimal-mul', 'a_scaled': rng.randint(11, 99), 'b_scaled': rng.randint(2, 30)}
    if kind == 1:
        da, db = rng.sample(range(2, 13), 2)
        return {'type': 'review-fraction-add', 'a_num': rng.randint(1, da - 1), 'a_den': da, 'b_num': rng.randint(1, db - 1), 'b_den': db}
    if kind == 2:
        return {'type': 'review-percent', 'scaled': rng.randint(1, 99)}
    return {'type': 'review-divisor', 'number': rng.randint(12, 60)}


def generate(skill, seed):
    rng = random.Random(seed + sum(map(ord, skill)) * 1019)
    out, seen = [], set()
    while len(out) < PROBLEM_COUNT:
        if skill == 'fraction-add-sub-mixed':
            problem = _fraction_mixed_candidate(rng)
            if problem is None:
                continue
        elif skill == 'decimal-percent-conversion':
            if len(out) % 2 == 0:
                scale = rng.choice((10, 100))
                problem = {'type': 'decimal-to-percent', 'scaled': rng.randint(1, scale - 1), 'scale': scale}
            else:
                problem = {'type': 'percent-to-decimal', 'percent': rng.randint(1, 200)}
        elif skill == 'basic-ratio-calculation':
            problem = _ratio_candidate(rng, len(out))
            if problem is None:
                continue
        elif skill == 'grade5-review':
            problem = _review_candidate(rng, len(out) % 4)
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
    if t == 'fraction-mixed':
        a = f"{problem['a_num']}/{problem['a_den']}"
        b = f"{problem['b_num']}/{problem['b_den']}"
        c = f"{problem['c_num']}/{problem['c_den']}"
        return f'{a} + {b} − {c} = □' if problem['pattern'] == 'add-sub' else f'{a} − {b} + {c} = □'
    if t == 'decimal-to-percent':
        return f"{problem['scaled'] / problem['scale']:g} を百分率で表しましょう。"
    if t == 'percent-to-decimal':
        return f"{problem['percent']}% を小数で表しましょう。"
    if t == 'ratio-find-rate':
        return f"もとにする量 {problem['base']}、比べる量 {problem['compared']}。割合は □"
    if t == 'ratio-find-compared':
        return f"もとにする量 {problem['base']}、割合 {decimal_text(Fraction(problem['rate_num'], problem['rate_den']))}。比べる量は □"
    if t == 'ratio-find-base':
        return f"比べる量 {problem['compared']}、割合 {decimal_text(Fraction(problem['rate_num'], problem['rate_den']))}。もとにする量は □"
    if t == 'review-decimal-mul':
        return f"{problem['a_scaled']/10:g} × {problem['b_scaled']/10:g} = □"
    if t == 'review-fraction-add':
        return f"{problem['a_num']}/{problem['a_den']} + {problem['b_num']}/{problem['b_den']} = □"
    if t == 'review-percent':
        return f"{problem['scaled']/100:g} を百分率で表しましょう。"
    if t == 'review-divisor':
        return f"{problem['number']} の約数をすべて書きましょう。"
    raise AssertionError(t)


def answer_text(problem):
    answer = independent_answer(problem)
    if problem['type'] in ('decimal-to-percent', 'review-percent'):
        return f'{fraction_text(answer)}%'
    if problem['type'] == 'percent-to-decimal':
        return decimal_text(answer)
    if problem['type'] == 'ratio-find-rate':
        return decimal_text(answer)
    if problem['type'] == 'review-divisor':
        return '、'.join(map(str, answer))
    if isinstance(answer, Fraction):
        if problem['type'] in ('review-decimal-mul',):
            return decimal_text(answer)
        return fraction_text(answer)
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
            c.setFont(FONT, 10)
            c.drawString(x, y, str(index + 1))
            c.drawString(x + 24, y, problem_text(problem))
            if answer_mode:
                c.setFillColor(colors.red)
                c.setFont(FONT, 9)
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
    for skill, (title, unit, worksheet_format, series) in SKILLS.items():
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
                'worksheet_series': series,
                'worksheet_format': worksheet_format,
                'answer_type': 'accepted-set',
            })
            existing.add(worksheet_id)
            published += 1
    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} final grade-5 worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
