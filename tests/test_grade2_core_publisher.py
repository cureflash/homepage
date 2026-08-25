import json
import tempfile
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_grade2_core import GRADE2_CORE_SKILLS, SEEDS, generate_grade2, publish
from scripts.worksheet_factory import normalized_hash, validate_catalog


def expected_ids():
    return {
        f'e2-{skill}-{variant:02d}'
        for skill in GRADE2_CORE_SKILLS
        for variant, _seed in enumerate(SEEDS, start=1)
    }


def assert_simple_three_digit(skill, problems):
    if skill == 'add-hundreds-simple':
        assert all(p['a'] % 100 == p['b'] % 100 == 0 and p['a'] <= p['b'] for p in problems)
    elif skill == 'sub-hundreds-simple':
        assert all(p['a'] % 100 == p['b'] % 100 == 0 and p['a'] > p['b'] for p in problems)
    elif skill == 'add-3digit-simple':
        assert all(100 <= p['a'] <= 999 and 1 <= p['b'] <= 99 for p in problems)
        assert all(p['a'] % 100 + p['b'] <= 99 for p in problems)
    elif skill == 'sub-3digit-simple':
        assert all(100 <= p['a'] <= 999 and 1 <= p['b'] <= 99 for p in problems)
        assert all(p['a'] % 100 >= p['b'] for p in problems)


def main():
    source_catalog = json.loads((ROOT / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
    own_ids = expected_ids()
    published_hashes = {
        entry['content_hash'] for entry in source_catalog if entry['id'] not in own_ids
    }
    all_hashes = set()
    for skill in GRADE2_CORE_SKILLS:
        for seed in SEEDS:
            first = generate_grade2(skill, seed)
            second = generate_grade2(skill, seed)
            assert first == second
            assert len(first) == 20
            assert len({(p['a'], p['b']) for p in first}) == 20
            assert_simple_three_digit(skill, first)
            h = normalized_hash(first)
            assert h not in all_hashes, f'duplicate generated content for {skill} seed={seed}'
            assert h not in published_hashes, f'duplicate of other published content for {skill} seed={seed}'
            all_hashes.add(h)

    present = [entry for entry in source_catalog if entry['id'] in own_ids]
    if present:
        assert {entry['id'] for entry in present}.issubset(own_ids)
        assert {entry['content_hash'] for entry in present}.issubset(all_hashes)

    with tempfile.TemporaryDirectory() as td:
        root = Path(td)
        (root / 'worksheets').mkdir(parents=True)
        (root / 'worksheets' / 'catalog.json').write_text('[]\n', encoding='utf-8')
        publish(root)
        catalog = json.loads((root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
        assert len(catalog) == len(GRADE2_CORE_SKILLS) * len(SEEDS)
        assert {e['id'] for e in catalog} == own_ids
        assert {e['skill'] for e in catalog} == set(GRADE2_CORE_SKILLS)
        assert {e['seed'] for e in catalog} == set(SEEDS)
        assert all(e['problem_count'] == 20 for e in catalog)
        assert all(e['grade'] == 2 and e['subject'] == '算数' for e in catalog)
        validate_catalog(catalog, root)
        for entry in catalog:
            pdf = root / entry['url']
            assert pdf.is_file() and pdf.stat().st_size > 1000
        before = (root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8')
        publish(root)
        after = (root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8')
        assert before == after

    print('grade 2 core publisher tests: OK')


if __name__ == '__main__':
    main()
