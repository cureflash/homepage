# 22 E5系 再粘着制御 — 解説PDF QA

更新日: 2026-09-19

## 判定

`PASS / EXPLANATION_PDF_COMPLETE`

対象:
- source: `22_e5_readhesion_control_explanation_source.md`
- PDF: `22_e5_readhesion_control_explanation.pdf`
- SHA-256: `774365b7357a88417e9b029eabda9cd73d3154b86b7871a67104ec0d51f72f55`

## renderer QA

- A4縦: `5 / 5`
- PDFium 200 dpi: `5 / 5 PASS`
- Poppler 200 dpi: `5 / 5 PASS`
- クリップ・重なり・欠落: `0件`
- 2 renderer間: アンチエイリアス差のみ。構造・配置差なし
- PDF構造・開封: `PASS`

## text QA

- 文字抽出: `PASS`
- 基本語・式: `PASS`
- 固定過去問ラベル: `5 / 5`
- SPEC指定3可視化ラベル: `3 / 3`
- 3段階例題ラベル: `3 / 3`

確認語・式には、同期速度、すべり、粘着係数、粘着限界、空転、滑走、速度差、再粘着、`N_s=120f/P`、`s=(N_s-N)/N_s`、`F_ad,max=μW` を含む。

## 過去問対応品質ゲート

- 固定EXAM_ALIGNMENT: `5問・11答案要素` 変更なし
- 一次答案要素のPDF接続: `3 / 3 covered`
- 二次答案要素のPDF接続: `8 / 8 covered`
- 合計: `11 / 11 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`
- 固定問題差替え: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 公式解答・標準解答の個別正答保存: `0件`
- 固定SPEC外追加: `0件`
- 未確認E5系実車値の真値化: `0件`
- 新たなexact blocker: `0件`

本QAでは公式正答との完成後clean blind照合を前倒ししない。固定5問・11答案要素の最終合否判定は、練習PDF・PowerPoint完成後に教材だけで候補答案を先に固定してから行う。

## 次工程

Topic 22 練習source作成。固定5問・11答案要素、SPEC固定8項目・指定3可視化、解説source/PDFの範囲境界を変更しない。一次試験型と二次記述式を含め、途中式・単位・理由説明まで採点可能な練習問題にする。