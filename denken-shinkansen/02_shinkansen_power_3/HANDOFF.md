# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-15

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は `7 / 16`。Topic 01〜07は完成済み。

## 今回進捗
Topic 08 `新幹線の変電所はなぜ数十kmおき？` を1段階進め、練習問題sourceを完成した。

`topics/08_voltage_drop/08_voltage_drop.md` のSPEC固定範囲、完成済み解説本文§1〜§9、固定5問・7小問へのマッピングだけを使い、`topics/08_voltage_drop/08_voltage_drop_practice_source.md` を作成した。全12問・全問五肢択一、基礎3／本試験標準7／複合2。完全解説付きで、数値・論理独立再計算 `12 / 12 PASS`、正答一意性 `12 / 12 PASS`、固定5問・7小問への接続 `7 / 7`。SPEC固定範囲外論点・未確認実設備値の追加は0件。

現行品質ゲート:
- R7下 電力 問16 (a)(b) — 三相3線式の電圧降下、力率、線路損失
- R7下 電力 問17 (a)(b) — 力率の異なる複数負荷、区間ごとの電圧降下
- R7上 電力 問13 — 力率変化、三相電力、線路損失一定
- R6上 電力 問13 — 2回線、線路抵抗、送電損失、損失率
- R5上 電力 問12 — R・X、電圧降下率、最大負荷電力

制作前独立検証は `7 / 7 PASS`。完成後のブラインド独立再解答を汚染しないため、固定過去問の正答番号はsource・STATUS・HANDOFFへ保存していない。

練習sourceでは、`R=rl`、`X=xl`、`R∝l/A`、`P=√3VIcosφ`、`ΔV≒√3I(Rcosφ+Xsinφ)`、`P_loss=3I²R`、2回線の電力分担、力率の異なる複数負荷の `Icosφ / Isinφ` 分解、損失率・効率を12問で再演習できるようにした。

source: `topics/08_voltage_drop/08_voltage_drop.md`
解説PDF: `topics/08_voltage_drop/08_voltage_drop_explanation.pdf`
練習問題source: `topics/08_voltage_drop/08_voltage_drop_practice_source.md`

## 範囲境界
SPEC固定範囲は、抵抗、リアクタンス、インピーダンス、電圧降下、電力損失、力率、送電端、受電端、電力、効率のみ。

Topic 09以降へ先回りしない。ATき電方式、帰線、線路インダクタンス・静電容量の詳細導出、地中線路、短絡・保護、需要率・負荷率・不等率、無効電力補償設備は追加していない。

実際の新幹線変電所間隔や個別設備値も一次資料確認前に真値化していない。

## 現在状態
- `current_status`: `topic_08_practice_source_complete`
- 完成数: `7 / 16`
- last completed: Topic 07 `なぜ三相交流をそのまま架線へ流さない？`
- active: Topic 08 `新幹線の変電所はなぜ数十kmおき？`

未完成:
- 練習PDF
- 解説画像PowerPoint
- 完成後ブラインド独立再解答
- 最終QA

## 次の正確な開始点
Topic 08の練習PDFを作成する。

`topics/08_voltage_drop/08_voltage_drop_practice_source.md` を正本としてPDF化し、全ページ表示QA・文字抽出QA・正答一意性・主要計算再検算を行う。Topic 09以降の論点・未確認の実設備値は追加しない。
