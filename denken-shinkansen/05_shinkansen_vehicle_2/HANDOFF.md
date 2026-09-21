# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-21

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜37は最終QAまで `PASS / completed`。完成数 `37 / 39`。

現在地は `topic_38_clean_blind_v5_ready`。last completed topicは `37 ATC③ 速度制御系`、active topicは `38 COMTRAC 列車追跡・進路制御・高信頼化`。

## Topic 38 現在地

remediation後のEXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPointと各QAは `PASS`。固定5問は変更していない。

- 一次: `5問 / 25答案要素`
- 二次: `0問`、直接対応なし・件数合わせ `0件`
- SPEC固定9項目: `9 / 9 PASS`
- 未確認COMTRAC実装・数値の真値化: `0件`
- Topic 39先取り: `0件`
- v1〜v4 candidate変更: `0件`

直近のfresh clean blind v4は公式標準解答一致 `23 / 25 FAIL`。教材だけで導出可能は `25 / 25 PASS`、教材欠落は `0件`。Topic 38はcompletedにしていない。

v4 QA正本: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_clean_blind_v4_qa.md`

## 今回の1段階: clean blind手順の上位仕様整合

前回記録した `TOPIC38_CLEAN_BLIND_PROTOCOL_CONFLICT` を、既存上位仕様の記述だけでreconcileした。`MASTER_SPEC.md` / `EXAM_ALIGNMENT_SPEC.md` / 系列`SPEC.md`自体は変更していない。

- `MASTER_SPEC.md` §1は各runで正本とactive themeの既存成果物を読むことを要求する。
- `MASTER_SPEC.md` §3は1テーマの必須成果物を、解説PDF・練習PDF・PowerPoint・source Markdown等として列挙している。
- `EXAM_ALIGNMENT_SPEC.md` §10は、生成時に見た公式解答や保存済み正答を先に見ず、教材内容だけで固定過去問を独立再解答することを要求する。
- prior clean-blind candidate / QAは§3の必須教材成果物ではなく独立試験の作業記録であるため、candidate固定前に開く必要はない。

したがって次runは、必須正本と現行教材成果物を確認したうえで、prior clean-blind candidate / QA・公式標準解答・保存済み正答をcandidate固定前に参照せず、固定5問を教材だけで再解答できる。candidate固定後にのみ公式標準解答へ照合する。この手順は上位仕様の追加・変更ではなく、§1・§3・§10の同時適用である。

## 次工程

Topic 38 fresh clean blind v5を実施する。

1. `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、`HANDOFF.md`を読む。
2. Topic 38の§3必須教材成果物とquestion-only intakeを読む。
3. candidate固定前はv1〜v4 clean-blind candidate / QA、公式標準解答、保存済み正答、answer-bearing commit diffを開かない。
4. 固定5問・25答案要素を教材だけで独立再解答し、v5 candidateを固定する。
5. 固定後に公式標準解答へ照合する。
6. `25 / 25` かつ教材依存 `25 / 25` ならTopic 38をcompletedへ進める。未達ならcandidateを修正せず、原因をQAへ記録する。

## 境界条件

- 未確認のCOMTRAC内部構成、列車追跡アルゴリズム、進路制御論理、インターロック実装、処理周期、冗長方式、故障率、MTBF、MTTR、可用性値を真値化しない。
- JR東海第二総合指令所の存在から装置単位の冗長方式・切替方式を推測しない。
- 教材用状態機械・Boolean式・可用性計算の仮定例は実装値と明確に分離する。
- Topic 39の内容を先取りしない。
- Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` は `π=3.14` 相当の丸め差診断を維持し、一般式 `P=Tω`、`ω=2πN/60` を変更しない。

exact blocker: `0件`。次は `TOPIC38_CLEAN_BLIND_V5`。
