# HANDOFF - 電験二種「電気数学」

更新日: 2026-09-13

## 現在地

active topic: `01 複素数・複素指数・フェーザ計算`

完成後の公式過去問独立再解答まで完了。完成数は `0 / 20` のまま。

source Markdown:
`topics/01_complex_numbers_phasors/01_complex_numbers_phasors.md`

解説PDF:
`topics/01_complex_numbers_phasors/01_complex_numbers_phasors_explanation.pdf`

練習PDF:
`topics/01_complex_numbers_phasors/01_complex_numbers_phasors_practice.pdf`

PowerPoint:
`topics/01_complex_numbers_phasors/01_complex_numbers_phasors_images.pptx`

## 選定済み公式過去問

- R7 一次 理論 問3
- R6 一次 理論 問5
- R5 一次 理論 問4
- R4 一次 理論 問5
- R3 一次 理論 問4

二種の関連公式過去問5問を選定。Topic 01は一次理論で直接要求される数学を主対象とし、二次問題を数合わせで追加していない。

## 完成後の独立再解答結果

完成教材に記載済みの内容だけを解法根拠として5問を再解答した。問題文・図・解答群は試験センター公式問題PDFで確認し、導出後に公式解答PDFと照合した。

- R7 問3: `(1)ヨ (2)ト (3)ハ (4)ヌ (5)リ` — 5/5一致
- R6 問5: `(1)ヘ (2)ホ (3)リ (4)ヨ (5)ヲ` — 5/5一致
- R5 問4: `(1)ト (2)ヌ (3)ロ (4)イ (5)ホ` — 5/5一致
- R4 問5: `(1)ホ (2)チ (3)ヲ (4)ハ (5)リ` — 5/5一致
- R3 問4: `(1)ヲ (2)ハ (3)イ (4)リ (5)ニ` — 5/5一致

5問・25小問すべて公式解答と一致。必要公式、途中式、位相・符号・電力の根拠まで教材だけで再現でき、教材外知識による補完は不要だった。source Markdownへ結果を記録済み。

## 完成した解説画像PowerPoint

16:9・4枚。

- 直交形式・極形式・複素指数・`j` の90°回転・共役
- `R`、`jωL`、`1/(jωC)` とフェーザ計算
- `S=VI*=P+jQ` と有効・無効・皮相電力、力率
- 変成器 `a²Z`、交流テブナン、相互インダクタンス `±jωM`
- `基準フェーザ→ωとZ→回路整理→複素演算→大きさ・偏角・電力→検算` の標準解法
- 選定5問と教材技能の対応

選定過去問の原文・図は複製せず、問番号と必要技能だけを表示した。全4枚をレンダリング確認し、文字欠け・重なり・クリッピング・ページ外はみ出しなし。overflow検査もPASS。

## 範囲境界

- 対称座標法そのものの詳細は二種電力編へ譲る。
- Topic 02の座標変換、Topic 11の行列・線形連立方程式を先取りして主題化しない。
- 行列が過去問中に現れる場合も、Topic 01では複素フェーザを扱うために必要な範囲だけ読む。

## 次に行うこと

Topic 01の最終QAを実施する。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md` の完了条件と、source Markdown・解説PDF・練習PDF・PowerPoint・独立再解答記録の整合を確認し、PASSした場合のみTopic 01を `completed` へ変更して完成数を更新する。
