# Topic 08 最終QA記録

対象: `08 新幹線の変電所はなぜ数十kmおき？`
実施日: 2026-09-16

## 判定
`PASS / completed`。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`02_shinkansen_power_3/SPEC.md` とGitHub正本の現状を再照合した。仕様追加は行っていない。

## 必須成果物
GitHub正本上で以下の実在を確認した。

- source Markdown: `08_voltage_drop.md`
- 解説PDF: `08_voltage_drop_explanation.pdf`
- 練習問題source: `08_voltage_drop_practice_source.md`
- 練習PDF: `08_voltage_drop_practice.pdf`
- 解説画像PowerPoint: `08_voltage_drop_images.pptx`
- 練習PDF QA: `08_voltage_drop_practice_qa.md`
- PowerPoint QA: `08_voltage_drop_powerpoint_qa.md`
- 完成後ブラインド独立再解答: `08_voltage_drop_independent_reanswer.md`

必須成果物の実在: PASS。

## 現行EXAM_ALIGNMENT
品質ゲート対象は、Topic 08の固定範囲だけで解答を完結できる公式過去問5問・7小問。

- R7下 電力 問16 (a)(b) — 三相3線式の電圧降下、力率、線路損失
- R7下 電力 問17 (a)(b) — 力率の異なる複数負荷、区間ごとの電圧降下
- R7上 電力 問13 — 力率変化、三相電力、線路損失一定
- R6上 電力 問13 — 2回線、線路抵抗、送電損失、損失率
- R5上 電力 問12 — R・X、電圧降下率、最大負荷電力

R8上 電力 問8は、機械的強度、コロナ放電、雷・開閉サージまで要求しTopic 08固定範囲だけでは完答できないため、品質ゲートから除外している。除外問題を通すための範囲拡張はしていない。

## 完成後独立再解答
保存済み正答を先に見ず、公式問題文と完成教材だけで固定5問・7小問を再解答した後に公式解答と照合した。

- R7下 電力 問16(a)(b): `(4),(2)` / PASS
- R7下 電力 問17(a)(b): `(3),(1)` / PASS
- R7上 電力 問13: `(2)` / PASS
- R6上 電力 問13: `(4)` / PASS
- R5上 電力 問12: `(2)` / PASS

集計:
- 公式解答一致: `7 / 7 PASS`
- 教材のみ完結: `7 / 7 PASS`
- 教材外知識補完: `0件`
- Topic 09以降の論点による補完: `0件`
- 未確認実設備値の使用: `0件`
- SPEC固定範囲外追加: `0件`

過去問対応品質ゲート: PASS。

## 成果物QA
- 解説PDF: A4縦4ページ、200 dpi全4ページ表示QA `4 / 4 PASS`、文字抽出QA PASS。
- 練習PDF: A4縦4ページ、12問すべて五肢択一。200 dpi全4ページ表示QA `4 / 4 PASS`、文字抽出QA PASS、数値・論理再検算 `12 / 12 PASS`、正答一意性 `12 / 12 PASS`。
- PowerPoint: 16:9・4枚。固定5問・7小問の要求事項可視化 `7 / 7`。1601×900表示QA `4 / 4 PASS`、文字欠け0、クリップ0、意図しない重なり0、境界外はみ出し0、ZIP整合性PASS。

表示・ファイルQA: PASS。

## SPEC境界
維持した範囲:
- 抵抗
- リアクタンス
- インピーダンス
- 電圧降下
- 電力損失
- 力率
- 送電端・受電端
- 電力
- 効率

追加していない範囲:
- ATき電方式・帰線
- 線路インダクタンス・静電容量の詳細導出
- 地中線路
- 短絡・保護
- 需要率・負荷率・不等率
- 無効電力補償設備
- 未確認の新幹線変電所間隔・個別実設備値

SPEC境界: PASS。

## 最終判定
- 必須成果物: PASS
- 現行EXAM_ALIGNMENT: PASS
- 完成後独立再解答: `7 / 7 PASS`
- 教材外知識補完: `0件`
- PDF/PPTX QA: PASS
- SPEC境界: PASS

よってTopic 08を `completed` とする。完成数は `8 / 16`。次はTopic 09 `変電所からパンタグラフまでどう送る？` の制作前EXAM_ALIGNMENTから開始する。
