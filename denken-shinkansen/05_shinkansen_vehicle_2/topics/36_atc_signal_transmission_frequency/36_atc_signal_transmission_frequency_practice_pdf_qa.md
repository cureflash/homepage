# Topic 36 ATC② 信号伝送と周波数 — 練習PDF QA

更新日: 2026-09-21

判定: `PASS / PRACTICE_PDF_COMPLETE`

## canonical

- source: `36_atc_signal_transmission_frequency_practice_source.md`
- source commit: `f785bd183e5a3bebe976b9839a2b1a41c34168a1`
- source QA: `36_atc_signal_transmission_frequency_practice_source_qa.md`
- source QA commit: `d9c3cb66b01be29c05ba702e0c108de9492c0e2c`
- PDF: `36_atc_signal_transmission_frequency_practice.pdf`
- PDF canonical commit: `51d9ea42398c28ac5b27006d6868aeb96f0b1838`
- PDF blob SHA: `f678daa6fa5554266716877d32f1aca0acc21e02`
- PDF SHA-256: `707d1ae1564b13393545c9b27e0d47ed36f1e33390aa827fdd5b4c9a7dfdf0bc`
- file size: `6700 bytes`

## reconcile

最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md` / `HANDOFF.md`、固定EXAM_ALIGNMENT、Topic 36解説source/PDF、練習source/source QAをreconcileした。既存workerの練習source＋QAを正本として重複制作していない。

## PDF構造・表示QA

- A4縦: `5頁`
- Ghostscript nullpage parse/render: `PASS`
- Poppler `pdfinfo` / `pdftotext -layout`: `PASS`
- PDFium render: `5 / 5 PASS`
- Poppler render: `5 / 5 PASS`
- visual inspection: `5 / 5 PASS`
- extracted text: `2894 chars / PASS`
- replacement character U+FFFD: `0件`
- clipping / overlap / broken glyph: `0件`

PDFはコネクタ経由で安定して正本化できるよう、練習sourceの内容を意味を変えずに簡潔化した表示版とした。数式記号の一部はASCII表記（`pi`, `omega`, `*`, `sqrt`, `>=`等）を用いるが、一般式・正答・成立条件は変更していない。

## 内容QA

- 一次試験型: `12問`
- 五肢択一: `12 / 12`
- 正答・解説掲載: `12 / 12 PASS`
- 正答一意性: `12 / 12 PASS`（source QA継承）
- 二次試験型: `0問`（公式科目範囲外、件数合わせなし）
- 固定公式過去問: `5 / 5`
- 固定答案要素: `25 / 25 connected`
- SPEC固定8項目: `8 / 8 covered`
- 未確認実車値の真値化: `0件`
- Topic 37・38先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有の丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 次工程

Topic 36 解説画像PowerPoint作成＋QA。固定5問・25答案要素、SPEC固定8項目、二次0問の適用判定、鉄道一次資料の境界を維持する。