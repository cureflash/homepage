import json
import re
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_grade4_decimals import (
    GRADE4_DECIMAL_SKILLS,
    PROBLEM_COUNT,
    SEEDS,
    UNIT_TITLE,
    fractional_borrow,
    fractional_carry,
    generate_grade4_decimal,
    independent_decimal_answer,
    publish,
    validate_grade4_decimal_problem,
)
from scripts.worksheet_factory import normalized_hash, validate_catalog


def expected_ids():
    return {
        f'e4-{skill}-{variant:02d}'
        for skill in GRADE4_DECIMAL_SKILLS
        for variant, _seed in enumerate(SEEDS, start=1)
    }


def main():
    source_catalog = json.loads((ROOT / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
    own_ids = expected_ids()
    published_hashes = {entry['content_hash'] for entry in source_catalog if entry['id'] not in own_ids}
    generated_hashes = set()

    for skill in GRADE4_DECIMAL_SKILLS:
        variant_sets = []
        for seed in SEEDS:
            first = generate_grade4_decimal(skill, seed)
            second = generate_grade4_decimal(skill, seed)
            assert first == second
            assert len(first) == PROBLEM_COUNT
            assert len({(p['a_units'], p['b_units']) for p in first}) == PROBLEM_COUNT
            for problem in first:
                validate_grade4_decimal_problem(skill, problem)
                assert independent_decimal_answer(problem) == problem['answer_units']
            if skill == 'decimal-add-hundredths':
                assert sum(fractional_carry(p['a_units'], p['b_units']) for p in first) == PROBLEM_COUNT // 2
            else:
                assert sum(fractional_borrow(p['a_units'], p['b_units']) for p in first) == PROBLEM_COUNT // 2
            h = normalized_hash(first)
            assert h not in generated_hashes
            assert h not in published_hashes
            generated_hashes.add(h)
            variant_sets.append(frozenset((p['a_units'], p['b_units']) for p in first))
        assert len(set(variant_sets)) == len(SEEDS)

    present = [entry for entry in source_catalog if entry['id'] in own_ids]
    if present:
        assert {entry['content_hash'] for entry in present}.issubset(generated_hashes)

    with tempfile.TemporaryDirectory() as td:
        root = Path(td)
        (root / 'worksheets').mkdir(parents=True)
        (root / 'worksheets' / 'catalog.json').write_text('[]\n', encoding='utf-8')
        publish(root)
        catalog = json.loads((root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
        assert len(catalog) == len(GRADE4_DECIMAL_SKILLS) * len(SEEDS)
        assert {entry['id'] for entry in catalog} == own_ids
        assert {entry['skill'] for entry in catalog} == set(GRADE4_DECIMAL_SKILLS)
        assert {entry['seed'] for entry in catalog} == set(SEEDS)
        assert all(entry['problem_count'] == PROBLEM_COUNT for entry in catalog)
        assert all(entry['grade'] == 4 and entry['subject'] == '算数' for entry in catalog)
        assert all(entry['unit'] == UNIT_TITLE for entry in catalog)
        assert all(entry['worksheet_format'] == 'decimal-horizontal' for entry in catalog)
        validate_catalog(catalog, root)
        for entry in catalog:
            pdf = root / entry['url']
            assert pdf.is_file() and pdf.stat().st_size > 1000
            assert len(re.findall(rb'/Type\s*/Page\b', pdf.read_bytes())) == 2
        before = (root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8')
        publish(root)
        after = (root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8')
        assert before == after

    print('grade 4 decimal add/sub publisher tests: OK')


if __name__ == '__main__':
    main()
