import json
import re
import tempfile
from collections import Counter
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_grade2_simple_two_digit_times import (
    MULTIPLIERS,
    PROBLEM_COUNT,
    SIMPLE_TWO_DIGIT_SEEDS,
    SKILLS,
    UNIT_TITLE,
    generate_simple_two_digit,
    independent_simple_answer,
    publish,
    validate_simple_problem,
)
from scripts.worksheet_factory import normalized_hash, validate_catalog


def expected_ids():
    return {
        f'e2-{skill}-{variant:02d}'
        for skill in SKILLS
        for variant, _seed in enumerate(SIMPLE_TWO_DIGIT_SEEDS, start=1)
    }


def main():
    source_catalog = json.loads((ROOT / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
    own_ids = expected_ids()
    published_hashes = {entry['content_hash'] for entry in source_catalog if entry['id'] not in own_ids}
    all_hashes = set()

    for skill, spec in SKILLS.items():
        extra_sets = set()
        for seed in SIMPLE_TWO_DIGIT_SEEDS:
            first = generate_simple_two_digit(skill, seed)
            second = generate_simple_two_digit(skill, seed)
            assert first == second
            assert len(first) == PROBLEM_COUNT
            counts = Counter(problem['b'] for problem in first)
            assert set(counts) == set(MULTIPLIERS)
            assert sorted(counts.values()) == [2] * 7 + [3] * 2
            extra_sets.add(tuple(sorted(multiplier for multiplier, n in counts.items() if n == 3)))
            for problem in first:
                validate_simple_problem(skill, problem)
                assert problem['a'] == spec['multiplicand']
                assert independent_simple_answer(problem) == problem['answer']
            h = normalized_hash(first)
            assert h not in all_hashes, f'duplicate generated content {skill} seed={seed}'
            assert h not in published_hashes, f'duplicate of published content {skill} seed={seed}'
            all_hashes.add(h)
        assert len(extra_sets) >= 2, f'variants do not meaningfully vary for {skill}'

    present = [entry for entry in source_catalog if entry['id'] in own_ids]
    if present:
        assert {entry['content_hash'] for entry in present}.issubset(all_hashes)

    with tempfile.TemporaryDirectory() as td:
        root = Path(td)
        (root / 'worksheets').mkdir(parents=True)
        (root / 'worksheets' / 'catalog.json').write_text('[]\n', encoding='utf-8')
        publish(root)
        catalog = json.loads((root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
        assert len(catalog) == len(SKILLS) * len(SIMPLE_TWO_DIGIT_SEEDS)
        assert {entry['id'] for entry in catalog} == own_ids
        assert {entry['skill'] for entry in catalog} == set(SKILLS)
        assert all(entry['problem_count'] == PROBLEM_COUNT for entry in catalog)
        assert all(entry['grade'] == 2 and entry['subject'] == '算数' for entry in catalog)
        assert all(entry['unit'] == UNIT_TITLE for entry in catalog)
        assert all(entry['worksheet_format'] == 'simple-two-digit-times' for entry in catalog)
        assert all(entry['worksheet_series'] == 'focused' for entry in catalog)
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

    print('grade 2 simple two-digit multiplication publisher tests: OK')


if __name__ == '__main__':
    main()
