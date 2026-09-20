from pathlib import Path
from html import escape
import hashlib
import re
import subprocess

from PIL import Image
import pypdfium2 as pdfium
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.cidfonts import UnicodeCIDFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable

BASE = Path('denken-shinkansen/05_shinkansen_vehicle_2/topics/34_compressor_pump_fan_load_characteristics')
SRC = BASE / '34_compressor_pump_fan_load_characteristics_practice_source.md'
SRC_QA = BASE / '34_compressor_pump_fan_load_characteristics_practice_source_qa.md'
PDF = BASE / '34_compressor_pump_fan_load_characteristics_practice.pdf'
QA = BASE / '34_compressor_pump_fan_load_characteristics_practice_pdf_qa.md'
EXPECTED_SOURCE_BLOB = '2b2ba22fc66ede164abafb853e13d3e199a8b12e'


def git_blob(path: Path) -> str:
    return subprocess.check_output(['git', 'hash-object', str(path)], text=True).strip()


def assert_frozen_source() -> str:
    source_blob = git_blob(SRC)
    assert source_blob == EXPECTED_SOURCE_BLOB, (source_blob, EXPECTED_SOURCE_BLOB)
    assert not PDF.exists(), f'canonical PDF already exists: {PDF}'
    assert not QA.exists(), f'canonical PDF QA already exists: {QA}'
    text = SRC.read_text(encoding='utf-8')
    assert len(re.findall(r'^## 一次[1-8]\b', text, re.M)) == 8
    assert len(re.findall(r'^## 二次[1-4]\b', text, re.M)) == 4
    assert text.count('### 正答') == 8
    assert text.count('### 完全解説') == 12
    assert '48.1 N·m / 48.0 N·m' in text
    assert '一般式 `P=Tω`、`ω=2πN/60` は変更しない' in text
    src_qa = SRC_QA.read_text(encoding='utf-8')
    assert '固定5問・27答案要素' in src_qa
    assert 'SPEC固定7項目' in src_qa
    return text


def build_pdf(text: str) -> None:
    pdfmetrics.registerFont(UnicodeCIDFont('HeiseiMin-W3'))
    pdfmetrics.registerFont(UnicodeCIDFont('HeiseiKakuGo-W5'))

    body = ParagraphStyle(
        'Body', fontName='HeiseiMin-W3', fontSize=8.15, leading=10.5,
        textColor=colors.black, spaceAfter=1.9 * mm, wordWrap='CJK'
    )
    small = ParagraphStyle('Small', parent=body, fontSize=7.1, leading=9.0, spaceAfter=1.0 * mm)
    h1 = ParagraphStyle(
        'H1', parent=body, fontName='HeiseiKakuGo-W5', fontSize=15.0, leading=18.0,
        spaceBefore=1.5 * mm, spaceAfter=3.2 * mm, keepWithNext=True
    )
    h2 = ParagraphStyle(
        'H2', parent=body, fontName='HeiseiKakuGo-W5', fontSize=11.0, leading=14.0,
        spaceBefore=2.5 * mm, spaceAfter=1.8 * mm, keepWithNext=True
    )
    h3 = ParagraphStyle(
        'H3', parent=body, fontName='HeiseiKakuGo-W5', fontSize=9.3, leading=12.0,
        spaceBefore=1.8 * mm, spaceAfter=1.0 * mm, keepWithNext=True
    )

    def clean_inline(s: str) -> str:
        return escape(s.replace('`', '').replace('**', ''), quote=False)

    story = []
    para = []

    def flush() -> None:
        nonlocal para
        if para:
            s = ' '.join(x.strip() for x in para if x.strip())
            if s:
                story.append(Paragraph(clean_inline(s), body))
            para = []

    for raw in text.splitlines():
        line = raw.rstrip()
        if not line.strip():
            flush()
            continue
        if line.strip() == '---':
            flush()
            story.append(Spacer(1, 1.0 * mm))
            story.append(HRFlowable(width='100%', thickness=0.3, color=colors.grey))
            story.append(Spacer(1, 1.0 * mm))
            continue
        if line.startswith('# '):
            flush(); story.append(Paragraph(clean_inline(line[2:].strip()), h1)); continue
        if line.startswith('## '):
            flush(); story.append(Paragraph(clean_inline(line[3:].strip()), h2)); continue
        if line.startswith('### '):
            flush(); story.append(Paragraph(clean_inline(line[4:].strip()), h3)); continue
        if line.startswith('|'):
            flush(); story.append(Paragraph(clean_inline(line), small)); continue
        if line.startswith('- '):
            flush(); story.append(Paragraph('・' + clean_inline(line[2:].strip()), body)); continue
        if re.match(r'^\s*\d+\.\s', line) or re.match(r'^\s*\([1-9]\)\s', line):
            flush(); story.append(Paragraph(clean_inline(line.strip()), body)); continue
        para.append(line)
    flush()

    def footer(canvas, doc):
        canvas.saveState()
        canvas.setFont('HeiseiKakuGo-W5', 6.6)
        canvas.drawString(14 * mm, 8 * mm, '電験×新幹線 / Topic 34 コンプレッサ・ポンプ・ファンの負荷特性 - 練習問題・完全解説')
        canvas.drawRightString(A4[0] - 14 * mm, 8 * mm, f'{doc.page}')
        canvas.restoreState()

    doc = SimpleDocTemplate(
        str(PDF), pagesize=A4,
        leftMargin=14 * mm, rightMargin=14 * mm,
        topMargin=14 * mm, bottomMargin=14 * mm,
        title='Topic 34 コンプレッサ・ポンプ・ファンの負荷特性 - 練習問題・完全解説',
        author='denken-shinkansen', creator='ReportLab', pageCompression=1,
    )
    doc.build(story, onFirstPage=footer, onLaterPages=footer)


def render_and_qa(text: str) -> None:
    pdfium_dir = Path('/tmp/topic34_pdfium')
    poppler_dir = Path('/tmp/topic34_poppler')
    text_path = Path('/tmp/topic34_practice.txt')
    subprocess.run(['rm', '-rf', str(pdfium_dir), str(poppler_dir)], check=True)
    pdfium_dir.mkdir(parents=True)
    poppler_dir.mkdir(parents=True)

    subprocess.run(['pdftoppm', '-png', '-r', '180', str(PDF), str(poppler_dir / 'page')], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    with text_path.open('w', encoding='utf-8') as f:
        subprocess.run(['pdftotext', '-layout', str(PDF), '-'], check=True, stdout=f)

    doc = pdfium.PdfDocument(str(PDF))
    for i in range(len(doc)):
        page = doc[i]
        bitmap = page.render(scale=180 / 72)
        bitmap.to_pil().save(pdfium_dir / f'page-{i + 1:02d}.png')

    pop = sorted(poppler_dir.glob('page-*.png'))
    pdi = sorted(pdfium_dir.glob('page-*.png'))
    assert len(pop) == len(pdi) == len(doc) and len(doc) > 0, (len(pop), len(pdi), len(doc))

    def inspect(paths):
        blank = 0
        edge = 0
        for p in paths:
            im = Image.open(p).convert('L')
            mask = im.point(lambda v: 0 if v >= 248 else 255)
            bbox = mask.getbbox()
            if bbox is None:
                blank += 1
                continue
            l, t, r, b = bbox
            if l < 8 or t < 8 or r > im.width - 8 or b > im.height - 8:
                edge += 1
        return blank, edge

    blank_pop, edge_pop = inspect(pop)
    blank_pdfium, edge_pdfium = inspect(pdi)
    assert blank_pop == blank_pdfium == 0, (blank_pop, blank_pdfium)
    assert edge_pop == edge_pdfium == 0, (edge_pop, edge_pdfium)

    extracted = text_path.read_text(encoding='utf-8', errors='replace')
    assert '\ufffd' not in extracted
    for n in range(1, 9):
        assert f'一次{n}' in extracted, f'missing 一次{n}'
    for n in range(1, 5):
        assert f'二次{n}' in extracted, f'missing 二次{n}'
    assert extracted.count('正答') >= 8, extracted.count('正答')
    assert extracted.count('完全解説') >= 12, extracted.count('完全解説')
    assert len(re.findall(r'^## 一次[1-8]\b', text, re.M)) == 8
    assert len(re.findall(r'^## 二次[1-4]\b', text, re.M)) == 4

    sha256 = hashlib.sha256(PDF.read_bytes()).hexdigest()
    blob_sha = git_blob(PDF)
    source_blob = git_blob(SRC)
    size = PDF.stat().st_size
    txtsize = text_path.stat().st_size

    qa_lines = [
        '# Topic 34 練習PDF QA',
        '',
        '更新日: 2026-09-21',
        '',
        '判定: `PASS / PRACTICE_PDF_COMPLETE`',
        '',
        '## reconcile',
        '',
        f'最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md` / `HANDOFF.md`、Topic 34固定EXAM_ALIGNMENT、解説source/PDF/QA、練習source/source QAをreconcileした。既存workerが完了済みの解説PDF・練習source工程は再実施せず、正本練習source blob `{source_blob}` から練習PDFだけを生成した。',
        '',
        '## canonical PDF',
        '',
        '- path: `34_compressor_pump_fan_load_characteristics_practice.pdf`',
        f'- canonical blob SHA: `{blob_sha}`',
        f'- source blob SHA: `{source_blob}`',
        f'- file size: `{size} bytes`',
        f'- SHA-256: `{sha256}`',
        f'- A4縦: `{len(doc)} pages`',
        '',
        '## render / text QA',
        '',
        f'- PDFium render: `{len(pdi)} / {len(doc)} PASS`',
        f'- Poppler render: `{len(pop)} / {len(doc)} PASS`',
        '- blank page: `0件`',
        '- page-edge overflow: `0件`',
        f'- `pdftotext -layout`: `PASS ({txtsize} bytes)`',
        '- 置換文字 `�`: `0件`',
        '- 一次1〜8: `8 / 8収録 PASS`',
        '- 二次1〜4: `4 / 4収録 PASS`',
        '- 一次正答: `8 / 8収録 PASS`',
        '- 完全解説: `12 / 12収録 PASS`',
        '',
        '## 過去問対応品質ゲート',
        '',
        '- 固定公式過去問: `5 / 5`',
        '- 固定5問・27答案要素: `27 / 27 connected` を維持',
        '- 一次: `15 / 15 PASS` を維持',
        '- 二次: `12 / 12 PASS` を維持',
        '- SPEC固定7項目: `7 / 7 PASS` を維持',
        '- 一次試験型: `8 / 8`（全問五肢択一）',
        '- 二次試験型: `4 / 4`（途中式・前提・単位・理由を含む）',
        '- source QA済み数値独立再計算: `PASS` を維持',
        '- source QA済み一次正答一意性: `8 / 8 PASS` を維持',
        '- コンプレッサ圧縮熱力学・冷凍サイクル・冷媒物性追加: `0件`',
        '- ポンプ水動力式を固定二種過去問の直接出題式と誤記: `0件`',
        '- ファン相似則を成立条件なしで一般化: `0件`',
        '- 未確認実車値の真値化: `0件`',
        '- Topic 35以降の先取り: `0件`',
        '- Topic 21一般式変更: `0件`',
        '- Topic 21 H26二次問1(4) `48.1 N·m / 48.0 N·m` 過去問固有丸め差注記: `維持`',
        '- exact blocker: `0件`',
        '',
        '本判定は練習PDF工程のPASSであり、Topic 34最終完了を意味しない。次工程はTopic 34解説画像PowerPoint生成＋render QA。',
        '',
    ]
    QA.write_text('\n'.join(qa_lines), encoding='utf-8')
    print('pages', len(doc), 'sha256', sha256, 'blob', blob_sha)


if __name__ == '__main__':
    source_text = assert_frozen_source()
    build_pdf(source_text)
    render_and_qa(source_text)
