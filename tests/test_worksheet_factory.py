import importlib.util
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

print('worksheet factory tests: OK')
