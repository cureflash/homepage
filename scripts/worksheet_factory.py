import hashlib, json, random, sys
from pathlib import Path
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.cidfonts import UnicodeCIDFont
from reportlab.pdfgen import canvas

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
    t=p['type']
    if t=='compose': return p['total']-p['known']
    if t=='add': return p['a']+p['b']
    if t=='sub': return p['a']-p['b']
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
    raise ValueError(k)


def generate(skill, seed, count=20):
    spec=SKILLS[skill]; rng=random.Random(seed); out=[]
    while len(out)<count:
        out.append(make_problem(rng,spec))
    validate(out)
    return out


def validate(problems):
    for p in problems:
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
    norm=[{k:v for k,v in p.items() if k!='answer'} for p in problems]
    return hashlib.sha256(json.dumps(norm,sort_keys=True,separators=(',',':')).encode()).hexdigest()


def text_problem(p):
    if p['type']=='compose': return f"{p['total']} = {p['known']} + □"
    if p['type']=='add': return f"{p['a']} + {p['b']} = □"
    return f"{p['a']} - {p['b']} = □"


def render_pdf(path, title, problems):
    c=canvas.Canvas(str(path), pagesize=A4)
    w,h=A4
    def page_header(label):
        c.setFont(FONT,18); c.drawString(45,h-55,title)
        c.setFont(FONT,10); c.drawRightString(w-45,h-52,label)
        c.setFont(FONT,10); c.drawString(45,h-78,'なまえ：____________________________')
    page_header('もんだい')
    c.setFont(FONT,14)
    for i,p in enumerate(problems):
        col=i//10; row=i%10
        x=55+col*260; y=h-120-row*63
        c.drawString(x,y,f"{i+1:02d}. {text_problem(p)}")
    c.showPage(); page_header('こたえ'); c.setFont(FONT,14)
    for i,p in enumerate(problems):
        col=i//10; row=i%10
        x=55+col*260; y=h-120-row*63
        c.drawString(x,y,f"{i+1:02d}. {p['answer']}")
    c.save()


def main(outdir):
    outdir=Path(outdir); outdir.mkdir(parents=True,exist_ok=True)
    catalog=[]; hashes=set()
    for skill in SKILLS:
        for variant,seed in enumerate((101,), start=1):
            problems=generate(skill, seed, 20)
            h=normalized_hash(problems)
            assert h not in hashes, 'duplicate worksheet content'; hashes.add(h)
            wid=f"e1-{skill}-{variant:02d}"
            filename=f"{wid}.pdf"
            render_pdf(outdir/filename, SKILLS[skill]['title'], problems)
            catalog.append({
                'id':wid,'school_level':'elementary','grade':1,'subject':'算数',
                'unit':SKILLS[skill]['title'],'skill':skill,'problem_count':20,
                'seed':seed,'variant':variant,'title':f"{SKILLS[skill]['title']} {variant:02d}",
                'description':'基礎計算を20問くり返すプリントです。2ページ目に解答があります。',
                'url':f"materials/worksheets/elementary/grade-01/{filename}",
                'content_hash':h,'difficulty':'basic','worksheet_series':'focused','answer_type':'numeric'
            })
    validate_catalog(catalog)
    (outdir/'catalog.json').write_text(json.dumps(catalog,ensure_ascii=False,indent=2)+'\n', encoding='utf-8')
    print(f'generated {len(catalog)} worksheets')


if __name__=='__main__': main(sys.argv[1])
