import json, random, sys
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
try:
    from scripts.worksheet_factory import FONT, normalized_hash, validate_catalog
except ModuleNotFoundError:
    from worksheet_factory import FONT, normalized_hash, validate_catalog

SEEDS=(15404,15505,15606); PROBLEM_COUNT=20
SKILLS={
 'difference-of-squares-expansion':('(a+b)(a-b) の展開','expand-difference-squares'),
 'factor-common-factor':('共通因数でくくる因数分解','factor-common-factor'),
 'factor-x2-sum-product':('x²+(a+b)x+ab 型の因数分解','factor-x2-sum-product'),
 'factor-square-formula':('平方公式型の因数分解','factor-square-formula'),
}

def expr(c,var='x'):
    if c==0:return '0'
    if c==1:return var
    if c==-1:return '-'+var
    return f'{c}{var}'

def signed_const(n):
    return f'+{n}' if n>0 else f'−{abs(n)}'

def poly2(a,b):
    s=expr(a)
    if b:s+=signed_const(b)
    return s

def fmt_poly(a,b,c=0):
    out=expr(a,'x²')
    if b>0: out+='+'+expr(b)
    elif b<0: out+='−'+expr(abs(b))
    if c>0: out+=f'+{c}'
    elif c<0: out+=f'−{abs(c)}'
    return out

def independent_answer(p):
    t=p['type']
    if t=='difference-of-squares-expansion':
        return (p['a']*p['a'],0,-p['b']*p['b'])
    if t=='factor-common-factor':
        g=p['g']; return (g,p['a'],p['b'])
    if t=='factor-x2-sum-product':
        return (p['a'],p['b'])
    if t=='factor-square-formula':
        return (p['a'],p['sign'])
    raise ValueError(t)

def expand_factorization(p):
    t=p['type']
    if t=='factor-common-factor':
        return (0,p['g']*p['a'],p['g']*p['b'])
    if t=='factor-x2-sum-product':
        return (1,p['a']+p['b'],p['a']*p['b'])
    if t=='factor-square-formula':
        s=p['sign']; a=p['a']; return (1,2*s*a,a*a)
    raise ValueError(t)

def gen(skill,seed):
    r=random.Random(seed+1009*sum(map(ord,skill))); out=[]; seen=set()
    while len(out)<PROBLEM_COUNT:
        if skill=='difference-of-squares-expansion':
            p={'type':skill,'a':r.randint(1,7),'b':r.randint(1,12)}
        elif skill=='factor-common-factor':
            g=r.choice([i for i in range(2,10)])
            a=r.choice([i for i in range(-9,10) if i])
            b=r.choice([i for i in range(-12,13) if i])
            p={'type':skill,'g':g,'a':a,'b':b}
        elif skill=='factor-x2-sum-product':
            a=r.choice([i for i in range(-9,10) if i]); b=r.choice([i for i in range(-9,10) if i])
            p={'type':skill,'a':a,'b':b}
        else:
            p={'type':skill,'a':r.randint(1,12),'sign':r.choice((-1,1))}
        p['answer']=independent_answer(p); k=json.dumps(p,sort_keys=True)
        if k in seen: continue
        seen.add(k); out.append(p)
    return out

def text(p):
    t=p['type']
    if t=='difference-of-squares-expansion': return f'({expr(p["a"])}+{p["b"]})({expr(p["a"])}−{p["b"]}) = □'
    if t=='factor-common-factor': return f'{poly2(p["g"]*p["a"],p["g"]*p["b"])} = □'
    if t=='factor-x2-sum-product': return f'{fmt_poly(1,p["a"]+p["b"],p["a"]*p["b"])} = □'
    op='+' if p['sign']==1 else '−'; return f'{fmt_poly(1,2*p["sign"]*p["a"],p["a"]*p["a"])} = □'

def answer_text(p):
    t=p['type']
    if t=='difference-of-squares-expansion': return fmt_poly(*independent_answer(p))
    if t=='factor-common-factor': return f'{p["g"]}({poly2(p["a"],p["b"])})'
    if t=='factor-x2-sum-product': return f'(x{signed_const(p["a"]) if p["a"] else ""})(x{signed_const(p["b"]) if p["b"] else ""})'
    op='+' if p['sign']==1 else '−'; return f'(x{op}{p["a"]})²'

def validate_problem(p):
    assert tuple(independent_answer(p))==tuple(p['answer'])
    if p['type']=='difference-of-squares-expansion':
        a,b,c=independent_answer(p); assert a==p['a']**2 and b==0 and c==-p['b']**2
    else:
        coeffs=expand_factorization(p)
        if p['type']=='factor-common-factor': assert coeffs==(0,p['g']*p['a'],p['g']*p['b'])
        elif p['type']=='factor-x2-sum-product': assert coeffs==(1,p['a']+p['b'],p['a']*p['b'])
        else: assert coeffs==(1,2*p['sign']*p['a'],p['a']**2)

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
            ps=gen(skill,seed)
            for p in ps: validate_problem(p)
            h=normalized_hash(ps); assert all(e['content_hash']!=h for e in cat); fn=f'{wid}.pdf'; render(out/fn,title,ps)
            cat.append({'id':wid,'school_level':'junior-high','grade':3,'subject':'数学','unit':'式の展開と因数分解','skill':skill,'problem_count':20,'seed':seed,'variant':v,'title':f'{title} {v:02d}','description':f'中学3年の「{title}」を20問反復するプリントです。2ページ目は同じ配置に赤字で解答を加えています。','url':f'materials/worksheets/junior-high/grade-03/{fn}','content_hash':h,'difficulty':'basic','worksheet_series':'focused','worksheet_format':fmtname,'answer_type':'accepted-set'}); ids.add(wid)
    validate_catalog(cat,root); cp.write_text(json.dumps(cat,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
if __name__=='__main__': publish(sys.argv[1] if len(sys.argv)>1 else '.')
