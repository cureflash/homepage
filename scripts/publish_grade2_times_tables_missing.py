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


MISSING_FACTOR_SEEDS = (1301, 1402, 1503)
PROBLEM_COUNT = 24
UNIT_TITLE = '九九'
SKILL = 'times-missing-factor'
TITLE = '九九 穴埋め'
DANS = tuple(range(2, 10))
MULTIPLIERS = tuple(range(1, 10))


def independent_missing_answer(problem):
    assert problem['type'] in {'mul-missing-left', 'mul-missing-right'}
    known = problem['known']
    product = problem['product']
    assert known > 0
    assert product % known == 0
    return product // known


def fact_of(problem):
    if problem['type'] == 'mul-missing-left':
        return problem['answer'], problem['known']
    if problem['type'] == 'mul-missing-right':
        return problem['known'], problem['answer']
    raise ValueError(problem['type'])


def validate_missing_problem(problem):
    assert problem['type'] in {'mul-missing-left', 'mul-missing-right'}
    assert problem['known'] in MULTIPLIERS or problem['known'] in DANS
    dan, multiplier = fact_of(problem)
    assert dan in DANS
    assert multiplier in MULTIPLIERS
    assert problem['product'] == dan * multiplier
    assert independent_missing_answer(problem) == problem['answer']
    assert problem['answer'] in range(1, 10)


def partition_for_dan(dan):
    rng = random.Random(20260826 + dan * 2017)
    multipliers = list(MULTIPLIERS)
    rng.shuffle(multipliers)
    return tuple(tuple(multipliers[i:i + 3]) for i in range(0, 9, 3))


def generate_missing_factor(seed, count=PROBLEM_COUNT):
    assert count == PROBLEM_COUNT, '九九穴埋めは8段×3問の24問固定構成です'
    assert seed in MISSING_FACTOR_SEEDS, f'unsupported seed: {seed}'
    variant_index = MISSING_FACTOR_SEEDS.index(seed)

    facts = []
    for dan in DANS:
        for multiplier in partition_for_dan(dan)[variant_index]:
            facts.append((dan, multiplier))

    rng = random.Random(seed * 104729)
    rng.shuffle(facts)
    hide_left_flags = [True] * (PROBLEM_COUNT // 2) + [False] * (PROBLEM_COUNT // 2)
    rng.shuffle(hide_left_flags)

    problems = []
    for (dan, multiplier), hide_left in zip(facts, hide_left_flags):
        if hide_left:
            problem = {
                'type': 'mul-missing-left',
                'known': multiplier,
                'product': dan * multiplier,
                'answer': dan,
            }
        else:
            problem = {
                'type': 'mul-missing-right',
                'known': dan,
                'product': dan * multiplier,
                'answer': multiplier,
            }
        validate_missing_problem(problem)
        problems.append(problem)

    dan_counts = Counter(fact_of(problem)[0] for problem in problems)
    assert dan_counts == Counter({dan: 3 for dan in DANS})
    assert Counter(problem['type'] for problem in problems) == Counter({
        'mul-missing-left': 12,
        'mul-missing-right': 12,
    })
    assert len({fact_of(problem) for problem in problems}) == PROBLEM_COUNT
    return problems


def expression_text(problem):
    if problem['type'] == 'mul-missing-left':
        return f"□ × {problem['known']} = {problem['product']}"
    if problem['type'] == 'mul-missing-right':
        return f"{problem['known']} × □ = {problem['product']}"
    raise ValueError(problem['type'])


def draw_problem(c, x, y, number, problem, answer_mode=False):
    c.setFillColor(colors.black)
    c.setFont(FONT, 13)
    c.drawString(x, y, str(number))
    c.drawString(x + 28, y, expression_text(problem))
    if answer_mode:
        c.setFillColor(colors.red)
        c.drawString(x + 28, y - 17, f"こたえ：{independent_missing_answer(problem)}")
        c.setFillColor(colors.black)


def render_missing_pdf(path, title, problems):
    assert len(problems) == PROBLEM_COUNT
    for problem in problems:
        validate_missing_problem(problem)

    c = canvas.Canvas(str(path), pagesize=A4)
    w, h = A4

    def page_header(label):
        c.setFillColor(colors.black)
        c.setFont(FONT, 18)
        c.drawString(45, h - 55, title)
        c.setFont(FONT, 10)
        c.drawRightString(w - 45, h - 52, label)
        c.drawString(45, h - 78, 'なまえ：____________________________')
        c.drawString(45, h - 97, '□に入る数を考えましょう。')

    for page_index, answer_mode in enumerate((False, True)):
        page_header('こたえ' if answer_mode else 'もんだい')
        for index, problem in enumerate(problems):
            col = index // 12
            row = index % 12
            x = 55 + col * 260
            y = h - 132 - row * 51
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

    for variant, seed in enumerate(MISSING_FACTOR_SEEDS, start=1):
        wid = f'e2-{SKILL}-{variant:02d}'
        if wid in existing_ids:
            continue
        problems = generate_missing_factor(seed)
        content_hash = normalized_hash(problems)
        assert all(entry['content_hash'] != content_hash for entry in catalog), f'duplicate worksheet content: {wid}'
        filename = f'{wid}.pdf'
        render_missing_pdf(output_dir / filename, TITLE, problems)
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
            'description': '九九の積から□に入る1位数の因数を求める24問です。2〜9の各段を3問ずつ扱い、□を左右それぞれ12問ずつ配置します。3種類を合わせると九九72個の基本事実をすべて扱います。2ページ目は同じ問題配置に赤字で解答を加えています。',
            'url': f'materials/worksheets/elementary/grade-02/{filename}',
            'content_hash': content_hash,
            'difficulty': 'basic',
            'worksheet_series': 'mixed',
            'worksheet_format': 'times-table-missing-factor',
            'answer_type': 'numeric',
        })
        existing_ids.add(wid)
        published += 1

    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} grade-2 missing-factor worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
