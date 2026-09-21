# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-21

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜37は最終QAまで `PASS / completed`。完成数 `37 / 39`。

現在地は `topic_38_clean_blind_v8_failed`。last completed topicは `37 ATC③ 速度制御系`、active topicは `38 COMTRAC 列車追跡・進路制御・高信頼化`。

## Topic 38 現在地

remediation後のEXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPointと各QAは `PASS`。固定5問は変更していない。

- 一次: `5問 / 25答案要素`
- 二次: `0問`、直接対応なし・件数合わせ `0件`
- SPEC固定9項目: `9 / 9 PASS`
- 未確認COMTRAC実装・数値の真値化: `0件`
- Topic 39先取り: `0件`

## 今回の1段階: fresh clean blind v8

v7後にmandatory記録を非answer-bearing要約へ整理した状態から、question-only intakeと公式「問題」PDFを用いてfresh candidateを作成し、先にcommitした。

candidate固定commit:
`a99a6acf46e02cd9b06bd35320f31b7a6ab29668`

candidate固定後に公式標準解答と現行教材へ照合した結果:

- freshness: `PASS`
- 公式標準解答一致: `22 / 25 FAIL`
- 教材だけで導出可能: `25 / 25 PASS`
- 教材欠落によるFAIL: `0件`
- candidate固定後修正: `0件`
- 教材本文修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC固定9項目変更: `0件`
- 二次問題件数合わせ: `0件`
- exact blocker: `0件`

不一致3件はいずれも教材側には正しい識別材料が存在し、独立再解答側の選択・識別ミス。教材remediationは行わない。

詳細答案、正誤位置、公式正答は以下のanswer-bearing正本だけに保持し、本HANDOFFには再掲しない。

- `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_clean_blind_v8_candidate.md`
- `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_clean_blind_v8_qa.md`

`EXAM_ALIGNMENT_SPEC.md` §10・§11により、公式過去問の独立再解答が全件正答ではないためTopic 38は `completed` にしない。

## 次工程

Topic 38 fresh clean blind v9をfresh workerで実施する。

1. `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、`HANDOFF.md`を読む。
2. question-only intakeを読む。
3. 公式「問題」PDFだけを開く。
4. candidate固定前は、Topic 38 source Markdown、練習source/PDF、解説PDF、prior clean-blind candidate / QA、公式標準解答、保存済み正答を含むQA・answer-bearing commit diffを開かない。
5. 固定5問・25答案要素を独立再解答し、v9 candidateを固定・commitする。
6. candidate固定後に初めて公式標準解答と現行教材を照合する。
7. `25 / 25` かつ教材依存 `25 / 25` ならTopic 38をcompletedへ進める。未達ならcandidateを修正せず原因をQAへ記録する。

## 境界条件

- 未確認のCOMTRAC内部構成、列車追跡アルゴリズム、進路制御論理、インターロック実装、処理周期、冗長方式、故障率、MTBF、MTTR、可用性値を真値化しない。
- JR東海第二総合指令所の存在から装置単位の冗長方式・切替方式を推測しない。
- 教材用状態機械・Boolean式・可用性計算の仮定例は実装値と明確に分離する。
- Topic 39の内容を先取りしない。
- Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` は `π=3.14` 相当の丸め差診断を維持し、一般式 `P=Tω`、`ω=2πN/60` を変更しない。

次は `TOPIC38_CLEAN_BLIND_V9`。
