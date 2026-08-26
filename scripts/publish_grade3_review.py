import json
import random
import sys
from collections import Counter
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas

try:
    from scripts.worksheet_factory import FONT, normalized_hash, validate_catalog
except ModuleNotFoundError:
    from worksheet_factory import FONT, normalized_hash, validate_catalog

SEEDS=(5201,5302,5403)
PROBLEM_COUNT=24
SKILL='grade3-review'
TITLE='小学3年 算数 総復習'
FORMAT='grade3-review-mixed'
DISTRIBUTION={'add':3,'sub':3,'mul':4,'div':4,'decimal':4,'fraction':2,'large':2,'missing':2}
PLACE_LABELS={10_000_000:'千万',1_000_000:'百万',100_000:'十万',10_000:'万',1_000:'千',100:'百',10:'十',1:'一'}

def decimal_text(tenths):
    return f'{tenths//10}.{tenths%10}'

def independent_answer(p):
    t=p['type']
    if t=='add': return p['a']+p['b']
    if t=='sub': return p['a']-p['b']
    if t=='mul': return p['a']*p['b']
    if t=='div':
        q,r=divmod(p['dividend'],p['divisor']); return str(q) if r==0 else f'{q}あまり{r}'
    if t=='decimal-add': return decimal_text(p['a_tenths']+p['b_tenths'])
    if t=='decimal-sub': return decimal_text(p['a_tenths']-p['b_tenths'])
    if t=='fraction-add': return f"{p['a_num']+p['b_num']}/{p['den']}" if p['a_num']+p['b_num']<p['den'] else '1'
    if t=='fraction-sub': return f"{p['a_num']-p['b_num']}/{p['den']}"
    if t=='place-digit': return (p['number']//p['place'])%10
    if t=='scale': return p['number']*p['factor']
    if t=='missing-addend': return p['total']-p['known']
    if t=='missing-factor': return p['product']//p['known']
    raise ValueError(t)

def validate_problem(p):
    assert independent_answer(p)==p['answer']
    t=p['type']
    if t=='add': assert 100<=p['a']<=9999 and 100<=p['b']<=9999 and p['answer']<=9999
    elif t=='sub': assert 100<=p['b']<p['a']<=9999
    elif t=='mul': assert 10<=p['a']<=999 and 2<=p['b']<=99
    elif t=='div': assert 10<=p['dividend']<=999 and 2<=p['divisor']<=9
    elif t=='decimal-add': assert 1<=p['a_tenths']<=99 and 1<=p['b_tenths']<=99 and p['a_tenths']+p['b_tenths']<=199
    elif t=='decimal-sub': assert 1<=p['b_tenths']<p['a_tenths']<=199
    elif t=='fraction-add': assert 3<=p['den']<=10 and 1<=p['a_num']<p['den'] and 1<=p['b_num']<p['den'] and p['a_num']+p['b_num']<=p['den']
    elif t=='fraction-sub': assert 3<=p['den']<=10 and 1<=p['b_num']<p['a_num']<p['den']
    elif t=='place-digit': assert 10_000<=p['number']<=99_999_999 and p['place'] in PLACE_LABELS
    elif t=='scale': assert p['factor'] in (10,100,1000) and p['number']*p['factor']<=100_000_000
    elif t=='missing-addend': assert 100<=p['known']<p['total']<=9999
    elif t=='missing-factor': assert 2<=p['known']<=99 and 2<=p['answer']<=99
    else: raise ValueError(t)

def generate(seed,count=PROBLEM_COUNT):
    assert seed in SEEDS and count==PROBLEM_COUNT
    rng=random.Random(seed*1009+3003); out=[]; used=set()
    def add(p):
        key=json.dumps(p,sort_keys=True,ensure_ascii=False)
        if key in used: return False
        p['answer']=independent_answer(p); validate_problem(p); used.add(key); out.append(p); return True
    while sum(p['type']=='add' for p in out)<3:
        a=rng.randint(100,7000); b=rng.randint(100,9999-a); add({'type':'add','a':a,'b':b})
    while sum(p['type']=='sub' for p in out)<3:
        a=rng.randint(200,9999); b=rng.randint(100,a-1); add({'type':'sub','a':a,'b':b})
    while sum(p['type']=='mul' for p in out)<4:
        a=rng.randint(10,999); b=rng.randint(2,99); add({'type':'mul','a':a,'b':b})
    div_modes=[False,False,True,True]
    for remainder_mode in div_modes:
        while True:
            d=rng.randint(2,9); q=rng.randint(2,99); r=rng.randint(1,d-1) if remainder_mode else 0; n=d*q+r
            if n<=999 and add({'type':'div','dividend':n,'divisor':d}): break
    for op in ('decimal-add','decimal-add','decimal-sub','decimal-sub'):
        while True:
            if op=='decimal-add':
                a=rng.randint(1,99); b=rng.randint(1,199-a); p={'type':op,'a_tenths':a,'b_tenths':b}
            else:
                a=rng.randint(2,199); b=rng.randint(1,a-1); p={'type':op,'a_tenths':a,'b_tenths':b}
            if add(p): break
    den1=rng.randint(3,10); a1=rng.randint(1,den1-1); b1=rng.randint(1,den1-a1); add({'type':'fraction-add','den':den1,'a_num':a1,'b_num':b1})
    den2=rng.randint(3,10); a2=rng.randint(2,den2-1); b2=rng.randint(1,a2-1); add({'type':'fraction-sub','den':den2,'a_num':a2,'b_num':b2})
    for _ in range(1):
        place=rng.choice(list(PLACE_LABELS)); n=rng.randint(10_000,99_999_999); add({'type':'place-digit','number':n,'place':place})
    factor=rng.choice((10,100,1000)); n=rng.randint(1,100_000_000//factor); add({'type':'scale','number':n,'factor':factor})
    known=rng.randint(100,5000); ans=rng.randint(100,9999-known); add({'type':'missing-addend','known':known,'total':known+ans})
    known=rng.randint(2,99); ans=rng.randint(2,99); add({'type':'missing-factor','known':known,'product':known*ans})
    rng.shuffle(out); assert len(out)==count
    kinds=Counter('decimal' if p['type'].startswith('decimal-') else 'fraction' if p['type'].startswith('fraction-') else 'large' if p['type'] in ('place-digit','scale') else 'missing' if p['type'].startswith('missing-') else p['type'] for p in out)
    assert kinds==DISTRIBUTION
    for p in out: validate_problem(p)
    return out

def problem_text(p):
    t=p['type']
    if t=='add': return f"{p['a']} + {p['b']} = □"
    if t=='sub': return f"{p['a']} - {p['b']} = □"
    if t=='mul': return f"{p['a']} × {p['b']} = □"
    if t=='div': return f"{p['dividend']} ÷ {p['divisor']} = □"
    if t=='decimal-add': return f"{decimal_text(p['a_tenths'])} + {decimal_text(p['b_tenths'])} = □"
    if t=='decimal-sub': return f"{decimal_text(p['a_tenths'])} - {decimal_text(p['b_tenths'])} = □"
    if t=='fraction-add': return f"{p['a_num']}/{p['den']} + {p['b_num']}/{p['den']} = □"
    if t=='fraction-sub': return f"{p['a_num']}/{p['den']} - {p['b_num']}/{p['den']} = □"
    if t=='place-digit': return f"{p['number']} の {PLACE_LABELS[p['place']]}のくらいは □"
    if t=='scale': return f"{p['number']} の {p['factor']}倍は □"
    if t=='missing-addend': return f"{p['known']} + □ = {p['total']}"
    if t=='missing-factor': return f"{p['known']} × □ = {p['product']}"
    raise ValueError(t)

def draw_problem(c,x,y,number,p,answer_mode=False):
    c.setFillColor(colors.black); c.setFont(FONT,9.5); c.drawString(x,y,str(number)); c.drawString(x+22,y,problem_text(p))
    if answer_mode:
        c.setFillColor(colors.red); c.drawString(x+22,y-17,f"こたえ：{independent_answer(p)}"); c.setFillColor(colors.black)

def render_pdf(path,problems):
    c=canvas.Canvas(str(path),pagesize=A4); w,h=A4
    for page_index,answer_mode in enumerate((False,True)):
        c.setFillColor(colors.black); c.setFont(FONT,18); c.drawString(45,h-55,TITLE); c.setFont(FONT,10); c.drawRightString(w-45,h-52,'こたえ' if answer_mode else 'もんだい'); c.drawString(45,h-78,'なまえ：____________________________')
        for i,p in enumerate(problems):
            col=i//12; row=i%12; draw_problem(c,42+col*278,h-115-row*55,i+1,p,answer_mode)
        if page_index==0: c.showPage()
    c.save()

def publish(repo_root):
    root=Path(repo_root); catalog_path=root/'worksheets'/'catalog.json'; catalog=json.loads(catalog_path.read_text(encoding='utf-8')); output_dir=root/'materials'/'worksheets'/'elementary'/'grade-03'; output_dir.mkdir(parents=True,exist_ok=True); ids={e['id'] for e in catalog}; published=0
    for variant,seed in enumerate(SEEDS,start=1):
        wid=f'e3-{SKILL}-{variant:02d}'
        if wid in ids: continue
        problems=generate(seed); h=normalized_hash(problems); assert all(e['content_hash']!=h for e in catalog); filename=f'{wid}.pdf'; render_pdf(output_dir/filename,problems)
        catalog.append({'id':wid,'school_level':'elementary','grade':3,'subject':'算数','unit':'小学3年 総復習','skill':SKILL,'problem_count':PROBLEM_COUNT,'seed':seed,'variant':variant,'title':f'{TITLE} {variant:02d}','description':'小学3年の整数加減・乗除・小数・分数・大きな数・□を用いた式を横断して復習する24問プリントです。2ページ目は同じ問題配置に赤字で解答を加えています。','url':f'materials/worksheets/elementary/grade-03/{filename}','content_hash':h,'difficulty':'basic','worksheet_series':'review','worksheet_format':FORMAT,'answer_type':'accepted-set'}); ids.add(wid); published+=1
    validate_catalog(catalog,root); catalog_path.write_text(json.dumps(catalog,ensure_ascii=False,indent=2)+'\n',encoding='utf-8'); print(f'published {published} grade-3 review worksheets')

if __name__=='__main__': publish(sys.argv[1] if len(sys.argv)>1 else '.')
