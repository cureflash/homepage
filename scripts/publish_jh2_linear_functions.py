import json, random, sys
from fractions import Fraction
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
try:
 from scripts.worksheet_factory import FONT, normalized_hash, validate_catalog
except ModuleNotFoundError:
 from worksheet_factory import FONT, normalized_hash, validate_catalog
SEEDS=(14313,14414,14515); PROBLEM_COUNT=20
SKILLS={
 'linear-function-substitution':('一次関数 xからyを求める代入','linear-function-substitution'),
 'linear-function-rate-from-two-points':('2点から変化の割合','linear-function-rate'),
 'linear-function-from-slope-intercept':('傾きと切片から式を作る','linear-function-equation'),
}
def ft(v):
 v=Fraction(v); return str(v.numerator) if v.denominator==1 else f'{v.numerator}/{v.denominator}'
def eq(m,b):
 m,b=Fraction(m),Fraction(b); left='x' if m==1 else ('-x' if m==-1 else f'{ft(m)}x')
 return f'y={left}' if b==0 else f'y={left}{"+" if b>0 else "−"}{ft(abs(b))}'
def ans(p):
 if p['type']=='linear-function-substitution': return ft(Fraction(p['mn'],p['md'])*p['x']+p['b'])
 if p['type']=='linear-function-rate-from-two-points': return ft(Fraction(p['y2']-p['y1'],p['x2']-p['x1']))
 return eq(Fraction(p['mn'],p['md']),p['b'])
def gen(skill,seed):
 r=random.Random(seed+1009*sum(map(ord,skill))); out=[]; seen=set()
 while len(out)<PROBLEM_COUNT:
  if skill=='linear-function-substitution':
   md=r.choice((1,2,3,4)); mn=r.choice([i for i in range(-6,7) if i]); m=Fraction(mn,md); p={'type':skill,'mn':m.numerator,'md':m.denominator,'b':r.randint(-9,9),'x':r.randint(-8,8)}
  elif skill=='linear-function-rate-from-two-points':
   dx=r.choice((2,3,4,6)); mn=r.choice([i for i in range(-6,7) if i]); md=r.choice((1,2,3)); m=Fraction(mn,md)
   if (m*dx).denominator!=1: continue
   x1=r.randint(-8,4); y1=r.randint(-9,9); p={'type':skill,'x1':x1,'y1':y1,'x2':x1+dx,'y2':y1+int(m*dx)}
  else:
   md=r.choice((1,2,3,4)); mn=r.choice([i for i in range(-6,7) if i]); m=Fraction(mn,md); p={'type':skill,'mn':m.numerator,'md':m.denominator,'b':r.randint(-9,9)}
  p['answer']=ans(p); k=json.dumps(p,sort_keys=True)
  if k in seen: continue
  seen.add(k); out.append(p)
 return out
def text(p):
 if p['type']=='linear-function-substitution': return f'{eq(Fraction(p["mn"],p["md"]),p["b"])}, x={p["x"]} のとき y=□'
 if p['type']=='linear-function-rate-from-two-points': return f'({p["x1"]},{p["y1"]}), ({p["x2"]},{p["y2"]}) の変化の割合=□'
 return f'傾き {ft(Fraction(p["mn"],p["md"]))}, 切片 {p["b"]} → 式：□'
def pdf(path,title,ps):
 c=canvas.Canvas(str(path),pagesize=A4); _,h=A4
 for am in (False,True):
  c.setFillColor(colors.black); c.setFont(FONT,18); c.drawString(45,h-55,title); c.setFont(FONT,10); c.drawRightString(A4[0]-45,h-52,'解答' if am else '問題'); c.drawString(45,h-78,'名前：____________________________')
  for i,p in enumerate(ps):
   x=45+(i//10)*275; y=h-120-(i%10)*63; c.setFillColor(colors.black); c.setFont(FONT,8.5); c.drawString(x,y,str(i+1)); c.drawString(x+24,y,text(p))
   if am: c.setFillColor(colors.red); c.setFont(FONT,9); c.drawString(x+24,y-19,f'答え：{ans(p)}')
  if not am: c.showPage()
 c.save()
def publish(root):
 root=Path(root); cp=root/'worksheets/catalog.json'; cat=json.loads(cp.read_text(encoding='utf-8')); ids={e['id'] for e in cat}; out=root/'materials/worksheets/junior-high/grade-02'; out.mkdir(parents=True,exist_ok=True)
 for skill,(title,fmt) in SKILLS.items():
  for v,seed in enumerate(SEEDS,1):
   wid=f'jh2-{skill}-{v:02d}'
   if wid in ids: continue
   ps=gen(skill,seed); h=normalized_hash(ps); assert all(e['content_hash']!=h for e in cat); fn=f'{wid}.pdf'; pdf(out/fn,title,ps)
   cat.append({'id':wid,'school_level':'junior-high','grade':2,'subject':'数学','unit':'一次関数','skill':skill,'problem_count':20,'seed':seed,'variant':v,'title':f'{title} {v:02d}','description':f'中学2年の「{title}」を20問反復するプリントです。2ページ目は同じ配置に赤字で解答を加えています。','url':f'materials/worksheets/junior-high/grade-02/{fn}','content_hash':h,'difficulty':'basic','worksheet_series':'focused','worksheet_format':fmt,'answer_type':'accepted-set'}); ids.add(wid)
 validate_catalog(cat,root); cp.write_text(json.dumps(cat,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
if __name__=='__main__': publish(sys.argv[1] if len(sys.argv)>1 else '.')