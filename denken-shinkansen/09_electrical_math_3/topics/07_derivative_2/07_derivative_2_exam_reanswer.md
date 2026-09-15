# Topic 07 完成後独立再解答記録

対象: `07 微分② 速度を微分すると加速度`

実施日: 2026-09-15

## 再独立解答

判定: `5 / 5 PASS`

固定EXAM_ALIGNMENT 5問について、完成教材に収録した式・解法手順から解法を再構成し、その後に電気技術者試験センター公式解答と照合した。固定5問、Topic 07の数学範囲、後続Topicとの境界は変更していない。

| 過去問 | 完成教材だけによる再導出 | 再解答 | 公式解答 | 判定 |
|---|---|---:|---:|---|
| R6上 理論 問7 | `P2=E²R1²R2/[rR1+(r+R1)R2]²` と置く。`dP2/dR2` の符号は `rR1-(r+R1)R2` で決まり、`R2=rR1/(r+R1)` で正から負へ変わるため最大 | (3) | (3) | PASS |
| R5下 理論 問12 | 電子に働く力は正向きに `eE`。`a=eE/m0` は一定なので `v∝t`、`x∝t²`。`K=(1/2)m0v²` より `K∝t²` | (5) | (5) | PASS |
| R3 理論 問7 | `P(R)=(nE)²R/(R+nr)²`。`dP/dR` の符号は `nr-R` で決まり `R=nr` で最大。よって `I=nE/(nr+R)=E/(2r)` | (4) | (4) | PASS |
| R1 理論 問12 | `F=qE=ma` より `a=qE/m`。静止から距離 `d/2` を進むので `d/2=(1/2)at²`、したがって `t=sqrt(md/(qE))` | (1) | (1) | PASS |
| H27 理論 問12 | `a=eE/m`、偏向板通過時間 `l/v` より `u=elE/(mv)`。偏向板中心から蛍光面までを `d`、`l≪d` として板内・板外の変位を整理すると `X=eldE/(mv²)` | (5) | (5) | PASS |

## 公式解答照合

再導出後、試験センター公式解答と照合し、`(3), (5), (4), (1), (5)` で5問すべて一致した。

- R6上: https://www.shiken.or.jp/chief/upload/20240818_ch_third_a01.pdf
- R5下: https://www.shiken.or.jp/chief/upload/20240324_ch_third_a01.pdf
- R3: https://www.shiken.or.jp/chief/upload/20210822_ch_third_a01.pdf
- R1: https://www.shiken.or.jp/chief/upload/20190901_ch_third_a01.pdf
- H27: https://www.shiken.or.jp/chief/upload/20150906_ch_third_a01.pdf

## 品質ゲート

- 固定EXAM_ALIGNMENT変更: 0件
- 完成教材だけで公式・接続式を選択: PASS
- 完成教材だけで途中式を構成: PASS
- 完成教材だけで選択肢まで到達: `5 / 5 PASS`
- 公式解答との一致: `5 / 5 PASS`
- 教材外知識による補完: 0件
- Topic 08以降の数学論点追加: 0件
- 電子回路・ブラウン管等の専門体系説明追加: 0件
- 未確認新幹線実値追加: 0件

過去問対応品質ゲートはPASS。Topic 07はまだ最終QA未実施のため、この段階では `completed` にしない。

## 次工程

Topic 07 の最終QAを実施し、必須成果物、固定EXAM_ALIGNMENT、完成後独立再解答 `5 / 5 PASS`、表示QA、進捗記録、仕様境界を確認する。
