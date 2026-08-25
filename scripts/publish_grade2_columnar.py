import json
import random
import sys
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas

try:
    from scripts.publish_grade2_core import SEEDS as CORE_SEEDS, candidates as core_candidates, generate_grade2
    from scripts.worksheet_factory import FONT, normalized_hash, validate_catalog
except ModuleNotFoundError:
    from publish_grade2_core import SEEDS as CORE_SEEDS, candidates as core_candidates, generate_grade2
    from worksheet_factory import FONT, normalized_hash, validate_catalog


GRADE2_COLUMNAR_SKILLS = {
    'column-add-2digit-no-carry': {
        'title': '2桁のたし算 筆算（繰り上がりなし）',
        'base_skill': 'add-2digit-no-carry',
        'operator': '+',
    },
    'column-add-2digit-carry': {
        'title': '2桁のたし算 筆算（繰り上がりあり）',
        'base_skill': 'add-2digit-carry',
        'operator': '+',
    },
    'column-sub-2digit-no-borrow': {
        'title': '2桁のひき算 筆算（繰り下がりなし）',
        'base_skill': 'sub-2digit-no-borrow',
        'operator': '-',
    },
    'column-sub-2digit-borrow': {
        'title': '2桁のひき算 筆算（繰り下がりあり）',
        'base_skill': 'sub-2digit-borrow',
        'operator': '-',
    },
}
COLUMNAR_SEEDS = (401, 502, 603)
PROBLEM_COUNT = 20
COLUMNAR_PAGE_CAPACITY = 20
COLUMN_COUNT = 4
ROW_COUNT = 5
UNIT_TITLE = 'たし算・ひき算の筆算'


def blocked_horizontal_pairs(base_skill):
    return {
        (problem['a'], problem['b'])
        for seed in CORE_SEEDS
        for problem in generate_grade2(base_skill, seed)
    }


def independent_columnar_answer(problem):
    if problem['type'] == 'add':
        return problem['a'] + problem['b']
    if problem['type'] == 'sub':
        return problem['a'] - problem['b']
    raise ValueError(problem['type'])


def validate_columnar_problem(skill, problem):
    a, b = problem['a'], problem['b']
    assert 10 <= a <= 99 and 10 <= b <= 99
    assert independent_columnar_answer(problem) == problem['answer']
    if skill == 'column-add-2digit-no-carry':
        assert problem['type'] == 'add'
        assert a + b <= 99 and a % 10 + b % 10 <= 9
    elif skill == 'column-add-2digit-carry':
        assert problem['type'] == 'add'
        assert a + b <= 99 and a % 10 + b % 10 >= 10
    elif skill == 'column-sub-2digit-no-borrow':
        assert problem['type'] == 'sub'
        assert a > b and a % 10 >= b % 10
    elif skill == 'column-sub-2digit-borrow':
        assert problem['type'] == 'sub'
        assert a > b and a % 10 < b % 10
    else:
        raise ValueError(skill)


def generate_columnar(skill, seed, count=PROBLEM_COUNT):
    spec = GRADE2_COLUMNAR_SKILLS[skill]
    blocked = blocked_horizontal_pairs(spec['base_skill'])
    pairs = [pair for pair in core_candidates(spec['base_skill']) if pair not in blocked]
    rng = random.Random(seed)
    rng.shuffle(pairs)
    chosen = pairs[:count]
    assert len(chosen) == count
    problem_type = 'add' if spec['operator'] == '+' else 'sub'
    problems = []
    for a, b in chosen:
        answer = a + b if problem_type == 'add' else a - b
        problem = {'type': problem_type, 'a': a, 'b': b, 'answer': answer}
        validate_columnar_problem(skill, problem)
        problems.append(problem)
    assert len({(p['a'], p['b']) for p in problems}) == count
    assert not ({(p['a'], p['b']) for p in problems} & blocked)
    return problems


def problem_page_chunks(problems, capacity=COLUMNAR_PAGE_CAPACITY):
    assert capacity > 0
    return [problems[i:i + capacity] for i in range(0, len(problems), capacity)]


def draw_columnar_problem(c, left, top, block_width, number, problem, answer_mode=False):
    right = left + block_width - 14
    number_y = top
    first_y = top - 29
    second_y = top - 55
    line_y = top - 64
    answer_y = top - 92

    c.setFillColor(colors.black)
    c.setFont(FONT, 10)
    c.drawString(left, number_y, str(number))
    c.setFont(FONT, 18)
    c.drawRightString(right, first_y, str(problem['a']))
    c.drawString(left + 25, second_y, '+' if problem['type'] == 'add' else '-')
    c.drawRightString(right, second_y, str(problem['b']))
    c.setLineWidth(1.2)
    c.line(left + 21, line_y, right + 4, line_y)
    if answer_mode:
        c.setFillColor(colors.red)
        c.setFont(FONT, 18)
        c.drawRightString(right, answer_y, str(independent_columnar_answer(problem)))
        c.setFillColor(colors.black)


def render_columnar_pdf(path, title, problems):
    assert problems, 'worksheet must contain at least one problem'
    for problem in problems:
        assert independent_columnar_answer(problem) == problem['answer']

    c = canvas.Canvas(str(path), pagesize=A4)
    w, h = A4
    chunks = problem_page_chunks(problems)
    page_count = len(chunks)
    usable_width = w - 90
    block_width = usable_width / COLUMN_COUNT
    row_height = 132
    top_start = h - 126

    def page_header(label, page_index):
        c.setFillColor(colors.black)
        c.setFont(FONT, 16)
        c.drawString(45, h - 50, title)
        suffix = f' {page_index}/{page_count}' if page_count > 1 else ''
        c.setFont(FONT, 10)
        c.drawRightString(w - 45, h - 48, label + suffix)
        c.drawString(45, h - 75, 'なまえ：____________________________')
        c.drawString(45, h - 96, '位をそろえて計算しましょう。')

    pages = []
    for answer_mode in (False, True):
        label = 'こたえ' if answer_mode else 'もんだい'
        for page_index, chunk in enumerate(chunks, start=1):
            pages.append((answer_mode, label, page_index, chunk))

    for rendered_index, (answer_mode, label, page_index, chunk) in enumerate(pages):
        page_header(label, page_index)
        start_number = (page_index - 1) * COLUMNAR_PAGE_CAPACITY + 1
        for local_index, problem in enumerate(chunk):
            row = local_index // COLUMN_COUNT
            col = local_index % COLUMN_COUNT
            assert row < ROW_COUNT
            left = 45 + col * block_width
            top = top_start - row * row_height
            draw_columnar_problem(
                c,
                left,
                top,
                block_width,
                start_number + local_index,
                problem,
                answer_mode=answer_mode,
            )
        if rendered_index < len(pages) - 1:
            c.showPage()
    c.save()


def publish(repo_root):
    root = Path(repo_root)
    catalog_path = root / 'worksheets' / 'catalog.json'
    catalog = json.loads(catalog_path.read_text(encoding='utf-8'))
    output_dir = root / 'materials' / 'worksheets' / 'elementary' / 'grade-02'
    output_dir.mkdir(parents=True, exist_ok=True)
    existing_ids = {entry['id'] for entry in catalog}
    published = 0

    for skill, spec in GRADE2_COLUMNAR_SKILLS.items():
        for variant, seed in enumerate(COLUMNAR_SEEDS, start=1):
            wid = f'e2-{skill}-{variant:02d}'
            if wid in existing_ids:
                continue
            problems = generate_columnar(skill, seed)
            content_hash = normalized_hash(problems)
            assert all(entry['content_hash'] != content_hash for entry in catalog), f'duplicate worksheet content: {wid}'
            filename = f'{wid}.pdf'
            render_columnar_pdf(output_dir / filename, spec['title'], problems)
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
                'description': '位を縦にそろえた2桁の加法・減法の筆算を20問くり返すプリントです。2ページ目は同じ筆算配置に赤字で解答を加えています。',
                'url': f'materials/worksheets/elementary/grade-02/{filename}',
                'content_hash': content_hash,
                'difficulty': 'basic',
                'worksheet_series': 'focused',
                'worksheet_format': 'columnar',
                'answer_type': 'numeric',
            }
            catalog.append(entry)
            existing_ids.add(wid)
            published += 1

    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} grade-2 columnar worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
