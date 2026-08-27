import json
import re
import sys
import tempfile
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_grade4_mixed_operations import (
    PATTERNS,
    PROBLEM_COUNT,
    SEEDS,
    SKILL,
    UNIT_TITLE,
    generate,
    independent_answer,
    problem_text,
    publish,
    validate_problem,
)
from scripts.worksheet_factory import normalized_hash, validate_catalog


def main():
    source = json.loads((ROOT / 'worksheets/catalog.json').read_text(encoding='utf-8'))
    own = {f'e4-{SKILL}-{variant:02d}' for variant, _ in enumerate(SEEDS, 1)}
    old_hashes = {entry['content_hash'] for entry in source if entry['id'] not in own}
    hashes = set()
    variant_sets = []

    for seed in SEEDS:
        problems = generate(seed)
        assert problems == generate(seed)
        assert len(problems) == PROBLEM_COUNT
        counts = Counter(problem['pattern'] for problem in problems)
        assert counts == Counter({pattern: 5 for pattern in PATTERNS})
        seen = set()
        for problem in problems:
            validate_problem(problem)
            assert independent_answer(problem) == problem['answer']
            assert 0 <= independent_answer(problem) <= 999
            text = problem_text(problem)
            for symbol in ('+', '−', '×', '÷'):
                assert symbol in text
            key = (
                problem['pattern'], problem['a'], problem['b'],
                problem['c'], problem['d'], problem['e'],
            )
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
        assert all(entry['unit'] == UNIT_TITLE and entry['grade'] == 4 for entry in catalog)
        assert all(entry['problem_count'] == PROBLEM_COUNT for entry in catalog)
        assert all(entry['answer_type'] == 'numeric' for entry in catalog)
        validate_catalog(catalog, root)
        for entry in catalog:
            pdf = root / entry['url']
            assert pdf.stat().st_size > 1000
            assert len(re.findall(rb'/Type\s*/Page\b', pdf.read_bytes())) == 2
        before = (root / 'worksheets/catalog.json').read_text(encoding='utf-8')
        publish(root)
        assert before == (root / 'worksheets/catalog.json').read_text(encoding='utf-8')

    source_text = (ROOT / 'scripts/publish_grade4_mixed_operations.py').read_text(encoding='utf-8')
    assert "c.drawString(x, y, str(index + 1))" in source_text
    assert "colors.red" in source_text
    print('grade 4 mixed-operations publisher tests: OK')


if __name__ == '__main__':
    main()
