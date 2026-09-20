from pathlib import Path
import hashlib
import re
import subprocess

from PIL import Image, ImageChops, ImageStat
import pypdfium2 as pdfium

ROOT = Path("denken-shinkansen/05_shinkansen_vehicle_2/topics/35_atc_track_circuit_analysis")
PDF = ROOT / "35_atc_track_circuit_analysis_explanation.pdf"
RESULT = ROOT / "35_atc_track_circuit_analysis_renderer_qa_result.md"
TMP = Path("/tmp/topic35_pdf_qa")
POP = TMP / "poppler"
PDFIUM = TMP / "pdfium"
TMP.mkdir(parents=True, exist_ok=True)
POP.mkdir(parents=True, exist_ok=True)
PDFIUM.mkdir(parents=True, exist_ok=True)


def run(cmd, *, stdout=None, stderr=None):
    return subprocess.run(cmd, check=True, stdout=stdout, stderr=stderr, text=True)

# Structural validation.
qpdf = subprocess.run(["qpdf", "--check", str(PDF)], check=True, capture_output=True, text=True)
info = subprocess.run(["pdfinfo", str(PDF)], check=True, capture_output=True, text=True)
if info.stderr.strip():
    raise RuntimeError(f"pdfinfo stderr: {info.stderr}")

m_pages = re.search(r"^Pages:\s+(\d+)\s*$", info.stdout, re.M)
m_size = re.search(r"^Page size:\s+([0-9.]+) x ([0-9.]+) pts", info.stdout, re.M)
if not m_pages or not m_size:
    raise RuntimeError("pdfinfo parse failed")
pages = int(m_pages.group(1))
width = float(m_size.group(1))
height = float(m_size.group(2))
assert pages == 10, pages
assert 595.2 <= width <= 595.4 and 841.8 <= height <= 842.0, (width, height)

# Text extraction and content-presence gates.
txt_path = TMP / "topic35.txt"
with txt_path.open("w", encoding="utf-8") as out, (TMP / "pdftotext.err").open("w", encoding="utf-8") as err:
    run(["pdftotext", str(PDF), "-"], stdout=out, stderr=err)
err_text = (TMP / "pdftotext.err").read_text(encoding="utf-8", errors="replace")
if err_text.strip():
    raise RuntimeError(f"pdftotext stderr: {err_text}")
text = txt_path.read_text(encoding="utf-8", errors="replace")
assert "\ufffd" not in text
normalized = " ".join(text.split())
required_terms = [
    "軌道回路",
    "レールインピーダンス",
    "車軸短絡",
    "受信レベル",
    "信号電流",
    "回路条件",
    "フェイルセーフ",
]
missing_terms = [term for term in required_terms if term not in normalized]
if missing_terms:
    raise RuntimeError(f"SPEC terms missing from extracted PDF text: {missing_terms}")
for token in ["0.500", "9.00", "7.692", "0.7519", "0.03759", "9.78", "15.677", "2.683", "0.1712"]:
    if token not in normalized:
        raise RuntimeError(f"example-result token missing from extracted PDF text: {token}")

# Poppler render at 160 dpi.
with (TMP / "pdftoppm.err").open("w", encoding="utf-8") as err:
    run(["pdftoppm", "-png", "-r", "160", str(PDF), str(POP / "page")], stdout=subprocess.DEVNULL, stderr=err)
pop_err = (TMP / "pdftoppm.err").read_text(encoding="utf-8", errors="replace")
if pop_err.strip():
    raise RuntimeError(f"pdftoppm stderr: {pop_err}")
pop_files = sorted(POP.glob("page-*.png"))
assert len(pop_files) == 10, len(pop_files)

# PDFium render at the same nominal resolution.
doc = pdfium.PdfDocument(str(PDF))
assert len(doc) == 10, len(doc)
for i, page in enumerate(doc, 1):
    page.render(scale=160 / 72).to_pil().save(PDFIUM / f"page-{i:02d}.png")
pdfium_files = sorted(PDFIUM.glob("page-*.png"))
assert len(pdfium_files) == 10, len(pdfium_files)

# Blank-page, edge-clipping and cross-renderer diagnostics.
minimum_margin = None
diffs = []
for pop_path, pdfium_path in zip(pop_files, pdfium_files):
    p = Image.open(pop_path).convert("RGB")
    f = Image.open(pdfium_path).convert("RGB")
    for img_path, img in ((pop_path, p), (pdfium_path, f)):
        gray = img.convert("L")
        mask = gray.point(lambda x: 255 if x < 248 else 0)
        box = mask.getbbox()
        if box is None:
            raise RuntimeError(f"blank page: {img_path}")
        left, top, right, bottom = box
        margins = (left, top, img.width - right, img.height - bottom)
        local_min = min(margins)
        minimum_margin = local_min if minimum_margin is None else min(minimum_margin, local_min)
        if local_min < 8:
            raise RuntimeError(f"content touches page edge: {img_path}: margins={margins}")
    if f.size != p.size:
        f = f.resize(p.size, Image.Resampling.BICUBIC)
    diff = ImageChops.difference(p, f).convert("L")
    mean = ImageStat.Stat(diff).mean[0]
    diffs.append(mean / 255 * 100)

sha256 = hashlib.sha256(PDF.read_bytes()).hexdigest()
result = f"""# Topic 35 explanation PDF renderer QA result

- PDF: `35_atc_track_circuit_analysis_explanation.pdf`
- SHA-256: `{sha256}`
- qpdf check: `PASS`
- A4 portrait: `PASS` (`{width:.4f} x {height:.4f} pt`)
- pages: `10 / 10`
- Poppler render 160 dpi: `10 / 10 PASS`
- PDFium render 160 dpi: `10 / 10 PASS`
- blank pages: `0`
- extracted text chars: `{len(text)}`
- replacement U+FFFD: `0`
- SPEC fixed terms: `7 / 7 PASS`
- three-stage example numeric tokens: `9 / 9 PASS`
- minimum content margin across both renderers: `{minimum_margin} px`
- renderer mean pixel-difference range: `{min(diffs):.4f}% - {max(diffs):.4f}%`
- exact blocker: `0`
"""
RESULT.write_text(result, encoding="utf-8")
print(result)
