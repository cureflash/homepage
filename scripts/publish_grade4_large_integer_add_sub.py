import json
import random
import sys
from pathlib import Path

try:
    from scripts.worksheet_factory import normalized_hash, render_pdf, validate_catalog
except ModuleNotFoundError:
    from worksheet_factory import normalized_hash, render_pdf, validate_catalog

SEEDS = (4101, 4202, 4303)
PROBLEM_COUNT = 20
UNIT = '大きな整数のたし算・ひき算'
SKILLS = {
    'add-5digit': {'title': '5桁のたし算', 'type': 'add', 'lo': 10000, 'hi': 99999},
    'add-6digit': {'title': '6桁のたし算', 'type': 'add', 'lo': 100000, 'hi': 999999},
    'sub-5digit': {'title': '5桁のひき算', 'type': 'sub', 'lo': 10000, 'hi': 99999},
    'sub-6digit': {'title': '6桁のひき算', 'type': 'sub', 'lo': 100000, 'hi': 999999},
}


def independent_answer(problem):
    if problem['type'] == 'add':
        return problem['a'] + problem['b']
    if problem['type'] == 'sub':
        return problem['a'] - problem['b']
    raise ValueError(problem['type'])


def has_carry(a, b):
    while a or b:
        if a % 10 + b % 10 >= 10:
            return True
        a //= 10
        b //= 10
    return False


def has_borrow(a, b):
    borrow = 0
    while a or b:
        da = a % 10 - borrow
        db = b % 10
        if da < db:
            return True
        borrow = 0
        a //= 10
        b //= 10
    return False


def generate(skill, seed, count=PROBLEM_COUNT):
    spec = SKILLS[skill]
    rng = random.Random(seed)
    out = []
    seen = set()
    while len(out) < count:
        a = rng.randint(spec['lo'], spec['hi'])
        b = rng.randint(spec['lo'], spec['hi'])
        if spec['type'] == 'sub' and a <= b:
            a, b = max(a, b), min(a, b)
            if a == b:
                continue
        pair = (a, b)
        if pair in seen:
            continue
        # Keep the drill nontrivial: each item requires at least one carry/borrow.
        if spec['type'] == 'add' and not has_carry(a, b):
            continue
        if spec['type'] == 'sub' and not has_borrow(a, b):
            continue
        answer = a + b if spec['type'] == 'add' else a - b
        problem = {'type': spec['type'], 'a': a, 'b': b, 'answer': answer}
        assert independent_answer(problem) == answer
        out.append(problem)
        seen.add(pair)
    return out


def publish(repo_root):
    root = Path(repo_root)
    catalog_path = root / 'worksheets' / 'catalog.json'
    catalog = json.loads(catalog_path.read_text(encoding='utf-8'))
    output_dir = root / 'materials' / 'worksheets' / 'elementary' / 'grade-04'
    output_dir.mkdir(parents=True, exist_ok=True)
    existing_ids = {entry['id'] for entry in catalog}
    published = 0

    for skill, spec in SKILLS.items():
        for variant, seed in enumerate(SEEDS, start=1):
            wid = f'e4-{skill}-{variant:02d}'
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
                'grade': 4,
                'subject': '算数',
                'unit': UNIT,
                'skill': skill,
                'problem_count': PROBLEM_COUNT,
                'seed': seed,
                'variant': variant,
                'title': f"{spec['title']} {variant:02d}",
                'description': '大きな整数の加法・減法を20問反復するプリントです。すべて繰り上がりまたは繰り下がりを含み、2ページ目は同じ問題配置に赤字で解答を加えています。',
                'url': f'materials/worksheets/elementary/grade-04/{filename}',
                'content_hash': content_hash,
                'difficulty': 'basic',
                'worksheet_series': 'focused',
                'worksheet_format': 'horizontal',
                'answer_type': 'numeric',
            })
            existing_ids.add(wid)
            published += 1

    validate_catalog(catalog, root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'published {published} grade-4 large-integer add/sub worksheets')


if __name__ == '__main__':
    publish(sys.argv[1] if len(sys.argv) > 1 else '.')
