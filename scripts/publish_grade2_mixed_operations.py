import json
import random
import sys
from collections import Counter
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas

try:
    from scripts.publish_grade2_core import SEEDS as CORE_SEEDS, generate_grade2
    from scripts.publish_grade2_columnar import COLUMNAR_SEEDS, generate_columnar
    from scripts.worksheet_factory import FONT, normalized_hash, validate_catalog
except ModuleNotFoundError:
    from publish_grade2_core import SEEDS as CORE_SEEDS, generate_grade2
    from publish_grade2_columnar import COLUMNAR_SEEDS, generate_columnar
    from worksheet_factory import FONT, normalized_hash, validate_catalog


MIXED_SEEDS = (1901, 2002, 2103)
PROBLEM_COUNT = 24
UNIT_TITLE = 'たし算・ひき算・かけ算混合'
SKILL = 'mixed-add-sub-mul'

ADD_SKILLS = ('add-2digit-no-carry', 'add-2digit-carry')
SUB_SKILLS = ('sub-2digit-no-borrow', 'sub-2digit-borrow')


def independent_mixed_answer(problem):
    if problem['type'] == 'add':
        return problem['a'] + problem['b']
    if problem['type'] == 'sub':
        return problem['a'] - problem['b']
    if problem['type'] == 'mul':
        return problem['a'] * problem['b']
    raise ValueError(problem['type'])


def blocked_pairs():
    blocked = {'add': set(), 'sub': set()}
    for skill in ADD_SKILLS + SUB_SKILLS:
        kind = 'add' if skill.startswith('add-') else 'sub'
        for seed in CORE_SEEDS:
            blocked[kind].update((p['a'], p['b']) for p in generate_grade2(skill, seed))
        column_skill = 'column-' + skill
        for seed in COLUMNAR_SEEDS:
            blocked[kind].update((p['a'], p['b']) for p in generate_columnar(column_skill, seed))
    return blocked


def add_candidates(carry):
    rows = []
    for a in range(10, 100):
        for b in range(10, 100):
            if a + b > 99:
                continue
            has_carry = a % 10 + b % 10 >= 10
            if has_carry == carry:
                rows.append((a, b))
    return rows


def sub_candidates(borrow):
    rows = []
    for a in range(10, 100):
        for b in range(10, a):
            has_borrow = a % 10 < b % 10
            if has_borrow == borrow:
                rows.append((a, b))
    return rows


def validate_mixed_problem(problem):
    assert independent_mixed_answer(problem) == problem['answer']
    a, b = problem['a'], problem['b']
    if problem['type'] == 'add':
        assert 10 <= a <= 99 and 10 <= b <= 99 and a + b <= 99
    elif problem['type'] == 'sub':
        assert 10 <= b < a <= 99
    elif problem['type'] == 'mul':
        assert 2 <= a <= 9 and 1 <= b <= 9
    else:
        raise ValueError(problem['type'])


def _choose_pairs(rng, rows, blocked, count):
    rows = [pair for pair in rows if pair not in blocked]
    rng.shuffle(rows)
    chosen = rows[:count]
    assert len(chosen) == count
    return chosen


def generate_mixed(seed, count=PROBLEM_COUNT):
    assert count == PROBLEM_COUNT
    assert seed in MIXED_SEEDS, f'unsupported seed: {seed}'
    rng = random.Random(seed)
    blocked = blocked_pairs()
    problems = []

    for carry in (False, True):
        for a, b in _choose_pairs(rng, add_candidates(carry), blocked['add'], 4):
            problems.append({'type': 'add', 'a': a, 'b': b, 'answer': a + b})

    for borrow in (False, True):
        for a, b in _choose_pairs(rng, sub_candidates(borrow), blocked['sub'], 4):
            problems.append({'type': 'sub', 'a': a, 'b': b, 'answer': a - b})

    multipliers = list(range(1, 10))
    rng.shuffle(multipliers)
    for table, multiplier in zip(range(2, 10), multipliers[:8]):
        problems.append({'type': 'mul', 'a': table, 'b': multiplier, 'answer': table * multiplier})

    rng.shuffle(problems)
    assert len(problems) == PROBLEM_COUNT
    assert Counter(p['type'] for p in problems) == {'add': 8, 'sub': 8, 'mul': 8}
    assert len({(p['type'], p['a'], p['b']) for p in problems}) == PROBLEM_COUNT
    assert {p['a'] for p in problems if p['type'] == 'mul'} == set(range(2, 10))
    for problem in problems:
        validate_mixed_problem(problem)
    return problems


def expression(problem):
    symbol = {'add': '+', 'sub': '-', 'mul': '×'}[problem['type']]
    return f"{problem['a']} {symbol} {problem['b']} = □"


def draw_problem(c, x, y, number, problem, answer_mode=False):
    c.setFillColor(colors.black)
    c.setFont(FONT, 13)
    c.drawString(x, y, str(number))
    c.drawString(x + 28, y, expression(problem))
    if answer_mode:
        c.setFillColor(colors.red)
        c.drawString(x + 28, y - 17, f"こたえ：{independent_mixed_answer(problem)}")
        c.setFillColor(colors.black)


def render_mixed_pdf(path, title, problems):
    assert len(problems) == PROBLEM_COUNT
    c = canvas.Canvas(str(path), pagesize=A4)
    w, h = A4

    def header(label):
        c.setFillColor(colors.black)
        c.setFont(FONT, 18)
        c.drawString(45, h - 55, title)
        c.setFont(FONT, 10)
        c.drawRightString(w - 45, h - 52, label)
        c.drawString(45, h - 78, 'なまえ：____________________________')
        c.drawString(45, h - 97, 'しきをよく見て計算しましょう。')

    for page_index, answer_mode in enumerate((False, True)):
        header('こたえ' if answer_mode else 'もんだい')
        for index, problem in enumerate(problems):
            col = index // 12
            row = index % 12
            x = 55 + col * 260
            y = h - 127 - row * 50
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

    for variant, seed in enumerate(MIXED_SEEDS, start=1):
        wid = f'e2-{SKILL}-{variant:02d}'
        if wid in existing_ids:
            continue
        problems = generate_mixed(seed)
        content_hash = normalized_hash(problems)
        assert all(entry['content_hash'] != content_hash for entry in catalog), f'duplicate worksheet content: {wid}'
        filename = f'{wid}.pdf'
        render_mixed_pdf(output_dir / filename, UNIT_TITLE, problems)
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
            'title': f'{UNIT_TITLE} {variant:02d}',
            'description': '小学2年で既習のたし算・ひき算・九九を1枚で切り替えて練習する24問プリントです。3演算を各8問ずつ出題し、2ページ目は同じ問題配置に赤字で解答を加えています。',
            'url': f'materials/worksheets/elementary/grade-02/{filename}',
            'content_hash': content_hash,
            'difficulty': 'basic',
            'worksheet_series': 'mixed',
            'worksheet_format': 'mixed-single-operation',
            'answer_type': 'numeric',
        })
        existing_ids.add(wid)
        published += 1

    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} grade-2 mixed operation worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
