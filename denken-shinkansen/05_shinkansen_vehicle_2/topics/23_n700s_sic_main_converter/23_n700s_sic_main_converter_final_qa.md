# 23 N700S SiC主変換装置 — 最終QA

更新日: 2026-09-19

## 判定

`BLOCKED / CURRENT_POWERPOINT_ZIP_CORRUPT`

latest main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、最新 `STATUS.md` / `HANDOFF.md`、Topic 23 source・PDF・PowerPoint・各QA・修正後clean blind候補固定と公式照合をreconcileした。

固定5問・23答案要素の修正後clean blindは `23 / 23 PASS`。固定EXAM_ALIGNMENT、一般式、SPEC境界、N700S実車値／教材仮定値境界に変更はない。

## 1. 過去問対応品質ゲート

- R7一次: `5 / 5 PASS`
- R4一次: `5 / 5 PASS`
- R2一次: `5 / 5 PASS`
- H24一次: `2 / 2 PASS`
- H24二次: `6 / 6 PASS`
- 一次: `17 / 17 PASS`
- 二次: `6 / 6 PASS`
- 合計: `23 / 23 PASS`
- 修正後候補固定commit: `5d28e38e9151edc9d2ca3e309783aea2e6b9272f`
- 固定後の答案変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`

過去問対応品質ゲート: `PASS`。

## 2. PDF成果物

- 解説PDF: `PASS / EXPLANATION_PDF_RESYNC_COMPLETE`, A4縦 `5 pages`, 固定23答案要素 `23 / 23 covered`
- 練習PDF: `PASS / PRACTICE_PDF_RESYNC_COMPLETE`, A4縦 `5 pages`, 一次8問＋二次4問 `12 / 12`, 固定23答案要素 `23 / 23 covered`

PDF成果物: `PASS`。

## 3. PowerPoint再検査

現行mainの `23_n700s_sic_main_converter_images.pptx` をbyte単位で再取得・検査した。

識別情報:

- GitHub blob SHA: `ff2c73d872da4fc3605fb30e5f67c9dc97517f5c`
- byte size: `12,326 bytes`
- SHA-256: `8abfe66b9dbf6f05dba212af35405abe9981b9bd017980866c03186030dde5b8`
- Git blob SHA-1再計算: `ff2c73d872da4fc3605fb30e5f67c9dc97517f5c` — GitHub blobと一致

構造・表示QA:

- ZIP整合性: `FAIL`
  - `missing 618 bytes in zipfile`
  - `invalid zip file with overlapped components`
- python-pptx open: `FAIL`
- LibreOffice変換: `FAIL / source file could not be loaded`
- pdftoppm表示QA: `BLOCKED`
- 6枚表示確認: `BLOCKED`
- geometry overflow: `BLOCKED`

既存PowerPoint QAが記録していた `12,944 bytes` / SHA-256 `dc5babab362325cb00ca462660cd7f9b6c1cd1f6ef6f1e36c62ffe55395ae70c` のartifactは、現行GitHub blobではない。したがって以前の表示QAを現行PPTXへ転用しない。

PowerPoint最終QA: `FAIL / BLOCKED`。

## 4. SPEC・実車値境界

- SPEC固定8項目: 内容側は既存QAで `8 / 8 covered`
- SPEC指定3可視化: 内容側は既存QAで `3 / 3 PASS`
- 一般式 `E_sw=∫v(t)i(t)dt`: 変更 `0件`
- 固定SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- JR東海N700A比7%値のSiC単独効果化: `0件`
- 富士電機20%軽量化のN700S車両全体への誤拡張: `0件`

Topic 21 H26二次「機械・制御」問1(4)の `48.0 / 48.1 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差という既存診断を維持し、一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 5. exact blocker

`The current GitHub PPTX blob ff2c73d872da4fc3605fb30e5f67c9dc97517f5c is exactly 12,326 bytes (SHA-256 8abfe66b9dbf6f05dba212af35405abe9981b9bd017980866c03186030dde5b8) and is a malformed ZIP. It cannot be opened by python-pptx or LibreOffice, so render/display QA cannot be completed. The previously QA-passed 12,944-byte artifact is not the current GitHub artifact. A valid Topic 23 PPTX must be recreated or restored without changing the fixed technical content/spec, then full PowerPoint QA must be rerun.`

## 6. 最終判定

- 技術内容: `PASS`
- 固定5問・23答案要素: `PASS`
- clean blind: `23 / 23 PASS`
- 解説PDF / 練習PDF: `PASS`
- PowerPoint: `FAIL / CORRUPT_CURRENT_ARTIFACT`
- SPEC境界: `PASS`
- 新規exact blocker: `1件`

Topic 23は `completed` にしない。完成数は `22 / 39` のまま。Topic 24へは進めない。
