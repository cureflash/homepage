# STATUS - 新幹線車両・電験二種

更新日: 2026-09-21

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `37 / 39`
- current_status: `topic_38_clean_blind_v1_fail_textbook_gap`
- last_completed_topic: `37 ATC③ 速度制御系`
- active_topic: `38 COMTRAC 列車追跡・進路制御・高信頼化`
- next_start: 最新main、上位2仕様書、系列`SPEC.md`、本`STATUS.md`、`HANDOFF.md`をreconcileし、`38_comtrac_train_tracking_route_control_reliability_clean_blind_v1_remediation.md`に従ってEXAM_ALIGNMENT・解説source・練習sourceと各source QAを修正する。その後、解説PDF・練習PDF・PowerPointを再生成・再QAし、fresh clean blind v2へ進む。

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

状態: `CLEAN_BLIND_V1_FAIL / textbook_gap_remediation_pending`

### 制作前EXAM_ALIGNMENT

- source: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability.md`
- QA: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_exam_alignment_qa.md`
- 固定公式過去問: `5問`
- 一次: `5問 / 25答案要素`
- 二次: `0問`（当該コア論点の直接対応を固定できず、件数合わせ採用 `0件`）
- SPEC固定9項目: `9 / 9 mapped`
- 固定5問変更: `0件`

### clean blind v1

- question-only intake: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_clean_blind_intake.md`
- candidate: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_clean_blind_candidate.md`
- candidate commit: `e20fc83a3d1c9c4a17f647035d8fb666f20d02d0`
- QA: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_clean_blind_qa.md`
- remediation: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_clean_blind_v1_remediation.md`
- 公式標準解答一致: `25 / 25 PASS`
- 教材だけで導出: `23 / 25 FAIL`
- FAIL 1: R8一次「機械」問8(5) — ステッピングモータのセンサレス位置決め・脱調条件が現教材では不足
- FAIL 2: H23一次「機械」問8(3) — ノイマン形コンピュータが現教材に欠落
- mapping不整合: H29問8とH23問8の既存25要素接続表が実空欄順と一致していない
- candidate固定後修正: `0件`
- exact blocker: `0件`

### 既存成果物の扱い

PowerPointまでの制作・表示QA自体は完了しているが、clean blind v1で教材接続不足を検出したため、Topic 38完成判定には使用しない。source remediation後に派生成果物を再生成・再QAする。

再生成対象:

- explanation source / source QA
- explanation PDF / PDF QA
- practice source / source QA
- practice PDF / PDF QA
- PowerPoint / PowerPoint QA

固定9項目、COMTRAC実装境界、二次0問、Topic 39非先取りは維持する。

## Topic 21 固定注記

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた丸め差として診断済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
