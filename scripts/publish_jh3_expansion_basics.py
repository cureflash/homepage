import json, random, sys
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
try:
    from scripts.worksheet_factory import FONT, normalized_hash, validate_catalog
except ModuleNotFoundError:
    from worksheet_factory import FONT, normalized_hash, validate_catalog

SEEDS=(15101,15202,15303); PROBLEM_COUNT=20
SKILLS={
 'monomial-times-polynomial':('単項式×多項式の展開','expand-monomial-polynomial'),
 'polynomial-times-polynomial':('多項式×多項式の展開','expand-binomial-binomial'),
 'x-plus-a-x-plus-b':('(x+a)(x+b) 型の展開','expand-xab'),
 'square-formula-expansion':('(a+b)^2 / (a-b)^2 の展開','expand-square-formula'),
}

def expr(c,var='x'):
    if c==0:return '0'
    if c==1:return var
    if c==-1:return '-'+var
    return f'{c}{var}'

def poly2(a,b):
    s=expr(a)
    if b>0:s+=f'+{b}'
    elif b<0:s+=f'−{abs(b)}'
    return s

def ans(p):
    t=p['type']
    if t=='monomial-times-polynomial': return (p['m']*p['a'], p['m']*p['b'])
    if t in ('polynomial-times-polynomial','x-plus-a-x-plus-b'): return (p['a']*p['c'], p['a']*p['d']+p['b']*p['c'], p['b']*p['d'])
    s=1 if p['sign']==1 else -1
    return (1,2*s*p['a'],p['a']*p['a'])

def fmt(a,b,c=None):
    if c is None:
        return poly2(a,b)
    out=expr(a,'x²')
    if b>0: out += ('+'+expr(b))
    elif b<0: out += ('−'+expr(abs(b)))
    if c>0: out+=f'+{c}'
    elif c<0: out+=f'−{abs(c)}'
    return out

def gen(skill,seed):
    r=random.Random(seed+1009*sum(map(ord,skill))); out=[]; seen=set()
    while len(out)<PROBLEM_COUNT:
        if skill=='monomial-times-polynomial':
            p={'type':skill,'m':r.choice([i for i in range(-6,7) if i]),'a':r.choice([i for i in range(-6,7) if i]),'b':r.choice([i for i in range(-9,10) if i])}
        elif skill=='polynomial-times-polynomial':
            p={'type':skill,'a':r.choice([i for i in range(-4,5) if i]),'b':r.randint(-8,8),'c':r.choice([i for i in range(-4,5) if i]),'d':r.randint(-8,8)}
        elif skill=='x-plus-a-x-plus-b':
            p={'type':skill,'a':1,'b':r.choice([i for i in range(-9,10) if i]),'c':1,'d':r.choice([i for i in range(-9,10) if i])}
        else:
            p={'type':skill,'a':r.randint(1,12),'sign':r.choice((-1,1))}
        p['answer']=ans(p); k=json.dumps(p,sort_keys=True)
        if k in seen: continue
        seen.add(k); out.append(p)
    return out

def text(p):
    t=p['type']
    if t=='monomial-times-polynomial': return f'{expr(p["m"])}({poly2(p["a"],p["b"])}) = □'
    if t in ('polynomial-times-polynomial','x-plus-a-x-plus-b'): return f'({poly2(p["a"],p["b"])})({poly2(p["c"],p["d"])}) = □'
    op='+' if p['sign']==1 else '−'; return f'(x{op}{p["a"]})² = □'

def answer_text(p):
    a=ans(p); return fmt(*a)

def render(path,title,ps):
    c=canvas.Canvas(str(path),pagesize=A4); _,h=A4
    for am in (False,True):
        c.setFillColor(colors.black); c.setFont(FONT,18); c.drawString(45,h-55,title); c.setFont(FONT,10); c.drawRightString(A4[0]-45,h-52,'解答' if am else '問題'); c.drawString(45,h-78,'名前：____________________________')
        for i,p in enumerate(ps):
            x=45+(i//10)*275; y=h-120-(i%10)*63; c.setFillColor(colors.black); c.setFont(FONT,9); c.drawString(x,y,str(i+1)); c.drawString(x+24,y,text(p))
            if am: c.setFillColor(colors.red); c.setFont(FONT,9); c.drawString(x+24,y-19,f'答え：{answer_text(p)}')
        if not am:c.showPage()
    c.save()

def publish(root):
    root=Path(root); cp=root/'worksheets/catalog.json'; cat=json.loads(cp.read_text(encoding='utf-8')); ids={e['id'] for e in cat}; out=root/'materials/worksheets/junior-high/grade-03'; out.mkdir(parents=True,exist_ok=True)
    for skill,(title,fmtname) in SKILLS.items():
        for v,seed in enumerate(SEEDS,1):
            wid=f'jh3-{skill}-{v:02d}'
            if wid in ids: continue
            ps=gen(skill,seed); h=normalized_hash(ps); assert all(e['content_hash']!=h for e in cat); fn=f'{wid}.pdf'; render(out/fn,title,ps)
            cat.append({'id':wid,'school_level':'junior-high','grade':3,'subject':'数学','unit':'式の展開と因数分解','skill':skill,'problem_count':20,'seed':seed,'variant':v,'title':f'{title} {v:02d}','description':f'中学3年の「{title}」を20問反復するプリントです。2ページ目は同じ配置に赤字で解答を加えています。','url':f'materials/worksheets/junior-high/grade-03/{fn}','content_hash':h,'difficulty':'basic','worksheet_series':'focused','worksheet_format':fmtname,'answer_type':'accepted-set'}); ids.add(wid)
    validate_catalog(cat,root); cp.write_text(json.dumps(cat,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
if __name__=='__main__': publish(sys.argv[1] if len(sys.argv)>1 else '.')
