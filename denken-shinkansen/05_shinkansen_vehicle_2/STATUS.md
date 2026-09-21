# STATUS - 新幹線車両・電験二種

更新日: 2026-09-21

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `37 / 39`
- current_status: `topic_38_practice_pdf_complete`
- last_completed_topic: `37 ATC③ 速度制御系`
- active_topic: `38 COMTRAC 列車追跡・進路制御・高信頼化`
- next_start: 最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、本`STATUS.md`、`HANDOFF.md`、Topic 38 EXAM_ALIGNMENT・解説source/source QA・解説PDF/PDF QA・練習source/source QA・練習PDF/PDF QAをreconcileし、固定5問・25答案要素、SPEC固定9項目、鉄道一次資料境界を維持してTopic 38 PowerPoint＋render/content QAへ進む。既存workerが同工程を完了済みなら重複生成せず、その成果を採用して次の安全な工程へ進む。

Topic 01〜37は `PASS / completed`。完成数は `37 / 39`。

## Topic 37 ATC③ 速度制御系

判定: `PASS / completed`

### 制作前EXAM_ALIGNMENT

- source: `topics/37_atc_speed_control_system/37_atc_speed_control_system.md`
- QA: `topics/37_atc_speed_control_system/37_atc_speed_control_system_exam_alignment_qa.md`
- 固定公式過去問: `5 / 5 PASS`
- 一次: `1問 / 5答案要素`、`5 / 5 PASS`
- 二次: `4問 / 20答案要素`、`20 / 20 PASS`
- 合計: `25 / 25 PASS`
- SPEC固定8項目: `8 / 8 mapped`
- 系列SPEC固定計算・グラフ: `2 / 2 mapped`
- 二次問題の件数合わせ採用: `0件`

### 成果物

- 解説source / source QA: `PASS`
- 解説PDF / PDF QA: `PASS`
- 練習source / source QA: `PASS`
- 練習PDF / PDF QA: `PASS`
- 解説画像PowerPoint / render・content QA: `PASS`
- 固定5問・25答案要素接続: `25 / 25 PASS`
- SPEC固定8項目: `8 / 8 PASS`
- 系列SPEC固定計算・グラフ: `2 / 2 PASS`
- 教材用仮定値を実車値として使用: `0件`
- ATS-Dxを新幹線ATC実装として使用: `0件`
- 未確認実車ATC内部実装・数値の真値化: `0件`
- Topic 38先取り: `0件`

### clean blind

v1:
- candidate: `topics/37_atc_speed_control_system/37_atc_speed_control_system_clean_blind_candidate.md`
- QA: `topics/37_atc_speed_control_system/37_atc_speed_control_system_clean_blind_qa.md`
- 一次 `4 / 5`、二次 `20 / 20`、合計 `24 / 25 FAIL`
- 1要素FAILは教材欠落ではなく独立再解答側の特定ミス。

v2:
- candidate: `topics/37_atc_speed_control_system/37_atc_speed_control_system_clean_blind_v2_candidate.md`
- candidate lock commit: `6fe8f6262431c25870e7b44560f79bed8e7022f5`
- QA: `topics/37_atc_speed_control_system/37_atc_speed_control_system_clean_blind_v2_qa.md`
- 一次: `5 / 5 PASS`
- 二次: `20 / 20 PASS`
- 合計: `25 / 25 PASS`
- v1唯一のR4一次「機械」問7(2)は、v2で `自己保持回路` を独立に特定して解消。
- candidate固定後修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 既存成果物再生成: `0件`
- exact blocker: `0件`

## Topic 38 COMTRAC 列車追跡・進路制御・高信頼化

状態: `PRACTICE_PDF_COMPLETE / powerpoint_pending`

### 制作前EXAM_ALIGNMENT

- source: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability.md`
- QA: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_exam_alignment_qa.md`
- 固定公式過去問: `5 / 5 PASS`
- 一次: `5問 / 25答案要素`、`25 / 25 PASS`
- 二次: `0問`（当該コア論点の直接対応を固定できず、件数合わせ採用なし）
- SPEC固定9項目: `9 / 9 mapped`
- 二次問題の件数合わせ採用: `0件`
- 鉄道一次資料境界: `PASS`

### 解説source

- source: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_explanation_source.md`
- QA: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_explanation_source_qa.md`
- 固定5問・25答案要素接続: `25 / 25 PASS`
- SPEC固定9項目: `9 / 9 PASS`
- 3段階例題: `3 / 3 PASS`
- 可用性例題独立再計算: `PASS`

### 解説PDF

- PDF: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_explanation.pdf`
- QA: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_explanation_pdf_qa.md`
- A4縦 `5頁`
- 固定5問・25答案要素接続: `25 / 25 PASS`
- SPEC固定9項目: `9 / 9 PASS`
- 3段階例題: `3 / 3 PASS`
- source実質行保持: `全22節 PASS`（結合上線14出現のみ `overline(...)` 表記へ正規化）
- PDFium / Poppler render: `5 / 5 PASS`
- replacement character U+FFFD: `0件`
- clipped / overlap / broken glyph: `0件`
- 未確認COMTRAC内部構成・アルゴリズム・処理周期・冗長方式・MTBF/MTTR/可用性値の真値化: `0件`
- Topic 39先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

### 練習source

- source: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_practice_source.md`
- source commit: `9fbfd032f06a7dd21e8711c0c18a2722aae539a9`
- QA: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_practice_source_qa.md`
- 一次試験型: `12問 / 12問五肢択一`
- 基礎 / 標準 / 複合: `3 / 6 / 3`
- 一次正答一意性: `12 / 12 PASS`
- 固定5問・25答案要素接続: `25 / 25 PASS`
- SPEC固定9項目: `9 / 9 PASS`
- 計算再検算: `3 / 3 PASS`
- 二次試験型: `0題`（直接対応固定問題なし）
- 二次問題の件数合わせ採用: `0件`
- 公式過去問本文の転載: `0件`
- 未確認COMTRAC実値・内部実装の真値化: `0件`
- Topic 39先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

### 練習PDF

- PDF: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_practice.pdf`
- QA: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_practice_pdf_qa.md`
- PDF SHA-256: `b6fee6b8df42340297fe37584111ca0cca9636a629b82d25b4af6c3b148e4d95`
- A4縦 `6頁`
- 一次試験型: `12問 / 12問五肢択一`
- 固定5問・25答案要素: `25 / 25 PASS`
- SPEC固定9項目: `9 / 9 PASS`
- 計算再検算: `3 / 3 PASS`
- 二次試験型: `0題`（直接対応固定問題なし、件数合わせ採用 `0件`）
- PDFium / Poppler render: `6 / 6 PASS`
- replacement character U+FFFD: `0件`
- clipped / overlap / black square / broken glyph: `0件`
- 練習source本文保持: `PASS`
- 未確認COMTRAC実値・内部実装の真値化: `0件`
- Topic 39先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

次工程はTopic 38 PowerPoint＋render/content QA。

## Topic 21 固定注記

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた丸め差として診断済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。