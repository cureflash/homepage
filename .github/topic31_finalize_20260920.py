from pathlib import Path
import hashlib, subprocess

root=Path('.')
d=root/'denken-shinkansen/05_shinkansen_vehicle_2/topics/31_auxiliary_power_converter'
ppt=d/'31_auxiliary_power_converter_images.pptx'
qa=d/'31_auxiliary_power_converter_images_qa.md'
b=ppt.read_bytes(); size=len(b); sha256=hashlib.sha256(b).hexdigest(); blob=subprocess.check_output(['git','hash-object',str(ppt)],text=True).strip()
textbytes=Path('/tmp/topic31_render/text.txt').stat().st_size
q=f'''# Topic 31 PowerPoint QA

更新日: 2026-09-20

判定: `PASS / POWERPOINT_COMPLETE`

## reconcile

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、`HANDOFF.md`とTopic 31既存成果物をreconcileし、次の未完了工程である解説画像PowerPointのみを作成した。固定EXAM_ALIGNMENT、解説source/PDF、練習source/PDFは変更していない。

## canonical artifact

- path: `31_auxiliary_power_converter_images.pptx`
- canonical blob SHA: `{blob}`
- file size: `{size} bytes`
- SHA-256: `{sha256}`
- 16:9 / `6 slides`
- python-pptx open / geometry bounds: `6 / 6 PASS`
- LibreOffice PDF変換: `6 / 6 pages PASS`
- `pdftotext -layout`: `PASS ({textbytes} bytes)`
- 置換文字 `�`: `0件`
- PNG render: `6 / 6 PASS`
- blank render: `0件`

## 固定過去問接続

| 固定過去問 | PowerPoint接続 | 判定 |
|---|---:|---|
| R7 一次「機械」問4 | 5 / 5 | PASS |
| R5 二次「機械・制御」問3 | 7 / 7 | PASS |
| R4 一次「機械」問4 | 5 / 5 | PASS |
| R2 二次「機械・制御」問2 | 5 / 5 | PASS |
| H22 一次「機械」問3 | 5 / 5 | PASS |

- 一次: `15 / 15 connected`
- 二次: `12 / 12 connected`
- 合計: `27 / 27 connected`

接続内容:
- R7一次: 電圧形インバータ、誘導性負荷、逆並列ダイオード、MOSFET、PWM、スイッチング周波数
- R5二次: 高調波発生源・影響、基本波／高調波分離、補償電流、実効値
- R4一次: 導通損失、漏れ電流、スイッチング損失、繰返し周期、ソフトスイッチング
- R2二次: 固定損＋負荷依存損失の一般教材モデル、負荷率、効率
- H22一次: 三相PWM、三角搬送波、変調率、線間基本波実効値、力率

## SPEC gate

- インバータ: `PASS`
- コンバータ: `PASS`
- 三相負荷: `PASS`
- 力率: `PASS`
- 高調波: `PASS`
- 変換損失: `PASS`
- 効率: `PASS`
- 負荷変動: `PASS`
- SPEC固定8項目: `8 / 8 PASS`

## 境界確認

- R2二次問2の変圧器固有条件を変換器へ普遍化: `0件`
- H22一次問3のPV・MPPT固有事項追加: `0件`
- R5二次問3の能動フィルタを実車搭載事実化: `0件`
- 未確認実車値の真値化: `0件`
- Topic 32〜34先取り: `0件`
- Topic 21一般式変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- exact blocker: `0件`

## 判定

`PASS / POWERPOINT_COMPLETE`

Topic 31は教材成果物一式が揃った。次工程は、answer-bearing資料を先に開かないfresh workerによるclean blind candidate固定である。候補固定後に公式解答と照合する。
'''
qa.write_text(q,encoding='utf-8')

status_path=root/'denken-shinkansen/05_shinkansen_vehicle_2/STATUS.md'
s=status_path.read_text(encoding='utf-8')
s=s.replace('- current_status: `topic_31_practice_pdf_complete`','- current_status: `topic_31_powerpoint_complete`',1)
s=s.replace('- next_start: Topic 31 PowerPointを作成し、固定5問・27答案要素とSPEC 8項目を維持してrender QAする','- next_start: answer-bearing資料未閲覧のfresh workerでTopic 31 clean blind candidateを固定し、教材だけで固定5問・27答案要素を再解答する',1)
s=s.replace('Topic 01〜30は `PASS / completed`。完成数 `30 / 39`。Topic 31は制作前EXAM_ALIGNMENT、解説source＋source QA、解説PDF＋PDF QA、練習source＋source QA、練習PDF＋PDF QAまで完了。','Topic 01〜30は `PASS / completed`。完成数 `30 / 39`。Topic 31は制作前EXAM_ALIGNMENT、解説source＋source QA、解説PDF＋PDF QA、練習source＋source QA、練習PDF＋PDF QA、PowerPoint＋render QAまで完了。',1)
section=f'''\n## Topic 31 PowerPoint\n\n判定: `PASS / POWERPOINT_COMPLETE`\n\ncanonical artifacts:\n- `topics/31_auxiliary_power_converter/31_auxiliary_power_converter_images.pptx`\n- `topics/31_auxiliary_power_converter/31_auxiliary_power_converter_images_qa.md`\n\nQA:\n- PowerPoint blob SHA: `{blob}`\n- 16:9: `6 slides`\n- LibreOffice PDF変換: `6 / 6 pages PASS`\n- PNG render: `6 / 6 PASS`\n- 空白render・置換文字: `0件`\n- 固定5問・27答案要素: `27 / 27 connected`\n- 一次: `15 / 15 connected`\n- 二次: `12 / 12 connected`\n- SPEC固定8項目: `8 / 8 PASS`\n- 固定EXAM_ALIGNMENT変更: `0件`\n- 未確認実車値の真値化: `0件`\n- Topic 32〜34先取り: `0件`\n- Topic 21一般式変更: `0件`\n- exact blocker: `0件`\n\n'''
if '## Topic 31 PowerPoint' not in s:
    s=s.replace('## Topic 31 練習PDF',section+'## Topic 31 練習PDF',1)
status_path.write_text(s,encoding='utf-8')

hand_path=root/'denken-shinkansen/05_shinkansen_vehicle_2/HANDOFF.md'
h=hand_path.read_text(encoding='utf-8')
h=h.replace('現在地は `topic_31_practice_pdf_complete`。Topic 31 `補助電源変換器` は制作前EXAM_ALIGNMENT、解説source＋source QA、解説PDF＋PDF QA、練習source＋source QA、練習PDF＋PDF QAまで完了。次はPowerPoint＋render QA。','現在地は `topic_31_powerpoint_complete`。Topic 31 `補助電源変換器` は制作前EXAM_ALIGNMENT、解説source＋source QA、解説PDF＋PDF QA、練習source＋source QA、練習PDF＋PDF QA、PowerPoint＋render QAまで完了。次はfresh workerによるclean blind candidate固定。',1)
hsection=f'''\n## Topic 31 PowerPoint完了記録\n\n判定: `PASS / POWERPOINT_COMPLETE`\n\ncanonical artifacts:\n- `topics/31_auxiliary_power_converter/31_auxiliary_power_converter_images.pptx`\n- `topics/31_auxiliary_power_converter/31_auxiliary_power_converter_images_qa.md`\n\nQA:\n- PowerPoint blob `{blob}`\n- 16:9 `6 slides`\n- LibreOffice PDF変換 `6 / 6 pages PASS`\n- PNG render `6 / 6 PASS`\n- 空白render・置換文字 `0件`\n- 固定5問・27答案要素 `27 / 27 connected`\n- 一次 `15 / 15 connected`\n- 二次 `12 / 12 connected`\n- SPEC固定8項目 `8 / 8 PASS`\n- 固定EXAM_ALIGNMENT変更 `0件`\n- 未確認実車値の真値化 `0件`\n- Topic 32〜34先取り `0件`\n- Topic 21一般式変更 `0件`\n- exact blocker `0件`\n\n'''
if '## Topic 31 PowerPoint完了記録' not in h:
    h=h.replace('## Topic 31 練習PDF完了記録',hsection+'## Topic 31 練習PDF完了記録',1)
old='''1. 最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、`HANDOFF.md`、直近worker成果をreconcileする。
2. 固定EXAM_ALIGNMENT、解説source/PDF、練習source/PDFを変更せず、Topic 31 PowerPointを作成する。
3. 固定5問・27答案要素、SPEC 8項目を可視化へ接続し、16:9全スライドをrender QAする。
4. 数式・図・表・文字切れ・重なり・置換文字を確認し、未確認実車値を真値化しない。
5. R2二次問2の変圧器固有条件、H22のPV/MPPT、R5能動フィルタ実車搭載など固定境界を維持する。
6. PowerPoint QAがPASSしてからclean blind candidate固定へ進む。
7. 仕様不整合・確定不能事項が出た場合はexact blockerを記録して停止する。'''
new='''1. 最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、`HANDOFF.md`、Topic 31教材成果物をreconcileする。
2. answer-bearing資料（固定EXAM_ALIGNMENT本体、exam alignment QA、公式解答等）を先に開かないfresh workerで、Topic 31教材だけを使って固定5問・27答案要素を再解答する。
3. clean blind candidateを先に固定し、固定後に公式解答と照合する。candidate固定後の修正はしない。
4. R2二次問2の変圧器固有条件、H22のPV/MPPT、R5能動フィルタ実車搭載など固定境界を維持する。
5. fresh worker条件を満たせない場合はcandidateを捏造せずexact blockerを記録する。'''
h=h.replace(old,new,1)
hand_path.write_text(h,encoding='utf-8')
print(blob,sha256,size,textbytes)
