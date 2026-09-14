# HANDOFF - 電験二種「電気数学」

更新日: 2026-09-15

## 現在地

Topic 01 `複素数・複素指数・フェーザ計算` は `completed`。
Topic 02 `ベクトルと座標変換` は `completed`。
Topic 03 `偏微分・全微分` は `completed`。
Topic 04 `微分による極値・最適条件` は `completed`。
Topic 05 `積分によるエネルギー計算` は `completed`。

Topic 06 `微積分で新幹線の運転曲線を解析する` は、制作前EXAM_ALIGNMENT＋制作前独立検証＋解説本文＋3段階例題＋解説PDF＋練習問題source＋練習PDF＋解説画像PowerPoint＋PowerPoint QA＋完成後独立再解答＋最終QAまで完了。最終QAで指摘されたsource Markdownの旧進捗2箇所は実成果物へ同期済み。現在は最終QA再判定待ち。

完成数: `5 / 20`

current_status: `topic_06_source_progress_synced`

active_topic: `06 微積分で新幹線の運転曲線を解析する`

## Topic 06 source

`topics/06_calculus_train_curve/06_calculus_train_curve.md`

最終QAで指摘された進捗記録不整合2箇所は同期済み:
- `## 状態` を実成果物の現在地へ更新
- `## 次工程` を最終QA再判定へ更新

教材本文・固定EXAM_ALIGNMENT・数式・例題・問題・PDF・PowerPointの技術内容は変更していない。

## Topic 06 解説PDF

`topics/06_calculus_train_curve/06_calculus_train_curve_explanation.pdf`

- A4縦2ページ
- 固定EXAM_ALIGNMENT 5問・15対象項目を反映
- 中心式・解法手順・3段階例題・頻出ミス・範囲境界を収録
- 200 dpiで2 / 2ページ表示QA PASS
- 文字欠け・黒四角・重なり・クリップ 0件
- 教育用モデル値と実車値を区別
- Topic 07以降・未確認実車値の追加 0件

## Topic 06 練習問題source

`topics/06_calculus_train_curve/06_calculus_train_curve_practice.md`

- 全12問
- 一次型8問
- 二次記述型4問
- 解答・完全解説付き
- 独立計算QA `12 / 12 PASS`
- 一次型8問は正答一意
- 教材外知識補完0件
- 固定範囲外追加0件

## Topic 06 練習PDF

`topics/06_calculus_train_curve/06_calculus_train_curve_practice.pdf`

- A4縦6ページ
- 全12問（一次型8問＋二次記述型4問）と完全解説を反映
- 固定EXAM_ALIGNMENT 5問・15対象項目を維持
- 200 dpi全6ページ表示QA `PASS`
- 文字抽出QA `PASS`
- 文字欠け・黒四角・重なり・クリップ 0件
- 教材外知識補完0件
- 固定範囲外追加0件
- 未確認の実車運転曲線・実車回生効率の追加0件

## Topic 06 解説画像PowerPoint

`topics/06_calculus_train_curve/06_calculus_train_curve_images.pptx`

QA記録:
`topics/06_calculus_train_curve/06_calculus_train_curve_powerpoint_qa.md`

- 16:9、全5スライド
- Slide 1: 中心式と x-t / v-t / v-x の読み分け
- Slide 2: R5/R3/H28へ接続する `F→a→v→x`
- Slide 3: `a=v dv/dx`、`t=∫dx/v(x)`、距離積分
- Slide 4: H25/H23へ接続する `P=Fv` / `P=Tω` とエネルギー収支
- Slide 5: 固定5過去問・15対象項目対応表と範囲境界
- 全5スライド表示QA `PASS`
- overflow 0件
- ZIP整合性 `PASS`
- 文字切れ・重なり・空白ページ・文字化け 0件
- 固定範囲外追加0件
- 未確認実車値追加0件

## Topic 06 完成後独立再解答

`topics/06_calculus_train_curve/06_calculus_train_curve_exam_reanswer.md`

- 固定EXAM_ALIGNMENT 一次4問＋二次1問、計5問・15対象項目を完成教材の式・解法から再導出
- R5 一次 理論 問6: `5 / 5 PASS`
- R3 一次 理論 問6: `5 / 5 PASS`
- H28 一次 理論 問4: `3 / 3 PASS`
- H25 一次 機械 問3 (1): `1 / 1 PASS`
- H23 二次 電力・管理 問5 (1)-[A]: `1 / 1 PASS`
- 合計 `15 / 15 PASS`
- 公式解答・標準解答と全件一致
- 教材外知識補完0件
- 固定範囲外追加0件
- 未確認実車値依存0件

## Topic 06 最終QA

`topics/06_calculus_train_curve/06_calculus_train_curve_final_qa.md`

前回判定: `NEEDS_REVISION / IN_PROGRESS`

PASS項目:
- 必須成果物実在
- 二種相当EXAM_ALIGNMENT 5問・15対象項目
- 二次試験対応
- 完成後独立再解答 `15 / 15 PASS`
- 教材外知識補完0件
- SPEC外内容の非混入
- PDF / PowerPoint表示QA

前回FAIL項目:
- source Markdown進捗記録と実成果物の整合

このFAIL原因は今回のsource同期で解消済み。最終QA記録自体はまだ再判定していない。

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
完成後独立再解答・公式解答照合: `15 / 15 PASS`。
教材外知識補完: 0件。
固定範囲外追加: 0件。

練習問題での接続:
- R5: 問2、問10
- R3: 問4、問9
- H28: 問5、問9
- H25: 問8
- H23: 問11、問12

## 範囲境界

- Topic 07以降の一階・二階常微分方程式一般論を先取りしない。
- ラプラス変換・伝達関数・制御系を先取りしない。
- 半導体の移動度・電流、インバータ制御、ガバナ・周波数特性を追加しない。
- 公開ダイヤから詳細な実車運転曲線を推定しない。
- 未確認の実車回生効率を仮定しない。

## 次に行うこと

Topic 06の最終QAを再判定する。教材本文、固定EXAM_ALIGNMENT、数式、例題、問題、PDF、PowerPointの技術内容は変更しない。前回FAILだったsource進捗記録整合が解消され、全品質ゲートPASSを確認できた場合のみ `completed` とする。
