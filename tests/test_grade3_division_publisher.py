import json
import re
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_grade3_division import (
    GRADE3_DIVISION_SKILLS,
    PROBLEM_COUNT,
    SEEDS,
    UNIT_TITLE,
    generate_grade3_division,
    independent_division_answer,
    publish,
    validate_grade3_division_problem,
)
from scripts.worksheet_factory import normalized_hash, validate_catalog


def expected_ids():
    return {
        f'e3-{skill}-{variant:02d}'
        for skill in GRADE3_DIVISION_SKILLS
        for variant, _seed in enumerate(SEEDS, start=1)
    }


def main():
    source_catalog = json.loads((ROOT / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
    own_ids = expected_ids()
    other_hashes = {entry['content_hash'] for entry in source_catalog if entry['id'] not in own_ids}
    generated_hashes = set()

    for skill in GRADE3_DIVISION_SKILLS:
        for seed in SEEDS:
            first = generate_grade3_division(skill, seed)
            second = generate_grade3_division(skill, seed)
            assert first == second
            assert len(first) == PROBLEM_COUNT
            assert len({(p['a'], p['b']) for p in first}) == PROBLEM_COUNT
            divisors = {p['b'] for p in first}
            assert len(divisors) >= 4, f'divisor distribution too narrow for {skill} seed={seed}'
            for problem in first:
                validate_grade3_division_problem(skill, problem)
                assert independent_division_answer(problem) == (problem['quotient'], problem['remainder'])
            h = normalized_hash(first)
            assert h not in generated_hashes
            assert h not in other_hashes
            generated_hashes.add(h)

    exact = generate_grade3_division('division-exact-2digit-1digit', SEEDS[0])
    assert all(p['remainder'] == 0 and p['quotient'] >= 10 for p in exact)
    assert any(p['a'] > 81 or p['quotient'] >= 10 for p in exact)

    remainder = generate_grade3_division('division-remainder-1digit', SEEDS[0])
    assert all(1 <= p['remainder'] < p['b'] for p in remainder)
    assert all(1 <= p['quotient'] <= 9 for p in remainder)

    with tempfile.TemporaryDirectory() as td:
        root = Path(td)
        (root / 'worksheets').mkdir(parents=True)
        (root / 'worksheets' / 'catalog.json').write_text('[]\n', encoding='utf-8')
        publish(root)
        catalog = json.loads((root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
        assert len(catalog) == len(GRADE3_DIVISION_SKILLS) * len(SEEDS)
        assert {entry['id'] for entry in catalog} == own_ids
        assert all(entry['unit'] == UNIT_TITLE for entry in catalog)
        assert all(entry['grade'] == 3 and entry['subject'] == '算数' for entry in catalog)
        assert all(entry['problem_count'] == PROBLEM_COUNT for entry in catalog)
        validate_catalog(catalog, root)
        for entry in catalog:
            pdf = root / entry['url']
            assert pdf.is_file() and pdf.stat().st_size > 1000
            assert len(re.findall(rb'/Type\s*/Page\b', pdf.read_bytes())) == 2
        before = (root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8')
        publish(root)
        after = (root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8')
        assert before == after

    print('grade 3 division publisher tests: OK')


if __name__ == '__main__':
    main()
