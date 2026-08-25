import json
import re
import tempfile
from collections import Counter
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_grade2_times_tables_mixed import (
    DANS,
    MIXED_TIMES_TABLE_SEEDS,
    MULTIPLIERS,
    PROBLEM_COUNT,
    SKILL,
    UNIT_TITLE,
    generate_mixed_times_table,
    independent_mixed_answer,
    partition_for_dan,
    publish,
    validate_mixed_problem,
)
from scripts.worksheet_factory import normalized_hash, validate_catalog


def expected_ids():
    return {
        f'e2-{SKILL}-{variant:02d}'
        for variant, _seed in enumerate(MIXED_TIMES_TABLE_SEEDS, start=1)
    }


def main():
    source_catalog = json.loads((ROOT / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
    own_ids = expected_ids()
    published_hashes = {
        entry['content_hash'] for entry in source_catalog if entry['id'] not in own_ids
    }
    all_hashes = set()
    all_facts = set()

    for dan in DANS:
        partition = partition_for_dan(dan)
        assert len(partition) == len(MIXED_TIMES_TABLE_SEEDS)
        flattened = [multiplier for group in partition for multiplier in group]
        assert len(flattened) == 9
        assert set(flattened) == set(MULTIPLIERS)
        assert len(flattened) == len(set(flattened))

    for seed in MIXED_TIMES_TABLE_SEEDS:
        first = generate_mixed_times_table(seed)
        second = generate_mixed_times_table(seed)
        assert first == second
        assert len(first) == PROBLEM_COUNT

        dan_counts = Counter(problem['a'] for problem in first)
        assert dan_counts == Counter({dan: 3 for dan in DANS})
        assert len({(problem['a'], problem['b']) for problem in first}) == PROBLEM_COUNT

        for problem in first:
            validate_mixed_problem(problem)
            assert independent_mixed_answer(problem) == problem['answer']
            all_facts.add((problem['a'], problem['b']))

        h = normalized_hash(first)
        assert h not in all_hashes, f'duplicate generated content for seed={seed}'
        assert h not in published_hashes, f'duplicate of other published content for seed={seed}'
        all_hashes.add(h)

    assert all_facts == {(dan, multiplier) for dan in DANS for multiplier in MULTIPLIERS}
    assert len(all_facts) == 72

    present = [entry for entry in source_catalog if entry['id'] in own_ids]
    if present:
        assert {entry['content_hash'] for entry in present}.issubset(all_hashes)

    with tempfile.TemporaryDirectory() as td:
        root = Path(td)
        (root / 'worksheets').mkdir(parents=True)
        (root / 'worksheets' / 'catalog.json').write_text('[]\n', encoding='utf-8')
        publish(root)
        catalog = json.loads((root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))

        assert len(catalog) == len(MIXED_TIMES_TABLE_SEEDS)
        assert {entry['id'] for entry in catalog} == own_ids
        assert {entry['seed'] for entry in catalog} == set(MIXED_TIMES_TABLE_SEEDS)
        assert all(entry['skill'] == SKILL for entry in catalog)
        assert all(entry['problem_count'] == PROBLEM_COUNT for entry in catalog)
        assert all(entry['grade'] == 2 and entry['subject'] == '算数' for entry in catalog)
        assert all(entry['unit'] == UNIT_TITLE for entry in catalog)
        assert all(entry['worksheet_series'] == 'mixed' for entry in catalog)
        assert all(entry['worksheet_format'] == 'times-table-mixed' for entry in catalog)
        validate_catalog(catalog, root)

        for entry in catalog:
            pdf = root / entry['url']
            assert pdf.is_file() and pdf.stat().st_size > 1000
            data = pdf.read_bytes()
            assert len(re.findall(rb'/Type\s*/Page\b', data)) == 2

        before = (root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8')
        publish(root)
        after = (root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8')
        assert before == after

    print('grade 2 mixed times-table publisher tests: OK')


if __name__ == '__main__':
    main()
