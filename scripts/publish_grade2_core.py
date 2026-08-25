import json
import random
import sys
from pathlib import Path

try:
    from scripts.worksheet_factory import normalized_hash, render_pdf, validate_catalog
except ModuleNotFoundError:
    from worksheet_factory import normalized_hash, render_pdf, validate_catalog


GRADE2_CORE_SKILLS = {
    'add-2digit-no-carry': {
        'title': '2桁 + 2桁（繰り上がりなし）',
        'operator': '+',
    },
    'add-2digit-carry': {
        'title': '2桁 + 2桁（繰り上がりあり）',
        'operator': '+',
    },
    'sub-2digit-no-borrow': {
        'title': '2桁 - 2桁（繰り下がりなし）',
        'operator': '-',
    },
    'sub-2digit-borrow': {
        'title': '2桁 - 2桁（繰り下がりあり）',
        'operator': '-',
    },
}
SEEDS = (101, 202, 303)
PROBLEM_COUNT = 20


def candidates(skill):
    rows = []
    for a in range(10, 100):
        for b in range(10, 100):
            if skill == 'add-2digit-no-carry':
                if a + b <= 99 and a % 10 + b % 10 <= 9:
                    rows.append((a, b))
            elif skill == 'add-2digit-carry':
                if a + b <= 99 and a % 10 + b % 10 >= 10:
                    rows.append((a, b))
            elif skill == 'sub-2digit-no-borrow':
                if a > b and a % 10 >= b % 10:
                    rows.append((a, b))
            elif skill == 'sub-2digit-borrow':
                if a > b and a % 10 < b % 10:
                    rows.append((a, b))
            else:
                raise ValueError(skill)
    return rows


def independent_answer(problem):
    if problem['type'] == 'add':
        return problem['a'] + problem['b']
    if problem['type'] == 'sub':
        return problem['a'] - problem['b']
    raise ValueError(problem['type'])


def validate_grade2_problem(skill, problem):
    a, b = problem['a'], problem['b']
    assert 10 <= a <= 99 and 10 <= b <= 99
    assert independent_answer(problem) == problem['answer']
    if skill == 'add-2digit-no-carry':
        assert problem['type'] == 'add' and a + b <= 99 and a % 10 + b % 10 <= 9
    elif skill == 'add-2digit-carry':
        assert problem['type'] == 'add' and a + b <= 99 and a % 10 + b % 10 >= 10
    elif skill == 'sub-2digit-no-borrow':
        assert problem['type'] == 'sub' and a > b and a % 10 >= b % 10
    elif skill == 'sub-2digit-borrow':
        assert problem['type'] == 'sub' and a > b and a % 10 < b % 10
    else:
        raise ValueError(skill)


def generate_grade2(skill, seed, count=PROBLEM_COUNT):
    rng = random.Random(seed)
    pairs = candidates(skill)
    rng.shuffle(pairs)
    chosen = pairs[:count]
    assert len(chosen) == count
    problem_type = 'add' if GRADE2_CORE_SKILLS[skill]['operator'] == '+' else 'sub'
    problems = []
    for a, b in chosen:
        answer = a + b if problem_type == 'add' else a - b
        problem = {'type': problem_type, 'a': a, 'b': b, 'answer': answer}
        validate_grade2_problem(skill, problem)
        problems.append(problem)
    assert len({(p['a'], p['b']) for p in problems}) == count
    return problems


def publish(repo_root):
    root = Path(repo_root)
    catalog_path = root / 'worksheets' / 'catalog.json'
    catalog = json.loads(catalog_path.read_text(encoding='utf-8'))
    output_dir = root / 'materials' / 'worksheets' / 'elementary' / 'grade-02'
    output_dir.mkdir(parents=True, exist_ok=True)
    existing_ids = {entry['id'] for entry in catalog}
    published = 0

    for skill, spec in GRADE2_CORE_SKILLS.items():
        for variant, seed in enumerate(SEEDS, start=1):
            wid = f'e2-{skill}-{variant:02d}'
            if wid in existing_ids:
                continue
            problems = generate_grade2(skill, seed)
            content_hash = normalized_hash(problems)
            assert all(entry['content_hash'] != content_hash for entry in catalog), f'duplicate worksheet content: {wid}'
            filename = f'{wid}.pdf'
            render_pdf(output_dir / filename, spec['title'], problems)
            entry = {
                'id': wid,
                'school_level': 'elementary',
                'grade': 2,
                'subject': '算数',
                'unit': spec['title'],
                'skill': skill,
                'problem_count': PROBLEM_COUNT,
                'seed': seed,
                'variant': variant,
                'title': f"{spec['title']} {variant:02d}",
                'description': '小学2年の2桁どうしの計算を20問くり返すプリントです。2ページ目は同じ問題配置に赤字で解答を加えています。',
                'url': f'materials/worksheets/elementary/grade-02/{filename}',
                'content_hash': content_hash,
                'difficulty': 'basic',
                'worksheet_series': 'focused',
                'answer_type': 'numeric',
            }
            catalog.append(entry)
            existing_ids.add(wid)
            published += 1

    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} grade-2 core worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
