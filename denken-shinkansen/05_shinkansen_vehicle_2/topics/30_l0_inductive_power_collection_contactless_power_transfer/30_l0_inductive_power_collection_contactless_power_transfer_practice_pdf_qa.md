# Topic 30 練習PDF QA

更新日: 2026-09-20

判定: `PASS / PRACTICE_PDF_COMPLETE`

## reconcile

最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、`HANDOFF.md`、直近の車両二種worker成果をreconcileした。Topic 30は解説PDF・練習sourceまで完了していたため、重複作業をせず、canonical練習sourceから練習PDF生成＋PDF QAのみ実施した。

## canonical PDF

- path: `30_l0_inductive_power_collection_contactless_power_transfer_practice.pdf`
- canonical blob SHA: `f1e9650e39e236a6fb3629fd93a234dfbafe89c2`
- source blob SHA: `4a9b6c802a9182225594b4ce7274d98c931d120a`
- file size: `527889 bytes`
- SHA-256: `d6d74ed51200a880741440110cc3751bb32705f6968c7bcadab4e3da8dfeb688`
- A4縦: `7 pages`

## render / text QA

- PDFium render: `7 / 7 PASS`
- Poppler render: `7 / 7 PASS`
- page-edge overflow / blank-page check: `7 / 7 PASS` in both renderers
- `pdftotext -layout`: `PASS (12569 bytes)`
- 置換文字 `�`: `0件`
- 一次8問＋二次4問: `12 / 12収録 PASS`

## 問題・解説収録

- 一次試験型: `8 / 8 PASS`（全問五肢択一、正答・完全解説を収録）
- 二次試験型: `4 / 4 PASS`（途中式・前提・単位・理由説明を収録）
- source QA済み数値・論理: `12 / 12 PASS` をPDF転記確認
- 一次正答一意性: `8 / 8 PASS` を維持

## 過去問対応品質ゲート

- 固定5問・25答案要素: `25 / 25 connected`
- 一次: `20 / 20 connected`
- 二次: `5 / 5 connected`
- SPEC必須7項目: `7 / 7 covered`
- 指定3可視化の計算接続: `3 / 3 aligned`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 31範囲先取り: `0件`
- 未確認L0系実車値の真値化: `0件`
- exact blocker: `0件`

教材用 `k`,`L`,`M`,`R`,`C`,`f`,伝送電力、効率はL0系実車値ではない。直列補償回路もL0系実機構成として扱わない。

本判定は練習PDF工程のPASSであり、Topic 30最終clean blind PASSを意味しない。

## Topic 21 H26二次 問1(4)

`48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
