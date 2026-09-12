# STATUS - 新幹線車両・電験二種

更新日: 2026-09-13

## 状態
- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: 1 / 39
- current_status: `topic_02_explanation_body_complete`
- last_completed_topic: `01 0系① 主変圧器の等価回路`
- active_topic: `02 0系② 整流回路の波形解析`
- next_start: Topic 02の解説PDF作成。確定済み本文だけを使い、入力交流波形、整流後電圧波形、電流波形、フーリエ成分、負荷条件―平均直流電圧を反映する

## 品質ゲート進捗
- [x] 01 0系① 主変圧器の等価回路 — PASS
- [ ] 02 0系② 整流回路の波形解析 — 制作前EXAM_ALIGNMENT・解説本文＋3段階例題完了

## Topic 02 現在地
制作前EXAM_ALIGNMENTで一次1問＋二次記述4問の計5問を選定し、要求事項独立検証5/5 PASS。その範囲だけを使って解説本文と基礎・本試験標準・複合の3段階例題まで作成した。

本文で対応済み:
- 単相半波・単相全波の導通と波形
- 平均値・実効値・リプル
- リアクトル・コンデンサ平滑と周期定常条件
- 素子電流・素子電圧
- 三相6パルスブリッジの導通と平均直流電圧
- 三相サイリスタ変換器の制御角と平均直流電圧
- 120°方形波電流、基本波、高調波
- 有効電力・基本波無効電力・総合力率
- 交流条件と直流偏磁
- 二次記述向け解法アルゴリズム

3段階例題:
- 基礎: 単相全波整流の平均値・実効値・抵抗負荷電力
- 本試験標準: 三相サイリスタ変換器の `Vdc`, `I1`, `P`, `Q1`, 総合力率
- 複合: 無平滑・大C・大Lの負荷電力比較

source Markdown:
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis.md`

解説PDF・練習PDF・PowerPoint、完成後独立再解答は未実施。完成数は `1 / 39` のまま。

## Topic 02 制作前EXAM_ALIGNMENT
公式過去問は一次1問＋二次記述4問の計5問を選定し、制作前の要求事項独立検証は5/5 PASS。

- R7 二次 機械・制御 問3 — 単相ダイオードブリッジ、L/C平滑、平均値、負荷電力
- H30 二次 機械・制御 問3 — 三相サイリスタ変換器、平均直流電圧、交流側基本波、有効・無効電力
- H29 二次 機械・制御 問3 — 単相ダイオード整流、平均値・実効値、C/L平滑
- H27 一次 機械 問2 — 単相半波整流、変圧器一次電流、交流条件、直流偏磁
- H21 二次 機械・制御 問3 — 三相サイリスタ変換器、制御角、平均直流電圧、電力方向

一次・二次合計5問以上、二次記述式を含める品質ゲートを満たした。直近年度から公式問題を確認し、インバータ・チョッパ等のTopic 02外の問題は選定していない。

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
Topic 01で実値として扱うのは一次資料確認済みの25 kV・60 Hz・1650 kVA・低圧タップ切換・25段のみ。

`1650 kVA / 25 kV = 66 A` は公開値からの計算値であり、実測電流ではない。0系固有の `R, X, g0, b0, %Z`、鉄損・銅損は未確認のため実値化していない。教材例題値は仮定値として区別している。

Topic 02では新たな0系実車値・未確認回路仕様を追加していない。三相サイリスタ変換器は二種過去問の一般論点として扱い、0系固有仕様とはしていない。

## QA判定
Topic 01: `PASS`。

Topic 02: 制作前品質ゲートPASS、解説本文＋3段階例題完了。テーマ自体は未完了であり、`completed` には数えない。

## 次
Topic 02 `0系② 整流回路の波形解析` の解説PDFを作成する。EXAM_ALIGNMENTと確定済み本文の範囲を越えて仕様を追加しない。
