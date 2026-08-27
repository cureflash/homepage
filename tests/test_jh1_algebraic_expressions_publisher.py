import json
import re
import sys
import tempfile
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_jh1_algebraic_expressions import (
    PROBLEM_COUNT,
    SEEDS,
    SKILLS,
    generate,
    independent_answer,
    problem_text,
    publish,
    validate_problem,
)
from scripts.worksheet_factory import normalized_hash, validate_catalog


def main():
    source = json.loads((ROOT / 'worksheets/catalog.json').read_text(encoding='utf-8'))
    own = {
        f'jh1-{skill}-{variant:02d}'
        for skill in SKILLS
        for variant, _ in enumerate(SEEDS, 1)
    }
    old_hashes = {entry['content_hash'] for entry in source if entry['id'] not in own}
    all_hashes = set()

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
                assert problem_text(problem)
                key = json.dumps(problem, ensure_ascii=False, sort_keys=True)
                assert key not in seen
                seen.add(key)
            content_hash = normalized_hash(problems)
            assert content_hash not in old_hashes
            assert content_hash not in all_hashes
            all_hashes.add(content_hash)
            variant_sets.append(frozenset(seen))

            if skill == 'algebra-terms-coefficients':
                assert Counter(p['target'] for p in problems) == {'x': 10, 'y': 10}
            elif skill == 'combine-like-terms':
                assert all(p['answer'] != 0 for p in problems)
            elif skill == 'algebra-add-sub':
                assert Counter(p['op'] for p in problems) == {'add': 10, 'sub': 10}
                assert all(isinstance(p['answer'], str) and 'x' in p['answer'] for p in problems)
            elif skill == 'algebra-mul-div':
                assert Counter(p['type'] for p in problems) == {'monomial-mul': 10, 'monomial-div': 10}
                assert all(p['coef'] % p['divisor'] == 0 for p in problems if p['type'] == 'monomial-div')

        assert len(set(variant_sets)) == len(SEEDS)

    with tempfile.TemporaryDirectory() as td:
        root = Path(td)
        (root / 'worksheets').mkdir()
        (root / 'worksheets/catalog.json').write_text('[]\n', encoding='utf-8')
        publish(root)
        catalog = json.loads((root / 'worksheets/catalog.json').read_text(encoding='utf-8'))
        assert {entry['id'] for entry in catalog} == own
        assert len(catalog) == len(SKILLS) * len(SEEDS)
        assert all(entry['grade'] == 1 and entry['unit'] == '文字と式' for entry in catalog)
        validate_catalog(catalog, root)
        for entry in catalog:
            pdf = root / entry['url']
            data = pdf.read_bytes()
            assert len(data) > 1000
            assert len(re.findall(rb'/Type\s*/Page\b', data)) == 2
        before = (root / 'worksheets/catalog.json').read_text(encoding='utf-8')
        publish(root)
        assert before == (root / 'worksheets/catalog.json').read_text(encoding='utf-8')

    source_text = (ROOT / 'scripts/publish_jh1_algebraic_expressions.py').read_text(encoding='utf-8')
    assert 'str(index + 1)' in source_text
    assert 'colors.red' in source_text
    print('junior-high grade 1 algebraic-expression publisher tests: OK')


if __name__ == '__main__':
    main()
