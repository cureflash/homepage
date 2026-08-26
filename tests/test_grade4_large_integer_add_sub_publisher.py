import json
import re
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_grade4_large_integer_add_sub import (
    PROBLEM_COUNT,
    SEEDS,
    SKILLS,
    UNIT,
    generate,
    has_borrow,
    has_carry,
    independent_answer,
    publish,
)
from scripts.worksheet_factory import normalized_hash, validate_catalog


def expected_ids():
    return {
        f'e4-{skill}-{variant:02d}'
        for skill in SKILLS
        for variant, _seed in enumerate(SEEDS, start=1)
    }


def main():
    source_catalog = json.loads((ROOT / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
    own_ids = expected_ids()
    other_hashes = {entry['content_hash'] for entry in source_catalog if entry['id'] not in own_ids}
    generated_hashes = set()

    for skill, spec in SKILLS.items():
        for seed in SEEDS:
            first = generate(skill, seed)
            second = generate(skill, seed)
            assert first == second
            assert len(first) == PROBLEM_COUNT
            assert len({(p['a'], p['b']) for p in first}) == PROBLEM_COUNT
            for problem in first:
                assert independent_answer(problem) == problem['answer']
                assert spec['lo'] <= problem['a'] <= spec['hi']
                assert spec['lo'] <= problem['b'] <= spec['hi']
                if problem['type'] == 'add':
                    assert has_carry(problem['a'], problem['b'])
                else:
                    assert problem['a'] > problem['b']
                    assert has_borrow(problem['a'], problem['b'])
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
        assert len(catalog) == len(SKILLS) * len(SEEDS)
        assert {entry['id'] for entry in catalog} == own_ids
        assert all(entry['grade'] == 4 and entry['subject'] == '算数' for entry in catalog)
        assert all(entry['unit'] == UNIT for entry in catalog)
        assert all(entry['problem_count'] == PROBLEM_COUNT for entry in catalog)
        assert all(entry['worksheet_format'] == 'horizontal' for entry in catalog)
        validate_catalog(catalog, root)
        for entry in catalog:
            pdf = root / entry['url']
            assert pdf.is_file() and pdf.stat().st_size > 1000
            assert len(re.findall(rb'/Type\s*/Page\b', pdf.read_bytes())) == 2
        before = (root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8')
        publish(root)
        after = (root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8')
        assert before == after

    print('grade 4 large integer add/sub publisher tests: OK')


if __name__ == '__main__':
    main()
