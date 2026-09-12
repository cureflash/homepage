# STATUS - 電験三種「電気数学」

更新日: 2026-09-12

## 状態
- active_series: `09_electrical_math_3`
- exam_aligned_completed_topics: 0 / 12
- current_status: `topic_01_practice_pdf_complete`
- last_completed_topic: `none`
- active_topic: `01 単位・指数・有効数字`
- next_start: Topic 01の解説画像PowerPointを作成する

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
- [ ] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの独立再解答
- [ ] 最終QA PASS

## 今回進めた内容
Topic 01 `単位・指数・有効数字` の練習問題と完全解説を作成し、練習PDFへ反映した。

成果物:
`topics/01_units_exponents_significant_figures/01_units_exponents_significant_figures_practice.pdf`

PDFはA4縦4ページ。全15問で、基礎4問・本試験標準8問・複合応用3問、うち五肢択一10問・記述5問とした。`MASTER_SPEC.md` / `EXAM_ALIGNMENT_SPEC.md` の三種練習問題要件に合わせ、既存source Markdownで確定済みのTopic 01範囲だけで構成している。

過去問対応:
- `mH→H`、10のべき、`LI^2` の桁管理: 問6・問14
- `mA→A`、`ms→s`、`A/s`、`H·A/s=V`: 問5・問13
- `m/min→m/s`、百分率効率、`W→kW`: 問10・問15
- 有効数字と単位演算: 問3・4・7・9・11・12
- 測定値・絶対誤差・百分率誤差: 問8

各問は正答だけでなく、式選択、単位換算、中間計算、有効数字処理、必要な単位検算を解説に含めた。選定過去問の原文・図・数値は複製していない。

PDFは全4ページを170 dpiでレンダリングし、文字欠け・クリッピング・重なり・黒塗り・ページ外はみ出しがないことを確認した。

## 判定
Topic 01 は練習PDFまで完了したが、まだ `completed` ではない。PowerPoint完成後に教材だけで選定5問を独立再解答し、最終QA PASSするまで完成数へ加算しない。
