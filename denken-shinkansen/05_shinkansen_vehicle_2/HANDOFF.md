# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-21

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜37は最終QAまで `PASS / completed`。完成数 `37 / 39`。

現在地は `topic_38_powerpoint_complete`。last completed topicは `37 ATC③ 速度制御系`、active topicは `38 COMTRAC 列車追跡・進路制御・高信頼化`。

## Topic 37 完了記録

- 固定5問・25答案要素: 一次5、二次20、`25 / 25 PASS`
- SPEC固定8項目: `8 / 8 PASS`
- 系列SPEC固定計算・グラフ: `2 / 2 PASS`
- 解説・練習・PowerPoint各成果物: `PASS`
- clean blind v2: `25 / 25 PASS`
- candidate固定後修正 `0件`、固定EXAM_ALIGNMENT変更 `0件`、exact blocker `0件`

## Topic 38 進捗記録

### 制作前EXAM_ALIGNMENT

- source: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability.md`
- QA: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_exam_alignment_qa.md`
- 固定公式過去問: `5 / 5 PASS`
- 一次: `5問 / 25答案要素`、`25 / 25 PASS`
- 二次: `0問`。当該コア論点の直接対応を固定できず、件数合わせ採用 `0件`
- SPEC固定9項目: `9 / 9 mapped`
- 鉄道一次資料境界: `PASS`

固定5問はR8一次「機械」問8、R2一次「機械」問8、H29一次「機械」問8、H26一次「機械」問3、H23一次「機械」問8。電験過去問をCOMTRACそのものの出題とは扱わず、情報処理・論理・状態・信頼性の試験要求を固定し、鉄道固有部分はJR東海/JRTT/鉄道総研等の一次資料で接続する。

### 解説・練習

- 解説source＋source QA: `PASS`
- 解説PDF＋PDF QA: `PASS`、A4縦 `5頁`、render `5 / 5 PASS`
- 練習source＋source QA: `PASS`、一次12問、正答一意 `12 / 12 PASS`
- 練習PDF＋PDF QA: `PASS`、A4縦 `6頁`、render `6 / 6 PASS`
- 固定5問・25答案要素: `25 / 25 PASS`
- SPEC固定9項目: `9 / 9 PASS`
- 二次試験型: `0題`、件数合わせ採用 `0件`

### 解説画像PowerPoint 完了記録

- PowerPoint: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_images.pptx`
- QA: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_images_qa.md`
- SHA-256: `5b0176f4d6bf5066269618e34463f0d464b0909ba9a8996d71b0bbc1fb487774`
- 16:9 / `4 slides`
- python-pptx open / geometry: `4 / 4 PASS`
- LibreOffice PDF conversion: `4 / 4 PASS`
- Poppler render / visual inspection: `4 / 4 PASS`
- U+FFFD: `0件`
- 固定5問・25答案要素: `25 / 25 connected`
- SPEC固定9項目: `9 / 9 PASS`
- 二次: `0問`、件数合わせ採用 `0件`
- 教材用Boolean式・状態遷移・可用性モデルを実COMTRAC内部実装として表示: `0件`
- 未確認COMTRAC内部構成・追跡アルゴリズム・進路制御論理・処理周期・冗長方式・故障率・MTBF/MTTR/可用性値の真値化: `0件`
- Topic 39先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## 次工程: Topic 38 fresh clean blind candidate固定

次runは最新main、上位2仕様書、系列SPEC、本STATUS/HANDOFFをreconcileした後、question-only intakeから独立再解答してcandidateを固定する。

freshnessを守るため、candidate固定前は次を開かない。

- 固定EXAM_ALIGNMENTの保存済み正答・答案要素
- Topic 38解説source/PDF・練習source/PDF
- Topic 38各QA
- 公式標準解答

PowerPoint作成・QA runはanswer-bearing資料を参照済みのため、同run内でclean blind candidateを作成していない。

## 境界条件

- 未確認のCOMTRAC内部構成、列車追跡アルゴリズム、進路制御論理、インターロック実装、処理周期、冗長方式、故障率、MTBF、MTTR、可用性値を真値化しない。
- JR東海第二総合指令所の存在から装置単位の冗長方式・切替方式を推測しない。
- 教材用状態機械・Boolean式・可用性計算の仮定例は実装値と明確に分離する。
- Topic 39のCOSMOS、SCADA、A/D変換、計器用変成器、遠隔計測・遠隔制御は先取りしない。
- Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は既存の丸め差診断を維持し、一般式 `P=Tω`、`ω=2πN/60` は変更しない。

exact blocker: `0件`
