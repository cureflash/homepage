# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-13

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は22/38。01〜22がPASS。active topicは23 `L0系② 500km/hと周波数制御`。

## 今回進捗
Topic 23を1段階進め、source Markdownと既存PDFの確定範囲から解説画像PowerPointを作成した。

更新:
- `topics/23_l0_500kmh_frequency_control/23_l0_500kmh_frequency_control_images.pptx`
- `STATUS.md`
- `HANDOFF.md`

PowerPointは16:9・7スライド。同期速度、同期角速度、V/f、整流器→直流→インバータ、三相入力→軸出力→トルク、L0系の推進コイル周波数制御を自作模式図で整理した。全7スライドをレンダリングして目視QAし、overflow検査もPASSした。

引用画像は使用していない。実機の極ピッチ・500 km/h時の実運転周波数、すべり・ベクトル制御など既定範囲外は追加していない。完成後独立再解答は未実施。

## Topic 23 品質ゲート対象
系列SPECの範囲だけで処理できる5問を選定済みで、制作前独立解答は5/5 PASS。

1. R7上 機械 問4 — 周波数と電圧を同率で変える定トルク運転、V/f — 解答3
2. R5下 機械 問6 — 極数・周波数・同期速度 — 解答3
3. H26 機械 問15(a) — 同期速度、三相電力、`P=ωT` — 解答3
4. H20 機械 問10 — 磁気飽和、V/f一定、整流器、インバータ、PWM — 解答5
5. H19 機械 問15(a) — 同期速度・同期角速度 — 解答4

## PowerPointに反映した範囲
- `Ns=120f/p`、周波数・極数と同期速度の比例関係
- `ωs=2πNs/60=4πf/p`
- 回転磁界から直線状の移動磁界への対応
- `V/f≈一定` と磁束過大・磁気飽和の基本
- `交流 → 整流器 → 直流 → インバータ → 可変周波数交流`
- `Pin=√3VIcosφ`、`Pout=ηPin`、`P=ωT`
- 4極60 Hz・400 V・40 A・力率0.80・効率90%の本試験標準例題
- JR東海一次資料で確認済みの、周波数による推進コイルN/S切替速度・車両速度制御

## 除外・境界
- R8上 機械 問3 — ベクトル制御・始動トルクが必要
- R8上 機械 問4 — すべり・二次入力・二次銅損が必要
- R6上 機械 問4 — すべりが必要
- R5下 機械 問15 — すべり周波数が必要

JR東海一次資料で、時速500 km走行、推進コイルのN/S切替、周波数による切替速度・車両速度制御を確認済み。実機の極ピッチと500 km/h時の実運転周波数は具体値を確定できていないため、実車値として置かない。

## 現在の状態
- `current_status`: `topic_23_powerpoint_complete`
- 完成数: 22/38
- Topic 23: `IN_PROGRESS`
- 解説PDF全ページQA: 3/3 PASS
- 練習PDF全ページQA: 7/7 PASS
- PowerPoint全スライドQA: 7/7 PASS
- PowerPoint overflow検査: PASS

## 次の正確な開始点
Topic 23の完成済みsource・解説PDF・練習PDF・PowerPointだけを参照し、品質ゲート対象5問を保存済み正答を先に見ず独立再解答する。根拠まで教材内で再構成できることを確認し、5/5 PASSした場合のみTopic 23をcompletedへ更新する。
