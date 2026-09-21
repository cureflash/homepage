# STATUS - 新幹線車両・電験二種

更新日: 2026-09-21

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `37 / 39`
- current_status: `topic_38_clean_blind_v5_ready`
- last_completed_topic: `37 ATC③ 速度制御系`
- active_topic: `38 COMTRAC 列車追跡・進路制御・高信頼化`
- next_start: Topic 38 fresh clean blind v5。必須正本と現行教材成果物を確認し、prior clean-blind candidate / QA・公式標準解答・保存済み正答をcandidate固定前に参照せず、固定5問・25答案要素を教材だけで独立再解答する。

Topic 01〜37は `PASS / completed`。完成数は `37 / 39`。

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

状態: `CLEAN_BLIND_V5_READY`

### remediation完了範囲

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
- v1〜v4 candidate変更: `0件`

### 直近clean blind結果

- v4 freshness: `PASS`
- v4 candidate固定commit: `4a2ee352f7496a8d1811fd8af9f2f2221b5ed738`
- candidate固定後修正: `0件`
- 公式標準解答一致: `23 / 25 FAIL`
- 教材だけで導出可能: `25 / 25 PASS`
- 教材欠落によるFAIL: `0件`
- QA: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_clean_blind_v4_qa.md`
- Topic 38 completed: `NO`

### 今回の1段階

前回のclean blind手順blockerを、既存上位仕様の記述だけでreconcileした。上位仕様・系列SPECは変更していない。

- `MASTER_SPEC.md` §1: 必須正本とactive themeの既存成果物を読む。
- `MASTER_SPEC.md` §3: 必須成果物は解説PDF・練習PDF・PowerPoint・source Markdown等。
- `EXAM_ALIGNMENT_SPEC.md` §10: 公式解答・保存済み正答を先に見ず、教材だけで固定過去問を独立再解答する。
- prior clean-blind candidate / QAは独立試験の作業記録であり、§3の必須教材成果物ではないため、candidate固定前の参照対象から外せる。

これにより、必須教材成果物を確認しつつ保存済み正答を先に見ないv5手順が成立する。仕様追加は行っていない。

### 次の安全な工程

- Topic 38 fresh clean blind v5を実施する。
- candidate固定前はv1〜v4 clean-blind candidate / QA、公式標準解答、保存済み正答、answer-bearing commit diffを開かない。
- 固定5問・25答案要素を教材だけで独立再解答してcandidateを固定する。
- 固定後に公式標準解答へ照合する。
- `25 / 25` かつ教材依存 `25 / 25` ならcompleted判定へ進む。未達ならcandidateを修正せずQA記録する。
- 教材remediation・固定EXAM_ALIGNMENT変更・Topic 39先取りは、v5結果が要求しない限り行わない。

exact blocker: `0件`。次工程は `TOPIC38_CLEAN_BLIND_V5`。

## Topic 21 固定注記

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた丸め差として診断済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
