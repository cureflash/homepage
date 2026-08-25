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

catalog = json.loads((ROOT / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
wf.validate_catalog(catalog, ROOT)

science_entry = {
    'id':'science-test','school_level':'junior-high','grade':1,'subject':'理科',
    'science_field':'physics','worksheet_mode':'calculation','unit':'力','skill':'pressure-basic',
    'problem_count':20,'seed':1,'variant':1,'title':'test','description':'test',
    'url':catalog[0]['url'],'content_hash':'science-test-hash'
}
wf.validate_catalog([science_entry], ROOT)

invalid_science = dict(science_entry)
del invalid_science['science_field']
try:
    wf.validate_catalog([invalid_science], ROOT)
    raise AssertionError('science_field validation did not fail')
except AssertionError as exc:
    assert 'science_field' in str(exc)

print('worksheet factory tests: OK')
