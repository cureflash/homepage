import json
import re
import sys
import tempfile
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_jh1_substitution_linear_equations import (
    PROBLEM_COUNT, SEEDS, SKILLS, generate, independent_answer, publish, validate_problem,
)
from scripts.worksheet_factory import normalized_hash, validate_catalog


def main():
    source = json.loads((ROOT / 'worksheets/catalog.json').read_text(encoding='utf-8'))
    own = {f'jh1-{skill}-{variant:02d}' for skill in SKILLS for variant, _ in enumerate(SEEDS, 1)}
    old_hashes = {entry['content_hash'] for entry in source if entry['id'] not in own}
    hashes = set()

    for skill in SKILLS:
        variant_sets = []
        for seed in SEEDS:
            problems = generate(skill, seed)
            assert problems == generate(skill, seed)
            assert len(problems) == PROBLEM_COUNT
            seen = set()
            for problem in problems:
                validate_problem(skill, problem)
                assert independent_answer(problem) == problem['answer']
                key = json.dumps(problem, ensure_ascii=False, sort_keys=True)
                assert key not in seen
                seen.add(key)
            content_hash = normalized_hash(problems)
            assert content_hash not in hashes
            assert content_hash not in old_hashes
            hashes.add(content_hash)
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
        assert all(entry['grade'] == 1 and entry['school_level'] == 'junior-high' for entry in catalog)
        assert all(entry['answer_type'] == 'numeric' for entry in catalog)
        validate_catalog(catalog, root)
        for entry in catalog:
            data = (root / entry['url']).read_bytes()
            assert len(data) > 1000
            assert len(re.findall(rb'/Type\s*/Page\b', data)) == 2
        before = (root / 'worksheets/catalog.json').read_text(encoding='utf-8')
        publish(root)
        assert before == (root / 'worksheets/catalog.json').read_text(encoding='utf-8')

    src = (ROOT / 'scripts/publish_jh1_substitution_linear_equations.py').read_text(encoding='utf-8')
    assert 'str(index + 1)' in src
    assert 'colors.red' in src
    print('junior-high grade 1 substitution/equation publisher tests: OK')


if __name__ == '__main__':
    main()
