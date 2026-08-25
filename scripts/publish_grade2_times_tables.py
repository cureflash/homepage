import json
import random
import sys
from collections import Counter
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas

try:
    from scripts.worksheet_factory import FONT, normalized_hash, validate_catalog
except ModuleNotFoundError:
    from worksheet_factory import FONT, normalized_hash, validate_catalog


GRADE2_TIMES_TABLE_SKILLS = {
    f'times-{dan}': {
        'dan': dan,
        'title': f'九九 {dan}の段',
    }
    for dan in range(2, 10)
}
TIMES_TABLE_SEEDS = (701, 802, 903)
PROBLEM_COUNT = 20
UNIT_TITLE = '九九'


def independent_times_table_answer(problem):
    assert problem['type'] == 'mul'
    return problem['a'] * problem['b']


def validate_times_table_problem(skill, problem):
    spec = GRADE2_TIMES_TABLE_SKILLS[skill]
    assert problem['type'] == 'mul'
    assert problem['a'] == spec['dan']
    assert 1 <= problem['b'] <= 9
    assert independent_times_table_answer(problem) == problem['answer']


def generate_times_table(skill, seed, count=PROBLEM_COUNT):
    assert count == PROBLEM_COUNT, '段別九九は9つの基本事実を偏りなく20問で反復する固定構成です'
    dan = GRADE2_TIMES_TABLE_SKILLS[skill]['dan']
    rng = random.Random(seed + dan * 1009)

    multipliers = list(range(1, 10)) * 2
    multipliers.extend(rng.sample(range(1, 10), 2))
    rng.shuffle(multipliers)

    problems = []
    for multiplier in multipliers:
        problem = {
            'type': 'mul',
            'a': dan,
            'b': multiplier,
            'answer': dan * multiplier,
        }
        validate_times_table_problem(skill, problem)
        problems.append(problem)

    counts = Counter(problem['b'] for problem in problems)
    assert set(counts) == set(range(1, 10))
    assert sorted(counts.values()) == [2] * 7 + [3] * 2
    return problems


def draw_times_table_problem(c, x, y, number, problem, answer_mode=False):
    c.setFillColor(colors.black)
    c.setFont(FONT, 14)
    c.drawString(x, y, str(number))
    c.drawString(x + 28, y, f"{problem['a']} × {problem['b']} = □")
    if answer_mode:
        c.setFillColor(colors.red)
        c.drawString(x + 28, y - 20, f"こたえ：{independent_times_table_answer(problem)}")
        c.setFillColor(colors.black)


def render_times_table_pdf(path, title, problems):
    assert len(problems) == PROBLEM_COUNT
    for problem in problems:
        assert independent_times_table_answer(problem) == problem['answer']

    c = canvas.Canvas(str(path), pagesize=A4)
    w, h = A4

    def page_header(label):
        c.setFillColor(colors.black)
        c.setFont(FONT, 18)
        c.drawString(45, h - 55, title)
        c.setFont(FONT, 10)
        c.drawRightString(w - 45, h - 52, label)
        c.drawString(45, h - 78, 'なまえ：____________________________')
        c.drawString(45, h - 97, '九九をくり返して、すらすら言えるようにしましょう。')

    for page_index, answer_mode in enumerate((False, True)):
        page_header('こたえ' if answer_mode else 'もんだい')
        for index, problem in enumerate(problems):
            col = index // 10
            row = index % 10
            x = 55 + col * 260
            y = h - 135 - row * 61
            draw_times_table_problem(c, x, y, index + 1, problem, answer_mode=answer_mode)
        if page_index == 0:
            c.showPage()
    c.save()


def description_for(dan):
    return f'小学2年の九九 {dan}の段を20問くり返すプリントです。1〜9を最低2回ずつ扱い、2ページ目は同じ問題配置に赤字で解答を加えています。'


def publish(repo_root):
    root = Path(repo_root)
    catalog_path = root / 'worksheets' / 'catalog.json'
    catalog = json.loads(catalog_path.read_text(encoding='utf-8'))
    output_dir = root / 'materials' / 'worksheets' / 'elementary' / 'grade-02'
    output_dir.mkdir(parents=True, exist_ok=True)
    existing_ids = {entry['id'] for entry in catalog}
    published = 0

    for skill, spec in GRADE2_TIMES_TABLE_SKILLS.items():
        for variant, seed in enumerate(TIMES_TABLE_SEEDS, start=1):
            wid = f'e2-{skill}-{variant:02d}'
            if wid in existing_ids:
                continue
            problems = generate_times_table(skill, seed)
            content_hash = normalized_hash(problems)
            assert all(entry['content_hash'] != content_hash for entry in catalog), f'duplicate worksheet content: {wid}'
            filename = f'{wid}.pdf'
            render_times_table_pdf(output_dir / filename, spec['title'], problems)
            entry = {
                'id': wid,
                'school_level': 'elementary',
                'grade': 2,
                'subject': '算数',
                'unit': UNIT_TITLE,
                'skill': skill,
                'problem_count': PROBLEM_COUNT,
                'seed': seed,
                'variant': variant,
                'title': f"{spec['title']} {variant:02d}",
                'description': description_for(spec['dan']),
                'url': f'materials/worksheets/elementary/grade-02/{filename}',
                'content_hash': content_hash,
                'difficulty': 'basic',
                'worksheet_series': 'focused',
                'worksheet_format': 'times-table-stage',
                'answer_type': 'numeric',
            }
            catalog.append(entry)
            existing_ids.add(wid)
            published += 1

    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} grade-2 times-table worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
