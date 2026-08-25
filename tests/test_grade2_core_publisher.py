import json
import tempfile
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_grade2_core import GRADE2_CORE_SKILLS, SEEDS, generate_grade2, publish
from scripts.worksheet_factory import normalized_hash, validate_catalog


def main():
    all_hashes = set()
    for skill in GRADE2_CORE_SKILLS:
        for seed in SEEDS:
            first = generate_grade2(skill, seed)
            second = generate_grade2(skill, seed)
            assert first == second
            assert len(first) == 20
            assert len({(p['a'], p['b']) for p in first}) == 20
            h = normalized_hash(first)
            assert h not in all_hashes, f'duplicate generated content for {skill} seed={seed}'
            all_hashes.add(h)

    with tempfile.TemporaryDirectory() as td:
        root = Path(td)
        (root / 'worksheets').mkdir(parents=True)
        source_catalog = json.loads((ROOT / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
        (root / 'worksheets' / 'catalog.json').write_text(
            json.dumps(source_catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8'
        )
        publish(root)
        catalog = json.loads((root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
        added = [e for e in catalog if e['grade'] == 2 and e['subject'] == '算数']
        assert len(added) == 12
        assert {e['skill'] for e in added} == set(GRADE2_CORE_SKILLS)
        assert {e['seed'] for e in added} == set(SEEDS)
        assert all(e['problem_count'] == 20 for e in added)
        validate_catalog(catalog, root)
        for entry in added:
            pdf = root / entry['url']
            assert pdf.is_file() and pdf.stat().st_size > 1000
        before = (root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8')
        publish(root)
        after = (root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8')
        assert before == after

    print('grade 2 core publisher tests: OK')


if __name__ == '__main__':
    main()
