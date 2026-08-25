import json
import re
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_grade3_multiplication import (
    GRADE3_MULTIPLICATION_SKILLS,
    PROBLEM_COUNT,
    SEEDS,
    UNIT_TITLE,
    generate_grade3,
    independent_answer,
    publish,
    validate_grade3_problem,
)
from scripts.worksheet_factory import normalized_hash, validate_catalog


def expected_ids():
    return {
        f'e3-{skill}-{variant:02d}'
        for skill in GRADE3_MULTIPLICATION_SKILLS
        for variant, _seed in enumerate(SEEDS, start=1)
    }


def main():
    source_catalog = json.loads((ROOT / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
    own_ids = expected_ids()
    other_hashes = {entry['content_hash'] for entry in source_catalog if entry['id'] not in own_ids}
    generated_hashes = set()

    for skill in GRADE3_MULTIPLICATION_SKILLS:
        for seed in SEEDS:
            first = generate_grade3(skill, seed)
            second = generate_grade3(skill, seed)
            assert first == second
            assert len(first) == PROBLEM_COUNT
            assert len({(p['a'], p['b']) for p in first}) == PROBLEM_COUNT
            for problem in first:
                validate_grade3_problem(skill, problem)
                assert independent_answer(problem) == problem['answer']
            h = normalized_hash(first)
            assert h not in generated_hashes
            assert h not in other_hashes
            generated_hashes.add(h)

    with tempfile.TemporaryDirectory() as td:
        root = Path(td)
        (root / 'worksheets').mkdir(parents=True)
        (root / 'worksheets' / 'catalog.json').write_text('[]\n', encoding='utf-8')
        publish(root)
        catalog = json.loads((root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
        assert len(catalog) == len(GRADE3_MULTIPLICATION_SKILLS) * len(SEEDS)
        assert {entry['id'] for entry in catalog} == own_ids
        assert {entry['skill'] for entry in catalog} == set(GRADE3_MULTIPLICATION_SKILLS)
        assert all(entry['grade'] == 3 and entry['subject'] == '算数' for entry in catalog)
        assert all(entry['unit'] == UNIT_TITLE for entry in catalog)
        validate_catalog(catalog, root)
        for entry in catalog:
            pdf = root / entry['url']
            assert pdf.is_file() and pdf.stat().st_size > 1000
            assert len(re.findall(rb'/Type\s*/Page\b', pdf.read_bytes())) == 2
        before = (root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8')
        publish(root)
        after = (root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8')
        assert before == after

    print('grade 3 multiplication publisher tests: OK')


if __name__ == '__main__':
    main()
