from pathlib import Path
import hashlib

base=Path('denken-shinkansen/07_shinkansen_machine_2')
topic=base/'topics/21_readhesion_control'
ppt=topic/'21_readhesion_control_images.pptx'
status_path=base/'STATUS.md'
handoff_path=base/'HANDOFF.md'
qa_path=topic/'21_readhesion_control_powerpoint_qa.md'

raw=ppt.read_bytes()
size=len(raw)
blob_sha=hashlib.sha1(f'blob {size}\0'.encode()+raw).hexdigest()

qa=f'''# Topic 21 解説画像PowerPoint QA

更新日: 2026-09-20

対象: `topics/21_readhesion_control/21_readhesion_control_images.pptx`

## 成果物
- 16:9・4枚。
- 1枚目: メカトロニクス閉ループ、センサ・制御演算・アクチュエータ、シーケンス制御とフィードバック制御。
- 2枚目: ロータリエンコーダの速度・方向・角度、加速度推定、磁気・光電・回転パルス系センサ、空転・滑走の観測量。
- 3枚目: 「状態検出 → トルク抑制 → 回復確認 → トルク回復」の教材用一般モデル、非線形性・飽和・応答速度。
- 4枚目: 単位負帰還の閉ループ伝達関数、教材用 `G_y(s)=3/(s+3)`、インパルス応答、単位ステップ応答、二次記述式の解法順。

## 表示・ファイルQA
- LibreOffice headless PDF変換: `PASS`
- 16:9・4ページ: `PASS`
- 1600×900レンダリング: `4 / 4 PASS`
- スライド外周クリップ: `0件 / PASS`
- PDF文字抽出 Unicode replacement char / `(cid:)`: `0 / 0`
- PPTX ZIP整合: `PASS`
- slide XML: `4`
- Git blob: `{blob_sha}`
- GitHub canonical size: `{size} bytes`

## 数値・論理QA
- `ω=2πN/(PΔt)` と速度・角度・方向の対応: `PASS`
- 加速度差分 `a_w≈[v_w(t+Δt)-v_w(t)]/Δt`: `PASS`
- 空転・滑走の方向関係: `PASS`
- 状態検出→トルク抑制→回復確認→トルク回復: `PASS / 教材用一般モデル`
- 非線形性・飽和・応答速度: `PASS / 定性的説明`
- `G_y(s)=3/(s+3)` → インパルス応答 `3e^(-3t)`、単位ステップ応答 `1-e^(-3t)`: `PASS`

## 過去問対応・境界QA
固定一次4問＋二次1問、計5問・14答案要素を維持する。

- R08 一次 機械 問8: スライド1・2
- R06 一次 機械 問8 (5): スライド2
- R04 一次 機械 問7 (3): スライド1
- H27 一次 機械 問8 (3),(5): スライド2
- R07 二次 機械・制御 問4 (4),(5): スライド4
- 固定14答案要素: `14 / 14 COVERED`
- 一次・二次を含む: `PASS`
- 二次記述式を含む: `PASS`
- 未確認実車センサ方式・しきい値・制御周期・トルク抑制率・回復率・判定ロジックの仕様化: `0件 / PASS`
- Topic 22先取り: `0件 / PASS`
- SPEC外A-D変換器方式追加: `0件 / PASS`
- 固定過去問の個別正答・完成解答保存: `0件 / PASS`

## 判定
`PASS / topic_21_powerpoint_complete / IN_PROGRESS`

## 次工程
固定5問・14答案要素と完成済み教材を変更せず、Topic 21の独立再解答前ゲートを実施する。
'''
qa_path.write_text(qa,encoding='utf-8')

status=status_path.read_text(encoding='utf-8')
old='''- current_status: `topic_21_practice_pdf_complete / IN_PROGRESS`\n- last_completed_topic: `20 制御系はなぜ発振する？`\n- active_topic: `21 空転した車輪を再粘着させる`\n- next_start: Topic 21 解説画像PowerPoint source'''
new='''- current_status: `topic_21_powerpoint_complete / IN_PROGRESS`\n- last_completed_topic: `20 制御系はなぜ発振する？`\n- active_topic: `21 空転した車輪を再粘着させる`\n- next_start: Topic 21 独立再解答前ゲート'''
assert old in status
status=status.replace(old,new,1)
marker='''## Topic 21 成果物\n'''
assert marker in status
ppt_section='''## Topic 21 解説画像PowerPoint品質ゲート\n- 16:9・4枚: `PASS`\n- LibreOffice headless PDF変換: `PASS`\n- 1600×900レンダリング: `4 / 4 PASS`\n- スライド外周クリップ: `0件 / PASS`\n- `pdftotext` 抽出、replacement char、`(cid:)`: `PASS / 0 / 0`\n- PPTX ZIP整合・slide XML: `PASS / 4`\n- 固定一次4問＋二次1問・14答案要素: `14 / 14 COVERED`\n- 未確認実車仕様化・Topic 22先取り・SPEC外A-D変換器方式追加: `各0件 / PASS`\n- 固定公式過去問個別正答保存: `0件 / PASS`\n- 判定: `PASS / topic_21_powerpoint_complete / IN_PROGRESS`\n\n'''
status=status.replace(marker,ppt_section+marker,1)
artifact_line='''- `topics/21_readhesion_control/21_readhesion_control_practice_pdf_qa.md` — 練習PDF QA完了\n'''
assert artifact_line in status
status=status.replace(artifact_line,artifact_line+'''- `topics/21_readhesion_control/21_readhesion_control_images.pptx` — 解説画像PowerPoint完了\n- `topics/21_readhesion_control/21_readhesion_control_powerpoint_qa.md` — PowerPoint QA完了\n''',1)
start=status.index('## 今回進めた内容')
status=status[:start]+'''## 今回進めた内容\nTopic 21の解説画像PowerPoint＋QAを完了した。16:9・4枚、1600×900レンダリング `4 / 4 PASS`、固定一次4問＋二次1問・14答案要素 `14 / 14 COVERED`。未確認実車仕様化、Topic 22先取り、SPEC外A-D変換器方式追加は行っていない。完成数は `20 / 22` のまま。\n\n## 次工程\nTopic 21「空転した車輪を再粘着させる」の独立再解答前ゲート。\n'''
status_path.write_text(status,encoding='utf-8')

handoff=handoff_path.read_text(encoding='utf-8')
old='''- current status: `topic_21_practice_pdf_complete / IN_PROGRESS`\n- 次工程: Topic 21 解説画像PowerPoint source'''
new='''- current status: `topic_21_powerpoint_complete / IN_PROGRESS`\n- 次工程: Topic 21 独立再解答前ゲート'''
assert old in handoff
handoff=handoff.replace(old,new,1)
marker='''## 次工程\nTopic 21「空転した車輪を再粘着させる」の解説画像PowerPoint source。'''
assert marker in handoff
section='''## Topic 21 解説画像PowerPoint\n- `topics/21_readhesion_control/21_readhesion_control_images.pptx`\n- `topics/21_readhesion_control/21_readhesion_control_powerpoint_qa.md`\n- 状態: `PASS / topic_21_powerpoint_complete / IN_PROGRESS`\n- 16:9・4枚、LibreOffice変換 `PASS`、1600×900レンダリング `4 / 4 PASS`\n- PPTX ZIP整合・slide XML: `PASS / 4`\n- PDF文字抽出異常: `replacement char 0 / (cid:) 0`\n- 固定一次4問＋二次1問・14答案要素: `14 / 14 COVERED`\n- 一次・二次・二次記述式: `PASS`\n- 未確認実車仕様化・Topic 22先取り・SPEC外A-D変換器方式追加: `各0件 / PASS`\n- 固定過去問個別正答保存: `0件 / PASS`\n\n## 次工程\nTopic 21「空転した車輪を再粘着させる」の独立再解答前ゲート。'''
handoff=handoff.replace(marker,section,1)
handoff_path.write_text(handoff,encoding='utf-8')

print('ppt_size',size)
print('ppt_blob',blob_sha)
print('finalized',qa_path,status_path,handoff_path)
