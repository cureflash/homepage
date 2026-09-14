# STATUS - 電験二種「電気数学」

更新日: 2026-09-14

## 状態

- active_series: `10_electrical_math_2`
- exam_aligned_completed_topics: 5 / 20
- current_status: `topic_06_powerpoint_complete`
- last_completed_topic: `05 積分によるエネルギー計算`
- active_topic: `06 微積分で新幹線の運転曲線を解析する`
- next_start: Topic 06の完成後独立再解答を、保存済み正答を先に見ず完成教材だけで実施する。固定EXAM_ALIGNMENT 5問・15対象項目を全件再導出し、教材外知識補完0件を確認する

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
- [x] 練習問題source（一次型8問＋二次記述4問・完全解説）
- [x] 練習PDF（解答・完全解説付き）
- [x] 解説画像PowerPoint
- [x] PowerPoint表示QA
- [ ] 完成後独立再解答
- [ ] 最終QA
- [ ] `completed`

## 今回進めた内容

Topic 06 `微積分で新幹線の運転曲線を解析する` の解説画像PowerPointを完成した。

成果物:
`topics/06_calculus_train_curve/06_calculus_train_curve_images.pptx`

QA記録:
`topics/06_calculus_train_curve/06_calculus_train_curve_powerpoint_qa.md`

構成・QA:
- 16:9、全5スライド
- 時間領域 `F→a→v→x`、位置領域 `a=v dv/dx` / `t=∫dx/v(x)`、仕事・回生エネルギー、固定EXAM_ALIGNMENT対応表を可視化
- 固定EXAM_ALIGNMENT 一次4問＋二次1問、計5問・15対象項目を維持
- 全5スライド表示QA `PASS`
- overflow 0件
- ZIP整合性 `PASS`
- 文字切れ・重なり・空白ページ・文字化け 0件
- 教材外知識補完 0件
- 固定範囲外追加 0件
- 未確認の実車運転曲線・実車回生効率の追加 0件

## 判定

Topic 06は `powerpoint_complete`。完成数は `5 / 20` のまま。次は完成後独立再解答。
