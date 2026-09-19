# Topic 20 解説PDF QA

更新日: 2026-09-19

対象:
- source: `20_n700_feedback_control_explanation_source.md`
- PDF: `20_n700_feedback_control_explanation.pdf`

判定: `PASS / EXPLANATION_PDF_COMPLETE`

## 仕様・過去問対応

- 固定EXAM_ALIGNMENT変更: `0件`
- 固定過去問: `一次1問＋二次4問 / 5問`
- 固定答案要素: `一次1＋二次18 / 19`
- 固定答案要素のPDF接続: `19 / 19 covered`
- SPEC指定10項目: `10 / 10 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`
- 公式解答・標準解答の個別正答参照・保存: `0件`
- 固定問題差替え: `0件`
- SPEC外追加: `0件`
- 未確認N700系実車制御値の真値化: `0件`

## PDF QA

- A4縦: `3 pages`
- PDFium 180 dpi: `3 / 3 PASS`
- pdftoppm 180 dpi: `3 / 3 PASS`
- 文字抽出: `PASS`
- 欠落グリフ・黒四角・重なり・クリップ: `0件 / 2 renderer visual check`
- PDF構造・開封: `PASS`
- 数式・数値のsource再照合: `PASS`
- 例題1: `y(3)=1.264` を再確認
- 例題2: 極 `-1±j√3`、ランプ定常偏差 `0.5` を再確認
- 例題3: 安定範囲 `0<K<6` を再確認
- 可視化条件: source固定条件を保持
- 日本語フォント: Adobe Japanese CID参照。PDFium / Poppler双方で描画欠落なし、pdftotext抽出PASS

次工程は練習source。固定5問・19答案要素とSPEC境界を変更せず、一次試験型と二次記述式を含む練習問題へ接続する。完成後clean blind再解答は、練習PDF・PowerPointまで完成してから行う。
