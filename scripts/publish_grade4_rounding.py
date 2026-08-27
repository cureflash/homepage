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

SKILL='rounding-estimation'
TITLE='概数・四捨五入'
UNIT_TITLE='概数'
SEEDS=(9201,9302,9403)
PROBLEM_COUNT=20
PLACES=((10,'十'),(100,'百'),(1000,'千'),(10000,'一万'),(100000,'十万'))


def independent_answer(problem):
    place=problem['place']; number=problem['number']
    return ((number + place//2)//place)*place


def validate_problem(problem):
    assert problem['place'] in {p for p,_ in PLACES}
    assert 100 <= problem['number'] <= 9_999_999
    assert independent_answer(problem)==problem['answer']
    assert problem['answer'] % problem['place'] == 0


def generate(seed):
    rng=random.Random(seed); problems=[]; seen=set()
    places=[p for p,_ in PLACES]*4; rng.shuffle(places)
    for place in places:
        while True:
            number=rng.randint(max(100,place),9_999_999)
            if number % place == 0:
                continue
            key=(number,place)
            if key not in seen:
                seen.add(key); break
        problem={'number':number,'place':place}
        problem['answer']=independent_answer(problem)
        validate_problem(problem); problems.append(problem)
    return problems


def label(place): return dict(PLACES)[place]

def problem_text(problem): return f"{problem['number']:,} を {label(problem['place'])}の位までの概数にすると □"

def render_pdf(path,title,problems):
    c=canvas.Canvas(str(path),pagesize=A4); w,h=A4
    for answer_mode in (False,True):
        c.setFillColor(colors.black); c.setFont(FONT,18); c.drawString(45,h-55,title)
        c.setFont(FONT,10); c.drawRightString(w-45,h-52,'こたえ' if answer_mode else 'もんだい'); c.drawString(45,h-78,'なまえ：____________________________')
        for index,problem in enumerate(problems):
            x=45+(index//10)*275; y=h-120-(index%10)*63
            c.setFillColor(colors.black); c.setFont(FONT,9); c.drawString(x,y,str(index+1)); c.drawString(x+24,y,problem_text(problem))
            if answer_mode:
                c.setFillColor(colors.red); c.drawString(x+24,y-19,f"こたえ：{independent_answer(problem):,}")
        if not answer_mode: c.showPage()
    c.save()


def publish(repo_root):
    root=Path(repo_root); catalog_path=root/'worksheets'/'catalog.json'; catalog=json.loads(catalog_path.read_text(encoding='utf-8'))
    out=root/'materials'/'worksheets'/'elementary'/'grade-04'; out.mkdir(parents=True,exist_ok=True); existing={e['id'] for e in catalog}; published=0
    for variant,seed in enumerate(SEEDS,1):
        wid=f'e4-{SKILL}-{variant:02d}'
        if wid in existing: continue
        problems=generate(seed); content_hash=normalized_hash(problems); assert all(e['content_hash']!=content_hash for e in catalog)
        filename=f'{wid}.pdf'; render_pdf(out/filename,TITLE,problems)
        catalog.append({'id':wid,'school_level':'elementary','grade':4,'subject':'算数','unit':UNIT_TITLE,'skill':SKILL,'problem_count':PROBLEM_COUNT,'seed':seed,'variant':variant,'title':f'{TITLE} {variant:02d}','description':'整数を指定された位まで四捨五入して概数にする20問です。2ページ目は同じ配置に赤字で解答を加えています。','url':f'materials/worksheets/elementary/grade-04/{filename}','content_hash':content_hash,'difficulty':'basic','worksheet_series':'focused','worksheet_format':'rounding-horizontal','answer_type':'numeric'})
        existing.add(wid); published+=1
    validate_catalog(catalog,root); catalog_path.write_text(json.dumps(catalog,ensure_ascii=False,indent=2)+'\n',encoding='utf-8'); print(f'published {published} grade-4 rounding worksheets')

if __name__=='__main__': publish(sys.argv[1] if len(sys.argv)>1 else '.')
