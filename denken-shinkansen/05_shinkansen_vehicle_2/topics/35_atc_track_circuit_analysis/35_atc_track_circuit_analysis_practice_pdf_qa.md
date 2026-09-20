# Topic 35 練習PDF QA

更新日: 2026-09-21

判定: `PASS / PRACTICE_PDF_COMPLETE`

## reconcile

最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md` / `HANDOFF.md`、Topic 35固定EXAM_ALIGNMENT、解説source/PDF/QA、練習source/source QAをreconcileした。既存工程を再実施せず、正本練習source blob `ad27d26a4f661e84160ecad4838baea6f43287a2` から練習PDFだけを生成した。

## canonical PDF

- path: `35_atc_track_circuit_analysis_practice.pdf`
- canonical blob SHA: `060f442964cc94114e1e556c6a7dfb0ad891ad75`
- source blob SHA: `ad27d26a4f661e84160ecad4838baea6f43287a2`
- canonical commit: `408f00c194c4a407c1e0b885f62c58df63e5f36d`
- file size: `17685 bytes`
- SHA-256: `305c1aeadc3a9ddbae73ea16b2d1b3b7abfeaf8ed2a5961c83f2e9dd602898e4`
- A4縦: `6 pages`

## render / text QA

- PDFium render: `6 / 6 PASS`
- Poppler render: `6 / 6 PASS`
- visual inspection: `6 / 6 PASS`
- blank page: `0件`
- page-edge overflow: `0件`
- `pdfinfo`: `PASS`
- `pdftotext -layout`: `PASS (13090 bytes)`
- 抽出文字数: `6847 chars`
- 置換文字 U+FFFD: `0件`
- 一次1〜12: `12 / 12収録 PASS`
- 一次正答: `12 / 12収録 PASS`
- 完全解説: `12 / 12収録 PASS`
- SPEC固定7項目: `7 / 7収録 PASS`

## 過去問対応品質ゲート

- 固定公式過去問: `5 / 5`
- 固定5問・25答案要素: `25 / 25 connected` を維持
- 一次答案要素: `25 / 25 PASS` を維持
- 二次試験型: `0問`。固定EXAM_ALIGNMENTで直接対応問題を確認できていないため、件数合わせで追加しない。
- 一次試験型: `12 / 12`（全問五肢択一）
- source QA済み一次正答一意性: `12 / 12 PASS` を維持
- source QA済み数値・回路式独立再計算: `10 / 10 PASS` を維持
- source QA済み知識・境界問題: `2 / 2 PASS` を維持
- SPEC固定7項目: `7 / 7 PASS` を維持
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定過去問差し替え: `0件`
- 固定過去問を軌道回路そのものの出題と偽装: `0件`
- 未確認実車値の真値化: `0件`
- Topic 36の変調・フィルタ・ノイズ・S/N・デジタル判定先取り: `0件`
- Topic 37の速度制御・ブレーキ制御先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は過去問固有の丸め差として既存判断を維持し、一般式 `P=Tω`、`ω=2πN/60` は変更していない。

本判定は練習PDF工程のPASSであり、Topic 35最終完了を意味しない。次工程はTopic 35解説画像PowerPoint生成＋render/content QA。
