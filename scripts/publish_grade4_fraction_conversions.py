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

SKILLS = {
    'improper-to-mixed-fraction': {'title': '仮分数を帯分数になおす', 'direction': 'improper-to-mixed'},
    'mixed-to-improper-fraction': {'title': '帯分数を仮分数になおす', 'direction': 'mixed-to-improper'},
}
SEEDS = (8001, 8102, 8203)
PROBLEM_COUNT = 20
UNIT_TITLE = '仮分数・帯分数の変換'


def independent_answer(problem):
    denominator = problem['denominator']
    if problem['direction'] == 'improper-to-mixed':
        numerator = problem['improper_numerator']
        whole, remainder = divmod(numerator, denominator)
        assert whole >= 1 and 1 <= remainder < denominator
        return {'whole': whole, 'numerator': remainder, 'denominator': denominator}
    if problem['direction'] == 'mixed-to-improper':
        whole = problem['whole']
        numerator = problem['proper_numerator']
        return {'numerator': whole * denominator + numerator, 'denominator': denominator}
    raise AssertionError(f"unknown direction: {problem['direction']}")


def validate_problem(problem):
    denominator = problem['denominator']
    assert 2 <= denominator <= 12
    direction = problem['direction']
    if direction == 'improper-to-mixed':
        numerator = problem['improper_numerator']
        assert numerator > denominator
        answer = independent_answer(problem)
        assert answer == problem['answer']
        assert 1 <= answer['whole'] <= 5
        assert 1 <= answer['numerator'] < denominator
    elif direction == 'mixed-to-improper':
        assert 1 <= problem['whole'] <= 5
        assert 1 <= problem['proper_numerator'] < denominator
        answer = independent_answer(problem)
        assert answer == problem['answer']
        assert answer['numerator'] > denominator
    else:
        raise AssertionError(f"unknown direction: {direction}")


def generate(skill, seed):
    direction = SKILLS[skill]['direction']
    rng = random.Random(seed)
    problems, seen = [], set()
    while len(problems) < PROBLEM_COUNT:
        denominator = rng.randint(2, 12)
        whole = rng.randint(1, 5)
        proper_numerator = rng.randint(1, denominator - 1)
        improper_numerator = whole * denominator + proper_numerator
        key = (denominator, whole, proper_numerator)
        if key in seen:
            continue
        if direction == 'improper-to-mixed':
            problem = {
                'direction': direction,
                'denominator': denominator,
                'improper_numerator': improper_numerator,
            }
        else:
            problem = {
                'direction': direction,
                'denominator': denominator,
                'whole': whole,
                'proper_numerator': proper_numerator,
            }
        problem['answer'] = independent_answer(problem)
        validate_problem(problem)
        problems.append(problem)
        seen.add(key)
    return problems


def improper_text(numerator, denominator):
    return f'{numerator}/{denominator}'


def mixed_text(whole, numerator, denominator):
    return f'{whole} {numerator}/{denominator}'


def problem_text(problem):
    if problem['direction'] == 'improper-to-mixed':
        return f"{improper_text(problem['improper_numerator'], problem['denominator'])} = □"
    return f"{mixed_text(problem['whole'], problem['proper_numerator'], problem['denominator'])} = □"


def answer_text(problem):
    answer = independent_answer(problem)
    if problem['direction'] == 'improper-to-mixed':
        return mixed_text(answer['whole'], answer['numerator'], answer['denominator'])
    return improper_text(answer['numerator'], answer['denominator'])


def render_pdf(path, title, problems):
    c = canvas.Canvas(str(path), pagesize=A4)
    width, height = A4
    for answer_mode in (False, True):
        c.setFillColor(colors.black)
        c.setFont(FONT, 18)
        c.drawString(45, height - 55, title)
        c.setFont(FONT, 10)
        c.drawRightString(width - 45, height - 52, 'こたえ' if answer_mode else 'もんだい')
        c.drawString(45, height - 78, 'なまえ：____________________________')
        c.setFont(FONT, 14)
        for index, problem in enumerate(problems):
            x = 55 + (index // 10) * 260
            y = height - 120 - (index % 10) * 63
            c.setFillColor(colors.black)
            c.drawString(x, y, str(index + 1))
            c.drawString(x + 28, y, problem_text(problem))
            if answer_mode:
                c.setFillColor(colors.red)
                c.drawString(x + 28, y - 20, f"こたえ：{answer_text(problem)}")
        if not answer_mode:
            c.showPage()
    c.save()


def publish(repo_root):
    root = Path(repo_root)
    catalog_path = root / 'worksheets' / 'catalog.json'
    catalog = json.loads(catalog_path.read_text(encoding='utf-8'))
    out = root / 'materials' / 'worksheets' / 'elementary' / 'grade-04'
    out.mkdir(parents=True, exist_ok=True)
    existing = {entry['id'] for entry in catalog}
    published = 0
    for skill, spec in SKILLS.items():
        for variant, seed in enumerate(SEEDS, 1):
            worksheet_id = f'e4-{skill}-{variant:02d}'
            if worksheet_id in existing:
                continue
            problems = generate(skill, seed)
            content_hash = normalized_hash(problems)
            assert all(entry['content_hash'] != content_hash for entry in catalog)
            filename = f'{worksheet_id}.pdf'
            render_pdf(out / filename, spec['title'], problems)
            catalog.append({
                'id': worksheet_id,
                'school_level': 'elementary',
                'grade': 4,
                'subject': '算数',
                'unit': UNIT_TITLE,
                'skill': skill,
                'problem_count': PROBLEM_COUNT,
                'seed': seed,
                'variant': variant,
                'title': f"{spec['title']} {variant:02d}",
                'description': '仮分数と帯分数の変換を20問反復します。2ページ目は同じ問題配置に赤字で解答を加えています。',
                'url': f'materials/worksheets/elementary/grade-04/{filename}',
                'content_hash': content_hash,
                'difficulty': 'basic',
                'worksheet_series': 'focused',
                'worksheet_format': 'fraction-horizontal',
                'answer_type': 'accepted-set',
            })
            existing.add(worksheet_id)
            published += 1
    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} grade-4 fraction conversion worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
