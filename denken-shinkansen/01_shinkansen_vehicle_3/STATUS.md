# STATUS - 新幹線車両・電験三種

更新日: 2026-09-13

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 22 / 38
- current_status: `topic_23_exam_alignment_complete`
- last_completed_topic: `22 L0系① リニア同期モータ`
- active_topic: `23 L0系② 500km/hと周波数制御`
- next_start: Topic 23の解説本文と基礎・標準・複合の3段階例題を作成し、選定5問の要求事項を本文へ対応させる

## 新品質ゲート進捗
- [x] 01〜22 — PASS
- [ ] 23 L0系② 500km/hと周波数制御 — 制作前EXAM_ALIGNMENT完了

## 23 EXAM_ALIGNMENT
品質ゲート対象を次の5問に確定した。

1. R7上 機械 問4 — 周波数・電圧を同率変更する定トルク運転、V/f
2. R5下 機械 問6 — 極数・周波数・同期速度
3. H26 機械 問15(a) — 同期速度、三相電力、トルク
4. H20 機械 問10 — V/f一定、磁気飽和、整流器、インバータ、PWM
5. H19 機械 問15(a) — 同期速度と同期角速度

制作前独立解答: 5 / 5 PASS。

- R7上問4 → 3
- R5下問6 → 3
- H26問15(a) → 3
- H20問10 → 5
- H19問15(a) → 4

直近年度候補では、R8上問3はベクトル制御・始動トルク、R8上問4はすべり・二次入力、R6上問4はすべり、R5下問15はすべり周波数が必要なため除外した。系列SPEC外の知識を追加して問題を通していない。

## 23 L0系一次資料
JR東海「超電導リニアの原理」で次を確認済み。

- 超電導リニアは時速500 kmで走行する。
- 推進コイルのN極・S極を電気的に切り替えて推進する。
- 推進コイルへ流す電流の周波数を変え、N/Sの切替速度を制御することで車両速度を調整する。

今回確認した一次資料では実機の極ピッチと500 km/h時の実運転周波数の具体値を確定できないため、実車値として置かない。

## 23 成果物
- source Markdown: `topics/23_l0_500kmh_frequency_control/23_l0_500kmh_frequency_control.md` — EXAM_ALIGNMENTまで
- 解説PDF: 未着手
- 練習PDF: 未着手
- 解説画像PowerPoint: 未着手

## 23 QA判定
`IN_PROGRESS`。制作前EXAM_ALIGNMENTはPASS。完成数は22/38のまま。

## 次
Topic 23の解説本文と3段階例題を作成する。範囲は系列SPECの周波数、同期速度、磁界、電磁力、電力変換、速度制御に限定し、実車の未確認数値は追加しない。
