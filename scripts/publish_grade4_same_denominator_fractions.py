import json
import math
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
    'same-denominator-fraction-add': {'title': '同分母分数のたし算', 'op': '+'},
    'same-denominator-fraction-sub': {'title': '同分母分数のひき算', 'op': '-'},
}
SEEDS = (7001, 7102, 7203)
PROBLEM_COUNT = 20
UNIT_TITLE = '同分母分数のたし算・ひき算'


def independent_answer(problem):
    if problem['op'] == '+':
        numerator = problem['left_numerator'] + problem['right_numerator']
    elif problem['op'] == '-':
        numerator = problem['left_numerator'] - problem['right_numerator']
    else:
        raise AssertionError(f"unknown operation: {problem['op']}")
    return numerator, problem['denominator']


def validate_problem(problem):
    denominator = problem['denominator']
    left = problem['left_numerator']
    right = problem['right_numerator']
    assert 3 <= denominator <= 12
    assert 1 <= left < denominator
    assert 1 <= right < denominator
    answer_numerator, answer_denominator = independent_answer(problem)
    assert answer_denominator == denominator
    assert answer_numerator == problem['answer_numerator']
    assert answer_numerator > 0
    # Keep the expected form canonical without requiring formal reduction,
    # which belongs primarily to later fraction work.
    assert math.gcd(answer_numerator, denominator) == 1
    if problem['op'] == '-':
        assert left > right


def _generate_addition(rng):
    problems, seen = [], set()
    targets = [False] * (PROBLEM_COUNT // 2) + [True] * (PROBLEM_COUNT // 2)
    rng.shuffle(targets)
    for over_one in targets:
        while True:
            denominator = rng.randint(3, 12)
            left = rng.randint(1, denominator - 1)
            right = rng.randint(1, denominator - 1)
            answer = left + right
            if over_one:
                if answer <= denominator:
                    continue
            else:
                if answer >= denominator:
                    continue
            if math.gcd(answer, denominator) != 1:
                continue
            key = (denominator, left, right)
            if key in seen:
                continue
            problem = {
                'op': '+', 'denominator': denominator,
                'left_numerator': left, 'right_numerator': right,
                'answer_numerator': answer,
            }
            validate_problem(problem)
            problems.append(problem); seen.add(key); break
    return problems


def _generate_subtraction(rng):
    problems, seen = [], set()
    while len(problems) < PROBLEM_COUNT:
        denominator = rng.randint(3, 12)
        left = rng.randint(2, denominator - 1)
        right = rng.randint(1, left - 1)
        answer = left - right
        if math.gcd(answer, denominator) != 1:
            continue
        key = (denominator, left, right)
        if key in seen:
            continue
        problem = {
            'op': '-', 'denominator': denominator,
            'left_numerator': left, 'right_numerator': right,
            'answer_numerator': answer,
        }
        validate_problem(problem)
        problems.append(problem); seen.add(key)
    return problems


def generate(skill, seed):
    rng = random.Random(seed)
    op = SKILLS[skill]['op']
    return _generate_addition(rng) if op == '+' else _generate_subtraction(rng)


def fraction_text(numerator, denominator):
    return f'{numerator}/{denominator}'


def render_pdf(path, title, problems):
    c = canvas.Canvas(str(path), pagesize=A4); w, h = A4
    for answer_mode in (False, True):
        c.setFillColor(colors.black); c.setFont(FONT, 18); c.drawString(45, h - 55, title)
        c.setFont(FONT, 10); c.drawRightString(w - 45, h - 52, 'こたえ' if answer_mode else 'もんだい')
        c.drawString(45, h - 78, 'なまえ：____________________________'); c.setFont(FONT, 14)
        for i, p in enumerate(problems):
            x = 55 + (i // 10) * 260; y = h - 120 - (i % 10) * 63
            c.setFillColor(colors.black); c.drawString(x, y, str(i + 1))
            left = fraction_text(p['left_numerator'], p['denominator'])
            right = fraction_text(p['right_numerator'], p['denominator'])
            c.drawString(x + 28, y, f"{left} {p['op']} {right} = □")
            if answer_mode:
                answer_numerator, answer_denominator = independent_answer(p)
                c.setFillColor(colors.red)
                c.drawString(x + 28, y - 20, f"こたえ：{fraction_text(answer_numerator, answer_denominator)}")
        if not answer_mode:
            c.showPage()
    c.save()


def publish(repo_root):
    root = Path(repo_root); catalog_path = root / 'worksheets' / 'catalog.json'
    catalog = json.loads(catalog_path.read_text(encoding='utf-8'))
    out = root / 'materials' / 'worksheets' / 'elementary' / 'grade-04'; out.mkdir(parents=True, exist_ok=True)
    existing = {e['id'] for e in catalog}; published = 0
    for skill, spec in SKILLS.items():
        for variant, seed in enumerate(SEEDS, 1):
            wid = f'e4-{skill}-{variant:02d}'
            if wid in existing:
                continue
            problems = generate(skill, seed); content_hash = normalized_hash(problems)
            assert all(e['content_hash'] != content_hash for e in catalog)
            filename = f'{wid}.pdf'; render_pdf(out / filename, spec['title'], problems)
            catalog.append({
                'id': wid, 'school_level': 'elementary', 'grade': 4, 'subject': '算数', 'unit': UNIT_TITLE,
                'skill': skill, 'problem_count': PROBLEM_COUNT, 'seed': seed, 'variant': variant,
                'title': f"{spec['title']} {variant:02d}",
                'description': '同じ分母の分数のたし算・ひき算を20問反復します。たし算は1を超える和も含み、2ページ目は同じ問題配置に赤字で解答を加えています。',
                'url': f'materials/worksheets/elementary/grade-04/{filename}', 'content_hash': content_hash,
                'difficulty': 'basic', 'worksheet_series': 'focused', 'worksheet_format': 'fraction-horizontal', 'answer_type': 'fraction',
            })
            existing.add(wid); published += 1
    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} grade-4 same-denominator fraction worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
