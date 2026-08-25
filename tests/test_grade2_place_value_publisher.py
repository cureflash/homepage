import json
import re
import tempfile
from collections import Counter
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_grade2_place_value import (
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
    published_hashes = {entry['content_hash'] for entry in source_catalog if entry['id'] not in own_ids}
    generated_hashes = set()

    for skill in SKILLS:
        variants = []
        for seed in SEEDS:
            first = generate(skill, seed)
            second = generate(skill, seed)
            assert first == second
            assert len(first) == PROBLEM_COUNT
            for problem in first:
                validate_problem(skill, problem)
                assert independent_answer(problem) == problem['answer']

            if skill == 'place-digit-4digit':
                assert Counter(p['place'] for p in first) == {1000: 5, 100: 5, 10: 5, 1: 5}
                assert all(1000 <= p['number'] <= 9999 for p in first)
            elif skill == 'expanded-form-4digit':
                assert len({(p['thousands'], p['hundreds'], p['tens'], p['ones']) for p in first}) == PROBLEM_COUNT
                assert all(1000 <= p['answer'] <= 9999 for p in first)
            elif skill == 'compare-to-10000':
                assert Counter(p['answer'] for p in first) == {'<': 8, '>': 8, '=': 4}
                assert all(1000 <= p['a'] <= 10000 and 1000 <= p['b'] <= 10000 for p in first)

            h = normalized_hash(first)
            assert h not in generated_hashes
            assert h not in published_hashes
            generated_hashes.add(h)
            variants.append(tuple(sorted((k, str(v)) for p in first for k, v in p.items() if k != 'answer')))
        assert len(set(variants)) == len(SEEDS)

    with tempfile.TemporaryDirectory() as td:
        root = Path(td)
        (root / 'worksheets').mkdir(parents=True)
        (root / 'worksheets' / 'catalog.json').write_text('[]\n', encoding='utf-8')
        publish(root)
        catalog = json.loads((root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
        assert len(catalog) == len(SKILLS) * len(SEEDS)
        assert {entry['id'] for entry in catalog} == own_ids
        assert all(entry['grade'] == 2 and entry['subject'] == '算数' for entry in catalog)
        assert all(entry['unit'] == '1000・10000までの数' for entry in catalog)
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

    print('grade 2 place value publisher tests: OK')


if __name__ == '__main__':
    main()
