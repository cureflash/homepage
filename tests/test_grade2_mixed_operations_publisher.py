import json
import re
import tempfile
from collections import Counter
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_grade2_mixed_operations import (
    MIXED_SEEDS,
    PROBLEM_COUNT,
    SKILL,
    UNIT_TITLE,
    blocked_pairs,
    generate_mixed,
    independent_mixed_answer,
    publish,
    validate_mixed_problem,
)
from scripts.worksheet_factory import normalized_hash, validate_catalog


def expected_ids():
    return {
        f'e2-{SKILL}-{variant:02d}'
        for variant, _seed in enumerate(MIXED_SEEDS, start=1)
    }


def main():
    source_catalog = json.loads((ROOT / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
    own_ids = expected_ids()
    published_hashes = {entry['content_hash'] for entry in source_catalog if entry['id'] not in own_ids}
    blocked = blocked_pairs()
    generated_hashes = set()
    generated_problem_sets = []

    for seed in MIXED_SEEDS:
        first = generate_mixed(seed)
        second = generate_mixed(seed)
        assert first == second
        assert len(first) == PROBLEM_COUNT
        assert Counter(p['type'] for p in first) == {'add': 8, 'sub': 8, 'mul': 8}
        assert len({(p['type'], p['a'], p['b']) for p in first}) == PROBLEM_COUNT
        assert {p['a'] for p in first if p['type'] == 'mul'} == set(range(2, 10))

        additions = [p for p in first if p['type'] == 'add']
        subtractions = [p for p in first if p['type'] == 'sub']
        assert sum(p['a'] % 10 + p['b'] % 10 >= 10 for p in additions) == 4
        assert sum(p['a'] % 10 < p['b'] % 10 for p in subtractions) == 4
        assert not ({(p['a'], p['b']) for p in additions} & blocked['add'])
        assert not ({(p['a'], p['b']) for p in subtractions} & blocked['sub'])

        for problem in first:
            validate_mixed_problem(problem)
            assert independent_mixed_answer(problem) == problem['answer']

        h = normalized_hash(first)
        assert h not in generated_hashes
        assert h not in published_hashes
        generated_hashes.add(h)
        generated_problem_sets.append(tuple((p['type'], p['a'], p['b']) for p in first))

    assert len(set(generated_problem_sets)) == len(MIXED_SEEDS)

    present = [entry for entry in source_catalog if entry['id'] in own_ids]
    if present:
        assert {entry['content_hash'] for entry in present}.issubset(generated_hashes)

    with tempfile.TemporaryDirectory() as td:
        root = Path(td)
        (root / 'worksheets').mkdir(parents=True)
        (root / 'worksheets' / 'catalog.json').write_text('[]\n', encoding='utf-8')
        publish(root)
        catalog = json.loads((root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
        assert len(catalog) == len(MIXED_SEEDS)
        assert {entry['id'] for entry in catalog} == own_ids
        assert all(entry['grade'] == 2 and entry['subject'] == '算数' for entry in catalog)
        assert all(entry['unit'] == UNIT_TITLE for entry in catalog)
        assert all(entry['skill'] == SKILL for entry in catalog)
        assert all(entry['problem_count'] == PROBLEM_COUNT for entry in catalog)
        assert all(entry['worksheet_series'] == 'mixed' for entry in catalog)
        assert all(entry['worksheet_format'] == 'mixed-single-operation' for entry in catalog)
        validate_catalog(catalog, root)
        for entry in catalog:
            pdf = root / entry['url']
            assert pdf.is_file() and pdf.stat().st_size > 1000
            assert len(re.findall(rb'/Type\s*/Page\b', pdf.read_bytes())) == 2

        before = (root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8')
        publish(root)
        after = (root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8')
        assert before == after

    print('grade 2 mixed operations publisher tests: OK')


if __name__ == '__main__':
    main()
