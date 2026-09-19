# STATUS - 新幹線車両・電験二種

更新日: 2026-09-19

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `20 / 39`
- current_status: `topic_21_powerpoint_h26_note_sync_not_required`
- last_completed_topic: `20 N700系 フィードバック制御`
- active_topic: `21 高速域の速度・けん引力・出力制御`
- next_start: H26二次「機械・制御」問1 `(4)` を、教材注記反映後の状態でclean blind再確認し、公式標準解答 `48.1 N·m` を正本として判定する

## 完了済み

Topic 01〜20は最終QAまで `PASS / completed`。完成数は `20 / 39`。

## Topic 21 clean blind公式照合

判定: `NEEDS_REVISION / BLIND_REANSWER_OFFICIAL_CHECK_COMPLETE`

固定品質ゲート:
- H26 一次 機械 問5 `(4),(5)` — `2 / 2 PASS`
- H25 一次 機械 問3 `(1)` — `1 / 1 PASS`
- R7 二次 機械・制御 問2 `(1)のT1のみ` — `1 / 1 PASS`
- R1 二次 機械・制御 問1 `(4)` — `1 / 1 PASS`
- H26 二次 機械・制御 問1 `(4)` — `0 / 1 FAIL`（教材注記追加前の公式照合記録）
- 合計: `一次3 / 3 PASS、二次2 / 3 PASS、総計5 / 6 PASS`
- 固定5問: `4 / 5 PASS`

## H26二次 問1(4) 不一致診断

判定: `ROOT_CAUSE_IDENTIFIED / MATERIAL_REVISION_COMPLETE`

独立再計算:
- `I2'=22.4308861637 A`
- 高精度 `π` では `TL=48.0467752730 N·m → 48.0 N·m`
- 公式標準解答は `I2'=22.430 A` と同じトルク式を掲載し、`48.067 → 48.1 N·m`
- 公式掲載値 `I2'=22.430 A` と `π=3.14` を用いると `48.067347... N·m` となり、公式掲載中間値 `48.067` を再現する

教材側対応:
- 一般式 `P=Tω`、`ω=2πN/60` は変更しない
- H26二次 問1(4) 固有の数値処理差を解説sourceと解説PDFへ注記済み
- 過去問照合では公式標準解答 `48.1 N·m` を正本として扱う
- 他5答案要素、練習問題、固定EXAM_ALIGNMENT、SPEC範囲は変更しない

## 今回完了した段階

PowerPointへのH26二次 問1(4) 過去問固有注記の同期要否を判定した。

判定:
- `SYNC_NOT_REQUIRED`
- PowerPointは一般式 `P=Tω`、`ω=2πN/60` と速度・けん引力・出力の一般関係を示す4枚で、H26二次 問1(4) の `I2'`、`48.067`、`48.0 / 48.1 N·m` の数値計算自体は掲載していない
- 過去問固有の丸め注記を単独追加すると一般式と固有数値処理を混同するため、PPTX本体は変更しない
- 判定根拠を `topics/21_high_speed_tractive_force_output_control/21_high_speed_tractive_force_output_control_powerpoint_qa.md` へ記録済み

不変条件:
- PowerPoint本体変更: `0件`
- 一般式変更: `0件`
- 候補答案変更: `0件`
- 他5答案要素変更: `0件`
- 固定問題差替え: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定SPEC外追加: `0件`
- 練習問題・正答変更: `0件`
- 未確認実車値の真値化: `0件`

## 次工程

H26二次「機械・制御」問1 `(4)` を教材注記反映後の状態でclean blind再確認する。公式照合では公式標準解答 `48.1 N·m` を正本として扱い、一般式 `P=Tω`、`ω=2πN/60` は変更しない。Topic 21はclean blind再確認が通過するまで `completed` にしない。
