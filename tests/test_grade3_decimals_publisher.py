import json
import re
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_grade3_decimals import (
    GRADE3_DECIMAL_SKILLS,
    PROBLEM_COUNT,
    SEEDS,
    UNIT_TITLE,
    generate_grade3_decimals,
    independent_decimal_answer,
    publish,
    validate_grade3_decimal_problem,
)
from scripts.worksheet_factory import normalized_hash, validate_catalog


def expected_ids():
    return {
        f'e3-{skill}-{variant:02d}'
        for skill in GRADE3_DECIMAL_SKILLS
        for variant, _seed in enumerate(SEEDS, start=1)
    }


def main():
    source_catalog = json.loads((ROOT / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
    own_ids = expected_ids()
    other_hashes = {entry['content_hash'] for entry in source_catalog if entry['id'] not in own_ids}
    generated_hashes = set()

    for skill in GRADE3_DECIMAL_SKILLS:
        for seed in SEEDS:
            first = generate_grade3_decimals(skill, seed)
            assert first == generate_grade3_decimals(skill, seed)
            assert len(first) == PROBLEM_COUNT
            assert len({(p['a_tenths'], p['b_tenths']) for p in first}) == PROBLEM_COUNT
            for problem in first:
                validate_grade3_decimal_problem(skill, problem)
                assert independent_decimal_answer(problem) == problem['answer_tenths']
            if skill == 'decimal-add-tenths':
                crossing = [p for p in first if p['a_tenths'] % 10 + p['b_tenths'] % 10 >= 10]
            else:
                crossing = [p for p in first if p['a_tenths'] % 10 < p['b_tenths'] % 10]
            assert len(crossing) == PROBLEM_COUNT // 2
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
        assert len(catalog) == len(GRADE3_DECIMAL_SKILLS) * len(SEEDS)
        assert {entry['id'] for entry in catalog} == own_ids
        assert all(entry['unit'] == UNIT_TITLE for entry in catalog)
        assert all(entry['grade'] == 3 and entry['subject'] == '算数' for entry in catalog)
        validate_catalog(catalog, root)
        for entry in catalog:
            pdf = root / entry['url']
            assert pdf.is_file() and pdf.stat().st_size > 1000
            assert len(re.findall(rb'/Type\s*/Page\b', pdf.read_bytes())) == 2
        before = (root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8')
        publish(root)
        assert before == (root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8')

    print('grade 3 decimal publisher tests: OK')


if __name__ == '__main__':
    main()
