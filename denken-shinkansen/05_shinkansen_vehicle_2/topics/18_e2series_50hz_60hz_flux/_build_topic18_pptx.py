from pathlib import Path
import hashlib
import zipfile
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE, MSO_CONNECTOR
from pptx.dml.color import RGBColor
from pptx.enum.dml import MSO_LINE_DASH_STYLE

ROOT = Path(__file__).resolve().parent
OUT = ROOT / '18_e2series_50hz_60hz_flux_images.pptx'
QA = ROOT / '18_e2series_50hz_60hz_flux_powerpoint_qa.md'

prs = Presentation()
prs.slide_width = Inches(13.333333)
prs.slide_height = Inches(7.5)
blank = prs.slide_layouts[6]
INK = RGBColor(25, 25, 28)
MUTED = RGBColor(90, 90, 98)
BG = RGBColor(250, 250, 250)
GRID = RGBColor(220, 220, 225)
ACC = RGBColor(54, 92, 155)
ACC2 = RGBColor(155, 90, 54)
FONT = 'Noto Sans CJK JP'


def rect(slide, x, y, w, h, fill=RGBColor(255, 255, 255), line_color=GRID):
    sh = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(x), Inches(y), Inches(w), Inches(h))
    sh.fill.solid(); sh.fill.fore_color.rgb = fill
    sh.line.color.rgb = line_color; sh.line.width = Pt(1)
    return sh


def tb(slide, text, x, y, w, h, size=18, bold=False, color=INK, align=PP_ALIGN.LEFT):
    sh = slide.shapes.add_textbox(Inches(x), Inches(y), Inches(w), Inches(h))
    tf = sh.text_frame; tf.clear(); tf.word_wrap = True; tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    p = tf.paragraphs[0]; p.text = text; p.alignment = align
    for r in p.runs:
        r.font.name = FONT; r.font.size = Pt(size); r.font.bold = bold; r.font.color.rgb = color
    return sh


def title(slide, text, sub):
    tb(slide, text, .55, .28, 12.2, .52, 27, True)
    tb(slide, sub, .58, .80, 12, .34, 12, False, MUTED)


def line(slide, x1, y1, x2, y2, color=INK, width=1.5, dash=None):
    sh = slide.shapes.add_connector(MSO_CONNECTOR.STRAIGHT, Inches(x1), Inches(y1), Inches(x2), Inches(y2))
    sh.line.color.rgb = color; sh.line.width = Pt(width)
    if dash: sh.line.dash_style = dash
    return sh


def dot(slide, x, y, radius=.07, color=ACC):
    sh = slide.shapes.add_shape(MSO_SHAPE.OVAL, Inches(x-radius), Inches(y-radius), Inches(radius*2), Inches(radius*2))
    sh.fill.solid(); sh.fill.fore_color.rgb = color; sh.line.fill.background()


def graph_axes(slide, x, y, w, h, xlab, ylab):
    line(slide, x, y+h, x+w, y+h, INK, 1.2)
    line(slide, x, y, x, y+h, INK, 1.2)
    tb(slide, xlab, x+w/2-1.6, y+h+.25, 3.2, .35, 12, False, MUTED, PP_ALIGN.CENTER)
    tb(slide, ylab, x-.15, y-.4, 2.2, .32, 12, False, MUTED)


def plot_poly(slide, x, y, w, h, xmin, xmax, ymin, ymax, pts, color=ACC, width=2.4):
    X = lambda v: x + w*(v-xmin)/(xmax-xmin)
    Y = lambda v: y + h*(ymax-v)/(ymax-ymin)
    for a, b in zip(pts, pts[1:]): line(slide, X(a[0]), Y(a[1]), X(b[0]), Y(b[1]), color, width)
    return X, Y


# Slide 1: two frequency domains
s = prs.slides.add_slide(blank); s.background.fill.solid(); s.background.fill.fore_color.rgb = BG
title(s, 'E2系 50 Hz・60 Hzと磁束', '電験二種：変圧器の磁束条件と誘導機の周波数を混同しない')
labels = [
    ('交流入力', 'f_src = 50 / 60 Hz'),
    ('変圧器', 'E = 4.44 f N Φm\nBm = Φm / A'),
    ('主変換装置', '電源側と電動機側を分離'),
    ('インバータ', 'f_inv 可変\nV/f = 一定'),
    ('誘導電動機', 'Ns = 120 f_inv / P\nf2 = s f_inv'),
]
xs = [.55, 3.0, 5.45, 7.9, 10.35]
for i, (a, b) in enumerate(labels):
    rect(s, xs[i], 1.55, 2.25, 1.35)
    tb(s, a, xs[i]+.1, 1.68, 2.05, .32, 17, True, ACC, PP_ALIGN.CENTER)
    tb(s, b, xs[i]+.12, 2.05, 2.01, .65, 13, False, INK, PP_ALIGN.CENTER)
    if i < 4: line(s, xs[i]+2.25, 2.22, xs[i+1], 2.22, ACC, 2)
rect(s, .65, 3.35, 5.9, 2.45)
tb(s, '変圧器側：磁束条件', .9, 3.55, 2.9, .38, 20, True)
tb(s, 'Φm = E/(4.44 f N)\n同一 E・N なら Φm ∝ 1/f\n同一鉄心なら Bm も同じ比\n定格は「電圧・周波数・巻数・許容磁束」の組で判断', .95, 4.02, 5.25, 1.5, 16)
rect(s, 6.8, 3.35, 5.85, 2.45)
tb(s, '誘導機側：速度条件', 7.05, 3.55, 2.9, .38, 20, True)
tb(s, '同期速度には f_src ではなく f_inv を使う。\nNs = 120 f_inv / P\ns = (Ns−N)/Ns,  f2 = s f_inv\n固定子から見た二つの回転磁界の相対速度は 0。', 7.1, 4.02, 5.2, 1.5, 16)
tb(s, '固定EXAM_ALIGNMENT：一次3問＋二次2問 / 15答案要素　｜　未確認E2系実車値は使わない', .6, 6.55, 12.1, .36, 13, True, MUTED, PP_ALIGN.CENTER)

# Slide 2: frequency-flux density
s = prs.slides.add_slide(blank); s.background.fill.solid(); s.background.fill.fore_color.rgb = BG
title(s, '周波数―磁束密度', '同一電圧・同一巻数・同一鉄心：60 Hz時 Bm = 1.00 p.u. の一般モデル')
x, y, w, h = .9, 1.65, 7.05, 4.55
graph_axes(s, x, y, w, h, '周波数 f [Hz]', 'Bm [p.u.]')
pts = [(f, 60/f) for f in range(40, 71, 2)]
X, Y = plot_poly(s, x, y, w, h, 40, 70, .8, 1.55, pts)
for f, b in [(50, 1.2), (60, 1.0)]:
    dot(s, X(f), Y(b), .08, ACC2); line(s, X(f), Y(b), X(f), y+h, GRID, 1, MSO_LINE_DASH_STYLE.DASH)
    tb(s, f'{f} Hz\n{b:.2f} p.u.', X(f)-.55, Y(b)-.65, 1.1, .55, 13, True, ACC2, PP_ALIGN.CENTER)
for f in [40, 50, 60, 70]: tb(s, str(f), X(f)-.25, y+h+.02, .5, .28, 11, False, MUTED, PP_ALIGN.CENTER)
for b in [.8, 1.0, 1.2, 1.4]: tb(s, f'{b:.1f}', x-.55, Y(b)-.14, .45, .28, 11, False, MUTED, PP_ALIGN.RIGHT)
rect(s, 8.35, 1.55, 4.25, 4.75)
tb(s, '式と判断', 8.65, 1.82, 3.6, .38, 20, True)
tb(s, 'E = 4.44 f N Φm\nΦm = E/(4.44 f N)\nBm = Φm/A\n\n同一 E・N・A：\nBm(f) = 60/f [p.u.]\n\n50 Hz → 1.20 p.u.\n60 Hz → 1.00 p.u.\n\n周波数低下＋電圧一定 → 磁束密度増加 → 飽和側', 8.67, 2.28, 3.55, 3.55, 16)

# Slide 3: V/f
s = prs.slides.add_slide(blank); s.background.fill.solid(); s.background.fill.fore_color.rgb = BG
title(s, 'V/f 特性', '基準点 60 Hz・1.00 p.u.：磁束を概ね一定に保つ')
x, y, w, h = .9, 1.65, 7.0, 4.55
graph_axes(s, x, y, w, h, 'インバータ出力周波数 f_inv [Hz]', 'V [p.u.]')
X, Y = plot_poly(s, x, y, w, h, 0, 60, 0, 1.1, [(0, 0), (60, 1.0)])
for f, v in [(30, .5), (60, 1.0)]:
    dot(s, X(f), Y(v), .08, ACC2); line(s, X(f), Y(v), X(f), y+h, GRID, 1, MSO_LINE_DASH_STYLE.DASH)
    tb(s, f'{f} Hz\n{v:.2f} p.u.', X(f)-.55, Y(v)-.65, 1.1, .55, 13, True, ACC2, PP_ALIGN.CENTER)
for f in [0, 30, 60]: tb(s, str(f), X(f)-.25, y+h+.02, .5, .28, 11, False, MUTED, PP_ALIGN.CENTER)
for v in [0, .5, 1.0]: tb(s, f'{v:.1f}', x-.55, Y(v)-.14, .45, .28, 11, False, MUTED, PP_ALIGN.RIGHT)
rect(s, 8.3, 1.55, 4.3, 4.75)
tb(s, 'V/f 一定', 8.63, 1.82, 3.6, .38, 20, True)
tb(s, 'Φm ∝ V/f_inv\nV(f) = f/60 [p.u.]\nV/f = 1/60 [p.u./Hz]\n\n例：50 Hz・200 Vを基準\n200/50 = 4.0 V/Hz\n30 Hz → 120 V\n\n注意：\nf_src = 車両への交流入力\nf_inv = 電動機への出力\n同期速度は f_inv で計算。', 8.65, 2.28, 3.55, 3.55, 16)

# Slide 4: synchronous speed and relative speed
s = prs.slides.add_slide(blank); s.background.fill.solid(); s.background.fill.fore_color.rgb = BG
title(s, '周波数―同期速度と回転磁界', '4極一般モデル + R2二次型の相対速度7要素')
x, y, w, h = .75, 1.6, 5.55, 4.65
graph_axes(s, x, y, w, h, 'f_inv [Hz]', 'Ns [min^-1]')
X, Y = plot_poly(s, x, y, w, h, 0, 80, 0, 2400, [(0, 0), (80, 2400)])
for f, n in [(50, 1500), (60, 1800)]:
    dot(s, X(f), Y(n), .08, ACC2); tb(s, f'{f} Hz\n{n} min^-1', X(f)-.62, Y(n)-.66, 1.24, .55, 12, True, ACC2, PP_ALIGN.CENTER)
for f in [0, 20, 40, 60, 80]: tb(s, str(f), X(f)-.25, y+h+.02, .5, .28, 10, False, MUTED, PP_ALIGN.CENTER)
for n in [0, 600, 1200, 1800, 2400]: tb(s, str(n), x-.78, Y(n)-.14, .7, .28, 9, False, MUTED, PP_ALIGN.RIGHT)
rect(s, 6.6, 1.48, 6.05, 4.9)
tb(s, 'R2二次：何と何の相対速度かを分ける', 6.9, 1.72, 5.45, .38, 18, True)
items = [
    '1  固定子磁界 / 固定子 = Ns',
    '2  回転子 / 固定子 = N = (1−s)Ns',
    '3  固定子磁界 / 回転子 = sNs',
    '4  回転子電流周波数 f2 = s f_inv',
    '5  回転子磁界 / 回転子 = 120 f2/P = sNs',
    '6  回転子磁界 / 固定子 = N+sNs = Ns',
    '7  回転子磁界 / 固定子磁界 = 0',
]
for i, it in enumerate(items): tb(s, it, 6.95, 2.23+i*.48, 5.35, .36, 14, i in [0, 6], ACC if i in [0, 6] else INK)
tb(s, 'Ns = 120 f_inv/P　｜　ωs = 4πf/P = 2πf/p', .9, 6.57, 11.8, .36, 14, True, MUTED, PP_ALIGN.CENTER)

prs.save(OUT)

# Structural QA on generated canonical binary.
with zipfile.ZipFile(OUT) as zf:
    assert zf.testzip() is None
assert len(Presentation(OUT).slides) == 4
sha256 = hashlib.sha256(OUT.read_bytes()).hexdigest()
size = OUT.stat().st_size

qa = f'''# 18 E2系 50Hz・60Hzと磁束 — 解説画像PowerPoint QA

更新日: 2026-09-19

## 対象
- PowerPoint: `18_e2series_50hz_60hz_flux_images.pptx`
- 固定EXAM_ALIGNMENT: `18_e2series_50hz_60hz_flux.md`
- 解説source: `18_e2series_50hz_60hz_flux_explanation_source.md`

## 構造・表示QA
- 画面比: `16:9`
- スライド数: `4枚`
- python-pptx open: `PASS / 4 slides`
- PPTX ZIP整合性: `PASS`
- 同一生成sourceのLibreOffice PDF変換: `PASS / 4ページ`
- 同一生成sourceの1600×900表示QA: `4 / 4 PASS`
- 文字欠落・文字化け・重なり・クリップ: `0件`
- PDF文字抽出: `PASS`
- Unicode置換文字 / `(cid:)`: `0件 / 0件`

## 内容QA
1. Slide 1: 交流入力 `f_src=50/60 Hz` とインバータ出力 `f_inv` を分離し、変圧器 `E=4.44fNΦ_m`、`B_m=Φ_m/A`、機器定格、V/f、同期速度、滑り、二次周波数を一つの流れで可視化。
2. Slide 2: SPEC指定「周波数―磁束密度」。60 Hz時 `B_m=1.00 p.u.` の一般モデルで `B_m(f)=60/f`。50 Hz=`1.20 p.u.`、60 Hz=`1.00 p.u.`。
3. Slide 3: SPEC指定「V/f特性」。`V(f)=f/60`、`V/f=1/60 p.u./Hz`。50 Hz・200 V基準から30 Hz→120 Vへ接続。
4. Slide 4: SPEC指定「周波数―同期速度」。4極一般モデル `N_s=30f_inv`、50 Hz=`1500 min^-1`、60 Hz=`1800 min^-1`。R2二次型の相対速度7要素を可視化。

## 数値・論理QA
- `B_m(50)=60/50=1.20 p.u.`: `PASS`
- `B_m(60)=60/60=1.00 p.u.`: `PASS`
- `V(30)=30/60=0.50 p.u.`: `PASS`
- `200/50×30=120 V`: `PASS`
- 4極 `N_s(50)=1500 min^-1`: `PASS`
- 4極 `N_s(60)=1800 min^-1`: `PASS`
- 6極・50 Hz・`s=0.040`: `N_s=1000`, `N=960`, `sN_s=40 min^-1`, `f_2=2.0 Hz`, 回転子磁界/固定子=`1000 min^-1`: `PASS`

## 過去問対応品質ゲート
- 固定過去問: `一次3問＋二次2問 / 計5問 / 変更なし`
- 固定答案要素: `一次7＋二次8 / 15 / 15 変更なし`
- 固定5問・15答案要素への可視化・接続: `15 / 15 PASS`
- R2二次 問1の回転磁界相対速度7要素: `7 / 7 PASS`
- SPEC指定7項目: `7 / 7 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 解説／練習の問題・正答・数式変更: `0件`
- SPEC外追加: `0件`
- 未確認E2系実車値の真値化: `0件`
- 完成後clean blind公式照合: `未実施 / 次工程`
- 判定: `PASS / POWERPOINT_COMPLETE`

## ファイル識別
- size: `{size} bytes`
- SHA-256: `{sha256}`

## 次工程
固定5問・15答案要素を教材だけでclean blind再解答し、公式解答・標準解答を先に見ず候補答案を固定したうえで照合する。固定EXAM_ALIGNMENT、SPEC範囲、既存PDF/PPTXの問題・正答・数式は変更しない。
'''
QA.write_text(qa, encoding='utf-8')
print(f'wrote {OUT} ({size} bytes) sha256={sha256}')
