import importlib.util
import json
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

wf_spec = importlib.util.spec_from_file_location('wf', ROOT / 'scripts' / 'worksheet_factory.py')
wf = importlib.util.module_from_spec(wf_spec)
wf_spec.loader.exec_module(wf)

publisher_spec = importlib.util.spec_from_file_location('grade1_publisher', ROOT / 'scripts' / 'publish_grade1_variants.py')
publisher = importlib.util.module_from_spec(publisher_spec)
publisher_spec.loader.exec_module(publisher)

catalog = json.loads((ROOT / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))

# Reconstruct the pre-publication baseline so this regression test stays valid
# both before and after seed=202/303 variants have been published to main.
baseline_catalog = [
    entry for entry in catalog
    if not (
        entry.get('school_level') == 'elementary'
        and entry.get('grade') == 1
        and entry.get('skill') in wf.SKILLS
        and entry.get('seed') in (202, 303)
        and entry.get('variant') in (2, 3)
    )
]

planned = publisher.planned_entries(baseline_catalog, seeds=(202, 303))
assert len(planned) == len(wf.SKILLS) * 2

seen_ids = {entry['id'] for entry in baseline_catalog}
seen_hashes = {entry['content_hash'] for entry in baseline_catalog}
for entry, problems in planned:
    assert entry['id'] not in seen_ids
    assert entry['content_hash'] not in seen_hashes
    assert entry['problem_count'] == 20
    assert entry['seed'] in (202, 303)
    assert entry['variant'] in (2, 3)
    assert wf.generate(entry['skill'], entry['seed'], 20) == problems
    wf.validate(problems)
    assert wf.normalized_hash(problems) == entry['content_hash']
    seen_ids.add(entry['id'])
    seen_hashes.add(entry['content_hash'])

with tempfile.TemporaryDirectory() as tmp:
    tmp = Path(tmp)
    (tmp / 'worksheets').mkdir(parents=True)
    (tmp / 'materials' / 'worksheets' / 'elementary' / 'grade-01').mkdir(parents=True)

    copied_catalog = []
    for entry in baseline_catalog:
        copied = dict(entry)
        source_pdf = ROOT / copied['url']
        target_pdf = tmp / copied['url']
        target_pdf.parent.mkdir(parents=True, exist_ok=True)
        target_pdf.write_bytes(source_pdf.read_bytes())
        copied_catalog.append(copied)

    (tmp / 'worksheets' / 'catalog.json').write_text(
        json.dumps(copied_catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8'
    )

    published = publisher.publish(tmp, seeds=(202,))
    assert len(published) == len(wf.SKILLS)

    updated = json.loads((tmp / 'worksheets' / 'catalog.json').read_text(encoding='utf-8'))
    wf.validate_catalog(updated, tmp)
    assert len(updated) == len(baseline_catalog) + len(wf.SKILLS)

    for entry in published:
        output = tmp / entry['url']
        assert output.is_file()
        assert output.read_bytes().startswith(b'%PDF')
        assert output.stat().st_size > 1000

print('grade 1 variant publisher tests: OK')
