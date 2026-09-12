# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-13

## 現在地

Topic 01 `0系の主変圧器を等価回路で解剖する` は最終QAまでPASSし、`completed`。

完成数: `1 / 22`

active topic: `02 0系の直流主電動機はどんな特性だった？`

current status: `topic_02_exam_alignment_complete`

## Topic 02 制作前EXAM_ALIGNMENT

source Markdown:
`topics/02_0series_dc_motor_characteristics/02_0series_dc_motor_characteristics.md`

選定公式過去問:

- R6 一次 機械 問2
- H28 一次 機械 問1
- H28 一次 機械 問5
- H26 一次 機械 問5
- H24 二次 機械・制御 問1

一次4問＋二次記述1問、計5問。混合問題はTopic 02のSPECに直接対応する小問だけをゲート対象とし、対象10小問の制作前独立検証は10 / 10で公式解答と整合した。

本テーマで固定した範囲:

- 電機子回路 `V=E+I_aR_a`
- 逆起電力 `E=kΦω`
- 電磁トルク `T=kΦI_a`
- 速度式
- 直巻電動機の始動トルク・速度特性
- 弱め界磁
- 出力・損失・効率
- 速度―トルク、速度―出力、電流―速度グラフ

本テーマへ追加しない範囲:

- チョッパ制御
- 誘導電動機
- VVVF
- 過渡制御

これらは選定過去問内に混在していてもTopic 02の完成ゲート対象外とする。

## Topic 01 完成証跡

source Markdown:
`topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit.md`

解説PDF:
`topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_explanation.pdf`

練習PDF:
`topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_practice.pdf`

PowerPoint:
`topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_images.pptx`

完成後独立再解答:
`topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_independent_reanswer.md`

最終QA:
`topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_final_qa.md`

## 次に行うこと

Topic 02の解説本文＋3段階例題を作成する。

制作前EXAM_ALIGNMENTの要求事項をすべて本文節へ対応させ、特にH24二次機械・制御問1の対象(1)〜(4)と同型の「損失→電機子抵抗→逆起電力→速度→部分負荷端子電圧」を途中式付きで解ける状態にする。

0系主電動機の形式・定格値・制御条件など実車情報を使う場合は、鉄道・メーカー等の一次資料で確認し、公開値・計算値・仮定値を区別する。確認できない実車値は推測しない。

完成数は `1 / 22` のまま。解説本文だけでは `completed` にしない。
