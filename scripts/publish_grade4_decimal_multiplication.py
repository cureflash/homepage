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


GRADE4_DECIMAL_MULTIPLICATION_SKILLS = {
    'decimal-mul-one-digit': {
        'title': '小数×1桁整数（1/100の位まで）',
    },
}
SEEDS = (5001, 5102, 5203)
PROBLEM_COUNT = 20
UNIT_TITLE = '小数×整数'


def independent_decimal_multiplication_answer(problem):
    return problem['multiplicand_units'] * problem['multiplier']


def has_fractional_carry(units, multiplier):
    hundredths = units % 10
    tenths = (units // 10) % 10
    carry_from_hundredths = (hundredths * multiplier) // 10
    return hundredths * multiplier >= 10 or tenths * multiplier + carry_from_hundredths >= 10


def validate_grade4_decimal_multiplication_problem(problem):
    units = problem['multiplicand_units']
    multiplier = problem['multiplier']
    assert 1 <= units <= 9999
    assert 2 <= multiplier <= 9
    assert units % 10 != 0
    answer = independent_decimal_multiplication_answer(problem)
    assert answer == problem['answer_units']
    assert answer <= 99999


def generate_grade4_decimal_multiplication(seed, count=PROBLEM_COUNT):
    assert count % 2 == 0
    rng = random.Random(seed)
    problems = []
    seen = set()
    target_each = count // 2
    category_counts = {False: 0, True: 0}

    while len(problems) < count:
        units = rng.randint(1, 9999)
        multiplier = rng.randint(2, 9)
        if units % 10 == 0:
            continue
        answer_units = units * multiplier
        if answer_units > 99999:
            continue
        category = has_fractional_carry(units, multiplier)
        if category_counts[category] >= target_each:
            continue
        key = (units, multiplier)
        if key in seen:
            continue
        problem = {
            'multiplicand_units': units,
            'multiplier': multiplier,
            'answer_units': answer_units,
        }
        validate_grade4_decimal_multiplication_problem(problem)
        problems.append(problem)
        seen.add(key)
        category_counts[category] += 1

    rng.shuffle(problems)
    assert category_counts == {False: target_each, True: target_each}
    return problems


def decimal_text(units):
    return f'{units // 100}.{units % 100:02d}'


def problem_text(problem):
    return f"{decimal_text(problem['multiplicand_units'])} × {problem['multiplier']} = □"


def answer_text(problem):
    return decimal_text(independent_decimal_multiplication_answer(problem))


def render_decimal_multiplication_pdf(path, title, problems):
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

    for skill, spec in GRADE4_DECIMAL_MULTIPLICATION_SKILLS.items():
        for variant, seed in enumerate(SEEDS, start=1):
            wid = f'e4-{skill}-{variant:02d}'
            if wid in existing_ids:
                continue
            problems = generate_grade4_decimal_multiplication(seed)
            content_hash = normalized_hash(problems)
            assert all(entry['content_hash'] != content_hash for entry in catalog), f'duplicate worksheet content: {wid}'
            filename = f'{wid}.pdf'
            render_decimal_multiplication_pdf(output_dir / filename, spec['title'], problems)
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
                'description': '1/100の位までの小数に1桁整数を掛ける計算を20問反復するプリントです。小数部分で繰り上がりがある問題とない問題を半数ずつ扱い、2ページ目は同じ問題配置に赤字で解答を加えています。',
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
    print(f'published {published} grade-4 decimal multiplication worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
