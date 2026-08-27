import json
import re
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_jh1_signed_four_operations import (
    PROBLEM_COUNT, SEEDS, SKILLS, generate, independent_answer, publish, validate_problem
)
from scripts.worksheet_factory import normalized_hash, validate_catalog


def main():
    source = json.loads((ROOT / 'worksheets/catalog.json').read_text(encoding='utf-8'))
    own = {f'jh1-{skill}-{variant:02d}' for skill in SKILLS for variant, _ in enumerate(SEEDS, 1)}
    old_hashes = {entry['content_hash'] for entry in source if entry['id'] not in own}
    all_hashes = set()

    for skill, (_, kind) in SKILLS.items():
        variant_sets = []
        for seed in SEEDS:
            problems = generate(skill, seed)
            assert problems == generate(skill, seed)
            assert len(problems) == PROBLEM_COUNT
            seen = set()
            signs = set()
            for problem in problems:
                validate_problem(problem)
                assert problem['type'] == kind
                assert independent_answer(problem) == problem['answer']
                if kind == 'div':
                    assert problem['b'] != 0
                    assert problem['a'] % problem['b'] == 0
                key = (problem['a'], problem['b'])
                assert key not in seen
                seen.add(key)
                signs.add((problem['a'] < 0, problem['b'] < 0))
            assert len(signs) >= 2
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
        assert {entry['id'] for entry in catalog} == own
        assert len(catalog) == len(SKILLS) * len(SEEDS)
        validate_catalog(catalog, root)
        for entry in catalog:
            assert entry['grade'] == 1 and entry['school_level'] == 'junior-high'
            assert entry['unit'] == '正の数・負の数'
            pdf = root / entry['url']
            data = pdf.read_bytes()
            assert len(data) > 1000
            assert len(re.findall(rb'/Type\s*/Page\b', data)) == 2
        before = (root / 'worksheets/catalog.json').read_text(encoding='utf-8')
        publish(root)
        assert before == (root / 'worksheets/catalog.json').read_text(encoding='utf-8')

    source_text = (ROOT / 'scripts/publish_jh1_signed_four_operations.py').read_text(encoding='utf-8')
    assert "c.drawString(x, y, str(index + 1))" in source_text
    assert 'colors.red' in source_text
    print('junior-high grade 1 signed four-operations publisher tests: OK')


if __name__ == '__main__':
    main()
