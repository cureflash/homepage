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

SEEDS = (11712, 11813, 11914)
PROBLEM_COUNT = 20
SKILLS = {
    'ratio-value': ('比の値', '比', 'accepted-set', 'ratio-value-horizontal'),
    'proportion-missing-value': ('比例式の欠損値計算', '比', 'numeric', 'proportion-horizontal'),
    'variable-substitution': ('文字式への代入', '文字を用いた式', 'numeric', 'substitution-horizontal'),
    'speed-distance-time-substitution': ('速さ・時間・道のりの公式代入', '速さ', 'numeric', 'speed-formula-horizontal'),
}


def fraction_text(value):
    value = Fraction(value)
    return str(value.numerator) if value.denominator == 1 else f'{value.numerator}/{value.denominator}'


def independent_answer(problem):
    kind = problem['type']
    if kind == 'ratio-value':
        return Fraction(problem['a'], problem['b'])
    if kind == 'proportion-missing-value':
        return problem['b'] * problem['c'] // problem['a']
    if kind == 'variable-substitution':
        x = problem['x']
        if problem['pattern'] == 'ax-plus-b':
            return problem['a'] * x + problem['b']
        if problem['pattern'] == 'ax-minus-b':
            return problem['a'] * x - problem['b']
        if problem['pattern'] == 'a-times-x-plus-c':
            return problem['a'] * (x + problem['c'])
        if problem['pattern'] == 'a-plus-bx':
            return problem['a'] + problem['b'] * x
        raise AssertionError(problem['pattern'])
    if kind == 'speed-distance-time-substitution':
        if problem['target'] == 'distance':
            return problem['speed'] * problem['time']
        if problem['target'] == 'speed':
            return problem['distance'] // problem['time']
        if problem['target'] == 'time':
            return problem['distance'] // problem['speed']
        raise AssertionError(problem['target'])
    raise AssertionError(kind)


def generate(skill, seed):
    rng = random.Random(seed + sum(map(ord, skill)) * 1009)
    out, seen = [], set()
    while len(out) < PROBLEM_COUNT:
        if skill == 'ratio-value':
            a = rng.randint(1, 30)
            b = rng.randint(1, 30)
            if a == b:
                continue
            p = {'type': skill, 'a': a, 'b': b}
        elif skill == 'proportion-missing-value':
            a = rng.randint(1, 12)
            b = rng.randint(1, 12)
            if math.gcd(a, b) != 1:
                continue
            scale = rng.randint(2, 12)
            c = a * scale
            p = {'type': skill, 'a': a, 'b': b, 'c': c}
        elif skill == 'variable-substitution':
            pattern = rng.choice(('ax-plus-b', 'ax-minus-b', 'a-times-x-plus-c', 'a-plus-bx'))
            x = rng.randint(1, 12)
            a = rng.randint(2, 9)
            b = rng.randint(1, 20)
            c = rng.randint(1, 8)
            p = {'type': skill, 'pattern': pattern, 'x': x, 'a': a, 'b': b, 'c': c}
            if pattern == 'ax-minus-b' and a * x - b < 0:
                continue
        elif skill == 'speed-distance-time-substitution':
            target = rng.choice(('distance', 'speed', 'time'))
            speed = rng.choice((3, 4, 5, 6, 8, 10, 12, 15, 20, 25, 30, 40, 50, 60, 80))
            time = rng.randint(2, 12)
            distance = speed * time
            p = {'type': skill, 'target': target, 'speed': speed, 'time': time, 'distance': distance}
        else:
            raise AssertionError(skill)
        key = json.dumps(p, ensure_ascii=False, sort_keys=True)
        if key in seen:
            continue
        ans = independent_answer(p)
        if skill == 'ratio-value' and (ans.numerator > 30 or ans.denominator > 30):
            continue
        if skill != 'ratio-value' and not (0 <= ans <= 9999):
            continue
        seen.add(key)
        out.append(p)
    return out


def problem_text(problem):
    kind = problem['type']
    if kind == 'ratio-value':
        return f"{problem['a']} : {problem['b']} の比の値は □"
    if kind == 'proportion-missing-value':
        return f"{problem['a']} : {problem['b']} = {problem['c']} : □"
    if kind == 'variable-substitution':
        x, a, b, c = problem['x'], problem['a'], problem['b'], problem['c']
        expression = {
            'ax-plus-b': f'{a} × x + {b}',
            'ax-minus-b': f'{a} × x − {b}',
            'a-times-x-plus-c': f'{a} ×（x + {c}）',
            'a-plus-bx': f'{a} + {b} × x',
        }[problem['pattern']]
        return f'x = {x} のとき、{expression} = □'
    if kind == 'speed-distance-time-substitution':
        if problem['target'] == 'distance':
            return f"速さ {problem['speed']} km/時、時間 {problem['time']} 時間 → 道のり □ km"
        if problem['target'] == 'speed':
            return f"道のり {problem['distance']} km、時間 {problem['time']} 時間 → 速さ □ km/時"
        return f"道のり {problem['distance']} km、速さ {problem['speed']} km/時 → 時間 □ 時間"
    raise AssertionError(kind)


def answer_text(problem):
    ans = independent_answer(problem)
    return fraction_text(ans) if isinstance(ans, Fraction) else str(ans)


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
            c.setFont(FONT, 10 if problem['type'] == 'speed-distance-time-substitution' else 11)
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
    print(f'published {published} grade-6 ratio/algebra/speed worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
