# 23 N700S SiC主変換装置 — 最終QA

更新日: 2026-09-19

## 判定

`PASS / COMPLETED`

latest main `ec650e845aed716a504e3bf400d78afd80222998`、系列最新 `STATUS.md` / `HANDOFF.md`、直近車両二種commit、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、Topic 23のsource・PDF・PowerPoint・各QA・修正後clean blindをreconcileした。

直近の当該系列commitは `2043c5884c486a0862c000dff9a92bfe6a73a2b3`（PowerPoint復旧）で、以後mainにTopic 23成果物の変更はない。旧最終QAが記録した破損blob `ff2c73d872da4fc3605fb30e5f67c9dc97517f5c` は現行成果物ではない。

## 1. 過去問対応品質ゲート

修正後clean blind公式照合を正本とする。

- 固定過去問: 第二種一次4問＋二次1問 = `5 / 5 PASS`
- R7一次: `5 / 5 PASS`
- R4一次: `5 / 5 PASS`
- R2一次: `5 / 5 PASS`
- H24一次: `2 / 2 PASS`
- H24二次: `6 / 6 PASS`
- 一次答案要素: `17 / 17 PASS`
- 二次答案要素: `6 / 6 PASS`
- 合計答案要素: `23 / 23 PASS`
- 修正後候補固定commit: `5d28e38e9151edc9d2ca3e309783aea2e6b9272f`
- 候補固定後の答案変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`

過去問対応品質ゲート: `PASS`。

## 2. 解説PDF

`23_n700s_sic_main_converter_explanation_pdf_qa.md` をreconcileした。

- 判定: `PASS / EXPLANATION_PDF_RESYNC_COMPLETE`
- A4縦: `5 pages`
- PDFium: `5 / 5 PASS`
- Poppler: `5 / 5 PASS`
- 固定5問・23答案要素: `23 / 23 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`
- clean blind補強: `2 / 2 PASS`
- 新たなexact blocker: `0件`

解説PDF: `PASS`。

## 3. 練習PDF

`23_n700s_sic_main_converter_practice_pdf_qa.md` をreconcileした。

- 判定: `PASS / PRACTICE_PDF_RESYNC_COMPLETE`
- A4縦: `5 pages`
- PDFium: `5 / 5 PASS`
- pdftoppm: `5 / 5 PASS`
- 一次試験型: `8 / 8`
- 二次記述式: `4 / 4`
- 完全解説: `12 / 12`
- 固定5問・23答案要素: `23 / 23 covered`
- 既存12問の問題数・正答・数値変更: `0件`
- 新たなexact blocker: `0件`

練習PDF: `PASS`。

## 4. PowerPoint

現行GitHub artifactと復旧PowerPoint QAのidentityが一致することを再確認した。

現行artifact:

- file: `23_n700s_sic_main_converter_images.pptx`
- Git blob SHA: `4ac7e4c493e8c24e8ea98d40db2494a7218f14b2`
- byte size: `8,587 bytes`
- SHA-256: `b7c1e6af945c9e1c36e01175db365a8c4f119800e0ae655894fdae2ee0b02062`
- 16:9 / `6 slides`

`23_n700s_sic_main_converter_powerpoint_qa.md` は上記同一artifactに対して実施済みで、次を確認している。

- ZIP整合性: `PASS`
- python-pptx open: `6 / 6 PASS`
- LibreOffice PDF変換: `6 / 6 PASS`
- pdftoppm/contact sheet: `6 / 6 PASS`
- geometry overflow: `0`
- 文字切れ・重なり・欠落グリフ: `0`
- 固定5問・23答案要素: `23 / 23 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- clean blind補強2点: `2 / 2 PASS`
- 新たなexact blocker: `0件`

旧破損blobのblockerは現行復旧artifactへの置換で解消済み。PowerPoint: `PASS`。

## 5. SPEC・実車値境界

- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 一般式 `E_sw=∫v(t)i(t)dt`: 変更 `0件`
- 固定SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- JR東海N700A比7%消費電力量低減をSiC単独効果へ読み替え: `0件`
- 富士電機20%軽量化をN700S車両全体の重量低減率へ拡張: `0件`

Topic 21 H26二次「機械・制御」問1(4)の `48.0 / 48.1 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差という既存診断を維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 6. 最終判定

- 技術内容: `PASS`
- 固定5問・23答案要素: `23 / 23 PASS`
- clean blind: `23 / 23 PASS`
- 解説PDF: `PASS`
- 練習PDF: `PASS`
- PowerPoint: `PASS`
- SPEC境界: `PASS`
- 新規exact blocker: `0件`

Topic 23を `completed` とする。完成数は `23 / 39`。次の安全な工程はTopic 24「N700S 主電動機設計の比較」の制作前EXAM_ALIGNMENTであり、本runではTopic 24へは進めない。
