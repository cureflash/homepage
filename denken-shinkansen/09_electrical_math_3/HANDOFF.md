# HANDOFF - 電験三種「電気数学」

更新日: 2026-09-12

## 現在地

active topic: `01 単位・指数・有効数字`

制作前EXAM_ALIGNMENT、選定5問の公式解答照合付き独立検証、解説本文、解説PDF、練習PDF、解説画像PowerPointまで完了。完成数は `0 / 12` のまま。

source Markdown:
`topics/01_units_exponents_significant_figures/01_units_exponents_significant_figures.md`

解説PDF:
`topics/01_units_exponents_significant_figures/01_units_exponents_significant_figures_explanation.pdf`

練習PDF:
`topics/01_units_exponents_significant_figures/01_units_exponents_significant_figures_practice.pdf`

解説画像PowerPoint:
`topics/01_units_exponents_significant_figures/01_units_exponents_significant_figures_images.pptx`

解説PDFはA4縦6ページ、練習PDFはA4縦4ページ。PowerPointは16:9・4枚。PowerPointは全4枚レンダリングQAとoverflow検査をPASS。既存source Markdownで確定済みの範囲のみを反映し、追加仕様は設けていない。

## 選定済み公式過去問と検証結果

- R8上 理論 問3: 独立(1) = 公式(1)
- R5上 理論 問10: 独立(4) = 公式(4)
- R4上 機械 問11: 独立(3) = 公式(3)
- H29 理論 問14: 独立(5) = 公式(5)
- H28 理論 問16: 独立(a)(2), (b)(3) = 公式(a)(2), (b)(3)

5問すべて公式解答と一致。これは本文作成前の要求事項確定用検証であり、完成後に必要な「教材だけでの独立再解答」は未実施。

## Topic 01で確定した教材要求

- 10の整数乗と科学表記
- SI接頭語 `k`, `M`, `G`, `m`, `μ`, `n`
- `mH→H`, `mA→A`, `ms→s`, `m/min→m/s`, `W→kW` 等の換算
- 複合単位と次元確認
- `C=A·s`, `Ω=V/A`, `W=V·A=J/s`, `H=V·s/A`, `Wb=V·s`, `F=C/V` 等の単位関係
- 加減算と乗除算で異なる有効数字ルール
- 中間計算を早く丸めすぎないこと
- 絶対誤差・百分率誤差
- 効率・百分率の換算
- `与えられた量確認→単位統一→式選択→代入→次元確認→有効数字処理→桁の検算` の解法手順

## PowerPoint完成内容

全4枚:
1. SI接頭語・10のべき・科学表記
2. 単位換算と次元確認
3. 有効数字と誤差
4. 標準解法7段階と選定5問への対応

選定過去問の原文・図は複製していない。

## 新幹線側の扱い

`SPEC.md` にある 25 kV、MW、kWh の範囲を維持。未確認実車値は追加していない。

## 次に行うこと

1. 完成教材だけで選定5問を独立再解答する。
2. 公式解答と照合し、教材のみで根拠まで説明できることを確認する。
3. 最終QA PASS後にのみTopic 01をcompletedへ変更する。
