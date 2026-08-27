import json
import re
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_jh2_expression_equation_basics import (
    PROBLEM_COUNT,
    SEEDS,
    SKILLS,
    generate,
    independent_answer,
    publish,
    validate_problem,
)
from scripts.worksheet_factory import normalized_hash, validate_catalog


def main():
    source = json.loads((ROOT / 'worksheets/catalog.json').read_text(encoding='utf-8'))
    own = {
        f'jh2-{skill}-{variant:02d}'
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
            keys = set()
            for problem in problems:
                validate_problem(skill, problem)
                assert independent_answer(problem) == problem['answer']
                key = json.dumps(problem, ensure_ascii=False, sort_keys=True)
                assert key not in keys
                keys.add(key)
                if skill == 'simultaneous-equations-elimination-basic':
                    x, y = problem['x_solution'], problem['y_solution']
                    assert problem['a'] * x + problem['b'] * y == problem['c']
                    assert problem['d'] * x + problem['e'] * y == problem['f']
                    assert abs(problem['a']) == abs(problem['d']) or abs(problem['b']) == abs(problem['e'])
                if skill == 'expression-four-operations':
                    assert ((problem['p_x'] + problem['q_x']) * problem['multiplier']) % problem['divisor'] == 0
                    assert ((problem['p_c'] + problem['q_c']) * problem['multiplier']) % problem['divisor'] == 0
            content_hash = normalized_hash(problems)
            assert content_hash not in all_hashes
            assert content_hash not in old_hashes
            all_hashes.add(content_hash)
            variant_sets.append(frozenset(keys))
        assert len(set(variant_sets)) == len(SEEDS)

    with tempfile.TemporaryDirectory() as td:
        root = Path(td)
        (root / 'worksheets').mkdir()
        (root / 'worksheets/catalog.json').write_text('[]\n', encoding='utf-8')
        publish(root)
        catalog = json.loads((root / 'worksheets/catalog.json').read_text(encoding='utf-8'))
        assert {entry['id'] for entry in catalog} == own
        assert len(catalog) == len(SKILLS) * len(SEEDS)
        assert all(entry['grade'] == 2 and entry['school_level'] == 'junior-high' for entry in catalog)
        assert all(entry['problem_count'] == PROBLEM_COUNT for entry in catalog)
        validate_catalog(catalog, root)
        for entry in catalog:
            pdf = root / entry['url']
            data = pdf.read_bytes()
            assert len(data) > 1000
            assert len(re.findall(rb'/Type\s*/Page\b', data)) == 2
        before = (root / 'worksheets/catalog.json').read_text(encoding='utf-8')
        publish(root)
        assert before == (root / 'worksheets/catalog.json').read_text(encoding='utf-8')

    source_text = (ROOT / 'scripts/publish_jh2_expression_equation_basics.py').read_text(encoding='utf-8')
    assert 'str(index + 1)' in source_text
    assert 'colors.red' in source_text
    print('junior-high grade 2 expression/equation basics publisher tests: OK')


if __name__ == '__main__':
    main()
