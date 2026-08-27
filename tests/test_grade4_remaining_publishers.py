import json
import re
import sys
import tempfile
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT))

from scripts import publish_grade4_large_number_place_value as place
from scripts import publish_grade4_rounding as rounding
from scripts import publish_grade4_review as review
from scripts.worksheet_factory import normalized_hash, validate_catalog

MODULES=(place,rounding,review)


def main():
    source=json.loads((ROOT/'worksheets/catalog.json').read_text(encoding='utf-8'))
    old_hashes={e['content_hash'] for e in source}
    all_hashes=set()
    for module in MODULES:
        variant_sets=[]
        for seed in module.SEEDS:
            problems=module.generate(seed)
            assert problems==module.generate(seed)
            assert len(problems)==module.PROBLEM_COUNT
            for problem in problems:
                assert module.independent_answer(problem)==problem['answer']
            h=normalized_hash(problems)
            assert h not in old_hashes and h not in all_hashes
            all_hashes.add(h)
            variant_sets.append(json.dumps(problems,sort_keys=True,ensure_ascii=False))
        assert len(set(variant_sets))==len(module.SEEDS)

    for seed in place.SEEDS:
        problems=place.generate(seed)
        assert sum(p['type']=='place-digit' for p in problems)==12
        assert sum(p['type']=='compose-four-groups' for p in problems)==8
        assert any(p.get('place')==10**12 for p in problems if p['type']=='place-digit')
    for seed in rounding.SEEDS:
        problems=rounding.generate(seed)
        assert {p['place'] for p in problems}=={10,100,1000,10000,100000}
        assert all(rounding.independent_answer(p)%p['place']==0 for p in problems)
    for seed in review.SEEDS:
        problems=review.generate(seed)
        counts={kind:sum(p['type']==kind for p in problems) for kind in review.TYPES}
        assert counts=={kind:4 for kind in review.TYPES}

    with tempfile.TemporaryDirectory() as td:
        root=Path(td); (root/'worksheets').mkdir(); (root/'worksheets/catalog.json').write_text('[]\n',encoding='utf-8')
        for module in MODULES: module.publish(root)
        catalog=json.loads((root/'worksheets/catalog.json').read_text(encoding='utf-8'))
        assert len(catalog)==9
        assert {e['skill'] for e in catalog}=={place.SKILL,rounding.SKILL,review.SKILL}
        assert all(e['grade']==4 and e['problem_count']==20 for e in catalog)
        validate_catalog(catalog,root)
        for entry in catalog:
            pdf=root/entry['url']; assert pdf.stat().st_size>1000; assert len(re.findall(rb'/Type\s*/Page\b',pdf.read_bytes()))==2
        before=(root/'worksheets/catalog.json').read_text(encoding='utf-8')
        for module in MODULES: module.publish(root)
        assert before==(root/'worksheets/catalog.json').read_text(encoding='utf-8')

    for path in ('scripts/publish_grade4_large_number_place_value.py','scripts/publish_grade4_rounding.py','scripts/publish_grade4_review.py'):
        text=(ROOT/path).read_text(encoding='utf-8'); assert 'str(index + 1)' in text or 'str(i+1)' in text; assert 'colors.red' in text
    print('grade 4 remaining publisher tests: OK')

if __name__=='__main__': main()
