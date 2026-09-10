import json,re,sys,tempfile
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1];sys.path.insert(0,str(ROOT))
from scripts.publish_jh3_radical_multiply_divide import PROBLEM_COUNT,SEEDS,gen,independent_answer,publish,question_text,validate_problem
from scripts.worksheet_factory import normalized_hash,validate_catalog

def main():
    src=json.loads((ROOT/'worksheets/catalog.json').read_text(encoding='utf-8'))
    own={f'jh3-radical-multiply-divide-{v:02d}' for v,_ in enumerate(SEEDS,1)}
    old={e['content_hash'] for e in src if e['id'] not in own}
    hashes=set(); variant_sets=[]
    for seed in SEEDS:
        ps=gen(seed)
        assert ps==gen(seed)
        assert len(ps)==PROBLEM_COUNT
        assert sum(p['type']=='radical-multiply' for p in ps)==10
        assert sum(p['type']=='radical-divide' for p in ps)==10
        displayed=set()
        for p in ps:
            validate_problem(p)
            assert tuple(independent_answer(p))==tuple(p['answer'])
            q=question_text(p); assert q not in displayed; displayed.add(q)
            if p['type']=='radical-divide': assert p['a']<=200
            else: assert p['a']<=98 and p['b']<=98
        h=normalized_hash(ps); assert h not in old and h not in hashes; hashes.add(h)
        variant_sets.append(frozenset(displayed))
    assert len(set(variant_sets))==len(SEEDS)
    with tempfile.TemporaryDirectory() as td:
        root=Path(td); (root/'worksheets').mkdir()
        (root/'worksheets/catalog.json').write_text('[]\n',encoding='utf-8')
        publish(root)
        cat=json.loads((root/'worksheets/catalog.json').read_text(encoding='utf-8'))
        assert len(cat)==3; validate_catalog(cat,root)
        for e in cat:
            assert e['unit']=='平方根'
            assert e['problem_count']==20
            data=(root/e['url']).read_bytes()
            assert len(data)>1000
            assert len(re.findall(rb'/Type\s*/Page\b',data))==2
        before=(root/'worksheets/catalog.json').read_text(encoding='utf-8')
        publish(root)
        assert before==(root/'worksheets/catalog.json').read_text(encoding='utf-8')
    print('jh3 radical multiply/divide publisher tests: OK')
if __name__=='__main__': main()
