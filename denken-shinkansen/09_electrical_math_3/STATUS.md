# STATUS - 電験三種「電気数学」

更新日: 2026-09-12

## 状態
- active_series: `09_electrical_math_3`
- exam_aligned_completed_topics: 0 / 12
- current_status: `topic_01_powerpoint_complete`
- last_completed_topic: `none`
- active_topic: `01 単位・指数・有効数字`
- next_start: Topic 01の完成教材だけで選定5問を独立再解答し、最終QAを行う

## Topic 01 品質ゲート進捗
- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 関連する公式過去問を5問選定
- [x] 参考教材を複数系統確認
- [x] source Markdownへ制作前EXAM_ALIGNMENTを記録
- [x] 公式解答との照合を伴う独立検証
- [x] 解説本文
- [x] 解説PDF
- [x] 練習PDF（解答・完全解説付き）
- [x] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの独立再解答
- [ ] 最終QA PASS

## 今回進めた内容
Topic 01 `単位・指数・有効数字` の解説画像PowerPointを作成した。

成果物:
`topics/01_units_exponents_significant_figures/01_units_exponents_significant_figures_images.pptx`

PowerPointは16:9・4枚。既存source Markdownで確定済みの範囲だけを使い、次を可視化した。
- SI接頭語と10のべき、科学表記
- 単位換算と次元確認
- 有効数字・絶対誤差・百分率誤差
- `与えられた量確認→基準単位へ換算→式選択→代入→次元確認→有効数字処理→桁の妥当性確認` の標準解法
- 選定5問と教材技能の対応

選定過去問の原文・図は複製せず、問番号と必要技能だけを表示した。全4枚をレンダリング確認し、文字欠け・重なり・クリッピング・ページ外はみ出しがないことを確認した。overflow検査もPASS。

## 判定
Topic 01 はPowerPointまで完了したが、まだ `completed` ではない。完成教材だけで選定5問を独立再解答し、最終QA PASSするまで完成数へ加算しない。
