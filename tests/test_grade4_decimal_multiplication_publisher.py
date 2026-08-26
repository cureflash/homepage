import json
import re
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_grade4_decimal_multiplication import (
    GRADE4_DECIMAL_MULTIPLICATION_SKILLS,
    PROBLEM_COUNT,
    SEEDS,
    UNIT_TITLE,
    generate_grade4_decimal_multiplication,
    has_fractional_carry,
    independent_decimal_multiplication_answer,
    publish,
    validate_grade4_decimal_multiplication_problem,
)
from scripts.worksheet_factory import normalized_hash, validate_catalog


def expected_ids():
    return {
        f'e4-{skill}-{variant:02d}'
        for skill in GRADE4_DECIMAL_MULTIPLICATION_SKILLS
        for variant, _seed in enumerate(SEEDS, start=1)
    }


def main():
    source_catalog = json.loads((ROOT / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
    own_ids = expected_ids()
    published_hashes = {entry['content_hash'] for entry in source_catalog if entry['id'] not in own_ids}
    generated_hashes = set()

    variant_sets = []
    for seed in SEEDS:
        first = generate_grade4_decimal_multiplication(seed)
        second = generate_grade4_decimal_multiplication(seed)
        assert first == second
        assert len(first) == PROBLEM_COUNT
        assert len({(p['multiplicand_units'], p['multiplier']) for p in first}) == PROBLEM_COUNT
        assert sum(has_fractional_carry(p['multiplicand_units'], p['multiplier']) for p in first) == PROBLEM_COUNT // 2
        for problem in first:
            validate_grade4_decimal_multiplication_problem(problem)
            assert independent_decimal_multiplication_answer(problem) == problem['answer_units']
            assert 2 <= problem['multiplier'] <= 9
            assert problem['multiplicand_units'] % 10 != 0
        h = normalized_hash(first)
        assert h not in generated_hashes
        assert h not in published_hashes
        generated_hashes.add(h)
        variant_sets.append(frozenset((p['multiplicand_units'], p['multiplier']) for p in first))
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
        assert len(catalog) == len(GRADE4_DECIMAL_MULTIPLICATION_SKILLS) * len(SEEDS)
        assert {entry['id'] for entry in catalog} == own_ids
        assert {entry['skill'] for entry in catalog} == set(GRADE4_DECIMAL_MULTIPLICATION_SKILLS)
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

    print('grade 4 decimal multiplication publisher tests: OK')


if __name__ == '__main__':
    main()
