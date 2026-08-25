import importlib.util
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MODULE = ROOT / 'scripts' / 'worksheet_factory.py'
spec = importlib.util.spec_from_file_location('wf', MODULE)
wf = importlib.util.module_from_spec(spec)
spec.loader.exec_module(wf)

for skill in wf.SKILLS:
    a = wf.generate(skill, 101, 20)
    b = wf.generate(skill, 101, 20)
    assert a == b
    wf.validate(a)
    for problem in a:
        assert wf.compute_answer(problem) == problem['answer']

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
