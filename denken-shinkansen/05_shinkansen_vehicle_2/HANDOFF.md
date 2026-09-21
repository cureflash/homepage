# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-21

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜38は最終ゲートまで `PASS / completed`。完成数 `38 / 39`。

現在地は `topic_38_clean_blind_v9_pass / completed`。last completed topicは `38 COMTRAC 列車追跡・進路制御・高信頼化`、次のactive topicは `39 COSMOS 統合監視・SCADA・信頼性`。

## Topic 38 完了判定

remediation後のEXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPointと各QAは `PASS`。固定5問・SPEC固定9項目は変更していない。

- 一次: `5問 / 25答案要素`
- 二次: `0問`、直接対応なし・件数合わせ `0件`
- SPEC固定9項目: `9 / 9 PASS`
- 未確認COMTRAC実装・数値の真値化: `0件`
- Topic 39先取り: `0件`

fresh clean blind v9:
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

`EXAM_ALIGNMENT_SPEC.md` の独立再解答ゲートを全件通過したため、Topic 38を `completed` とする。

## clean blind履歴

v8はfreshness `PASS`、公式一致 `22 / 25 FAIL`、教材依存 `25 / 25 PASS`。不一致は教材欠落ではなく独立再解答側の識別ミスだったため教材は変更せず、fresh v9で再試験した。

## 次工程

Topic 39 `COSMOS 統合監視・SCADA・信頼性` の制作前EXAM_ALIGNMENTから開始する。

1. `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、`HANDOFF.md`を読む。
2. Topic 39の系列SPEC固定範囲を確認する。
3. 電気技術者試験センター公式過去問を直近年度から調査し、一次・二次の直接対応だけを固定候補にする。
4. 二次は直接対応が確認できる場合のみ採用し、件数合わせをしない。
5. 未確認の実設備仕様・数値を真値化しない。

## 境界条件

- Topic 38の未確認COMTRAC内部構成、列車追跡アルゴリズム、進路制御論理、インターロック実装、処理周期、冗長方式、故障率、MTBF、MTTR、可用性値を真値化しない。
- JR東海第二総合指令所の存在から装置単位の冗長方式・切替方式を推測しない。
- 教材用状態機械・Boolean式・可用性計算の仮定例は実装値と明確に分離する。
- Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` は既存の丸め差診断を維持し、一般式 `P=Tω`、`ω=2πN/60` を変更しない。

次は `TOPIC39_EXAM_ALIGNMENT`。
