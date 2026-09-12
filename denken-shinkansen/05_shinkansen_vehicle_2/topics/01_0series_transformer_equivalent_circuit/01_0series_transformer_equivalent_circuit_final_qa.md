# Topic 01 最終QA

実施日: 2026-09-13

対象: `01 0系① 主変圧器の等価回路`

## 正本
- `denken-shinkansen/MASTER_SPEC.md`
- `denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`
- `05_shinkansen_vehicle_2/SPEC.md`

## 成果物存在確認
GitHub正本上で次の5成果物を確認した。

- source Markdown: `01_0series_transformer_equivalent_circuit.md`
- 解説PDF: `01_0series_transformer_equivalent_circuit_explanation.pdf`
- 練習PDF: `01_0series_transformer_equivalent_circuit_practice.pdf`
- 解説画像PowerPoint: `01_0series_transformer_equivalent_circuit_images.pptx`
- 完成後独立再解答記録: `01_0series_transformer_equivalent_circuit_exam_reanswer.md`

解説PDF・練習PDF・PowerPointは前工程でVisual QA済み。PowerPointは16:9・4枚、overflowなし。練習PDFは一次試験型8問＋二次記述型4問、解答・完全解説付き。

## EXAM_ALIGNMENT整合確認
制作前に選定した公式過去問は一次1問＋二次記述5問の計6問。

- R7 一次 機械 問3
- R6 二次 機械・制御 問2
- R3 二次 機械・制御 問2
- R2 二次 機械・制御 問2
- H28 二次 機械・制御 問2
- H27 二次 機械・制御 問2

source Markdownの要求論点と完成後独立再解答記録を照合し、次を確認した。

- 巻数比と一次/二次換算
- 無負荷試験・短絡試験
- `R, X, g0, b0`
- `%Z/%r/%x` と基準量
- 遅れ/進み力率の電圧変動率
- フェーザ関係と近似条件
- 鉄損・銅損・規約効率・最大効率条件
- 二次試験で必要な途中式・単位・前提・近似条件

6問すべて完成教材だけで公式標準解答と一致し、教材外知識の補完は0件。

## 実車値・計算値・仮定値の区別
0系について実値として扱っているのは、既存一次資料で確認済みの以下だけ。

- 交流60 Hz 25 kV
- 主変圧器容量1650 kVA
- 低圧タップ切換
- 25段

`1650 kVA / 25 kV = 66 A` は公開値からの計算値として明記され、実測値扱いしていない。0系固有の `R, X, g0, b0, %Z`、鉄損・銅損は未確認のため実値化していない。例題値は教材用仮定値として区別されている。

## 品質ゲート判定
- 過去問マッピング: PASS
- 一次・二次の双方を含む: PASS
- 二次記述式を含む: PASS
- 公式の意味・成立条件・解法手順: PASS
- 本試験標準例題・複合例題: PASS
- 練習問題の一次/二次接続: PASS
- 完成教材だけでの独立再解答: 6/6 PASS
- 教材外知識の補完: 0件
- 実車値/計算値/仮定値の区別: PASS
- 必須成果物の存在: PASS

最終QA: `PASS`

Topic 01を `completed` とする。次はTopic 02 `0系② 整流回路の波形解析` の制作前EXAM_ALIGNMENTから開始する。
