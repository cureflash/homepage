# STATUS - 新幹線車両・電験二種

更新日: 2026-09-19

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `20 / 39`
- current_status: `topic_21_official_discrepancy_diagnosed_blocked`
- last_completed_topic: `20 N700系 フィードバック制御`
- active_topic: `21 高速域の速度・けん引力・出力制御`
- next_start: `BLOCKED` — H26二次「機械・制御」問1 `(4)` は公式標準解答 `48.1 N·m` と、公式問題・公式掲載式から再現される `48.0 N·m` が矛盾するため、現行仕様のまま次工程へ進めない

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

## H26二次 問1(4) 不一致診断

判定: `BLOCKED / OFFICIAL_STANDARD_ANSWER_ARITHMETIC_INCONSISTENCY`

独立再計算:
- `I2'=22.4308861637 A`
- `TL=(3p/(2πf1))I2'^2(r2'/s)=48.0467752730 N·m`
- 有効数字3けた: `48.0 N·m`

公式標準解答は同じ式と `I2'=22.430 A` を掲載しながら、`48.067 → 48.1 N·m` としている。この `48.067` は掲載値・掲載式から再現できない。

exact blocker:
- `EXAM_ALIGNMENT_SPEC.md` は公式標準解答との一致を完成ゲートとする。
- 一方、公式問題・公式掲載式・有効数字指定に従う再計算は `48.0 N·m`。
- 公式値へ後付けで合わせる教材修正は再現可能性を壊すため実施しない。
- 現行仕様では当該1要素をPASSにも教材修正にも確定できないため、Topic 21は `completed` にしない。

成果物:
- `topics/21_high_speed_tractive_force_output_control/21_high_speed_tractive_force_output_control_blind_reanswer_candidates_clean.md`
- `topics/21_high_speed_tractive_force_output_control/21_high_speed_tractive_force_output_control_blind_reanswer_official_check.md`
- `topics/21_high_speed_tractive_force_output_control/21_high_speed_tractive_force_output_control_h26_q1_4_discrepancy_diagnosis.md`

不変条件:
- 候補答案変更: `0件`
- 教材本文・式・例題変更: `0件`
- PDF/PPTX変更: `0件`
- 固定問題差替え: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定SPEC外追加: `0件`
- 未確認実車値の真値化: `0件`

## 次工程

`BLOCKED`。現行の正本優先規則と、公式標準解答内部の数値不整合を同時に満たす安全な工程がないため停止する。
