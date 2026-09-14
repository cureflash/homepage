# HANDOFF - 電験三種「電気数学」

更新日: 2026-09-15

## 現在地

Topic 01〜06は `completed`。

Topic 06 `微分① ダイヤの傾きは速度` は最終QA再判定まで完了し、`PASS / completed`。補強後の完成教材だけで固定4問を再独立解答し、公式解答と `4 / 4` 一致。教材外知識補完0件、固定範囲外追加0件、未確認新幹線実値追加0件。

前回最終QAで唯一FAILだった主source `06_derivative_1.md` の進捗記録不整合は解消済み。必須成果物、既存表示QA、固定EXAM_ALIGNMENT、仕様境界、GitHub正本の進捗整合を再確認し、全品質ゲートPASSとした。

完成数: `6 / 12`

current_status: `topic_06_completed`

active_topic: `07 微分② 速度を微分すると加速度`

## Topic 06 固定EXAM_ALIGNMENT

品質ゲート対象は次の4問で固定。

- R7上 理論 問13: トランジスタ静特性グラフから局所的な `ΔI/ΔV` とその逆数を読む
- R6下 理論 問3: 直線的な磁束変化の `ΔΦ/Δt` を計算する
- R5上 理論 問10: `i-t` 折れ線グラフの各区間で `Δi/Δt` を比較する
- R4下 理論 問7: 20℃と21℃の抵抗値から有限区間の変化量・変化率を式で扱う

制作前独立計算・公式照合: `4 / 4 PASS`

三種は原則5問以上だが、追加候補はTopic 07以降の極値・2階微分、Topic 08の積分、Topic 10の指数関数・RC/RL過渡現象、またはレンツの法則等の専門論点を必要とするため採用しない。H16理論問9はR5上理論問10と同型のため件数合わせで重複カウントしない。

## 補強と完成後独立再解答

初回の完成後独立再解答は `0 / 4 PASS / NEEDS_REVISION`。不足した前提だけを補強source/PDFへ最小追加した。

1. R7上 理論 問13: `h_fe=I_C/I_B`
2. R6下 理論 問3: `|e|=N|dΦ/dt|`
3. R5上 理論 問10: `|v|=L|di/dt|`
4. R4下 理論 問7: `R(T+ΔT)=R(T)(1+αΔT)` と `r=R1R2/(R1+R2)`

補強後の完成教材だけで固定4問を再独立解答した結果:

- R7上 理論 問13: `(2)` PASS
- R6下 理論 問3: `(2)` PASS
- R5上 理論 問10: `(4)` PASS
- R4下 理論 問7: `(2)` PASS

公式解答照合 `4 / 4 PASS`。詳細記録: `topics/06_derivative_1/06_derivative_1_exam_reanswer.md`

## 最終QA

記録: `topics/06_derivative_1/06_derivative_1_final_qa.md`

最終判定: `PASS / completed`

- 必須成果物: PASS
- 固定EXAM_ALIGNMENT 4問: PASS
- 制作前独立検証: `4 / 4 PASS`
- 補強後完成教材による独立再解答: `4 / 4 PASS`
- 教材外補完: 0件
- 固定範囲外追加: 0件
- 未確認実車値追加: 0件
- 仕様境界: PASS
- 表示QA・成果物整合: PASS
- GitHub正本の進捗整合: PASS

## Topic 06 制作範囲

扱う内容:
- 平均変化率
- 接線
- 微分係数
- 導関数
- 多項式の微分
- 三角関数の微分
- 合成関数の基本
- `v(t)=dx/dt`
- 区分的直線グラフの傾き比較
- 局所的な `ΔI/ΔV` と逆数
- 有限変化・相対変化
- 固定4過去問を完結させるための上記4つの最小接続

扱わない内容:
- 極値・最大最小、2階微分、加速度: Topic 07
- 積分: Topic 08
- 電荷・磁束等の微分公式の体系説明: Topic 09
- 指数関数、RC/RL過渡現象: Topic 10
- 半導体・電磁誘導・自己誘導・温度特性の体系説明

## 既存成果物

- `topics/06_derivative_1/06_derivative_1.md`
- `topics/06_derivative_1/06_derivative_1_revision_supplement.md`
- `topics/06_derivative_1/06_derivative_1_exam_reanswer.md`
- `topics/06_derivative_1/06_derivative_1_final_qa.md`
- `topics/06_derivative_1/06_derivative_1_explanation.pdf`
- `topics/06_derivative_1/06_derivative_1_practice.md`
- `topics/06_derivative_1/06_derivative_1_practice.pdf`
- `topics/06_derivative_1/06_derivative_1_images.pptx`
- `topics/06_derivative_1/06_derivative_1_revision_supplement.pdf`

## 次に行うこと

Topic 07「微分② 速度を微分すると加速度」の制作前EXAM_ALIGNMENT。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md` の固定範囲に従い、直近年度を優先して公式過去問を調査し、Topic 07だけで直接対応できる問題を選定する。件数合わせの仕様外論点追加はしない。
