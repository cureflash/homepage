# HANDOFF - 電験二種「電気数学」

更新日: 2026-09-14

## 現在地

Topic 01 `複素数・複素指数・フェーザ計算` は `completed`。
Topic 02 `ベクトルと座標変換` は `completed`。
Topic 03 `偏微分・全微分` は `completed`。
Topic 04 `微分による極値・最適条件` は `completed`。
Topic 05 `積分によるエネルギー計算` は `completed`。

Topic 06 `微積分で新幹線の運転曲線を解析する` は、制作前EXAM_ALIGNMENT＋制作前独立検証＋解説本文＋3段階例題＋解説PDFまで完了。

完成数: `5 / 20`

current_status: `topic_06_explanation_pdf_complete`

active_topic: `06 微積分で新幹線の運転曲線を解析する`

## Topic 06 source

`topics/06_calculus_train_curve/06_calculus_train_curve.md`

## Topic 06 解説PDF

`topics/06_calculus_train_curve/06_calculus_train_curve_explanation.pdf`

- A4縦5ページ
- 固定EXAM_ALIGNMENT 5問・15対象項目を反映
- 3段階例題を反映
- 200 dpiで5 / 5ページ表示QA PASS
- 文字欠け・黒四角・重なり・クリップ 0件
- 教育用モデル値と実車値を区別
- Topic 07以降・未確認実車値の追加 0件

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

- R5 一次 理論 問6 (1)〜(5): `F=ma`、`a=dv/dt`、`v=dx/dt`、時間積分、初期条件、周期条件
- R3 一次 理論 問6 (1)〜(5): 通過時間、一定加速度、速度・位置積分、区間別変位
- H28 一次 理論 問4 (1)〜(3): `E=V/l`、`F=eE`、`a=F/m*`
- H25 一次 機械 問3 (1): `P=T_Mω_r`、角加速との対応
- H23 二次 電力・管理 問5 (1)-[A]: エネルギー収支から加速を判断

制作前独立再導出・公式解答照合: `15 / 15 PASS`。
教材外知識補完: 0件。
固定範囲外追加: 0件。

## 範囲境界

- Topic 07以降の一階・二階常微分方程式一般論を先取りしない。
- ラプラス変換・伝達関数・制御系を先取りしない。
- 半導体の移動度・電流、インバータ制御、ガバナ・周波数特性を追加しない。
- 公開ダイヤから詳細な実車運転曲線を推定しない。

## 次に行うこと

固定5問・15対象項目と完成した解説PDFの範囲を維持し、練習問題・完全解説を作成する。

この段階ではPowerPoint・完成後独立再解答へ進まない。
