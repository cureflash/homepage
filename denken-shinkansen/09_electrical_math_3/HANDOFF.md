# HANDOFF - 電験三種「電気数学」

更新日: 2026-09-13

## 現在地

Topic 01 `単位・指数・有効数字` は最終QAまでPASSし、`completed`。

Topic 02 `三角比・三角関数` は解説PDFまで完了。

完成数: `1 / 12`

current_status: `topic_02_explanation_pdf_complete`

active topic: `02 三角比・三角関数`

## Topic 02 現行成果物

source Markdown:
`topics/02_trigonometric_functions/02_trigonometric_functions.md`

解説PDF:
`topics/02_trigonometric_functions/02_trigonometric_functions_explanation.pdf`

解説PDFはA4縦3ページ。全3ページを180 dpiでレンダリングし、文字切れ・図表欠落・重なり・黒塗り・ページ外はみ出しなしを確認済み。

練習PDF・PowerPointは未作成。

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

解説PDFでは上記範囲、再利用可能な標準解法、3段階例題、過去問対応表、公式まとめを収録した。代表計算の独立再計算もPASS。

複素数はTopic 03、極形式・フェーザはTopic 04、空間ベクトルはTopic 05、微積分は後続Topicへ送る。体系的なRLC回路解析も本Topicへ追加しない。

## 次に行うこと

Topic 02の練習PDF（解答・完全解説付き）を作成する。

三種仕様どおり原則12問以上、少なくとも半数を五肢択一とし、基礎20〜30%、本試験標準50〜60%、複合・応用約20%を目安にする。問題・解説は現行EXAM_ALIGNMENTと解説本文の範囲から追加しない。

その後はPowerPoint→完成後独立再解答→最終QAの順序を崩さない。
