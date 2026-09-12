# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-13

## 現在地

Topic 01 `25kV架線を一つの等価回路にする` は `completed`。

Topic 02 `架線は長くなるとなぜ電圧が落ちる？` は完成後独立再解答まで完了。最終QAは未実施。

完成数: `1 / 21`

current_status: `topic_02_exam_reanswer_complete`

## Topic 02 現行成果物

解説source:
`topics/02_catenary_voltage_drop/02_catenary_voltage_drop.md`

練習source:
`topics/02_catenary_voltage_drop/02_catenary_voltage_drop_practice.md`

解説PDF:
`topics/02_catenary_voltage_drop/02_catenary_voltage_drop_explanation.pdf`

練習PDF:
`topics/02_catenary_voltage_drop/02_catenary_voltage_drop_practice.pdf`

解説画像PowerPoint:
`topics/02_catenary_voltage_drop/02_catenary_voltage_drop_images.pptx`

解説PDFはA4縦5ページ、180 dpiの全5ページVisual QA PASS。

練習PDFはA4縦8ページ。一次試験型8問（全問五肢択一）＋直接関連する二次試験接続型4問（記述式）の計12問を収録し、解答・完全解説付き。200 dpiレンダリングで8 / 8ページVisual QA PASS、PDF preflight PASS。

解説画像PowerPointは16:9・7スライド。一次理論3問の導電率・電流密度・局所オーム則と、直接関連する二次3問の三相線路電圧降下・分布負荷積分を図解した。全7スライドのレンダリングQAと `slides_test.py` overflow検査 PASS。

完成後独立再解答は一次3問＋二次3問の6 / 6 PASS。教材外知識による補完0件。

## Topic 02 EXAM_ALIGNMENT

品質ゲート対象は6問。

一次「理論」:
- R6 問2(3): `R=l/(σS)`、単位長さ直流電圧
- R1 問5(1): 一様電流密度 `I=JS`
- H27 問1(3)(4): `J(r)`、局所オーム則 `J=σE`

二次「電力・管理」:
- R5 問4(1): 三相配電線の電圧降下
- R1 問4(2): 分布負荷の抵抗損 `∫I(x)^2 r dx`
- H27 問3: 分布負荷の抵抗分による電圧降下 `∫I(x)r dx`

制作前独立検証: `6 / 6 PASS`

完成後独立再解答: `6 / 6 PASS`

完成後再解答の要点:
- R6 問2(3): `E_DC=I/(σπa²)` → (ル)
- R1 問5(1): `I=πr²i` → (ト)
- H27 問1(3)(4): `J=I/(2πr)`、`J=σE` → (ホ)(ヘ)
- R5 問4(1): `I=29.159 A`、`R+jX=0.8+j2.4 Ω`、進み力率の符号を反映し `6580 V`
- R1 問4(2): `(2/3)Is²Lr`、`(2/5)Is²Lr`、比 `3/5`
- H27 問3: `x=2L/3`、B点給電比 `8/27≈29.6%`

練習PDFでは、一次3問の要求を問1・2・5・6・10、二次3問の要求を問8・9・11・12へ対応付けた。

PowerPointでは、一次3問の要求をスライド2・3、二次3問の要求をスライド5・6へ対応付け、スライド7で6問との対応を一覧化した。

範囲は抵抗率、導電率、温度係数、電流密度、電圧降下、ジュール損、電力損失、`R=ρl/S` と、選定二次問題へ直接必要な最小限の線路電圧降下・分布負荷積分に限定している。

## 次に行うこと

Topic 02の最終QAを行う。

解説source・練習source・解説PDF・練習PDF・PowerPoint・EXAM_ALIGNMENT・完成後独立再解答結果の整合を確認し、仕様外追加、未確認実値、数式・単位・答えの不一致がないことを確認する。最終QAを通過した場合だけ Topic 02を `completed` とする。
