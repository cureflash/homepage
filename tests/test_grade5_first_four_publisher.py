import json
import re
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_grade5_first_four import (
    PROBLEM_COUNT, SEEDS, SKILLS, answer_text, generate, independent_answer, publish, validate_problem
)
from scripts.worksheet_factory import normalized_hash, validate_catalog


def main():
    source = json.loads((ROOT / 'worksheets/catalog.json').read_text(encoding='utf-8'))
    own_ids = {f'e5-{skill}-{variant:02d}' for skill in SKILLS for variant, _ in enumerate(SEEDS, 1)}
    old_hashes = {e['content_hash'] for e in source if e['id'] not in own_ids}
    all_hashes = set()

    for skill in SKILLS:
        variant_sets = []
        for seed in SEEDS:
            problems = generate(skill, seed)
            assert problems == generate(skill, seed)
            assert len(problems) == PROBLEM_COUNT
            keys = set()
            for p in problems:
                validate_problem(skill, p)
                assert independent_answer(p) is not None
                assert answer_text(p)
                key = json.dumps(p, ensure_ascii=False, sort_keys=True)
                assert key not in keys
                keys.add(key)
            h = normalized_hash(problems)
            assert h not in old_hashes and h not in all_hashes
            all_hashes.add(h)
            variant_sets.append(frozenset(keys))
        assert len(set(variant_sets)) == len(SEEDS)

    with tempfile.TemporaryDirectory() as td:
        root = Path(td)
        (root / 'worksheets').mkdir()
        (root / 'worksheets/catalog.json').write_text('[]\n', encoding='utf-8')
        publish(root)
        catalog = json.loads((root / 'worksheets/catalog.json').read_text(encoding='utf-8'))
        assert len(catalog) == len(SKILLS) * len(SEEDS)
        assert {e['skill'] for e in catalog} == set(SKILLS)
        assert all(e['grade'] == 5 and e['problem_count'] == PROBLEM_COUNT for e in catalog)
        validate_catalog(catalog, root)
        for e in catalog:
            pdf = root / e['url']
            assert pdf.stat().st_size > 1000
            assert len(re.findall(rb'/Type\s*/Page\b', pdf.read_bytes())) == 2
        before = (root / 'worksheets/catalog.json').read_text(encoding='utf-8')
        publish(root)
        assert before == (root / 'worksheets/catalog.json').read_text(encoding='utf-8')

    src = (ROOT / 'scripts/publish_grade5_first_four.py').read_text(encoding='utf-8')
    assert 'str(index + 1)' in src
    assert 'colors.red' in src
    print('grade 5 first-four publisher tests: OK')


if __name__ == '__main__':
    main()
