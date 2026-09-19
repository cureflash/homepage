# STATUS - 新幹線車両・電験二種

更新日: 2026-09-19

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `20 / 39`
- current_status: `topic_21_h26_clean_blind_recheck_passed`
- last_completed_topic: `20 N700系 フィードバック制御`
- active_topic: `21 高速域の速度・けん引力・出力制御`
- next_start: Topic 21の最終完了QA。成果物・QA・進捗記録の整合、固定SPEC範囲、固定EXAM_ALIGNMENT、完成後独立試験 `6 / 6 PASS` を確認する

## 完了済み

Topic 01〜20は最終QAまで `PASS / completed`。完成数は `20 / 39`。

## Topic 21 初回clean blind公式照合

判定: `NEEDS_REVISION / BLIND_REANSWER_OFFICIAL_CHECK_COMPLETE`

固定品質ゲート:
- H26 一次 機械 問5 `(4),(5)` — `2 / 2 PASS`
- H25 一次 機械 問3 `(1)` — `1 / 1 PASS`
- R7 二次 機械・制御 問2 `(1)のT1のみ` — `1 / 1 PASS`
- R1 二次 機械・制御 問1 `(4)` — `1 / 1 PASS`
- H26 二次 機械・制御 問1 `(4)` — `0 / 1 FAIL`（教材注記追加前の公式照合記録）
- 初回合計: `一次3 / 3 PASS、二次2 / 3 PASS、総計5 / 6 PASS`
- 初回固定5問: `4 / 5 PASS`

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
- PowerPointは個別数値計算を載せていないため同期不要判定済み
- 過去問照合では公式標準解答 `48.1 N·m` を正本として扱う
- 他5答案要素、練習問題、固定EXAM_ALIGNMENT、SPEC範囲は変更しない

## 今回完了した段階

教材注記反映後の H26二次「機械・制御」問1 `(4)` clean blind再確認を実施した。

判定: `PASS / POST_REVISION_CLEAN_BLIND_RECHECK_COMPLETE`

再確認結果:
- 問題条件から `I2'=22.430886... A` を再計算
- 一般式を高精度 `π` で使うと `48.0468... N·m → 48.0 N·m` であり、一般式は変更しない
- 教材の過去問固有注記に従い、公式掲載 `I2'=22.430 A` と `π=3.14` 相当処理を用いると `48.067347... N·m → 48.1 N·m`
- 公式標準解答の掲載中間値 `48.067` と最終値 `48.1 N·m` を再現
- 当該1要素を再確認後 `PASS`

完成後独立試験の現行集計:
- 一次: `3 / 3 PASS`
- 二次: `3 / 3 PASS`
- 総計: `6 / 6 PASS`
- 固定5問: `5 / 5 PASS`

記録:
- `topics/21_high_speed_tractive_force_output_control/21_high_speed_tractive_force_output_control_h26_q1_4_clean_blind_recheck.md`

不変条件:
- 一般式変更: `0件`
- 候補答案固定ファイル変更: `0件`
- 他5答案要素変更: `0件`
- 固定問題差替え: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定SPEC外追加: `0件`
- 練習問題・正答変更: `0件`
- PowerPoint本体変更: `0件`
- 未確認実車値の真値化: `0件`

## 次工程

Topic 21の最終完了QAを行う。成果物・QA・進捗記録の整合、固定SPEC範囲、固定EXAM_ALIGNMENT、完成後独立試験 `6 / 6 PASS` を確認した後にのみ `completed` とする。
