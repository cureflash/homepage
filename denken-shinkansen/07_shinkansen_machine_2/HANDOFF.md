# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-13

## 現在地

Topic 01 `0系の主変圧器を等価回路で解剖する` は最終QAまでPASSし、`completed`。

Topic 02 `0系の直流主電動機はどんな特性だった？` も最終QAまでPASSし、`completed`。

完成数: `2 / 22`

active topic: `03 0系を210km/hまで加速させる`

current status: `topic_02_completed`

## Topic 02 完成成果物

source Markdown:
`topics/02_0series_dc_motor_characteristics/02_0series_dc_motor_characteristics.md`

解説PDF:
`topics/02_0series_dc_motor_characteristics/02_0series_dc_motor_characteristics_explanation.pdf`

練習PDF:
`topics/02_0series_dc_motor_characteristics/02_0series_dc_motor_characteristics_practice.pdf`

解説画像PowerPoint:
`topics/02_0series_dc_motor_characteristics/02_0series_dc_motor_characteristics_images.pptx`

最終QA記録:
`topics/02_0series_dc_motor_characteristics/02_0series_dc_motor_characteristics_final_qa.md`

制作前EXAM_ALIGNMENT:
- R6 一次 機械 問2
- H28 一次 機械 問1
- H28 一次 機械 問5
- H26 一次 機械 問5
- H24 二次 機械・制御 問1

一次4問＋二次記述1問、計5問。ゲート対象10小問の制作前独立検証・完成後独立再解答はいずれも10 / 10で公式解答と整合し、教材外知識補完0件。

最終QAでは、必須4成果物の実在、EXAM_ALIGNMENT、式・数値・単位・丸め、3段階例題の再計算、既実施PDF/PPTX表示・構造QAと現行blob SHAの対応を確認してPASSした。

H24二次 問1の対象(1)〜(4)は次で一致:
- 電機子抵抗 `0.500 Ω`
- 定格時逆起電力 `188 V`
- 最大速度 `1480 min^-1`
- 50%トルク・1000 min^-1時端子電圧 `133 V`

本テーマへ追加していない範囲:
- チョッパ制御
- 誘導電動機
- VVVF
- 過渡制御

0系主電動機の形式・定格値・実測特性は一次資料未確認のため追加していない。教材中の数値例・特性曲線は電験学習用の仮定値・模式図として扱っている。

## 次に行うこと

Topic 03 `0系を210km/hまで加速させる` の制作前EXAM_ALIGNMENTを行う。

系列SPECの固定範囲は、電圧制御、タップ制御、弱め界磁、定トルク領域、定出力領域、歯車比、車輪径、モーター回転速度、列車速度、走行抵抗の基本、加速度。

公式過去問を一次・二次合わせ原則5問以上調査し、二次対象論点で該当する記述式が確認できる場合は最低1問含める。要求知識・式・設問型・教材内必要説明をsource Markdownへ先に固定し、仕様外論点や未確認実車値を追加しない。