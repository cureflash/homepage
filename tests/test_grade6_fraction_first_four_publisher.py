import json
import re
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_grade6_fraction_first_four import (
    PROBLEM_COUNT, SEEDS, SKILLS, generate, independent_answer, publish,
)
from scripts.worksheet_factory import normalized_hash, validate_catalog


def main():
    source = json.loads((ROOT / 'worksheets/catalog.json').read_text(encoding='utf-8'))
    own_ids = {f'e6-{skill}-{variant:02d}' for skill in SKILLS for variant, _ in enumerate(SEEDS, 1)}
    old_hashes = {entry['content_hash'] for entry in source if entry['id'] not in own_ids}
    all_hashes = set()

    for skill in SKILLS:
        variant_sets = []
        for seed in SEEDS:
            problems = generate(skill, seed)
            assert problems == generate(skill, seed)
            assert len(problems) == PROBLEM_COUNT
            seen = set()
            for problem in problems:
                answer = independent_answer(problem)
                assert answer > 0
                key = json.dumps(problem, ensure_ascii=False, sort_keys=True)
                assert key not in seen
                seen.add(key)
            content_hash = normalized_hash(problems)
            assert content_hash not in old_hashes
            assert content_hash not in all_hashes
            all_hashes.add(content_hash)
            variant_sets.append(frozenset(seen))
        assert len(set(variant_sets)) == len(SEEDS)

    with tempfile.TemporaryDirectory() as td:
        root = Path(td)
        (root / 'worksheets').mkdir()
        (root / 'worksheets/catalog.json').write_text('[]\n', encoding='utf-8')
        publish(root)
        catalog = json.loads((root / 'worksheets/catalog.json').read_text(encoding='utf-8'))
        assert {entry['id'] for entry in catalog} == own_ids
        assert len(catalog) == len(SKILLS) * len(SEEDS)
        assert all(entry['grade'] == 6 and entry['problem_count'] == PROBLEM_COUNT for entry in catalog)
        validate_catalog(catalog, root)
        for entry in catalog:
            pdf = root / entry['url']
            data = pdf.read_bytes()
            assert len(data) > 1000
            assert len(re.findall(rb'/Type\s*/Page\b', data)) == 2
        before = (root / 'worksheets/catalog.json').read_text(encoding='utf-8')
        publish(root)
        assert before == (root / 'worksheets/catalog.json').read_text(encoding='utf-8')

    source_text = (ROOT / 'scripts/publish_grade6_fraction_first_four.py').read_text(encoding='utf-8')
    assert 'str(index + 1)' in source_text
    assert 'colors.red' in source_text
    print('grade 6 fraction first-four publisher tests: OK')


if __name__ == '__main__':
    main()
