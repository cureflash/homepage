# STATUS - 新幹線車両・電験二種

更新日: 2026-09-13

## 状態
- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: 1 / 39
- current_status: `topic_01_completed`
- last_completed_topic: `01 0系① 主変圧器の等価回路`
- active_topic: `02 0系② 整流回路の波形解析`
- next_start: Topic 02の制作前EXAM_ALIGNMENT。公式過去問を直近年度から調査し、一次・二次を合わせ原則5問以上、二次記述式を確認できる場合は最低1問含めて要求論点を確定する

## 品質ゲート進捗
- [x] 01 0系① 主変圧器の等価回路 — PASS
- [ ] 02 0系② 整流回路の波形解析 — 未着手

## Topic 01 最終結果
制作前EXAM_ALIGNMENTで選定した公式過去問は一次1問＋二次記述5問の計6問。

- R7 一次 機械 問3
- R6 二次 機械・制御 問2
- R3 二次 機械・制御 問2
- R2 二次 機械・制御 問2
- H28 二次 機械・制御 問2
- H27 二次 機械・制御 問2

完成教材だけによる完成後独立再解答は6/6 PASS。公式標準解答と全問一致し、教材外知識の補完は0件。

確認済み論点は、巻数比と一次/二次換算、無負荷試験・短絡試験、`R/X/g0/b0`、`%Z/%r/%x`、電圧変動率、フェーザ関係、鉄損・銅損・規約効率・最大効率条件、二次記述で必要な途中式・単位・前提・近似条件を含む。

## Topic 01 成果物
- source Markdown: `topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit.md`
- 解説PDF: `topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_explanation.pdf`
- 練習PDF: `topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_practice.pdf`
- 解説画像PowerPoint: `topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_images.pptx`
- 独立再解答記録: `topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_exam_reanswer.md`
- 最終QA記録: `topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_final_qa.md`

練習PDFは一次試験型8問＋二次記述型4問、解答・完全解説付き。PowerPointは16:9・4枚で既存Visual QA・overflow確認済み。

## 実車値・境界
実値として扱うのは一次資料確認済みの25 kV・60 Hz・1650 kVA・低圧タップ切換・25段のみ。

`1650 kVA / 25 kV = 66 A` は公開値からの計算値であり、実測電流ではない。0系固有の `R, X, g0, b0, %Z`、鉄損・銅損は未確認のため実値化していない。教材例題値は仮定値として区別している。

## QA判定
Topic 01: `PASS`。`MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` の過去問対応品質ゲートを通過し、完成数を1/39へ更新した。

## 次
Topic 02 `0系② 整流回路の波形解析` の制作前EXAM_ALIGNMENTから開始する。系列SPECの既定範囲内で、整流回路、平均値・実効値、リプル、素子電流・電圧、高調波、力率、交流側電流、直流側電圧に対応する公式過去問を選定する。
