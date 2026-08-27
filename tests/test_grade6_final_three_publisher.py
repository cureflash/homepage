import json
import re
import sys
import tempfile
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.publish_grade6_final_three import SEEDS, SKILLS, generate, independent_answer, publish
from scripts.worksheet_factory import normalized_hash, validate_catalog


def main():
    source = json.loads((ROOT / 'worksheets/catalog.json').read_text(encoding='utf-8'))
    own_ids = {f'e6-{skill}-{variant:02d}' for skill in SKILLS for variant, _ in enumerate(SEEDS, 1)}
    old_hashes = {entry['content_hash'] for entry in source if entry['id'] not in own_ids}
    all_hashes = set()

    for skill, (_, _, _, count, _) in SKILLS.items():
        variant_sets = []
        for seed in SEEDS:
            problems = generate(skill, seed)
            assert problems == generate(skill, seed)
            assert len(problems) == count
            assert all(independent_answer(problem) == problem['answer'] for problem in problems)
            keys = [json.dumps(problem, ensure_ascii=False, sort_keys=True) for problem in problems]
            assert len(keys) == len(set(keys))
            content_hash = normalized_hash(problems)
            assert content_hash not in old_hashes
            assert content_hash not in all_hashes
            all_hashes.add(content_hash)
            variant_sets.append(frozenset(keys))

            if skill == 'unit-conversion-numeric':
                assert {problem['pattern'] for problem in problems} <= {
                    'm-to-cm', 'cm-to-m', 'km-to-m', 'm-to-km',
                    'kg-to-g', 'g-to-kg', 'L-to-mL', 'mL-to-L'
                }
            else:
                counts = Counter(problem['type'] for problem in problems)
                assert counts == Counter({'add': count // 4, 'sub': count // 4, 'mul': count // 4, 'div': count // 4})
                assert all(problem['type'] != 'div' or problem['a'] % problem['b'] == 0 for problem in problems)
        assert len(set(variant_sets)) == len(SEEDS)

    with tempfile.TemporaryDirectory() as td:
        root = Path(td)
        (root / 'worksheets').mkdir()
        (root / 'worksheets/catalog.json').write_text('[]\n', encoding='utf-8')
        publish(root)
        catalog = json.loads((root / 'worksheets/catalog.json').read_text(encoding='utf-8'))
        assert {entry['id'] for entry in catalog} == own_ids
        validate_catalog(catalog, root)
        assert len(catalog) == len(SKILLS) * len(SEEDS)
        for entry in catalog:
            pdf = root / entry['url']
            data = pdf.read_bytes()
            assert len(data) > 1000
            assert len(re.findall(rb'/Type\s*/Page\b', data)) == 2
            if entry['skill'] == 'five-minute-calculation-challenge':
                assert entry['problem_count'] == 40
            else:
                assert entry['problem_count'] == 20
        before = (root / 'worksheets/catalog.json').read_text(encoding='utf-8')
        publish(root)
        assert before == (root / 'worksheets/catalog.json').read_text(encoding='utf-8')

    source_text = (ROOT / 'scripts/publish_grade6_final_three.py').read_text(encoding='utf-8')
    assert 'str(index + 1)' in source_text
    assert 'colors.red' in source_text
    assert 'めやす：5分' in source_text
    print('grade 6 final-three publisher tests: OK')


if __name__ == '__main__':
    main()
