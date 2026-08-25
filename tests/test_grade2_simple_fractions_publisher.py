import json
import re
import sys
import tempfile
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_grade2_simple_fractions import (
    PART_COUNTS,
    PROBLEM_COUNT,
    SEEDS,
    SKILLS,
    generate,
    independent_answer,
    publish,
    validate_problem,
)
from scripts.worksheet_factory import normalized_hash, validate_catalog


def expected_ids():
    return {
        f'e2-{skill}-{variant:02d}'
        for skill in SKILLS
        for variant, _seed in enumerate(SEEDS, start=1)
    }


def main():
    source_catalog = json.loads((ROOT / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
    own_ids = expected_ids()
    other_hashes = {entry['content_hash'] for entry in source_catalog if entry['id'] not in own_ids}
    generated_hashes = set()

    for skill in SKILLS:
        variant_signatures = set()
        for seed in SEEDS:
            first = generate(skill, seed)
            second = generate(skill, seed)
            assert first == second
            assert len(first) == PROBLEM_COUNT
            assert Counter(problem['parts'] for problem in first) == {2: 10, 3: 10}
            assert len({(problem['parts'], problem['total']) for problem in first}) == PROBLEM_COUNT
            assert {problem['parts'] for problem in first} == set(PART_COUNTS)
            for problem in first:
                validate_problem(skill, problem)
                assert independent_answer(problem) == problem['answer']
                assert problem['part_size'] * problem['parts'] == problem['total']
            if skill == 'simple-fraction-read':
                assert {problem['answer'] for problem in first} == {'1/2', '1/3'}
            else:
                assert {problem['answer'] for problem in first} == {2, 3}
            h = normalized_hash(first)
            assert h not in generated_hashes
            assert h not in other_hashes
            generated_hashes.add(h)
            variant_signatures.add(tuple((p['parts'], p['total']) for p in first))
        assert len(variant_signatures) == len(SEEDS)

    with tempfile.TemporaryDirectory() as td:
        root = Path(td)
        (root / 'worksheets').mkdir(parents=True)
        (root / 'worksheets' / 'catalog.json').write_text('[]\n', encoding='utf-8')
        publish(root)
        catalog = json.loads((root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
        assert len(catalog) == len(SKILLS) * len(SEEDS)
        assert {entry['id'] for entry in catalog} == own_ids
        assert all(entry['grade'] == 2 and entry['subject'] == '算数' for entry in catalog)
        assert all(entry['unit'] == '簡単な分数' for entry in catalog)
        assert {entry['worksheet_format'] for entry in catalog} == {
            'simple-fraction-read', 'simple-fraction-whole'
        }
        assert {entry['answer_type'] for entry in catalog} == {'numeric', 'accepted-set'}
        validate_catalog(catalog, root)
        for entry in catalog:
            pdf = root / entry['url']
            assert pdf.is_file() and pdf.stat().st_size > 1000
            assert len(re.findall(rb'/Type\s*/Page\b', pdf.read_bytes())) == 2
        before = (root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8')
        publish(root)
        after = (root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8')
        assert before == after

    print('grade 2 simple fraction publisher tests: OK')


if __name__ == '__main__':
    main()
