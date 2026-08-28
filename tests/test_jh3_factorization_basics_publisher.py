import json,re,sys,tempfile
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1];sys.path.insert(0,str(ROOT))
from scripts.publish_jh3_factorization_basics import SEEDS,SKILLS,PROBLEM_COUNT,gen,independent_answer,expand_factorization,publish,validate_problem
from scripts.worksheet_factory import normalized_hash,validate_catalog

def main():
    src=json.loads((ROOT/'worksheets/catalog.json').read_text(encoding='utf-8'))
    own={f'jh3-{s}-{v:02d}' for s in SKILLS for v,_ in enumerate(SEEDS,1)}
    old={e['content_hash'] for e in src if e['id'] not in own}; hashes=set()
    for skill in SKILLS:
        variants=[]
        for seed in SEEDS:
            ps=gen(skill,seed); assert ps==gen(skill,seed); assert len(ps)==PROBLEM_COUNT
            keys=set()
            for p in ps:
                validate_problem(p); assert tuple(independent_answer(p))==tuple(p['answer']); k=json.dumps(p,sort_keys=True); assert k not in keys; keys.add(k)
                if skill!='difference-of-squares-expansion': assert len(expand_factorization(p))==3
            h=normalized_hash(ps); assert h not in old and h not in hashes; hashes.add(h); variants.append(frozenset(keys))
        assert len(set(variants))==3
    with tempfile.TemporaryDirectory() as td:
        root=Path(td);(root/'worksheets').mkdir();(root/'worksheets/catalog.json').write_text('[]\n',encoding='utf-8');publish(root)
        cat=json.loads((root/'worksheets/catalog.json').read_text(encoding='utf-8'));assert len(cat)==12;validate_catalog(cat,root)
        for e in cat:
            data=(root/e['url']).read_bytes();assert len(data)>1000;assert len(re.findall(rb'/Type\s*/Page\b',data))==2
        before=(root/'worksheets/catalog.json').read_text(encoding='utf-8');publish(root);assert before==(root/'worksheets/catalog.json').read_text(encoding='utf-8')
    text=(ROOT/'scripts/publish_jh3_factorization_basics.py').read_text(encoding='utf-8');assert 'colors.red' in text and 'str(i+1)' in text
    print('jh3 factorization basics publisher tests: OK')
if __name__=='__main__':main()
