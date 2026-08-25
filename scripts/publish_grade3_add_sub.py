import json
import random
import sys
from pathlib import Path

try:
    from scripts.worksheet_factory import normalized_hash, render_pdf, validate_catalog
except ModuleNotFoundError:
    from worksheet_factory import normalized_hash, render_pdf, validate_catalog


GRADE3_ADD_SUB_SKILLS = {
    'add-3digit': {'title': '3桁 + 3桁', 'operator': '+', 'digits': 3},
    'sub-3digit': {'title': '3桁 - 3桁', 'operator': '-', 'digits': 3},
    'add-4digit': {'title': '4桁 + 4桁', 'operator': '+', 'digits': 4},
    'sub-4digit': {'title': '4桁 - 4桁', 'operator': '-', 'digits': 4},
}
SEEDS = (3101, 3202, 3303)
PROBLEM_COUNT = 20
UNIT_TITLE = '3位数・4位数のたし算・ひき算'


def independent_answer(problem):
    if problem['type'] == 'add':
        return problem['a'] + problem['b']
    if problem['type'] == 'sub':
        return problem['a'] - problem['b']
    raise ValueError(problem['type'])


def bounds_for_digits(digits):
    return 10 ** (digits - 1), 10 ** digits - 1


def validate_grade3_problem(skill, problem):
    spec = GRADE3_ADD_SUB_SKILLS[skill]
    low, high = bounds_for_digits(spec['digits'])
    a, b = problem['a'], problem['b']
    assert low <= a <= high and low <= b <= high
    assert independent_answer(problem) == problem['answer']
    if spec['operator'] == '+':
        assert problem['type'] == 'add'
        assert a + b <= high
    else:
        assert problem['type'] == 'sub'
        assert a > b
        assert a - b >= 0


def generate_grade3(skill, seed, count=PROBLEM_COUNT):
    spec = GRADE3_ADD_SUB_SKILLS[skill]
    low, high = bounds_for_digits(spec['digits'])
    rng = random.Random(seed)
    problems = []
    seen = set()
    while len(problems) < count:
        if spec['operator'] == '+':
            a = rng.randint(low, high - low)
            b = rng.randint(low, high - a)
            problem_type = 'add'
            answer = a + b
        else:
            a = rng.randint(low + 1, high)
            b = rng.randint(low, a - 1)
            problem_type = 'sub'
            answer = a - b
        key = (a, b)
        if key in seen:
            continue
        seen.add(key)
        problem = {'type': problem_type, 'a': a, 'b': b, 'answer': answer}
        validate_grade3_problem(skill, problem)
        problems.append(problem)
    assert len(problems) == count
    assert len(seen) == count
    return problems


def publish(repo_root):
    root = Path(repo_root)
    catalog_path = root / 'worksheets' / 'catalog.json'
    catalog = json.loads(catalog_path.read_text(encoding='utf-8'))
    output_dir = root / 'materials' / 'worksheets' / 'elementary' / 'grade-03'
    output_dir.mkdir(parents=True, exist_ok=True)
    existing_ids = {entry['id'] for entry in catalog}
    published = 0

    for skill, spec in GRADE3_ADD_SUB_SKILLS.items():
        for variant, seed in enumerate(SEEDS, start=1):
            wid = f'e3-{skill}-{variant:02d}'
            if wid in existing_ids:
                continue
            problems = generate_grade3(skill, seed)
            content_hash = normalized_hash(problems)
            assert all(entry['content_hash'] != content_hash for entry in catalog), f'duplicate worksheet content: {wid}'
            filename = f'{wid}.pdf'
            render_pdf(output_dir / filename, spec['title'], problems)
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
                'description': '小学3年で扱う3位数・4位数の加法または減法を20問くり返すプリントです。2ページ目は同じ問題配置に赤字で解答を加えています。',
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
    print(f'published {published} grade-3 addition/subtraction worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
