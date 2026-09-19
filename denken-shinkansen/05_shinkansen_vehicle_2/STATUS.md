# STATUS - 新幹線車両・電験二種

更新日: 2026-09-19

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `21 / 39`
- current_status: `topic_21_completed`
- last_completed_topic: `21 高速域の速度・けん引力・出力制御`
- active_topic: `22 E5系 再粘着制御`
- next_start: Topic 22の制作前EXAM_ALIGNMENT。`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列`SPEC.md`のTopic 22固定範囲に従い、第二種一次・二次の公式過去問を先に調査して固定品質ゲートを作る

## 完了済み

Topic 01〜21は最終QAまで `PASS / completed`。完成数は `21 / 39`。

## Topic 21 最終QA

判定: `PASS / COMPLETED`

固定品質ゲート:
- H26 一次 機械 問5 `(4),(5)` — `2 / 2 PASS`
- H25 一次 機械 問3 `(1)` — `1 / 1 PASS`
- R7 二次 機械・制御 問2 `(1)のT1のみ` — `1 / 1 PASS`
- R1 二次 機械・制御 問1 `(4)` — `1 / 1 PASS`
- H26 二次 機械・制御 問1 `(4)` — 教材注記反映後再確認 `1 / 1 PASS`
- 一次: `3 / 3 PASS`
- 二次: `3 / 3 PASS`
- 総計: `6 / 6 PASS`
- 固定5問: `5 / 5 PASS`

H26二次 問1(4):
- 高精度 `π` では `48.046775... N·m → 48.0 N·m`
- 公式標準解答は `I2'=22.430 A`、`48.067 → 48.1 N·m`
- 公式掲載値と `π=3.14` で `48.067347... N·m` を再現
- 当該過去問固有の数値処理差として解説source / 解説PDFへ注記済み
- 一般式 `P=Tω`、`ω=2πN/60` は変更なし
- PowerPointは個別数値計算を掲載していないため同期不要

成果物QA:
- 解説PDF: `3 / 3 PASS`（2 renderer）、固定6答案要素 `6 / 6 covered`、SPEC 8項目・3可視化・3段階例題 PASS
- 練習PDF: `4 / 4 PASS`（2 renderer）、一次8問＋二次4問、独立再計算 `12 / 12 PASS`、固定6答案要素 `6 / 6 PASS`
- PowerPoint: 16:9・4枚、表示 `4 / 4 PASS`、固定6答案要素 `6 / 6 PASS`、SPEC 8項目・3可視化 PASS
- 候補答案変更: `0件`
- 固定問題差替え: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定SPEC外追加: `0件`
- 未確認実車値の真値化: `0件`

最終QA記録:
- `topics/21_high_speed_tractive_force_output_control/21_high_speed_tractive_force_output_control_final_qa.md`

## 次工程

Topic 22「E5系 再粘着制御」の制作前EXAM_ALIGNMENTを行う。仕様を追加せず、まず公式過去問から第二種の試験要求を固定する。