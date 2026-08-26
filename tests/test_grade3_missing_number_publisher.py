import json
import re
import sys
import tempfile
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT))

from scripts.publish_grade3_missing_number import PROBLEM_COUNT,SEEDS,SKILLS,UNIT_TITLE,generate,independent_answer,publish,validate_problem
from scripts.worksheet_factory import normalized_hash,validate_catalog


def expected_ids():
    return {f'e3-{skill}-{variant:02d}' for skill in SKILLS for variant,_seed in enumerate(SEEDS,start=1)}


def main():
    source_catalog=json.loads((ROOT/'worksheets'/'catalog.json').read_text(encoding='utf-8'))
    own_ids=expected_ids(); published_hashes={e['content_hash'] for e in source_catalog if e['id'] not in own_ids}; hashes=set()
    for skill in SKILLS:
        variant_sets=[]
        for seed in SEEDS:
            a=generate(skill,seed); b=generate(skill,seed); assert a==b; assert len(a)==PROBLEM_COUNT
            assert len({json.dumps(p,sort_keys=True) for p in a})==PROBLEM_COUNT
            for p in a:
                validate_problem(skill,p); assert independent_answer(p)==p['answer']
            h=normalized_hash(a); assert h not in hashes and h not in published_hashes; hashes.add(h)
            variant_sets.append(frozenset(json.dumps(p,sort_keys=True) for p in a))
        assert len(set(variant_sets))==len(SEEDS)

    with tempfile.TemporaryDirectory() as td:
        root=Path(td); (root/'worksheets').mkdir(parents=True); (root/'worksheets'/'catalog.json').write_text('[]\n',encoding='utf-8')
        publish(root); catalog=json.loads((root/'worksheets'/'catalog.json').read_text(encoding='utf-8'))
        assert len(catalog)==len(SKILLS)*len(SEEDS); assert {e['id'] for e in catalog}==own_ids
        assert all(e['grade']==3 and e['subject']=='算数' and e['unit']==UNIT_TITLE for e in catalog)
        assert all(e['problem_count']==PROBLEM_COUNT and e['answer_type']=='numeric' for e in catalog)
        validate_catalog(catalog,root)
        for e in catalog:
            pdf=root/e['url']; assert pdf.is_file() and pdf.stat().st_size>1000; assert len(re.findall(rb'/Type\s*/Page\b',pdf.read_bytes()))==2
        before=(root/'worksheets'/'catalog.json').read_text(encoding='utf-8'); publish(root); after=(root/'worksheets'/'catalog.json').read_text(encoding='utf-8'); assert before==after
    print('grade 3 missing-number publisher tests: OK')

if __name__=='__main__': main()
