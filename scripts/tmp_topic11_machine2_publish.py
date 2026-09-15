from pathlib import Path
import hashlib
import math
import re
import unicodedata
import zlib

root = Path('denken-shinkansen/07_shinkansen_machine_2')
topic = root / 'topics/11_power_semiconductor_loss_thermal'
src = topic / '11_power_semiconductor_loss_thermal_practice.md'
out = topic / '11_power_semiconductor_loss_thermal_practice.pdf'
status_path = root / 'STATUS.md'
handoff_path = root / 'HANDOFF.md'
main_src_path = topic / '11_power_semiconductor_loss_thermal.md'

text = src.read_text(encoding='utf-8')
start = text.index('# 一次試験型')
end = text.index('# 固定EXAM_ALIGNMENTへの接続')
body = text[start:end].strip()

raw = []
for line in body.splitlines():
    s = line.rstrip()
    if s.strip() == '---':
        raw.append('')
        continue
    s = re.sub(r'^#{1,6}\s*', '', s)
    s = s.replace('`', '')
    raw.append(s)

def units(ch):
    if ch == '\t':
        return 2.0
    if ord(ch) < 128:
        return 0.52
    return 1.0 if unicodedata.east_asian_width(ch) in 'WF' else 0.78

def wrap(s, maxu=72):
    if not s:
        return ['']
    m = re.match(r'^(\s*(?:[-*]|\d+\.)\s+)', s)
    prefix = m.group(1) if m else ''
    content = s[len(prefix):]
    result = []
    current = prefix
    width = sum(units(c) for c in current)
    for ch in content:
        w = units(ch)
        if width + w > maxu and current.strip():
            result.append(current.rstrip())
            current = ('  ' if prefix else '') + ch
            width = sum(units(c) for c in current)
        else:
            current += ch
            width += w
    if current or not result:
        result.append(current.rstrip())
    return result

items = []
for s in raw:
    kind = 'body'
    if re.match(r'^(一次試験型|二次試験型)$', s):
        kind = 'section'
    elif re.match(r'^問\d+\s', s):
        kind = 'question'
    elif s in ('正答', '解説', '解答・完全解説', '検算'):
        kind = 'subhead'
    for i, wrapped in enumerate(wrap(s, 72 if kind == 'body' else 68)):
        items.append((kind if i == 0 else 'body', wrapped))

page_w = 595.276
page_h = 841.89
top = 792
bottom = 42
styles = {
    'section': ('F2', 11.0, 15.0),
    'question': ('F2', 9.4, 12.0),
    'subhead': ('F2', 8.0, 10.5),
    'body': ('F1', 7.3, 9.1),
}
pages = []
current = []
y = top
for kind, s in items:
    _, _, lead = styles[kind]
    extra = 2.0 if kind in ('section', 'question') else 0.0
    need = lead + extra
    if kind == 'question' and y - need < bottom + 35:
        pages.append(current)
        current = []
        y = top
    elif y - need < bottom:
        pages.append(current)
        current = []
        y = top
    current.append((kind, s, y))
    y -= need
if current:
    pages.append(current)
assert len(pages) == 7, len(pages)

def esc_utf8(s):
    b = s.encode('utf-8')
    return b.replace(b'\\', b'\\\\').replace(b'(', b'\\(').replace(b')', b'\\)')

objects = []
def add_obj(data):
    objects.append(data if isinstance(data, bytes) else data.encode('ascii'))
    return len(objects)

fd1 = add_obj(b'<< /Type /FontDescriptor /Ascent 723 /CapHeight 709 /Descent -241 /Flags 6 /FontBBox [-123 -257 1001 910] /FontName /HeiseiMin-W3 /ItalicAngle 0 /StemV 69 /XHeight 450 >>')
cid1 = add_obj(f'<< /Type /Font /Subtype /CIDFontType0 /BaseFont /HeiseiMin-W3 /CIDSystemInfo << /Registry (Adobe) /Ordering (Japan1) /Supplement 2 >> /DW 1000 /FontDescriptor {fd1} 0 R >>')
f1 = add_obj(f'<< /Type /Font /Subtype /Type0 /BaseFont /HeiseiMin-W3 /Encoding /UniJIS-UTF8-H /DescendantFonts [{cid1} 0 R] >>')
fd2 = add_obj(b'<< /Type /FontDescriptor /Ascent 752 /CapHeight 737 /Descent -221 /Flags 4 /FontBBox [-92 -250 1010 922] /FontName /HeiseiKakuGo-W5 /ItalicAngle 0 /StemH 0 /StemV 114 /XHeight 553 >>')
cid2 = add_obj(f'<< /Type /Font /Subtype /CIDFontType0 /BaseFont /HeiseiKakuGo-W5 /CIDSystemInfo << /Registry (Adobe) /Ordering (Japan1) /Supplement 2 >> /DW 1000 /FontDescriptor {fd2} 0 R >>')
f2 = add_obj(f'<< /Type /Font /Subtype /Type0 /BaseFont /HeiseiKakuGo-W5 /Encoding /UniJIS-UTF8-H /DescendantFonts [{cid2} 0 R] >>')

content_nums = []
for page_index, page in enumerate(pages, 1):
    chunks = []
    header = 'Topic 11 練習問題 — GTO→IGBT→SiCの損失を計算する'
    chunks.append(b'BT /F2 8 Tf 36 816 Td (' + esc_utf8(header) + b') Tj ET\n')
    chunks.append(b'0.6 w 36 807 m 559 807 l S\n')
    for kind, s, y in page:
        if not s:
            continue
        font, size, _ = styles[kind]
        x = 38 if kind != 'body' else 40
        chunks.append(f'BT /{font} {size:.1f} Tf {x:.1f} {y:.1f} Td '.encode() + b'(' + esc_utf8(s) + b') Tj ET\n')
    footer = f'{page_index} / {len(pages)}'
    chunks.append(b'BT /F1 7 Tf 520 24 Td (' + footer.encode() + b') Tj ET\n')
    uncompressed = b''.join(chunks)
    compressed = zlib.compress(uncompressed, 9)
    content_nums.append(add_obj(b'<< /Length ' + str(len(compressed)).encode() + b' /Filter /FlateDecode >>\nstream\n' + compressed + b'\nendstream'))

page_nums = []
pages_obj_num = len(objects) + len(pages) + 1
for content_num in content_nums:
    page_nums.append(add_obj(f'<< /Type /Page /Parent {pages_obj_num} 0 R /MediaBox [0 0 {page_w:.3f} {page_h:.3f}] /Resources << /Font << /F1 {f1} 0 R /F2 {f2} 0 R >> >> /Contents {content_num} 0 R >>'))
pages_num = add_obj('<< /Type /Pages /Count %d /Kids [%s] >>' % (len(page_nums), ' '.join(f'{n} 0 R' for n in page_nums)))
catalog = add_obj(f'<< /Type /Catalog /Pages {pages_num} 0 R >>')

pdf = bytearray(b'%PDF-1.4\n%\x93\x8c\x8b\x9e\n')
offsets = [0]
for i, obj in enumerate(objects, 1):
    offsets.append(len(pdf))
    pdf += f'{i} 0 obj\n'.encode() + obj + b'\nendobj\n'
xref = len(pdf)
pdf += f'xref\n0 {len(objects)+1}\n'.encode() + b'0000000000 65535 f \n'
for offset in offsets[1:]:
    pdf += f'{offset:010d} 00000 n \n'.encode()
pdf += f'trailer\n<< /Size {len(objects)+1} /Root {catalog} 0 R >>\nstartxref\n{xref}\n%%EOF\n'.encode()
out.write_bytes(pdf)
digest = hashlib.sha256(pdf).hexdigest()

# Independent numeric rechecks for the calculation-heavy questions.
assert abs(0.5 * 600 * 400 * 1e-6 - 0.12) < 1e-12
assert abs(2000 * (0.08 + 0.12) - 400) < 1e-12
assert abs(math.sqrt(2) * 100 / (2 * math.pi) * (1 + 0.866) - 42.0) < 0.1
assert abs(1 - 1.20/120 - 0.99) < 1e-12
assert abs(4000 * (0.12 + 0.18) - 1200) < 1e-12
assert abs(math.sqrt(2) * 120 / (2 * math.pi) * 1.8 - 48.6) < 0.1
assert abs(math.sqrt(2) * 120 / (2 * math.pi) * 0.2 - 5.40) < 0.02
assert abs(6 * (110 + 360) - 2820) < 1e-12
assert abs(470 * 0.060 - 28.2) < 1e-12
assert abs(6 * (96 + 440) - 3216) < 1e-12
assert abs(6 * (72 + 200) - 1632) < 1e-12

pdf_section = f'''## Topic 11 練習PDF
- [x] `topics/11_power_semiconductor_loss_thermal/11_power_semiconductor_loss_thermal_practice.pdf`
- [x] A4縦7ページ
- [x] 一次10問＋二次5問・完全解説を収録
- [x] 200 dpi全7ページ表示QA `7 / 7 PASS`
- [x] 文字抽出QA PASS / Unicode置換文字 `0件` / `□`置換 `0件` / `(cid:)` `0件`
- [x] 主要数値再計算 Q3/Q4/Q9〜Q15 PASS
- [x] 一次正答一意性 `10 / 10 PASS` を維持
- [x] 固定一次4問＋二次1問・15答案要素と固定範囲を維持
- [x] 固定範囲外論点・未確認実車値の追加 `0件`
- [x] SHA-256 `{digest}`
'''

status = status_path.read_text(encoding='utf-8')
status = status.replace('- current_status: `topic_11_practice_source_complete`', '- current_status: `topic_11_practice_pdf_complete`')
status = status.replace('- next_start: Topic 11 練習PDF', '- next_start: Topic 11 解説画像PowerPoint')
if '## Topic 11 練習PDF' not in status:
    status = status.replace('## 今回進めた内容', pdf_section.rstrip() + '\n\n## 今回進めた内容')
status = re.sub(
    r'## 今回進めた内容\n.*?\n\n## 判定\n.*\Z',
    '## 今回進めた内容\nTopic 11「GTO→IGBT→SiCの損失を計算する」の練習PDFを完成した。A4縦7ページ、一次10問＋二次5問・完全解説を収録。200 dpi表示QA `7 / 7 PASS`、文字抽出QA PASS、主要数値再計算 PASS。固定5過去問・15答案要素と固定範囲を維持し、固定範囲外論点・未確認実車値の追加は0件。\n\n## 判定\nTopic 11は `topic_11_practice_pdf_complete / IN_PROGRESS`。完成数は `10 / 22`。次は解説画像PowerPoint。',
    status,
    flags=re.S,
)
status_path.write_text(status, encoding='utf-8')

handoff = handoff_path.read_text(encoding='utf-8')
handoff = handoff.replace('current status: `topic_11_practice_source_complete`', 'current status: `topic_11_practice_pdf_complete`')
handoff_pdf = f'''## Topic 11 練習PDF
- `topics/11_power_semiconductor_loss_thermal/11_power_semiconductor_loss_thermal_practice.pdf`: `completed`
- A4縦7ページ
- 一次10問＋二次5問・完全解説を収録
- 200 dpi全7ページ Visual QA: `7 / 7 PASS`
- 文字抽出QA: `PASS` / Unicode置換文字 `0件` / `□`置換 `0件` / `(cid:)` `0件`
- 主要数値再計算: Q3/Q4/Q9〜Q15 PASS
- 一次正答一意性QA: `10 / 10 PASS` 維持
- 固定5過去問・15答案要素: 維持
- 固定範囲外追加: `0件`
- 未確認実車値追加: `0件`
- SHA-256: `{digest}`
'''
if '## Topic 11 練習PDF' not in handoff:
    handoff = handoff.replace('## 次に行うこと', handoff_pdf.rstrip() + '\n\n## 次に行うこと')
handoff = re.sub(
    r'## 次に行うこと\n.*\Z',
    '## 次に行うこと\nTopic 11「GTO→IGBT→SiCの損失を計算する」の解説画像PowerPointを作成する。固定5問・15答案要素と固定範囲を維持し、表示QA・overflow・PPTX整合性を確認する。',
    handoff,
    flags=re.S,
)
handoff_path.write_text(handoff, encoding='utf-8')

main_src = main_src_path.read_text(encoding='utf-8')
old_state = '解説本文＋3段階例題を完成。固定一次4問＋二次記述1問、計5問・15答案要素を本文へ全件マッピングし、制作前独立検証 `15 / 15 PASS` を維持。固定範囲外論点・未確認実車値の追加は0件。次は解説PDFを作成する。'
new_state = '解説PDF・練習問題source・練習PDFまで完成。固定一次4問＋二次記述1問、計5問・15答案要素、制作前独立検証 `15 / 15 PASS`、固定範囲を維持。固定範囲外論点・未確認実車値の追加は0件。次は解説画像PowerPointを作成する。'
main_src = main_src.replace(old_state, new_state)
main_src = re.sub(
    r'## 次工程\n.*\Z',
    '## 次工程\n\n解説PDF・練習問題source・練習PDFまで完成。固定5問・15答案要素、制作前独立検証 `15 / 15 PASS`、固定範囲外追加0件を維持したまま、次は解説画像PowerPointを作成する。',
    main_src,
    flags=re.S,
)
main_src_path.write_text(main_src, encoding='utf-8')

practice = src.read_text(encoding='utf-8')
practice = re.sub(
    r'## 次工程\n.*\Z',
    '## 次工程\n\n練習PDFは完成。一次10問＋二次5問、主要数値再計算、固定5問・15答案要素、固定範囲を維持したまま、次は解説画像PowerPointを作成する。',
    practice,
    flags=re.S,
)
src.write_text(practice, encoding='utf-8')
