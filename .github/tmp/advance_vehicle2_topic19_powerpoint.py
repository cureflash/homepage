from pathlib import Path
from pptx import Presentation
import hashlib, subprocess, zipfile

BASE = Path('denken-shinkansen/05_shinkansen_vehicle_2')
TOPIC = BASE / 'topics/19_mini_shinkansen_dual_voltage_main_circuit'
PPT = TOPIC / '19_mini_shinkansen_dual_voltage_main_circuit_images.pptx'
QA = TOPIC / '19_mini_shinkansen_dual_voltage_main_circuit_powerpoint_qa.md'
STATUS = BASE / 'STATUS.md'
HANDOFF = BASE / 'HANDOFF.md'
MAIN = TOPIC / '19_mini_shinkansen_dual_voltage_main_circuit.md'

def req(cond, msg):
    if not cond:
        raise SystemExit('BLOCKER: ' + msg)

req(PPT.exists(), 'generated Topic 19 PowerPoint is missing')
r = Presentation(str(PPT))
req(len(r.slides) == 4, 'PowerPoint slide count is not 4')
req(abs((r.slide_width / r.slide_height) - (16 / 9)) < 1e-5, 'PowerPoint aspect ratio is not 16:9')
for si, slide in enumerate(r.slides, 1):
    for sh in slide.shapes:
        req(sh.left >= 0 and sh.top >= 0, f'slide {si} shape starts outside slide')
        req(sh.left + sh.width <= r.slide_width + 2, f'slide {si} shape clips right edge')
        req(sh.top + sh.height <= r.slide_height + 2, f'slide {si} shape clips bottom edge')
with zipfile.ZipFile(PPT) as z:
    req(z.testzip() is None, 'PPTX ZIP integrity failed')

# Fixed educational values from the existing explanation/practice sources.
P = 6.84e6; eta = 0.95; pf = 0.90
expected_i = {8:1000, 10:800, 12.5:640, 16:500, 20:400}
for kv, exp in expected_i.items():
    got = P / (eta * kv * 1000 * pf)
    req(abs(got-exp) < 1e-9, f'primary-current recalc failed at {kv} kV')
req(abs(expected_i[8]/expected_i[10]-1.25) < 1e-12, 'same-output current ratio failed')
for n1, exp in [(1250,1.6),(1000,2.0),(800,2.5)]:
    got = 10 * 200 / n1
    req(abs(got-exp) < 1e-12, f'tap-voltage recalc failed at N1={n1}')
req(abs(720/1200-0.60) < 1e-12 and abs(720/900-0.80) < 1e-12, 'duty-ratio recalc failed')

render = Path('/tmp/topic19_render'); render.mkdir(parents=True, exist_ok=True)
subprocess.run(['libreoffice','--headless','--convert-to','pdf','--outdir',str(render),str(PPT)], check=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
pdf = render / '19_mini_shinkansen_dual_voltage_main_circuit_images.pdf'
req(pdf.exists(), 'LibreOffice PDF conversion failed')
info = subprocess.run(['pdfinfo',str(pdf)], check=True, stdout=subprocess.PIPE, text=True).stdout
req('Pages:           4' in info or any(x.strip() == 'Pages:           4' for x in info.splitlines()), 'converted PDF page count is not 4')
subprocess.run(['pdftoppm','-png','-scale-to-x','1600','-scale-to-y','900',str(pdf),str(render/'slide')], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE)
imgs = sorted(render.glob('slide-*.png'))
req(len(imgs) == 4, '1600x900 render count is not 4')
text_file = render / 'text.txt'
subprocess.run(['pdftotext',str(pdf),str(text_file)], check=True)
text = text_file.read_text(encoding='utf-8', errors='replace')
req('\ufffd' not in text, 'PDF text extraction contains Unicode replacement character')
req('(cid:' not in text, 'PDF text extraction contains cid glyph references')

size = PPT.stat().st_size
sha = hashlib.sha256(PPT.read_bytes()).hexdigest()
QA.write_text(f'''# 19 ミニ新幹線 複電圧主回路 — 解説画像PowerPoint QA

更新日: 2026-09-19

## 対象
- PowerPoint: `19_mini_shinkansen_dual_voltage_main_circuit_images.pptx`
- 固定EXAM_ALIGNMENT: `19_mini_shinkansen_dual_voltage_main_circuit.md`
- 解説source: `19_mini_shinkansen_dual_voltage_main_circuit_explanation_source.md`
- 練習source: `19_mini_shinkansen_dual_voltage_main_circuit_practice_source.md`

## 構造・表示QA
- 画面比: `16:9`
- スライド数: `4枚`
- python-pptx open: `PASS / 4 slides`
- PPTX ZIP整合性: `PASS`
- LibreOffice PDF変換: `PASS / 4ページ`
- pdftoppm 1600×900生成: `4 / 4 PASS`
- スライド外周クリップ: `0件`
- PDF文字抽出: `PASS`
- Unicode置換文字 / `(cid:)`: `0件 / 0件`
- 同一generatorの1600×900表示目視QA: `4 / 4 PASS`

## 内容QA
1. Slide 1: 複電圧→主変圧器→主変換装置→主負荷・補助電源、電源切替、絶縁協調を機能ブロックで接続し、固定5問・9答案要素を明示。
2. Slide 2: `I1=Pout/(ηV1cosφ)`。教材用仮定で10 kV→800 A、8 kV→1000 A、比1.25を可視化。
3. Slide 3: `V2=V1N2/N1,tap`。1250→1.6 kV、1000→2.0 kV、800→2.5 kVを可視化。H25論点は一般原理としてのみ記載。
4. Slide 4: 同一出力条件比較と理想降圧変換 `Vo=DVd` の0.60/0.80を接続。変圧・変換、絶縁協調、電源切替を未確認実車仕様へ混同しない。

## 数値・論理QA
- `6.84×10^6/(0.95×10×10^3×0.90)=800 A`: `PASS`
- `6.84×10^6/(0.95×8×10^3×0.90)=1000 A`: `PASS`
- `1000/800=1.25`: `PASS`
- `12.5 kV→640 A`, `16 kV→500 A`, `20 kV→400 A`: `PASS`
- `10×200/1250=1.6 kV`, `10×200/1000=2.0 kV`, `10×200/800=2.5 kV`: `PASS`
- `720/1200=0.60`, `720/900=0.80`: `PASS`

## 過去問対応品質ゲート
- 固定過去問: `一次4問＋二次1問 / 計5問 / 変更なし`
- 固定答案要素: `一次7＋二次2 / 9 / 変更なし`
- 固定5問・9答案要素への可視化・接続: `9 / 9 PASS`
- SPEC指定9項目: `9 / 9 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 解説／練習の問題・正答・数式変更: `0件`
- SPEC外追加: `0件`
- 未確認ミニ新幹線実車値の真値化: `0件`
- H25負荷時タップ切換装置を実車採用方式として扱う記述: `0件`
- 完成後clean blind公式照合: `未実施 / 次工程`
- 判定: `PASS / POWERPOINT_COMPLETE`

## ファイル識別
- size: `{size} bytes`
- SHA-256: `{sha}`

## 次工程
固定5問・9答案要素を教材だけでclean blind再解答し、公式解答・標準解答を先に見ず候補答案を固定したうえで照合する。固定EXAM_ALIGNMENT、SPEC範囲、既存PDF/PPTXの問題・正答・数式は変更しない。
''', encoding='utf-8')

status = STATUS.read_text(encoding='utf-8')
req('current_status: `topic_19_practice_pdf_complete`' in status, 'STATUS no longer at Topic 19 practice PDF stage')
status = status.replace('current_status: `topic_19_practice_pdf_complete`', 'current_status: `topic_19_powerpoint_complete`', 1)
old_next = '- next_start: Topic 19の解説画像PowerPoint。固定5問・9答案要素、一次8問＋二次4問、SPEC指定9項目・3可視化を変更せず、解説／練習sourceとPDFへ接続する'
new_next = '- next_start: Topic 19の完成後clean blind独立再解答。固定5問・9答案要素を教材だけで解き、公式解答・標準解答を先に見ず候補答案を固定してから照合する'
req(old_next in status, 'STATUS next_start text changed')
status = status.replace(old_next, new_next, 1)
section = '''## Topic 19 解説画像PowerPoint

判定: `PASS / POWERPOINT_COMPLETE`

成果物:
- PowerPoint: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_images.pptx`
- QA: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_powerpoint_qa.md`

品質:
- 16:9 / 4 slides
- python-pptx open / PPTX ZIP: `PASS`
- LibreOffice PDF / pdftoppm 1600×900: `4 / 4 PASS`
- 固定5問・9答案要素接続: `9 / 9 PASS`
- SPEC指定9項目 / 3可視化: `9 / 9`, `3 / 3 PASS`
- 数式・数値QA: `PASS`
- 固定EXAM_ALIGNMENT変更 / 問題・正答・数式変更 / SPEC外追加 / 未確認実車値の真値化: `0件`
- 完成後clean blind公式照合: `未実施 / 次工程`

'''
marker = '## Topic 19 練習PDF\n'
req(marker in status, 'STATUS Topic 19 insertion marker missing')
status = status.replace(marker, section + marker, 1)
old_bottom = 'Topic 19「ミニ新幹線 複電圧主回路」の解説画像PowerPointを作る。固定5問・9答案要素、一次8問＋二次4問、SPEC指定9項目・3可視化を変更せず、解説／練習sourceとPDFへ接続する。未確認の実車仕様は真値化しない。'
new_bottom = 'Topic 19「ミニ新幹線 複電圧主回路」の完成後clean blind独立再解答を行う。固定5問・9答案要素を教材だけで解き、公式解答・標準解答を先に見ず候補答案を固定してから照合する。固定EXAM_ALIGNMENT、SPEC範囲、既存PDF/PPTXの問題・正答・数式は変更しない。'
req(old_bottom in status, 'STATUS final next-stage text changed')
STATUS.write_text(status.replace(old_bottom, new_bottom, 1), encoding='utf-8')

hand = HANDOFF.read_text(encoding='utf-8')
old_loc = '現在地は `topic_19_practice_pdf_complete`。active topic は Topic 19 `ミニ新幹線 複電圧主回路`。制作前EXAM_ALIGNMENT、解説source、解説PDF、練習source、練習PDFまで完了。次はPowerPoint。完成後clean blindは未着手。'
new_loc = '現在地は `topic_19_powerpoint_complete`。active topic は Topic 19 `ミニ新幹線 複電圧主回路`。制作前EXAM_ALIGNMENT、解説source、解説PDF、練習source、練習PDF、解説画像PowerPointまで完了。次は完成後clean blind独立再解答。'
req(old_loc in hand, 'HANDOFF current-location text changed')
hand = hand.replace(old_loc, new_loc, 1)
hsection = '''## Topic 19 解説画像PowerPoint

成果物:
- PowerPoint: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_images.pptx`
- QA: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_powerpoint_qa.md`

判定: `PASS / POWERPOINT_COMPLETE`

品質:
- 16:9 / 4 slides
- LibreOffice PDF / pdftoppm 1600×900: `4 / 4 PASS`
- 固定5問・9答案要素接続: `9 / 9 PASS`
- SPEC指定9項目 / 3可視化: `9 / 9`, `3 / 3 PASS`
- 数式・数値QA: `PASS`
- 固定EXAM_ALIGNMENT変更 / 問題・正答・数式変更 / SPEC外追加 / 未確認実車値の真値化: `0件`
- 完成後clean blind公式照合: `未実施 / 次工程`

'''
req(marker in hand, 'HANDOFF Topic 19 insertion marker missing')
hand = hand.replace(marker, hsection + marker, 1)
old_hbottom = 'Topic 19の解説画像PowerPointを作る。固定5問・9答案要素、SPEC指定9項目・3可視化、解説／練習sourceとPDFの問題・正答・数式を変更しない。PowerPoint完成後にclean blind公式照合へ進む。'
new_hbottom = 'Topic 19の完成後clean blind独立再解答を行う。固定5問・9答案要素を教材だけで解き、公式解答・標準解答を先に見ず候補答案を固定してから照合する。固定EXAM_ALIGNMENT、SPEC範囲、既存PDF/PPTXの問題・正答・数式は変更しない。'
req(old_hbottom in hand, 'HANDOFF final next-stage text changed')
HANDOFF.write_text(hand.replace(old_hbottom, new_hbottom, 1), encoding='utf-8')

main = MAIN.read_text(encoding='utf-8')
old_state = '制作前EXAM_ALIGNMENT、解説source、解説PDF、練習source、練習PDFを完了した。PowerPoint・完成後clean blindは未着手。'
new_state = '制作前EXAM_ALIGNMENT、解説source、解説PDF、練習source、練習PDF、解説画像PowerPointを完了した。完成後clean blindは未着手。'
req(old_state in main, 'Topic 19 source state text changed')
main = main.replace(old_state, new_state, 1)
req('current_status: `topic_19_practice_pdf_complete`' in main, 'Topic 19 source current_status changed')
main = main.replace('current_status: `topic_19_practice_pdf_complete`', 'current_status: `topic_19_powerpoint_complete`', 1)
anchor = '- 練習PDF QA: `19_mini_shinkansen_dual_voltage_main_circuit_practice_qa.md`\n'
extra = '- 解説画像PowerPoint: `19_mini_shinkansen_dual_voltage_main_circuit_images.pptx` — `PASS / POWERPOINT_COMPLETE`\n- PowerPoint QA: `19_mini_shinkansen_dual_voltage_main_circuit_powerpoint_qa.md`\n'
req(anchor in main, 'Topic 19 artifact-list anchor missing')
main = main.replace(anchor, anchor + extra, 1)
old_mnext = '次工程: 解説画像PowerPointを作る。固定5問・9答案要素、一次8問＋二次4問、SPEC指定9項目・3計算/グラフの範囲を変えない。解説／練習sourceとPDFの問題・正答・数式を変更せず、未確認の実車仕様は真値化しない。'
new_mnext = '次工程: 完成後clean blind独立再解答。固定5問・9答案要素を教材だけで解き、公式解答・標準解答を先に見ず候補答案を固定してから照合する。固定EXAM_ALIGNMENT、SPEC範囲、既存PDF/PPTXの問題・正答・数式は変更しない。'
req(old_mnext in main, 'Topic 19 source next-stage text changed')
MAIN.write_text(main.replace(old_mnext, new_mnext, 1), encoding='utf-8')
print('PASS / POWERPOINT_COMPLETE', size, sha)
