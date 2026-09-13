# HANDOFF - 電験二種「電気数学」

更新日: 2026-09-13

## 現在地

Topic 01 `複素数・複素指数・フェーザ計算` は `completed`。

Topic 02 `ベクトルと座標変換` は `completed`。

Topic 03 `偏微分・全微分` は完成後独立再解答まで完了。最終QAのみ未完了。

完成数: `2 / 20`

current_status: `topic_03_exam_reanswer_complete`

active_topic: `03 偏微分・全微分`

## Topic 03 EXAM_ALIGNMENT

記録:
`topics/03_partial_total_differentials/03_partial_total_differentials.md`

完成後独立再解答記録:
`topics/03_partial_total_differentials/03_partial_total_differentials_exam_reanswer.md`

品質ゲート対象:
- R7 一次 理論 問2 (2)〜(5)
- R7 一次 理論 問4 (1)〜(3)
- R6 一次 理論 問8 (1)〜(3)
- R1 一次 理論 問1 (1)〜(4)
- H21 一次 理論 問7 (1)〜(2)

計5問・16小問。制作前独立再解答、完成後独立再解答とも16/16小問で公式解答と一致。

固定範囲:
- 偏微分
- 全微分
- 多変数関数
- 全時間微分
- 一次近似
- 絶対感度・相対感度

R7・R6の二次「電力・管理」「機械・制御」も確認済みだが、本Topicの固定範囲だけで完結する直接問題は採用しない。極値・最適条件はTopic 04、一般行列はTopic 11、微分方程式はTopic 07、反復計算・最適化はTopic 18・19へ送る。

## 今回追加した成果物

`topics/03_partial_total_differentials/03_partial_total_differentials_exam_reanswer.md`

完成教材から次を再導出した。

- R7 問2: `W=1/2 L1I1^2+1/2 L2I2^2+M0I1I2cosθ`、`∂W/∂θ=-M0I1I2sinθ`、`Φ1=L1I1+M0I2cosωt`、`e=ωM0I2sinωt`
- R7 問4: `Es=(1-k)E`、`Ex=kE`、平衡条件から `Zx={k/(1-k)}Zs`
- R6 問8: `G=A/(1+AH)`、`|AH|≫1` で `G≈1/H`、`S_A^G=1/(1+AH)` よりA変動への低感度
- R1 問1: `Q=It`、`E=It/(εS)`、`D=It/S`、`J=∂D/∂t=I/S`、`I=SJ`
- H21 問7: `Δn=Δp`、`R=K(n0Δp+p0Δn+ΔnΔp)`、条件確認後 `R≈Kn0Δp`

公式解答との照合結果は5問・対象16小問すべて一致。固定範囲外の論点は追加していない。

## 次に行うこと

Topic 03の最終QAを行う。

確認対象:
- source Markdown
- 解説PDF
- 練習PDF
- 解説画像PowerPoint
- 完成後独立再解答記録

確認項目:
- EXAM_ALIGNMENTの5問・16小問が全成果物と再解答記録で欠落なく接続されていること
- 数式、符号、単位、近似条件、相対感度の説明に矛盾がないこと
- PDF・PowerPointに文字欠け、重なり、はみ出し、黒塗り、空白ページ・スライドがないこと
- Topic 04/07/11/18/19の後続論点を先取りしていないこと
- 未確認の新幹線実車値・特性式・感度係数を追加していないこと

全項目PASSの場合のみTopic 03を `completed` にし、完成数を `3 / 20` へ更新してTopic 04へ進む。
