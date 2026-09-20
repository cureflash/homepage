from pathlib import Path

status_path = Path('denken-shinkansen/05_shinkansen_vehicle_2/STATUS.md')
handoff_path = Path('denken-shinkansen/05_shinkansen_vehicle_2/HANDOFF.md')
s = status_path.read_text(encoding='utf-8')
h = handoff_path.read_text(encoding='utf-8')

def once(text, old, new, label):
    n = text.count(old)
    assert n == 1, f'{label}: expected 1 occurrence, got {n}'
    return text.replace(old, new, 1)

s = once(s, '- current_status: `topic_27_practice_pdf_complete`', '- current_status: `topic_27_powerpoint_complete`', 'status current_status')
s = once(s, '- next_start: Topic 27の解説画像PowerPoint生成＋PowerPoint QA。固定5問・23答案要素、SPEC必須7項目、指定2可視化、L0系実車値境界を維持する', '- next_start: Topic 27の完成後clean blind独立再解答候補固定。保存済み正答・公式解答を先に見ず、固定5問・23答案要素を教材だけで解いて候補を固定する', 'status next_start')

status_section = '''## Topic 27 PowerPoint

- 判定: `PASS / POWERPOINT_COMPLETE`
- path: `topics/27_l0_linear_synchronous_motor/27_l0_linear_synchronous_motor_images.pptx`
- canonical blob SHA: `fa47872508029438c1056ea8130b636e8bb4c75b`
- QA: `topics/27_l0_linear_synchronous_motor/27_l0_linear_synchronous_motor_images_qa.md`
- file size: `220,628 bytes`
- SHA-256: `443a36dd659a9b4c0dabade616a15aee8ec9d39dcc88572337c45c624b46e9cc`
- 16:9: `6 slides`
- GitHub Actions canonical rebuild/validation: `PASS`
- PPTX ZIP / python-pptx / geometry: `PASS`
- LibreOffice PDF変換: `6 / 6 PASS`
- `pdftotext -layout`: `PASS`（9,826 bytes）
- 置換文字 `�`: `0件`
- 固定過去問: `5 / 5 connected`
- 一次答案要素: `18 / 18 connected`
- 二次答案要素: `5 / 5 connected`
- 合計答案要素: `23 / 23 connected`
- SPEC必須7項目: `7 / 7 PASS`
- SPEC指定2可視化: `2 / 2 PASS`
- 未確認L0系実車値の真値化: `0件`
- Topic 28範囲の先取り: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

'''
s = once(s, '## Topic 21 H26二次 問1(4)\n', status_section + '## Topic 21 H26二次 問1(4)\n', 'status insert PowerPoint')
s = once(s, 'Topic 01〜26: `PASS / completed`。完成数 `26 / 39`。Topic 27は練習PDF完了、次は解説画像PowerPoint生成＋PowerPoint QA。', 'Topic 01〜26: `PASS / completed`。完成数 `26 / 39`。Topic 27はPowerPoint完了、次は完成後clean blind独立再解答候補固定。', 'status completion')

h = once(h, '現在地は `topic_27_practice_pdf_complete`。active topicは Topic 27 `L0系① リニア同期モータ`。', '現在地は `topic_27_powerpoint_complete`。active topicは Topic 27 `L0系① リニア同期モータ`。', 'handoff current')
old_progress = '''最新main、系列 `STATUS.md` / `HANDOFF.md`、上位仕様、系列 `SPEC.md`、Topic 27固定EXAM_ALIGNMENT、解説source/PDF、練習source/QA、直近の同系列worker成果をreconcileした。最新mainには別系列 `07_shinkansen_machine_2` の更新が入っていたが、本系列との競合・重複はないためそのまま採用した。

Topic 27練習PDFとPDF QAを作成。一次8問＋二次4問の計12問、固定5問・23答案要素 `23 / 23 connected`、SPEC必須7項目 `7 / 7 covered`、指定2可視化の計算接続 `2 / 2 aligned`、数値・論理独立再計算 `12 / 12 PASS`、一次正答一意性 `8 / 8 PASS`。A4縦3ページをPDFium/Popplerで `3 / 3 PASS`、`pdftotext -layout` PASS、置換文字0件。初回生成で `≈` の欠落グリフを検出したため、意味不変の「約」表記へ修正して再生成・再QAした。L0系未確認実車値の真値化、固定EXAM_ALIGNMENT変更、Topic 28範囲の先取り、Topic 21一般式変更はいずれも0件。exact blocker `0件`。'''
new_progress = '''最新main、系列 `STATUS.md` / `HANDOFF.md`、上位仕様、系列 `SPEC.md`、Topic 27固定EXAM_ALIGNMENT、解説source/PDF、練習source/PDF、直近の同系列worker成果をreconcileした。開始時点の正本はTopic 27練習PDF完了で、PowerPointは未作成だったため重複作業はない。

Topic 27解説画像PowerPointとPowerPoint QAを作成。Topic 26で確認済みのbinary truncate回避手順を再利用し、GitHub Actions上でcanonical PowerPointを生成・検証した。16:9・6枚、ZIP/python-pptx/geometry PASS、LibreOffice PDF変換 `6 / 6 PASS`、`pdftotext -layout` PASS、置換文字0件。固定5問・23答案要素 `23 / 23 connected`、SPEC必須7項目 `7 / 7 PASS`、指定2可視化 `2 / 2 PASS`。L0系未確認実車値の真値化、固定EXAM_ALIGNMENT変更、Topic 28範囲の先取り、Topic 21一般式変更はいずれも0件。exact blocker `0件`。'''
h = once(h, old_progress, new_progress, 'handoff progress')

handoff_section = '''## Topic 27 PowerPoint

成果物:
- `topics/27_l0_linear_synchronous_motor/27_l0_linear_synchronous_motor_images.pptx`
- `topics/27_l0_linear_synchronous_motor/27_l0_linear_synchronous_motor_images_qa.md`

判定:
- `PASS / POWERPOINT_COMPLETE`
- canonical blob SHA: `fa47872508029438c1056ea8130b636e8bb4c75b`
- file size: `220,628 bytes`
- SHA-256: `443a36dd659a9b4c0dabade616a15aee8ec9d39dcc88572337c45c624b46e9cc`
- 16:9: `6 slides`
- GitHub Actions canonical rebuild/validation: `PASS`
- PPTX ZIP / python-pptx / geometry: `PASS`
- LibreOffice PDF変換: `6 / 6 PASS`
- `pdftotext -layout`: `PASS`（9,826 bytes）
- 置換文字: `0件`
- 固定過去問: `5 / 5 connected`
- 一次答案要素: `18 / 18 connected`
- 二次答案要素: `5 / 5 connected`
- 合計答案要素: `23 / 23 connected`
- SPEC必須7項目: `7 / 7 PASS`
- 指定2可視化: `2 / 2 PASS`
- L0系未確認実車値の真値化: `0件`
- Topic 28範囲の先取り: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

'''
h = once(h, '## 固定境界\n', handoff_section + '## 固定境界\n', 'handoff insert PowerPoint')
h = once(h, 'Topic 27 `L0系① リニア同期モータ` の解説画像PowerPointを生成し、固定5問・23答案要素、SPEC必須7項目、指定2可視化、L0系実車値境界をPowerPoint QAする。', 'Topic 27 `L0系① リニア同期モータ` の完成後clean blind独立再解答候補を固定する。保存済み正答・公式解答を先に見ず、固定5問・23答案要素を教材だけで解く。', 'handoff next')

status_path.write_text(s, encoding='utf-8')
handoff_path.write_text(h, encoding='utf-8')
