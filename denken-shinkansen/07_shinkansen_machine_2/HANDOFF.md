# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-13

## 現在地

active topic: `01 0系の主変圧器を等価回路で解剖する`

制作前EXAM_ALIGNMENT、選定6問の公式解答照合・要求事項の独立検証、解説本文、解説PDF、練習PDF、解説画像PowerPointに続き、完成後の独立再解答まで完了。完成数は `0 / 22` のまま。

source Markdown:
`topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit.md`

独立再解答記録:
`topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_independent_reanswer.md`

解説PDF:
`topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_explanation.pdf`

練習PDF:
`topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_practice.pdf`

PowerPoint:
`topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_images.pptx`

## 選定済み公式過去問

- R7 一次 機械 問3
- R6 二次 機械・制御 問2
- R3 二次 機械・制御 問2
- R2 二次 機械・制御 問2
- H28 二次 機械・制御 問2
- H27 二次 機械・制御 問2

一次1問＋二次記述5問。

## 完成後独立再解答

6問すべてPASS。

- R7: 選択肢 `(1)リ (2)カ (3)ヲ (4)ロ (5)ニ`、`R=3.00 Ω`, `Z=9.20 Ω`, `X=8.70 Ω`
- R6: `g0=5.00×10^-5 S`, `b0=1.20×10^-4 S`, `R=16 Ω`, `X=12 Ω`, `p=4.0 %`, `q=3.0 %`、電圧変動率5.0 % / 2.5 %
- R3: `%r=0.75 %`, `%x=4.44 %`, `Z=27.2 Ω`, `R=4.54 Ω`, `X=26.8 Ω`, `V2≈423 V`, `QL≈169 kvar`
- R2: 鉄損400 W、定格銅損624 W、最大効率負荷率80.0 %、最大効率99.0 %、30 %負荷・力率60 %で97.5 %
- H28: `g0=2.40×10^-6 S`, `b0=1.99×10^-5 S`, `R=35.7 Ω`, `X≈115 Ω`、全負荷電圧変動率4.09 %、半負荷効率97.7 %、半負荷電圧変動率2.04 %
- H27: 巻数比31.4、定格一次電流15.2 A、短絡インピーダンス3.30 %、`r=5.23 Ω`, `x=13.4 Ω`。フェーザ図を構成し、`qR,qX≪1` を用いて電圧変動率近似式を導出

問題文の数値・条件と完成教材に収録済みの公式・解法だけで途中式・単位・換算側・成立条件を構成できた。計算・導出後に電気技術者試験センターの公式標準解答と照合し、全問一致。教材外知識による補完は不要だった。

## 次に行うこと

Topic 01の最終QAを行う。

確認対象:

- 必須成果物4種と独立再解答記録がGitHub上に実在する
- EXAM_ALIGNMENTの要求事項が解説PDF・練習PDF・PowerPointへ漏れなく反映されている
- source Markdown、PDF、PowerPoint間で式・数値・換算側・単位に矛盾がない
- 0系の公開値・計算値・仮定値が区別され、未確認定数を実値化していない
- 一次1問＋二次5問の独立再解答PASSが維持されている
- PDF/PPTXの既実施レンダリングQA結果と成果物が対応している

すべてPASSした場合のみTopic 01を `completed` とし、完成数を `1 / 22` に更新する。
