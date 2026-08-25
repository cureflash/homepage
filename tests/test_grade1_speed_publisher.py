import importlib.util
import json
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
sys.path.insert(0, str(ROOT / 'scripts'))

wf_spec = importlib.util.spec_from_file_location('wf', ROOT / 'scripts' / 'worksheet_factory.py')
wf = importlib.util.module_from_spec(wf_spec)
wf_spec.loader.exec_module(wf)

pub_spec = importlib.util.spec_from_file_location('pubspeed', ROOT / 'scripts' / 'publish_grade1_speed.py')
pub = importlib.util.module_from_spec(pub_spec)
pub_spec.loader.exec_module(pub)

catalog = json.loads((ROOT / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
baseline = [entry for entry in catalog if not (entry.get('school_level') == 'elementary' and entry.get('grade') == 1 and entry.get('worksheet_format') == 'speed')]
planned = pub.planned_entries(baseline)
assert len(planned) == len(wf.SKILLS)
seen_hashes = {entry['content_hash'] for entry in baseline}
for entry, problems in planned:
    assert entry['problem_count'] == 10
    assert entry['seed'] == 707
    assert entry['id'].endswith('-speed-01')
    assert entry['worksheet_format'] == 'speed'
    assert entry['time_target_minutes'] == 3
    assert 'スピード3分' in entry['title']
    assert wf.generate(entry['skill'], 707, 10) == problems
    wf.validate(problems)
    assert wf.normalized_hash(problems) == entry['content_hash']
    assert entry['content_hash'] not in seen_hashes
    seen_hashes.add(entry['content_hash'])
    assert [len(chunk) for chunk in wf.problem_page_chunks(problems)] == [10]

with tempfile.TemporaryDirectory() as tmp:
    sample_entry, sample_problems = planned[0]
    path = Path(tmp) / 'speed.pdf'
    wf.render_pdf(path, wf.SKILLS[sample_entry['skill']]['title'] + '  スピード3分・10問', sample_problems)
    data = path.read_bytes()
    assert data.startswith(b'%PDF') and len(data) > 1000
    assert data.count(b'/Type /Page') >= 2

print('grade 1 speed publisher tests: OK')
