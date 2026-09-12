# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-13

## 現在地

Topic 01 `25kV架線を一つの等価回路にする` は `completed`。

Topic 02 `架線は長くなるとなぜ電圧が落ちる？` は解説PDFまで完了。

完成数: `1 / 21`

current_status: `topic_02_explanation_pdf_complete`

## Topic 02 現行成果物

source Markdown:
`topics/02_catenary_voltage_drop/02_catenary_voltage_drop.md`

解説PDF:
`topics/02_catenary_voltage_drop/02_catenary_voltage_drop_explanation.pdf`

解説PDFはA4縦5ページ。180 dpiレンダリングによる全5ページVisual QA PASS。解説本文、基本式・成立条件、三相線路への最小接続、分布負荷積分、3段階例題、頻出ミス、過去問対応表、公式・解法まとめを収録済み。

練習PDF・PowerPoint・完成後独立再解答は未作成。

## Topic 02 EXAM_ALIGNMENT

品質ゲート対象は6問。

一次「理論」:
- R6 問2(3): `R=l/(σS)`、単位長さ直流電圧
- R1 問5(1): 一様電流密度 `I=JS`
- H27 問1(3)(4): `J(r)`、局所オーム則 `J=σE`

二次「電力・管理」:
- R5 問4(1): 三相配電線の電圧降下
- R1 問4(2): 分布負荷の抵抗損 `∫I(x)²r dx`
- H27 問3: 分布負荷の抵抗分電圧降下 `∫I(x)r dx`

制作前独立検証: `6 / 6 PASS`

解説本文と解説PDFでは上記6問の要求事項を対応付け済み。系列SPEC由来の温度係数も、過去問出題実績とは区別して収録した。

範囲は抵抗率、導電率、温度係数、電流密度、電圧降下、ジュール損、電力損失、`R=ρl/S` と、選定二次問題へ直接必要な最小限の線路電圧降下・分布負荷積分に限定している。

## 次に行うこと

Topic 02の練習PDF（解答・完全解説付き）を作成する。

一次「理論」を中心としつつ、EXAM_ALIGNMENTで直接対応として固定した二次「電力・管理」の線路電圧降下・分布負荷積分へ接続できる問題を含める。仕様外論点は追加しない。

練習PDF完成後は、PowerPoint→完成後独立再解答→最終QAの順序を崩さない。
