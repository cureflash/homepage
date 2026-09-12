# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-13

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は23/38。01〜23がPASS。次のactive topicは24 `L0系③ 超電導磁気浮上`。

## 今回進捗
Topic 23 `L0系② 500km/hと周波数制御` を1段階進め、完成後独立再解答を実施して最終品質ゲートを通過した。

更新:
- `topics/23_l0_500kmh_frequency_control/23_l0_500kmh_frequency_control.md`
- `STATUS.md`
- `HANDOFF.md`

完成済み教材の範囲だけで品質ゲート対象5問を再解答し、5/5 PASS。Topic 23を`completed`とした。新規の教材範囲・実車仮定値は追加していない。

## Topic 23 完成後独立再解答
1. R7上 機械 問4 — `T∝VI/f`。Vとfをともに0.95倍、T一定よりI=80 A — 解答3 / 照合3 — PASS
2. R5下 機械 問6 — 10極600 min^-1から50 Hz、8極で750 min^-1 — 解答3 / 照合3 — PASS
3. H26 機械 問15(a) — 4極60 Hzで1800 min^-1、`P=√3VI`と`P=ωT`より約735 N·m — 解答3 / 照合3 — PASS
4. H20 機械 問10 — 磁気飽和防止、V/f一定、サイリスタ整流器、PWMインバータ — 解答5 / 照合5 — PASS
5. H19 機械 問15(a) — `ωs=4π×60/6≈125.7 rad/s` — 解答4 / 照合4 — PASS

必要公式・適用条件・解法手順・誤答回避を教材内で再構成できたため最終判定PASS。

## Topic 23 成果物
- source: `topics/23_l0_500kmh_frequency_control/23_l0_500kmh_frequency_control.md`
- 解説PDF: `topics/23_l0_500kmh_frequency_control/23_l0_500kmh_frequency_control_explanation.pdf` — 3ページ、QA PASS
- 練習PDF: `topics/23_l0_500kmh_frequency_control/23_l0_500kmh_frequency_control_practice.pdf` — 7ページ、15問、QA PASS
- PowerPoint: `topics/23_l0_500kmh_frequency_control/23_l0_500kmh_frequency_control_images.pptx` — 7スライド、QA・overflow PASS

## 除外・境界
- R8上 機械 問3 — ベクトル制御・始動トルクが必要
- R8上 機械 問4 — すべり・二次入力・二次銅損が必要
- R6上 機械 問4 — すべりが必要
- R5下 機械 問15 — すべり周波数が必要

JR東海一次資料で、時速500 km走行、推進コイルのN/S切替、周波数による切替速度・車両速度制御を確認済み。実機の極ピッチと500 km/h時の実運転周波数は具体値を確定できていないため、実車値として置いていない。

## 現在の状態
- `current_status`: `topic_23_completed`
- 完成数: 23/38
- Topic 23: `PASS`
- 次のactive topic: `24 L0系③ 超電導磁気浮上`

## 次の正確な開始点
Topic 24の制作前EXAM_ALIGNMENTを行う。系列SPECの既定範囲は、超電導磁石、磁界、電磁誘導、誘導電流、電磁力、浮上、案内。直近年度を優先して関連公式過去問を原則5問以上調査し、範囲内で要求事項を確定する。