import json
import re
import sys
import tempfile
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]; sys.path.insert(0, str(ROOT))
from scripts.publish_grade4_decimal_division import SKILLS, SEEDS, PROBLEM_COUNT, UNIT_TITLE, generate, independent_answer, publish, validate_problem
from scripts.worksheet_factory import normalized_hash, validate_catalog

def main():
    source = json.loads((ROOT/'worksheets/catalog.json').read_text(encoding='utf-8'))
    own = {f'e4-{s}-{v:02d}' for s in SKILLS for v,_ in enumerate(SEEDS,1)}
    old_hashes = {e['content_hash'] for e in source if e['id'] not in own}; hashes=set(); variants=[]
    for seed in SEEDS:
        a=generate(seed); assert a==generate(seed); assert len(a)==PROBLEM_COUNT
        assert len({(p['dividend_units'],p['divisor']) for p in a})==PROBLEM_COUNT
        for p in a:
            validate_problem(p); assert independent_answer(p)==p['answer_units']; assert p['dividend_units']%p['divisor']==0
        h=normalized_hash(a); assert h not in hashes and h not in old_hashes; hashes.add(h)
        variants.append(frozenset((p['dividend_units'],p['divisor']) for p in a))
    assert len(set(variants))==len(SEEDS)
    with tempfile.TemporaryDirectory() as td:
        root=Path(td); (root/'worksheets').mkdir(); (root/'worksheets/catalog.json').write_text('[]\n',encoding='utf-8')
        publish(root); catalog=json.loads((root/'worksheets/catalog.json').read_text(encoding='utf-8'))
        assert {e['id'] for e in catalog}==own; assert all(e['unit']==UNIT_TITLE and e['grade']==4 for e in catalog); validate_catalog(catalog,root)
        for e in catalog:
            pdf=root/e['url']; assert pdf.stat().st_size>1000; assert len(re.findall(rb'/Type\s*/Page\b',pdf.read_bytes()))==2
        before=(root/'worksheets/catalog.json').read_text(encoding='utf-8'); publish(root); assert before==(root/'worksheets/catalog.json').read_text(encoding='utf-8')
    print('grade 4 decimal division publisher tests: OK')
if __name__=='__main__': main()
