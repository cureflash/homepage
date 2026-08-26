import json
import math
import re
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_grade4_same_denominator_fractions import (
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
            assert len({(p['denominator'], p['left_numerator'], p['right_numerator']) for p in problems}) == PROBLEM_COUNT
            for p in problems:
                validate_problem(p)
                answer_numerator, answer_denominator = independent_answer(p)
                assert answer_numerator == p['answer_numerator']
                assert answer_denominator == p['denominator']
                assert math.gcd(answer_numerator, answer_denominator) == 1
                assert p['op'] == spec['op']
            if spec['op'] == '+':
                over_one = sum(p['answer_numerator'] > p['denominator'] for p in problems)
                below_one = sum(p['answer_numerator'] < p['denominator'] for p in problems)
                assert over_one == PROBLEM_COUNT // 2
                assert below_one == PROBLEM_COUNT // 2
            else:
                assert all(0 < p['answer_numerator'] < p['denominator'] for p in problems)
            content_hash = normalized_hash(problems)
            assert content_hash not in hashes
            assert content_hash not in old_hashes
            hashes.add(content_hash)
            variant_sets.append((skill, frozenset((p['denominator'], p['left_numerator'], p['right_numerator']) for p in problems)))

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

    print('grade 4 same-denominator fraction publisher tests: OK')


if __name__ == '__main__':
    main()
