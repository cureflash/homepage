# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-13

## 現在地

Topic 01 `25kV架線を一つの等価回路にする` は `completed`。

Topic 02 `架線は長くなるとなぜ電圧が落ちる？` も最終QAまで完了し `completed`。

完成数: `2 / 21`

current_status: `topic_02_completed`

active_topic: `03 25kV架線の周囲にはどんな電界ができる？`

## Topic 02 最終QA

記録:
`topics/02_catenary_voltage_drop/02_catenary_voltage_drop_final_qa.md`

判定: PASS

確認済み:
- 解説source Markdown
- 練習source Markdown
- 解説PDF
- 練習PDF
- 解説画像PowerPoint
- EXAM_ALIGNMENT
- 完成後独立再解答

品質ゲート対象は一次理論3問＋二次電力・管理3問の計6問。完成後独立再解答は6 / 6 PASS、教材外知識補完0件。

教材内の3段階例題と練習問題の代表計算も再計算し、式・数値・単位・丸めの不一致は確認されなかった。

範囲は抵抗率、導電率、温度係数、電流密度、電圧降下、ジュール損、電力損失、`R=ρl/S` と、選定二次問題へ直接必要な最小限の三相線路電圧降下・分布負荷積分に限定している。

磁界、静電容量、表皮効果、コロナ、力率補償一般、RLC一般論は追加していない。実在の新幹線架線の抵抗値・温度・断面積・電流値も一次資料未確認のため実値として追加していない。

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

最終QA:
`topics/02_catenary_voltage_drop/02_catenary_voltage_drop_final_qa.md`

## 次に行うこと

Topic 03 `25kV架線の周囲にはどんな電界ができる？` の制作前EXAM_ALIGNMENTを行う。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md` に従い、電気技術者試験センターの公式過去問を直近年度優先で調査する。本系列は一次「理論」中心なので一次を主対象とし、直接対応する二次問題が存在する場合だけ必要範囲で採用する。要求知識・式・設問型・教材内必要説明をsource Markdownへ先に固定する。
