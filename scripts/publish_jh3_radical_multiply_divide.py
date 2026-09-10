import json, math, random, sys
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
try:
    from scripts.worksheet_factory import FONT, normalized_hash, validate_catalog
except ModuleNotFoundError:
    from worksheet_factory import FONT, normalized_hash, validate_catalog

SEEDS=(16010,16111,16212)
PROBLEM_COUNT=20
SKILL='radical-multiply-divide'
TITLE='根号の乗除'
RADICANDS=(2,3,5,6,7,8,10,12,14,15,18,20,21,24,27,28,32,40,45,48,50,54,63,72,75,80,98)
DIVISORS=(2,3,5,6,7,10,11,13,14,15)
QUOTIENTS=(2,3,5,6,7,8,10,12,14,15,18,20,24,27,28,32,45,50)

def simplify_root(n):
    assert isinstance(n,int) and n>0
    k=1
    for d in range(math.isqrt(n),1,-1):
        if n%(d*d)==0:
            k=d
            break
    return (k,n//(k*k))

def root_text(pair):
    k,m=pair
    if m==1:
        return str(k)
    if k==1:
        return f'√{m}'
    return f'{k}√{m}'

def independent_answer(p):
    if p['type']=='radical-multiply':
        return simplify_root(p['a']*p['b'])
    if p['type']=='radical-divide':
        assert p['a']%p['b']==0
        return simplify_root(p['a']//p['b'])
    raise ValueError(p['type'])

def question_text(p):
    if p['type']=='radical-multiply':
        return f'√{p["a"]} × √{p["b"]} = □'
    if p['type']=='radical-divide':
        return f'√{p["a"]} ÷ √{p["b"]} = □'
    raise ValueError(p['type'])

def _multiply_pool():
    out=[]
    for i,a in enumerate(RADICANDS):
        for b in RADICANDS[i:]:
            k,m=simplify_root(a*b)
            if k>=2 and m<=30:
                out.append((a,b))
    return out

def _divide_pool():
    out=[]
    for b in DIVISORS:
        for q in QUOTIENTS:
            if b*q<=200:
                out.append((b*q,b))
    return out

def gen(seed):
    r=random.Random(seed+1009*sum(map(ord,SKILL)))
    multiply=_multiply_pool()
    divide=_divide_pool()
    r.shuffle(multiply)
    r.shuffle(divide)
    out=[]
    for i in range(PROBLEM_COUNT//2):
        a,b=multiply[i]
        p={'type':'radical-multiply','a':a,'b':b}
        p['answer']=independent_answer(p)
        out.append(p)
        a,b=divide[i]
        p={'type':'radical-divide','a':a,'b':b}
        p['answer']=independent_answer(p)
        out.append(p)
    assert len({question_text(p) for p in out})==PROBLEM_COUNT
    return out

def answer_text(p):
    return root_text(independent_answer(p))

def validate_problem(p):
    k,m=independent_answer(p)
    assert tuple(p['answer'])==(k,m)
    assert k>=1 and m>=1
    for d in range(2,math.isqrt(m)+1):
        assert m%(d*d)!=0
    if p['type']=='radical-multiply':
        assert k*k*m==p['a']*p['b']
    elif p['type']=='radical-divide':
        assert p['a']%p['b']==0
        assert p['b']*k*k*m==p['a']
    else:
        raise ValueError(p['type'])

def render(path,title,ps):
    c=canvas.Canvas(str(path),pagesize=A4); _,h=A4
    for answers in (False,True):
        c.setFillColor(colors.black); c.setFont(FONT,18); c.drawString(45,h-55,title)
        c.setFont(FONT,10); c.drawRightString(A4[0]-45,h-52,'解答' if answers else '問題')
        c.drawString(45,h-78,'名前：____________________________')
        for i,p in enumerate(ps):
            x=45+(i//10)*275; y=h-120-(i%10)*63
            c.setFillColor(colors.black); c.setFont(FONT,9)
            c.drawString(x,y,str(i+1)); c.drawString(x+24,y,question_text(p))
            if answers:
                c.setFillColor(colors.red); c.setFont(FONT,9)
                c.drawString(x+24,y-19,f'答え：{answer_text(p)}')
        if not answers:
            c.showPage()
    c.save()

def publish(root):
    root=Path(root)
    cp=root/'worksheets/catalog.json'
    cat=json.loads(cp.read_text(encoding='utf-8'))
    ids={e['id'] for e in cat}
    out=root/'materials/worksheets/junior-high/grade-03'
    out.mkdir(parents=True,exist_ok=True)
    for variant,seed in enumerate(SEEDS,1):
        wid=f'jh3-{SKILL}-{variant:02d}'
        if wid in ids:
            continue
        ps=gen(seed)
        for p in ps:
            validate_problem(p)
        h=normalized_hash(ps)
        assert all(e['content_hash']!=h for e in cat)
        fn=f'{wid}.pdf'
        render(out/fn,TITLE,ps)
        cat.append({
            'id':wid,
            'school_level':'junior-high',
            'grade':3,
            'subject':'数学',
            'unit':'平方根',
            'skill':SKILL,
            'problem_count':PROBLEM_COUNT,
            'seed':seed,
            'variant':variant,
            'title':f'{TITLE} {variant:02d}',
            'description':f'中学3年の「{TITLE}」を{PROBLEM_COUNT}問反復するプリントです。2ページ目は同じ配置に赤字で解答を加えています。',
            'url':f'materials/worksheets/junior-high/grade-03/{fn}',
            'content_hash':h,
            'difficulty':'basic',
            'worksheet_series':'focused',
            'worksheet_format':SKILL,
            'answer_type':'accepted-set',
        })
        ids.add(wid)
    validate_catalog(cat,root)
    cp.write_text(json.dumps(cat,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')

if __name__=='__main__':
    publish(sys.argv[1] if len(sys.argv)>1 else '.')
