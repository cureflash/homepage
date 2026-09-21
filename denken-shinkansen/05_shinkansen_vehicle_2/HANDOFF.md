# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-21

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜37は最終QAまで `PASS / completed`。完成数 `37 / 39`。

現在地は `topic_38_clean_blind_v7_invalid`。last completed topicは `37 ATC③ 速度制御系`、active topicは `38 COMTRAC 列車追跡・進路制御・高信頼化`。

## Topic 38 現在地

remediation後のEXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPointと各QAは `PASS`。固定5問は変更していない。

- 一次: `5問 / 25答案要素`
- 二次: `0問`、直接対応なし・件数合わせ `0件`
- SPEC固定9項目: `9 / 9 PASS`
- 未確認COMTRAC実装・数値の真値化: `0件`
- Topic 39先取り: `0件`

直前の有効clean blind v6は品質ゲート未達。教材欠落ではなく、教材本文修正・固定EXAM_ALIGNMENT変更は不要。答案詳細・正誤位置・公式正答はv6 QA正本にのみ保持し、本HANDOFFには再掲しない。

## 今回の1段階: fresh clean blind v7 invalidation

candidate固定前の必須reconcileで、当時の `STATUS.md` / `HANDOFF.md` 自体にv6の保存済み正答を特定できる答案詳細が記載されていた。

`MASTER_SPEC.md` §1は毎runで `STATUS.md` / `HANDOFF.md` の確認を必須とする。一方、`EXAM_ALIGNMENT_SPEC.md` §10は、生成時に見た公式解答や保存済み正答を先に見ずに独立再解答することを要求する。したがって、このrunでv7 candidateを作るとfreshnessを満たさない。

実施しなかったこと:

- v7 candidate作成: `0件`
- v7 candidate commit: `0件`
- 公式標準解答照合: `0件`
- candidate修正: `0件`
- 教材本文修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`

invalidation記録:
`topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_clean_blind_v7_invalid.md`

exact blocker:
`TOPIC38_CLEAN_BLIND_V7_FRESHNESS_CONTAMINATED_BY_MANDATORY_RECORDS`

## 記録構造の是正

次のfresh workerがmandatory記録を読むだけで保存済み正答へ触れないよう、`STATUS.md` / `HANDOFF.md` は本更新で非answer-bearing要約へ整理した。詳細答案はprior candidate/QA側にのみ残す。

上位仕様・固定5問・教材本文・EXAM_ALIGNMENTは変更していない。

## 次工程

Topic 38 fresh clean blind v8を、このrunのv6答案詳細を参照していないfresh workerで実施する。

1. `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、`HANDOFF.md`を読む。
2. question-only intakeを読む。
3. 公式「問題」PDFだけを開く。
4. candidate固定前は、Topic 38 source Markdown、練習source/PDF、解説PDF、prior clean-blind candidate / QA、公式標準解答、保存済み正答を含むQA・answer-bearing commit diffを開かない。
5. 固定5問・25答案要素を独立再解答し、v8 candidateを固定・commitする。
6. candidate固定後に初めて公式標準解答と現行教材を照合する。
7. `25 / 25` かつ教材依存 `25 / 25` ならTopic 38をcompletedへ進める。未達ならcandidateを修正せず原因をQAへ記録する。

## 境界条件

- 未確認のCOMTRAC内部構成、列車追跡アルゴリズム、進路制御論理、インターロック実装、処理周期、冗長方式、故障率、MTBF、MTTR、可用性値を真値化しない。
- JR東海第二総合指令所の存在から装置単位の冗長方式・切替方式を推測しない。
- 教材用状態機械・Boolean式・可用性計算の仮定例は実装値と明確に分離する。
- Topic 39の内容を先取りしない。
- Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` は `π=3.14` 相当の丸め差診断を維持し、一般式 `P=Tω`、`ω=2πN/60` を変更しない。

次は `TOPIC38_CLEAN_BLIND_V8`。
