import json
import random
import sys
from pathlib import Path

try:
    from scripts.worksheet_factory import normalized_hash, render_pdf, validate_catalog
except ModuleNotFoundError:
    from worksheet_factory import normalized_hash, render_pdf, validate_catalog


GRADE3_MULTIPLICATION_SKILLS = {
    'times-2digit-1digit': {'title': '2桁 × 1桁', 'a_min': 20, 'a_max': 99, 'b_min': 2, 'b_max': 9},
    'times-2digit-2digit': {'title': '2桁 × 2桁', 'a_min': 10, 'a_max': 99, 'b_min': 10, 'b_max': 99},
    'times-3digit-1digit': {'title': '3桁 × 1桁', 'a_min': 100, 'a_max': 999, 'b_min': 2, 'b_max': 9},
}
SEEDS = (3401, 3502, 3603)
PROBLEM_COUNT = 20
UNIT_TITLE = '2位数・3位数のかけ算'


def independent_answer(problem):
    assert problem['type'] == 'mul'
    return problem['a'] * problem['b']


def validate_grade3_problem(skill, problem):
    spec = GRADE3_MULTIPLICATION_SKILLS[skill]
    a, b = problem['a'], problem['b']
    assert problem['type'] == 'mul'
    assert spec['a_min'] <= a <= spec['a_max']
    assert spec['b_min'] <= b <= spec['b_max']
    assert independent_answer(problem) == problem['answer']


def generate_grade3(skill, seed, count=PROBLEM_COUNT):
    spec = GRADE3_MULTIPLICATION_SKILLS[skill]
    rng = random.Random(seed)
    problems = []
    seen = set()
    while len(problems) < count:
        a = rng.randint(spec['a_min'], spec['a_max'])
        b = rng.randint(spec['b_min'], spec['b_max'])
        key = (a, b)
        if key in seen:
            continue
        seen.add(key)
        problem = {'type': 'mul', 'a': a, 'b': b, 'answer': a * b}
        validate_grade3_problem(skill, problem)
        problems.append(problem)
    assert len(problems) == count
    assert len(seen) == count
    return problems


def render_problem_text(problem):
    return f"{problem['a']} × {problem['b']} = □"


def publish(repo_root):
    root = Path(repo_root)
    catalog_path = root / 'worksheets' / 'catalog.json'
    catalog = json.loads(catalog_path.read_text(encoding='utf-8'))
    output_dir = root / 'materials' / 'worksheets' / 'elementary' / 'grade-03'
    output_dir.mkdir(parents=True, exist_ok=True)
    existing_ids = {entry['id'] for entry in catalog}
    published = 0

    # worksheet_factory's generic renderer does not yet know the mul type, so
    # reuse its rendering contract with temporary add-shaped display records
    # whose displayed expression is patched through a local lightweight renderer.
    from reportlab.lib import colors
    from reportlab.lib.pagesizes import A4
    from reportlab.pdfgen import canvas
    try:
        from scripts.worksheet_factory import FONT
    except ModuleNotFoundError:
        from worksheet_factory import FONT

    def render_mul_pdf(path, title, problems):
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
                c.drawString(x + 28, y, render_problem_text(problem))
                if answer_mode:
                    c.setFillColor(colors.red)
                    c.drawString(x + 28, y - 20, f"こたえ：{independent_answer(problem)}")
            if not answer_mode:
                c.showPage()
        c.save()

    for skill, spec in GRADE3_MULTIPLICATION_SKILLS.items():
        for variant, seed in enumerate(SEEDS, start=1):
            wid = f'e3-{skill}-{variant:02d}'
            if wid in existing_ids:
                continue
            problems = generate_grade3(skill, seed)
            content_hash = normalized_hash(problems)
            assert all(entry['content_hash'] != content_hash for entry in catalog), f'duplicate worksheet content: {wid}'
            filename = f'{wid}.pdf'
            render_mul_pdf(output_dir / filename, spec['title'], problems)
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
                'description': '小学3年で扱う2位数・3位数の乗法を20問くり返すプリントです。2ページ目は同じ問題配置に赤字で解答を加えています。',
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
    print(f'published {published} grade-3 multiplication worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
