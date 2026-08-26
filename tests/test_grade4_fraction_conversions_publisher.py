import json
import re
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_grade4_fraction_conversions import (
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


def main():
    source = json.loads((ROOT / 'worksheets/catalog.json').read_text(encoding='utf-8'))
    own = {f'e4-{skill}-{variant:02d}' for skill in SKILLS for variant, _ in enumerate(SEEDS, 1)}
    old_hashes = {entry['content_hash'] for entry in source if entry['id'] not in own}
    hashes = set()
    variant_sets = []

    for skill, spec in SKILLS.items():
        for seed in SEEDS:
            problems = generate(skill, seed)
            assert problems == generate(skill, seed)
            assert len(problems) == PROBLEM_COUNT
            seen = set()
            for problem in problems:
                validate_problem(problem)
                assert independent_answer(problem) == problem['answer']
                if problem['direction'] == 'improper-to-mixed':
                    key = (problem['denominator'], problem['improper_numerator'])
                    answer = independent_answer(problem)
                    assert answer['whole'] * answer['denominator'] + answer['numerator'] == problem['improper_numerator']
                else:
                    key = (problem['denominator'], problem['whole'], problem['proper_numerator'])
                    answer = independent_answer(problem)
                    assert answer['numerator'] == problem['whole'] * problem['denominator'] + problem['proper_numerator']
                assert key not in seen
                seen.add(key)
                assert problem['direction'] == spec['direction']
            content_hash = normalized_hash(problems)
            assert content_hash not in hashes
            assert content_hash not in old_hashes
            hashes.add(content_hash)
            variant_sets.append((skill, frozenset(seen)))

    for skill in SKILLS:
        sets = [values for name, values in variant_sets if name == skill]
        assert len(set(sets)) == len(SEEDS)

    with tempfile.TemporaryDirectory() as td:
        root = Path(td)
        (root / 'worksheets').mkdir()
        (root / 'worksheets/catalog.json').write_text('[]\n', encoding='utf-8')
        publish(root)
        catalog = json.loads((root / 'worksheets/catalog.json').read_text(encoding='utf-8'))
        assert {entry['id'] for entry in catalog} == own
        assert all(entry['unit'] == UNIT_TITLE and entry['grade'] == 4 for entry in catalog)
        assert all(entry['answer_type'] == 'accepted-set' for entry in catalog)
        validate_catalog(catalog, root)
        for entry in catalog:
            pdf = root / entry['url']
            assert pdf.stat().st_size > 1000
            assert len(re.findall(rb'/Type\s*/Page\b', pdf.read_bytes())) == 2
        before = (root / 'worksheets/catalog.json').read_text(encoding='utf-8')
        publish(root)
        assert before == (root / 'worksheets/catalog.json').read_text(encoding='utf-8')

    print('grade 4 fraction conversion publisher tests: OK')


if __name__ == '__main__':
    main()
