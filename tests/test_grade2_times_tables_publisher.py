import json
import re
import tempfile
from collections import Counter
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_grade2_times_tables import (
    GRADE2_TIMES_TABLE_SKILLS,
    PROBLEM_COUNT,
    TIMES_TABLE_SEEDS,
    UNIT_TITLE,
    generate_times_table,
    independent_times_table_answer,
    publish,
    validate_times_table_problem,
)
from scripts.worksheet_factory import normalized_hash, validate_catalog


def expected_ids():
    return {
        f'e2-{skill}-{variant:02d}'
        for skill in GRADE2_TIMES_TABLE_SKILLS
        for variant, _seed in enumerate(TIMES_TABLE_SEEDS, start=1)
    }


def repeated_facts(problems):
    counts = Counter(problem['b'] for problem in problems)
    return {multiplier for multiplier, count in counts.items() if count == 3}


def main():
    source_catalog = json.loads((ROOT / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
    own_ids = expected_ids()
    published_hashes = {
        entry['content_hash'] for entry in source_catalog if entry['id'] not in own_ids
    }
    all_hashes = set()

    for skill, spec in GRADE2_TIMES_TABLE_SKILLS.items():
        extra_profiles = set()
        for seed in TIMES_TABLE_SEEDS:
            first = generate_times_table(skill, seed)
            second = generate_times_table(skill, seed)
            assert first == second
            assert len(first) == PROBLEM_COUNT

            counts = Counter(problem['b'] for problem in first)
            assert set(counts) == set(range(1, 10))
            assert sorted(counts.values()) == [2] * 7 + [3] * 2
            extra_profiles.add(tuple(sorted(repeated_facts(first))))

            for problem in first:
                validate_times_table_problem(skill, problem)
                assert problem['a'] == spec['dan']
                assert independent_times_table_answer(problem) == problem['answer']

            h = normalized_hash(first)
            assert h not in all_hashes, f'duplicate generated content for {skill} seed={seed}'
            assert h not in published_hashes, f'duplicate of other published content for {skill} seed={seed}'
            all_hashes.add(h)

        assert len(extra_profiles) == len(TIMES_TABLE_SEEDS), f'variants repeat the same extra facts for {skill}'

    present = [entry for entry in source_catalog if entry['id'] in own_ids]
    if present:
        assert {entry['content_hash'] for entry in present}.issubset(all_hashes)

    with tempfile.TemporaryDirectory() as td:
        root = Path(td)
        (root / 'worksheets').mkdir(parents=True)
        (root / 'worksheets' / 'catalog.json').write_text('[]\n', encoding='utf-8')
        publish(root)
        catalog = json.loads((root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))

        assert len(catalog) == len(GRADE2_TIMES_TABLE_SKILLS) * len(TIMES_TABLE_SEEDS)
        assert {entry['id'] for entry in catalog} == own_ids
        assert {entry['skill'] for entry in catalog} == set(GRADE2_TIMES_TABLE_SKILLS)
        assert {entry['seed'] for entry in catalog} == set(TIMES_TABLE_SEEDS)
        assert all(entry['problem_count'] == PROBLEM_COUNT for entry in catalog)
        assert all(entry['grade'] == 2 and entry['subject'] == '算数' for entry in catalog)
        assert all(entry['unit'] == UNIT_TITLE for entry in catalog)
        assert all(entry['worksheet_format'] == 'times-table-stage' for entry in catalog)
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

    print('grade 2 times-table publisher tests: OK')


if __name__ == '__main__':
    main()
