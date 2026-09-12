# HANDOFF - 電験三種「電気数学」

更新日: 2026-09-12

## 現在地

active topic: `01 単位・指数・有効数字`

制作前EXAM_ALIGNMENT、選定5問の公式解答照合付き独立検証、解説本文、解説PDF、練習PDFまで完了。完成数は `0 / 12` のまま。

source Markdown:
`topics/01_units_exponents_significant_figures/01_units_exponents_significant_figures.md`

解説PDF:
`topics/01_units_exponents_significant_figures/01_units_exponents_significant_figures_explanation.pdf`

練習PDF:
`topics/01_units_exponents_significant_figures/01_units_exponents_significant_figures_practice.pdf`

解説PDFはA4縦6ページ、練習PDFはA4縦4ページ。いずれも170 dpiで全ページレンダリングQA済み。source Markdownで確定済みの範囲のみを反映し、追加仕様は設けていない。

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

## 練習PDFの完成内容

全15問:
- 基礎4問
- 本試験標準8問
- 複合・応用3問
- 五肢択一10問
- 記述5問

過去問要求との対応:
- `mH→H`、10のべき、`LI^2` の桁管理: 問6・問14
- `mA→A`、`ms→s`、`A/s`、`H·A/s=V`: 問5・問13
- `m/min→m/s`、百分率効率、`W→kW`: 問10・問15
- 有効数字と単位演算: 問3・4・7・9・11・12
- 測定値・絶対誤差・百分率誤差: 問8

各問に完全解説を付け、計算問題では式、単位換算、中間値、最終値、有効数字処理、必要な検算を示した。選定過去問の原文・図・数値は複製していない。

## 新幹線側の扱い

`SPEC.md` にある 25 kV、MW、kWh の範囲を維持。練習プリントは `SPEC.md` の指示どおり通常の電験三種数学演習として構成し、新幹線題材を必須化していない。

## 次に行うこと

1. Topic 01の解説画像PowerPointを作成する。
2. 成果物完成後、選定5問を教材だけで独立再解答する。
3. 最終QA PASS後にのみTopic 01をcompletedへ変更する。

練習PDF完成だけで completion 扱いにはしない。
