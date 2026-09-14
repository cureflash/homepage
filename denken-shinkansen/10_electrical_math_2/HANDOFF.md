# HANDOFF - 電験二種「電気数学」

更新日: 2026-09-14

## 現在地

Topic 01 `複素数・複素指数・フェーザ計算` は `completed`。

Topic 02 `ベクトルと座標変換` は `completed`。

Topic 03 `偏微分・全微分` は `completed`。

Topic 04 `微分による極値・最適条件` は `completed`。

Topic 05 `積分によるエネルギー計算` は `completed`。

Topic 06 `微積分で新幹線の運転曲線を解析する` は制作前EXAM_ALIGNMENT＋制作前独立検証まで完了。

完成数: `5 / 20`

current_status: `topic_06_exam_alignment_complete`

active_topic: `06 微積分で新幹線の運転曲線を解析する`

## Topic 05 完成成果物

source Markdown:
`topics/05_integral_energy/05_integral_energy.md`

解説PDF:
`topics/05_integral_energy/05_integral_energy_explanation.pdf`

練習PDF:
`topics/05_integral_energy/05_integral_energy_practice.pdf`

解説画像PowerPoint:
`topics/05_integral_energy/05_integral_energy_images.pptx`

PowerPoint QA:
`topics/05_integral_energy/05_integral_energy_powerpoint_qa.md`

完成後独立再解答:
`topics/05_integral_energy/05_integral_energy_exam_reanswer.md`

最終QA:
`topics/05_integral_energy/05_integral_energy_final_qa.md`

Topic 05 最終判定: `PASS / completed`、固定6問・16対象項目の完成後独立再解答 `16 / 16 PASS`。

## Topic 06 source

`topics/06_calculus_train_curve/06_calculus_train_curve.md`

## Topic 06 SPEC固定範囲

中心式:
- `v=dx/dt`
- `a=dv/dt`
- `a=v dv/dx`
- `x=∫vdt`
- `t=∫dx/v(x)`
- `E=∫Fdx`

扱う内容:
- 位置―時間
- 速度―時間
- 速度―位置
- 加速度
- 走行距離
- 所要時間
- 牽引仕事
- 回生エネルギー

実在ダイヤと詳細な実車運転曲線・速度曲線は区別する。未確認の実車値は追加しない。

## Topic 06 固定EXAM_ALIGNMENT

品質ゲート対象は一次4問＋二次1問、計5問・15対象項目。

- R5 一次 理論 問6 (1)〜(5)
  - `F=ma`、`a=dv/dt`、`v=dx/dt`
  - 時間積分、初期条件、位置式、周期条件
  - 公式解答: ヘ / ロ / ワ / カ / ニ
- R3 一次 理論 問6 (1)〜(5)
  - 通過時間、一定加速度、速度・位置積分、区間別変位
  - 公式解答: リ / ヘ / ハ / ル / ロ
- H28 一次 理論 問4 (1)〜(3)
  - `E=V/l`、`F=eE`、`a=F/m*`
  - (4)〜(5)の移動度・電流は不採用
  - 公式解答: ヲ / リ / ヌ
- H25 一次 機械 問3 (1)
  - 回転運動の出力 `P=T_Mω_r`
  - 問題文の `T_M=J dω_r/dt+T_L` を角加速の対応として読む
  - (2)以降のインバータ制御は不採用
  - 公式解答: ヨ
- H23 二次 電力・管理 問5 (1)-[A]
  - 機械入力エネルギー > 電気出力エネルギー → 回転子運動エネルギー増加 → 加速
  - 周波数特性・ガバナ等は不採用
  - 標準解答: 加速

制作前独立再導出・公式解答照合は `15 / 15 PASS`。

教材外知識補完: 0件。

固定範囲外追加: 0件。

## 直近年度確認と除外

令和8年度一次理論問1も確認したが、単振動の `d²x/dt²` と二階常微分方程式一般論を要求するため、Topic 08側として不採用。

過渡現象、ラプラス変換、伝達関数、半導体定常ドリフト、インバータ制御、ガバナ・周波数特性をTopic 06の品質ゲート対象へ追加しない。

## 次に行うこと

固定した5問・15対象項目を逆算し、SPEC固定範囲内で解説本文＋3段階例題を作成する。

この段階ではPDF・練習問題・PowerPointへ進まない。完成後独立再解答は成果物完成後に実施する。