# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-13

## 現在地

Topic 01 `25kV架線を一つの等価回路にする` は `completed`。

Topic 02 `架線は長くなるとなぜ電圧が落ちる？` は練習PDFまで完了。

完成数: `1 / 21`

current_status: `topic_02_practice_pdf_complete`

## Topic 02 現行成果物

解説source:
`topics/02_catenary_voltage_drop/02_catenary_voltage_drop.md`

練習source:
`topics/02_catenary_voltage_drop/02_catenary_voltage_drop_practice.md`

解説PDF:
`topics/02_catenary_voltage_drop/02_catenary_voltage_drop_explanation.pdf`

練習PDF:
`topics/02_catenary_voltage_drop/02_catenary_voltage_drop_practice.pdf`

解説PDFはA4縦5ページ、180 dpiの全5ページVisual QA PASS。

練習PDFはA4縦8ページ。一次試験型8問（全問五肢択一）＋直接関連する二次試験接続型4問（記述式）の計12問を収録し、解答・完全解説付き。200 dpiレンダリングで8 / 8ページVisual QA PASS、PDF preflight PASS。

PowerPoint・完成後独立再解答は未作成。

## Topic 02 EXAM_ALIGNMENT

品質ゲート対象は6問。

一次「理論」:
- R6 問2(3): `R=l/(σS)`、単位長さ直流電圧
- R1 問5(1): 一様電流密度 `I=JS`
- H27 問1(3)(4): `J(r)`、局所オーム則 `J=σE`

二次「電力・管理」:
- R5 問4(1): 三相配電線の電圧降下
- R1 問4(2): 分布負荷の抵抗損 `∫I(x)^2 r dx`
- H27 問3: 分布負荷の抵抗分電圧降下 `∫I(x)r dx`

制作前独立検証: `6 / 6 PASS`

練習PDFでは、一次3問の要求を問1・2・5・6・10、二次3問の要求を問8・9・11・12へ対応付けた。

範囲は抵抗率、導電率、温度係数、電流密度、電圧降下、ジュール損、電力損失、`R=ρl/S` と、選定二次問題へ直接必要な最小限の線路電圧降下・分布負荷積分に限定している。

## 次に行うこと

Topic 02の解説画像PowerPointを作成する。

一次理論3問の導電率・電流密度・局所オーム則と、直接関連する二次3問の三相線路電圧降下・分布負荷積分が図解だけでも追える構成にする。仕様外論点は追加しない。

PowerPoint完成後は、完成後独立再解答→最終QAの順序を崩さない。
