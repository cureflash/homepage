# HANDOFF - 電験三種「電気数学」

更新日: 2026-09-15

## 現在地

Topic 01〜06は `completed`。

Topic 07 `微分② 速度を微分すると加速度` は制作前EXAM_ALIGNMENTと固定5問の制作前独立計算・公式解答照合まで完了。独立解答は `5 / 5 PASS`。仕様外論点・再出題重複による件数合わせはしていない。

完成数: `6 / 12`

current_status: `topic_07_preproduction_independent_check_complete`

active_topic: `07 微分② 速度を微分すると加速度`

next_start: `Topic 07 解説本文＋3段階例題`

## Topic 07 固定EXAM_ALIGNMENT

品質ゲート対象は次の5問で固定。

- R6上 理論 問7: 可変抵抗の消費電力を一変数関数として表し、極大条件を求める
- R5下 理論 問12: 一様電界中の電子について、一定加速度、速度、移動距離、運動エネルギーの時間依存性を判定する
- R3 理論 問7: 直列電池群と可変抵抗の回路で負荷電力最大条件から電流を求める
- R1 理論 問12: 一様電界中で静止から放出された点電荷の一定加速度運動から移動時間を求める
- H27 理論 問12: ブラウン管偏向板中の電子について、電界による加速度、通過時間、横方向速度、偏向量を求める

制作前独立解答は順に `(3),(5),(4),(1),(5)`。電気技術者試験センター公式解答と全件一致し、`5 / 5 PASS`。

独立計算要点:
- R6上問7: `P2=E²R1²R2/[rR1+(r+R1)R2]²` を微分し、`R2=rR1/(r+R1)` で極大。
- R5下問12: `a=eE/m0` 一定より `v∝t`、`x∝t²`、`K∝t²`。
- R3問7: `P(R)=(nE)²R/(R+nr)²` を微分し `R=nr`、したがって `I=E/(2r)`。
- R1問12: `a=qE/m`、`d/2=(1/2)at²` より `t=sqrt(md/(qE))`。
- H27問12: `a=eE/m`、偏向板通過時間 `l/v` より `u=elE/(mv)`、変位合計 `X=eldE/(mv²)`。

## Topic 07 制作範囲

扱う内容:
- 二階微分
- 速度 `v=dx/dt`
- 加速度 `a=dv/dt=d²x/dt²`
- 増加・減少
- 極大・極小の基本
- 連鎖律の基本
- `a=v dv/dx`
- 発車・加速・定速・惰行・制動の位置・速度・加速度グラフ対応

扱わない内容:
- 積分による一般的な運動公式の導出: Topic 08
- 電荷・電流、磁束・誘導起電力、電力量等の微積分体系: Topic 09
- 指数関数、RC/RL過渡現象、一階微分方程式: Topic 10
- 一般的な特性曲線読解の体系化: Topic 11
- 電子回路、ブラウン管、RLC等の専門解説への範囲拡張

過去問を完結させるために必要な `F=qE`、`F=ma`、直並列抵抗、`P=I²R` は既習の電気・物理前提として最小限接続し、Topic 07の主題へ追加しない。

## 候補除外

- R7下 理論 問12: 正答にTopic 07の微分・加速度計算を必要としない
- R7上 理論 問12: 電界・熱運動・エネルギーが主でTopic 07の操作が必須でない
- R6上 理論 問12: エネルギー保存から速度を求める問題で加速度・二階微分が直接不要
- R4上 理論 問9: RLC専門論点が支配的
- H19 理論 問5: R6上 理論 問7の再出題
- H23 理論 問12: R5下 理論 問12の再出題

## Topic 06 完了記録

Topic 06 `微分① ダイヤの傾きは速度` は `PASS / completed`。補強後の完成教材だけで固定4問を再独立解答し、公式解答と `4 / 4` 一致。教材外知識補完0件、固定範囲外追加0件、未確認新幹線実値追加0件。

固定EXAM_ALIGNMENT:
- R7上 理論 問13
- R6下 理論 問3
- R5上 理論 問10
- R4下 理論 問7

最終QA記録: `topics/06_derivative_1/06_derivative_1_final_qa.md`

## 既存成果物

Topic 07:
- `topics/07_derivative_2/07_derivative_2.md`

Topic 06:
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

固定5問の要求事項をすべて本文へ対応付けたうえで、Topic 07の解説本文と3段階例題を作る。

本文は系列SPEC固定範囲だけで構成し、積分による一般導出、電子回路・ブラウン管の専門解説、RC/RL過渡現象等を先取りしない。仕様外論点追加、再出題の重複カウント、未確認新幹線実値の追加はしない。
