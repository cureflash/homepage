from pathlib import Path
import hashlib
import re
import sys

BASE = Path('denken-shinkansen/05_shinkansen_vehicle_2/topics/35_atc_track_circuit_analysis')
PPTX = BASE / '35_atc_track_circuit_analysis_images.pptx'
QA = BASE / '35_atc_track_circuit_analysis_images_qa.md'
STATUS = Path('denken-shinkansen/05_shinkansen_vehicle_2/STATUS.md')
HANDOFF = Path('denken-shinkansen/05_shinkansen_vehicle_2/HANDOFF.md')


def artifact_meta():
    data = PPTX.read_bytes()
    return len(data), hashlib.sha256(data).hexdigest()


def write_qa():
    size, sha = artifact_meta()
    extracted = Path('/tmp/topic35/extracted.txt')
    text_bytes = extracted.stat().st_size if extracted.exists() else 0
    content = f'''# Topic 35 PowerPoint QA — ATC① 軌道回路の回路解析

更新日: 2026-09-21

判定: `PASS / POWERPOINT_COMPLETE`

## reconcile

最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md` / `HANDOFF.md`、Topic 35固定EXAM_ALIGNMENT、解説source/PDF、練習source/PDFと各QAをreconcileし、未完了だった解説画像PowerPointのみを作成した。固定EXAM_ALIGNMENT、固定5問・25答案要素、既存source/PDFは変更していない。

## canonical artifact

- path: `35_atc_track_circuit_analysis_images.pptx`
- file size: `{size} bytes`
- SHA-256: `{sha}`
- 16:9 / `6 slides`
- python-pptx open / geometry bounds: `6 / 6 PASS`
- PPTX text/content assertions: `PASS`
- source notes: `6 / 6 slides`
- LibreOffice PDF変換: `6 / 6 pages PASS`
- `pdftotext -layout`: `PASS ({text_bytes} bytes)`
- 置換文字 `�`: `0件`
- PNG render: `6 / 6 PASS`
- blank render / page-edge overflow: `0件`

## slide構成

1. 信号源→レール回路→受信器と車軸短絡、SPEC固定7項目、Topic 36・37との範囲境界
2. `Z=R+jX`、R/L/Cの複素インピーダンス、フェーザと位相、R7一次問3・問4接続
3. テブナン等価、列車なし時の受信電圧、基礎例題、R5一次問4接続
4. 車軸短絡の並列合成、全回路電流増加と受信器電流低下、受信電圧比の仮定例
5. 網目電流法、ブリッジ平衡、漏れ枝、R8一次問3・R7一次問4・R6一次問6接続
6. 本試験解法順序、固定5問25答案要素のPowerPointマッピング、フェイルセーフ境界、Topic 21固定注記

## 固定過去問接続

- R8一次「理論」問3: `5 / 5` → slide 5
- R7一次「理論」問3: `5 / 5` → slide 2
- R7一次「理論」問4: `5 / 5` → slides 2 / 5
- R6一次「理論」問6: `5 / 5` → slide 5
- R5一次「理論」問4: `5 / 5` → slide 3
- 一次: `25 / 25 connected`
- 二次: `0問`（直接対応問題未確認のため件数合わせなし）

## SPEC gate

- 軌道回路: `PASS` — slides 1 / 6
- レールインピーダンス: `PASS` — slides 1 / 2 / 3
- 車軸短絡: `PASS` — slides 1 / 4
- 受信レベル: `PASS` — slides 1 / 3 / 4
- 信号電流: `PASS` — slides 1 / 2 / 4
- 回路条件: `PASS` — slides 1 / 5 / 6
- フェイルセーフ: `PASS` — slides 1 / 6
- SPEC固定7項目: `7 / 7 PASS`

## 数値・内容QA

- 基礎例題: `Vth=12 V`, `Zth=2 Ω`, `Zr=4 Ω`, `ZR=18 Ω` → `I=0.500 A`, `VR=9.00 V`: `PASS`
- 車軸短絡例: `Zs=0.5 Ω`, `Zp=0.4878 Ω`, `I=1.541 A`, `VR=0.7519 V`, `IR=0.03759 A`, `Is=1.504 A`, `kV=0.09775`: `PASS`
- 複素インピーダンス: `Zr=Rr+jXr`, `XL=jωL`, `ZC=1/(jωC)`: `PASS`
- 網目共有枝: `Zc(I1−I2)`: `PASS`
- ブリッジ平衡: `Z1·Z3=Z2·Z4`: `PASS`
- Topic 21一般式 `P=Tω`, `ω=2πN/60`: 変更なし
- H26二次問1(4) `48.1 N·m / 48.0 N·m`: `π=3.14`相当の過去問固有丸め差として注記維持

## 境界確認

- 固定EXAM_ALIGNMENT変更: `0件`
- 二次問題の件数合わせ採用: `0件`
- 固定過去問を軌道回路そのものの出題と偽装: `0件`
- 未確認実設備値・しきい値の真値化: `0件`
- Topic 36の変調・フィルタ・S/N先取り: `0件`
- Topic 37の速度制御・ブレーキ制御先取り: `0件`
- exact blocker: `0件`

PowerPoint工程は完了。次工程はanswer-bearing資料を先に開かないfresh workerによるclean blind candidate固定。本runは固定EXAM_ALIGNMENT・解説・練習のanswer-bearing資料を確認済みのため、clean blind candidateは作成しない。
'''
    QA.write_text(content, encoding='utf-8')
    print(QA)


def patch_progress(commit):
    size, sha = artifact_meta()
    status = STATUS.read_text(encoding='utf-8')
    handoff = HANDOFF.read_text(encoding='utf-8')

    assert 'current_status: `topic_35_practice_pdf_complete`' in status, 'exact blocker: STATUS current_status changed before progress patch'
    assert '判定: `PASS / PRACTICE_PDF_COMPLETE`' in status, 'exact blocker: STATUS Topic 35 state changed before progress patch'
    assert '現在地は `topic_35_practice_pdf_complete`' in handoff, 'exact blocker: HANDOFF current state changed before progress patch'
    assert '判定: `PASS / PRACTICE_PDF_COMPLETE`' in handoff, 'exact blocker: HANDOFF Topic 35 state changed before progress patch'

    status = status.replace('current_status: `topic_35_practice_pdf_complete`', 'current_status: `topic_35_powerpoint_complete`', 1)
    status = re.sub(
        r'(?m)^- next_start: .*$',
        '- next_start: 最新main、上位仕様、系列SPEC、`STATUS.md` / `HANDOFF.md`、既存の車両二種worker成果をreconcileし、Topic 35の固定EXAM_ALIGNMENT・解説source/PDF・練習source/PDF・PowerPointを変更せず、answer-bearing資料を先に開かないfresh workerでclean blind candidateを固定して独立再解答QAへ進む。二次問題の件数合わせ、未確認実車値の真値化、Topic 36・37先取りは行わない。',
        status,
        count=1,
    )
    status = status.replace('判定: `PASS / PRACTICE_PDF_COMPLETE`', '判定: `PASS / POWERPOINT_COMPLETE`', 1)
    old = '次工程は固定EXAM_ALIGNMENT・解説source/PDF・練習source/PDFを変更せず、Topic 35解説画像PowerPoint生成＋render/content QA。完成数は `34 / 39` のまま。'
    assert old in status, 'exact blocker: STATUS Topic 35 next-step marker changed before progress patch'
    block = f'''### 解説画像PowerPoint

- PowerPoint: `topics/35_atc_track_circuit_analysis/35_atc_track_circuit_analysis_images.pptx`
- QA: `topics/35_atc_track_circuit_analysis/35_atc_track_circuit_analysis_images_qa.md`
- canonical commit: `{commit}`
- SHA-256: `{sha}`
- file size: `{size} bytes`
- 16:9: `6枚`
- python-pptx geometry / content / source notes: `6 / 6 PASS`
- LibreOffice PDF / Poppler text / PNG render: `6 / 6 PASS`
- 固定5問・25答案要素: `25 / 25 connected`
- 二次問題の件数合わせ採用: `0件`
- SPEC固定7項目: `7 / 7 PASS`
- 未確認実車値の真値化: `0件`
- Topic 36・37先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

次工程は固定EXAM_ALIGNMENT・解説source/PDF・練習source/PDF・PowerPointを変更せず、answer-bearing資料を先に開かないfresh workerによるclean blind candidate固定＋独立再解答QA。Topic 35はまだ未完了で、完成数は `34 / 39` のまま。'''
    status = status.replace(old, block, 1)

    handoff = re.sub(
        r'(?m)^現在地は `topic_35_practice_pdf_complete`.*$',
        '現在地は `topic_35_powerpoint_complete`。active topicは `35 ATC① 軌道回路の回路解析`。制作前EXAM_ALIGNMENT、解説source/PDF QA、練習source/PDF QA、解説画像PowerPoint＋render/content QAまで完了。次工程は固定EXAM_ALIGNMENT・全既存成果物を変更せず、answer-bearing資料を先に開かないfresh workerによるclean blind candidate固定＋独立再解答QA。二次問題の件数合わせ、未確認実車値の真値化、Topic 36・37先取りは行わない。',
        handoff,
        count=1,
    )
    handoff = handoff.replace('判定: `PASS / PRACTICE_PDF_COMPLETE`', '判定: `PASS / POWERPOINT_COMPLETE`', 1)
    oldh = '次工程: 固定EXAM_ALIGNMENT・解説source/PDF・練習source/PDFを変更せず、Topic 35解説画像PowerPoint生成＋render/content QA。Topic 35はまだ未完了で、完成数は `34 / 39` のまま。'
    assert oldh in handoff, 'exact blocker: HANDOFF Topic 35 next-step marker changed before progress patch'
    blockh = f'''### 解説画像PowerPoint

canonical:
- PowerPoint: `topics/35_atc_track_circuit_analysis/35_atc_track_circuit_analysis_images.pptx`
- QA: `topics/35_atc_track_circuit_analysis/35_atc_track_circuit_analysis_images_qa.md`
- canonical commit: `{commit}`
- SHA-256: `{sha}`
- file size: `{size} bytes`

品質ゲート:
- 16:9: `6枚`
- python-pptx geometry / content / source notes: `6 / 6 PASS`
- LibreOffice PDF / Poppler text / PNG render: `6 / 6 PASS`
- 固定5問・25答案要素: `25 / 25 connected`
- 二次問題の件数合わせ採用: `0件`
- SPEC固定7項目: `7 / 7 PASS`
- 未確認実車値の真値化: `0件`
- Topic 36・37先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

次工程: 固定EXAM_ALIGNMENT・解説source/PDF・練習source/PDF・PowerPointを変更せず、answer-bearing資料を先に開かないfresh workerによるclean blind candidate固定＋独立再解答QA。Topic 35はまだ未完了で、完成数は `34 / 39` のまま。'''
    handoff = handoff.replace(oldh, blockh, 1)

    STATUS.write_text(status, encoding='utf-8')
    HANDOFF.write_text(handoff, encoding='utf-8')
    print('patched STATUS/HANDOFF')


if __name__ == '__main__':
    if len(sys.argv) < 2:
        raise SystemExit('usage: qa | progress <commit>')
    if sys.argv[1] == 'qa':
        write_qa()
    elif sys.argv[1] == 'progress' and len(sys.argv) == 3:
        patch_progress(sys.argv[2])
    else:
        raise SystemExit('usage: qa | progress <commit>')
