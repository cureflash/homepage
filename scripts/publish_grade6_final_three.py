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

SEEDS = (12015, 12116, 12217)
SKILLS = {
    'unit-conversion-numeric': ('単位換算を含む数値練習', '量と測定', 'focused', 20, 'unit-conversion-horizontal'),
    'elementary-four-operations-review': ('小学校6年間の四則総復習', '小学校6年間 総復習', 'review', 20, 'four-operations-review'),
    'five-minute-calculation-challenge': ('5分間計算チャレンジ', '小学校6年間 総復習', 'review', 40, 'timed-calculation-grid'),
}

UNIT_PATTERNS = (
    ('m-to-cm', 'm', 'cm', 100),
    ('cm-to-m', 'cm', 'm', 100),
    ('km-to-m', 'km', 'm', 1000),
    ('m-to-km', 'm', 'km', 1000),
    ('kg-to-g', 'kg', 'g', 1000),
    ('g-to-kg', 'g', 'kg', 1000),
    ('L-to-mL', 'L', 'mL', 1000),
    ('mL-to-L', 'mL', 'L', 1000),
)


def independent_answer(problem):
    kind = problem['type']
    if kind == 'unit-conversion':
        return problem['value'] * problem['factor'] if problem['direction'] == 'multiply' else problem['value'] // problem['factor']
    if kind == 'add':
        return problem['a'] + problem['b']
    if kind == 'sub':
        return problem['a'] - problem['b']
    if kind == 'mul':
        return problem['a'] * problem['b']
    if kind == 'div':
        return problem['a'] // problem['b']
    raise AssertionError(kind)


def _make_unit_problem(rng):
    name, src, dst, factor = rng.choice(UNIT_PATTERNS)
    if name in ('m-to-cm', 'km-to-m', 'kg-to-g', 'L-to-mL'):
        value = rng.randint(2, 25)
        direction = 'multiply'
    else:
        value = factor * rng.randint(2, 25)
        direction = 'divide'
    return {'type': 'unit-conversion', 'pattern': name, 'src': src, 'dst': dst, 'factor': factor, 'direction': direction, 'value': value}


def _make_operation(rng, kind, challenge=False):
    if kind == 'add':
        limit = 999 if challenge else 99999
        a = rng.randint(10, limit)
        b = rng.randint(10, limit)
        return {'type': kind, 'a': a, 'b': b}
    if kind == 'sub':
        limit = 999 if challenge else 99999
        b = rng.randint(10, limit // 2)
        a = rng.randint(b, limit)
        return {'type': kind, 'a': a, 'b': b}
    if kind == 'mul':
        if challenge:
            a, b = rng.randint(2, 99), rng.randint(2, 12)
        else:
            a, b = rng.randint(12, 999), rng.randint(2, 99)
        return {'type': kind, 'a': a, 'b': b}
    if kind == 'div':
        divisor = rng.randint(2, 12 if challenge else 99)
        quotient = rng.randint(2, 99 if challenge else 999)
        return {'type': kind, 'a': divisor * quotient, 'b': divisor}
    raise AssertionError(kind)


def generate(skill, seed):
    title, unit, series, count, fmt = SKILLS[skill]
    rng = random.Random(seed + sum(map(ord, skill)) * 1009)
    out, seen = [], set()
    if skill == 'unit-conversion-numeric':
        while len(out) < count:
            p = _make_unit_problem(rng)
            key = json.dumps(p, ensure_ascii=False, sort_keys=True)
            if key in seen:
                continue
            seen.add(key)
            p['answer'] = independent_answer(p)
            out.append(p)
    else:
        kinds = ('add', 'sub', 'mul', 'div')
        per_kind = count // 4
        targets = {kind: per_kind for kind in kinds}
        while len(out) < count:
            kind = kinds[len(out) % 4]
            if targets[kind] <= 0:
                kind = next(k for k, remaining in targets.items() if remaining > 0)
            p = _make_operation(rng, kind, challenge=(skill == 'five-minute-calculation-challenge'))
            key = json.dumps(p, ensure_ascii=False, sort_keys=True)
            if key in seen:
                continue
            seen.add(key)
            targets[kind] -= 1
            p['answer'] = independent_answer(p)
            out.append(p)
        rng.shuffle(out)
    assert len(out) == count
    assert all(independent_answer(p) == p['answer'] for p in out)
    return out


def problem_text(problem):
    kind = problem['type']
    if kind == 'unit-conversion':
        return f"{problem['value']} {problem['src']} = □ {problem['dst']}"
    symbol = {'add': '+', 'sub': '−', 'mul': '×', 'div': '÷'}[kind]
    return f"{problem['a']} {symbol} {problem['b']} = □"


def render_pdf(path, title, problems, challenge=False):
    c = canvas.Canvas(str(path), pagesize=A4)
    width, height = A4
    for answer_mode in (False, True):
        c.setFillColor(colors.black)
        c.setFont(FONT, 18)
        c.drawString(45, height - 55, title)
        c.setFont(FONT, 10)
        c.drawRightString(width - 45, height - 52, 'こたえ' if answer_mode else 'もんだい')
        c.drawString(45, height - 78, 'なまえ：____________________________')
        if challenge:
            c.drawRightString(width - 45, height - 78, 'めやす：5分')
            cols, rows, x_step, y_step = 4, 10, 135, 63
            base_x, base_y = 35, height - 120
        else:
            cols, rows, x_step, y_step = 2, 10, 275, 63
            base_x, base_y = 45, height - 120
        for index, problem in enumerate(problems):
            col = index // rows
            row = index % rows
            x = base_x + col * x_step
            y = base_y - row * y_step
            c.setFillColor(colors.black)
            c.setFont(FONT, 9 if challenge else 11)
            c.drawString(x, y, str(index + 1))
            c.drawString(x + 20, y, problem_text(problem))
            if answer_mode:
                c.setFillColor(colors.red)
                c.setFont(FONT, 8 if challenge else 10)
                c.drawString(x + 20, y - 17, f"答:{independent_answer(problem)}")
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
    for skill, (title, unit, series, count, fmt) in SKILLS.items():
        for variant, seed in enumerate(SEEDS, 1):
            wid = f'e6-{skill}-{variant:02d}'
            if wid in existing:
                continue
            problems = generate(skill, seed)
            content_hash = normalized_hash(problems)
            assert all(entry['content_hash'] != content_hash for entry in catalog)
            filename = f'{wid}.pdf'
            render_pdf(out / filename, title, problems, challenge=(skill == 'five-minute-calculation-challenge'))
            catalog.append({
                'id': wid,
                'school_level': 'elementary',
                'grade': 6,
                'subject': '算数',
                'unit': unit,
                'skill': skill,
                'problem_count': count,
                'seed': seed,
                'variant': variant,
                'title': f'{title} {variant:02d}',
                'description': f'小学6年までの「{title}」を反復するプリントです。2ページ目は同じ問題配置に赤字で解答を加えています。',
                'url': f'materials/worksheets/elementary/grade-06/{filename}',
                'content_hash': content_hash,
                'difficulty': 'basic',
                'worksheet_series': series,
                'worksheet_format': fmt,
                'answer_type': 'numeric',
            })
            existing.add(wid)
            published += 1
    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} final grade-6 worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
