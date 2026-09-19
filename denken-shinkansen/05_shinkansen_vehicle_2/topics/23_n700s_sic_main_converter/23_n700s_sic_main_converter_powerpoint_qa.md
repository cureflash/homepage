# Topic 23 N700S SiC主変換装置 - 解説画像PowerPoint QA

更新日: 2026-09-19

判定: `BLOCKED / CURRENT_PPTX_ZIP_CORRUPT`

## reconcile

latest main、最新 `STATUS.md` / `HANDOFF.md`、直近車両二種worker成果、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、既存PowerPoint QAをreconcileした。Topic 21 H26二次「機械・制御」問1(4)の `48.0 / 48.1 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差という既存診断を維持し、一般式 `P=Tω`、`ω=2πN/60` は変更していない。

技術本文・固定EXAM_ALIGNMENT・問題・数式・SPEC・実車値境界は変更していない。

## 現行GitHub PPTXの識別情報

対象: `23_n700s_sic_main_converter_images.pptx`

- GitHub blob SHA: `ff2c73d872da4fc3605fb30e5f67c9dc97517f5c`
- byte size: `12,326 bytes`
- SHA-256: `8abfe66b9dbf6f05dba212af35405abe9981b9bd017980866c03186030dde5b8`
- Git blob SHA-1再計算: `ff2c73d872da4fc3605fb30e5f67c9dc97517f5c` — GitHub blobと一致

したがって今回検査した12,326-byteファイルは、現行mainのGitHub blobそのものと確定できる。

既存QA記録の `12,944 bytes` / SHA-256 `dc5babab362325cb00ca462660cd7f9b6c1cd1f6ef6f1e36c62ffe55395ae70c` とは一致しない。

## 構造QA

現行PPTXへ直接再検査した結果:

- ZIP整合性: `FAIL`
  - `missing 618 bytes in zipfile`
  - `invalid zip file with overlapped components`
- python-pptx open: `FAIL`
  - ZIP component overlapにより読み込み不能
- LibreOffice PDF変換: `FAIL`
  - `Error: source file could not be loaded`
  - PDF生成なし
- pdftoppm表示QA: `BLOCKED`
  - LibreOffice変換失敗のため実施不能
- 6枚表示確認 / geometry overflow: `BLOCKED`
  - PPTX自体を正常に開けないため実施不能

## 内容QAの扱い

以前のQAに記録された次の内容カバレッジは、12,944-byte artifactに対する履歴として保持するが、現行12,326-byte artifactへのPASS根拠には使用しない。

- 固定5問・23答案要素 `23 / 23 covered`
- SPEC固定8項目 `8 / 8 covered`
- SPEC指定3可視化 `3 / 3 PASS`
- R2一次「機械」問2 `(2),(4)` clean blind補強 `2 / 2`

固定EXAM_ALIGNMENT変更 `0件`、一般式変更 `0件`、新規問題追加 `0件`、未確認N700S実車値の真値化 `0件`。

## exact blocker

`The current GitHub PPTX blob ff2c73d872da4fc3605fb30e5f67c9dc97517f5c is exactly 12,326 bytes (SHA-256 8abfe66b9dbf6f05dba212af35405abe9981b9bd017980866c03186030dde5b8) and is a malformed ZIP: unzip reports 618 missing bytes and overlapped components, python-pptx cannot open it, and LibreOffice cannot load it. The previously QA-passed 12,944-byte artifact is not the current GitHub blob. Replace or recreate the PPTX from the already-fixed Topic 23 sources/6-slide specification, then rerun identity, ZIP/open, LibreOffice, pdftoppm, six-slide display, and geometry QA before Topic 23 can be completed.`

## 次工程

現行PPTXをPASS扱いしない。技術本文・固定EXAM_ALIGNMENT・問題・数式・SPECを変更せず、既存Topic 23 sourceと固定6枚構成から正常なPPTXを再生成または正しい成果物へ置換できる状態を確定した後、同一artifactに対して全PowerPoint QAを再実施する。Topic 24へは進めない。
