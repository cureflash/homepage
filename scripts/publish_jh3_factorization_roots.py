import json, math, random, sys
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
try:
    from scripts.worksheet_factory import FONT, normalized_hash, validate_catalog
except ModuleNotFoundError:
    from worksheet_factory import FONT, normalized_hash, validate_catalog

SEEDS=(15707,15808,15909)
SKILLS={
    'factor-difference-squares': ('和と差の積型の因数分解', 20, 'factor-difference-squares'),
    'expansion-factorization-mixed-100': ('展開・因数分解混合100問', 100, 'expansion-factorization-mixed-100'),
    'square-root-basic-value': ('平方根の基本値', 20, 'square-root-basic-value'),
    'simplify-radical': ('根号の簡単化', 20, 'simplify-radical'),
}

def sconst(n):
    return f'+{n}' if n > 0 else f'−{abs(n)}'

def poly2(b,c):
    out='x²'
    if b>0: out += ('+x' if b==1 else f'+{b}x')
    elif b<0: out += ('−x' if b==-1 else f'−{abs(b)}x')
    if c>0: out += f'+{c}'
    elif c<0: out += f'−{abs(c)}'
    return out

def independent_answer(p):
    t=p['type']
    if t=='factor-difference-squares': return (p['a'],)
    if t=='square-root-basic-value': return (math.isqrt(p['n']),)
    if t=='simplify-radical':
        n=p['n']; k=1
        for d in range(math.isqrt(n),1,-1):
            if n%(d*d)==0:
                k=d; break
        return (k,n//(k*k))
    if t=='expand-square':
        a=p['a']; s=p['sign']; return (1,2*s*a,a*a)
    if t=='expand-difference': return (1,0,-p['a']*p['a'])
    if t=='factor-sum-product': return (p['a'],p['b'])
    if t=='factor-square': return (p['a'],p['sign'])
    if t=='factor-difference': return (p['a'],)
    raise ValueError(t)

def gen(skill,seed):
    r=random.Random(seed+997*sum(map(ord,skill))); out=[]; seen=set(); target=SKILLS[skill][1]
    while len(out)<target:
        if skill=='factor-difference-squares':
            p={'type':skill,'a':r.randint(2,30)}
        elif skill=='square-root-basic-value':
            a=r.randint(2,30); p={'type':skill,'n':a*a}
        elif skill=='simplify-radical':
            k=r.randint(2,12); m=r.choice([2,3,5,6,7,10,11,13,14,15,17,19]); p={'type':skill,'n':k*k*m}
        else:
            i=len(out)%5
            if i==0: p={'type':'expand-square','a':r.randint(1,12),'sign':r.choice((-1,1))}
            elif i==1: p={'type':'expand-difference','a':r.randint(2,30)}
            elif i==2:
                a=r.choice([x for x in range(-9,10) if x]); b=r.choice([x for x in range(-9,10) if x]); p={'type':'factor-sum-product','a':a,'b':b}
            elif i==3: p={'type':'factor-square','a':r.randint(1,12),'sign':r.choice((-1,1))}
            else: p={'type':'factor-difference','a':r.randint(2,30)}
        p['answer']=independent_answer(p); key=json.dumps(p,sort_keys=True)
        if key in seen: continue
        seen.add(key); out.append(p)
    return out

def question_text(p):
    t=p['type']
    if t in ('factor-difference-squares','factor-difference'):
        return f'x²−{p["a"]*p["a"]} = □'
    if t=='square-root-basic-value': return f'√{p["n"]} = □'
    if t=='simplify-radical': return f'√{p["n"]} = □'
    if t=='expand-square':
        op='+' if p['sign']==1 else '−'; return f'(x{op}{p["a"]})² = □'
    if t=='expand-difference': return f'(x+{p["a"]})(x−{p["a"]}) = □'
    if t=='factor-sum-product': return f'{poly2(p["a"]+p["b"],p["a"]*p["b"])} = □'
    if t=='factor-square':
        s=p['sign']; return f'{poly2(2*s*p["a"],p["a"]*p["a"])} = □'
    raise ValueError(t)

def answer_text(p):
    t=p['type']; a=independent_answer(p)
    if t in ('factor-difference-squares','factor-difference'):
        n=a[0]; return f'(x+{n})(x−{n})'
    if t=='square-root-basic-value': return str(a[0])
    if t=='simplify-radical':
        k,m=a; return str(k) if m==1 else f'{k}√{m}'
    if t=='expand-square':
        _,b,c=a; return poly2(b,c)
    if t=='expand-difference': return f'x²−{p["a"]*p["a"]}'
    if t=='factor-sum-product': return f'(x{sconst(p["a"])})(x{sconst(p["b"])})'
    if t=='factor-square':
        op='+' if p['sign']==1 else '−'; return f'(x{op}{p["a"]})²'
    raise ValueError(t)

def validate_problem(p):
    assert tuple(p['answer'])==tuple(independent_answer(p))
    if p['type']=='square-root-basic-value':
        a=independent_answer(p)[0]; assert a*a==p['n']
    elif p['type']=='simplify-radical':
        k,m=independent_answer(p); assert k*k*m==p['n']; assert all(m%(d*d) for d in range(2,math.isqrt(m)+1))
    elif p['type'] in ('factor-difference-squares','factor-difference'):
        a=independent_answer(p)[0]; assert (1,0,-a*a)==(1,0,-p['a']*p['a'])
    elif p['type']=='factor-sum-product':
        a,b=independent_answer(p); assert (1,a+b,a*b)==(1,p['a']+p['b'],p['a']*p['b'])
    elif p['type']=='factor-square':
        a,s=independent_answer(p); assert (1,2*s*a,a*a)==(1,2*p['sign']*p['a'],p['a']*p['a'])

def render(path,title,ps):
    c=canvas.Canvas(str(path),pagesize=A4); w,h=A4; dense=len(ps)>20
    for answers in (False,True):
        c.setFillColor(colors.black); c.setFont(FONT,16 if dense else 18); c.drawString(38,h-45,title)
        c.setFont(FONT,9); c.drawRightString(w-38,h-43,'解答' if answers else '問題'); c.drawString(38,h-64,'名前：____________________________')
        cols=4 if dense else 2; rows=25 if dense else 10; colw=(w-70)/cols; rowh=(h-105)/rows
        for i,p in enumerate(ps):
            x=35+(i//rows)*colw; y=h-95-(i%rows)*rowh
            c.setFillColor(colors.black); c.setFont(FONT,7.2 if dense else 9); c.drawString(x,y,str(i+1)); c.drawString(x+18,y,question_text(p))
            if answers:
                c.setFillColor(colors.red); c.setFont(FONT,6.4 if dense else 8); c.drawString(x+18,y-(8 if dense else 16),answer_text(p))
        if not answers: c.showPage()
    c.save()

def publish(root):
    root=Path(root); cp=root/'worksheets/catalog.json'; cat=json.loads(cp.read_text(encoding='utf-8')); ids={e['id'] for e in cat}; out=root/'materials/worksheets/junior-high/grade-03'; out.mkdir(parents=True,exist_ok=True)
    for skill,(title,count,fmt) in SKILLS.items():
        unit='平方根' if skill in ('square-root-basic-value','simplify-radical') else '式の展開と因数分解'
        for variant,seed in enumerate(SEEDS,1):
            wid=f'jh3-{skill}-{variant:02d}'
            if wid in ids: continue
            ps=gen(skill,seed)
            assert len(ps)==count
            for p in ps: validate_problem(p)
            h=normalized_hash(ps); assert all(e['content_hash']!=h for e in cat)
            fn=f'{wid}.pdf'; render(out/fn,title,ps)
            cat.append({'id':wid,'school_level':'junior-high','grade':3,'subject':'数学','unit':unit,'skill':skill,'problem_count':count,'seed':seed,'variant':variant,'title':f'{title} {variant:02d}','description':f'中学3年の「{title}」を{count}問反復するプリントです。2ページ目は同じ配置に赤字で解答を加えています。','url':f'materials/worksheets/junior-high/grade-03/{fn}','content_hash':h,'difficulty':'basic','worksheet_series':'focused','worksheet_format':fmt,'answer_type':'accepted-set'})
            ids.add(wid)
    validate_catalog(cat,root); cp.write_text(json.dumps(cat,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')

if __name__=='__main__': publish(sys.argv[1] if len(sys.argv)>1 else '.')
