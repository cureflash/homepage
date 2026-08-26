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


GRADE4_DECIMAL_SKILLS = {
    'decimal-add-hundredths': {
        'title': '小数のたし算（1/100の位まで）',
        'type': 'decimal-add',
    },
    'decimal-sub-hundredths': {
        'title': '小数のひき算（1/100の位まで）',
        'type': 'decimal-sub',
    },
}
SEEDS = (4701, 4802, 4903)
PROBLEM_COUNT = 20
UNIT_TITLE = '小数のたし算・ひき算'


def independent_decimal_answer(problem):
    if problem['type'] == 'decimal-add':
        return problem['a_units'] + problem['b_units']
    if problem['type'] == 'decimal-sub':
        return problem['a_units'] - problem['b_units']
    raise ValueError(problem['type'])


def fractional_carry(a_units, b_units):
    hundredths_carry = (a_units % 10) + (b_units % 10) >= 10
    carry = 1 if hundredths_carry else 0
    tenths_carry = ((a_units // 10) % 10) + ((b_units // 10) % 10) + carry >= 10
    return hundredths_carry or tenths_carry


def fractional_borrow(a_units, b_units):
    a_h = a_units % 10
    b_h = b_units % 10
    if a_h < b_h:
        return True
    a_t = (a_units // 10) % 10
    b_t = (b_units // 10) % 10
    return a_t < b_t


def validate_grade4_decimal_problem(skill, problem):
    spec = GRADE4_DECIMAL_SKILLS[skill]
    assert problem['type'] == spec['type']
    a_units, b_units = problem['a_units'], problem['b_units']
    assert 1 <= a_units <= 9999
    assert 1 <= b_units <= 9999
    assert a_units % 10 != 0 or b_units % 10 != 0
    answer = independent_decimal_answer(problem)
    assert answer == problem['answer_units']
    if problem['type'] == 'decimal-add':
        assert a_units + b_units <= 9999
        assert answer > 0
    else:
        assert a_units > b_units
        assert answer > 0


def generate_grade4_decimal(skill, seed, count=PROBLEM_COUNT):
    assert count % 2 == 0
    spec = GRADE4_DECIMAL_SKILLS[skill]
    rng = random.Random(seed)
    problems = []
    seen = set()
    target_each = count // 2
    category_counts = {False: 0, True: 0}

    while len(problems) < count:
        if spec['type'] == 'decimal-add':
            a_units = rng.randint(1, 9000)
            b_units = rng.randint(1, 9999 - a_units)
            category = fractional_carry(a_units, b_units)
        else:
            a_units = rng.randint(2, 9999)
            b_units = rng.randint(1, a_units - 1)
            category = fractional_borrow(a_units, b_units)

        if category_counts[category] >= target_each:
            continue
        if a_units % 10 == 0 and b_units % 10 == 0:
            continue
        pair = (a_units, b_units)
        if pair in seen:
            continue

        answer_units = a_units + b_units if spec['type'] == 'decimal-add' else a_units - b_units
        problem = {
            'type': spec['type'],
            'a_units': a_units,
            'b_units': b_units,
            'answer_units': answer_units,
        }
        validate_grade4_decimal_problem(skill, problem)
        problems.append(problem)
        seen.add(pair)
        category_counts[category] += 1

    rng.shuffle(problems)
    assert category_counts == {False: target_each, True: target_each}
    return problems


def decimal_text(units):
    return f'{units / 100:.2f}'


def problem_text(problem):
    op = '+' if problem['type'] == 'decimal-add' else '-'
    return f"{decimal_text(problem['a_units'])} {op} {decimal_text(problem['b_units'])} = □"


def answer_text(problem):
    return decimal_text(independent_decimal_answer(problem))


def render_decimal_pdf(path, title, problems):
    c = canvas.Canvas(str(path), pagesize=A4)
    w, h = A4
    for answer_mode in (False, True):
        c.setFillColor(colors.black)
        c.setFont(FONT, 18)
        c.drawString(45, h - 55, title)
        c.setFont(FONT, 10)
        c.drawRightString(w - 45, h - 52, 'こたえ' if answer_mode else 'もんだい')
        c.drawString(45, h - 78, 'なまえ：____________________________')
        c.setFont(FONT, 14)
        for i, problem in enumerate(problems):
            col = i // 10
            row = i % 10
            x = 55 + col * 260
            y = h - 120 - row * 63
            c.setFillColor(colors.black)
            c.drawString(x, y, str(i + 1))
            c.drawString(x + 28, y, problem_text(problem))
            if answer_mode:
                c.setFillColor(colors.red)
                c.drawString(x + 28, y - 20, f'こたえ：{answer_text(problem)}')
        if not answer_mode:
            c.showPage()
    c.save()


def publish(repo_root):
    root = Path(repo_root)
    catalog_path = root / 'worksheets' / 'catalog.json'
    catalog = json.loads(catalog_path.read_text(encoding='utf-8'))
    output_dir = root / 'materials' / 'worksheets' / 'elementary' / 'grade-04'
    output_dir.mkdir(parents=True, exist_ok=True)
    existing_ids = {entry['id'] for entry in catalog}
    published = 0

    for skill, spec in GRADE4_DECIMAL_SKILLS.items():
        for variant, seed in enumerate(SEEDS, start=1):
            wid = f'e4-{skill}-{variant:02d}'
            if wid in existing_ids:
                continue
            problems = generate_grade4_decimal(skill, seed)
            content_hash = normalized_hash(problems)
            assert all(entry['content_hash'] != content_hash for entry in catalog), f'duplicate worksheet content: {wid}'
            filename = f'{wid}.pdf'
            render_decimal_pdf(output_dir / filename, spec['title'], problems)
            catalog.append({
                'id': wid,
                'school_level': 'elementary',
                'grade': 4,
                'subject': '算数',
                'unit': UNIT_TITLE,
                'skill': skill,
                'problem_count': PROBLEM_COUNT,
                'seed': seed,
                'variant': variant,
                'title': f"{spec['title']} {variant:02d}",
                'description': '1/100の位までの小数の加法・減法を20問反復するプリントです。繰り上がり・繰り下がりの有無を半数ずつ扱い、2ページ目は同じ問題配置に赤字で解答を加えています。',
                'url': f'materials/worksheets/elementary/grade-04/{filename}',
                'content_hash': content_hash,
                'difficulty': 'basic',
                'worksheet_series': 'focused',
                'worksheet_format': 'decimal-horizontal',
                'answer_type': 'numeric',
            })
            existing_ids.add(wid)
            published += 1

    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} grade-4 decimal add/sub worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
