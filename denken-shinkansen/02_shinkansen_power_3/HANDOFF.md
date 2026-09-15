# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-15

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は `7 / 16`。Topic 01〜07は完成済み。

## 今回進捗
Topic 08 `新幹線の変電所はなぜ数十kmおき？` を1段階進め、解説画像PowerPointを完成した。

`topics/08_voltage_drop/08_voltage_drop.md`、解説PDF、練習source/PDFを正本として `topics/08_voltage_drop/08_voltage_drop_images.pptx` を作成した。16:9・4枚。固定5問・7小問の要求事項を `7 / 7` 可視化し、距離とR/X・電圧降下・損失、単一負荷の標準解法、複数負荷の電流成分分解・区間集計、2回線の電力分担、本試験対応表を収録した。1601×900全4枚表示QA `4 / 4 PASS`、overflow 0件、PPTX ZIP整合性PASS。外部画像は使用せず模式図・表は自作。SPEC固定範囲外論点・未確認実設備値の追加は0件。

PowerPoint QA: `topics/08_voltage_drop/08_voltage_drop_powerpoint_qa.md`

現行品質ゲート:
- R7下 電力 問16 (a)(b) — 三相3線式の電圧降下、力率、線路損失
- R7下 電力 問17 (a)(b) — 力率の異なる複数負荷、区間ごとの電圧降下
- R7上 電力 問13 — 力率変化、三相電力、線路損失一定
- R6上 電力 問13 — 2回線、線路抵抗、送電損失、損失率
- R5上 電力 問12 — R・X、電圧降下率、最大負荷電力

制作前独立検証は `7 / 7 PASS`。完成後のブラインド独立再解答を汚染しないため、固定過去問の正答番号はsource・STATUS・HANDOFFへ保存していない。

source: `topics/08_voltage_drop/08_voltage_drop.md`
解説PDF: `topics/08_voltage_drop/08_voltage_drop_explanation.pdf`
練習問題source: `topics/08_voltage_drop/08_voltage_drop_practice_source.md`
練習PDF: `topics/08_voltage_drop/08_voltage_drop_practice.pdf`
練習PDF QA: `topics/08_voltage_drop/08_voltage_drop_practice_qa.md`
解説画像PowerPoint: `topics/08_voltage_drop/08_voltage_drop_images.pptx`
PowerPoint QA: `topics/08_voltage_drop/08_voltage_drop_powerpoint_qa.md`

## 範囲境界
SPEC固定範囲は、抵抗、リアクタンス、インピーダンス、電圧降下、電力損失、力率、送電端、受電端、電力、効率のみ。

Topic 09以降へ先回りしない。ATき電方式、帰線、線路インダクタンス・静電容量の詳細導出、地中線路、短絡・保護、需要率・負荷率・不等率、無効電力補償設備は教材論点として追加していない。PowerPoint Slide 4では範囲境界確認として除外対象名だけを明記した。

実際の新幹線変電所間隔や個別設備値も一次資料確認前に真値化していない。

## 現在状態
- `current_status`: `topic_08_powerpoint_complete`
- 完成数: `7 / 16`
- last completed: Topic 07 `なぜ三相交流をそのまま架線へ流さない？`
- active: Topic 08 `新幹線の変電所はなぜ数十kmおき？`

未完成:
- 完成後ブラインド独立再解答
- 最終QA

## 次の正確な開始点
Topic 08の固定5問・7小問を完成教材だけでブラインド独立再解答する。

保存済み正答を先に見ず、教材だけで公式選択・途中式・選択肢判定まで完結するか確認する。教材外知識、Topic 09以降の論点、未確認実設備値で補完しない。