import importlib.util
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
MODULE = ROOT / 'scripts' / 'worksheet_factory.py'
spec = importlib.util.spec_from_file_location('wf_grade1', MODULE)
wf = importlib.util.module_from_spec(spec)
spec.loader.exec_module(wf)

NEW_SKILLS = (
    'compare-2digit',
    'number-before-after',
    'two-digit-one-digit-mixed',
    'grade1-review',
)

for skill in NEW_SKILLS:
    hashes = set()
    for seed in (101, 202, 303):
        a = wf.generate(skill, seed, 20)
        b = wf.generate(skill, seed, 20)
        assert a == b
        wf.validate(a)
        assert all(wf.compute_answer(problem) == problem['answer'] for problem in a)
        problem_hash = wf.normalized_hash(a)
        assert problem_hash not in hashes
        hashes.add(problem_hash)

compare = wf.generate('compare-2digit', 101, 20)
assert all(10 <= p['a'] <= 99 and 10 <= p['b'] <= 99 for p in compare)
assert all(p['answer'] in {'<', '>', '='} for p in compare)
assert all(wf.compute_answer(p) == p['answer'] for p in compare)

before_after = wf.generate('number-before-after', 101, 20)
assert all(11 <= p['number'] <= 98 for p in before_after)
assert all(10 <= p['answer'] <= 99 for p in before_after)
assert {p['type'] for p in before_after} <= {'before', 'after'}

two_digit = wf.generate('two-digit-one-digit-mixed', 101, 20)
assert all(10 <= p['a'] <= 99 and 1 <= p['b'] <= 9 for p in two_digit)
for p in two_digit:
    if p['type'] == 'add':
        assert p['a'] % 10 + p['b'] < 10
    else:
        assert p['type'] == 'sub'
        assert p['a'] % 10 >= p['b']

review = wf.generate('grade1-review', 101, 20)
assert all(isinstance(p['answer'], int) for p in review)
assert wf.SKILLS['compare-2digit']['answer_type'] == 'accepted-set'
assert wf.SKILLS['grade1-review']['worksheet_series'] == 'review'

print('grade 1 remaining skill tests: OK')
