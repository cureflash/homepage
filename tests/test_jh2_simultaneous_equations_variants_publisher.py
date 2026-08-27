import json
import re
import sys
import tempfile
from fractions import Fraction
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_jh2_simultaneous_equations_variants import (
    PROBLEM_COUNT,
    SEEDS,
    SKILLS,
    generate,
    independent_answer,
    publish,
    solve_coefficients,
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
            seen = set()
            for problem in problems:
                validate_problem(skill, problem)
                assert independent_answer(problem) == problem['answer']
                key = json.dumps(problem, ensure_ascii=False, sort_keys=True)
                assert key not in seen
                seen.add(key)

                x_sol, y_sol = problem['x_solution'], problem['y_solution']
                if skill in {
                    'simultaneous-equations-substitution-basic',
                    'simultaneous-equations-align-coefficients',
                }:
                    assert problem['a'] * x_sol + problem['b'] * y_sol == problem['c']
                    assert problem['d'] * x_sol + problem['e'] * y_sol == problem['f']
                elif skill == 'simultaneous-equations-parentheses':
                    assert problem['k1'] * (problem['a'] * x_sol + problem['b'] * y_sol) == problem['c']
                    assert problem['k2'] * (problem['d'] * x_sol + problem['e'] * y_sol) == problem['f']
                elif skill == 'simultaneous-equations-decimals':
                    x, y = solve_coefficients(
                        Fraction(problem['a10'], 10), Fraction(problem['b10'], 10), Fraction(problem['c10'], 10),
                        Fraction(problem['d10'], 10), Fraction(problem['e10'], 10), Fraction(problem['f10'], 10),
                    )
                    assert x == x_sol and y == y_sol
                    assert all(v % 10 != 0 for v in (problem['a10'], problem['b10'], problem['d10'], problem['e10']))

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
        assert all(entry['grade'] == 2 and entry['unit'] == '連立方程式' for entry in catalog)
        assert all(entry['problem_count'] == PROBLEM_COUNT for entry in catalog)
        assert all(entry['answer_type'] == 'accepted-set' for entry in catalog)
        validate_catalog(catalog, root)
        for entry in catalog:
            pdf = root / entry['url']
            data = pdf.read_bytes()
            assert len(data) > 1000
            assert len(re.findall(rb'/Type\s*/Page\b', data)) == 2
        before = (root / 'worksheets/catalog.json').read_text(encoding='utf-8')
        publish(root)
        assert before == (root / 'worksheets/catalog.json').read_text(encoding='utf-8')

    src = (ROOT / 'scripts/publish_jh2_simultaneous_equations_variants.py').read_text(encoding='utf-8')
    assert 'str(index + 1)' in src
    assert 'colors.red' in src
    print('junior-high grade-2 simultaneous-equation variant publisher tests: OK')


if __name__ == '__main__':
    main()
