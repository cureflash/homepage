import json
import re
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_grade4_division import (
    GRADE4_DIVISION_SKILLS,
    PROBLEM_COUNT,
    SEEDS,
    UNIT_TITLE,
    generate_grade4_division,
    independent_division_answer,
    publish,
    validate_grade4_division_problem,
)
from scripts.worksheet_factory import normalized_hash, validate_catalog


def expected_ids():
    return {
        f'e4-{skill}-{variant:02d}'
        for skill in GRADE4_DIVISION_SKILLS
        for variant, _seed in enumerate(SEEDS, start=1)
    }


def main():
    source_catalog = json.loads((ROOT / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
    own_ids = expected_ids()
    published_hashes = {entry['content_hash'] for entry in source_catalog if entry['id'] not in own_ids}
    generated_hashes = set()

    for skill in GRADE4_DIVISION_SKILLS:
        variant_pair_sets = []
        for seed in SEEDS:
            first = generate_grade4_division(skill, seed)
            second = generate_grade4_division(skill, seed)
            assert first == second
            assert len(first) == PROBLEM_COUNT
            assert len({(p['a'], p['b']) for p in first}) == PROBLEM_COUNT
            assert all(22 <= p['a'] <= 999 for p in first)
            assert all(11 <= p['b'] <= 99 for p in first)
            for problem in first:
                validate_grade4_division_problem(skill, problem)
                quotient, remainder = independent_division_answer(problem)
                assert quotient == problem['quotient']
                assert remainder == problem['remainder']
                assert problem['b'] * quotient + remainder == problem['a']
                assert 0 <= remainder < problem['b']
            if skill == 'division-2digit-divisor-exact':
                assert all(p['remainder'] == 0 for p in first)
            else:
                assert all(1 <= p['remainder'] < p['b'] for p in first)
            h = normalized_hash(first)
            assert h not in generated_hashes
            assert h not in published_hashes
            generated_hashes.add(h)
            variant_pair_sets.append({(p['a'], p['b']) for p in first})
        # Variants must be materially different, not merely differently ordered.
        assert len({frozenset(items) for items in variant_pair_sets}) == len(SEEDS)

    present = [entry for entry in source_catalog if entry['id'] in own_ids]
    if present:
        assert {entry['content_hash'] for entry in present}.issubset(generated_hashes)

    with tempfile.TemporaryDirectory() as td:
        root = Path(td)
        (root / 'worksheets').mkdir(parents=True)
        (root / 'worksheets' / 'catalog.json').write_text('[]\n', encoding='utf-8')
        publish(root)
        catalog = json.loads((root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
        assert len(catalog) == len(GRADE4_DIVISION_SKILLS) * len(SEEDS)
        assert {entry['id'] for entry in catalog} == own_ids
        assert {entry['skill'] for entry in catalog} == set(GRADE4_DIVISION_SKILLS)
        assert {entry['seed'] for entry in catalog} == set(SEEDS)
        assert all(entry['problem_count'] == PROBLEM_COUNT for entry in catalog)
        assert all(entry['grade'] == 4 and entry['subject'] == '算数' for entry in catalog)
        assert all(entry['unit'] == UNIT_TITLE for entry in catalog)
        assert all(entry['worksheet_format'] == 'horizontal' for entry in catalog)
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

    print('grade 4 division publisher tests: OK')


if __name__ == '__main__':
    main()
