import json
import re
import sys
import tempfile
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_grade2_review import (
    DISTRIBUTION,
    PROBLEM_COUNT,
    SEEDS,
    SKILL,
    generate,
    independent_answer,
    publish,
    validate_problem,
)
from scripts.worksheet_factory import normalized_hash, validate_catalog


def expected_ids():
    return {f'e2-{SKILL}-{variant:02d}' for variant, _seed in enumerate(SEEDS, start=1)}


def main():
    source_catalog = json.loads((ROOT / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
    own_ids = expected_ids()
    other_hashes = {entry['content_hash'] for entry in source_catalog if entry['id'] not in own_ids}
    hashes = set()
    signatures = set()

    for seed in SEEDS:
        first = generate(seed)
        second = generate(seed)
        assert first == second
        assert len(first) == PROBLEM_COUNT
        assert Counter(problem['type'] for problem in first) == DISTRIBUTION
        assert Counter(problem.get('carry') for problem in first if problem['type'] == 'add') == {False: 2, True: 2}
        assert Counter(problem.get('borrow') for problem in first if problem['type'] == 'sub') == {False: 2, True: 2}
        assert len({problem['a'] for problem in first if problem['type'] == 'mul'}) == 6
        assert {problem['parts'] for problem in first if problem['type'] == 'fraction-read'} == {2, 3}
        assert {problem['parts'] for problem in first if problem['type'] == 'fraction-whole'} == {2, 3}
        for problem in first:
            validate_problem(problem)
            assert independent_answer(problem) == problem['answer']
        h = normalized_hash(first)
        assert h not in hashes and h not in other_hashes
        hashes.add(h)
        signatures.add(tuple(json.dumps(problem, sort_keys=True, ensure_ascii=False) for problem in first))
    assert len(signatures) == len(SEEDS)

    with tempfile.TemporaryDirectory() as td:
        root = Path(td)
        (root / 'worksheets').mkdir(parents=True)
        (root / 'worksheets' / 'catalog.json').write_text('[]\n', encoding='utf-8')
        publish(root)
        catalog = json.loads((root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
        assert len(catalog) == len(SEEDS)
        assert {entry['id'] for entry in catalog} == own_ids
        assert all(entry['grade'] == 2 and entry['subject'] == '算数' for entry in catalog)
        assert all(entry['unit'] == '小学2年 総復習' for entry in catalog)
        assert all(entry['worksheet_series'] == 'review' for entry in catalog)
        assert all(entry['worksheet_format'] == 'grade2-review-mixed' for entry in catalog)
        assert all(entry['problem_count'] == PROBLEM_COUNT for entry in catalog)
        validate_catalog(catalog, root)
        for entry in catalog:
            pdf = root / entry['url']
            assert pdf.is_file() and pdf.stat().st_size > 1000
            assert len(re.findall(rb'/Type\s*/Page\b', pdf.read_bytes())) == 2
        before = (root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8')
        publish(root)
        after = (root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8')
        assert before == after

    print('grade 2 review publisher tests: OK')


if __name__ == '__main__':
    main()
