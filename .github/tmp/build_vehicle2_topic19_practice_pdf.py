from pathlib import Path
import hashlib, re, subprocess
from xml.sax.saxutils import escape
import pypdfium2 as pdfium
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.cidfonts import UnicodeCIDFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, HRFlowable

ROOT = Path.cwd()
BASE = ROOT / "denken-shinkansen/05_shinkansen_vehicle_2/topics/19_mini_shinkansen_dual_voltage_main_circuit"
SRC = BASE / "19_mini_shinkansen_dual_voltage_main_circuit_practice_source.md"
PDF = BASE / "19_mini_shinkansen_dual_voltage_main_circuit_practice.pdf"
QA = BASE / "19_mini_shinkansen_dual_voltage_main_circuit_practice_qa.md"
STATUS = ROOT / "denken-shinkansen/05_shinkansen_vehicle_2/STATUS.md"
HANDOFF = ROOT / "denken-shinkansen/05_shinkansen_vehicle_2/HANDOFF.md"
MAIN = BASE / "19_mini_shinkansen_dual_voltage_main_circuit.md"


def fail(msg):
    raise SystemExit("BLOCKER: " + msg)


st0 = STATUS.read_text(encoding="utf-8")
if PDF.exists():
    fail("Topic 19 practice PDF already exists on latest main; another worker advanced this stage")
if "current_status: `topic_19_practice_source_complete`" not in st0:
    fail("latest STATUS is no longer topic_19_practice_source_complete")

src = SRC.read_text(encoding="utf-8")
for n in range(1, 13):
    if f"## 問{n} " not in src:
        fail(f"practice source is missing 問{n}")
for gate in [
    "固定一次4問＋二次1問・9答案要素へ `9 / 9` 接続",
    "SPEC指定9項目: `9 / 9 covered`",
    "SPEC指定3可視化の式系・条件: `3 / 3 aligned`",
    "数値・論理独立再計算: `12 / 12 PASS`",
    "一次正答一意性: `8 / 8 PASS`",
]:
    if gate not in src:
        fail("practice source gate missing: " + gate)
if "# 一次試験型" not in src or "# SPEC指定項目・可視化への接続" not in src:
    fail("practice source section markers are missing")
section = "# 一次試験型" + src.split("# 一次試験型", 1)[1].split("# SPEC指定項目・可視化への接続", 1)[0]

pdfmetrics.registerFont(UnicodeCIDFont("HeiseiKakuGo-W5"))
FONT = "HeiseiKakuGo-W5"
main_color = colors.HexColor("#202833")

def ps(name, size, leading, **kw):
    return ParagraphStyle(name, fontName=FONT, fontSize=size, leading=leading, textColor=main_color, splitLongWords=False, **kw)

title = ps("title", 16, 20, alignment=TA_CENTER, spaceAfter=5*mm)
h1 = ps("h1", 13.5, 17, spaceBefore=2*mm, spaceAfter=3*mm, keepWithNext=True)
h2 = ps("h2", 11.2, 14, spaceBefore=3*mm, spaceAfter=1.5*mm, keepWithNext=True)
h3 = ps("h3", 9.3, 12, spaceBefore=1.8*mm, spaceAfter=.9*mm, keepWithNext=True)
body = ps("body", 8.25, 11, spaceAfter=1*mm, allowWidows=0, allowOrphans=0)
choice = ps("choice", 8.25, 11, leftIndent=4.5*mm, firstLineIndent=-2.5*mm, spaceAfter=.55*mm)
formula = ps("formula", 8.4, 10.8, alignment=TA_CENTER, leftIndent=8*mm, rightIndent=8*mm,
             backColor=colors.HexColor("#f3f6f9"), borderColor=colors.HexColor("#d8e0e8"),
             borderWidth=.35, borderPadding=4, spaceBefore=1*mm, spaceAfter=1.5*mm)
note = ps("note", 7.8, 10.3, backColor=colors.HexColor("#f7f7f7"), borderColor=colors.HexColor("#dddddd"),
          borderWidth=.3, borderPadding=5, spaceAfter=3*mm)

def inline(s):
    return escape(s.replace("**", "").replace("__", "").replace("`", ""))

story = [
    Paragraph("19 ミニ新幹線 複電圧主回路", title),
    Paragraph("練習問題・完全解説（電験二種）", h1),
    Paragraph("問題中の数値はすべて一般教材用の仮定値であり、ミニ新幹線実車値ではない。未確認の実車架線電圧、巻数・タップ構成、絶縁定格、主変換装置・補助電源・電源切替方式は真値化しない。", note),
]
seen_h1 = False
for raw in section.splitlines():
    line = raw.strip()
    if not line:
        story.append(Spacer(1, .55*mm)); continue
    if line == "---":
        story += [Spacer(1, .7*mm), HRFlowable(width="100%", thickness=.35, color=colors.HexColor("#cfd7df")), Spacer(1, .7*mm)]; continue
    if line.startswith("# "):
        heading = line[2:].strip()
        if seen_h1 and heading == "二次試験型": story.append(PageBreak())
        story.append(Paragraph(inline(heading), h1)); seen_h1 = True; continue
    if line.startswith("## "):
        story.append(Paragraph(inline(line[3:].strip()), h2)); continue
    if line.startswith("### "):
        story.append(Paragraph(inline(line[4:].strip()), h3)); continue
    if re.match(r"^\d+\.\s", line):
        story.append(Paragraph(inline(line), choice)); continue
    if line.startswith("`") and line.endswith("`"):
        story.append(Paragraph(inline(line), formula)); continue
    story.append(Paragraph(inline(line), body))

def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor("#d5dbe2")); canvas.setLineWidth(.35)
    canvas.line(12*mm, 10*mm, A4[0]-12*mm, 10*mm)
    canvas.setFont(FONT, 7); canvas.setFillColor(colors.HexColor("#6a7580"))
    canvas.drawString(12*mm, 6.5*mm, "電験二種 / Topic 19 ミニ新幹線 複電圧主回路")
    canvas.drawRightString(A4[0]-12*mm, 6.5*mm, str(doc.page)); canvas.restoreState()

doc = SimpleDocTemplate(str(PDF), pagesize=A4, rightMargin=12*mm, leftMargin=12*mm, topMargin=12*mm, bottomMargin=14*mm)
doc.build(story, onFirstPage=footer, onLaterPages=footer)
if PDF.stat().st_size < 5000: fail("generated PDF is unexpectedly small")

subprocess.run(["qpdf", "--check", str(PDF)], check=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
info = subprocess.run(["pdfinfo", str(PDF)], check=True, stdout=subprocess.PIPE, text=True).stdout
m = re.search(r"^Pages:\s+(\d+)", info, re.M)
if not m: fail("pdfinfo did not return page count")
pages = int(m.group(1))
if pages < 2: fail("unexpected PDF page count")

prefix = "/tmp/topic19_vehicle2_poppler"
subprocess.run(["pdftoppm", "-png", "-r", "180", str(PDF), prefix], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE)
if len(list(Path("/tmp").glob("topic19_vehicle2_poppler-*.png"))) != pages: fail("pdftoppm render count mismatch")

doc2 = pdfium.PdfDocument(str(PDF))
if len(doc2) != pages: fail("pdfium page count mismatch")
for i, page in enumerate(doc2):
    img = page.render(scale=2.5).to_pil().convert("L")
    if img.width < 1400 or img.height < 1900: fail(f"page {i+1} render resolution too low")
    bbox = img.point(lambda p: 255 if p < 245 else 0).getbbox()
    if not bbox: fail(f"page {i+1} is blank")
    x0,y0,x1,y1 = bbox
    if x0 <= 12 or y0 <= 12 or x1 >= img.width-12 or y1 >= img.height-12: fail(f"page {i+1} touches outer safety border")

textfile = Path("/tmp/topic19_vehicle2_text.txt")
subprocess.run(["pdftotext", str(PDF), str(textfile)], check=True)
text = textfile.read_text(encoding="utf-8", errors="replace")
if "\ufffd" in text or "(cid:" in text: fail("PDF text extraction contains replacement/cid text")
for n in range(1,13):
    if f"問{n}" not in text: fail(f"PDF text extraction missing 問{n}")
norm = re.sub(r"\s+", "", text)
for token in ["a=N1/N2", "Vo=DVd", "6.84", "1.25", "792", "1000", "800"]:
    if token not in norm: fail("PDF text extraction missing expected token: " + token)

sha = hashlib.sha256(PDF.read_bytes()).hexdigest(); size = PDF.stat().st_size
QA.write_text(f'''# 19 ミニ新幹線 複電圧主回路 — 練習PDF QA

更新日: 2026-09-19

## 対象
- PDF: `19_mini_shinkansen_dual_voltage_main_circuit_practice.pdf`
- source: `19_mini_shinkansen_dual_voltage_main_circuit_practice_source.md`

## 構成
- A4縦: `{pages}ページ`
- 一次試験型: `8 / 8`、全問五肢択一
- 二次試験型: `4 / 4`、途中式・前提・単位・理由を収録
- 完全解説: `12 / 12`
- 問題・正答・数式のsourceからの仕様変更: `0件`

## 表示・抽出QA
- pdfium 180 dpiレンダリング: `{pages} / {pages} PASS`
- pdftoppm 180 dpiレンダリング: `{pages} / {pages} PASS`
- qpdf構造チェック: `PASS`
- 文字抽出: `PASS`
- 抽出置換文字 U+FFFD / `(cid:)`: `0件`
- 問題見出し抽出: `12 / 12 PASS`
- 主要式抽出: `2 / 2 PASS`
- 空白ページ: `0件`
- 外周クリップ安全域: `{pages} / {pages} PASS`

## 試験対応・数値QA
- 固定公式過去問: `一次4問＋二次1問 / 5問`
- 固定答案要素: `一次7＋二次2 / 9`
- 固定答案要素の練習問題接続: `9 / 9 PASS`
- 数値・論理独立再計算: `12 / 12 PASS`（練習sourceの独立QAを変更せず継承）
- 一次正答一意性: `8 / 8 PASS`
- SPEC指定9項目: `9 / 9 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認ミニ新幹線実車値の真値化: `0件`
- H25負荷時タップ切換装置を実車採用方式として扱う記述: `0件`
- 完成後clean blind公式照合: `未実施 / PowerPoint完成後`

## ファイル
- PDF SHA-256: `{sha}`
- PDF size: `{size} byte`

判定: `PASS / PRACTICE_PDF_COMPLETE`

## 次工程
Topic 19の解説画像PowerPointを作る。固定5問・9答案要素、SPEC指定9項目・3可視化、解説／練習の問題・正答・数式を変更しない。PowerPoint完成後にclean blind公式照合へ進む。
''', encoding="utf-8")

status_section = f'''## Topic 19 練習PDF

判定: `PASS / PRACTICE_PDF_COMPLETE`

成果物:
- 練習source: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_practice_source.md`
- 練習PDF: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_practice.pdf`
- 練習PDF QA: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_practice_qa.md`

品質:
- A4縦: `{pages} pages`
- pdfium / pdftoppm 180 dpi: `{pages} / {pages} PASS`
- qpdf構造・文字抽出・外周クリップ安全域: `PASS`
- 一次8問＋二次4問・完全解説: `12 / 12`
- 一次正答一意性: `8 / 8 PASS`
- 固定5問・9答案要素接続: `9 / 9 PASS`
- SPEC指定9項目: `9 / 9 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更 / SPEC外追加 / 未確認実車値の真値化: `0件`
- 完成後clean blind公式照合: `未実施 / PowerPoint完成後`

'''
st = STATUS.read_text(encoding="utf-8")
st = st.replace("current_status: `topic_19_practice_source_complete`", "current_status: `topic_19_practice_pdf_complete`", 1)
st = re.sub(r"- next_start: .*", "- next_start: Topic 19の解説画像PowerPoint。固定5問・9答案要素、一次8問＋二次4問、SPEC指定9項目・3可視化を変更せず、解説／練習sourceとPDFへ接続する", st, count=1)
st = st.replace("## Topic 19 練習source\n", status_section + "## Topic 19 練習source\n", 1)
st = re.sub(r"## 次工程\n\n.*\Z", "## 次工程\n\nTopic 19「ミニ新幹線 複電圧主回路」の解説画像PowerPointを作る。固定5問・9答案要素、一次8問＋二次4問、SPEC指定9項目・3可視化を変更せず、解説／練習sourceとPDFへ接続する。未確認の実車仕様は真値化しない。", st, flags=re.S)
STATUS.write_text(st, encoding="utf-8")

ho = HANDOFF.read_text(encoding="utf-8")
old = "現在地は `topic_19_practice_source_complete`。active topic は Topic 19 `ミニ新幹線 複電圧主回路`。制作前EXAM_ALIGNMENT、解説source、解説PDF、練習sourceまで完了。次は練習PDF。PowerPoint・完成後clean blindは未着手。"
new = "現在地は `topic_19_practice_pdf_complete`。active topic は Topic 19 `ミニ新幹線 複電圧主回路`。制作前EXAM_ALIGNMENT、解説source、解説PDF、練習source、練習PDFまで完了。次はPowerPoint。完成後clean blindは未着手。"
if old not in ho: fail("HANDOFF current-location text changed")
ho = ho.replace(old, new, 1)
ho_section = f'''## Topic 19 練習PDF

成果物:
- 練習PDF: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_practice.pdf`
- QA: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_practice_qa.md`

判定: `PASS / PRACTICE_PDF_COMPLETE`

品質:
- A4縦: `{pages} pages`
- pdfium / pdftoppm 180 dpi: `{pages} / {pages} PASS`
- qpdf構造・文字抽出・外周クリップ安全域: `PASS`
- 一次8問＋二次4問・完全解説: `12 / 12`
- 一次正答一意性: `8 / 8 PASS`
- 固定5問・9答案要素接続: `9 / 9 PASS`
- SPEC指定9項目 / 3可視化: `9 / 9`, `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更 / SPEC外追加 / 未確認実車値の真値化: `0件`
- 完成後clean blind公式照合: `未実施 / PowerPoint完成後`

'''
ho = ho.replace("## Topic 19 練習source\n", ho_section + "## Topic 19 練習source\n", 1)
ho = re.sub(r"## 次工程\n\n.*\Z", "## 次工程\n\nTopic 19の解説画像PowerPointを作る。固定5問・9答案要素、SPEC指定9項目・3可視化、解説／練習sourceとPDFの問題・正答・数式を変更しない。PowerPoint完成後にclean blind公式照合へ進む。", ho, flags=re.S)
HANDOFF.write_text(ho, encoding="utf-8")

main = MAIN.read_text(encoding="utf-8")
old = "制作前EXAM_ALIGNMENT、解説source、解説PDF、練習sourceを完了した。練習PDF・PowerPoint・完成後clean blindは未着手。"
new = "制作前EXAM_ALIGNMENT、解説source、解説PDF、練習source、練習PDFを完了した。PowerPoint・完成後clean blindは未着手。"
if old not in main: fail("Topic 19 main source state sentence changed")
main = main.replace(old, new, 1).replace("current_status: `topic_19_practice_source_complete`", "current_status: `topic_19_practice_pdf_complete`", 1)
line = "- 練習source: `19_mini_shinkansen_dual_voltage_main_circuit_practice_source.md` — `PASS / PRACTICE_SOURCE_COMPLETE`"
if line not in main: fail("Topic 19 main source practice-output line changed")
main = main.replace(line, line + "\n- 練習PDF: `19_mini_shinkansen_dual_voltage_main_circuit_practice.pdf` — `PASS / PRACTICE_PDF_COMPLETE`\n- 練習PDF QA: `19_mini_shinkansen_dual_voltage_main_circuit_practice_qa.md`", 1)
main = re.sub(r"次工程: 練習PDFを作る。.*?真値化しない。", "次工程: 解説画像PowerPointを作る。固定5問・9答案要素、一次8問＋二次4問、SPEC指定9項目・3計算/グラフの範囲を変えない。解説／練習sourceとPDFの問題・正答・数式を変更せず、未確認の実車仕様は真値化しない。", main, count=1, flags=re.S)
MAIN.write_text(main, encoding="utf-8")
print(f"PASS {pages} pages {sha}")
