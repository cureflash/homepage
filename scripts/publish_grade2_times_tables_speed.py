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


SPEED_SEEDS = (3101, 3202, 3303)
PROBLEM_COUNT = 40
UNIT_TITLE = '九九'
SKILL = 'times-speed'
TITLE = '九九 スピード40問'
DANS = tuple(range(2, 10))
MULTIPLIERS = tuple(range(1, 10))
PER_DAN = 5


def independent_speed_answer(problem):
    assert problem['type'] == 'mul'
    return problem['a'] * problem['b']


def validate_speed_problem(problem):
    assert problem['type'] == 'mul'
    assert problem['a'] in DANS
    assert problem['b'] in MULTIPLIERS
    assert independent_speed_answer(problem) == problem['answer']


def multiplier_order_for_dan(dan):
    rng = random.Random(20260826 + dan * 4099)
    multipliers = list(MULTIPLIERS)
    rng.shuffle(multipliers)
    return tuple(multipliers)


def multipliers_for_variant(dan, variant_index):
    order = multiplier_order_for_dan(dan)
    start = (variant_index * 3) % len(order)
    return tuple(order[(start + offset) % len(order)] for offset in range(PER_DAN))


def generate_speed(seed, count=PROBLEM_COUNT):
    assert count == PROBLEM_COUNT, '九九speedは8段×5問の40問固定構成です'
    assert seed in SPEED_SEEDS, f'unsupported seed: {seed}'
    variant_index = SPEED_SEEDS.index(seed)

    problems = []
    for dan in DANS:
        for multiplier in multipliers_for_variant(dan, variant_index):
            problem = {
                'type': 'mul',
                'a': dan,
                'b': multiplier,
                'answer': dan * multiplier,
            }
            validate_speed_problem(problem)
            problems.append(problem)

    rng = random.Random(seed * 65537)
    rng.shuffle(problems)

    assert Counter(problem['a'] for problem in problems) == Counter({dan: PER_DAN for dan in DANS})
    assert len({(problem['a'], problem['b']) for problem in problems}) == PROBLEM_COUNT
    return problems


def draw_problem(c, x, y, number, problem, answer_mode=False):
    c.setFillColor(colors.black)
    c.setFont(FONT, 11)
    c.drawString(x, y, str(number))
    c.drawString(x + 20, y, f"{problem['a']} × {problem['b']} = □")
    if answer_mode:
        c.setFillColor(colors.red)
        c.drawString(x + 20, y - 15, f"こたえ：{independent_speed_answer(problem)}")
        c.setFillColor(colors.black)


def render_speed_pdf(path, title, problems):
    assert len(problems) == PROBLEM_COUNT
    for problem in problems:
        validate_speed_problem(problem)

    c = canvas.Canvas(str(path), pagesize=A4)
    w, h = A4

    def page_header(label):
        c.setFillColor(colors.black)
        c.setFont(FONT, 18)
        c.drawString(45, h - 55, title)
        c.setFont(FONT, 10)
        c.drawRightString(w - 45, h - 52, label)
        c.drawString(45, h - 78, 'なまえ：____________________________')
        c.drawString(45, h - 97, '時間をはかって、40問を続けて計算しましょう。')

    for page_index, answer_mode in enumerate((False, True)):
        page_header('こたえ' if answer_mode else 'もんだい')
        for index, problem in enumerate(problems):
            col = index // 10
            row = index % 10
            x = 42 + col * 138
            y = h - 132 - row * 65
            draw_problem(c, x, y, index + 1, problem, answer_mode=answer_mode)
        if page_index == 0:
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

    for variant, seed in enumerate(SPEED_SEEDS, start=1):
        wid = f'e2-{SKILL}-{variant:02d}'
        if wid in existing_ids:
            continue
        problems = generate_speed(seed)
        content_hash = normalized_hash(problems)
        assert all(entry['content_hash'] != content_hash for entry in catalog), f'duplicate worksheet content: {wid}'
        filename = f'{wid}.pdf'
        render_speed_pdf(output_dir / filename, TITLE, problems)
        catalog.append({
            'id': wid,
            'school_level': 'elementary',
            'grade': 2,
            'subject': '算数',
            'unit': UNIT_TITLE,
            'skill': SKILL,
            'problem_count': PROBLEM_COUNT,
            'seed': seed,
            'variant': variant,
            'title': f'{TITLE} {variant:02d}',
            'description': '2の段から9の段までを各5問ずつ、合計40問で短時間に反復するプリントです。各variantは実際に出題する基本事実が異なり、3種類を合わせると各段の1〜9をすべて扱います。2ページ目は同じ問題配置に赤字で解答を加えています。',
            'url': f'materials/worksheets/elementary/grade-02/{filename}',
            'content_hash': content_hash,
            'difficulty': 'basic',
            'worksheet_series': 'mixed',
            'worksheet_format': 'times-table-speed',
            'answer_type': 'numeric',
        })
        existing_ids.add(wid)
        published += 1

    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} grade-2 times-table speed worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
