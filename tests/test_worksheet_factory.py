import importlib.util
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MODULE = ROOT / 'scripts' / 'worksheet_factory.py'
spec = importlib.util.spec_from_file_location('wf', MODULE)
wf = importlib.util.module_from_spec(spec)
spec.loader.exec_module(wf)

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
assert 'draw_numbered_problem(c, x, y, i+1, p, compute_answer(p))' in renderer_source
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

print('worksheet factory tests: OK')
