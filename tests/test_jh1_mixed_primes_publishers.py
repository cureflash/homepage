import json
import re
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts import publish_jh1_signed_mixed_powers as mixed
from scripts import publish_jh1_primes_factorization as primes
from scripts.worksheet_factory import normalized_hash, validate_catalog

MODULES = (mixed, primes)


def main():
    source = json.loads((ROOT/'worksheets/catalog.json').read_text(encoding='utf-8'))
    own_ids = {f'jh1-{skill}-{variant:02d}' for module in MODULES for skill in module.SKILLS for variant,_ in enumerate(module.SEEDS,1)}
    old_hashes = {e['content_hash'] for e in source if e['id'] not in own_ids}
    all_hashes = set()

    for module in MODULES:
        variant_sets = []
        for skill in module.SKILLS:
            for seed in module.SEEDS:
                problems = module.generate(skill, seed)
                assert problems == module.generate(skill, seed)
                assert len(problems) == module.PROBLEM_COUNT
                seen = set()
                for p in problems:
                    assert module.independent_answer(p) == p['answer']
                    key = json.dumps(p, ensure_ascii=False, sort_keys=True)
                    assert key not in seen
                    seen.add(key)
                h = normalized_hash(problems)
                assert h not in old_hashes and h not in all_hashes
                all_hashes.add(h)
                variant_sets.append(frozenset(seen))
        assert len(set(variant_sets)) == len(variant_sets)

    for seed in primes.SEEDS:
        checks = primes.generate('prime-identification', seed)
        assert sum(1 for p in checks if p['answer'] == '素数') == 10
        assert sum(1 for p in checks if p['answer'] == '素数ではない') == 10
        for p in primes.generate('prime-factorization', seed):
            fs = primes.factorize(p['number'])
            product = 1
            for f in fs:
                assert primes.is_prime(f)
                product *= f
            assert product == p['number']

    for seed in mixed.SEEDS:
        m = mixed.generate('signed-mixed-four-operations', seed)
        assert {p['type'] for p in m} == {'mixed-a','mixed-b'}
        q = mixed.generate('signed-parentheses-powers', seed)
        assert {p['type'] for p in q} == {'paren-square','square-paren','paren-cube','signed-square-mul'}

    with tempfile.TemporaryDirectory() as td:
        root = Path(td); (root/'worksheets').mkdir()
        (root/'worksheets/catalog.json').write_text('[]\n', encoding='utf-8')
        mixed.publish(root); primes.publish(root)
        catalog = json.loads((root/'worksheets/catalog.json').read_text(encoding='utf-8'))
        assert {e['id'] for e in catalog} == own_ids
        validate_catalog(catalog, root)
        for e in catalog:
            data = (root/e['url']).read_bytes()
            assert len(data) > 1000
            assert len(re.findall(rb'/Type\s*/Page\b', data)) == 2
        before = (root/'worksheets/catalog.json').read_text(encoding='utf-8')
        mixed.publish(root); primes.publish(root)
        assert before == (root/'worksheets/catalog.json').read_text(encoding='utf-8')

    for path in ('scripts/publish_jh1_signed_mixed_powers.py','scripts/publish_jh1_primes_factorization.py'):
        text = (ROOT/path).read_text(encoding='utf-8')
        assert 'str(index + 1)' in text
        assert 'colors.red' in text

    print('junior-high grade 1 mixed/prime publisher tests: OK')

if __name__ == '__main__':
    main()
