# STATUS - 新幹線車両・電験二種

更新日: 2026-09-19

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `20 / 39`
- current_status: `topic_21_blind_official_check_needs_revision`
- last_completed_topic: `20 N700系 フィードバック制御`
- active_topic: `21 高速域の速度・けん引力・出力制御`
- next_start: H26二次「機械・制御」問1 `(4)` の候補 `48.0 N·m` と公式 `48.1 N·m` の不一致原因だけを診断し、固定SPEC内で教材側修正要否を判定する

## 完了済み

Topic 01〜20は最終QAまで `PASS / completed`。完成数は `20 / 39`。

## Topic 21 clean blind公式照合

判定: `NEEDS_REVISION / BLIND_REANSWER_OFFICIAL_CHECK_COMPLETE`

固定品質ゲート:
- H26 一次 機械 問5 `(4),(5)` — `2 / 2 PASS`
- H25 一次 機械 問3 `(1)` — `1 / 1 PASS`
- R7 二次 機械・制御 問2 `(1)のT1のみ` — `1 / 1 PASS`
- R1 二次 機械・制御 問1 `(4)` — `1 / 1 PASS`
- H26 二次 機械・制御 問1 `(4)` — `0 / 1 FAIL`
- 合計: `一次3 / 3 PASS、二次2 / 3 PASS、総計5 / 6 PASS`
- 固定5問: `4 / 5 PASS`
- 候補答案変更: `0件`
- 教材外知識補完: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定SPEC外追加: `0件`
- 未確認実車値の真値化: `0件`

exact blocker:
- H26二次 問1 `(4)` の固定候補 `48.0 N·m` に対し、公式標準解答は `48.1 N·m`。
- 候補固定ファイルは変更しない。
- この1要素が未通過のためTopic 21は `completed` にしない。

成果物:
- `topics/21_high_speed_tractive_force_output_control/21_high_speed_tractive_force_output_control_blind_reanswer_candidates_clean.md`
- `topics/21_high_speed_tractive_force_output_control/21_high_speed_tractive_force_output_control_blind_reanswer_official_check.md`

## 次工程

H26二次「機械・制御」問1 `(4)` の不一致原因だけを診断する。固定済み他5答案要素、固定EXAM_ALIGNMENT、SPEC範囲は変更しない。原因診断前に候補や教材数値を公式値へ後付け変更しない。
