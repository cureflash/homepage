# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-24

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜38は最終ゲートまで `PASS / completed`。完成数 `38 / 39`。

現在地は `topic_39_clean_blind_v63_pending / IN_PROGRESS`。active topicは `39 COSMOS 統合監視・SCADA・信頼性`。

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

## 最新clean blind

v62:
- candidate: `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_clean_blind_v62_candidate.md`
- candidate commit: `5eef77beb36def0f6c237a75eb50ceb9bf617b3f`
- QA: `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_clean_blind_v62_qa.md`
- QA commit: `b3363954c611a375a468704eac369c9bbb5132fd`
- freshness: `PASS`
- 一次: `19 / 20 FAIL`
- 二次: `3 / 5 FAIL`
- 合計: `22 / 25 FAIL`
- 教材導出: `25 / 25 PASS`
- 固定5群境界: `PASS`
- 診断: `solver-side mismatch ×3 answer elements/groups`

answer-bearingな不一致詳細はv62 QAにのみ保持し、fresh workerはcandidate固定前に開かない。v1〜v61の履歴は各candidate/QAとGit履歴を正本とする。

- 教材修正・再生成: `0件`
- `SPEC.md`変更: `0件`
- `EXAM_ALIGNMENT_SPEC.md`変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 系列SPEC固定13項目変更: `0件`
- 未確認COSMOS内部実装・数値の真値化: `0件`
- Topic 21一般式変更: `0件`
- project exact blocker: `0件`

## 次工程

`TOPIC39_CLEAN_BLIND_V63`。別fresh worker/contextのみで実施する。

1. 最新main、上位仕様、系列SPEC、sanitized `STATUS.md` / `HANDOFF.md`、question-only intakeをreconcileする。
2. candidate固定前はv1〜v62 candidate/QA、公式標準解答、保存済み正答、Topic 39 answer-bearing教材・answer-bearing QAを開かない。
3. question-only intakeと公式「問題」PDFだけで固定25答案要素を解く。R2二次はintake記載の5群境界を維持し、分割し直さない。
4. candidateをcommitして固定した後にのみ、公式標準解答・既存教材と照合する。
5. `25 / 25`公式一致、`25 / 25`教材導出可能、固定5群境界維持を満たした場合だけ最終QAへ進める。

現v62 worker/contextはcandidate固定後にanswer-bearing資料を参照済みのためv63を実施しない。worker-local exact blocker: `TOPIC39_CLEAN_BLIND_V63_CURRENT_CONTEXT_FRESHNESS_INVALID`。

## 境界条件

- COSMOSの未公開内部構成、独自通信プロトコル、データ形式、監視周期、遠隔制御論理、装置単位の冗長方式、故障率、MTBF、MTTR、可用性実値を推測しない。
- 一般SCADAモデル、信頼性計算の仮定例は実設備仕様と明確に分離する。
- SCADA、遠隔制御、可用性という名称が固定過去問に直接出たとは主張しない。
- Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` は既存の丸め差診断を維持し、一般式 `P=Tω`、`ω=2πN/60` を変更しない。