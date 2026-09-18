from __future__ import annotations

from pathlib import Path
import hashlib
import re
import subprocess
from xml.sax.saxutils import escape

from PIL import Image
import pypdfium2 as pdfium
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
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


def fail(msg: str) -> None:
    raise SystemExit(f"BLOCKER: {msg}")


# Reconcile against the just-pulled latest main. Do not duplicate another worker.
status_before = STATUS.read_text(encoding="utf-8")
if PDF.exists():
    fail("Topic 19 practice PDF already exists on latest main; another worker advanced this stage")
if "current_status: `topic_19_practice_source_complete`" not in status_before:
    fail("latest STATUS is no longer topic_19_practice_source_complete; another worker changed the next safe stage")

source = SRC.read_text(encoding="utf-8")
start_marker = "# 一次試験型"
end_marker = "# SPEC指定項目・可視化への接続"
if start_marker not in source or end_marker not in source:
    fail("practice source section markers are missing")
section = start_marker + source.split(start_marker, 1)[1].split(end_marker, 1)[0]

# The fixed source must still contain all 12 questions and the fixed quality statements.
for n in range(1, 13):
    if f"## 問{n} " not in source:
        fail(f"practice source is missing 問{n}")
for required in (
    "固定一次4問＋二次1問・9答案要素へ `9 / 9` 接続",
    "SPEC指定9項目: `9 / 9 covered`",
    "SPEC指定3可視化の式系・条件: `3 / 3 aligned`",
    "数値・論理独立再計算: `12 / 12 PASS`",
    "一次正答一意性: `8 / 8 PASS`",
):
    if required not in source:
        fail(f"practice source quality gate changed or is missing: {required}")

pdfmetrics.registerFont(UnicodeCIDFont("HeiseiKakuGo-W5"))
FONT = "HeiseiKakuGo-W5"
styles = getSampleStyleSheet()
base = dict(fontName=FONT, textColor=colors.HexColor("#202833"), splitLongWords=False)

title_style = ParagraphStyle(
    "TitleJP", parent=styles["Title"], **base,
    fontSize=16, leading=20, alignment=TA_CENTER, spaceAfter=5 * mm,
)
h1 = ParagraphStyle(
    "H1JP", parent=styles["Heading1"], **base,
    fontSize=13.5, leading=17, spaceBefore=2 * mm, spaceAfter=3 * mm, keepWithNext=True,
)
h2 = ParagraphStyle(
    "H2JP", parent=styles["Heading2"], **base,
    fontSize=11.2, leading=14, spaceBefore=3.0 * mm, spaceAfter=1.5 * mm, keepWithNext=True,
)
h3 = ParagraphStyle(
    "H3JP", parent=styles["Heading3"], **base,
    fontSize=9.3, leading=12, textColor=colors.HexColor("#274d73"),
    spaceBefore=1.8 * mm, spaceAfter=0.9 * mm, keepWithNext=True,
)
body = ParagraphStyle(
    "BodyJP", parent=styles["BodyText"], **base,
    fontSize=8.25, leading=11.0, alignment=TA_LEFT,
    spaceAfter=1.0 * mm, allowWidows=0, allowOrphans=0,
)
choice = ParagraphStyle(
    "ChoiceJP", parent=body,
    leftIndent=4.5 * mm, firstLineIndent=-2.5 * mm, spaceAfter=0.55 * mm,
)
formula = ParagraphStyle(
    "FormulaJP", parent=body,
    fontSize=8.4, leading=10.8, alignment=TA_CENTER,
    leftIndent=8 * mm, rightIndent=8 * mm,
    backColor=colors.HexColor("#f3f6f9"), borderColor=colors.HexColor("#d8e0e8"),
    borderWidth=0.35, borderPadding=4, spaceBefore=1.0 * mm, spaceAfter=1.5 * mm,
)
note = ParagraphStyle(
    "NoteJP", parent=body,
    fontSize=7.8, leading=10.3, textColor=colors.HexColor("#566270"),
    backColor=colors.HexColor("#f7f7f7"), borderColor=colors.HexColor("#dddddd"),
    borderWidth=0.3, borderPadding=5, spaceAfter=3 * mm,
)


def inline(s: str) -> str:
    return escape(s.replace("**", "").replace("__", "").replace("`", ""))


story = [
    Paragraph("19 ミニ新幹線 複電圧主回路", title_style),
    Paragraph("練習問題・完全解説（電験二種）", h1),
    Paragraph(
        "問題中の数値はすべて一般教材用の仮定値であり、ミニ新幹線実車値ではない。"
        "未確認の実車架線電圧、巻数・タップ構成、絶縁定格、主変換装置・補助電源・電源切替方式は真値化しない。",
        note,
    ),
]

seen_first_h1 = False
for raw in section.splitlines():
    line = raw.strip()
    if not line:
        story.append(Spacer(1, 0.55 * mm))
        continue
    if line == "---":
        story.append(Spacer(1, 0.7 * mm))
        story.append(HRFlowable(width="100%", thickness=0.35, color=colors.HexColor("#cfd7df")))
        story.append(Spacer(1, 0.7 * mm))
        continue
    if line.startswith("# "):
        heading = line[2:].strip()
        if seen_first_h1 and heading == "二次試験型":
            story.append(PageBreak())
        story.append(Paragraph(inline(heading), h1))
        seen_first_h1 = True
        continue
    if line.startswith("## "):
        story.append(Paragraph(inline(line[3:].strip()), h2))
        continue
    if line.startswith("### "):
        story.append(Paragraph(inline(line[4:].strip()), h3))
        continue
    if re.match(r"^\d+\.\s", line):
        story.append(Paragraph(inline(line), choice))
        continue
    if line.startswith("`") and line.endswith("`") and len(line) > 2:
        story.append(Paragraph(inline(line), formula))
        continue
    story.append(Paragraph(inline(line), body))


def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor("#d5dbe2"))
    canvas.setLineWidth(0.35)
    canvas.line(12 * mm, 10 * mm, A4[0] - 12 * mm, 10 * mm)
    canvas.setFont(FONT, 7)
    canvas.setFillColor(colors.HexColor("#6a7580"))
    canvas.drawString(12 * mm, 6.5 * mm, "電験二種 / Topic 19 ミニ新幹線 複電圧主回路")
    canvas.drawRightString(A4[0] - 12 * mm, 6.5 * mm, str(doc.page))
    canvas.restoreState()


PDF.parent.mkdir(parents=True, exist_ok=True)
doc = SimpleDocTemplate(
    str(PDF), pagesize=A4,
    rightMargin=12 * mm, leftMargin=12 * mm, topMargin=12 * mm, bottomMargin=14 * mm,
    title="19 ミニ新幹線 複電圧主回路 - 練習問題・完全解説",
    author="denken-shinkansen",
    subject="電験二種 新幹線車両 Topic 19 練習問題",
)
doc.build(story, onFirstPage=footer, onLaterPages=footer)
if not PDF.exists() or PDF.stat().st_size < 5000:
    fail("generated PDF is missing or unexpectedly small")

# Structural and dual-render QA.
subprocess.run(["qpdf", "--check", str(PDF)], check=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
info = subprocess.run(["pdfinfo", str(PDF)], check=True, stdout=subprocess.PIPE, text=True).stdout
m = re.search(r"^Pages:\s+(\d+)", info, re.M)
if not m:
    fail("pdfinfo did not return page count")
pages = int(m.group(1))
if pages < 2:
    fail(f"unexpected page count: {pages}")

poppler_prefix = Path("/tmp/topic19_vehicle2_poppler")
subprocess.run(["pdftoppm", "-png", "-r", "180", str(PDF), str(poppler_prefix)], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE)
poppler_files = sorted(Path("/tmp").glob("topic19_vehicle2_poppler-*.png"))
if len(poppler_files) != pages:
    fail(f"pdftoppm rendered {len(poppler_files)} pages but PDF has {pages}")

pdfium_dir = Path("/tmp/topic19_vehicle2_pdfium")
pdfium_dir.mkdir(exist_ok=True)
pdf_doc = pdfium.PdfDocument(str(PDF))
if len(pdf_doc) != pages:
    fail("pdfium page count differs from pdfinfo")
for i, page in enumerate(pdf_doc):
    img = page.render(scale=2.5).to_pil().convert("RGB")  # 72 dpi * 2.5 = 180 dpi
    if img.width < 1400 or img.height < 1900:
        fail(f"pdfium page {i+1} rendered at unexpectedly low resolution")
    gray = img.convert("L")
    ink = gray.point(lambda p: 255 if p < 245 else 0)
    bbox = ink.getbbox()
    if bbox is None:
        fail(f"pdfium page {i+1} is blank")
    x0, y0, x1, y1 = bbox
    if x0 <= 12 or y0 <= 12 or x1 >= img.width - 12 or y1 >= img.height - 12:
        fail(f"pdfium page {i+1} has ink touching the outer safety border")
    img.save(pdfium_dir / f"page_{i+1:02d}.png")
if len(list(pdfium_dir.glob("page_*.png"))) != pages:
    fail("pdfium render count mismatch")

# Text extraction QA. Keep the checks robust to whitespace introduced by CID text extraction.
text_path = Path("/tmp/topic19_vehicle2_text.txt")
subprocess.run(["pdftotext", str(PDF), str(text_path)], check=True)
extracted = text_path.read_text(encoding="utf-8", errors="replace")
if "\ufffd" in extracted or "(cid:" in extracted:
    fail("PDF text extraction contains replacement/cid text")
for n in range(1, 13):
    if f"問{n}" not in extracted:
        fail(f"PDF text extraction is missing 問{n}")
normalized = re.sub(r"\s+", "", extracted)
for formula_check in ("a=N1/N2", "Vo=DVd"):
    if formula_check not in normalized:
        fail(f"PDF text extraction is missing major formula {formula_check}")
for token in ("6.84", "1.25", "792", "1000", "800"):
    if token not in normalized:
        fail(f"PDF text extraction is missing expected solved value {token}")

sha256 = hashlib.sha256(PDF.read_bytes()).hexdigest()
size = PDF.stat().st_size

qa_text = f"""# 19 ミニ新幹線 複電圧主回路 — 練習PDF QA

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
- 抽出置換文字 U+FFFD: `0件`
- `(cid:)`: `0件`
- 一次・二次の問題見出し抽出: `12 / 12 PASS`
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
- SPEC指定3可視化の式系・条件との整合: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認ミニ新幹線実車値の真値化: `0件`
- H25負荷時タップ切換装置を実車採用方式として扱う記述: `0件`
- 完成後clean blind公式照合: `未実施 / PowerPoint完成後`

## ファイル
- PDF SHA-256: `{sha256}`
- PDF size: `{size} byte`

判定: `PASS / PRACTICE_PDF_COMPLETE`

## 次工程
Topic 19の解説画像PowerPointを作る。固定5問・9答案要素、SPEC指定9項目・3可視化、解説／練習の問題・正答・数式を変更しない。PowerPoint完成後にclean blind公式照合へ進む。
"""
QA.write_text(qa_text, encoding="utf-8")

status_section = f"""## Topic 19 練習PDF

判定: `PASS / PRACTICE_PDF_COMPLETE`

成果物:
- 練習source: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_practice_source.md`
- 練習PDF: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_practice.pdf`
- 練習PDF QA: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_practice_qa.md`

品質:
- A4縦: `{pages} pages`
- pdfium 180 dpi: `{pages} / {pages} PASS`
- pdftoppm 180 dpi: `{pages} / {pages} PASS`
- qpdf構造・文字抽出: `PASS`
- 外周クリップ安全域: `{pages} / {pages} PASS`
- 一次試験型: `8 / 8 五肢択一`
- 二次試験型: `4 / 4 記述式`
- 完全解説: `12 / 12`
- 一次正答一意性: `8 / 8 PASS`
- 固定過去問: `一次4問＋二次1問 / 5問`
- 固定答案要素: `一次7＋二次2 / 9`
- 固定答案要素接続: `9 / 9 PASS`
- SPEC指定9項目: `9 / 9 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認ミニ新幹線実車値の真値化: `0件`
- H25負荷時タップ切換装置を実車採用方式として扱う記述: `0件`
- 完成後clean blind公式照合: `未実施 / PowerPoint完成後`

"""

# Update STATUS without altering the fixed exam mapping or completed-topic count.
st = STATUS.read_text(encoding="utf-8")
st = st.replace("current_status: `topic_19_practice_source_complete`", "current_status: `topic_19_practice_pdf_complete`", 1)
st = re.sub(
    r"- next_start: .*",
    "- next_start: Topic 19の解説画像PowerPoint。固定5問・9答案要素、一次8問＋二次4問、SPEC指定9項目・3可視化を変更せず、解説／練習sourceとPDFへ接続する",
    st,
    count=1,
)
if "## Topic 19 練習PDF\n" not in st:
    st = st.replace("## Topic 19 練習source\n", status_section + "## Topic 19 練習source\n", 1)
st = re.sub(
    r"## 次工程\n\n.*\Z",
    "## 次工程\n\nTopic 19「ミニ新幹線 複電圧主回路」の解説画像PowerPointを作る。固定5問・9答案要素、一次8問＋二次4問、SPEC指定9項目・3可視化を変更せず、解説／練習sourceとPDFへ接続する。未確認の実車電圧・巻数・タップ構成・絶縁定格・切替方式は真値化しない。",
    st,
    flags=re.S,
)
STATUS.write_text(st, encoding="utf-8")

handoff_section = f"""## Topic 19 練習PDF

成果物:
- 練習PDF: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_practice.pdf`
- QA: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_practice_qa.md`

判定: `PASS / PRACTICE_PDF_COMPLETE`

品質:
- A4縦: `{pages} pages`
- pdfium 180 dpi: `{pages} / {pages} PASS`
- pdftoppm 180 dpi: `{pages} / {pages} PASS`
- qpdf構造・文字抽出: `PASS`
- 外周クリップ安全域: `{pages} / {pages} PASS`
- 一次8問＋二次4問・完全解説: `12 / 12`
- 一次正答一意性: `8 / 8 PASS`
- 固定5問・9答案要素接続: `9 / 9 PASS`
- SPEC指定9項目: `9 / 9 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認ミニ新幹線実車値の真値化: `0件`
- H25負荷時タップ切換装置を実車採用方式として扱う記述: `0件`
- 完成後clean blind公式照合: `未実施 / PowerPoint完成後`

"""

ho = HANDOFF.read_text(encoding="utf-8")
old_location = "現在地は `topic_19_practice_source_complete`。active topic は Topic 19 `ミニ新幹線 複電圧主回路`。制作前EXAM_ALIGNMENT、解説source、解説PDF、練習sourceまで完了。次は練習PDF。PowerPoint・完成後clean blindは未着手。"
new_location = "現在地は `topic_19_practice_pdf_complete`。active topic は Topic 19 `ミニ新幹線 複電圧主回路`。制作前EXAM_ALIGNMENT、解説source、解説PDF、練習source、練習PDFまで完了。次はPowerPoint。完成後clean blindは未着手。"
if old_location not in ho:
    fail("HANDOFF current-location text changed during reconciliation")
ho = ho.replace(old_location, new_location, 1)
if "## Topic 19 練習PDF\n" not in ho:
    ho = ho.replace("## Topic 19 練習source\n", handoff_section + "## Topic 19 練習source\n", 1)
ho = re.sub(
    r"## 次工程\n\n.*\Z",
    "## 次工程\n\nTopic 19の解説画像PowerPointを作る。固定5問・9答案要素、SPEC指定9項目・3可視化、解説／練習sourceとPDFの問題・正答・数式を変更しない。PowerPoint完成後にclean blind公式照合へ進む。",
    ho,
    flags=re.S,
)
HANDOFF.write_text(ho, encoding="utf-8")

main = MAIN.read_text(encoding="utf-8")
old_state_sentence = "制作前EXAM_ALIGNMENT、解説source、解説PDF、練習sourceを完了した。練習PDF・PowerPoint・完成後clean blindは未着手。"
new_state_sentence = "制作前EXAM_ALIGNMENT、解説source、解説PDF、練習source、練習PDFを完了した。PowerPoint・完成後clean blindは未着手。"
if old_state_sentence not in main:
    fail("Topic 19 main source state sentence changed during reconciliation")
main = main.replace(old_state_sentence, new_state_sentence, 1)
main = main.replace("current_status: `topic_19_practice_source_complete`", "current_status: `topic_19_practice_pdf_complete`", 1)
practice_line = "- 練習source: `19_mini_shinkansen_dual_voltage_main_circuit_practice_source.md` — `PASS / PRACTICE_SOURCE_COMPLETE`"
if practice_line not in main:
    fail("Topic 19 main source practice-output line changed during reconciliation")
main = main.replace(
    practice_line,
    practice_line + "\n- 練習PDF: `19_mini_shinkansen_dual_voltage_main_circuit_practice.pdf` — `PASS / PRACTICE_PDF_COMPLETE`\n- 練習PDF QA: `19_mini_shinkansen_dual_voltage_main_circuit_practice_qa.md`",
    1,
)
main = re.sub(
    r"次工程: 練習PDFを作る。.*?真値化しない。",
    "次工程: 解説画像PowerPointを作る。固定5問・9答案要素、一次8問＋二次4問、SPEC指定9項目・3計算/グラフの範囲を変えない。解説／練習sourceとPDFの問題・正答・数式を変更せず、未確認の実車仕様は真値化しない。",
    main,
    count=1,
    flags=re.S,
)
MAIN.write_text(main, encoding="utf-8")

print(f"PASS: generated {PDF} ({pages} pages, sha256={sha256})")
