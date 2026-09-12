# HANDOFF - 電験三種「電気数学」

更新日: 2026-09-13

## 現在地

active topic: `01 単位・指数・有効数字`

制作前EXAM_ALIGNMENT、選定5問の公式解答照合付き独立検証、解説本文、解説PDF、練習PDF、解説画像PowerPoint、完成教材だけでの独立再解答まで完了。完成数は `0 / 12` のまま。

source Markdown:
`topics/01_units_exponents_significant_figures/01_units_exponents_significant_figures.md`

解説PDF:
`topics/01_units_exponents_significant_figures/01_units_exponents_significant_figures_explanation.pdf`

練習PDF:
`topics/01_units_exponents_significant_figures/01_units_exponents_significant_figures_practice.pdf`

解説画像PowerPoint:
`topics/01_units_exponents_significant_figures/01_units_exponents_significant_figures_images.pptx`

解説PDFはA4縦6ページ、練習PDFはA4縦4ページ。PowerPointは16:9・4枚。既存成果物はそのまま維持し、今回新しい教材仕様は追加していない。

## 完成後の独立再解答

2026-09-13実施。

- R8上 理論 問3: 再解答 (1) = 公式 (1)
- R5上 理論 問10: 再解答 (4) = 公式 (4)
- R4上 機械 問11: 再解答 (3) = 公式 (3)
- H29 理論 問14: 再解答 (5) = 公式 (5)
- H28 理論 問16: 再解答 (a)(2), (b)(3) = 公式 (a)(2), (b)(3)

5問すべて一致。教材に記載済みの単位換算、`Ψ=LI`、`W=(1/2)LI^2`、`v=L di/dt`、`P=Fv`、効率、有効数字、絶対誤差・百分率誤差だけで根拠まで組み立てられ、教材外知識の補完は不要だった。詳細はsource Markdownへ記録済み。

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

## 新幹線側の扱い

`SPEC.md` にある 25 kV、MW、kWh の範囲を維持。未確認実車値は追加していない。

## 次に行うこと

1. Topic 01の最終QAを行う。
2. MASTER / EXAM_ALIGNMENT / 系列SPECの完了条件を全件照合する。
3. PASSした場合のみTopic 01を `completed` へ変更し、完成数を `1 / 12` に更新する。
