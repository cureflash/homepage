# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-13

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `05_shinkansen_vehicle_2`。

Topic 01 `0系① 主変圧器の等価回路` は最終QAまでPASS。完成数は `1 / 39`。

Topic 02 `0系② 整流回路の波形解析` は制作前EXAM_ALIGNMENT、解説本文、3段階例題、解説PDF、練習問題・完全解説source、練習PDF、解説画像PowerPointまで完了。現在地は `topic_02_powerpoint_complete`。次は完成教材だけによる選定5過去問の独立再解答。

## Topic 02 EXAM_ALIGNMENT
選定した公式過去問は一次1問＋二次記述4問の計5問。

- R7 二次 機械・制御 問3
- H30 二次 機械・制御 問3
- H29 二次 機械・制御 問3
- H27 一次 機械 問2
- H21 二次 機械・制御 問3

制作前要求事項の独立検証は5/5 PASS。一次・二次合計5問以上、二次記述式を含める品質ゲートを満たした。

確定した説明範囲:
- 単相半波・単相全波・三相ブリッジの導通と波形
- 平均値・実効値・リプル
- リアクトル・コンデンサ平滑
- 素子電流・素子電圧
- 三相サイリスタ変換器の制御角と平均直流電圧
- 交流側電流の基本波・高調波
- 有効電力・無効電力・力率
- 交流条件と直流偏磁
- 直流側電圧・電流・負荷電力

## Topic 02 source・PDF
source:
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis.md`
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_practice_source.md`

解説PDF:
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_explanation.pdf`
- A4縦 3ページ
- 3段階例題と選定5過去問への対応を収録
- `SPEC.md` 指定の入力交流波形、整流後電圧波形、電流波形、フーリエ成分、負荷条件―平均直流電圧を作図
- 全3ページVisual QA PASS

練習PDF:
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_practice.pdf`
- A4縦 8ページ
- 一次試験型8問、全問五肢択一
- 二次試験型4問、途中式・前提・単位・理由説明を要求
- 合計12問、全問解答・完全解説付き
- 選定済み5過去問の要求事項へマッピング済み
- 数値・式は練習source作成時に独立再計算済み
- 全8ページを200 dpiでレンダリングしVisual QA PASS

## Topic 02 PowerPoint
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_images.pptx`
- 16:9、4枚
- 単相整流、平均値・実効値・リプル、L/C平滑、三相6パルス、制御角α、120°交流側電流、基本波・高調波、P/Q/力率、直流偏磁、二次試験答案手順を図解
- 図は全て自作模式図、外部画像なし
- 全4枚レンダリングVisual QA PASS
- `slides_test.py` overflow検査PASS
- 新規の0系実車値・固有回路仕様、インバータ・チョッパ・速度制御等のTopic 02外論点は追加していない

完成教材だけによる選定5過去問の独立再解答、最終QAは未実施。Topic 02は未完成扱いで、完成数は `1 / 39` のまま。

## Topic 02 境界
系列SPECにある「整流回路、平均値、実効値、リプル、素子電流、素子電圧、高調波、力率、交流側電流、直流側電圧」と指定グラフだけを扱う。

インバータ、チョッパ、別テーマの速度制御等は追加しない。未確認の0系回路仕様・実車値を推測で実値化しない。三相サイリスタ変換器は二種過去問の一般論点であり、0系固有仕様とは扱わない。

## Topic 01 完了内容
- 制作前EXAM_ALIGNMENT
- 公式解答照合を伴う要求事項の独立検証
- 解説本文・3段階例題
- 解説PDF
- 練習PDF
- 解説画像PowerPoint
- 完成教材だけによる公式過去問独立再解答
- 最終QA

Topic 01の選定6問は完成教材だけで6/6再解答PASS、教材外知識の補完0件、最終QA PASS。

## 次の正確な開始点
Topic 02 `0系② 整流回路の波形解析` の選定公式過去問5問を、保存済み正答を先に見ず、完成教材だけを使って独立再解答する。各問について解法根拠・途中式・単位を確認して結果を記録する。全問PASS後に最終QAへ進む。

確定済み範囲外の論点や未確認の0系実車値・固有回路仕様は追加しない。
