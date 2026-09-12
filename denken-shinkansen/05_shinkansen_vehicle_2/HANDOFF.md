# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-13

## 現在地
active topic: `01 0系① 主変圧器の等価回路`

制作前EXAM_ALIGNMENT、公式解答照合を伴う要求事項の独立検証、解説本文、解説PDF、練習PDF、解説画像PowerPointに続き、完成教材による公式過去問の独立再解答まで完了。完成数は `0 / 39` のまま。

source Markdown:
`topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit.md`

独立再解答記録:
`topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_exam_reanswer.md`

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

一次1問＋二次記述5問。

## 独立再解答結果
完成済み教材に収録した公式・解法・成立条件だけで6問を再計算・再導出し、その後に試験センター公式標準解答と照合した。

- R7 一次 機械 問3: PASS
- R6 二次 機械・制御 問2: PASS
- R3 二次 機械・制御 問2: PASS
- R2 二次 機械・制御 問2: PASS
- H28 二次 機械・制御 問2: PASS
- H27 二次 機械・制御 問2: PASS

6問すべて公式解答と一致し、対応過去問の解答に教材外知識の追加は不要だった。巻数比・一次/二次換算、無負荷試験、短絡試験、`%Z/%r/%x`、電圧変動率、鉄損・銅損・効率、最大効率条件、フェーザ関係を教材から再構成できた。

## 既存成果物で反映済みの範囲
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

## QA
- 練習PDF: 一次試験型8問＋二次記述型4問、解答・完全解説付き
- PowerPoint: 16:9・4枚
- PowerPoint全4枚を画像レンダリングで目視確認済み
- `slides_test.py`: overflowなし
- 完成教材による公式過去問6問の独立再解答: PASS

## 次に行うこと
Topic 01の最終QAを行う。完成成果物とEXAM_ALIGNMENT、独立再解答記録の整合、一次・二次の要求論点、実車値と計算値・仮定値の区別、成果物の存在を確認する。PASSした場合のみTopic 01を `completed` にし、完成数を `1 / 39` に進める。

まだ `completed` に変更しない。
