# HANDOFF - 電験二種「電気数学」

更新日: 2026-09-15

## 現在地

Topic 01 `複素数・複素指数・フェーザ計算` は `completed`。
Topic 02 `ベクトルと座標変換` は `completed`。
Topic 03 `偏微分・全微分` は `completed`。
Topic 04 `微分による極値・最適条件` は `completed`。
Topic 05 `積分によるエネルギー計算` は `completed`。
Topic 06 `微積分で新幹線の運転曲線を解析する` は `completed`。

完成数: `6 / 20`

current_status: `topic_06_completed`

active_topic: `07 一階常微分方程式`

## Topic 06 最終状態

source:
`topics/06_calculus_train_curve/06_calculus_train_curve.md`

解説PDF:
`topics/06_calculus_train_curve/06_calculus_train_curve_explanation.pdf`

練習source:
`topics/06_calculus_train_curve/06_calculus_train_curve_practice.md`

練習PDF:
`topics/06_calculus_train_curve/06_calculus_train_curve_practice.pdf`

PowerPoint:
`topics/06_calculus_train_curve/06_calculus_train_curve_images.pptx`

PowerPoint QA:
`topics/06_calculus_train_curve/06_calculus_train_curve_powerpoint_qa.md`

完成後独立再解答:
`topics/06_calculus_train_curve/06_calculus_train_curve_exam_reanswer.md`

最終QA:
`topics/06_calculus_train_curve/06_calculus_train_curve_final_qa.md`

最終QA再判定: `PASS / completed`。

## Topic 06 品質ゲート結果

固定EXAM_ALIGNMENTは一次4問＋二次1問、計5問・15対象項目。

- R5 一次 理論 問6 (1)〜(5): `5 / 5 PASS`
- R3 一次 理論 問6 (1)〜(5): `5 / 5 PASS`
- H28 一次 理論 問4 (1)〜(3): `3 / 3 PASS`
- H25 一次 機械 問3 (1): `1 / 1 PASS`
- H23 二次 電力・管理 問5 (1)-[A]: `1 / 1 PASS`
- 合計: `15 / 15 PASS`

- 公式解答・標準解答と全件一致
- 教材外知識補完: 0件
- 固定範囲外追加: 0件
- 未確認実車値依存: 0件
- 解説PDF表示QA: PASS
- 練習PDF表示QA・文字抽出QA: PASS
- PowerPoint表示QA・overflow・ZIP整合性: PASS
- 前回FAILだったsource進捗記録不整合: 解消済み

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

Topic 07以降の常微分方程式一般論、ラプラス変換、伝達関数、半導体の移動度・電流、インバータ制御、ガバナ・周波数特性は追加していない。公開ダイヤから詳細な実車運転曲線を推定せず、未確認の実車回生効率も真値化していない。

## Topic 07 固定範囲

テーマ: `一階常微分方程式`

系列SPECで扱う内容:
- 変数分離形
- 一階線形微分方程式
- 初期条件
- 同次解・特解の基本
- 指数応答
- 時定数

代表例:
- `L di/dt + Ri = V`
- RC・RL・一次遅れ

Topic 08以降の二階常微分方程式、ラプラス変換、伝達関数等を先取りしない。

## 次に行うこと

Topic 07 `一階常微分方程式` の制作前EXAM_ALIGNMENTを行う。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md` の固定範囲を維持し、公式過去問を直近年度優先で調査する。二種相当の品質ゲート対象を一次・二次合わせて原則5問以上選定し、二次試験対応論点が確認できる場合は最低1問含める。件数合わせでTopic 08以降やSPEC外論点を追加しない。
