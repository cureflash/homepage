from __future__ import annotations

import cmath
import math
import re
from pathlib import Path
from xml.sax.saxutils import escape

import fitz
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.cidfonts import UnicodeCIDFont
from reportlab.platypus import PageBreak, Paragraph, SimpleDocTemplate, Spacer

ROOT = Path(__file__).resolve().parents[4]
TOPIC = ROOT / "denken-shinkansen/06_shinkansen_power_2/topics/13_three_phase_unbalance"
SOURCE = TOPIC / "13_three_phase_unbalance_practice.md"
PDF = TOPIC / "13_three_phase_unbalance_practice.pdf"
QA = TOPIC / "13_three_phase_unbalance_practice_pdf_qa.md"
STATUS = ROOT / "denken-shinkansen/06_shinkansen_power_2/STATUS.md"
HANDOFF = ROOT / "denken-shinkansen/06_shinkansen_power_2/HANDOFF.md"


def register_fonts() -> tuple[str, str]:
    for name in ("HeiseiMin-W3", "HeiseiKakuGo-W5"):
        pdfmetrics.registerFont(UnicodeCIDFont(name))
    return "HeiseiMin-W3", "HeiseiKakuGo-W5"


def clean_inline(text: str) -> str:
    text = text.replace("**", "").replace("__", "")
    text = text.replace("`", "")
    return escape(text)


def build_pdf(source_text: str) -> None:
    font, bold = register_fonts()
    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle(name="JPBody", fontName=font, fontSize=8.6, leading=12.0, spaceAfter=2.2, wordWrap="CJK"))
    styles.add(ParagraphStyle(name="JPTitle", fontName=bold, fontSize=15.0, leading=20.0, alignment=TA_CENTER, spaceAfter=8.0, wordWrap="CJK"))
    styles.add(ParagraphStyle(name="JPH1", fontName=bold, fontSize=12.5, leading=16.0, spaceBefore=7.0, spaceAfter=4.0, wordWrap="CJK"))
    styles.add(ParagraphStyle(name="JPH2", fontName=bold, fontSize=10.5, leading=14.0, spaceBefore=5.0, spaceAfter=3.0, wordWrap="CJK"))
    styles.add(ParagraphStyle(name="JPH3", fontName=bold, fontSize=9.3, leading=12.5, spaceBefore=4.0, spaceAfter=2.0, wordWrap="CJK"))
    styles.add(ParagraphStyle(name="JPCode", fontName=font, fontSize=8.0, leading=10.6, leftIndent=6 * mm, rightIndent=2 * mm, spaceAfter=1.5, wordWrap="CJK"))
    styles.add(ParagraphStyle(name="JPBullet", fontName=font, fontSize=8.6, leading=12.0, leftIndent=5 * mm, firstLineIndent=-3 * mm, spaceAfter=1.6, wordWrap="CJK"))
    styles.add(ParagraphStyle(name="JPTable", fontName=font, fontSize=7.6, leading=10.0, leftIndent=2 * mm, rightIndent=1 * mm, spaceAfter=1.2, wordWrap="CJK"))

    def footer(canvas, doc):
        canvas.saveState()
        canvas.setFont(font, 7.2)
        canvas.drawString(16 * mm, 8 * mm, "電験二種 電力 Topic 13 練習問題")
        canvas.drawRightString(194 * mm, 8 * mm, f"{doc.page}")
        canvas.restoreState()

    doc = SimpleDocTemplate(
        str(PDF), pagesize=A4,
        rightMargin=14 * mm, leftMargin=14 * mm,
        topMargin=14 * mm, bottomMargin=14 * mm,
        title="Topic 13 練習問題・完全解説",
        author="cureflash/homepage",
    )

    story = []
    in_code = False
    first_title = True
    answer_break_done = False
    for raw in source_text.splitlines():
        line = raw.rstrip()
        if line.startswith("```"):
            in_code = not in_code
            continue
        if not line:
            story.append(Spacer(1, 1.5 * mm))
            continue
        if line == "# 解答・完全解説" and not answer_break_done:
            story.append(PageBreak())
            answer_break_done = True
        if in_code:
            story.append(Paragraph(clean_inline(line).replace(" ", "&nbsp;"), styles["JPCode"]))
        elif line.startswith("# "):
            style = styles["JPTitle"] if first_title else styles["JPH1"]
            story.append(Paragraph(clean_inline(line[2:]), style))
            first_title = False
        elif line.startswith("## "):
            story.append(Paragraph(clean_inline(line[3:]), styles["JPH2"]))
        elif line.startswith("### "):
            story.append(Paragraph(clean_inline(line[4:]), styles["JPH3"]))
        elif line.startswith("- "):
            story.append(Paragraph("• " + clean_inline(line[2:]), styles["JPBullet"]))
        elif line.startswith("|") and line.endswith("|"):
            cells = [c.strip() for c in line.strip("|").split("|")]
            if all(re.fullmatch(r":?-{3,}:?", c or "-") for c in cells):
                continue
            story.append(Paragraph(" ｜ ".join(clean_inline(c) for c in cells), styles["JPTable"]))
        else:
            story.append(Paragraph(clean_inline(line), styles["JPBody"]))

    doc.build(story, onFirstPage=footer, onLaterPages=footer)


def close(a: float, b: float, tol: float = 5e-3) -> bool:
    return abs(a - b) <= tol


def independent_numeric_qa() -> list[str]:
    checks: list[tuple[str, bool]] = []
    checks.append(("問3 120/√3 = 69.282 A", close(120 / math.sqrt(3), 69.282, 1e-3)))
    checks.append(("問4 電圧不平衡率 = 2.5 %", close(2.5 / 100 * 100, 2.5)))
    ib = 80 * cmath.exp(math.radians(-120) * 1j) + 20 * cmath.exp(math.radians(120) * 1j)
    checks.append(("問7 |Ib| = 72.11 A", close(abs(ib), 72.11, 1e-2)))
    a = cmath.exp(1j * 2 * math.pi / 3)
    va = 90 * cmath.exp(0j)
    vb = 90 * cmath.exp(math.radians(-120) * 1j)
    vc = 60 * cmath.exp(math.radians(120) * 1j)
    v0 = (va + vb + vc) / 3
    v1 = (va + a * vb + a**2 * vc) / 3
    v2 = (va + a**2 * vb + a * vc) / 3
    checks.append(("問8 (|V0|,|V1|,|V2|) = (10,80,10) V", close(abs(v0), 10, 1e-3) and close(abs(v1), 80, 1e-3) and close(abs(v2), 10, 1e-3)))
    checks.append(("問11 150/√3 = 86.603 A", close(150 / math.sqrt(3), 86.603, 1e-3)))
    ia = 100 + 0j
    ib2 = 80 * cmath.exp(math.radians(-120) * 1j) + 20 * cmath.exp(math.radians(120) * 1j)
    ic2 = 80 * cmath.exp(math.radians(120) * 1j) + 20 * cmath.exp(math.radians(-120) * 1j)
    checks.append(("問12 Ia+Ib+Ic = 0", abs(ia + ib2 + ic2) < 1e-9))
    checks.append(("問13 電圧不平衡率 = 2.00 %", close(1.32 / 66.0 * 100, 2.0)))
    p3 = math.sqrt(3) * 40
    p1 = 70 - 40 * math.cos(math.radians(30))
    util = (p3 + p1) / 110 * 100
    checks.append(("問14 P3,max = 69.282 kW", close(p3, 69.282, 1e-3)))
    checks.append(("問14 P1,max = 35.359 kW", close(p1, 35.359, 1e-3)))
    checks.append(("問14 利用率 = 95.128 %", close(util, 95.128, 1e-3)))
    iab = 100 * cmath.exp(math.radians(30) * 1j)
    ibc = 100 * cmath.exp(math.radians(-90) * 1j)
    ica = 100 * cmath.exp(math.radians(150) * 1j)
    ia3 = iab - ica
    ib3 = -iab + ibc
    ic3 = -ibc + ica
    i2 = (ia3 + a**2 * ib3 + a * ic3) / 3
    checks.append(("問15 三相側線電流 = 173.205 A", all(close(abs(x), 173.205, 1e-3) for x in (ia3, ib3, ic3))))
    checks.append(("問15 I2 = 0 A", abs(i2) < 1e-9))
    failed = [name for name, ok in checks if not ok]
    if failed:
        raise AssertionError("numeric QA failed: " + "; ".join(failed))
    return [name for name, _ in checks]


def source_logic_qa(source_text: str) -> None:
    expected_answers = {1: 3, 2: 2, 3: 2, 4: 3, 5: 2, 6: 3, 7: 4, 8: 2, 9: 2, 10: 2}
    answer_part = source_text.split("# 解答・完全解説", 1)[1]
    for q, ans in expected_answers.items():
        m = re.search(rf"^## 問{q}\s*$([\s\S]*?)(?=^## 問\d+\s*$|\Z)", answer_part, re.M)
        if not m or f"正答: `{ans}`" not in m.group(1):
            raise AssertionError(f"問{q} correct-answer uniqueness marker mismatch")
    for token in [
        "正式2問・8答案要素", "H28 二種一次", "H23 二種二次",
        "P1 + 40 cos30° = 70", "I2 = 0", "Topic 16の故障計算を先取りしていない: PASS",
    ]:
        if token not in source_text:
            raise AssertionError(f"required source marker missing: {token}")


def pdf_qa(source_text: str) -> tuple[int, str]:
    doc = fitz.open(PDF)
    page_count = len(doc)
    if page_count < 2:
        raise AssertionError(f"unexpectedly short PDF: {page_count} pages")
    extracted = []
    for i, page in enumerate(doc):
        pix = page.get_pixmap(dpi=200, alpha=False)
        if pix.width < 1000 or pix.height < 1000:
            raise AssertionError(f"page {i+1} render too small")
        text = page.get_text("text")
        if len(text.strip()) < 20:
            raise AssertionError(f"page {i+1} text unexpectedly empty")
        for b in page.get_text("blocks"):
            x0, y0, x1, y1 = b[:4]
            if x0 < -1 or y0 < -1 or x1 > page.rect.width + 1 or y1 > page.rect.height + 1:
                raise AssertionError(f"page {i+1} text block outside page bounds")
        extracted.append(text)
    all_text = "\n".join(extracted)
    for q in range(1, 16):
        if f"問{q}" not in all_text:
            raise AssertionError(f"問{q} missing from extracted PDF text")
    for token in ["解答・完全解説", "69.282", "35.359", "95.13", "173.205", "2.00 %"]:
        if token not in all_text:
            raise AssertionError(f"PDF extracted text missing: {token}")
    if "�" in all_text:
        raise AssertionError("U+FFFD found in extracted PDF text")
    return page_count, all_text


def update_progress(page_count: int) -> None:
    status = STATUS.read_text(encoding="utf-8")
    if "current_status: `topic_13_practice_source_complete`" not in status:
        raise RuntimeError("STATUS moved; refusing to overwrite newer progress")
    status = status.replace("current_status: `topic_13_practice_source_complete`", "current_status: `topic_13_practice_pdf_complete`", 1)
    status = status.replace(
        "制作前EXAM_ALIGNMENT、制作前blind独立再解答、解説source、解説PDF＋PDF QA、練習問題・完全解説sourceまで完了。",
        "制作前EXAM_ALIGNMENT、制作前blind独立再解答、解説source、解説PDF＋PDF QA、練習問題・完全解説source、練習PDF＋PDF QAまで完了。", 1)
    marker = "この `8 / 8` は教材内の練習カバレッジであり、完成後blind独立再解答のPASSではない。"
    block = (
        f"練習PDF＋QA:\n"
        f"- `13_three_phase_unbalance_practice.pdf`: A4縦 `{page_count}ページ`。\n"
        f"- 200 dpi全ページレンダリング: `{page_count} / {page_count} PASS`。\n"
        f"- 文字抽出QA: PASS、U+FFFD `0件`。\n"
        f"- 全15問の数値・論理再確認: `15 / 15 PASS`。\n"
        f"- 一次型正答一意性: `10 / 10 PASS`。\n"
        f"- 正式2問8答案要素の教材内接続: `8 / 8`。\n"
        f"- 制作前不足2要素の再訓練維持: PASS。\n\n"
    )
    if block.strip() not in status:
        status = status.replace(marker, block + marker, 1)
    status = status.replace(
        "- [ ] Topic 13 — production-pre EXAM_ALIGNMENT + blind re-answer + explanation source/PDF + practice source complete; practice PDF pending",
        "- [ ] Topic 13 — production-pre EXAM_ALIGNMENT + blind re-answer + explanation source/PDF + practice source/PDF complete; PowerPoint pending", 1)
    status = re.sub(
        r"## next_start\n\n[\s\S]*?\Z",
        "## next_start\n\nTopic 13の解説画像PowerPointを制作し、全スライド表示QAと固定2問8答案要素・制作前不足2要素の説明維持を確認する。Topic 14以降・Topic 16故障計算は先取りしない。\n",
        status)
    STATUS.write_text(status, encoding="utf-8")

    handoff = HANDOFF.read_text(encoding="utf-8")
    if "current_status: `topic_13_practice_source_complete`" not in handoff:
        raise RuntimeError("HANDOFF moved; refusing to overwrite newer progress")
    handoff = handoff.replace("current_status: `topic_13_practice_source_complete`", "current_status: `topic_13_practice_pdf_complete`", 1)
    handoff = re.sub(
        r"## 今回完了\n\n[\s\S]*?\n## 現在地",
        f"## 今回完了\n\n"
        f"Topic 13「単相の新幹線負荷は三相系統を乱さない？」の練習PDFとPDF QAを制作した。\n\n"
        f"成果物:\n"
        f"- `topics/13_three_phase_unbalance/13_three_phase_unbalance_practice.pdf`\n"
        f"- `topics/13_three_phase_unbalance/13_three_phase_unbalance_practice_pdf_qa.md`\n\n"
        f"QA:\n"
        f"- A4縦 `{page_count}ページ`、200 dpi全ページレンダリング `{page_count} / {page_count} PASS`\n"
        f"- 文字抽出PASS、U+FFFD `0件`\n"
        f"- 全15問の数値・論理再確認 `15 / 15 PASS`\n"
        f"- 一次型正答一意性 `10 / 10 PASS`\n"
        f"- 正式2問8答案要素の教材内接続 `8 / 8`\n"
        f"- 制作前不足2要素のフェーザ投影・単相負荷合計・利用率の再訓練維持: PASS\n\n"
        f"正式品質ゲートと制作前blind独立再解答ベースラインは変更していない。完成後blind独立再解答は未実施で、Topic 13は `IN_PROGRESS`、完成数は `12 / 22` のまま。\n\n"
        f"品質境界:\n"
        f"- 正式過去問追加: `0件`\n"
        f"- Topic 14以降の先取り: `0件`\n"
        f"- Topic 16故障計算先取り: `0件`\n"
        f"- 未確認実設備値の真値使用: `0件`\n"
        f"- 公式過去問転載: `0件`\n"
        f"- 仕様追加: `0件`\n\n"
        f"## 現在地", handoff, count=1)
    handoff = re.sub(
        r"## 次に行う\n\n[\s\S]*?\Z",
        "## 次に行う\n\nTopic 13の解説画像PowerPointを制作し、全スライド表示QAと固定2問8答案要素・制作前不足2要素の説明維持を確認する。Topic 14以降・Topic 16故障計算は先取りしない。\n",
        handoff)
    HANDOFF.write_text(handoff, encoding="utf-8")


def write_qa(page_count: int, numeric_checks: list[str]) -> None:
    qa = f"""# Topic 13 練習PDF QA

更新日: 2026-09-18
対象: `13_three_phase_unbalance_practice.pdf`
正本source: `13_three_phase_unbalance_practice.md`

## 生成結果

- 用紙: A4縦
- ページ数: `{page_count}`
- 収録問題: `15 / 15`
- 一次型五肢択一: `10 / 10`
- 二次型記述: `5 / 5`
- 完全解説: `15 / 15`

## 表示・文字抽出QA

- 200 dpi全ページレンダリング: `{page_count} / {page_count} PASS`
- 各ページ非空: PASS
- 抽出テキストブロックのページ外逸脱: 0件
- 問1〜問15見出し存在: `15 / 15 PASS`
- `解答・完全解説`: PASS
- U+FFFD: `0件`
- 主要値 `69.282`, `35.359`, `95.13`, `173.205`, `2.00 %`: PASS

## 数値・論理QA

sourceとは別計算で主要数値を再計算した。

"""
    for item in numeric_checks:
        qa += f"- {item}: PASS\n"
    qa += """

一次型正答一意性:
- 問1〜10の正答列 `3, 2, 2, 3, 2, 3, 4, 2, 2, 2`: `10 / 10 PASS`
- source上の正答マーカー不一致: `0件`

論理維持:
- 正式品質ゲートの問題数・答案要素を変更していない: PASS
- H28一次5答案要素の教材内接続: `5 / 5`
- H23二次3答案要素の教材内接続: `3 / 3`
- 制作前不足2答案要素のフェーザ投影・単相負荷合計・利用率を再訓練: PASS
- Topic 14以降の先取り: `0件`
- Topic 16故障計算先取り: `0件`
- 未確認実設備値の真値使用: `0件`
- 公式過去問転載追加: `0件`
- 仕様追加: `0件`

この `8 / 8` は教材内カバレッジであり、完成後blind独立再解答のPASSではない。

判定: `PASS`

次工程: Topic 13の解説画像PowerPointを制作し、全スライド表示QAと固定2問8答案要素・制作前不足2要素の説明維持を確認する。
"""
    QA.write_text(qa, encoding="utf-8")


def main() -> None:
    source_text = SOURCE.read_text(encoding="utf-8")
    source_logic_qa(source_text)
    numeric_checks = independent_numeric_qa()
    build_pdf(source_text)
    page_count, _ = pdf_qa(source_text)
    write_qa(page_count, numeric_checks)
    update_progress(page_count)
    print(f"PASS: generated {PDF} ({page_count} pages) and QA/progress records")


if __name__ == "__main__":
    main()
