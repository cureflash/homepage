# STATUS - 新幹線車両・電験二種

更新日: 2026-09-19

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `20 / 39`
- current_status: `topic_21_blind_candidates_locked`
- last_completed_topic: `20 N700系 フィードバック制御`
- active_topic: `21 高速域の速度・けん引力・出力制御`
- next_start: Topic 21 clean blind公式照合。固定済み6答案要素を変更せず、電気技術者試験センターの公式解答・標準解答と照合する

## 完了済み

Topic 01〜20は最終QAまで `PASS / completed`。完成数は `20 / 39`。

## Topic 21 clean blind候補答案

判定前状態: `CANDIDATES_LOCKED / OFFICIAL_ANSWER_NOT_YET_CHECKED`

固定品質ゲート:
- H26 一次 機械 問5 `(4),(5)` — `2 / 2 候補固定`
- H25 一次 機械 問3 `(1)` — `1 / 1 候補固定`
- R7 二次 機械・制御 問2 `(1)のT1のみ` — `1 / 1 候補固定`
- R1 二次 機械・制御 問1 `(4)` — `1 / 1 候補固定`
- H26 二次 機械・制御 問1 `(4)` — `1 / 1 候補固定`
- 合計: `一次3＋二次3 / 6 / 6候補固定`
- 候補固定前の公式解答・標準解答参照: `0件`
- 候補固定前の個別過去問解説正答参照: `0件`
- 教材外知識補完: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定SPEC外追加: `0件`
- 未確認実車値の真値化: `0件`

候補答案:
- H26一次 問5 `(4)`: `V/f一定・I_M一定・f_s可変`（`ヲ`候補）
- H26一次 問5 `(5)`: `V一定・I_M一定・f_s可変`（`ニ`候補）
- H25一次 問3 `(1)`: `回転角速度`（`ヨ`候補）
- R7二次 問2 `(1) T1`: `181 N·m`
- R1二次 問1 `(4)`: `33.2 N·m`
- H26二次 問1 `(4)`: `48.0 N·m`

成果物:
- `topics/21_high_speed_tractive_force_output_control/21_high_speed_tractive_force_output_control_blind_reanswer_candidates_clean.md`

## 次工程

固定済み6答案要素を公式解答・標準解答と照合する。候補答案ファイルは照合前の状態を保持し、差異があれば推測で補正せずexact blockerとして記録する。既存PDF/PPTX、練習問題、固定EXAM_ALIGNMENT、SPEC範囲は変更しない。
