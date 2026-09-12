# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-13

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `05_shinkansen_vehicle_2`。

Topic 01 `0系① 主変圧器の等価回路` は最終QAまでPASS。完成数は `1 / 39`。

Topic 02 `0系② 整流回路の波形解析` は制作前EXAM_ALIGNMENT、解説本文、基礎・本試験標準・複合の3段階例題まで完了。現在地は `topic_02_explanation_body_complete`。次は解説PDF作成。

## Topic 02 EXAM_ALIGNMENT完了内容
選定した公式過去問は一次1問＋二次記述4問の計5問。

- R7 二次 機械・制御 問3
- H30 二次 機械・制御 問3
- H29 二次 機械・制御 問3
- H27 一次 機械 問2
- H21 二次 機械・制御 問3

制作前要求事項の独立検証は5/5 PASS。一次・二次合計5問以上、二次記述式を含める品質ゲートを満たした。

確定した説明範囲:
- 単相半波・単相全波・三相ブリッジの導通と波形
- 平均値・実効値
- リアクトル・コンデンサ平滑とリプル
- 素子電流・素子電圧
- 三相サイリスタ変換器の制御角と平均直流電圧
- 交流側電流の基本波・高調波
- 有効電力・無効電力・力率
- 交流条件と直流偏磁
- 直流側電圧・電流・負荷電力

source Markdown:
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis.md`

## Topic 02 解説本文完了内容
EXAM_ALIGNMENTで確定した範囲だけを使い、次を本文化した。

- 半波・全波整流の導通、平均値、実効値、リプル
- `v=L di/dt`, `i=C dv/dt` からの周期平均0条件
- 大L・大C平滑の違い
- 単相ブリッジ、三相6パルスブリッジの素子電流・素子電圧
- `Vdc=(3√2/π)V_LL cosα` の60°区間積分
- 120°方形波線電流、`I=√(2/3)Id`, `I1=(√6/π)Id`
- 特性高調波 `6k±1`
- `P`, `Q1`, 基本波変位力率と総合力率の区別
- 半波整流時の直流分と変圧器直流偏磁
- 二次記述で再利用する解法アルゴリズム

3段階例題:
- 基礎: 単相全波整流の平均値・実効値・抵抗負荷電力
- 本試験標準: 三相サイリスタ変換器の平均直流電圧、基本波電流、有効・無効電力、総合力率
- 複合: 無平滑・大C・大Lの負荷電力比較

三相サイリスタ変換器は二種過去問の一般論点として扱っており、0系固有仕様として追加していない。新たな0系実車値も追加していない。

完成後独立再解答は未実施。Topic 02は未完成扱いで、完成数は増やさない。

## Topic 02 境界
系列SPECにある「整流回路、平均値、実効値、リプル、素子電流、素子電圧、高調波、力率、交流側電流、直流側電圧」と指定グラフだけを扱う。

インバータ、チョッパ、別テーマの速度制御等は、過去問に近接していてもTopic 02へ追加しない。未確認の0系回路仕様・実車値を推測で実値化しない。

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

## Topic 01 過去問対応結果
選定6問:
- R7 一次 機械 問3
- R6 二次 機械・制御 問2
- R3 二次 機械・制御 問2
- R2 二次 機械・制御 問2
- H28 二次 機械・制御 問2
- H27 二次 機械・制御 問2

一次1問＋二次記述5問。完成教材だけで6/6を再解答し、全問で公式標準解答と一致。教材外知識の補完は0件。

## Topic 01 成果物QA
- 練習PDF: 一次試験型8問＋二次記述型4問、解答・完全解説付き
- PowerPoint: 16:9・4枚
- PowerPoint全4枚のVisual QA済み
- overflowなし
- 完成後独立再解答: 6/6 PASS
- 最終QA: PASS

## 次の正確な開始点
Topic 02 `0系② 整流回路の波形解析` の解説PDFを作成する。

確定済みsourceだけを使い、入力交流波形、整流後電圧波形、電流波形、フーリエ成分、負荷条件―平均直流電圧を反映する。練習PDF・PowerPoint・完成後独立再解答はまだ行わない。
