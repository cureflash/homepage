# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-12

## 現在地
active topic: `01 0系① 主変圧器の等価回路`

制作前EXAM_ALIGNMENT、公式解答照合を伴う要求事項の独立検証、解説本文、解説PDF、練習PDFに続き、解説画像PowerPointまで完了。完成数は `0 / 39` のまま。

source Markdown:
`topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit.md`

解説PDF:
`topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_explanation.pdf`

練習PDF:
`topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_practice.pdf`

PowerPoint:
`topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_images.pptx`

## 選定済み公式過去問
- R7 一次 機械 問3
- R6 二次 機械・制御 問2
- R3 二次 機械・制御 問2
- R2 二次 機械・制御 問2
- H28 二次 機械・制御 問2
- H27 二次 機械・制御 問2

一次1問＋二次記述5問。Topic 01完成判定では、この6問を保存済み正答を先に見ず完成教材だけで再解答し、公式解答と照合する。

## PowerPointで反映済みの範囲
- 巻数比、電圧・電流・インピーダンス・アドミタンスの一次/二次換算
- 一次換算簡易等価回路と励磁枝・直列枝の役割
- 無負荷試験から `g0, b0` と鉄損を求める流れ、成立条件
- 短絡試験から `Z, R, X` と銅損を求める流れ、成立条件
- `%Z/%r/%x`、基準インピーダンス
- 遅れ/進み力率の電圧変動率と符号
- 負荷率と鉄損・銅損、規約効率、最大効率条件
- 本試験標準の複数段階解法
- 0系実車情報は確認済みの25 kV・60 Hz・1650 kVA・低圧タップ切換・25段だけを使用
- `1650 kVA / 25 kV = 66 A` は公開値からの計算値であり実測電流ではないと明示
- 未確認の0系固有 `R, X, g0, b0, %Z`、鉄損・銅損を実値化していない

## 練習PDF
一次試験型8問＋二次記述型4問を収録済み。解答・完全解説付き。二次記述では換算側、成立条件、途中式、単位を省略しない。

## QA
- PowerPoint: 16:9・4枚
- 全4枚を画像レンダリングで目視確認
- `slides_test.py`: overflowなし

## 次に行うこと
選定済み公式過去問6問を、保存済み正答を先に見ず、完成教材（解説PDF・練習PDF・PowerPoint・source Markdown）のみを使って独立再解答する。一次1問＋二次記述5問について公式解答と照合し、教材外知識で補っていないことを確認する。

まだ `completed` に変更しない。
