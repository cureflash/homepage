# 23 N700S SiC主変換装置 — 最終QA

更新日: 2026-09-19

## 判定

`BLOCKED / POWERPOINT_ARTIFACT_IDENTITY_MISMATCH`

latest main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、最新 `STATUS.md` / `HANDOFF.md`、Topic 23のsource・PDF・PowerPoint・各QA・修正後clean blind候補固定と公式照合をreconcileした。

固定5問・23答案要素の修正後clean blindは `23 / 23 PASS`。固定EXAM_ALIGNMENT、一般式、SPEC境界、N700S実車値／教材仮定値境界にも新たな不一致はない。

ただし、PowerPoint本体とPowerPoint QAの成果物識別情報が一致しないため、現行PPTXに対する表示QA済みであることを確定できない。推測でPASS扱いせず、Topic 23を `completed` にしない。

## 1. 固定EXAM_ALIGNMENT

- R7 一次「機械」問4 `(1)〜(5)`: 5答案要素
- R4 一次「機械」問4 `(1)〜(5)`: 5答案要素
- R2 一次「機械」問2 `(1)〜(5)`: 5答案要素
- H24 一次「機械」問6 `(2),(3)`: 2答案要素
- H24 二次「機械・制御」問1 `(1)〜(6)`: 6答案要素
- 一次: `17答案要素`
- 二次: `6答案要素`
- 合計: `5問・23答案要素`
- 固定EXAM_ALIGNMENT変更: `0件`

固定EXAM_ALIGNMENT: `PASS`。

## 2. clean blind独立再解答

修正後候補は公式照合前に commit `5d28e38e9151edc9d2ca3e309783aea2e6b9272f` で固定済み。

- R7一次: `5 / 5 PASS`
- R4一次: `5 / 5 PASS`
- R2一次: `5 / 5 PASS`
- H24一次: `2 / 2 PASS`
- H24二次: `6 / 6 PASS`
- 一次: `17 / 17 PASS`
- 二次: `6 / 6 PASS`
- 合計: `23 / 23 PASS`
- 固定後の答案変更: `0件`

clean blind品質ゲート: `PASS`。

## 3. PDF成果物

解説PDF:
- `PASS / EXPLANATION_PDF_RESYNC_COMPLETE`
- A4縦 `5 pages`
- PDFium / Poppler `5 / 5 PASS`
- 固定23答案要素 `23 / 23 covered`
- SPEC固定8項目 `8 / 8 covered`
- SPEC指定3可視化 `3 / 3 PASS`
- clean blind補強2点 `2 / 2 PASS`

練習PDF:
- `PASS / PRACTICE_PDF_RESYNC_COMPLETE`
- A4縦 `5 pages`
- 一次8問＋二次4問 `12 / 12`
- 完全解説 `12 / 12`
- 固定23答案要素 `23 / 23 covered`
- SPEC固定8項目 `8 / 8 covered`
- clean blind補強2点 `2 / 2 PASS`

PDF成果物: `PASS`。

## 4. PowerPoint exact blocker

`23_n700s_sic_main_converter_powerpoint_qa.md` は次を記録している。

- 判定: `PASS / POWERPOINT_RESYNC_COMPLETE`
- 16:9 `6 slides`
- ファイルサイズ: `12,944 bytes`
- SHA-256: `dc5babab362325cb00ca462660cd7f9b6c1cd1f6ef6f1e36c62ffe55395ae70c`
- LibreOffice / pdftoppm表示QA: `6 / 6 PASS`

一方、現行mainのGitHub contents情報で `23_n700s_sic_main_converter_images.pptx` は次の識別情報になっている。

- blob SHA: `ff2c73d872da4fc3605fb30e5f67c9dc97517f5c`
- size: `12,326 bytes`

PowerPoint本体とQAは同じ commit `3d8608c3af48e9ea81e1534927fb8cdb09e065a5` で最新更新されているため、後続commitによる単純な成果物差替えとは確定できない。

`12,944 bytes` と `12,326 bytes` が一致しない以上、QA記録のSHA-256・表示QAが現行PPTX本体に対応することを証明できない。サイズ記録の単純誤記とも推測しない。

exact blocker:

`Current GitHub PPTX is 12,326 bytes, while the authoritative PowerPoint QA records 12,944 bytes. Recompute the current PPTX byte size and SHA-256, rerun PPTX open/ZIP/render/display QA against that exact artifact, and reconcile the QA record before completion.`

PowerPoint最終QA: `BLOCKED`。

## 5. SPEC・実車値境界

- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 一般式 `E_sw=∫v(t)i(t)dt`: 変更 `0件`
- 固定SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- JR東海N700A比7%値のSiC単独効果化: `0件`
- 富士電機20%軽量化のN700S車両全体への誤拡張: `0件`

SPEC・実車値境界: `PASS`。

## 6. 最終判定

- 技術内容: `PASS`
- 固定5問・23答案要素: `PASS`
- clean blind: `23 / 23 PASS`
- 解説PDF / 練習PDF: `PASS`
- PowerPoint artifact identity: `BLOCKED`
- SPEC境界: `PASS`
- 新規exact blocker: `1件`

Topic 23は `completed` にしない。完成数は `22 / 39` のまま。

次の安全な工程は、現行 `23_n700s_sic_main_converter_images.pptx` そのものに対して byte size / SHA-256 / PPTX open / ZIP整合性 / LibreOffice変換 / pdftoppm表示QAを再実施し、`23_n700s_sic_main_converter_powerpoint_qa.md` の識別情報をreconcileすること。技術本文・固定EXAM_ALIGNMENT・問題・数式・SPECは変更しない。
