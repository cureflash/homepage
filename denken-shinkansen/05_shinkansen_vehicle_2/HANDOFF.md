# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-21

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜37は最終QAまで `PASS / completed`。完成数 `37 / 39`。

現在地は `topic_38_powerpoint_remediated`。last completed topicは `37 ATC③ 速度制御系`、active topicは `38 COMTRAC 列車追跡・進路制御・高信頼化`。

## Topic 38 clean blind v1診断

固定5問はR8一次「機械」問8、R2一次「機械」問8、H29一次「機械」問8、H26一次「機械」問3、H23一次「機械」問8。一次 `5問 / 25答案要素`、二次 `0問`、直接対応なし・件数合わせ `0件`。固定5問自体は変更しない。

clean blind v1は公式標準解答 `25 / 25 PASS`、教材だけで導出 `23 / 25 FAIL`。

- R8問8(5): 角位置センサなしの簡易位置決め、過負荷・急加減速時の脱調不足
- H23問8(3): ノイマン形コンピュータ不足
- H29問8/H23問8: 固定答案要素mappingが実空欄と不一致
- v1 candidate修正: `0件`

## remediation完了範囲

### EXAM_ALIGNMENT＋QA

`PASS / EXAM_ALIGNMENT_REMEDIATED`

- 固定5問変更: `0件`
- H29実空欄: `(1)逐次的 (2)結合 (3)ドライバ (4)大きくなる (5)ブラックボックス`
- H23実空欄: `(1)組合せ回路 (2)フリップフロップ (3)ノイマン形コンピュータ (4)ASIC (5)Quine–McCluskey法`
- 固定25答案要素: `25 / 25 PASS`
- SPEC固定9項目: `9 / 9 PASS`

### 解説source＋source QA

`PASS / EXPLANATION_SOURCE_REMEDIATED`

- R8(5): 角位置センサなしのオープンループ簡易位置決めと脱調条件を明示
- H23(3): ノイマン形コンピュータの記憶プログラム方式・原則逐次命令実行を明示
- H29(4): 単体→結合→システム試験で対象プログラム量・範囲が大きくなることを明示
- 固定25答案要素: `25 / 25 connected`
- SPEC固定9項目: `9 / 9 PASS`
- 3段階例題: `3 / 3 PASS`
- 未確認COMTRAC実装・数値の真値化: `0件`
- Topic 39先取り: `0件`
- exact blocker: `0件`

### 練習source＋source QA

`PASS / PRACTICE_SOURCE_REMEDIATED`

- 一次試験型: `12問 / 12問五肢択一`
- 一次正答一意性: `12 / 12 PASS`
- 二次試験型: `0題`、直接対応なし・件数合わせ `0件`
- clean blind v1 remediation必須3点: `3 / 3 PASS`
- H29/H23実空欄mapping: `10 / 10 PASS`
- 固定5問・25答案要素: `25 / 25 PASS`
- SPEC固定9項目: `9 / 9 PASS`
- 計算再検算: `3 / 3 PASS`
- 未確認COMTRAC実装・数値の真値化: `0件`
- Topic 39先取り: `0件`
- exact blocker: `0件`

### 解説PDF＋PDF QA

`PASS / EXPLANATION_PDF_REMEDIATED`

- remediation前PDFを流用せず再生成
- A4縦 `4頁`
- PDFium / Poppler / visual: `4 / 4 PASS`
- clean blind v1 remediation必須3点: `3 / 3 PASS`
- 固定5問・25答案要素: `25 / 25 connected`
- SPEC固定9項目: `9 / 9 PASS`
- 3段階例題: `3 / 3 PASS`
- 未確認COMTRAC実装・数値の真値化: `0件`
- Topic 39先取り: `0件`
- exact blocker: `0件`

### 練習PDF＋PDF QA

`PASS / PRACTICE_PDF_REMEDIATED`

- remediation前PDFを流用せず再生成
- A4縦 `4頁`
- PDFium / Poppler / visual: `4 / 4 PASS`
- 一次試験型: `12問 / 12問五肢択一`
- clean blind v1 remediation必須3点: `3 / 3 PASS`
- H29/H23実空欄mapping: `10 / 10 PASS`
- 固定5問・25答案要素: `25 / 25 PASS`
- SPEC固定9項目: `9 / 9 PASS`
- 計算再検算: `3 / 3 PASS`
- 二次問題の件数合わせ採用: `0件`
- 未確認COMTRAC実装・数値の真値化: `0件`
- Topic 39先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

### PowerPoint＋render/content QA

`PASS / POWERPOINT_REMEDIATED`

- clean blind v1以前のPowerPointは流用せず、remediated sourceから新規生成
- artifact: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_images.pptx`
- QA: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_images_qa.md`
- 16:9 / `4 slides`
- python-pptx open / geometry bounds: `PASS`、bounds外shape `0件`
- PPTX ZIP integrity: `PASS`
- LibreOffice PDF conversion / Poppler render / visual inspection: `4 / 4 PASS`
- `pdftotext -layout`: `3723 chars`、U+FFFD `0件`
- clean blind v1 remediation必須3点: `3 / 3 PASS`
- 固定5問・25答案要素: `25 / 25 connected`
- 二次: `0問`、直接対応なし・件数合わせ `0件`
- SPEC固定9項目: `9 / 9 PASS`
- 未確認COMTRAC実装・数値の真値化: `0件`
- Topic 39先取り: `0件`
- exact blocker: `0件`

## 次工程: fresh clean blind v2

次runは Topic 38 fresh clean blind v2 candidate を別ファイルとして固定する。

candidate固定前は、保存済み正答、解説source/PDF、練習source/PDF、各QA、公式標準解答を開かず、question-only intakeだけから独立再解答する。v1 candidateは変更しない。

candidate固定後に公式解答・教材へ照合し、固定5問・25答案要素について「公式標準解答一致」と「教材だけで導出可能」を別々に判定する。25/25でない場合はcompletedにしない。

## 境界条件

- 未確認のCOMTRAC内部構成、列車追跡アルゴリズム、進路制御論理、インターロック実装、処理周期、冗長方式、故障率、MTBF、MTTR、可用性値を真値化しない。
- JR東海第二総合指令所の存在から装置単位の冗長方式・切替方式を推測しない。
- 教材用状態機械・Boolean式・可用性計算の仮定例は実装値と明確に分離する。
- Topic 39のCOSMOS、SCADA、A/D変換、計器用変成器、遠隔計測・遠隔制御は先取りしない。
- Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は既存の丸め差診断を維持し、一般式 `P=Tω`、`ω=2πN/60` は変更しない。

exact blocker: `0件`
