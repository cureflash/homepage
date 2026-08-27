import json,re,sys,tempfile
from fractions import Fraction
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]; sys.path.insert(0,str(ROOT))
from scripts import publish_jh2_fractional_simultaneous_equations as fracmod
from scripts import publish_jh2_linear_functions as linmod
from scripts.worksheet_factory import normalized_hash,validate_catalog
MODULES=(fracmod,linmod)
def main():
 source=json.loads((ROOT/'worksheets/catalog.json').read_text(encoding='utf-8'))
 own=set()
 for module in MODULES:
  skills=(module.SKILL,) if hasattr(module,'SKILL') else tuple(module.SKILLS)
  for skill in skills:
   for i,_ in enumerate(module.SEEDS,1): own.add(f'jh2-{skill}-{i:02d}')
 old={e['content_hash'] for e in source if e['id'] not in own}; hashes=set()
 for module in MODULES:
  skills=(module.SKILL,) if hasattr(module,'SKILL') else tuple(module.SKILLS)
  for skill in skills:
   for seed in module.SEEDS:
    ps=module.gen(seed) if hasattr(module,'SKILL') else module.gen(skill,seed)
    ps2=module.gen(seed) if hasattr(module,'SKILL') else module.gen(skill,seed)
    assert ps==ps2 and len(ps)==20
    seen=set()
    for p in ps:
     a=module.ans(p); assert a==p['answer']; k=json.dumps(p,ensure_ascii=False,sort_keys=True); assert k not in seen; seen.add(k)
     if p.get('type')=='linear-function-equation-from-two-points':
      assert p['x1'] != p['x2']
      m=Fraction(p['y2']-p['y1'],p['x2']-p['x1'])
      b=Fraction(p['y1'])-m*p['x1']
      assert linmod.eq(m,b)==p['answer']
      assert m*p['x1']+b==p['y1'] and m*p['x2']+b==p['y2']
    h=normalized_hash(ps); assert h not in hashes and h not in old; hashes.add(h)
 with tempfile.TemporaryDirectory() as td:
  root=Path(td); (root/'worksheets').mkdir(); (root/'worksheets/catalog.json').write_text('[]\n',encoding='utf-8')
  fracmod.publish(root); linmod.publish(root); cat=json.loads((root/'worksheets/catalog.json').read_text(encoding='utf-8')); assert {e['id'] for e in cat}==own; validate_catalog(cat,root)
  for e in cat:
   data=(root/e['url']).read_bytes(); assert len(data)>1000; assert len(re.findall(rb'/Type\s*/Page\b',data))==2
  before=(root/'worksheets/catalog.json').read_text(encoding='utf-8'); fracmod.publish(root); linmod.publish(root); assert before==(root/'worksheets/catalog.json').read_text(encoding='utf-8')
 for path in ('scripts/publish_jh2_fractional_simultaneous_equations.py','scripts/publish_jh2_linear_functions.py'):
  text=(ROOT/path).read_text(encoding='utf-8'); assert 'colors.red' in text and 'str(i+1)' in text
 print('JH2 fractional equations / linear functions publisher tests: OK')
if __name__=='__main__': main()