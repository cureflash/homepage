# Topic 21 解説PDF QA

更新日: 2026-09-19

対象:
- source: `21_high_speed_tractive_force_output_control_explanation_source.md`
- gate補足: `21_high_speed_tractive_force_output_control_explanation_source_gate_addendum.md`
- PDF: `21_high_speed_tractive_force_output_control_explanation.pdf`

判定: `PASS / EXPLANATION_PDF_COMPLETE`

## 仕様・過去問対応

- 固定EXAM_ALIGNMENT変更: `0件`
- 固定過去問: `一次2問＋二次3問 / 5問`
- 固定答案要素: `一次3＋二次3 / 6`
- 固定答案要素のPDF接続: `6 / 6 covered`
- H26一次 問5 `(4),(5)` の最小判別条件: `2 / 2 covered`（`V/f=一定` / `V=一定`、`I_M=一定`、`f_s=可変`）
- SPEC指定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`
- 公式解答・標準解答の個別正答参照・保存: `0件`
- 固定問題差替え: `0件`
- SPEC外追加: `0件`
- 未確認実車値の真値化: `0件`

## PDF QA

- A4縦: `3 pages`
- PDFium 180 dpi: `3 / 3 PASS`
- pdftoppm 180 dpi: `3 / 3 PASS`
- 文字抽出: `PASS`
- 欠落グリフ・黒四角・重なり・クリップ: `0件 / 2 renderer visual check`
- PDF構造・開封: `PASS`
- 数式・数値のsource再照合: `PASS`
- 例題1: `ω=314.159 rad/s`, `T=954.930 N·m`
- 例題2: `T(4500 min^-1)=636.620 N·m`, `P_train=7.2 MW`, `F(180 km/h)=144.0 kN`
- 例題3: `200 km/h`で`P_req=5.652 MW`; `240 km/h`で`P_req=8.593 MW`
- 可視化5点: source固定条件から再計算一致
- 日本語フォント: Adobe Japanese CID参照。PDFium / Poppler双方で表示欠落なし、pdftotext抽出PASS

次工程は練習source。固定5問・6答案要素とSPEC境界を変更しない。完成後clean blind再解答は練習PDF・PowerPointまで完成後に行う。
