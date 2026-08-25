import importlib.util
import re
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
sys.path.insert(0, str(ROOT / 'scripts'))
spec = importlib.util.spec_from_file_location('wf', ROOT / 'scripts' / 'worksheet_factory.py')
wf = importlib.util.module_from_spec(spec)
spec.loader.exec_module(wf)

problems20 = wf.generate('add-10', 101, 20)
problems50 = wf.generate('add-10', 505, 50)

assert [len(chunk) for chunk in wf.problem_page_chunks(problems20)] == [20]
assert [len(chunk) for chunk in wf.problem_page_chunks(problems50)] == [20, 20, 10]
assert wf.problem_number_label(21) == '21'
assert wf.problem_number_label(50) == '50'

with tempfile.TemporaryDirectory() as tmp:
    tmp = Path(tmp)
    pdf20 = tmp / 'twenty.pdf'
    pdf50 = tmp / 'fifty.pdf'
    wf.render_pdf(pdf20, '20問テスト', problems20)
    wf.render_pdf(pdf50, '50問テスト', problems50)

    data20 = pdf20.read_bytes()
    data50 = pdf50.read_bytes()
    assert data20.startswith(b'%PDF') and pdf20.stat().st_size > 1000
    assert data50.startswith(b'%PDF') and pdf50.stat().st_size > pdf20.stat().st_size

    page_pattern = re.compile(rb'/Type\s*/Page\b')
    assert len(page_pattern.findall(data20)) == 2
    assert len(page_pattern.findall(data50)) == 6

print('grade 1 multi-page renderer tests: OK')
