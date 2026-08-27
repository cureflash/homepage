import json,re,sys,tempfile
from collections import Counter
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]; sys.path.insert(0,str(ROOT))
from scripts.publish_grade4_rounding import SEEDS,PROBLEM_COUNT,SKILL,PLACES,generate,independent_answer,publish
from scripts.worksheet_factory import normalized_hash,validate_catalog

def main():
    source=json.loads((ROOT/'worksheets/catalog.json').read_text(encoding='utf-8')); own={f'e4-{SKILL}-{i:02d}' for i,_ in enumerate(SEEDS,1)}; old={e['content_hash'] for e in source if e['id'] not in own}; hashes=set()
    expected={p:4 for p,_ in PLACES}
    for seed in SEEDS:
        ps=generate(seed); assert ps==generate(seed); assert len(ps)==PROBLEM_COUNT; assert Counter(p['place'] for p in ps)==Counter(expected); seen=set()
        for p in ps:
            assert independent_answer(p)==p['answer']; assert p['number']%p['place']!=0; key=(p['number'],p['place']); assert key not in seen; seen.add(key)
        h=normalized_hash(ps); assert h not in hashes and h not in old; hashes.add(h)
    with tempfile.TemporaryDirectory() as td:
        root=Path(td); (root/'worksheets').mkdir(); (root/'worksheets/catalog.json').write_text('[]\n',encoding='utf-8'); publish(root); catalog=json.loads((root/'worksheets/catalog.json').read_text(encoding='utf-8')); assert {e['id'] for e in catalog}==own; validate_catalog(catalog,root)
        for e in catalog:
            data=(root/e['url']).read_bytes(); assert len(data)>1000; assert len(re.findall(rb'/Type\s*/Page\b',data))==2
        before=(root/'worksheets/catalog.json').read_text(encoding='utf-8'); publish(root); assert before==(root/'worksheets/catalog.json').read_text(encoding='utf-8')
    src=(ROOT/'scripts/publish_grade4_rounding.py').read_text(encoding='utf-8'); assert 'colors.red' in src and 'str(index+1)' in src
    print('grade 4 rounding publisher tests: OK')
if __name__=='__main__': main()
