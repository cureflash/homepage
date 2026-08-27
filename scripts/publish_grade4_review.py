import json, random, sys
from collections import Counter
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
try:
    from scripts.worksheet_factory import FONT, normalized_hash, validate_catalog
except ModuleNotFoundError:
    from worksheet_factory import FONT, normalized_hash, validate_catalog

SKILL='grade4-review'; TITLE='小学4年 算数 総復習'; UNIT_TITLE='小学4年 総復習'; SEEDS=(9504,9605,9706); PROBLEM_COUNT=20; TYPES=('large-add','large-sub','division','decimal-add','mixed')

def independent_answer(p):
    t=p['type']
    if t=='large-add': return p['a']+p['b']
    if t=='large-sub': return p['a']-p['b']
    if t=='division': return p['a']//p['b']
    if t=='decimal-add': return p['a100']+p['b100']
    if t=='mixed': return p['a']+p['b']*p['c']-p['d']//p['e']
    raise AssertionError(t)

def generate(seed):
    rng=random.Random(seed); out=[]; seen=set(); order=list(TYPES)*4; rng.shuffle(order)
    for t in order:
        while True:
            if t=='large-add': p={'type':t,'a':rng.randint(10000,9000000),'b':rng.randint(10000,900000)}
            elif t=='large-sub':
                b=rng.randint(10000,900000); p={'type':t,'a':rng.randint(b,9000000),'b':b}
            elif t=='division':
                b=rng.randint(10,99); p={'type':t,'a':b*rng.randint(10,999),'b':b}
            elif t=='decimal-add': p={'type':t,'a100':rng.randint(1,999),'b100':rng.randint(1,999)}
            else:
                e=rng.randint(2,9); p={'type':t,'a':rng.randint(10,80),'b':rng.randint(2,12),'c':rng.randint(2,9),'d':e*rng.randint(1,12),'e':e}
            key=json.dumps(p,sort_keys=True)
            if key not in seen: seen.add(key); break
        p['answer']=independent_answer(p); out.append(p)
    assert Counter(p['type'] for p in out)==Counter({t:4 for t in TYPES})
    return out

def dec(v): return f'{v//100}.{v%100:02d}'
def problem_text(p):
    t=p['type']
    if t=='large-add': return f"{p['a']:,} + {p['b']:,} = □"
    if t=='large-sub': return f"{p['a']:,} − {p['b']:,} = □"
    if t=='division': return f"{p['a']:,} ÷ {p['b']} = □"
    if t=='decimal-add': return f"{dec(p['a100'])} + {dec(p['b100'])} = □"
    return f"{p['a']} + {p['b']} × {p['c']} − {p['d']} ÷ {p['e']} = □"
def answer_text(p): return dec(independent_answer(p)) if p['type']=='decimal-add' else f"{independent_answer(p):,}"

def render_pdf(path,problems):
    c=canvas.Canvas(str(path),pagesize=A4); w,h=A4
    for answers in (False,True):
        c.setFillColor(colors.black); c.setFont(FONT,18); c.drawString(45,h-55,TITLE); c.setFont(FONT,10); c.drawRightString(w-45,h-52,'こたえ' if answers else 'もんだい'); c.drawString(45,h-78,'なまえ：____________________________')
        for i,p in enumerate(problems):
            x=45+(i//10)*275; y=h-120-(i%10)*63; c.setFillColor(colors.black); c.setFont(FONT,9.5); c.drawString(x,y,str(i+1)); c.drawString(x+24,y,problem_text(p))
            if answers: c.setFillColor(colors.red); c.drawString(x+24,y-19,f'こたえ：{answer_text(p)}')
        if not answers: c.showPage()
    c.save()

def publish(repo_root):
    root=Path(repo_root); cp=root/'worksheets'/'catalog.json'; catalog=json.loads(cp.read_text(encoding='utf-8')); out=root/'materials'/'worksheets'/'elementary'/'grade-04'; out.mkdir(parents=True,exist_ok=True); ids={e['id'] for e in catalog}; n=0
    for variant,seed in enumerate(SEEDS,1):
        wid=f'e4-{SKILL}-{variant:02d}'
        if wid in ids: continue
        problems=generate(seed); h=normalized_hash(problems); assert all(e['content_hash']!=h for e in catalog); fn=f'{wid}.pdf'; render_pdf(out/fn,problems)
        catalog.append({'id':wid,'school_level':'elementary','grade':4,'subject':'算数','unit':UNIT_TITLE,'skill':SKILL,'problem_count':20,'seed':seed,'variant':variant,'title':f'{TITLE} {variant:02d}','description':'大きな整数の加減、2桁の除数による除法、小数加法、四則混合を各4問ずつ組み合わせた20問の総復習です。2ページ目は同じ配置に赤字で解答を加えています。','url':f'materials/worksheets/elementary/grade-04/{fn}','content_hash':h,'difficulty':'basic','worksheet_series':'review','worksheet_format':'mixed-calculation-review','answer_type':'numeric'}); ids.add(wid); n+=1
    validate_catalog(catalog,root); cp.write_text(json.dumps(catalog,ensure_ascii=False,indent=2)+'\n',encoding='utf-8'); print(f'published {n} grade-4 review worksheets')

if __name__=='__main__': publish(sys.argv[1] if len(sys.argv)>1 else '.')
