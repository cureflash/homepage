# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-16

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は `8 / 16`。Topic 01〜08は完成済み。

## 今回進捗
Topic 08 `新幹線の変電所はなぜ数十kmおき？` の最終QAを実施し、`PASS / completed` とした。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、Topic 08 source、練習PDF QA、PowerPoint QA、完成後ブラインド独立再解答、GitHub正本上の必須成果物実在を再照合した。

固定5問・7小問は完成教材だけで `7 / 7 PASS`、公式解答一致 `7 / 7`。教材外知識補完、Topic 09以降の論点による補完、未確認実設備値の使用、SPEC固定範囲外追加はいずれも0件。

最終QA: `topics/08_voltage_drop/08_voltage_drop_final_qa.md`
source: `topics/08_voltage_drop/08_voltage_drop.md`
解説PDF: `topics/08_voltage_drop/08_voltage_drop_explanation.pdf`
練習問題source: `topics/08_voltage_drop/08_voltage_drop_practice_source.md`
練習PDF: `topics/08_voltage_drop/08_voltage_drop_practice.pdf`
練習PDF QA: `topics/08_voltage_drop/08_voltage_drop_practice_qa.md`
解説画像PowerPoint: `topics/08_voltage_drop/08_voltage_drop_images.pptx`
PowerPoint QA: `topics/08_voltage_drop/08_voltage_drop_powerpoint_qa.md`
完成後独立再解答: `topics/08_voltage_drop/08_voltage_drop_independent_reanswer.md`

独立答案:
- R7下 電力 問16(a)(b): `(4),(2)`
- R7下 電力 問17(a)(b): `(3),(1)`
- R7上 電力 問13: `(2)`
- R6上 電力 問13: `(4)`
- R5上 電力 問12: `(2)`

成果物QA:
- 解説PDF: A4縦4ページ、200 dpi `4 / 4 PASS`、文字抽出PASS
- 練習PDF: A4縦4ページ、12問五肢択一、200 dpi `4 / 4 PASS`、文字抽出PASS、数値・論理再検算 `12 / 12 PASS`、正答一意性 `12 / 12 PASS`
- PowerPoint: 16:9・4枚、固定5問・7小問の要求事項可視化 `7 / 7`、表示QA `4 / 4 PASS`、overflow 0件、ZIP整合性PASS

## Topic 08 範囲境界
SPEC固定範囲は、抵抗、リアクタンス、インピーダンス、電圧降下、電力損失、力率、送電端、受電端、電力、効率。

ATき電方式、帰線、線路インダクタンス・静電容量の詳細導出、地中線路、短絡・保護、需要率・負荷率・不等率、無効電力補償設備はTopic 08へ追加していない。実際の新幹線変電所間隔や個別設備値も未確認のまま真値化していない。

## 現在状態
- `current_status`: `topic_08_completed`
- 完成数: `8 / 16`
- last completed: Topic 08 `新幹線の変電所はなぜ数十kmおき？`
- active: Topic 09 `変電所からパンタグラフまでどう送る？`

## 次の正確な開始点
Topic 09の制作前EXAM_ALIGNMENTを実施する。

`MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` に従い、まず公式過去問を調査・固定して独立検証する。Topic 09の `SPEC.md` 範囲を勝手に拡張しない。