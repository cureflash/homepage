# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-12

## 現在地

active topic: `01 0系の主変圧器を等価回路で解剖する`

制作前EXAM_ALIGNMENT、選定6問の公式解答照合・要求事項の独立検証、解説本文、解説PDFに続き、練習PDFまで完了。完成数は `0 / 22` のまま。

source Markdown:
`topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit.md`

解説PDF:
`topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_explanation.pdf`

練習PDF:
`topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_practice.pdf`

## 選定済み公式過去問

- R7 一次 機械 問3
- R6 二次 機械・制御 問2
- R3 二次 機械・制御 問2
- R2 二次 機械・制御 問2
- H28 二次 機械・制御 問2
- H27 二次 機械・制御 問2

一次1問＋二次記述5問。6問すべて、保存済み正答に依存しない計算・導出結果が試験センター公式標準解答と一致済み。

## 練習PDFの内容

A4縦5ページ。一次試験型8問＋二次試験記述型4問、計12問と解答・完全解説を収録した。

- 一次・二次換算
- 無負荷試験から `g0, b0`
- 短絡試験から `R, X, Z`
- `%Z/%r/%x` とオーム値
- 遅れ/進み力率の電圧変動率
- 鉄損・銅損・規約効率・最大効率
- 定格電流以外の短絡試験から全負荷銅損への換算
- 電圧変動率の二次項
- 並列運転の負荷分担
- 二次答案で必要な換算側・成立条件・途中式・単位・近似条件

問題は公式過去問の複製ではなく、教材用の独自数値・独自設問で作成した。全数値問題を独立再計算済み。

PDFは180 dpiで全5ページをレンダリングし、PDFium / pdftoppmの両方で文字欠け、黒四角、重なり、クリッピングなしを確認済み。

## 次に行うこと

Topic 01の解説画像PowerPointを作成する。

source Markdown、解説PDF、練習PDFの論点を欠落させず、一次・二次試験で必要な式、換算側、成立条件、無負荷/短絡試験、百分率量、フェーザと電圧変動率、効率、並列運転、二次答案の解法手順を図解する。

その後、教材だけで選定6問を再度独立解答する。QA PASS後に初めてTopic 01をcompletedへ変更する。
