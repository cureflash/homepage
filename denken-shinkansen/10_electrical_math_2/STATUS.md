# STATUS - 電験二種「電気数学」

更新日: 2026-09-14

## 状態

- active_series: `10_electrical_math_2`
- exam_aligned_completed_topics: 5 / 20
- current_status: `topic_06_explanation_pdf_complete`
- last_completed_topic: `05 積分によるエネルギー計算`
- active_topic: `06 微積分で新幹線の運転曲線を解析する`
- next_start: 固定EXAM_ALIGNMENT 5問・15対象項目と解説PDFの範囲を維持し、練習問題・完全解説を作成する

## Topic 06 制作品質ゲート

- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 公式過去問を直近年度優先で調査
- [x] 一次4問＋二次1問、計5問・15対象項目を選定
- [x] source Markdownへ要求知識・式・設問型・教材内必要説明を固定
- [x] 制作前独立再導出・公式解答照合 15 / 15 PASS
- [x] 教材外知識補完 0件確認
- [x] Topic 07以降・半導体定常ドリフト・インバータ制御・ガバナ特性等を品質ゲート対象から除外
- [x] 解説本文＋3段階例題
- [x] 解説PDF
- [ ] 練習PDF（解答・完全解説付き）
- [ ] 解説画像PowerPoint
- [ ] PowerPoint表示QA
- [ ] 完成後独立再解答
- [ ] 最終QA
- [ ] `completed`

## 今回進めた内容

Topic 06 `微積分で新幹線の運転曲線を解析する` の解説PDFを作成した。

成果物:
`topics/06_calculus_train_curve/06_calculus_train_curve_explanation.pdf`

A4縦2ページ。固定EXAM_ALIGNMENT 5問・15対象項目、中心式、解法手順、3段階例題、頻出ミス、範囲境界を収録し、Topic 07以降の論点・未確認の実車運転曲線は追加していない。

表示QA:
- 2 / 2ページを200 dpiでレンダリング確認
- 文字欠け・黒四角・重なり・クリップ: 0件
- 数式・単位・過去問対応の表示: PASS
- 教育用モデル値と実車値の区別: PASS

制作前独立検証 `15 / 15 PASS`、教材外知識補完 `0件`、固定範囲外追加 `0件` を維持。

## 判定

Topic 06は `explanation_pdf_complete`。完成数は `5 / 20` のまま。次は練習問題・完全解説。
