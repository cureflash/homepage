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

SEEDS = (10105, 10206, 10307)
PROBLEM_COUNT = 20
SKILLS = {
    'decimal-times-decimal': ('小数×小数', '小数の乗法', 'numeric'),
    'decimal-div-decimal': ('小数÷小数（割り切れる）', '小数の除法', 'numeric'),
    'decimal-mixed-four': ('小数四則混合', '小数の四則計算', 'numeric'),
    'list-divisors': ('約数の列挙', '整数の性質', 'accepted-set'),
}


def fmt_fraction(value):
    value = Fraction(value)
    den = value.denominator
    d = den
    for p in (2, 5):
        while d % p == 0:
            d //= p
    assert d == 1
    places = 0
    scale = 1
    while scale % den != 0:
        scale *= 10
        places += 1
    n = value.numerator * (scale // den)
    whole, frac = divmod(abs(n), scale)
    sign = '-' if n < 0 else ''
    if places == 0:
        return f'{n}'
    text = f'{frac:0{places}d}'.rstrip('0')
    return f'{sign}{whole}' if not text else f'{sign}{whole}.{text}'


def divisors(n):
    return [d for d in range(1, n + 1) if n % d == 0]


def independent_answer(problem):
    t = problem['type']
    if t == 'mul':
        return Fraction(problem['a'], 10) * Fraction(problem['b'], 10)
    if t == 'div':
        return Fraction(problem['dividend'], 100) / Fraction(problem['divisor'], 10)
    if t == 'mixed-a':
        return Fraction(problem['a'], 10) + Fraction(problem['b'], 10) * Fraction(problem['c'], 10)
    if t == 'mixed-b':
        return (Fraction(problem['a'], 10) + Fraction(problem['b'], 10)) / Fraction(problem['c'], 10)
    if t == 'mixed-c':
        return Fraction(problem['a'], 10) * Fraction(problem['b'], 10) - Fraction(problem['c'], 10)
    if t == 'divisors':
        return divisors(problem['n'])
    raise AssertionError(t)


def validate_problem(skill, p):
    answer = independent_answer(p)
    if skill == 'decimal-times-decimal':
        assert p['type'] == 'mul' and 2 <= p['a'] <= 99 and 2 <= p['b'] <= 99
        assert p['a'] % 10 and p['b'] % 10
    elif skill == 'decimal-div-decimal':
        assert p['type'] == 'div' and 2 <= p['divisor'] <= 99
        assert p['divisor'] % 10 and p['dividend'] > 0
        assert answer.denominator in (1, 2, 4, 5, 8, 10, 20, 25, 40, 50, 100)
    elif skill == 'decimal-mixed-four':
        assert p['type'] in ('mixed-a', 'mixed-b', 'mixed-c')
        assert answer >= 0
    elif skill == 'list-divisors':
        assert p['type'] == 'divisors' and 12 <= p['n'] <= 96
        assert len(answer) >= 4
    else:
        raise AssertionError(skill)


def generate(skill, seed):
    rng = random.Random(seed + sum(map(ord, skill)) * 997)
    out, seen = [], set()
    while len(out) < PROBLEM_COUNT:
        if skill == 'decimal-times-decimal':
            p = {'type': 'mul', 'a': rng.randint(2, 99), 'b': rng.randint(2, 99)}
            if p['a'] % 10 == 0 or p['b'] % 10 == 0:
                continue
        elif skill == 'decimal-div-decimal':
            divisor = rng.randint(2, 99)
            quotient = rng.randint(2, 50)
            if divisor % 10 == 0 or quotient % 10 == 0:
                continue
            dividend = divisor * quotient
            if dividend > 9999:
                continue
            p = {'type': 'div', 'dividend': dividend, 'divisor': divisor}
        elif skill == 'decimal-mixed-four':
            kind = ('mixed-a', 'mixed-b', 'mixed-c')[len(out) % 3]
            if kind == 'mixed-a':
                p = {'type': kind, 'a': rng.randint(2, 90), 'b': rng.randint(2, 30), 'c': rng.randint(2, 30)}
            elif kind == 'mixed-b':
                c = rng.randint(2, 9)
                q = rng.randint(2, 30)
                a = rng.randint(1, c * q - 1)
                b = c * q - a
                p = {'type': kind, 'a': a, 'b': b, 'c': c}
            else:
                a, b = rng.randint(3, 40), rng.randint(3, 30)
                product = Fraction(a * b, 100)
                cmax = min(30, int(product * 10))
                if cmax < 1:
                    continue
                p = {'type': kind, 'a': a, 'b': b, 'c': rng.randint(1, cmax)}
        elif skill == 'list-divisors':
            n = rng.randint(12, 96)
            if len(divisors(n)) < 4:
                continue
            p = {'type': 'divisors', 'n': n}
        else:
            raise AssertionError(skill)
        key = json.dumps(p, ensure_ascii=False, sort_keys=True)
        if key in seen:
            continue
        seen.add(key)
        validate_problem(skill, p)
        out.append(p)
    return out


def problem_text(p):
    t = p['type']
    if t == 'mul': return f"{p['a']/10:g} × {p['b']/10:g} = □"
    if t == 'div': return f"{p['dividend']/100:g} ÷ {p['divisor']/10:g} = □"
    if t == 'mixed-a': return f"{p['a']/10:g} + {p['b']/10:g} × {p['c']/10:g} = □"
    if t == 'mixed-b': return f"（{p['a']/10:g} + {p['b']/10:g}）÷ {p['c']/10:g} = □"
    if t == 'mixed-c': return f"{p['a']/10:g} × {p['b']/10:g} − {p['c']/10:g} = □"
    if t == 'divisors': return f"{p['n']} の約数をすべて書きましょう。"
    raise AssertionError(t)


def answer_text(p):
    a = independent_answer(p)
    return '、'.join(map(str, a)) if isinstance(a, list) else fmt_fraction(a)


def render_pdf(path, title, problems):
    c = canvas.Canvas(str(path), pagesize=A4); w, h = A4
    for answer_mode in (False, True):
        c.setFillColor(colors.black); c.setFont(FONT, 18); c.drawString(45, h - 55, title)
        c.setFont(FONT, 10); c.drawRightString(w - 45, h - 52, 'こたえ' if answer_mode else 'もんだい')
        c.drawString(45, h - 78, 'なまえ：____________________________')
        for index, p in enumerate(problems):
            x = 45 + (index // 10) * 275; y = h - 120 - (index % 10) * 63
            c.setFillColor(colors.black); c.setFont(FONT, 11); c.drawString(x, y, str(index + 1))
            c.setFont(FONT, 10 if p['type'] == 'divisors' else 12); c.drawString(x + 24, y, problem_text(p))
            if answer_mode:
                c.setFillColor(colors.red); c.setFont(FONT, 9 if p['type'] == 'divisors' else 11)
                c.drawString(x + 24, y - 19, f'こたえ：{answer_text(p)}')
        if not answer_mode: c.showPage()
    c.save()


def publish(repo_root):
    root = Path(repo_root); catalog_path = root / 'worksheets/catalog.json'
    catalog = json.loads(catalog_path.read_text(encoding='utf-8'))
    out = root / 'materials/worksheets/elementary/grade-05'; out.mkdir(parents=True, exist_ok=True)
    existing = {e['id'] for e in catalog}; published = 0
    for skill, (title, unit, answer_type) in SKILLS.items():
        for variant, seed in enumerate(SEEDS, 1):
            wid = f'e5-{skill}-{variant:02d}'
            if wid in existing: continue
            problems = generate(skill, seed); content_hash = normalized_hash(problems)
            assert all(e['content_hash'] != content_hash for e in catalog)
            filename = f'{wid}.pdf'; render_pdf(out / filename, title, problems)
            catalog.append({'id': wid, 'school_level': 'elementary', 'grade': 5, 'subject': '算数', 'unit': unit,
                'skill': skill, 'problem_count': PROBLEM_COUNT, 'seed': seed, 'variant': variant,
                'title': f'{title} {variant:02d}',
                'description': f'小学5年の「{title}」を20問反復するプリントです。2ページ目は同じ問題配置に赤字で解答を加えています。',
                'url': f'materials/worksheets/elementary/grade-05/{filename}', 'content_hash': content_hash,
                'difficulty': 'basic', 'worksheet_series': 'focused', 'worksheet_format': 'grade5-core-horizontal', 'answer_type': answer_type})
            existing.add(wid); published += 1
    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} grade-5 first-four worksheets')

if __name__ == '__main__': publish(sys.argv[1] if len(sys.argv) > 1 else '.')
