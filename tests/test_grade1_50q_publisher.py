import importlib.util
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
sys.path.insert(0, str(ROOT / 'scripts'))

wf_spec = importlib.util.spec_from_file_location('wf', ROOT / 'scripts' / 'worksheet_factory.py')
wf = importlib.util.module_from_spec(wf_spec)
wf_spec.loader.exec_module(wf)

pub_spec = importlib.util.spec_from_file_location('pub50', ROOT / 'scripts' / 'publish_grade1_50q.py')
pub = importlib.util.module_from_spec(pub_spec)
pub_spec.loader.exec_module(pub)

catalog = json.loads((ROOT / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
baseline = [entry for entry in catalog if not (entry.get('school_level') == 'elementary' and entry.get('grade') == 1 and entry.get('problem_count') == 50)]
planned = pub.planned_entries(baseline)
assert len(planned) == len(wf.SKILLS)
seen_hashes = {entry['content_hash'] for entry in baseline}
for entry, problems in planned:
    assert entry['problem_count'] == 50
    assert entry['seed'] == 505
    assert entry['id'].endswith('-50q-01')
    assert wf.generate(entry['skill'], 505, 50) == problems
    wf.validate(problems)
    assert wf.normalized_hash(problems) == entry['content_hash']
    assert entry['content_hash'] not in seen_hashes
    seen_hashes.add(entry['content_hash'])
    assert [len(chunk) for chunk in wf.problem_page_chunks(problems)] == [20, 20, 10]

print('grade 1 50-question publisher tests: OK')
