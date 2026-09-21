# STATUS - 新幹線車両・電験二種

更新日: 2026-09-21

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `38 / 39`
- current_status: `topic_39_practice_pdf_complete / powerpoint_pending`
- last_completed_topic: `38 COMTRAC 列車追跡・進路制御・高信頼化`
- active_topic: `39 COSMOS 統合監視・SCADA・信頼性`
- next_start: Topic 39のPowerPoint生成＋render/content QA。練習PDFまでの正本を変更せず、固定25答案要素、一次20＋二次5、系列SPEC固定13項目、計算・グラフ3種を保持し、未確認COSMOS実装・実値を追加しない。

Topic 01〜38は `PASS / completed`。完成数は `38 / 39`。

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

判定: `PASS / completed`

### 完了済み成果物

- EXAM_ALIGNMENT＋QA: `PASS / REMEDIATED`
- 解説source＋source QA: `PASS / REMEDIATED`
- 練習source＋source QA: `PASS / REMEDIATED`
- 解説PDF＋PDF QA: `PASS / REMEDIATED`
- 練習PDF＋PDF QA: `PASS / REMEDIATED`
- PowerPoint＋render/content QA: `PASS / REMEDIATED`
- 固定5問変更: `0件`
- 一次: `5問 / 25答案要素`
- 二次: `0問`、直接対応なし・件数合わせ `0件`
- SPEC固定9項目: `9 / 9 PASS`
- 未確認COMTRAC実装・数値の真値化: `0件`
- Topic 39先取り: `0件`

### clean blind v9

- candidate: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_clean_blind_v9_candidate.md`
- candidate固定commit: `49733712ced101bee0bb42336084fe099bbe2c02`
- QA: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_clean_blind_v9_qa.md`
- freshness: `PASS`
- 公式標準解答一致: `25 / 25 PASS`
- 教材だけで導出可能: `25 / 25 PASS`
- 教材欠落によるFAIL: `0件`
- candidate固定後修正: `0件`
- 教材本文修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC固定9項目変更: `0件`
- 二次問題件数合わせ: `0件`
- exact blocker: `0件`
- Topic 38 completed: `YES`

### clean blind履歴

v8はfreshness `PASS`、公式一致 `22 / 25 FAIL`、教材だけで導出可能 `25 / 25 PASS`。教材欠落ではなく独立再解答側の識別ミスだったため教材remediationは行わず、fresh v9を実施した。

## Topic 39 COSMOS 統合監視・SCADA・信頼性

判定: `IN_PROGRESS`

### 制作前EXAM_ALIGNMENT

- EXAM_ALIGNMENT: `PASS`
- EXAM_ALIGNMENT QA: `PASS`
- 固定公式過去問: `5問`
- 一次: `4問 / 20答案要素`
- 二次: `1問 / 5答案要素`
- 合計: `25答案要素`
- 二次直接対応: R2二次「電力・管理」問2
- 二次件数合わせ: `0件`
- 系列SPEC固定13項目: `13 / 13 mapped`
- Topic 38固定問題の重複採用: `0件`
- 未確認COSMOS内部実装・数値の真値化: `0件`
- exact blocker: `0件`

固定5問:
1. R4一次「機械」問3 — 計器用変成器
2. R3一次「機械」問8 — A/D変換
3. H30一次「機械」問8 — LAN中継機器・アドレス
4. H25一次「機械」問8 — 変調・復調
5. R2二次「電力・管理」問2 — 計器用変成器・保護リレー信頼性・自動監視・冗長化

H26一次「機械」問3のUPS・並列冗長はTopic 38ですでに固定済みのため、Topic 39では重複固定しない。

### 解説source＋source QA

- source: `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_explanation_source.md`
- source QA: `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_explanation_source_qa.md`
- 判定: `PASS / EXPLANATION_SOURCE_COMPLETE`
- 固定25答案要素: `25 / 25 PASS`
- 一次: `20 / 20 PASS`
- 二次: `5 / 5 PASS`
- 系列SPEC固定13項目: `13 / 13 PASS`
- 系列SPEC計算・グラフ: `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`
- 一般SCADAモデルをCOSMOS実装と断定: `0件`
- 未確認COSMOS内部実装・数値の真値化: `0件`
- 固定5問変更: `0件`
- Topic 38固定問題重複採用: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

### 解説PDF＋PDF QA

- PDF: `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_explanation.pdf`
- QA: `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_explanation_pdf_qa.md`
- 判定: `PASS / EXPLANATION_PDF_COMPLETE`
- A4縦: `3頁`
- 固定5問・25答案要素: `25 / 25 connected`
- 一次: `20 / 20 PASS`
- 二次: `5 / 5 PASS`
- 系列SPEC固定13項目: `13 / 13 PASS`
- 3段階例題: `3 / 3 PASS`
- 系列SPEC計算・グラフ: `3 / 3 PASS`
- PDFium 200 dpi: `3 / 3 PASS`
- Poppler 200 dpi: `3 / 3 PASS`
- extracted text: replacement character `0件`、`(cid:)` `0件`
- clipped text / overlap / black square / broken glyph: `0件`
- 一般SCADAモデルをCOSMOS実装と断定: `0件`
- 未確認COSMOS内部実装・数値の真値化: `0件`
- 固定5問変更: `0件`
- Topic 38固定問題重複採用: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

### 練習source＋source QA

- source: `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_practice_source.md`
- source QA: `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_practice_source_qa.md`
- 判定: `PASS / PRACTICE_SOURCE_COMPLETE`
- 一次試験型: `12問`、全問五肢択一、正答一意性 `12 / 12 PASS`
- 二次試験型: `1題 / 5設問`、R2二次「電力・管理」問2への直接対応
- 固定25答案要素: `25 / 25 PASS`
- 一次: `20 / 20 PASS`
- 二次: `5 / 5 PASS`
- 系列SPEC固定13項目: `13 / 13 PASS`
- 系列SPEC計算・グラフ: `3 / 3 PASS`
- 数値独立再計算: `6 / 6 PASS`
- 二次問題の件数合わせ採用: `0件`
- 一般SCADAモデルをCOSMOS実装と断定: `0件`
- 未確認COSMOS内部実装・数値の真値化: `0件`
- Topic 38固定問題重複採用: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

### 練習PDF＋PDF QA

- PDF: `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_practice.pdf`
- QA: `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_practice_pdf_qa.md`
- 判定: `PASS / PRACTICE_PDF_COMPLETE`
- A4縦: `7頁`
- 一次12問・五肢・正答・完全解説: `12 / 12 PASS`
- 二次1題5設問・模範解答: `5 / 5 PASS`
- 固定25答案要素: `25 / 25 PASS`
- 一次: `20 / 20 PASS`
- 二次: `5 / 5 PASS`
- 系列SPEC固定13項目: `13 / 13 PASS`
- 系列SPEC計算・グラフ: `3 / 3 PASS`
- PDFium 200 dpi: `7 / 7 PASS`
- Poppler 200 dpi: `7 / 7 PASS`
- replacement character U+FFFD / `(cid:)`: `0件 / 0件`
- clipped text / overlap / black square / broken glyph: `0件`
- 一般SCADAモデルをCOSMOS実装と断定: `0件`
- 未確認COSMOS内部実装・数値の真値化: `0件`
- Topic 38固定問題重複採用: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

### 次工程

Topic 39のPowerPointを生成し、render/content QAを行う。固定5問・25答案要素、一次20要素＋二次5要素、系列SPEC固定13項目、計算・グラフ3種を保持し、一般SCADAモデルとCOSMOS実設備仕様を混同しない。PowerPoint QA通過後にのみfresh workerによるclean blind最終ゲートへ進む。

## Topic 21 固定注記

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた丸め差として診断済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
