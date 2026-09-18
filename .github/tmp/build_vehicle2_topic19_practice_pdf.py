from __future__ import annotations

from pathlib import Path
import re
import sys
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.cidfonts import UnicodeCIDFont
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    PageBreak,
    HRFlowable,
)

if len(sys.argv) != 3:
    raise SystemExit("usage: build_vehicle2_topic19_practice_pdf.py SOURCE.md OUTPUT.pdf")

src = Path(sys.argv[1])
out = Path(sys.argv[2])
text = src.read_text(encoding="utf-8")

start_marker = "# 一次試験型"
end_marker = "# SPEC指定項目・可視化への接続"
if start_marker not in text or end_marker not in text:
    raise SystemExit("required practice section markers not found")
section = text.split(start_marker, 1)[1].split(end_marker, 1)[0]
section = start_marker + section

# Keep the PDF a direct rendering of the practice questions/answers only.
# Source metadata, EXAM_ALIGNMENT tables and internal QA are intentionally not duplicated.

pdfmetrics.registerFont(UnicodeCIDFont("HeiseiKakuGo-W5"))
FONT = "HeiseiKakuGo-W5"

styles = getSampleStyleSheet()
base = dict(fontName=FONT, textColor=colors.HexColor("#202833"), splitLongWords=False)

title_style = ParagraphStyle(
    "TitleJP",
    parent=styles["Title"],
    **base,
    fontSize=16,
    leading=20,
    alignment=TA_CENTER,
    spaceAfter=7 * mm,
)
h1 = ParagraphStyle(
    "H1JP",
    parent=styles["Heading1"],
    **base,
    fontSize=13.5,
    leading=17,
    spaceBefore=2 * mm,
    spaceAfter=3 * mm,
    keepWithNext=True,
)
h2 = ParagraphStyle(
    "H2JP",
    parent=styles["Heading2"],
    **base,
    fontSize=11.2,
    leading=14,
    spaceBefore=3.2 * mm,
    spaceAfter=1.8 * mm,
    keepWithNext=True,
)
h3 = ParagraphStyle(
    "H3JP",
    parent=styles["Heading3"],
    **base,
    fontSize=9.3,
    leading=12,
    textColor=colors.HexColor("#274d73"),
    spaceBefore=2 * mm,
    spaceAfter=1 * mm,
    keepWithNext=True,
)
body = ParagraphStyle(
    "BodyJP",
    parent=styles["BodyText"],
    **base,
    fontSize=8.35,
    leading=11.2,
    alignment=TA_LEFT,
    spaceAfter=1.2 * mm,
    allowWidows=0,
    allowOrphans=0,
)
choice = ParagraphStyle(
    "ChoiceJP",
    parent=body,
    leftIndent=4.5 * mm,
    firstLineIndent=-2.5 * mm,
    spaceAfter=0.7 * mm,
)
formula = ParagraphStyle(
    "FormulaJP",
    parent=body,
    fontSize=8.5,
    leading=11,
    alignment=TA_CENTER,
    leftIndent=8 * mm,
    rightIndent=8 * mm,
    backColor=colors.HexColor("#f3f6f9"),
    borderColor=colors.HexColor("#d8e0e8"),
    borderWidth=0.35,
    borderPadding=4,
    spaceBefore=1.2 * mm,
    spaceAfter=1.8 * mm,
)
note = ParagraphStyle(
    "NoteJP",
    parent=body,
    fontSize=7.8,
    leading=10.5,
    textColor=colors.HexColor("#566270"),
    backColor=colors.HexColor("#f7f7f7"),
    borderColor=colors.HexColor("#dddddd"),
    borderWidth=0.3,
    borderPadding=5,
    spaceAfter=4 * mm,
)


def clean_inline(s: str) -> str:
    s = s.replace("**", "").replace("__", "")
    s = s.replace("`", "")
    return escape(s)

story = [
    Paragraph("19 ミニ新幹線 複電圧主回路", title_style),
    Paragraph("練習問題・完全解説（電験二種）", h1),
    Paragraph(
        "問題中の数値はすべて一般教材用の仮定値であり、ミニ新幹線実車値ではない。"
        "未確認の実車架線電圧、巻数・タップ構成、絶縁定格、主変換装置・補助電源・電源切替方式は真値化しない。",
        note,
    ),
]

lines = section.splitlines()
seen_first_h1 = False
for raw in lines:
    line = raw.strip()
    if not line:
        story.append(Spacer(1, 0.8 * mm))
        continue
    if line == "---":
        story.append(Spacer(1, 1.0 * mm))
        story.append(HRFlowable(width="100%", thickness=0.35, color=colors.HexColor("#cfd7df")))
        story.append(Spacer(1, 1.0 * mm))
        continue
    if line.startswith("# "):
        heading = line[2:].strip()
        if seen_first_h1 and heading == "二次試験型":
            story.append(PageBreak())
        story.append(Paragraph(clean_inline(heading), h1))
        seen_first_h1 = True
        continue
    if line.startswith("## "):
        story.append(Paragraph(clean_inline(line[3:].strip()), h2))
        continue
    if line.startswith("### "):
        story.append(Paragraph(clean_inline(line[4:].strip()), h3))
        continue
    if re.match(r"^\d+\.\s", line):
        story.append(Paragraph(clean_inline(line), choice))
        continue
    if len(line) >= 2 and line.startswith("`") and line.endswith("`"):
        story.append(Paragraph(clean_inline(line), formula))
        continue
    story.append(Paragraph(clean_inline(line), body))

out.parent.mkdir(parents=True, exist_ok=True)
doc = SimpleDocTemplate(
    str(out),
    pagesize=A4,
    rightMargin=12 * mm,
    leftMargin=12 * mm,
    topMargin=12 * mm,
    bottomMargin=14 * mm,
    title="19 ミニ新幹線 複電圧主回路 - 練習問題・完全解説",
    author="denken-shinkansen",
    subject="電験二種 新幹線車両 Topic 19 練習問題",
)


def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor("#d5dbe2"))
    canvas.setLineWidth(0.35)
    canvas.line(12 * mm, 10 * mm, A4[0] - 12 * mm, 10 * mm)
    canvas.setFont(FONT, 7)
    canvas.setFillColor(colors.HexColor("#6a7580"))
    canvas.drawString(12 * mm, 6.5 * mm, "電験二種 / Topic 19 ミニ新幹線 複電圧主回路")
    canvas.drawRightString(A4[0] - 12 * mm, 6.5 * mm, f"{doc.page}")
    canvas.restoreState()


doc.build(story, onFirstPage=footer, onLaterPages=footer)

if not out.exists() or out.stat().st_size < 5000:
    raise SystemExit("generated PDF is missing or unexpectedly small")
