# 09 直流機方式の損失・熱設計 — 最終QA

更新日: 2026-09-16

## 判定

`NEEDS_REVISION / IN_PROGRESS`

技術内容・過去問対応・成果物QAはすべてPASS。未完了理由は主source `09_dc_machine_loss_thermal_design.md` 冒頭の進捗記録不整合のみ。

## 必須成果物

- 主source: `09_dc_machine_loss_thermal_design.md` — `PASS`
- 解説PDF: `09_dc_machine_loss_thermal_design_explanation.pdf` — `PASS`
- 解説PDF QA: `09_dc_machine_loss_thermal_design_explanation_pdf_qa.md` — `PASS`
- 練習source: `09_dc_machine_loss_thermal_design_practice_source.md` — `PASS`
- 練習PDF: `09_dc_machine_loss_thermal_design_practice.pdf` — `PASS`
- 練習PDF QA: `09_dc_machine_loss_thermal_design_practice_qa.md` — `PASS`
- 解説画像PowerPoint: `09_dc_machine_loss_thermal_design_images.pptx` — `PASS`
- PowerPoint QA: `09_dc_machine_loss_thermal_design_images_qa.md` — `PASS`
- 完成後独立再解答: `09_dc_machine_loss_thermal_design_independent_reanswer.md` — `PASS`

## EXAM_ALIGNMENT品質ゲート

- 固定過去問: 一次4問＋二次1問、計5問
- 固定対象: 一次11項目＋二次3項目、計14項目
- 完成後独立再解答: 一次 `11 / 11 PASS`、二次 `3 / 3 PASS`、合計 `14 / 14 PASS`
- 教材外知識補完: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 二次数合わせ: `0件`

## 成果物QA

- 解説PDF: A4縦5ページ、180 dpi Visual QA `5 / 5 PASS`、文字抽出QA `PASS`
- 練習PDF: A4縦4ページ、180 dpi Visual QA `4 / 4 PASS`、文字抽出QA `PASS`
- 練習問題: 一次8問＋二次4問、計算・論理・正答一意性 `12 / 12 PASS`
- PowerPoint: 16:9・4スライド、Visual QA `4 / 4 PASS`、overflow `0件`、ZIP整合性 `PASS`
- SPEC指定3可視化: `3 / 3 PASS`

## 固定範囲境界

- 誘導電動機の等価回路・すべり・比例推移の追加: `0件`
- PWM/VVVF、インバータ、チョッパの追加: `0件`
- 回生・四象限運転の追加: `0件`
- IGBT/SiC、多レベル変換器の追加: `0件`
- 詳細絶縁寿命モデル、熱流体解析、冷却風量設計の追加: `0件`
- 未確認の100系・200系実車損失・温度・冷却容量・保守周期の真値化: `0件`

## 進捗記録整合

`FAIL`

主source `09_dc_machine_loss_thermal_design.md` の `## 状態` に、実成果物と矛盾する旧進捗が残っている。

残存記述:

- 「解説PDF、練習source/PDF、解説画像PowerPointは未制作」
- 「次工程は解説PDF」

実態:

- 解説PDF: completed / QA PASS
- 練習source/PDF: completed / QA PASS
- PowerPoint: completed / QA PASS
- 完成後独立再解答: `14 / 14 PASS`

このため進捗記録整合を品質ゲート上 `FAIL` とし、Topic 09 はまだ `completed` にしない。

## exact blocker

主source冒頭 `## 状態` の旧進捗2記述だけを実成果物へ同期する必要がある。技術本文、固定EXAM_ALIGNMENT、数式、例題、練習問題・正答、PDF/PPTX、独立再解答は変更不要。

次工程: 主sourceの進捗記録だけを同期し、その後に最終QAを再判定する。