# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-13

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `05_shinkansen_vehicle_2`。

Topic 01 `0系① 主変圧器の等価回路` は最終QAまでPASS。完成数は `1 / 39`。

Topic 02 `0系② 整流回路の波形解析` は制作前EXAM_ALIGNMENT、解説本文、基礎・本試験標準・複合の3段階例題、解説PDF、練習問題・完全解説sourceまで完了。現在地は `topic_02_practice_source_complete`。次は練習PDF作成＋全ページVisual QA。

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

## Topic 02 解説PDF
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_explanation.pdf`
- A4縦 3ページ
- 確定済み本文、3段階例題、選定5過去問との対応、公式・解法まとめを収録
- `SPEC.md` 指定の入力交流波形、整流後電圧波形、電流波形、フーリエ成分、負荷条件―平均直流電圧を作図
- 全3ページをレンダリングし、文字欠け・黒四角・重なり・クリッピング・可読性を目視確認してPASS
- 範囲外のインバータ、チョッパ、速度制御、未確認の0系実車値・固有回路仕様は追加していない

## Topic 02 練習問題・完全解説source
新規source:
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_practice_source.md`

構成:
- 一次試験型8問、全問五肢択一
- 二次試験型4問、途中式・前提・単位・理由説明を要求
- 合計12問、全問完全解説付き

一次8問で扱う論点:
1. 単相全波整流の平均値・実効値・抵抗負荷電力
2. 単相半波整流の平均値・実効値
3. L/Cの周期定常条件
4. 三相6パルスブリッジ平均直流電圧
5. 三相サイリスタの制御角と平均直流電圧
6. 120°方形波電流の全実効値・基本波・高調波
7. 基本波変位力率と総合力率
8. 直流分と変圧器直流偏磁

二次4問で扱う論点:
1. 無平滑・大C・大Lの負荷電力比較
2. 三相サイリスタ変換器の `Vdc`, `I1`, `P`, `Q1`, `I`, `λ`
3. 制御角・直流電圧極性・電力方向
4. 半波電流の1周期平均と変圧器直流偏磁の判定手順

選定済み5過去問の要求事項へ全問をマッピングし、数値・式を再計算済み。新規の0系実車値、固有回路仕様、インバータ、チョッパ、速度制御は追加していない。

練習PDF・PowerPoint、完成後独立再解答は未実施。Topic 02は未完成扱いで、完成数は増やさない。

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
Topic 02 `0系② 整流回路の波形解析` の練習PDFを、`02_0series_rectifier_waveform_analysis_practice_source.md` だけを使って作成し、全ページVisual QAを行う。

PowerPoint・完成後独立再解答はまだ行わない。確定済み範囲外の論点や未確認の0系実車値・固有回路仕様は追加しない。