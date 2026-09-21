# STATUS - 新幹線車両・電験二種

更新日: 2026-09-21

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `37 / 39`
- current_status: `topic_38_powerpoint_complete`
- last_completed_topic: `37 ATC③ 速度制御系`
- active_topic: `38 COMTRAC 列車追跡・進路制御・高信頼化`
- next_start: 最新main、上位2仕様書、系列`SPEC.md`、本`STATUS.md`、`HANDOFF.md`をreconcileし、Topic 38 fresh clean blind candidate固定へ進む。candidate作成前は保存済み正答、解説source/PDF、練習source/PDF、各QA、公式標準解答を開かず、question-only intakeから独立再解答する。

Topic 01〜37は `PASS / completed`。完成数は `37 / 39`。

## Topic 37 ATC③ 速度制御系

判定: `PASS / completed`

- 制作前EXAM_ALIGNMENT＋QA: `PASS`
- 解説source/PDF、練習source/PDF、PowerPoint＋render/content QA: `PASS`
- 固定5問・25答案要素: 一次 `5 / 5`、二次 `20 / 20`、合計 `25 / 25 PASS`
- SPEC固定8項目: `8 / 8 PASS`
- 系列SPEC固定計算・グラフ: `2 / 2 PASS`
- clean blind v2: `25 / 25 PASS`
- candidate固定後修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- exact blocker: `0件`

## Topic 38 COMTRAC 列車追跡・進路制御・高信頼化

状態: `POWERPOINT_COMPLETE / clean_blind_pending`

### 制作前EXAM_ALIGNMENT

- source: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability.md`
- QA: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_exam_alignment_qa.md`
- 固定公式過去問: `5 / 5 PASS`
- 一次: `5問 / 25答案要素`、`25 / 25 PASS`
- 二次: `0問`（当該コア論点の直接対応を固定できず、件数合わせ採用 `0件`）
- SPEC固定9項目: `9 / 9 mapped`
- 鉄道一次資料境界: `PASS`

### 解説・練習成果物

- 解説source / source QA: `PASS`
- 解説PDF / PDF QA: `PASS`、A4縦 `5頁`、PDFium / Poppler `5 / 5 PASS`
- 練習source / source QA: `PASS`、一次試験型 `12問 / 12問五肢択一`
- 練習PDF / PDF QA: `PASS`、A4縦 `6頁`、PDFium / Poppler `6 / 6 PASS`
- 固定5問・25答案要素接続: `25 / 25 PASS`
- SPEC固定9項目: `9 / 9 PASS`
- 二次試験型: `0題`（直接対応固定問題なし、件数合わせ採用 `0件`）
- 未確認COMTRAC実値・内部実装の真値化: `0件`
- Topic 39先取り: `0件`
- Topic 21一般式変更: `0件`

### 解説画像PowerPoint

- PowerPoint: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_images.pptx`
- QA: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_images_qa.md`
- PowerPoint SHA-256: `5b0176f4d6bf5066269618e34463f0d464b0909ba9a8996d71b0bbc1fb487774`
- 16:9 / `4 slides`
- 固定5問・25答案要素: `25 / 25 connected`
- SPEC固定9項目: `9 / 9 PASS`
- LibreOffice PDF conversion / Poppler render: `4 / 4 PASS`
- replacement character U+FFFD: `0件`
- 教材用Boolean式・状態遷移・可用性モデルを実COMTRAC内部実装として表示: `0件`
- 未確認COMTRAC内部構成・アルゴリズム・処理周期・冗長方式・MTBF/MTTR/可用性値の真値化: `0件`
- 二次問題の件数合わせ採用: `0件`
- Topic 39先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

次工程はTopic 38 fresh clean blind candidate固定。PowerPoint作成・QA runはanswer-bearing資料を参照済みのため、同run内でcandidateを作成しない。

## Topic 21 固定注記

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた丸め差として診断済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
