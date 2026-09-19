# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜25は最終QAまで `PASS / completed`。完成数は `25 / 39`。

現在地は `topic_26_explanation_pdf_complete`。active topicは Topic 26 `E7・W7系 勾配条件を含む総合走行解析`。

## 今回のreconcileと進行

最新main、系列 `STATUS.md` / `HANDOFF.md`、上位仕様、系列 `SPEC.md`、Topic 26制作前EXAM_ALIGNMENT、完成済みTopic 13・14・21の関連成果をreconcileした。

Topic 26で固定済みの第二種一次4問・10答案要素＋二次1問・6答案要素、合計5問・16答案要素を変更せず、SPEC必須7項目・指定3可視化だけを入力条件として解説sourceを作成した。H26一次問5の定加速域・定出力域はTopic 21でQA済みの最小条件表を再利用し、R7二次問2に必要な滑り・トルク・二次銅損・固定損・負荷変化時速度/出力までを途中式付きで接続した。

E7・W7系の実車接続はJR東日本公式資料で確認済みの北陸新幹線30‰急勾配とE7系ブレーキ性能向上だけに限定した。数値例・3可視化に使う質量、走行抵抗式、効率、利用可能出力はすべて教材用仮定値と明記し、実車値として扱っていない。

今回、同sourceからA4縦3ページの解説PDFを生成し、PDFium/Poppler両方で3/3ページの表示を確認した。`pdftotext`、固定5問・16答案要素、SPEC必須7項目、指定3可視化、3段階例題も全件PASS。固定EXAM_ALIGNMENTと実車値境界は変更していない。

## Topic 25 解説PDF

- `PASS / EXPLANATION_PDF_CANONICAL_REPAIR_COMPLETE`
- canonical blob SHA: `7588e85204db180eee2bd5e2494708df4810276e`
- PDFium / Poppler: `3 / 3 PASS`
- 固定5問: `5 / 5 covered`
- 合計答案要素: `28 / 28 covered`
- SPEC必須10項目: `10 / 10 covered`
- 指定3可視化: `3 / 3 PASS`

## Topic 25 練習PDF

- `PASS / PRACTICE_PDF_COMPLETE`
- canonical blob SHA: `2dbb1439e2ee237065fce69e8ac11a9315c0335f`
- PDFium / Poppler: `5 / 5 PASS`
- 一次8問＋完全解説: `8 / 8`
- 二次4問＋完全解説: `4 / 4`
- 固定答案要素接続: `28 / 28`

## Topic 25 PowerPoint

- `PASS / POWERPOINT_COMPLETE`
- canonical blob SHA: `726da748b8ceb7c0d6cdee770daca7738fc1c202`
- 16:9 / `6 slides`
- ZIP integrity / python-pptx / geometry: `PASS`
- LibreOffice render: `6 / 6 PASS`
- 固定5問: `5 / 5 connected`
- 合計答案要素: `28 / 28 connected`

## Topic 25 clean blind公式照合

成果物:
- `topics/25_n700s_battery_self_propulsion_energy_design/25_n700s_battery_self_propulsion_energy_design_clean_blind_official_match_qa.md`

判定:
- `PASS / CLEAN_BLIND_OFFICIAL_MATCH_COMPLETE`
- 一次: `20 / 20 PASS`
- 二次: `8 / 8 PASS`
- 合計: `28 / 28 PASS`
- 固定5問: `5 / 5 PASS`
- 固定候補後編集: `0件`
- 不一致: `0件`
- exact blocker: `0件`

## Topic 25 最終QA

成果物:
- `topics/25_n700s_battery_self_propulsion_energy_design/25_n700s_battery_self_propulsion_energy_design_final_qa.md`

判定:
- `PASS / COMPLETED`
- 解説source/PDF: `PASS`
- 練習source/PDF: `PASS`
- PowerPoint: `PASS`
- 固定過去問: `5 / 5 PASS`
- 合計答案要素: `28 / 28 PASS`
- SPEC必須10項目: `10 / 10 PASS`
- SPEC指定3可視化: `3 / 3 PASS`
- exact blocker: `0件`

## Topic 26 制作前EXAM_ALIGNMENT

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

列車の勾配抵抗式・走行抵抗式をそのまま直接問う第二種公式過去問は固定対象として確認できなかったため、直接出題とは記載しない。Topic 14で確定済みの列車側力学 `R_g=mg sinθ≈mgi`、`P=Fv` をSPEC必須事項として上記の電動機・効率・回生過去問へ接続する。

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
- SPEC外主題追加: `0件`
- clean blind用個別正答の先取り保存: `0件`
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
- 固定EXAM_ALIGNMENT変更: `0件`
- exact blocker: `0件`

## 固定境界

- Topic 26固定EXAM_ALIGNMENT: `5問・16答案要素`
- Topic 26で未確認のE7・W7実車値を真値化: `0件`
- Topic 26で未確認走行抵抗経験式・係数を実車値として追加: `0件`
- 数値例・3可視化の仮定値を実車値として扱う: `0件`
- Topic 21 H26二次 問1(4)の過去問固有丸め注記を維持。一般式 `P=Tω`, `ω=2πN/60` 変更: `0件`
- Topic 26固定過去問へのH26二次 問1(4)重複採用: `0件`
- SPEC外主題追加: `0件`

## 次の安全な工程

Topic 26練習source。固定EXAM_ALIGNMENTと解説PDFを入力として、一次試験型＋二次記述式の練習問題を作成し、数値・論理を独立再計算する。実車値境界と固定EXAM_ALIGNMENTは変更しない。
