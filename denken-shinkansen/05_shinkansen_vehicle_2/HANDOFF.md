# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-13

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `05_shinkansen_vehicle_2`。

Topic 01 `0系① 主変圧器の等価回路` は最終QAまでPASSし、完成数は `1 / 39`。次のactive topicはTopic 02 `0系② 整流回路の波形解析`。

## Topic 01 完了内容
- 制作前EXAM_ALIGNMENT
- 公式解答照合を伴う要求事項の独立検証
- 解説本文・3段階例題
- 解説PDF
- 練習PDF
- 解説画像PowerPoint
- 完成教材だけによる公式過去問独立再解答
- 最終QA

成果物:
- `topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit.md`
- `topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_explanation.pdf`
- `topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_practice.pdf`
- `topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_images.pptx`
- `topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_exam_reanswer.md`
- `topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_final_qa.md`

## 過去問対応結果
選定6問:
- R7 一次 機械 問3
- R6 二次 機械・制御 問2
- R3 二次 機械・制御 問2
- R2 二次 機械・制御 問2
- H28 二次 機械・制御 問2
- H27 二次 機械・制御 問2

一次1問＋二次記述5問。完成教材だけで6/6を再解答し、全問で公式標準解答と一致。教材外知識の補完は0件。

確認済み範囲:
- 巻数比、一次/二次換算
- 無負荷試験・短絡試験
- `R, X, g0, b0`
- `%Z/%r/%x` と基準量
- 遅れ/進み力率の電圧変動率
- フェーザ関係と近似条件
- 鉄損・銅損・規約効率・最大効率条件
- 二次答案の途中式・単位・前提・近似条件

## 成果物QA
- 練習PDF: 一次試験型8問＋二次記述型4問、解答・完全解説付き
- PowerPoint: 16:9・4枚
- PowerPoint全4枚のVisual QA済み
- overflowなし
- 完成後独立再解答: 6/6 PASS
- 最終QA: PASS

## 実車値・境界
0系実値として扱うのは一次資料で確認済みの25 kV・60 Hz・1650 kVA・低圧タップ切換・25段のみ。

`1650 kVA / 25 kV = 66 A` は公開値からの計算値で、実測電流ではない。未確認の0系固有 `R, X, g0, b0, %Z`、鉄損・銅損を実値化していない。例題値は教材用仮定値として区別済み。

## 次の正確な開始点
Topic 02 `0系② 整流回路の波形解析` の制作前EXAM_ALIGNMENTから開始する。

公式過去問を直近年度から調査し、二種の一次・二次を合わせ原則5問以上を選定する。二次記述式の該当問題を確認できる場合は最低1問含める。系列SPECで既定された整流回路、平均値、実効値、リプル、素子電流・電圧、高調波、力率、交流側電流、直流側電圧の範囲を越えて仕様を追加しない。
