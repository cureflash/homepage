# STATUS - 新幹線車両・電験二種

更新日: 2026-09-21

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `38 / 39`
- current_status: `topic_39_clean_blind_v6_fail / BLOCKED_PROCESS_SPEC`
- last_completed_topic: `38 COMTRAC 列車追跡・進路制御・高信頼化`
- active_topic: `39 COSMOS 統合監視・SCADA・信頼性`
- next_start: clean blind v7は開始しない。R2二次の固定5答案要素について、answer-bearing情報を含めず「5群の境界だけ」をquestion-only intakeへ明示できるまで停止する。その修正後、別fresh worker/contextでv7を実施する。

Topic 01〜38は `PASS / completed`。完成数は `38 / 39`。

## Topic 38 COMTRAC 列車追跡・進路制御・高信頼化

判定: `PASS / completed`

- EXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPoint＋各QA: `PASS / REMEDIATED`
- 固定5問・25答案要素: `25 / 25 PASS`
- SPEC固定9項目: `9 / 9 PASS`
- clean blind v9: 公式標準解答一致 `25 / 25 PASS`、教材だけで導出可能 `25 / 25 PASS`
- exact blocker: `0件`

## Topic 39 COSMOS 統合監視・SCADA・信頼性

判定: `IN_PROGRESS / CLEAN_BLIND_V6_FAIL / BLOCKED_PROCESS_SPEC`

### 制作前EXAM_ALIGNMENT

- EXAM_ALIGNMENT＋QA: `PASS`
- 固定公式過去問: `5問`
- 一次: `4問 / 20答案要素`
- 二次: `1問 / 5答案要素`
- 合計: `25答案要素`
- 二次直接対応: R2二次「電力・管理」問2
- 二次件数合わせ: `0件`
- 系列SPEC固定13項目: `13 / 13 mapped`
- Topic 38固定問題の重複採用: `0件`
- 未確認COSMOS内部実装・数値の真値化: `0件`

固定5問:
1. R4一次「機械」問3 — 計器用変成器
2. R3一次「機械」問8 — A/D変換
3. H30一次「機械」問8 — LAN中継機器・アドレス
4. H25一次「機械」問8 — 変調・復調
5. R2二次「電力・管理」問2 — 計器用変成器・保護リレー信頼性・自動監視・冗長化

### 完了済み成果物

- 解説source＋source QA: `PASS / EXPLANATION_SOURCE_COMPLETE`
- 解説PDF＋PDF QA: `PASS / EXPLANATION_PDF_COMPLETE`
- 練習source＋source QA: `PASS / PRACTICE_SOURCE_COMPLETE`
- 練習PDF＋PDF QA: `PASS / PRACTICE_PDF_COMPLETE`
- PowerPoint＋render/content QA: `PASS / POWERPOINT_COMPLETE`
- 固定25答案要素の教材接続: `25 / 25 PASS`
- 系列SPEC固定13項目: `13 / 13 PASS`
- 系列SPEC計算・グラフ: `3 / 3 PASS`
- 一般SCADAモデルをCOSMOS実装と断定: `0件`
- 未確認COSMOS内部実装・数値の真値化: `0件`

### clean blind v1

- candidate commit: `cb034e4e121512844cf0333c6df49de84d7555e8`
- 公式標準解答一致: `24 / 25 FAIL`
- 教材だけで導出可能: `25 / 25 PASS`
- 診断: `solver error`。教材欠落ではない。

### clean blind v2

- candidate commit: `0d2b169dff258124d088581b7690bfcdc063fc4f`
- 公式標準解答一致: `21 / 25 FAIL`
- 教材だけで導出可能: `25 / 25 PASS`
- 診断: `solver error`。教材欠落ではない。
- answer-bearingな不一致詳細はv2 QAにのみ保持し、mandatory recordには載せない。
- 教材・PDF・練習・PowerPoint修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`

### clean blind v3

- candidate commit: `d7408b99b0287bdc21c034379eb70b969f9ae370`
- candidate freshness: `PASS`
- 公式標準解答一致: `23 / 25 FAIL`
- 教材だけで導出可能: `25 / 25 PASS`
- R2固定5答案要素区切り維持: `FAIL`
- 診断: `solver error + fixed split nonconformance`。教材欠落ではない。
- answer-bearingな不一致詳細はv3 QAにのみ保持し、mandatory recordには載せない。
- 教材・PDF・練習・PowerPoint修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`

### clean blind v4

- candidate commit: `32aa4a98774f662eb01d02f29d71fe6ba287f26a`
- candidate freshness: `PASS`
- 公式標準解答一致: `22 / 25 FAIL`
- 教材だけで導出可能: `25 / 25 PASS`
- R2固定5答案要素区切り維持: `FAIL`
- 診断: `solver/transcription error + fixed split nonconformance`。教材欠落ではない。
- answer-bearingな不一致詳細はv4 QAにのみ保持し、mandatory recordには載せない。
- 教材・PDF・練習・PowerPoint修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 系列SPEC変更: `0件`
- Topic 21一般式変更: `0件`

### clean blind v5

- candidate commit: `4ec9094da46b28a861a1af03fc57d72a4f363f87`
- candidate freshness: `PASS`
- 公式標準解答一致: `22 / 25 FAIL`
- 一次: `18 / 20 PASS`
- 二次: `4 / 5 PASS`
- 教材だけで導出可能: `25 / 25 PASS`
- R2固定5答案要素区切り維持: `FAIL`
- 診断: `solver error + fixed split nonconformance`。教材欠落ではない。
- 教材・PDF・練習・PowerPoint修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 系列SPEC固定13項目変更: `0件`
- 未確認COSMOS内部実装・数値の真値化: `0件`
- Topic 21一般式変更: `0件`

### clean blind v6

- candidate: `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_clean_blind_v6_candidate.md`
- candidate commit: `9f8a1260c334054eae18e124ff3a2722f75961b7`
- QA: `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_clean_blind_v6_qa.md`
- candidate freshness: `PASS`
- 公式標準解答一致: `24 / 25 FAIL`
- 一次: `20 / 20 PASS`
- 二次: `4 / 5 PASS`
- 教材だけで導出可能: `25 / 25 PASS`
- R2固定5答案要素区切り維持: `FAIL`
- 診断: `solver error + fixed split nonconformance`。教材欠落ではない。
- answer-bearingな不一致詳細はv6 QAにのみ保持し、mandatory recordには載せない。
- 教材・PDF・練習・PowerPoint修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 系列SPEC固定13項目変更: `0件`
- 未確認COSMOS内部実装・数値の真値化: `0件`
- Topic 21一般式変更: `0件`

### exact blocker

- exact blocker: `TOPIC39_CLEAN_BLIND_FIXED_SPLIT_NOT_AVAILABLE_IN_QUESTION_ONLY_INTAKE`
- detail: question-only intakeはR2二次を「5答案要素」とだけ記載し、既存EXAM_ALIGNMENTで固定した5群の境界を記載していない。公式問題本文からは複数の5分割が成立し得るため、fresh workerが「既存と同じ区切り」を確定するにはanswer-bearing資料を先に読むか区切りを推測する必要がある。前者はclean blind freshnessに反し、後者は推測禁止に反する。
- resolution required: answer-aware coordinatorが正答内容を載せず、固定5群の境界だけをquestion-only intakeへ明示する。その後に別fresh worker/contextでv7を行う。
- current worker: candidate固定後にanswer-bearing資料を参照済みのためv7 workerとしてはfreshness invalid。

### 次工程

blocker解消まで停止。教材成果物、固定EXAM_ALIGNMENT、系列SPEC、Topic 21一般式は変更しない。

## Topic 21 固定注記

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた丸め差として診断済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
