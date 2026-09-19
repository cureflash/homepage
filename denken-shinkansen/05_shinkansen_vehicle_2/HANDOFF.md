# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜25は最終QAまで `PASS / completed`。完成数は `25 / 39`。

現在地は `topic_26_practice_source_complete`。active topicは Topic 26 `E7・W7系 勾配条件を含む総合走行解析`。

## 今回のreconcileと進行

最新main、系列 `STATUS.md` / `HANDOFF.md`、上位仕様、系列 `SPEC.md`、Topic 26制作前EXAM_ALIGNMENT・解説source・解説PDF、直近の同系列worker成果をreconcileした。今回開始時のmain HEADは `8a6c573493e2fdd5c9e6a38d75b3243a4f7789ce` で、直近のTopic 26成果は `36601572a994252a66132f430d9f711890c2c0b7` の解説PDF＋QA。HEAD側の `8a6c573...` はTopic 21 exam alignment handoff同期であり、Topic 26練習sourceとは重複しないことを確認した。

Topic 26で固定済みの第二種一次4問・10答案要素＋二次1問・6答案要素、合計5問・16答案要素は変更していない。SPEC必須7項目・指定3可視化の式系も解説sourceと同一条件を維持した。

今回、一次8問＋二次4問の練習sourceを作成し、全12問の数値・論理を独立再計算した。一次8問は正答一意性も全件確認した。教材用質量・走行抵抗式・効率・利用可能出力・けん引力をE7・W7系実車値として扱っていない。

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

列車の勾配抵抗式・走行抵抗式をそのまま直接問う第二種公式過去問は固定対象として確認できなかったため、直接出題とは記載しない。Topic 14で確定済みの `R_g=mg sinθ≈mgi`、`P=Fv` をSPEC必須事項として固定過去問の電動機・効率・回生論点へ接続する。

## Topic 26 解説source

成果物:
- `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_explanation_source.md`

判定:
- `PASS / EXPLANATION_SOURCE_COMPLETE`
- 固定過去問: `5 / 5 mapped`
- 一次答案要素: `10 / 10 covered`
- 二次答案要素: `6 / 6 covered`
- 合計答案要素: `16 / 16 covered`
- SPEC必須7項目: `7 / 7 covered`
- SPEC指定3可視化: `3 / 3 defined`
- 3段階例題: `3 / 3`
- 公式の記号・単位・成立条件: `PASS`
- 解法アルゴリズム: `PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 未確認E7・W7実車値の真値化: `0件`
- 未確認実車走行抵抗係数の追加: `0件`
- exact blocker: `0件`

## Topic 26 解説PDF

成果物:
- `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_explanation.pdf`
- canonical blob SHA: `0d6c373ca4dc1edcc004be32666ac40f8607b6b4`
- `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_explanation_pdf_qa.md`

判定:
- `PASS / EXPLANATION_PDF_COMPLETE`
- A4縦: `3 pages`
- file size: `10,902 bytes`
- SHA-256: `304095fecec8fe3d2e46eda8fb020c3e48a2164179eb204b5e318b93dc591b17`
- PDFium / Poppler: `3 / 3 PASS`
- `pdftotext`: `PASS`
- 固定5問: `5 / 5 covered`
- 一次答案要素: `10 / 10 covered`
- 二次答案要素: `6 / 6 covered`
- 合計: `16 / 16 covered`
- SPEC必須7項目: `7 / 7 covered`
- 指定3可視化: `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`
- 実車値境界違反: `0件`
- exact blocker: `0件`

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
- 未確認E7・W7実車値の真値化: `0件`
- 未確認E7・W7実性能曲線の追加: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
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

Topic 26練習PDF生成＋PDF QA。今回作成した12問のsourceをA4縦でPDF化し、PDFium/Poppler表示、`pdftotext`、一次8問・二次4問の完全解説、固定5問・16答案要素接続、数値・論理再計算を確認する。固定EXAM_ALIGNMENTと実車値境界は変更しない。