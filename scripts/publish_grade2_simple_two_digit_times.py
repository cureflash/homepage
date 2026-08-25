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


SIMPLE_TWO_DIGIT_SEEDS = (1601, 1702, 1803)
PROBLEM_COUNT = 20
UNIT_TITLE = '簡単な2桁×1桁'
MULTIPLIERS = tuple(range(1, 10))
SKILLS = {
    'times-10': {'multiplicand': 10, 'title': '10×1桁'},
    'times-11': {'multiplicand': 11, 'title': '11×1桁'},
    'times-12': {'multiplicand': 12, 'title': '12×1桁'},
}


def independent_simple_answer(problem):
    assert problem['type'] == 'mul'
    return problem['a'] * problem['b']


def validate_simple_problem(skill, problem):
    spec = SKILLS[skill]
    assert problem['type'] == 'mul'
    assert problem['a'] == spec['multiplicand']
    assert problem['b'] in MULTIPLIERS
    assert independent_simple_answer(problem) == problem['answer']


def generate_simple_two_digit(skill, seed, count=PROBLEM_COUNT):
    assert count == PROBLEM_COUNT
    assert seed in SIMPLE_TWO_DIGIT_SEEDS, f'unsupported seed: {seed}'
    spec = SKILLS[skill]
    rng = random.Random(seed + spec['multiplicand'] * 10007)

    multipliers = list(MULTIPLIERS) * 2
    extras = rng.sample(list(MULTIPLIERS), 2)
    multipliers.extend(extras)
    rng.shuffle(multipliers)

    problems = []
    for multiplier in multipliers:
        problem = {
            'type': 'mul',
            'a': spec['multiplicand'],
            'b': multiplier,
            'answer': spec['multiplicand'] * multiplier,
        }
        validate_simple_problem(skill, problem)
        problems.append(problem)

    counts = Counter(problem['b'] for problem in problems)
    assert set(counts) == set(MULTIPLIERS)
    assert sorted(counts.values()) == [2] * 7 + [3] * 2
    return problems


def draw_problem(c, x, y, number, problem, answer_mode=False):
    c.setFillColor(colors.black)
    c.setFont(FONT, 13)
    c.drawString(x, y, str(number))
    c.drawString(x + 28, y, f"{problem['a']} × {problem['b']} = □")
    if answer_mode:
        c.setFillColor(colors.red)
        c.drawString(x + 28, y - 17, f"こたえ：{independent_simple_answer(problem)}")
        c.setFillColor(colors.black)


def render_simple_pdf(path, title, problems):
    assert len(problems) == PROBLEM_COUNT
    c = canvas.Canvas(str(path), pagesize=A4)
    w, h = A4

    def page_header(label):
        c.setFillColor(colors.black)
        c.setFont(FONT, 18)
        c.drawString(45, h - 55, title)
        c.setFont(FONT, 10)
        c.drawRightString(w - 45, h - 52, label)
        c.drawString(45, h - 78, 'なまえ：____________________________')
        c.drawString(45, h - 97, '九九を使って計算しましょう。')

    for page_index, answer_mode in enumerate((False, True)):
        page_header('こたえ' if answer_mode else 'もんだい')
        for index, problem in enumerate(problems):
            col = index // 10
            row = index % 10
            x = 55 + col * 260
            y = h - 132 - row * 61
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

    for skill, spec in SKILLS.items():
        for variant, seed in enumerate(SIMPLE_TWO_DIGIT_SEEDS, start=1):
            wid = f'e2-{skill}-{variant:02d}'
            if wid in existing_ids:
                continue
            problems = generate_simple_two_digit(skill, seed)
            content_hash = normalized_hash(problems)
            assert all(entry['content_hash'] != content_hash for entry in catalog), f'duplicate worksheet content: {wid}'
            filename = f'{wid}.pdf'
            render_simple_pdf(output_dir / filename, spec['title'], problems)
            catalog.append({
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
                'description': f"{spec['multiplicand']}に1〜9をかける簡単な2桁×1桁を20問練習するプリントです。1〜9を最低2回ずつ扱い、2ページ目は同じ問題配置に赤字で解答を加えています。",
                'url': f'materials/worksheets/elementary/grade-02/{filename}',
                'content_hash': content_hash,
                'difficulty': 'basic',
                'worksheet_series': 'focused',
                'worksheet_format': 'simple-two-digit-times',
                'answer_type': 'numeric',
            })
            existing_ids.add(wid)
            published += 1

    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} grade-2 simple two-digit multiplication worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
