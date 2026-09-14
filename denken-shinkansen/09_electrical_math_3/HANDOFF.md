# HANDOFF - 電験三種「電気数学」

更新日: 2026-09-15

## 現在地

Topic 01〜05は `completed`。

Topic 06 `微分① ダイヤの傾きは速度` は、制作前EXAM_ALIGNMENT、解説本文＋3段階例題、解説PDF、練習source/PDF、解説画像PowerPointまで完成済み。最初の完成後独立再解答は、数学操作自体は4問とも教材内で再構築できたが、問題全体の正答に不足前提があり `0 / 4 PASS / NEEDS_REVISION` だった。

不足4件を補強source/PDFへ最小追加した後、完成教材だけで固定4問を再独立解答し、公式解答と `4 / 4` 一致した。過去問対応品質ゲートはPASS。最終QAは未実施。

完成数: `5 / 12`

current_status: `topic_06_exam_reanswer_passed`

active_topic: `06 微分① ダイヤの傾きは速度`

## Topic 06 固定EXAM_ALIGNMENT

品質ゲート対象は次の4問で固定する。

- R7上 理論 問13: トランジスタ静特性グラフから局所的な `ΔI/ΔV` とその逆数を読む
- R6下 理論 問3: 直線的な磁束変化の `ΔΦ/Δt` を計算する
- R5上 理論 問10: `i-t` 折れ線グラフの各区間で `Δi/Δt` を比較する
- R4下 理論 問7: 20℃と21℃の抵抗値から有限区間の変化量・変化率を式で扱う

制作前独立計算・公式照合: `4 / 4 PASS`

三種は原則5問以上だが、追加候補はTopic 07以降の極値・2階微分、Topic 08の積分、Topic 10の指数関数・RC/RL過渡現象、またはレンツの法則等の専門論点を必要とするため採用しない。H16理論問9はR5上理論問10と同型のため件数合わせで重複カウントしない。

## 最初の完成後独立再解答で不足した前提

| 過去問 | 教材だけでできた数学操作 | 不足していた前提 |
|---|---|---|
| R7上 理論 問13 | 局所的な `ΔI/ΔV` と逆数、`S↔Ω` | 当該設問での `h_fe=I_C/I_B` |
| R6下 理論 問3 | 直線変化から `ΔΦ/Δt=10 Wb/s` | `|e|=N|dΦ/dt|` |
| R5上 理論 問10 | 各区間の `|Δi/Δt|` 比較、`mA/ms=A/s` | `|v|=L|di/dt|` |
| R4下 理論 問7 | `(r21-r20)/r20` の相対変化整理 | 抵抗温度係数の一次関係と並列合成抵抗 |

最初の完成後独立再解答: `0 / 4 PASS / NEEDS_REVISION`。

## 補強と再独立解答

補強source `06_derivative_1_revision_supplement.md` に次だけを追加し、学習用補強PDFへ同期済み。

1. R7上 理論 問13: `h_fe=I_C/I_B`
2. R6下 理論 問3: `|e|=N|dΦ/dt|`
3. R5上 理論 問10: `|v|=L|di/dt|`
4. R4下 理論 問7: `R(T+ΔT)=R(T)(1+αΔT)` と `r=R1R2/(R1+R2)`

補強後の完成教材だけで固定4問を再独立解答した結果:

- R7上 理論 問13: `(2)` PASS
- R6下 理論 問3: `(2)` PASS
- R5上 理論 問10: `(4)` PASS
- R4下 理論 問7: `(2)` PASS

公式解答照合 `4 / 4 PASS`。教材外知識補完0件、固定EXAM_ALIGNMENT変更0件、Topic 07以降の数学論点追加0件、専門分野の体系説明追加0件、未確認新幹線実値追加0件。

詳細記録: `topics/06_derivative_1/06_derivative_1_exam_reanswer.md`

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
- `topics/06_derivative_1/06_derivative_1_explanation.pdf`
- `topics/06_derivative_1/06_derivative_1_practice.md`
- `topics/06_derivative_1/06_derivative_1_practice.pdf`
- `topics/06_derivative_1/06_derivative_1_images.pptx`
- `topics/06_derivative_1/06_derivative_1_revision_supplement.pdf`

## 次に行うこと

Topic 06の最終QAを実施し、必須成果物、固定EXAM_ALIGNMENT、補強後 `4 / 4 PASS`、表示QA、進捗記録、仕様境界を確認する。
