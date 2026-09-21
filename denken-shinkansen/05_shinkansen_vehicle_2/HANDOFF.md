# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-21

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜38は最終ゲートまで `PASS / completed`。完成数 `38 / 39`。

現在地は `topic_39_clean_blind_v6_fail / BLOCKED_PROCESS_SPEC`。active topicは `39 COSMOS 統合監視・SCADA・信頼性`。

## Topic 39 固定ゲート

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

## Topic 39 完了済み成果物

- 制作前EXAM_ALIGNMENT＋QA: `PASS`
- 解説source＋source QA: `PASS / EXPLANATION_SOURCE_COMPLETE`
- 解説PDF＋PDF QA: `PASS / EXPLANATION_PDF_COMPLETE`
- 練習source＋source QA: `PASS / PRACTICE_SOURCE_COMPLETE`
- 練習PDF＋PDF QA: `PASS / PRACTICE_PDF_COMPLETE`
- PowerPoint＋render/content QA: `PASS / POWERPOINT_COMPLETE`
- 固定25答案要素の教材接続: `25 / 25 PASS`
- 系列SPEC固定13項目: `13 / 13 PASS`
- 系列SPEC計算・グラフ3種: `3 / 3 PASS`
- 一般SCADAモデルをCOSMOS実装と断定: `0件`
- 未確認COSMOS内部実装・数値の真値化: `0件`

## clean blind履歴

### v1

- candidate commit: `cb034e4e121512844cf0333c6df49de84d7555e8`
- 公式標準解答一致: `24 / 25 FAIL`
- 教材だけで導出可能: `25 / 25 PASS`

### v2

- candidate commit: `0d2b169dff258124d088581b7690bfcdc063fc4f`
- 公式標準解答一致: `21 / 25 FAIL`
- 教材だけで導出可能: `25 / 25 PASS`

### v3

- candidate commit: `d7408b99b0287bdc21c034379eb70b969f9ae370`
- candidate freshness: `PASS`
- 公式標準解答一致: `23 / 25 FAIL`
- 教材だけで導出可能: `25 / 25 PASS`
- R2固定5答案要素区切り維持: `FAIL`

### v4

- candidate commit: `32aa4a98774f662eb01d02f29d71fe6ba287f26a`
- candidate freshness: `PASS`
- 公式標準解答一致: `22 / 25 FAIL`
- 教材だけで導出可能: `25 / 25 PASS`
- R2固定5答案要素区切り維持: `FAIL`

### v5

- candidate commit: `4ec9094da46b28a861a1af03fc57d72a4f363f87`
- candidate freshness: `PASS`
- 公式標準解答一致: `22 / 25 FAIL`
- 一次: `18 / 20 PASS`
- 二次: `4 / 5 PASS`
- 教材だけで導出可能: `25 / 25 PASS`
- R2固定5答案要素区切り維持: `FAIL`

### v6

- candidate: `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_clean_blind_v6_candidate.md`
- candidate commit: `9f8a1260c334054eae18e124ff3a2722f75961b7`
- QA: `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_clean_blind_v6_qa.md`
- candidate freshness: `PASS`
- 公式標準解答一致: `24 / 25 FAIL`
- 一次: `20 / 20 PASS`
- 二次: `4 / 5 PASS`
- 教材だけで導出可能: `25 / 25 PASS`
- R2固定5答案要素区切り維持: `FAIL`
- 診断: 内容不一致はsolver error。教材欠落ではない。
- 教材修正・再生成: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 系列SPEC固定13項目変更: `0件`
- Topic 21一般式変更: `0件`

## exact blocker

- exact blocker: `TOPIC39_CLEAN_BLIND_FIXED_SPLIT_NOT_AVAILABLE_IN_QUESTION_ONLY_INTAKE`
- basis: `clean_blind_intake.md` はR2二次について「5答案要素」とだけ記載し、既存EXAM_ALIGNMENTで固定した5群の境界を記載していない。公式問題本文からは複数の5分割が成立し得る。
- conflict: fresh workerが「既存と同じ区切り」を確定するためにanswer-bearing EXAM_ALIGNMENT/sourceをcandidate固定前に読むとclean blind freshnessに反する。一方、読まずに同じ区切りを作るのは推測になる。
- resolution required: answer-aware coordinatorが正答内容を含めず、R2固定5群の「境界だけ」をquestion-only intakeへ明示する。その後に別fresh worker/contextでv7を行う。
- current worker: v6 candidate固定後にanswer-bearing資料を参照済みのため、v7 workerとしてfreshness invalid。

## 次工程

blocker解消まで `TOPIC39_CLEAN_BLIND_V7` を開始しない。教材成果物、固定EXAM_ALIGNMENT、系列SPEC固定13項目、Topic 21一般式は変更しない。

## 境界条件

- COSMOSの未公開内部構成、独自通信プロトコル、データ形式、監視周期、遠隔制御論理、装置単位の冗長方式、故障率、MTBF、MTTR、可用性実値を推測しない。
- 一般SCADAモデル、信頼性計算の仮定例は実設備仕様と明確に分離する。
- SCADA、遠隔制御、可用性という名称が固定過去問に直接出たとは主張しない。
- Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` は既存の丸め差診断を維持し、一般式 `P=Tω`、`ω=2πN/60` を変更しない。
