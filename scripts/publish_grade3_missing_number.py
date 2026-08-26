import json
import random
import sys
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas

try:
    from scripts.worksheet_factory import FONT, normalized_hash, validate_catalog
except ModuleNotFoundError:
    from worksheet_factory import FONT, normalized_hash, validate_catalog

SEEDS=(4901,5002,5103)
PROBLEM_COUNT=20
UNIT_TITLE='□を使った四則の逆算'
SKILLS={
    'missing-addend': {'title':'□に入る数 たし算','format':'missing-addend'},
    'missing-subtrahend': {'title':'□に入る数 ひき算','format':'missing-subtrahend'},
    'missing-factor': {'title':'□に入る数 かけ算','format':'missing-factor'},
    'missing-dividend': {'title':'□に入る数 わり算（わられる数）','format':'missing-dividend'},
    'missing-divisor': {'title':'□に入る数 わり算（わる数）','format':'missing-divisor'},
}

def independent_answer(p):
    t=p['type']
    if t=='missing-addend': return p['total']-p['known']
    if t=='missing-subtrahend': return p['minuend']-p['result']
    if t=='missing-factor': return p['product']//p['known']
    if t=='missing-dividend': return p['divisor']*p['quotient']
    if t=='missing-divisor': return p['dividend']//p['quotient']
    raise ValueError(t)

def validate_problem(skill,p):
    assert independent_answer(p)==p['answer']
    if skill=='missing-addend':
        assert p['type']=='missing-addend' and 100<=p['known']<=9999 and 100<=p['answer']<=9999 and p['total']<=9999
    elif skill=='missing-subtrahend':
        assert p['type']=='missing-subtrahend' and 200<=p['minuend']<=9999 and 1<=p['answer']<p['minuend'] and p['result']>=0
    elif skill=='missing-factor':
        assert p['type']=='missing-factor' and 2<=p['known']<=99 and 2<=p['answer']<=99 and p['product']==p['known']*p['answer']
    elif skill=='missing-dividend':
        assert p['type']=='missing-dividend' and 2<=p['divisor']<=9 and 2<=p['quotient']<=99 and p['answer']==p['divisor']*p['quotient']<=999
    elif skill=='missing-divisor':
        assert p['type']=='missing-divisor' and 2<=p['answer']<=9 and 2<=p['quotient']<=99 and p['dividend']==p['answer']*p['quotient']<=999
    else: raise ValueError(skill)

def generate(skill,seed,count=PROBLEM_COUNT):
    assert seed in SEEDS and count==PROBLEM_COUNT
    rng=random.Random(seed+sum(ord(c) for c in skill)*1009); out=[]; used=set()
    while len(out)<count:
        if skill=='missing-addend':
            a=rng.randint(100,4899); b=rng.randint(100,9999-a); key=(a,b)
            if key in used: continue
            used.add(key); p={'type':'missing-addend','known':a,'total':a+b,'answer':b}
        elif skill=='missing-subtrahend':
            m=rng.randint(200,9999); ans=rng.randint(1,m-1); key=(m,ans)
            if key in used: continue
            used.add(key); p={'type':'missing-subtrahend','minuend':m,'result':m-ans,'answer':ans}
        elif skill=='missing-factor':
            known=rng.randint(2,99); ans=rng.randint(2,99); key=(known,ans)
            if key in used: continue
            used.add(key); p={'type':'missing-factor','known':known,'product':known*ans,'answer':ans}
        elif skill=='missing-dividend':
            d=rng.randint(2,9); q=rng.randint(2,99); key=(d,q)
            if d*q>999 or key in used: continue
            used.add(key); p={'type':'missing-dividend','divisor':d,'quotient':q,'answer':d*q}
        elif skill=='missing-divisor':
            ans=rng.randint(2,9); q=rng.randint(2,99); key=(ans,q)
            if ans*q>999 or key in used: continue
            used.add(key); p={'type':'missing-divisor','dividend':ans*q,'quotient':q,'answer':ans}
        else: raise ValueError(skill)
        validate_problem(skill,p); out.append(p)
    return out

def text_problem(p):
    if p['type']=='missing-addend': return f"{p['known']} + □ = {p['total']}"
    if p['type']=='missing-subtrahend': return f"{p['minuend']} - □ = {p['result']}"
    if p['type']=='missing-factor': return f"{p['known']} × □ = {p['product']}"
    if p['type']=='missing-dividend': return f"□ ÷ {p['divisor']} = {p['quotient']}"
    if p['type']=='missing-divisor': return f"{p['dividend']} ÷ □ = {p['quotient']}"
    raise ValueError(p['type'])

def draw_problem(c,x,y,number,p,answer_mode=False):
    c.setFillColor(colors.black); c.setFont(FONT,13); c.drawString(x,y,str(number)); c.drawString(x+28,y,text_problem(p))
    if answer_mode:
        c.setFillColor(colors.red); c.drawString(x+28,y-20,f"こたえ：{independent_answer(p)}"); c.setFillColor(colors.black)

def render_pdf(path,title,problems):
    c=canvas.Canvas(str(path),pagesize=A4); w,h=A4
    for page_index,answer_mode in enumerate((False,True)):
        c.setFillColor(colors.black); c.setFont(FONT,18); c.drawString(45,h-55,title); c.setFont(FONT,10); c.drawRightString(w-45,h-52,'こたえ' if answer_mode else 'もんだい'); c.drawString(45,h-78,'なまえ：____________________________')
        for i,p in enumerate(problems):
            col=i//10; row=i%10; draw_problem(c,55+col*260,h-120-row*63,i+1,p,answer_mode)
        if page_index==0: c.showPage()
    c.save()

def publish(repo_root):
    root=Path(repo_root); catalog_path=root/'worksheets'/'catalog.json'; catalog=json.loads(catalog_path.read_text(encoding='utf-8')); output_dir=root/'materials'/'worksheets'/'elementary'/'grade-03'; output_dir.mkdir(parents=True,exist_ok=True); existing_ids={e['id'] for e in catalog}; published=0
    for skill,spec in SKILLS.items():
        for variant,seed in enumerate(SEEDS,start=1):
            wid=f'e3-{skill}-{variant:02d}'
            if wid in existing_ids: continue
            problems=generate(skill,seed); h=normalized_hash(problems); assert all(e['content_hash']!=h for e in catalog),f'duplicate worksheet content: {wid}'; filename=f'{wid}.pdf'; render_pdf(output_dir/filename,spec['title'],problems)
            catalog.append({'id':wid,'school_level':'elementary','grade':3,'subject':'算数','unit':UNIT_TITLE,'skill':skill,'problem_count':PROBLEM_COUNT,'seed':seed,'variant':variant,'title':f"{spec['title']} {variant:02d}",'description':'小学3年で扱う□を用いた式と、加減・乗除の相互関係を使って未知の数を求める反復プリントです。2ページ目は同じ問題配置に赤字で解答を加えています。','url':f'materials/worksheets/elementary/grade-03/{filename}','content_hash':h,'difficulty':'basic','worksheet_series':'focused','worksheet_format':spec['format'],'answer_type':'numeric'}); existing_ids.add(wid); published+=1
    validate_catalog(catalog,root); catalog_path.write_text(json.dumps(catalog,ensure_ascii=False,indent=2)+'\n',encoding='utf-8'); print(f'published {published} grade-3 missing-number worksheets')

if __name__=='__main__': publish(sys.argv[1] if len(sys.argv)>1 else '.')
