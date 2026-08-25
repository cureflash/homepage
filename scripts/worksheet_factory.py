import hashlib, json, random, sys
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.cidfonts import UnicodeCIDFont
from reportlab.pdfgen import canvas

try:
    from scripts.science_worksheet_helpers import (
        SCIENCE_PROBLEM_TYPES,
        compute_science_answer,
        science_answer_text,
        text_science_problem,
        validate_science_problem,
    )
except ModuleNotFoundError:
    from science_worksheet_helpers import (
        SCIENCE_PROBLEM_TYPES,
        compute_science_answer,
        science_answer_text,
        text_science_problem,
        validate_science_problem,
    )

pdfmetrics.registerFont(UnicodeCIDFont('HeiseiKakuGo-W5'))
FONT='HeiseiKakuGo-W5'

SKILLS = {
    'compose-5': {'title':'5までの数の合成・分解', 'kind':'compose', 'max':5},
    'compose-10': {'title':'10までの数の合成・分解', 'kind':'compose', 'max':10},
    'add-10': {'title':'10までのたし算', 'kind':'add', 'max':10},
    'sub-10': {'title':'10までのひき算', 'kind':'sub', 'max':10},
    'add-20-no-carry': {'title':'20までの繰り上がりなしのたし算', 'kind':'add-20-no-carry'},
    'sub-20-no-borrow': {'title':'20までの繰り下がりなしのひき算', 'kind':'sub-20-no-borrow'},
    'add-20-carry': {'title':'20までの繰り上がりありのたし算', 'kind':'add-20-carry'},
    'sub-20-borrow': {'title':'20までの繰り下がりありのひき算', 'kind':'sub-20-borrow'},
    'add-1digit-random': {'title':'1桁 + 1桁 ランダム反復', 'kind':'add-1digit-random'},
    'mixed-add-sub-20': {'title':'20までのたし算・ひき算混合', 'kind':'mixed-add-sub-20'},
    'missing-number-add-sub': {'title':'□に入る数（加減の簡単な逆算）', 'kind':'missing-number-add-sub'},
    'compare-2digit': {'title':'2桁の数の大小比較', 'kind':'compare-2digit', 'answer_type':'accepted-set'},
    'number-before-after': {'title':'数の並び・前後の数', 'kind':'number-before-after'},
    'two-digit-one-digit-mixed': {'title':'簡単な2桁 + 1桁 / 2桁 - 1桁', 'kind':'two-digit-one-digit-mixed'},
    'grade1-review': {'title':'小学1年 算数 総復習', 'kind':'grade1-review', 'worksheet_series':'review'},
}

CATALOG_REQUIRED_FIELDS = {
    'id', 'school_level', 'grade', 'subject', 'unit', 'skill',
    'problem_count', 'seed', 'variant', 'title', 'description', 'url',
    'content_hash', 'difficulty', 'worksheet_series', 'answer_type',
}
SCHOOL_LEVELS = {'elementary', 'junior-high', 'high-school'}
SCIENCE_FIELDS = {'physics', 'chemistry', 'biology', 'earth-science'}
SCIENCE_FORMAL_COURSES = {
    '物理基礎', '物理', '化学基礎', '化学',
    '生物基礎', '生物', '地学基礎', '地学',
}
WORKSHEET_SERIES = {'focused', 'mixed', 'review'}
ANSWER_TYPES = {'numeric', 'accepted-set'}


def numeric_answer(value, tolerance=0, unit=None):
    spec = {'type':'numeric', 'value':value, 'tolerance':tolerance}
    if unit is not None:
        spec['unit'] = unit
    validate_answer_spec(spec)
    return spec


def accepted_answer(*values):
    spec = {'type':'accepted-set', 'values':list(values)}
    validate_answer_spec(spec)
    return spec


def validate_answer_spec(spec):
    assert isinstance(spec, dict), 'answer spec must be a dict'
    answer_type = spec.get('type')
    assert answer_type in ANSWER_TYPES, f"unsupported answer type: {answer_type}"
    if answer_type == 'numeric':
        value = spec.get('value')
        tolerance = spec.get('tolerance', 0)
        assert isinstance(value, (int, float)) and not isinstance(value, bool), 'numeric answer value must be a number'
        assert isinstance(tolerance, (int, float)) and not isinstance(tolerance, bool), 'numeric tolerance must be a number'
        assert tolerance >= 0, 'numeric tolerance must be non-negative'
    else:
        values = spec.get('values')
        assert isinstance(values, list) and values, 'accepted-set answer must contain at least one value'
        assert all(isinstance(value, str) and value.strip() for value in values), 'accepted-set values must be non-empty strings'
        normalized = [value.strip() for value in values]
        assert len(normalized) == len(set(normalized)), 'accepted-set values must be unique'


def answer_matches(spec, candidate):
    validate_answer_spec(spec)
    if spec['type'] == 'numeric':
        if not isinstance(candidate, (int, float)) or isinstance(candidate, bool):
            return False
        return abs(candidate - spec['value']) <= spec.get('tolerance', 0)
    if not isinstance(candidate, str):
        return False
    return candidate.strip() in {value.strip() for value in spec['values']}


def compute_answer(p):
    if p.get('type') in SCIENCE_PROBLEM_TYPES:
        return compute_science_answer(p)
    t=p['type']
    if t=='compose': return p['total']-p['known']
    if t=='add': return p['a']+p['b']
    if t=='sub': return p['a']-p['b']
    if t=='missing-add-left': return p['total']-p['known']
    if t=='missing-add-right': return p['total']-p['known']
    if t=='missing-sub-subtrahend': return p['minuend']-p['result']
    if t=='compare': return '=' if p['a']==p['b'] else ('<' if p['a']<p['b'] else '>')
    if t=='before': return p['number']-1
    if t=='after': return p['number']+1
    raise ValueError(t)


def make_problem(rng, spec):
    k=spec['kind']
    if k=='compose':
        m=spec['max']; total=rng.randint(2,m); known=rng.randint(0,total)
        return {'type':'compose','total':total,'known':known,'answer':total-known}
    if k=='add':
        m=spec['max']; a=rng.randint(0,m); b=rng.randint(0,m-a)
        return {'type':'add','a':a,'b':b,'answer':a+b}
    if k=='sub':
        m=spec['max']; a=rng.randint(0,m); b=rng.randint(0,a)
        return {'type':'sub','a':a,'b':b,'answer':a-b}
    if k=='add-20-no-carry':
        a=rng.randint(10,19)
        b=rng.randint(0,min(9-(a%10),20-a))
        return {'type':'add','a':a,'b':b,'answer':a+b}
    if k=='sub-20-no-borrow':
        a=rng.randint(10,20)
        b=rng.randint(0,min(9,a%10))
        return {'type':'sub','a':a,'b':b,'answer':a-b}
    if k=='add-20-carry':
        a=rng.randint(2,9)
        b=rng.randint(11-a,9)
        return {'type':'add','a':a,'b':b,'answer':a+b}
    if k=='sub-20-borrow':
        a=rng.randint(11,18)
        ones=a%10
        b=rng.randint(ones+1,9)
        return {'type':'sub','a':a,'b':b,'answer':a-b}
    if k=='add-1digit-random':
        a=rng.randint(0,9); b=rng.randint(0,9)
        return {'type':'add','a':a,'b':b,'answer':a+b}
    if k=='mixed-add-sub-20':
        if rng.choice((True,False)):
            a=rng.randint(0,20); b=rng.randint(0,20-a)
            return {'type':'add','a':a,'b':b,'answer':a+b}
        a=rng.randint(0,20); b=rng.randint(0,a)
        return {'type':'sub','a':a,'b':b,'answer':a-b}
    if k=='missing-number-add-sub':
        form=rng.choice(('add-left','add-right','sub-subtrahend'))
        if form=='add-left':
            answer=rng.randint(0,9); known=rng.randint(0,9); total=answer+known
            return {'type':'missing-add-left','known':known,'total':total,'answer':answer}
        if form=='add-right':
            known=rng.randint(0,9); answer=rng.randint(0,9); total=known+answer
            return {'type':'missing-add-right','known':known,'total':total,'answer':answer}
        minuend=rng.randint(0,20); answer=rng.randint(0,min(9,minuend)); result=minuend-answer
        return {'type':'missing-sub-subtrahend','minuend':minuend,'result':result,'answer':answer}
    if k=='compare-2digit':
        a=rng.randint(10,99)
        relation=rng.choice(('less','greater','equal'))
        if relation=='equal':
            b=a
        elif relation=='less':
            if a==99: a=rng.randint(10,98)
            b=rng.randint(a+1,99)
        else:
            if a==10: a=rng.randint(11,99)
            b=rng.randint(10,a-1)
        answer='=' if a==b else ('<' if a<b else '>')
        return {'type':'compare','a':a,'b':b,'answer':answer}
    if k=='number-before-after':
        number=rng.randint(11,98)
        t=rng.choice(('before','after'))
        answer=number-1 if t=='before' else number+1
        return {'type':t,'number':number,'answer':answer}
    if k=='two-digit-one-digit-mixed':
        if rng.choice((True,False)):
            tens=rng.randint(1,9); ones=rng.randint(0,8); a=10*tens+ones
            b=rng.randint(1,9-ones)
            return {'type':'add','a':a,'b':b,'answer':a+b}
        tens=rng.randint(1,9); ones=rng.randint(1,9); a=10*tens+ones
        b=rng.randint(1,ones)
        return {'type':'sub','a':a,'b':b,'answer':a-b}
    if k=='grade1-review':
        review_spec=rng.choice((
            {'kind':'add','max':10},
            {'kind':'sub','max':10},
            {'kind':'add-20-carry'},
            {'kind':'sub-20-borrow'},
            {'kind':'missing-number-add-sub'},
            {'kind':'number-before-after'},
            {'kind':'two-digit-one-digit-mixed'},
        ))
        return make_problem(rng, review_spec)
    raise ValueError(k)


def generate(skill, seed, count=20):
    spec=SKILLS[skill]; rng=random.Random(seed); out=[]
    while len(out)<count:
        out.append(make_problem(rng,spec))
    validate(out)
    return out


def validate(problems):
    for p in problems:
        if p.get('type') in SCIENCE_PROBLEM_TYPES:
            validate_science_problem(p)
            validate_answer_spec(p['answer_spec'])
        else:
            assert compute_answer(p)==p['answer']


def validate_catalog(catalog, repo_root=None):
    seen_ids=set(); seen_urls=set(); seen_hashes=set()
    for entry in catalog:
        missing=CATALOG_REQUIRED_FIELDS-entry.keys()
        assert not missing, f"missing catalog fields: {sorted(missing)}"
        assert entry['id'] not in seen_ids, f"duplicate worksheet id: {entry['id']}"
        assert entry['url'] not in seen_urls, f"duplicate worksheet url: {entry['url']}"
        assert entry['content_hash'] not in seen_hashes, f"duplicate worksheet content: {entry['id']}"
        seen_ids.add(entry['id']); seen_urls.add(entry['url']); seen_hashes.add(entry['content_hash'])
        assert entry['school_level'] in SCHOOL_LEVELS, f"invalid school_level: {entry['id']}"
        assert isinstance(entry['problem_count'], int) and entry['problem_count'] > 0
        assert entry['difficulty'], f"missing difficulty: {entry['id']}"
        assert entry['worksheet_series'] in WORKSHEET_SERIES, f"invalid worksheet_series: {entry['id']}"
        assert entry['answer_type'] in ANSWER_TYPES, f"invalid answer_type: {entry['id']}"
        if entry['subject']=='理科':
            for field in ('science_field','worksheet_mode'):
                assert entry.get(field), f"science catalog entry missing {field}: {entry['id']}"
            assert entry['science_field'] in SCIENCE_FIELDS, f"invalid science_field: {entry['id']}"
            if entry['school_level']=='junior-high':
                assert entry['grade'] in (1,2,3), f"junior-high science grade must be 1-3: {entry['id']}"
            if entry['school_level']=='high-school':
                formal_course=entry.get('formal_course')
                assert formal_course in SCIENCE_FORMAL_COURSES, f"invalid or missing formal_course: {entry['id']}"
        if repo_root is not None:
            assert (Path(repo_root)/entry['url']).is_file(), f"missing worksheet file: {entry['url']}"


def normalized_hash(problems):
    norm=[{k:v for k,v in p.items() if k not in ('answer','answer_spec')} for p in problems]
    return hashlib.sha256(json.dumps(norm,sort_keys=True,separators=(',',':'),ensure_ascii=False).encode()).hexdigest()


def text_problem(p):
    if p.get('type') in SCIENCE_PROBLEM_TYPES:
        return text_science_problem(p)
    if p['type']=='compose': return f"{p['total']} = {p['known']} + □"
    if p['type']=='add': return f"{p['a']} + {p['b']} = □"
    if p['type']=='sub': return f"{p['a']} - {p['b']} = □"
    if p['type']=='missing-add-left': return f"□ + {p['known']} = {p['total']}"
    if p['type']=='missing-add-right': return f"{p['known']} + □ = {p['total']}"
    if p['type']=='missing-sub-subtrahend': return f"{p['minuend']} - □ = {p['result']}"
    if p['type']=='compare': return f"{p['a']}  □  {p['b']}"
    if p['type']=='before': return f"{p['number']} の まえの かずは □"
    if p['type']=='after': return f"{p['number']} の つぎの かずは □"
    raise ValueError(p['type'])


def answer_text(p):
    if p.get('type') in SCIENCE_PROBLEM_TYPES:
        return science_answer_text(p)
    return str(compute_answer(p))


def problem_number_label(number):
    return str(number)


def draw_numbered_problem(c, x, y, number, problem, answer=None):
    c.setFillColor(colors.black)
    c.drawString(x, y, problem_number_label(number))
    c.drawString(x + 28, y, text_problem(problem))
    if answer is not None:
        c.setFillColor(colors.red)
        c.drawString(x + 28, y - 20, f"こたえ：{answer}")
        c.setFillColor(colors.black)


def render_pdf(path, title, problems):
    validate(problems)
    c=canvas.Canvas(str(path), pagesize=A4)
    w,h=A4
    def page_header(label):
        c.setFillColor(colors.black)
        c.setFont(FONT,18); c.drawString(45,h-55,title)
        c.setFont(FONT,10); c.drawRightString(w-45,h-52,label)
        c.setFont(FONT,10); c.drawString(45,h-78,'なまえ：____________________________')
    page_header('もんだい')
    c.setFont(FONT,14)
    for i,p in enumerate(problems):
        col=i//10; row=i%10
        x=55+col*260; y=h-120-row*63
        draw_numbered_problem(c, x, y, i+1, p)
    c.showPage(); page_header('こたえ'); c.setFont(FONT,14)
    for i,p in enumerate(problems):
        col=i//10; row=i%10
        x=55+col*260; y=h-120-row*63
        draw_numbered_problem(c, x, y, i+1, p, answer_text(p))
    c.save()


def main(outdir):
    outdir=Path(outdir); outdir.mkdir(parents=True,exist_ok=True)
    catalog=[]; hashes=set()
    for skill,spec in SKILLS.items():
        for variant,seed in enumerate((101,), start=1):
            problems=generate(skill, seed, 20)
            h=normalized_hash(problems)
            assert h not in hashes, 'duplicate worksheet content'; hashes.add(h)
            wid=f"e1-{skill}-{variant:02d}"
            filename=f"{wid}.pdf"
            render_pdf(outdir/filename, spec['title'], problems)
            catalog.append({
                'id':wid,'school_level':'elementary','grade':1,'subject':'算数',
                'unit':spec['title'],'skill':skill,'problem_count':20,
                'seed':seed,'variant':variant,'title':f"{spec['title']} {variant:02d}",
                'description':'基礎練習を20問くり返すプリントです。2ページ目は元の問題に赤字で解答を加えています。',
                'url':f"materials/worksheets/elementary/grade-01/{filename}",
                'content_hash':h,'difficulty':'basic',
                'worksheet_series':spec.get('worksheet_series','focused'),
                'answer_type':spec.get('answer_type','numeric')
            })
    validate_catalog(catalog)
    (outdir/'catalog.json').write_text(json.dumps(catalog,ensure_ascii=False,indent=2)+'\n', encoding='utf-8')
    print(f'generated {len(catalog)} worksheets')


if __name__=='__main__': main(sys.argv[1])
