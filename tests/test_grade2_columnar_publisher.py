import json
import re
import tempfile
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_grade2_columnar import (
    COLUMNAR_SEEDS,
    GRADE2_COLUMNAR_SKILLS,
    PROBLEM_COUNT,
    UNIT_TITLE,
    blocked_horizontal_pairs,
    generate_columnar,
    independent_columnar_answer,
    publish,
    validate_columnar_problem,
)
from scripts.worksheet_factory import normalized_hash, validate_catalog


def expected_ids():
    return {
        f'e2-{skill}-{variant:02d}'
        for skill in GRADE2_COLUMNAR_SKILLS
        for variant, _seed in enumerate(COLUMNAR_SEEDS, start=1)
    }


def main():
    source_catalog = json.loads((ROOT / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
    own_ids = expected_ids()
    published_hashes = {
        entry['content_hash'] for entry in source_catalog if entry['id'] not in own_ids
    }
    all_hashes = set()

    for skill, spec in GRADE2_COLUMNAR_SKILLS.items():
        blocked = blocked_horizontal_pairs(spec['base_skill'])
        for seed in COLUMNAR_SEEDS:
            first = generate_columnar(skill, seed)
            second = generate_columnar(skill, seed)
            assert first == second
            assert len(first) == PROBLEM_COUNT
            assert len({(p['a'], p['b']) for p in first}) == PROBLEM_COUNT
            assert not ({(p['a'], p['b']) for p in first} & blocked)
            for problem in first:
                validate_columnar_problem(skill, problem)
                assert independent_columnar_answer(problem) == problem['answer']
            h = normalized_hash(first)
            assert h not in all_hashes, f'duplicate generated content for {skill} seed={seed}'
            assert h not in published_hashes, f'duplicate of other published content for {skill} seed={seed}'
            all_hashes.add(h)

    present = [entry for entry in source_catalog if entry['id'] in own_ids]
    if present:
        assert {entry['content_hash'] for entry in present}.issubset(all_hashes)

    with tempfile.TemporaryDirectory() as td:
        root = Path(td)
        (root / 'worksheets').mkdir(parents=True)
        (root / 'worksheets' / 'catalog.json').write_text('[]\n', encoding='utf-8')
        publish(root)
        catalog = json.loads((root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
        assert len(catalog) == len(GRADE2_COLUMNAR_SKILLS) * len(COLUMNAR_SEEDS)
        assert {entry['id'] for entry in catalog} == own_ids
        assert {entry['skill'] for entry in catalog} == set(GRADE2_COLUMNAR_SKILLS)
        assert {entry['seed'] for entry in catalog} == set(COLUMNAR_SEEDS)
        assert all(entry['problem_count'] == PROBLEM_COUNT for entry in catalog)
        assert all(entry['grade'] == 2 and entry['subject'] == '算数' for entry in catalog)
        assert all(entry['unit'] == UNIT_TITLE for entry in catalog)
        assert all(entry['worksheet_format'] == 'columnar' for entry in catalog)
        validate_catalog(catalog, root)
        for entry in catalog:
            pdf = root / entry['url']
            assert pdf.is_file() and pdf.stat().st_size > 1000
            data = pdf.read_bytes()
            assert len(re.findall(rb'/Type\s*/Page\b', data)) == 2
        before = (root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8')
        publish(root)
        after = (root / 'worksheets' / 'catalog.json').read_text(encoding='utf-8')
        assert before == after

    print('grade 2 columnar publisher tests: OK')


if __name__ == '__main__':
    main()
