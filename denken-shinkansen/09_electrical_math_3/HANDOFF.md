# HANDOFF - 電験三種「電気数学」

更新日: 2026-09-13

## 現在地

Topic 01 `単位・指数・有効数字` は最終QAまでPASSし、`completed`。

Topic 02 `三角比・三角関数` は解説画像PowerPointまで完了。

完成数: `1 / 12`

current_status: `topic_02_powerpoint_complete`

active topic: `02 三角比・三角関数`

## Topic 02 現行成果物

source Markdown:
`topics/02_trigonometric_functions/02_trigonometric_functions.md`

解説PDF:
`topics/02_trigonometric_functions/02_trigonometric_functions_explanation.pdf`

練習PDF:
`topics/02_trigonometric_functions/02_trigonometric_functions_practice.pdf`

解説画像PowerPoint:
`topics/02_trigonometric_functions/02_trigonometric_functions_images.pptx`

解説PDFはA4縦3ページで、全ページ表示QA済み。

練習PDFはA4縦5ページ、12問（基礎3 / 本試験標準7 / 複合・応用2）。五肢択一8問で、全問に解答・完全解説を収録。全5ページを180 dpiでレンダリングし、文字切れ・図表欠落・重なり・黒塗り・ページ外はみ出しなしを確認済み。代表値・全問の数値と位相は独立計算で再確認済み。

PowerPointは16:9・7枚。`sin/cos/tan` と単位円、正弦波、位相差、`sin/cos` 90°変換、正弦波合成、力率、25 kV正弦波モデル、標準解法・頻出ミスを収録した。全7枚を1600×900相当でレンダリングして目視確認し、全shapeのキャンバス外はみ出し0件を確認済み。

## Topic 02 EXAM_ALIGNMENT

選定した公式過去問は5問。

- R8上 理論 問8: 90°位相差と直角三角形
- R7上 理論 問8: 正弦波の瞬時値と初回到達時刻
- R6下 理論 問8: 位相差のある正弦波の合成
- R6上 理論 問15: `sin/cos` の位相変換、進み・遅れ、角周波数
- R5上 理論 問9: 力率 `cosφ` とR-X-Z直角三角形

制作前独立検証: `5問・6小問 / 6小問 PASS`

参考教材は e-sysnet、電験王、電験三種まとめましたの複数系統を確認済み。

本Topicへ固定した範囲:

- `sin`, `cos`, `tan`
- 度とラジアン
- 単位円と代表角
- 正弦波の最大値・瞬時値・周期・周波数
- `ω=2πf=2π/T`
- 位相・位相差・進み・遅れ
- 必要範囲の加法定理
- `A sin x+B cos x` の正弦波合成
- 力率 `cosφ` の三角比
- 最大値・瞬時値・実効値の区別

練習PDFとPowerPointは上記固定範囲だけから作成した。25 kVは「正弦波実効値とする数学例」としてのみ使用し、実車波形の詳細を仮定していない。

複素数はTopic 03、極形式・フェーザはTopic 04、空間ベクトルはTopic 05、微積分は後続Topicへ送る。体系的なRLC回路解析も本Topicへ追加しない。

## 次に行うこと

Topic 02の選定公式過去問5問を、保存済み正答を先に見ず、完成教材だけを使って独立再解答する。

教材外知識で補完した場合はFAILとし、各問の根拠を説明できることまで確認する。

その後に最終QAを行い、PASSして初めて `completed` とする。
