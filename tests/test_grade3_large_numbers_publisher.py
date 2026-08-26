import json
import re
import sys
import tempfile
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_grade3_large_numbers import (
    PLACE_LABELS,
    PROBLEM_COUNT,
    SEEDS,
    SKILLS,
    UNIT_TITLE,
    generate,
    independent_answer,
    publish,
    validate_problem,
)
from scripts.worksheet_factory import normalized_hash, validate_catalog


def expected_ids():
    return {
        f'e3-{skill}-{variant:02d}'
        for skill in SKILLS
        for variant, _seed in enumerate(SEEDS, start=1)
    }


def main():
    source_catalog = json.loads((ROOT / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
    own_ids = expected_ids()
    published_hashes = {entry['content_hash'] for entry in source_catalog if entry['id'] not in own_ids}
    generated_hashes = set()

    for skill in SKILLS:
        variant_sets = []
        for seed in SEEDS:
            first = generate(skill, seed)
            second = generate(skill, seed)
            assert first == second
            assert len(first) == PROBLEM_COUNT
            for problem in first:
                validate_problem(skill, problem)
                assert independent_answer(problem) == problem['answer']
            h = normalized_hash(first)
            assert h not in generated_hashes
            assert h not in published_hashes
            generated_hashes.add(h)
            variant_sets.append({json.dumps(p, sort_keys=True) for p in first})

            if skill == 'large-number-place-digit':
                counts = Counter(p['place'] for p in first)
                assert set(counts) == set(PLACE_LABELS)
                assert min(counts.values()) >= 2 and max(counts.values()) <= 3
            elif skill == 'large-number-compose':
                assert all(10_000 <= p['answer'] <= 99_999_999 for p in first)
                assert all(2 <= sum(1 for value in p['digits'].values() if value) <= 5 for p in first)
            elif skill == 'large-number-compare':
                assert Counter(p['answer'] for p in first) == {'<': 8, '>': 8, '=': 4}
            elif skill == 'large-number-scale':
                assert Counter(p['factor'] for p in first) == {10: 5, 100: 5, 1000: 5, -10: 5}
            elif skill == 'large-number-relative-units':
                assert Counter(p['unit'] for p in first) == {10: 5, 100: 5, 1000: 5, 10_000: 5}

        assert len({frozenset(s) for s in variant_sets}) == len(SEEDS)

    with tempfile.TemporaryDirectory() as td:
        root = Path(td)
        (root / 'worksheets').mkdir(parents=True)
        (root / 'worksheets' / 'catalog.json').write_text('[]\n', encoding='utf-8')
        publish(root)
        catalog = json.loads((root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
        assert len(catalog) == len(SKILLS) * len(SEEDS)
        assert {entry['id'] for entry in catalog} == own_ids
        assert all(entry['grade'] == 3 and entry['subject'] == '算数' for entry in catalog)
        assert all(entry['unit'] == UNIT_TITLE for entry in catalog)
        assert all(entry['problem_count'] == PROBLEM_COUNT for entry in catalog)
        assert all(entry['answer_type'] in ('numeric', 'accepted-set') for entry in catalog)
        validate_catalog(catalog, root)
        for entry in catalog:
            pdf = root / entry['url']
            assert pdf.is_file() and pdf.stat().st_size > 1000
            assert len(re.findall(rb'/Type\s*/Page\b', pdf.read_bytes())) == 2
        before = (root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8')
        publish(root)
        after = (root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8')
        assert before == after

    print('grade 3 large-number publisher tests: OK')


if __name__ == '__main__':
    main()
