import json, math, random, sys
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
try:
    from scripts.worksheet_factory import FONT, normalized_hash, validate_catalog
except ModuleNotFoundError:
    from worksheet_factory import FONT, normalized_hash, validate_catalog

SEEDS=(16710,16811,16912)
SQUAREFREE=(2,3,5,6,7,10,11,13,14,15,17,19,21,22,23,26,29,30)
SKILLS={
    'radical-mul-div': ('根号の乗除', 20, 'radical-mul-div'),
    'radical-add-sub': ('根号の加減', 20, 'radical-add-sub'),
    'rationalize-denominator': ('分母の有理化', 20, 'rationalize-denominator'),
    'square-root-four-operations-mixed-100': ('平方根四則混合100問', 100, 'square-root-four-operations-mixed-100'),
}

def simplify_radical(num,rad,den=1):
    assert rad>=1 and den>0
    k=1
    for d in range(math.isqrt(rad),1,-1):
        if rad%(d*d)==0:
            k=d; break
    num*=k; rad//=k*k
    g=math.gcd(abs(num),den)
    if g:
        num//=g; den//=g
    if num==0:
        return (0,1,1)
    return (num,rad,den)

def radical_term(c,m):
    return f'√{m}' if c==1 else f'{c}√{m}'

def question_text(p):
    t=p['type']
    if t=='mul': return f'√{p["a"]} × √{p["b"]} = □'
    if t=='div': return f'√{p["a"]} ÷ √{p["b"]} = □'
    if t=='add': return f'{radical_term(p["a"],p["m"])} + {radical_term(p["b"],p["m"])} = □'
    if t=='sub': return f'{radical_term(p["a"],p["m"])} − {radical_term(p["b"],p["m"])} = □'
    if t=='rationalize': return f'{p["a"]}/√{p["m"]} = □'
    raise ValueError(t)

def independent_answer(p):
    t=p['type']
    if t=='mul': return simplify_radical(1,p['a']*p['b'])
    if t=='div':
        assert p['a']%p['b']==0
        return simplify_radical(1,p['a']//p['b'])
    if t=='add': return simplify_radical(p['a']+p['b'],p['m'])
    if t=='sub': return simplify_radical(p['a']-p['b'],p['m'])
    if t=='rationalize': return simplify_radical(p['a'],p['m'],p['m'])
    raise ValueError(t)

def make_problem(kind,r):
    if kind=='mul':
        a,b=sorted((r.randint(2,30),r.randint(2,30)))
        return {'type':'mul','a':a,'b':b}
    if kind=='div':
        b=r.choice(SQUAREFREE); q=r.randint(2,30)
        return {'type':'div','a':b*q,'b':b}
    if kind=='add':
        a,b=sorted((r.randint(1,12),r.randint(1,12)))
        return {'type':'add','a':a,'b':b,'m':r.choice(SQUAREFREE)}
    if kind=='sub':
        a,b=sorted((r.randint(1,12),r.randint(1,12)),reverse=True)
        if a==b: a+=1
        return {'type':'sub','a':a,'b':b,'m':r.choice(SQUAREFREE)}
    if kind=='rationalize':
        return {'type':'rationalize','a':r.randint(1,12),'m':r.choice(SQUAREFREE)}
    raise ValueError(kind)

def gen(skill,seed):
    r=random.Random(seed+997*sum(map(ord,skill))); out=[]; seen=set(); target=SKILLS[skill][1]
    attempts=0; max_attempts=max(1000,target*200)
    while len(out)<target:
        attempts+=1
        if attempts>max_attempts:
            raise RuntimeError(f'could not generate {target} unique displayed problems for {skill}; generated {len(out)}')
        if skill=='radical-mul-div': kind=('mul','div')[len(out)%2]
        elif skill=='radical-add-sub': kind=('add','sub')[len(out)%2]
        elif skill=='rationalize-denominator': kind='rationalize'
        elif skill=='square-root-four-operations-mixed-100': kind=('add','sub','mul','div')[len(out)%4]
        else: raise ValueError(skill)
        p=make_problem(kind,r); p['answer']=independent_answer(p); q=question_text(p)
        if q in seen: continue
        seen.add(q); out.append(p)
    return out

def validate_problem(p):
    ans=tuple(p['answer']); assert ans==tuple(independent_answer(p))
    n,rad,den=ans; assert den>0 and rad>=1 and math.gcd(abs(n),den)==1
    assert all(rad%(d*d) for d in range(2,math.isqrt(rad)+1))
    t=p['type']
    if t=='mul': assert n*n*rad==p['a']*p['b']*den*den
    elif t=='div': assert n*n*rad*p['b']==p['a']*den*den
    elif t=='add': assert n*n*rad==(p['a']+p['b'])**2*p['m']*den*den
    elif t=='sub':
        assert p['a']>p['b']; assert n*n*rad==(p['a']-p['b'])**2*p['m']*den*den
    elif t=='rationalize': assert n*n*rad*p['m']==p['a']*p['a']*den*den
    else: raise ValueError(t)

def answer_text(p):
    n,rad,den=independent_answer(p)
    if rad==1: top=str(n)
    elif n==1: top=f'√{rad}'
    elif n==-1: top=f'−√{rad}'
    else: top=f'{n}√{rad}'
    return top if den==1 else f'{top}/{den}'

def render(path,title,ps):
    c=canvas.Canvas(str(path),pagesize=A4); w,h=A4; dense=len(ps)>20
    for answers in (False,True):
        c.setFillColor(colors.black); c.setFont(FONT,16 if dense else 18); c.drawString(38,h-45,title)
        c.setFont(FONT,9); c.drawRightString(w-38,h-43,'解答' if answers else '問題'); c.drawString(38,h-64,'名前：____________________________')
        cols=4 if dense else 2; rows=25 if dense else 10; colw=(w-70)/cols; rowh=(h-105)/rows
        for i,p in enumerate(ps):
            x=35+(i//rows)*colw; y=h-95-(i%rows)*rowh
            c.setFillColor(colors.black); c.setFont(FONT,6.8 if dense else 9); c.drawString(x,y,str(i+1)); c.drawString(x+18,y,question_text(p))
            if answers:
                c.setFillColor(colors.red); c.setFont(FONT,6.1 if dense else 8); c.drawString(x+18,y-(8 if dense else 16),answer_text(p))
        if not answers: c.showPage()
    c.save()

def publish(root):
    root=Path(root); cp=root/'worksheets/catalog.json'; cat=json.loads(cp.read_text(encoding='utf-8')); ids={e['id'] for e in cat}; out=root/'materials/worksheets/junior-high/grade-03'; out.mkdir(parents=True,exist_ok=True)
    for skill,(title,count,fmt) in SKILLS.items():
        for variant,seed in enumerate(SEEDS,1):
            wid=f'jh3-{skill}-{variant:02d}'
            if wid in ids: continue
            ps=gen(skill,seed); assert len(ps)==count
            for p in ps: validate_problem(p)
            h=normalized_hash(ps); assert all(e['content_hash']!=h for e in cat)
            fn=f'{wid}.pdf'; render(out/fn,title,ps)
            cat.append({'id':wid,'school_level':'junior-high','grade':3,'subject':'数学','unit':'平方根','skill':skill,'problem_count':count,'seed':seed,'variant':variant,'title':f'{title} {variant:02d}','description':f'中学3年の「{title}」を{count}問反復するプリントです。2ページ目は同じ配置に赤字で解答を加えています。','url':f'materials/worksheets/junior-high/grade-03/{fn}','content_hash':h,'difficulty':'basic','worksheet_series':'focused','worksheet_format':fmt,'answer_type':'accepted-set'})
            ids.add(wid)
    validate_catalog(cat,root); cp.write_text(json.dumps(cat,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')

if __name__=='__main__': publish(sys.argv[1] if len(sys.argv)>1 else '.')
