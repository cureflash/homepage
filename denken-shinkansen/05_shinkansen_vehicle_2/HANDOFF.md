# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-21

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜38は最終ゲートまで `PASS / completed`。完成数 `38 / 39`。

現在地は `topic_39_clean_blind_v3_pending / current_worker_freshness_invalid`。active topicは `39 COSMOS 統合監視・SCADA・信頼性`。

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
- exact blocker: `0件`

## clean blind履歴

### v1

- candidate commit: `cb034e4e121512844cf0333c6df49de84d7555e8`
- 公式標準解答一致: `24 / 25 FAIL`
- 教材だけで導出可能: `25 / 25 PASS`
- 診断: `solver error`。教材欠落ではない。

### v2

- candidate: `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_clean_blind_v2_candidate.md`
- candidate commit: `0d2b169dff258124d088581b7690bfcdc063fc4f`
- QA: `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_clean_blind_v2_qa.md`
- 公式標準解答一致: `21 / 25 FAIL`
- 教材だけで導出可能: `25 / 25 PASS`
- 診断: `solver error`。教材欠落ではない。
- answer-bearingな不一致詳細はv2 QAにのみ保持。mandatory recordには載せない。
- 教材修正・再生成: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`

## freshness

v2はquestion-only intakeと公式「問題」PDFのみでcandidateを先に固定し、その後に公式標準解答・既存教材を照合したため、v2 candidateのfreshnessは `PASS`。

ただし本workerはv2固定後にanswer-bearing資料を参照済みであり、clean blind v3のworkerとしてはfreshness invalid。v3は別fresh workerで実施する。

## 次工程

`TOPIC39_CLEAN_BLIND_V3`。

1. 別fresh workerで開始する。
2. 最新main、上位仕様、系列SPEC、sanitized `STATUS.md` / `HANDOFF.md`、直近コミットをmetadataレベルでreconcileする。
3. candidate固定前はv1/v2 candidate/QA、公式標準解答、保存済み正答、Topic 39 answer-bearing教材・answer-bearing QAを開かない。
4. `39_cosmos_integrated_monitoring_scada_reliability_clean_blind_intake.md` と公式「問題」PDFだけで同じ固定5問を独立再解答する。
5. 固定5問・25答案要素のv3 candidateを先に保存・commitする。R2二次は固定5答案要素の区切りを維持する。
6. candidate固定後にのみ公式標準解答と既存教材を照合する。
7. `公式標準解答一致 25 / 25` と `教材だけで導出可能 25 / 25` の両方を判定する。
8. FAILが教材欠落なら既存仕様範囲内でremediationする。独立再解答側のミスなら教材を変更せず、さらに別fresh workerで再実施する。
9. 固定EXAM_ALIGNMENT、系列SPEC固定13項目、Topic 21一般式を勝手に変更しない。
10. PASS後にのみTopic 39を `completed`、系列を `39 / 39 completed` とする。

## 境界条件

- COSMOSの未公開内部構成、独自通信プロトコル、データ形式、監視周期、遠隔制御論理、装置単位の冗長方式、故障率、MTBF、MTTR、可用性実値を推測しない。
- 一般SCADAモデル、信頼性計算の仮定例は実設備仕様と明確に分離する。
- SCADA、遠隔制御、可用性という名称が固定過去問に直接出たとは主張しない。
- Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` は既存の丸め差診断を維持し、一般式 `P=Tω`、`ω=2πN/60` を変更しない。
