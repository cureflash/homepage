import json
import re
import sys
import tempfile
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_grade5_final_four import (
    PROBLEM_COUNT,
    SEEDS,
    SKILLS,
    answer_text,
    generate,
    independent_answer,
    publish,
    validate_problem,
)
from scripts.worksheet_factory import normalized_hash, validate_catalog


def main():
    source = json.loads((ROOT / 'worksheets/catalog.json').read_text(encoding='utf-8'))
    own = {
        f'e5-{skill}-{variant:02d}'
        for skill in SKILLS
        for variant, _ in enumerate(SEEDS, 1)
    }
    old_hashes = {entry['content_hash'] for entry in source if entry['id'] not in own}
    all_hashes = set()

    for skill in SKILLS:
        variant_sets = []
        for seed in SEEDS:
            problems = generate(skill, seed)
            assert problems == generate(skill, seed)
            assert len(problems) == PROBLEM_COUNT
            seen = set()
            for problem in problems:
                validate_problem(skill, problem)
                assert independent_answer(problem) is not None
                assert answer_text(problem)
                key = json.dumps(problem, ensure_ascii=False, sort_keys=True)
                assert key not in seen
                seen.add(key)
            content_hash = normalized_hash(problems)
            assert content_hash not in all_hashes
            assert content_hash not in old_hashes
            all_hashes.add(content_hash)
            variant_sets.append(frozenset(seen))
        assert len(set(variant_sets)) == len(SEEDS)

    fraction = generate('fraction-add-sub-mixed', SEEDS[0])
    assert all(p['type'] == 'fraction-mixed' for p in fraction)
    assert all(independent_answer(p) > 0 for p in fraction)

    percent = generate('decimal-percent-conversion', SEEDS[0])
    assert Counter(p['type'] for p in percent) == Counter({'decimal-to-percent': 10, 'percent-to-decimal': 10})

    ratios = generate('basic-ratio-calculation', SEEDS[0])
    counts = Counter(p['type'] for p in ratios)
    assert counts['ratio-find-rate'] == 7
    assert counts['ratio-find-compared'] == 7
    assert counts['ratio-find-base'] == 6

    review = generate('grade5-review', SEEDS[0])
    assert Counter(p['type'] for p in review) == Counter({
        'review-decimal-mul': 5,
        'review-fraction-add': 5,
        'review-percent': 5,
        'review-divisor': 5,
    })

    with tempfile.TemporaryDirectory() as td:
        root = Path(td)
        (root / 'worksheets').mkdir()
        (root / 'worksheets/catalog.json').write_text('[]\n', encoding='utf-8')
        publish(root)
        catalog = json.loads((root / 'worksheets/catalog.json').read_text(encoding='utf-8'))
        assert {entry['id'] for entry in catalog} == own
        assert len(catalog) == len(SKILLS) * len(SEEDS)
        validate_catalog(catalog, root)
        for entry in catalog:
            pdf = root / entry['url']
            data = pdf.read_bytes()
            assert len(data) > 1000
            assert len(re.findall(rb'/Type\s*/Page\b', data)) == 2
        before = (root / 'worksheets/catalog.json').read_text(encoding='utf-8')
        publish(root)
        assert before == (root / 'worksheets/catalog.json').read_text(encoding='utf-8')

    src = (ROOT / 'scripts/publish_grade5_final_four.py').read_text(encoding='utf-8')
    assert 'str(index + 1)' in src
    assert 'colors.red' in src
    assert 'fraction-add-sub-mixed' in src
    assert 'fraction-mul' not in src and 'fraction-div' not in src
    print('grade 5 final-four publisher tests: OK')


if __name__ == '__main__':
    main()
