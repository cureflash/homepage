# Topic 07 最終QA

実施日: 2026-09-15

対象: `07 直流主回路の高出力化`

## 正本
- `denken-shinkansen/MASTER_SPEC.md`
- `denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`
- `05_shinkansen_vehicle_2/SPEC.md`

## QA結果
GitHub正本上で必須成果物と既存QA記録を確認した。

必須成果物は実在する。

- source Markdown: `07_dc_main_circuit_high_output.md`
- 練習問題source: `07_dc_main_circuit_high_output_practice_source.md`
- 解説PDF: `07_dc_main_circuit_high_output_explanation.pdf`
- 練習PDF: `07_dc_main_circuit_high_output_practice.pdf`
- 解説画像PowerPoint: `07_dc_main_circuit_high_output_images.pptx`
- 完成後独立再解答: `07_dc_main_circuit_high_output_independent_reanswer.md`

既存QA記録もPASSしている。

- 解説PDF: A4縦5ページ、180 dpi全5ページ Visual QA `PASS`、文字抽出 `PASS`
- 練習PDF: A4縦3ページ、180 dpi全3ページ Visual QA・文字抽出QA `PASS`
- 練習問題: 一次8問＋二次記述4問、計算・論理・正答一意性 `12 / 12 PASS`
- PowerPoint: 16:9・4スライド、180 dpi全4スライド Visual QA・overflow・ZIP整合性 `PASS`

## EXAM_ALIGNMENT
固定済みの一次4問＋二次1問、計5問・15対象項目を維持している。

- H28 一次 機械 問5 (1)
- H26 一次 機械 問5 (1)(2)
- H22 一次 機械 問1 全小問
- H21 一次 機械 問2 全小問
- H24 二次 機械・制御 問1 (1)(2)

二次記述1問を含み、二種一次・二次合計の原則5問以上を満たす。後続Topicの位相制御、誘導機、VVVF、回生、IGBT/SiCを件数合わせで追加していない。

## 完成後独立再解答
`07_dc_main_circuit_high_output_independent_reanswer.md` を確認した。

- 一次: `13 / 13 PASS`
- 二次: `2 / 2 PASS`
- 合計: `15 / 15 PASS`
- 独立解答と公式解答・標準解答の一致: `15 / 15`
- H21一次 問2(2)「負荷損を規定の基準巻線温度へ補正」: `PASS`
- 教材外知識補完: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`

## 範囲境界
SPEC固定範囲の主回路構成比較、定格電圧、定格電流、主電動機出力、損失、冷却、編成出力、高速化との関係、および指定3グラフを維持している。

追加していないことを確認した。

- 位相制御、サイリスタ点弧角
- 誘導電動機
- PWM/VVVF
- 回生・四象限運転
- IGBT/SiC
- 詳細熱設計
- 出典未確認の100系・200系編成出力、主回路総損失、効率、冷却容量、けん引力―速度特性

## 進捗記録整合
技術内容・成果物・QAはPASSだが、source Markdownの進捗記録に旧状態が残っている。

`07_dc_main_circuit_high_output.md`:
- 状態欄に「既存PDF・PowerPointはまだ補強後sourceへ未同期」「次工程は必要な学習成果物への同期と表示QA」と残っている。
- 末尾の完成後独立再解答欄に、補強前の `14 / 15 PASS / NEEDS_REVISION` を現在状態として記載し、「補強後PDF・PowerPointへの同期と表示QA、続いて再独立再解答を行うまでは completed としない」と残っている。

`07_dc_main_circuit_high_output_practice_source.md`:
- 状態欄に「既存練習PDFは補強後sourceへ未同期」と残っている。
- 末尾の次工程に「補強済みsourceを練習PDFへ同期し、表示QA・文字抽出QAを再実施」と残っている。

実際には解説PDF・練習PDF・PowerPointへの同期と各QA、補強後の再独立再解答 `15 / 15 PASS` まで完了しているため、これらはGitHub正本内の進捗不整合である。

## 品質ゲート判定
- 必須成果物存在: PASS
- 過去問マッピング: PASS
- 一次・二次双方を含む: PASS
- 二次記述式への接続: PASS
- 練習問題の一次/二次接続: PASS
- SPEC指定3グラフ: PASS
- 表示QA: PASS
- 完成教材だけでの独立再解答: `15 / 15 PASS`
- 教材外知識補完: 0件
- 固定範囲外追加: 0件
- 未確認実車値追加: 0件
- source進捗記録整合: FAIL

最終QA: `NEEDS_REVISION`

Topic 07はまだ `completed` としない。次工程は `07_dc_main_circuit_high_output.md` と `07_dc_main_circuit_high_output_practice_source.md` の旧進捗記録だけを実在成果物・再独立再解答済みの現在地へ同期する。技術本文、固定EXAM_ALIGNMENT、問題、正答、PDF/PPTX内容は変更しない。