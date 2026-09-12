# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-13

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は22/38。01〜22がPASS。active topicは23 `L0系② 500km/hと周波数制御`。

## 今回進捗
Topic 23を1段階進め、source Markdownと制作前EXAM_ALIGNMENTで確定済みの範囲から練習PDFを作成した。

更新:
- `topics/23_l0_500kmh_frequency_control/23_l0_500kmh_frequency_control_practice.pdf`
- `STATUS.md`
- `HANDOFF.md`

練習PDFはA4縦7ページ、15問。基礎4問、本試験標準8問、複合・応用3問で、全15問を五肢択一とした。各問に解答・根拠・計算過程または誤答ポイントを付けている。全7ページを180 dpiでレンダリングして目視QAし、文字欠け・黒四角・クリッピング・重なりなしでPASSした。

PowerPointはまだ作成していない。完成後独立再解答も未実施。

## Topic 23 品質ゲート対象
系列SPECの範囲だけで処理できる5問を選定済みで、制作前独立解答は5/5 PASS。

1. R7上 機械 問4 — 周波数と電圧を同率で変える定トルク運転、V/f — 解答3
2. R5下 機械 問6 — 極数・周波数・同期速度 — 解答3
3. H26 機械 問15(a) — 同期速度、三相電力、`P=ωT` — 解答3
4. H20 機械 問10 — 磁気飽和、V/f一定、整流器、インバータ、PWM — 解答5
5. H19 機械 問15(a) — 同期速度・同期角速度 — 解答4

## 練習PDFに反映した範囲
- `Ns=120f/p`、周波数・極数の逆算
- `ωs=2πNs/60=4πf/p`
- V/f一定と磁気飽和の基本
- 整流器・インバータ・PWMの役割
- `Pin=√3VIcosφ`、効率、`P=ωT`、`T=P/ω`
- R7上問4の問題条件下での `T∝VI/f`
- JR東海一次資料で確認済みの、周波数による推進コイルN/S切替速度・車両速度制御

## 除外・境界
- R8上 機械 問3 — ベクトル制御・始動トルクが必要
- R8上 機械 問4 — すべり・二次入力・二次銅損が必要
- R6上 機械 問4 — すべりが必要
- R5下 機械 問15 — すべり周波数が必要

JR東海一次資料で、時速500 km走行、推進コイルのN/S切替、周波数による切替速度・車両速度制御を確認済み。実機の極ピッチと500 km/h時の実運転周波数は具体値を確定できていないため、実車値として置かない。

## 現在の状態
- `current_status`: `topic_23_practice_pdf_complete`
- 完成数: 22/38
- Topic 23: `IN_PROGRESS`
- 解説PDF全ページQA: 3/3 PASS
- 練習PDF全ページQA: 7/7 PASS

## 次の正確な開始点
Topic 23のsource Markdownと既存PDFを正本として、解説画像PowerPointを作成し全スライドQAを行う。現行SPEC・制作前EXAM_ALIGNMENTの範囲外知識、未確認の実車値、すべり・ベクトル制御等は追加しない。