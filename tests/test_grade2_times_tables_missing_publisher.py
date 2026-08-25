import json
import re
import tempfile
from collections import Counter
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_grade2_times_tables_missing import (
    DANS,
    MISSING_FACTOR_SEEDS,
    MULTIPLIERS,
    PROBLEM_COUNT,
    SKILL,
    UNIT_TITLE,
    fact_of,
    generate_missing_factor,
    independent_missing_answer,
    publish,
    validate_missing_problem,
)
from scripts.worksheet_factory import normalized_hash, validate_catalog


def expected_ids():
    return {
        f'e2-{SKILL}-{variant:02d}'
        for variant, _seed in enumerate(MISSING_FACTOR_SEEDS, start=1)
    }


def main():
    source_catalog = json.loads((ROOT / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
    own_ids = expected_ids()
    published_hashes = {
        entry['content_hash'] for entry in source_catalog if entry['id'] not in own_ids
    }
    all_hashes = set()
    all_facts = []

    for seed in MISSING_FACTOR_SEEDS:
        first = generate_missing_factor(seed)
        second = generate_missing_factor(seed)
        assert first == second
        assert len(first) == PROBLEM_COUNT
        assert Counter(fact_of(p)[0] for p in first) == Counter({dan: 3 for dan in DANS})
        assert Counter(p['type'] for p in first) == Counter({
            'mul-missing-left': 12,
            'mul-missing-right': 12,
        })
        facts = [fact_of(p) for p in first]
        assert len(set(facts)) == PROBLEM_COUNT
        all_facts.extend(facts)
        for problem in first:
            validate_missing_problem(problem)
            assert independent_missing_answer(problem) == problem['answer']
            assert problem['product'] % problem['known'] == 0
        h = normalized_hash(first)
        assert h not in all_hashes, f'duplicate generated content seed={seed}'
        assert h not in published_hashes, f'duplicate of other published content seed={seed}'
        all_hashes.add(h)

    expected_facts = {(dan, multiplier) for dan in DANS for multiplier in MULTIPLIERS}
    assert set(all_facts) == expected_facts
    assert len(all_facts) == len(expected_facts) == 72

    present = [entry for entry in source_catalog if entry['id'] in own_ids]
    if present:
        assert {entry['content_hash'] for entry in present}.issubset(all_hashes)

    with tempfile.TemporaryDirectory() as td:
        root = Path(td)
        (root / 'worksheets').mkdir(parents=True)
        (root / 'worksheets' / 'catalog.json').write_text('[]\n', encoding='utf-8')
        publish(root)
        catalog = json.loads((root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
        assert len(catalog) == len(MISSING_FACTOR_SEEDS)
        assert {entry['id'] for entry in catalog} == own_ids
        assert {entry['seed'] for entry in catalog} == set(MISSING_FACTOR_SEEDS)
        assert all(entry['problem_count'] == PROBLEM_COUNT for entry in catalog)
        assert all(entry['grade'] == 2 and entry['subject'] == '算数' for entry in catalog)
        assert all(entry['unit'] == UNIT_TITLE for entry in catalog)
        assert all(entry['skill'] == SKILL for entry in catalog)
        assert all(entry['worksheet_format'] == 'times-table-missing-factor' for entry in catalog)
        assert all(entry['worksheet_series'] == 'mixed' for entry in catalog)
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

    print('grade 2 missing-factor publisher tests: OK')


if __name__ == '__main__':
    main()
