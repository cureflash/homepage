import importlib.util
import json
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
MODULE = ROOT / 'scripts' / 'worksheet_factory.py'
SCIENCE_MODULE = ROOT / 'scripts' / 'science_worksheet_helpers.py'
spec = importlib.util.spec_from_file_location('wf', MODULE)
wf = importlib.util.module_from_spec(spec)
spec.loader.exec_module(wf)
science_spec = importlib.util.spec_from_file_location('science_helpers', SCIENCE_MODULE)
science = importlib.util.module_from_spec(science_spec)
science_spec.loader.exec_module(science)

for skill in wf.SKILLS:
    for seed in (101, 202, 303):
        a = wf.generate(skill, seed, 20)
        b = wf.generate(skill, seed, 20)
        assert a == b
        wf.validate(a)
        for problem in a:
            assert wf.compute_answer(problem) == problem['answer']

        if skill == 'add-20-no-carry':
            assert all(10 <= p['a'] <= 19 for p in a)
            assert all(0 <= p['b'] <= 9 for p in a)
            assert all(p['a'] + p['b'] <= 20 for p in a)
            assert all((p['a'] % 10) + p['b'] < 10 for p in a)
        elif skill == 'sub-20-no-borrow':
            assert all(10 <= p['a'] <= 20 for p in a)
            assert all(0 <= p['b'] <= 9 for p in a)
            assert all((p['a'] % 10) >= p['b'] for p in a)
        elif skill == 'add-20-carry':
            assert all(2 <= p['a'] <= 9 and 2 <= p['b'] <= 9 for p in a)
            assert all(11 <= p['a'] + p['b'] <= 18 for p in a)
        elif skill == 'sub-20-borrow':
            assert all(11 <= p['a'] <= 18 for p in a)
            assert all(p['b'] > p['a'] % 10 for p in a)
            assert all(0 <= p['answer'] <= 9 for p in a)

assert wf.problem_number_label(1) == '1'
assert wf.problem_number_label(9) == '9'
assert wf.problem_number_label(10) == '10'
assert not wf.problem_number_label(1).startswith('0')
assert '.' not in wf.problem_number_label(1)
renderer_source = MODULE.read_text(encoding='utf-8')
assert 'colors.red' in renderer_source
assert 'draw_numbered_problem' in renderer_source
assert 'problem_page_chunks' in renderer_source
assert '{i+1:02d}.' not in renderer_source

catalog = json.loads((ROOT / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
wf.validate_catalog(catalog, ROOT)

numeric = wf.numeric_answer(12.5, tolerance=0.1, unit='m/s')
assert wf.answer_matches(numeric, 12.5)
assert wf.answer_matches(numeric, 12.59)
assert not wf.answer_matches(numeric, 12.7)
assert not wf.answer_matches(numeric, '12.5')

accepted = wf.accepted_answer('塩化銀', 'AgCl')
assert wf.answer_matches(accepted, '塩化銀')
assert wf.answer_matches(accepted, ' AgCl ')
assert not wf.answer_matches(accepted, '塩化ナトリウム')

science_entry = {
    'id':'science-test','school_level':'junior-high','grade':1,'subject':'理科',
    'science_field':'physics','worksheet_mode':'calculation','unit':'力','skill':'pressure-basic',
    'problem_count':20,'seed':1,'variant':1,'title':'test','description':'test',
    'url':catalog[0]['url'],'content_hash':'science-test-hash','difficulty':'basic',
    'worksheet_series':'focused','answer_type':'numeric'
}
wf.validate_catalog([science_entry], ROOT)

retrieval_entry = dict(science_entry)
retrieval_entry.update({
    'id':'science-retrieval-test','science_field':'chemistry','worksheet_mode':'retrieval',
    'unit':'物質','skill':'formula-name-pairs','content_hash':'science-retrieval-test-hash',
    'worksheet_series':'mixed','answer_type':'accepted-set'
})
wf.validate_catalog([retrieval_entry], ROOT)

for missing_field in ('science_field', 'worksheet_mode'):
    invalid_science = dict(science_entry)
    del invalid_science[missing_field]
    try:
        wf.validate_catalog([invalid_science], ROOT)
        raise AssertionError(f'{missing_field} validation did not fail')
    except AssertionError as exc:
        assert missing_field in str(exc)

invalid_series = dict(science_entry)
invalid_series['worksheet_series'] = 'speed'
try:
    wf.validate_catalog([invalid_series], ROOT)
    raise AssertionError('worksheet_series validation did not fail')
except AssertionError as exc:
    assert 'worksheet_series' in str(exc)

high_school_science = dict(science_entry)
high_school_science.update({
    'id':'science-high-school-test','school_level':'high-school','grade':None,
    'formal_course':'物理基礎','content_hash':'science-high-school-test-hash'
})
wf.validate_catalog([high_school_science], ROOT)

del high_school_science['formal_course']
try:
    wf.validate_catalog([high_school_science], ROOT)
    raise AssertionError('formal_course validation did not fail')
except AssertionError as exc:
    assert 'formal_course' in str(exc)

listing = (ROOT / 'worksheets' / 'index.html').read_text(encoding='utf-8')
assert 'id="subject"' in listing
assert 'id="field"' in listing
assert 'formal_course' in listing
assert "params.get('subject')" in listing

pressure_spec = {
    'id':'pressure-test',
    'relation':'product',
    'result':'force',
    'inputs':['pressure','area'],
    'variables':{
        'force':{'label':'F','unit':'N'},
        'pressure':{'label':'p','unit':'Pa','values':[2,3,4,5,6,8,10]},
        'area':{'label':'A','unit':'m²','values':[1,2,3,4,5]},
    },
}
formula_a = science.generate_formula_drill(pressure_spec, 4101, 20, solve_for='force')
formula_b = science.generate_formula_drill(pressure_spec, 4101, 20, solve_for='force')
formula_c = science.generate_formula_drill(pressure_spec, 4102, 20, solve_for='force')
assert formula_a == formula_b
assert wf.normalized_hash(formula_a) == wf.normalized_hash(formula_b)
assert wf.normalized_hash(formula_a) != wf.normalized_hash(formula_c)
wf.validate(formula_a)
assert all(p['answer_spec']['type'] == 'numeric' for p in formula_a)
assert all(wf.compute_answer(p) == p['answer'] for p in formula_a)
assert all('求めなさい' in wf.text_problem(p) for p in formula_a)

reverse_formula = science.generate_formula_drill(pressure_spec, 4201, 20, solve_for='pressure')
wf.validate(reverse_formula)
assert all(abs(p['answer'] - p['known']['force'] / p['known']['area']) < 1e-12 for p in reverse_formula)

broken_formula = dict(formula_a[0])
broken_formula['answer'] = broken_formula['answer'] + 1
try:
    science.validate_science_problem(broken_formula)
    raise AssertionError('independent science numerical validation did not fail')
except AssertionError:
    pass

pair_items = [
    {'left':'酸素','right':['O2','O₂']},
    {'left':'水素','right':['H2','H₂']},
    {'left':'二酸化炭素','right':['CO2','CO₂']},
    {'left':'アンモニア','right':['NH3','NH₃']},
]
pair_base = {'items':pair_items,'left_label':'物質名','right_label':'化学式'}
for mode in ('forward','reverse','matching'):
    retrieval = science.generate_retrieval_drill({**pair_base,'mode':mode}, 5100, 12)
    assert retrieval == science.generate_retrieval_drill({**pair_base,'mode':mode}, 5100, 12)
    wf.validate(retrieval)
    assert all(p['answer_spec']['type'] == 'accepted-set' for p in retrieval)

classification = science.generate_retrieval_drill({
    'mode':'classify',
    'items':[
        {'item':'花こう岩','category':'火成岩'},
        {'item':'砂岩','category':'堆積岩'},
        {'item':'石灰岩','category':'堆積岩'},
    ],
}, 5201, 12)
wf.validate(classification)

tf = science.generate_retrieval_drill({
    'mode':'tf',
    'items':[
        {'item':'酸素','property':'ものを燃えやすくする'},
        {'item':'二酸化炭素','property':'石灰水を白くにごらせる'},
        {'item':'水素','property':'燃えると水ができる'},
    ],
}, 5202, 12)
wf.validate(tf)
assert {p['answer'] for p in tf} <= {'○','×'}

fill = science.generate_retrieval_drill({
    'mode':'fill',
    'items':[
        {'template':'水は標準的な気圧のもとで{answer}℃で沸騰する。','answer':'100'},
        {'template':'純粋な水は{answer}℃で凍る。','answer':'0'},
    ],
}, 5203, 12)
wf.validate(fill)

ordering = science.generate_retrieval_drill({
    'mode':'order',
    'items':[
        {'steps':['受精','細胞分裂','胚の形成']},
        {'steps':['刺激','感覚器官','中枢神経','運動器官']},
    ],
}, 5204, 12)
wf.validate(ordering)

broken_retrieval = dict(classification[0])
broken_retrieval['answer_spec'] = {'type':'accepted-set','values':['誤答']}
try:
    science.validate_science_problem(broken_retrieval)
    raise AssertionError('independent science retrieval validation did not fail')
except AssertionError:
    pass

with tempfile.TemporaryDirectory() as tmp:
    formula_pdf = Path(tmp) / 'formula.pdf'
    retrieval_pdf = Path(tmp) / 'retrieval.pdf'
    wf.render_pdf(formula_pdf, '理科 数式問題テスト', formula_a)
    wf.render_pdf(retrieval_pdf, '理科 暗記問題テスト', classification + tf[:8])
    assert formula_pdf.read_bytes().startswith(b'%PDF') and formula_pdf.stat().st_size > 1000
    assert retrieval_pdf.read_bytes().startswith(b'%PDF') and retrieval_pdf.stat().st_size > 1000

print('worksheet factory tests: OK')
