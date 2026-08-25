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


GRADE3_DECIMAL_SKILLS = {
    'decimal-add-tenths': {'title': '0.1の位までの小数のたし算', 'type': 'decimal-add'},
    'decimal-sub-tenths': {'title': '0.1の位までの小数のひき算', 'type': 'decimal-sub'},
}
SEEDS = (4001, 4102, 4203)
PROBLEM_COUNT = 20
UNIT_TITLE = '小数のたし算・ひき算'


def fmt_tenths(value):
    return f'{value / 10:.1f}'


def independent_decimal_answer(problem):
    if problem['type'] == 'decimal-add':
        return problem['a_tenths'] + problem['b_tenths']
    if problem['type'] == 'decimal-sub':
        return problem['a_tenths'] - problem['b_tenths']
    raise ValueError(problem['type'])


def candidates(skill):
    spec = GRADE3_DECIMAL_SKILLS[skill]
    out = []
    if spec['type'] == 'decimal-add':
        for a in range(1, 99):
            for b in range(1, 99):
                if a + b <= 99:
                    out.append((a, b))
    else:
        for a in range(2, 100):
            for b in range(1, a):
                out.append((a, b))
    return out


def validate_grade3_decimal_problem(skill, problem):
    spec = GRADE3_DECIMAL_SKILLS[skill]
    assert problem['type'] == spec['type']
    a, b = problem['a_tenths'], problem['b_tenths']
    assert 1 <= a <= 99 and 1 <= b <= 98
    result = independent_decimal_answer(problem)
    assert result == problem['answer_tenths']
    assert fmt_tenths(result) == problem['answer']
    if spec['type'] == 'decimal-add':
        assert result <= 99
    else:
        assert a > b and result >= 1


def generate_grade3_decimals(skill, seed, count=PROBLEM_COUNT):
    pool = candidates(skill)
    rng = random.Random(seed)
    rng.shuffle(pool)
    # Ensure each sheet contains both calculations crossing an integer boundary
    # and calculations staying within the same integer interval.
    crossing, noncrossing = [], []
    for a, b in pool:
        if GRADE3_DECIMAL_SKILLS[skill]['type'] == 'decimal-add':
            crosses = (a % 10) + (b % 10) >= 10
        else:
            crosses = (a % 10) < (b % 10)
        (crossing if crosses else noncrossing).append((a, b))
    chosen = crossing[: count // 2] + noncrossing[: count - count // 2]
    rng.shuffle(chosen)
    problems = []
    for a, b in chosen:
        ptype = GRADE3_DECIMAL_SKILLS[skill]['type']
        answer_tenths = a + b if ptype == 'decimal-add' else a - b
        problem = {
            'type': ptype,
            'a_tenths': a,
            'b_tenths': b,
            'answer_tenths': answer_tenths,
            'answer': fmt_tenths(answer_tenths),
        }
        validate_grade3_decimal_problem(skill, problem)
        problems.append(problem)
    assert len(problems) == count
    assert len({(p['a_tenths'], p['b_tenths']) for p in problems}) == count
    return problems


def problem_text(problem):
    op = '+' if problem['type'] == 'decimal-add' else '-'
    return f"{fmt_tenths(problem['a_tenths'])} {op} {fmt_tenths(problem['b_tenths'])} = □"


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
                c.drawString(x + 28, y - 20, f"こたえ：{fmt_tenths(independent_decimal_answer(problem))}")
        if not answer_mode:
            c.showPage()
    c.save()


def publish(repo_root):
    root = Path(repo_root)
    catalog_path = root / 'worksheets' / 'catalog.json'
    catalog = json.loads(catalog_path.read_text(encoding='utf-8'))
    output_dir = root / 'materials' / 'worksheets' / 'elementary' / 'grade-03'
    output_dir.mkdir(parents=True, exist_ok=True)
    existing_ids = {entry['id'] for entry in catalog}
    published = 0

    for skill, spec in GRADE3_DECIMAL_SKILLS.items():
        for variant, seed in enumerate(SEEDS, start=1):
            wid = f'e3-{skill}-{variant:02d}'
            if wid in existing_ids:
                continue
            problems = generate_grade3_decimals(skill, seed)
            content_hash = normalized_hash(problems)
            assert all(entry['content_hash'] != content_hash for entry in catalog), f'duplicate worksheet content: {wid}'
            filename = f'{wid}.pdf'
            render_decimal_pdf(output_dir / filename, spec['title'], problems)
            catalog.append({
                'id': wid,
                'school_level': 'elementary',
                'grade': 3,
                'subject': '算数',
                'unit': UNIT_TITLE,
                'skill': skill,
                'problem_count': PROBLEM_COUNT,
                'seed': seed,
                'variant': variant,
                'title': f"{spec['title']} {variant:02d}",
                'description': '小学3年で扱う1/10の位までの小数の加法・減法を20問くり返すプリントです。2ページ目は同じ問題配置に赤字で解答を加えています。',
                'url': f'materials/worksheets/elementary/grade-03/{filename}',
                'content_hash': content_hash,
                'difficulty': 'basic',
                'worksheet_series': 'focused',
                'answer_type': 'numeric',
            })
            existing_ids.add(wid)
            published += 1

    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} grade-3 decimal worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
