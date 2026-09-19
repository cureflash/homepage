# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜25は最終QAまで `PASS / completed`。完成数は `25 / 39`。

現在地は `topic_26_practice_pdf_complete`。active topicは Topic 26 `E7・W7系 勾配条件を含む総合走行解析`。

## 今回のreconcileと進行

最新main、系列 `STATUS.md` / `HANDOFF.md`、上位仕様、系列 `SPEC.md`、Topic 26制作前EXAM_ALIGNMENT・解説source/PDF・練習source、直近の同系列worker成果をreconcileした。開始時の同系列最新HEADは `dda1162507f8099443c068bcb53791269c5291d7`。その後 `06_shinkansen_power_2` のworkerがmainを進めたため最新HEAD `c5b5b0e29200ef36834cdf284ab57a76990b3d86` を親としてrebase相当で取り込み、同系列の重複変更がないことを確認した。

Topic 26で固定済みの第二種一次4問・10答案要素＋二次1問・6答案要素、合計5問・16答案要素は変更していない。今回、既存の練習sourceから練習PDFを生成し、PDFium/Poppler、テキスト抽出、12問の完全解説、数値・論理再計算、固定16答案要素接続を確認した。

## Topic 26 固定EXAM_ALIGNMENT

成果物:
- `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis.md`

判定:
- `PASS / EXAM_ALIGNMENT_COMPLETE`
- 固定過去問: `5問`
- 一次: `4問・10答案要素`
- 二次: `1問・6答案要素`
- 合計: `16答案要素`
- SPEC必須: 勾配抵抗、走行抵抗、必要けん引力、必要出力、効率、速度制限、回生条件の `7項目`
- SPEC指定可視化: 勾配―必要けん引力、速度―必要出力、勾配別走行条件比較の `3件`
- exact blocker: `0件`

固定問題:
1. R7二次「機械・制御」問2 `(1)〜(3)` — 6答案要素
2. H26一次「機械」問5 `(1),(4),(5)` — 3答案要素
3. H25一次「機械」問3 `(1)` — 1答案要素
4. R5一次「機械」問2 `(2),(3),(5)` — 3答案要素
5. H27一次「機械」問3 `(1),(2),(3)` — 3答案要素

列車の勾配抵抗式・走行抵抗式を直接問う第二種公式過去問は固定対象として確認できなかったため、直接出題とは記載しない。Topic 14で確定済みの `R_g=mg sinθ≈mgi`、`P=Fv` をSPEC必須事項として固定過去問の電動機・効率・回生論点へ接続する。

## Topic 26 解説source / PDF

- 解説source: `PASS / EXPLANATION_SOURCE_COMPLETE`
- 解説PDF: `PASS / EXPLANATION_PDF_COMPLETE`
- PDF canonical blob SHA: `0d6c373ca4dc1edcc004be32666ac40f8607b6b4`
- A4縦 `3 pages`
- PDFium / Poppler: `3 / 3 PASS`
- 固定5問・16答案要素: `16 / 16 covered`
- SPEC必須7項目: `7 / 7 covered`
- 指定3可視化: `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`
- 実車値境界違反: `0件`

## Topic 26 練習source

成果物:
- `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_practice_source.md`

判定:
- `PASS / PRACTICE_SOURCE_COMPLETE`
- 一次試験型: `8問`
- 二次試験型: `4問`
- 合計: `12問`
- 固定過去問: `5 / 5 connected`
- 一次答案要素: `10 / 10 connected`
- 二次答案要素: `6 / 6 connected`
- 合計答案要素: `16 / 16 connected`
- SPEC必須7項目: `7 / 7 covered`
- SPEC指定3可視化の計算系: `3 / 3 aligned`
- 数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- exact blocker: `0件`

## Topic 26 練習PDF

成果物:
- `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_practice.pdf`
- canonical blob SHA: `8905c072f60a0b584c8cd7f439713606588bb500`
- `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_practice_pdf_qa.md`

判定:
- `PASS / PRACTICE_PDF_COMPLETE`
- file size: `11,005 bytes`
- SHA-256: `6c54571db61e98f8251e7171291a5a5bc57afaf751ff7e194240021b2009441e`
- A4縦: `4 pages`
- PDFium / Poppler: `4 / 4 PASS`
- `pdftotext`: `PASS`（6,415 bytes）
- 置換文字: `0件`
- 一次8問＋正答・完全解説: `8 / 8`
- 二次4問＋完全解説: `4 / 4`
- 数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定5問: `5 / 5 connected`
- 一次答案要素: `10 / 10 connected`
- 二次答案要素: `6 / 6 connected`
- 合計: `16 / 16 connected`
- SPEC必須7項目: `7 / 7 covered`
- 指定3可視化の計算接続: `3 / 3 aligned`
- exact blocker: `0件`

## 固定境界

- Topic 26固定EXAM_ALIGNMENT: `5問・16答案要素`
- Topic 26で未確認のE7・W7実車値を真値化: `0件`
- Topic 26で未確認走行抵抗経験式・係数を実車値として追加: `0件`
- 数値例・3可視化・練習問題の仮定値を実車値として扱う: `0件`
- Topic 21 H26二次 問1(4)の過去問固有丸め注記を維持。一般式 `P=Tω`, `ω=2πN/60` 変更: `0件`
- Topic 26固定過去問へのH26二次 問1(4)重複採用: `0件`
- SPEC外主題追加: `0件`

## 次の安全な工程

Topic 26 PowerPoint生成＋QA。固定EXAM_ALIGNMENT、解説source/PDF、練習source/PDFを入力とし、SPEC指定3可視化と二種一次・二次の接続を16:9スライドへ反映する。固定EXAM_ALIGNMENT、実車値境界、Topic 21一般式は変更しない。