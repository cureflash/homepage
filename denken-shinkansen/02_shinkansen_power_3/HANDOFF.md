# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-16

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は `7 / 16`。Topic 01〜07は完成済み。

## 今回進捗
Topic 08 `新幹線の変電所はなぜ数十kmおき？` を1段階進め、完成後ブラインド独立再解答を完了した。

固定5問・7小問について、公式問題文・選択肢だけを確認し、公式解答を先に見ず、完成済みTopic 08教材の式・解法手順だけで選択肢を確定した。その後に公式解答と照合し、`7 / 7 PASS`。教材外知識補完、Topic 09以降の論点による補完、未確認実設備値の使用、SPEC固定範囲外追加はいずれも0件。

独立再解答記録: `topics/08_voltage_drop/08_voltage_drop_independent_reanswer.md`

独立答案:
- R7下 電力 問16(a)(b): `(4),(2)`
- R7下 電力 問17(a)(b): `(3),(1)`
- R7上 電力 問13: `(2)`
- R6上 電力 問13: `(4)`
- R5上 電力 問12: `(2)`

公式解答一致: `7 / 7 PASS`。

現行品質ゲート:
- R7下 電力 問16 (a)(b) — 三相3線式の電圧降下、力率、線路損失
- R7下 電力 問17 (a)(b) — 力率の異なる複数負荷、区間ごとの電圧降下
- R7上 電力 問13 — 力率変化、三相電力、線路損失一定
- R6上 電力 問13 — 2回線、線路抵抗、送電損失、損失率
- R5上 電力 問12 — R・X、電圧降下率、最大負荷電力

source: `topics/08_voltage_drop/08_voltage_drop.md`
解説PDF: `topics/08_voltage_drop/08_voltage_drop_explanation.pdf`
練習問題source: `topics/08_voltage_drop/08_voltage_drop_practice_source.md`
練習PDF: `topics/08_voltage_drop/08_voltage_drop_practice.pdf`
練習PDF QA: `topics/08_voltage_drop/08_voltage_drop_practice_qa.md`
解説画像PowerPoint: `topics/08_voltage_drop/08_voltage_drop_images.pptx`
PowerPoint QA: `topics/08_voltage_drop/08_voltage_drop_powerpoint_qa.md`
完成後独立再解答: `topics/08_voltage_drop/08_voltage_drop_independent_reanswer.md`

## 範囲境界
SPEC固定範囲は、抵抗、リアクタンス、インピーダンス、電圧降下、電力損失、力率、送電端、受電端、電力、効率のみ。

Topic 09以降へ先回りしない。ATき電方式、帰線、線路インダクタンス・静電容量の詳細導出、地中線路、短絡・保護、需要率・負荷率・不等率、無効電力補償設備は教材論点として追加していない。

実際の新幹線変電所間隔や個別設備値も一次資料確認前に真値化していない。

## 現在状態
- `current_status`: `topic_08_independent_reanswer_complete`
- 完成数: `7 / 16`
- last completed: Topic 07 `なぜ三相交流をそのまま架線へ流さない？`
- active: Topic 08 `新幹線の変電所はなぜ数十kmおき？`

未完成:
- main sourceへの完成後独立再解答結果同期
- 最終QA

## 次の正確な開始点
Topic 08 main sourceのEXAM_ALIGNMENT・進捗記録へ、完成後独立再解答 `7 / 7 PASS` を同期する。

教材本文・固定5問・7小問・成果物・SPEC固定範囲は変更しない。同期後に最終QAへ進む。