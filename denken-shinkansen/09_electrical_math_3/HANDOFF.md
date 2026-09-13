# HANDOFF - 電験三種「電気数学」

更新日: 2026-09-14

## 現在地

Topic 01 `単位・指数・有効数字` は `completed`。

Topic 02 `三角比・三角関数` は `completed`。

Topic 03 `複素数` は `completed`。

Topic 04 `極形式・フェーザ` は `completed`。

完成数: `4 / 12`

current_status: `topic_04_completed`

active_topic: `05 ベクトル`

## Topic 04 最終QA結果

判定: `PASS / completed`

前回 `NEEDS_REVISION` の原因だったsource Markdownの進捗記録不整合を修正後、最終QAを再実施した。

確認結果:
- 必須成果物: PASS
- 三種公式過去問5問・6小問のEXAM_ALIGNMENT: PASS
- 複数系統の参考教材確認: PASS
- 制作前独立検証: PASS
- 完成後独立再解答: 5問・6小問すべて公式解答と一致
- 解説PDF・練習PDF・PowerPoint: 既実施表示QA対象と現行blobが一致
- 固定範囲外の新規説明追加: 0件
- 未確認実車値の追加: 0件
- source進捗記録整合: PASS

最終QA記録:
`topics/04_polar_form_phasor/04_polar_form_phasor_final_qa.md`

## Topic 04 成果物

source Markdown:
`topics/04_polar_form_phasor/04_polar_form_phasor.md`

解説PDF:
`topics/04_polar_form_phasor/04_polar_form_phasor_explanation.pdf`

練習PDF:
`topics/04_polar_form_phasor/04_polar_form_phasor_practice.pdf`

解説画像PowerPoint:
`topics/04_polar_form_phasor/04_polar_form_phasor_images.pptx`

完成後独立再解答記録:
`topics/04_polar_form_phasor/04_polar_form_phasor_exam_reanswer.md`

## Topic 04 完成後独立再解答

- R6上 理論 問9: (2) = 公式 (2) PASS
- R6上 理論 問15: (a)(4), (b)(3) = 公式一致 PASS
- R5下 機械 問5: (3) = 公式 (3) PASS
- R5上 理論 問9: (3) = 公式 (3) PASS
- R3 理論 問8: (5) = 公式 (5) PASS

5問・6小問すべて一致。

## Topic 04 固定範囲

- `a+jb`
- `r∠θ`
- 直交形式と極形式の相互変換
- 大きさと偏角、象限確認
- 極形式の掛け算・割り算
- `j=1∠90°`, `-j=1∠-90°`
- 正弦波交流のフェーザ表示
- 基準位相、進み・遅れ、位相差
- 最大値と実効値の区別
- `V=ZI`, `Z=V/I` の極形式計算
- フェーザ図
- 同一角周波数の正弦波に対するフェーザ法の成立条件
- `交流25 kV` を大きさと位相を持つフェーザとして表す数学例

空間ベクトルはTopic 05へ送る。RLC共振、三相結線、力率改善、複素電力、対称座標法等をTopic 04へ新規追加しない。未確認の新幹線実設備値を追加しない。

## 次に行うこと

Topic 05 `ベクトル` の制作前EXAM_ALIGNMENTを行う。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md` の範囲内で、直近年度優先の公式過去問を原則5問以上調査し、要求事項を固定してから本文制作へ進む。Topic 04へ追加変更は行わない。
