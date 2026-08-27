import json,random,sys
from fractions import Fraction
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
try:
 from scripts.worksheet_factory import FONT,normalized_hash,validate_catalog
except ModuleNotFoundError:
 from worksheet_factory import FONT,normalized_hash,validate_catalog
SEEDS=(14010,14111,14212); PROBLEM_COUNT=20; SKILL='simultaneous-equations-fractions'; TITLE='分数を含む連立方程式'
def ft(v):
 v=Fraction(v); return str(v.numerator) if v.denominator==1 else f'{v.numerator}/{v.denominator}'
def solve(a,b,c,d,e,f):
 det=a*e-b*d; assert det; return (c*e-b*f)/det,(a*f-c*d)/det
def ans(p):
 vals=[Fraction(p[k+'n'],p[k+'d']) for k in 'abcdef']; x,y=solve(*vals); return f'x={ft(x)}, y={ft(y)}'
def frac(r):
 d=r.choice((2,3,4,5)); n=r.choice([i for i in range(-6,7) if i and i%d]); return Fraction(n,d)
def gen(seed):
 r=random.Random(seed); out=[]; seen=set()
 while len(out)<PROBLEM_COUNT:
  x,y=r.randint(-6,6),r.randint(-6,6); a,b,d,e=frac(r),frac(r),frac(r),frac(r)
  if a*e-b*d==0: continue
  c=a*x+b*y; f=d*x+e*y; p={'type':SKILL}
  for k,v in zip('abcdef',(a,b,c,d,e,f)): p[k+'n']=v.numerator; p[k+'d']=v.denominator
  p['answer']=ans(p); key=json.dumps(p,sort_keys=True)
  if key in seen: continue
  seen.add(key); out.append(p)
 return out
def text(p):
 v=[Fraction(p[k+'n'],p[k+'d']) for k in 'abcdef']; return f'{ft(v[0])}x + {ft(v[1])}y = {ft(v[2])} / {ft(v[3])}x + {ft(v[4])}y = {ft(v[5])}'
def pdf(path,ps):
 c=canvas.Canvas(str(path),pagesize=A4); _,h=A4
 for am in (False,True):
  c.setFillColor(colors.black); c.setFont(FONT,18); c.drawString(45,h-55,TITLE); c.setFont(FONT,10); c.drawRightString(A4[0]-45,h-52,'解答' if am else '問題'); c.drawString(45,h-78,'名前：____________________________')
  for i,p in enumerate(ps):
   x=45+(i//10)*275; y=h-120-(i%10)*63; c.setFillColor(colors.black); c.setFont(FONT,7.2); c.drawString(x,y,str(i+1)); c.drawString(x+24,y,text(p))
   if am: c.setFillColor(colors.red); c.setFont(FONT,9); c.drawString(x+24,y-19,f'答え：{ans(p)}')
  if not am: c.showPage()
 c.save()
def publish(root):
 root=Path(root); cp=root/'worksheets/catalog.json'; cat=json.loads(cp.read_text(encoding='utf-8')); ids={e['id'] for e in cat}; out=root/'materials/worksheets/junior-high/grade-02'; out.mkdir(parents=True,exist_ok=True)
 for v,seed in enumerate(SEEDS,1):
  wid=f'jh2-{SKILL}-{v:02d}'
  if wid in ids: continue
  ps=gen(seed); h=normalized_hash(ps); assert all(e['content_hash']!=h for e in cat); fn=f'{wid}.pdf'; pdf(out/fn,ps)
  cat.append({'id':wid,'school_level':'junior-high','grade':2,'subject':'数学','unit':'連立方程式','skill':SKILL,'problem_count':20,'seed':seed,'variant':v,'title':f'{TITLE} {v:02d}','description':'分数係数を含む連立二元一次方程式を20問反復するプリントです。2ページ目は同じ配置に赤字で解答を加えています。','url':f'materials/worksheets/junior-high/grade-02/{fn}','content_hash':h,'difficulty':'basic','worksheet_series':'focused','worksheet_format':'simultaneous-equations-fractions','answer_type':'accepted-set'}); ids.add(wid)
 validate_catalog(cat,root); cp.write_text(json.dumps(cat,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
if __name__=='__main__': publish(sys.argv[1] if len(sys.argv)>1 else '.')