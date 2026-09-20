# Topic 34 練習PDF QA

更新日: 2026-09-21

判定: `PASS / PRACTICE_PDF_COMPLETE`

## reconcile

最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md` / `HANDOFF.md`、Topic 34固定EXAM_ALIGNMENT、解説source/PDF/QA、練習source/source QAをreconcileした。既存workerが完了済みの解説PDF・練習source工程は再実施せず、正本練習source blob `2b2ba22fc66ede164abafb853e13d3e199a8b12e` から練習PDFだけを生成した。

## canonical PDF

- path: `34_compressor_pump_fan_load_characteristics_practice.pdf`
- canonical blob SHA: `6a9ea3697385c5cc1e951106b1f8a76470138ec1`
- source blob SHA: `2b2ba22fc66ede164abafb853e13d3e199a8b12e`
- file size: `25764 bytes`
- SHA-256: `2f7c1af14e3c6ff1d60bcec1a51e3432b7fe1cfcb2b1056f9b71ff4197f08040`
- A4縦: `8 pages`

## render / text QA

- PDFium render: `8 / 8 PASS`
- Poppler render: `8 / 8 PASS`
- blank page: `0件`
- page-edge overflow: `0件`
- `pdftotext -layout`: `PASS (17916 bytes)`
- 置換文字 `�`: `0件`
- 一次1〜8: `8 / 8収録 PASS`
- 二次1〜4: `4 / 4収録 PASS`
- 一次正答: `8 / 8収録 PASS`
- 完全解説: `12 / 12収録 PASS`

## 過去問対応品質ゲート

- 固定公式過去問: `5 / 5`
- 固定5問・27答案要素: `27 / 27 connected` を維持
- 一次: `15 / 15 PASS` を維持
- 二次: `12 / 12 PASS` を維持
- SPEC固定7項目: `7 / 7 PASS` を維持
- 一次試験型: `8 / 8`（全問五肢択一）
- 二次試験型: `4 / 4`（途中式・前提・単位・理由を含む）
- source QA済み数値独立再計算: `PASS` を維持
- source QA済み一次正答一意性: `8 / 8 PASS` を維持
- コンプレッサ圧縮熱力学・冷凍サイクル・冷媒物性追加: `0件`
- ポンプ水動力式を固定二種過去問の直接出題式と誤記: `0件`
- ファン相似則を成立条件なしで一般化: `0件`
- 未確認実車値の真値化: `0件`
- Topic 35以降の先取り: `0件`
- Topic 21一般式変更: `0件`
- Topic 21 H26二次問1(4) `48.1 N·m / 48.0 N·m` 過去問固有丸め差注記: `維持`
- exact blocker: `0件`

本判定は練習PDF工程のPASSであり、Topic 34最終完了を意味しない。次工程はTopic 34解説画像PowerPoint生成＋render QA。
