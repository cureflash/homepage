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


SEEDS = (2501, 2602, 2703)
PROBLEM_COUNT = 20
PART_COUNTS = (2, 3)
SKILLS = {
    'simple-fraction-read': {
        'title': '簡単な分数の読み取り',
        'format': 'simple-fraction-read',
        'answer_type': 'accepted-set',
    },
    'simple-fraction-whole': {
        'title': '簡単な分数ともとの大きさ',
        'format': 'simple-fraction-whole',
        'answer_type': 'numeric',
    },
}


def independent_answer(problem):
    if problem['type'] == 'fraction-read':
        return f"1/{problem['parts']}"
    if problem['type'] == 'fraction-whole':
        return problem['parts']
    raise ValueError(problem['type'])


def validate_problem(skill, problem):
    assert problem['parts'] in PART_COUNTS
    assert problem['total'] % problem['parts'] == 0
    assert problem['total'] >= problem['parts'] * 2
    assert independent_answer(problem) == problem['answer']
    if skill == 'simple-fraction-read':
        assert problem['type'] == 'fraction-read'
        assert problem['answer'] in ('1/2', '1/3')
    elif skill == 'simple-fraction-whole':
        assert problem['type'] == 'fraction-whole'
        assert problem['answer'] in PART_COUNTS
    else:
        raise ValueError(skill)


def _totals_for(parts):
    return [parts * multiplier for multiplier in range(2, 32)]


def generate(skill, seed, count=PROBLEM_COUNT):
    assert skill in SKILLS
    assert seed in SEEDS
    assert count == PROBLEM_COUNT
    rng = random.Random(seed + sum(ord(ch) for ch in skill) * 1009)
    problems = []
    for parts in PART_COUNTS:
        totals = rng.sample(_totals_for(parts), count // len(PART_COUNTS))
        for total in totals:
            problem_type = 'fraction-read' if skill == 'simple-fraction-read' else 'fraction-whole'
            answer = f'1/{parts}' if problem_type == 'fraction-read' else parts
            problems.append({
                'type': problem_type,
                'parts': parts,
                'total': total,
                'part_size': total // parts,
                'answer': answer,
            })
    rng.shuffle(problems)
    assert len(problems) == count
    assert Counter(problem['parts'] for problem in problems) == {2: 10, 3: 10}
    assert len({(problem['parts'], problem['total']) for problem in problems}) == count
    for problem in problems:
        validate_problem(skill, problem)
    return problems


def text_problem(problem):
    if problem['type'] == 'fraction-read':
        return (
            f"{problem['total']}こを {problem['parts']}とうぶんしました。"
            f"1つぶん（{problem['part_size']}こ）は、もとの □ です。"
        )
    if problem['type'] == 'fraction-whole':
        return (
            f"{problem['total']}こを {problem['parts']}とうぶんした1つぶんは {problem['part_size']}こです。"
            f"この1つぶんを □こ集めると、もとの{problem['total']}こになります。"
        )
    raise ValueError(problem['type'])


def draw_problem(c, x, y, number, problem, answer_mode=False):
    c.setFillColor(colors.black)
    c.setFont(FONT, 10)
    c.drawString(x, y, str(number))
    text = text_problem(problem)
    split = text.find('。') + 1
    c.drawString(x + 24, y, text[:split])
    c.drawString(x + 24, y - 16, text[split:])
    if answer_mode:
        c.setFillColor(colors.red)
        c.drawString(x + 24, y - 33, f"こたえ：{independent_answer(problem)}")
        c.setFillColor(colors.black)


def render_pdf(path, title, problems):
    c = canvas.Canvas(str(path), pagesize=A4)
    w, h = A4
    for page_index, answer_mode in enumerate((False, True)):
        c.setFillColor(colors.black)
        c.setFont(FONT, 18)
        c.drawString(45, h - 55, title)
        c.setFont(FONT, 10)
        c.drawRightString(w - 45, h - 52, 'こたえ' if answer_mode else 'もんだい')
        c.drawString(45, h - 78, 'なまえ：____________________________')
        for index, problem in enumerate(problems):
            col = index // 10
            row = index % 10
            x = 45 + col * 275
            y = h - 120 - row * 63
            draw_problem(c, x, y, index + 1, problem, answer_mode)
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
        for variant, seed in enumerate(SEEDS, start=1):
            wid = f'e2-{skill}-{variant:02d}'
            if wid in existing_ids:
                continue
            problems = generate(skill, seed)
            content_hash = normalized_hash(problems)
            assert all(entry['content_hash'] != content_hash for entry in catalog), f'duplicate worksheet content: {wid}'
            filename = f'{wid}.pdf'
            render_pdf(output_dir / filename, spec['title'], problems)
            catalog.append({
                'id': wid,
                'school_level': 'elementary',
                'grade': 2,
                'subject': '算数',
                'unit': '簡単な分数',
                'skill': skill,
                'problem_count': PROBLEM_COUNT,
                'seed': seed,
                'variant': variant,
                'title': f"{spec['title']} {variant:02d}",
                'description': '小学2年で扱う1/2・1/3などの簡単な分数を、2等分・3等分した具体的な個数から読み取り、もとの大きさとの関係を反復するプリントです。2ページ目は同じ問題配置に赤字で解答を加えています。',
                'url': f'materials/worksheets/elementary/grade-02/{filename}',
                'content_hash': content_hash,
                'difficulty': 'basic',
                'worksheet_series': 'focused',
                'worksheet_format': spec['format'],
                'answer_type': spec['answer_type'],
            })
            existing_ids.add(wid)
            published += 1

    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} grade-2 simple-fraction worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
