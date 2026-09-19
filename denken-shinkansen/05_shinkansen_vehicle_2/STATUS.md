# STATUS - 新幹線車両・電験二種

更新日: 2026-09-19

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `20 / 39`
- current_status: `topic_21_explanation_source_complete`
- last_completed_topic: `20 N700系 フィードバック制御`
- active_topic: `21 高速域の速度・けん引力・出力制御`
- source_gate_reaudit: `PASS / SOURCE_GATE_REVALIDATED`
- next_start: Topic 21 解説PDF作成。既存解説source＋過去問対応ゲート補足を版面化し、固定5問・6答案要素、SPEC固定8項目・3可視化を変更しない

## 完了済み

Topic 01〜20は最終QAまで `PASS / completed`。完成数は `20 / 39`。

## Topic 21 解説source

判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

固定品質ゲート:
- H26 一次 機械 問5 `(4),(5)` — 2答案要素
- H25 一次 機械 問3 `(1)` — 1答案要素
- R7 二次 機械・制御 問2 `(1)のT1のみ` — 1答案要素
- R1 二次 機械・制御 問1 `(4)` — 1答案要素
- H26 二次 機械・制御 問1 `(4)` — 1答案要素
- 合計: `一次2問＋二次3問 / 5問 / 一次3＋二次3 = 6答案要素`
- 固定要求知識の本文マッピング: `6 / 6 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化の再生成条件: `3 / 3 fixed`
- 3段階例題: `3 / 3`
- 固定SPEC外追加: `0件`
- 未確認実車値の真値化: `0件`

成果物:
- `topics/21_high_speed_tractive_force_output_control/21_high_speed_tractive_force_output_control.md`
- `topics/21_high_speed_tractive_force_output_control/21_high_speed_tractive_force_output_control_explanation_source.md`
- `topics/21_high_speed_tractive_force_output_control/21_high_speed_tractive_force_output_control_explanation_source_gate_addendum.md`

## 今回の過去問対応ゲート再監査

判定: `PASS / SOURCE_GATE_REVALIDATED`

H26 一次「機械」問5 `(4),(5)` を選択肢判別まで再監査し、既存sourceで明記不足だった滑り周波数 `f_s` の状態を必要最小限だけ補完した。

- 定加速域: `V/f = 一定`, `I_M = 一定`, `f_s = 可変`
- 定出力域: `V = 一定`, `I_M = 一定`, `f_s = 可変`
- 固定5問・6答案要素: 変更なし
- SPEC固定8項目: 変更なし
- SPEC外追加: `0件`
- 未確認実車値の真値化: `0件`
- 公式標準解答の個別正答記号を教材本文へ保存: `0件`

## 次工程

Topic 21解説PDFを作成する。固定EXAM_ALIGNMENT・固定問題・固定答案要素・SPEC境界は変更しない。既存解説sourceと過去問対応ゲート補足を同時に参照する。
