import json
import re
import sys
import tempfile
from collections import Counter
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT))

from scripts.publish_grade3_review import DISTRIBUTION,PROBLEM_COUNT,SEEDS,SKILL,generate,independent_answer,publish,validate_problem
from scripts.worksheet_factory import normalized_hash,validate_catalog


def main():
    source_catalog=json.loads((ROOT/'worksheets'/'catalog.json').read_text(encoding='utf-8'))
    own_ids={f'e3-{SKILL}-{i:02d}' for i in range(1,len(SEEDS)+1)}
    published_hashes={e['content_hash'] for e in source_catalog if e['id'] not in own_ids}
    hashes=set(); variants=[]
    for seed in SEEDS:
        a=generate(seed); b=generate(seed); assert a==b and len(a)==PROBLEM_COUNT
        for p in a:
            validate_problem(p); assert independent_answer(p)==p['answer']
        kinds=Counter('decimal' if p['type'].startswith('decimal-') else 'fraction' if p['type'].startswith('fraction-') else 'large' if p['type'] in ('place-digit','scale') else 'missing' if p['type'].startswith('missing-') else p['type'] for p in a)
        assert kinds==DISTRIBUTION
        assert sum(p['type']=='div' and 'あまり' in str(p['answer']) for p in a)==2
        h=normalized_hash(a); assert h not in hashes and h not in published_hashes; hashes.add(h)
        variants.append(frozenset(json.dumps(p,sort_keys=True,ensure_ascii=False) for p in a))
    assert len(set(variants))==len(SEEDS)

    with tempfile.TemporaryDirectory() as td:
        root=Path(td); (root/'worksheets').mkdir(parents=True); (root/'worksheets'/'catalog.json').write_text('[]\n',encoding='utf-8')
        publish(root); catalog=json.loads((root/'worksheets'/'catalog.json').read_text(encoding='utf-8'))
        assert len(catalog)==3 and {e['id'] for e in catalog}==own_ids
        assert all(e['grade']==3 and e['subject']=='算数' and e['worksheet_series']=='review' for e in catalog)
        assert all(e['problem_count']==24 and e['answer_type']=='accepted-set' for e in catalog)
        validate_catalog(catalog,root)
        for e in catalog:
            pdf=root/e['url']; assert pdf.is_file() and pdf.stat().st_size>1000; assert len(re.findall(rb'/Type\s*/Page\b',pdf.read_bytes()))==2
        before=(root/'worksheets'/'catalog.json').read_text(encoding='utf-8'); publish(root); after=(root/'worksheets'/'catalog.json').read_text(encoding='utf-8'); assert before==after
    print('grade 3 review publisher tests: OK')

if __name__=='__main__': main()
