import argparse
import json
from pathlib import Path

try:
    from scripts import worksheet_factory as wf
except ModuleNotFoundError:
    import worksheet_factory as wf

DEFAULT_SEEDS = (202, 303)
GRADE1_OUTPUT_DIR = Path('materials/worksheets/elementary/grade-01')
CATALOG_PATH = Path('worksheets/catalog.json')


def build_entry(skill, spec, seed, variant, problems):
    wid = f'e1-{skill}-{variant:02d}'
    filename = f'{wid}.pdf'
    return {
        'id': wid,
        'school_level': 'elementary',
        'grade': 1,
        'subject': '算数',
        'unit': spec['title'],
        'skill': skill,
        'problem_count': len(problems),
        'seed': seed,
        'variant': variant,
        'title': f"{spec['title']} {variant:02d}",
        'description': '基礎練習を20問くり返すプリントです。2ページ目は元の問題に赤字で解答を加えています。',
        'url': str(GRADE1_OUTPUT_DIR / filename),
        'content_hash': wf.normalized_hash(problems),
        'difficulty': 'basic',
        'worksheet_series': spec.get('worksheet_series', 'focused'),
        'answer_type': spec.get('answer_type', 'numeric'),
    }


def planned_entries(catalog, seeds=DEFAULT_SEEDS):
    existing_ids = {entry['id'] for entry in catalog}
    existing_hashes = {entry['content_hash'] for entry in catalog}
    planned = []

    for skill, spec in wf.SKILLS.items():
        for variant, seed in enumerate(seeds, start=2):
            problems = wf.generate(skill, seed, 20)
            entry = build_entry(skill, spec, seed, variant, problems)
            if entry['id'] in existing_ids:
                continue
            if entry['content_hash'] in existing_hashes:
                raise AssertionError(f"duplicate worksheet content: {entry['id']}")
            existing_ids.add(entry['id'])
            existing_hashes.add(entry['content_hash'])
            planned.append((entry, problems))

    return planned


def publish(repo_root, seeds=DEFAULT_SEEDS):
    repo_root = Path(repo_root)
    catalog_path = repo_root / CATALOG_PATH
    output_dir = repo_root / GRADE1_OUTPUT_DIR
    output_dir.mkdir(parents=True, exist_ok=True)

    catalog = json.loads(catalog_path.read_text(encoding='utf-8'))
    planned = planned_entries(catalog, seeds)

    for entry, problems in planned:
        output_path = repo_root / entry['url']
        wf.render_pdf(output_path, wf.SKILLS[entry['skill']]['title'], problems)
        assert output_path.is_file() and output_path.stat().st_size > 1000
        catalog.append(entry)

    wf.validate_catalog(catalog, repo_root)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    return [entry for entry, _ in planned]


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('repo_root', nargs='?', default='.')
    parser.add_argument('--seeds', nargs='+', type=int, default=list(DEFAULT_SEEDS))
    args = parser.parse_args()
    published = publish(args.repo_root, tuple(args.seeds))
    print(f'published {len(published)} grade-1 variants')


if __name__ == '__main__':
    main()
