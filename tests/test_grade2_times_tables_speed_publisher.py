import json
import re
import tempfile
from collections import Counter
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_grade2_times_tables_speed import (
    DANS,
    MULTIPLIERS,
    PER_DAN,
    PROBLEM_COUNT,
    SPEED_SEEDS,
    SKILL,
    UNIT_TITLE,
    generate_speed,
    independent_speed_answer,
    multipliers_for_variant,
    publish,
    validate_speed_problem,
)
from scripts.worksheet_factory import normalized_hash, validate_catalog


def expected_ids():
    return {
        f'e2-{SKILL}-{variant:02d}'
        for variant, _seed in enumerate(SPEED_SEEDS, start=1)
    }


def main():
    source_catalog = json.loads((ROOT / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
    own_ids = expected_ids()
    published_hashes = {
        entry['content_hash'] for entry in source_catalog if entry['id'] not in own_ids
    }
    generated_hashes = set()
    fact_sets = []

    for seed in SPEED_SEEDS:
        first = generate_speed(seed)
        second = generate_speed(seed)
        assert first == second
        assert len(first) == PROBLEM_COUNT
        assert Counter(problem['a'] for problem in first) == Counter({dan: PER_DAN for dan in DANS})
        facts = {(problem['a'], problem['b']) for problem in first}
        assert len(facts) == PROBLEM_COUNT
        for problem in first:
            validate_speed_problem(problem)
            assert independent_speed_answer(problem) == problem['answer']
        h = normalized_hash(first)
        assert h not in generated_hashes
        assert h not in published_hashes
        generated_hashes.add(h)
        fact_sets.append(facts)

    assert len({frozenset(facts) for facts in fact_sets}) == len(SPEED_SEEDS)
    for dan in DANS:
        union = set()
        for variant_index in range(len(SPEED_SEEDS)):
            selected = multipliers_for_variant(dan, variant_index)
            assert len(selected) == PER_DAN
            assert len(set(selected)) == PER_DAN
            union.update(selected)
        assert union == set(MULTIPLIERS)

    present = [entry for entry in source_catalog if entry['id'] in own_ids]
    if present:
        assert {entry['content_hash'] for entry in present}.issubset(generated_hashes)

    with tempfile.TemporaryDirectory() as td:
        root = Path(td)
        (root / 'worksheets').mkdir(parents=True)
        (root / 'worksheets' / 'catalog.json').write_text('[]\n', encoding='utf-8')
        publish(root)
        catalog = json.loads((root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
        assert len(catalog) == len(SPEED_SEEDS)
        assert {entry['id'] for entry in catalog} == own_ids
        assert {entry['seed'] for entry in catalog} == set(SPEED_SEEDS)
        assert all(entry['problem_count'] == PROBLEM_COUNT for entry in catalog)
        assert all(entry['grade'] == 2 and entry['subject'] == '算数' for entry in catalog)
        assert all(entry['unit'] == UNIT_TITLE for entry in catalog)
        assert all(entry['worksheet_series'] == 'mixed' for entry in catalog)
        assert all(entry['worksheet_format'] == 'times-table-speed' for entry in catalog)
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

    print('grade 2 times-table speed publisher tests: OK')


if __name__ == '__main__':
    main()
