import json
from pathlib import Path

try:
    from scripts import worksheet_factory as wf
except ModuleNotFoundError:
    import worksheet_factory as wf

SEED = 505
PROBLEM_COUNT = 50
GRADE1_OUTPUT_DIR = Path('materials/worksheets/elementary/grade-01')
CATALOG_PATH = Path('worksheets/catalog.json')


def build_entry(skill, spec, problems):
    wid = f'e1-{skill}-50q-01'
    filename = f'{wid}.pdf'
    return {
        'id': wid,
        'school_level': 'elementary',
        'grade': 1,
        'subject': '算数',
        'unit': spec['title'],
        'skill': skill,
        'problem_count': PROBLEM_COUNT,
        'seed': SEED,
        'variant': 1,
        'title': f"{spec['title']} 50問 01",
        'description': '基礎練習を50問くり返すプリントです。問題と解答は20問ずつ複数ページに分かれ、解答ページは同じ配置に赤字で答えを加えています。',
        'url': str(GRADE1_OUTPUT_DIR / filename),
        'content_hash': wf.normalized_hash(problems),
        'difficulty': 'basic',
        'worksheet_series': spec.get('worksheet_series', 'focused'),
        'answer_type': spec.get('answer_type', 'numeric'),
    }


def planned_entries(catalog):
    existing_ids = {entry['id'] for entry in catalog}
    existing_hashes = {entry['content_hash'] for entry in catalog}
    planned = []
    for skill, spec in wf.SKILLS.items():
        problems = wf.generate(skill, SEED, PROBLEM_COUNT)
        entry = build_entry(skill, spec, problems)
        if entry['id'] in existing_ids:
            continue
        if entry['content_hash'] in existing_hashes:
            raise AssertionError(f"duplicate worksheet content: {entry['id']}")
        existing_ids.add(entry['id'])
        existing_hashes.add(entry['content_hash'])
        planned.append((entry, problems))
    return planned


def publish(repo_root):
    repo_root = Path(repo_root)
    catalog_path = repo_root / CATALOG_PATH
    output_dir = repo_root / GRADE1_OUTPUT_DIR
    output_dir.mkdir(parents=True, exist_ok=True)
    catalog = json.loads(catalog_path.read_text(encoding='utf-8'))
    planned = planned_entries(catalog)
    for entry, problems in planned:
        output_path = repo_root / entry['url']
        wf.render_pdf(output_path, wf.SKILLS[entry['skill']]['title'] + ' 50問', problems)
        assert output_path.is_file() and output_path.stat().st_size > 1000
        catalog.append(entry)
    wf.validate_catalog(catalog, repo_root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    return [entry for entry, _ in planned]


if __name__ == '__main__':
    import sys
    root = sys.argv[1] if len(sys.argv) > 1 else '.'
    published = publish(root)
    print(f'published {len(published)} grade-1 50-question worksheets')
