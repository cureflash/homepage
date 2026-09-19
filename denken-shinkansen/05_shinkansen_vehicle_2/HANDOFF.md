# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜25は最終QAまで `PASS / completed`。完成数は `25 / 39`。

現在地は `topic_26_exam_alignment_complete`。active topicは Topic 26 `E7・W7系 勾配条件を含む総合走行解析`。

## 今回のreconcileと進行

最新main、系列 `STATUS.md` / `HANDOFF.md`、上位仕様、系列 `SPEC.md`、直近コミット、既存車両二種worker成果をreconcileした。current mainのTopicディレクトリは01〜25まででTopic 26成果物は未存在だったため重複制作はない。

Topic 13「回生と四象限運転」、Topic 14「走行抵抗と必要けん引力」、Topic 21「高速域の速度・けん引力・出力制御」の完成済みEXAM_ALIGNMENTを正本として再利用し、同じ小問を調査し直す作業を避けた。そのうえでTopic 26固有の差分として、勾配を含む総合走行モデル、効率、速度条件、Topic 13では固定範囲外だった回生失効を統合し、制作前EXAM_ALIGNMENTだけを1段階進めた。

## Topic 25 解説PDF

- `PASS / EXPLANATION_PDF_CANONICAL_REPAIR_COMPLETE`
- canonical blob SHA: `7588e85204db180eee2bd5e2494708df4810276e`
- file size: `13,227 bytes`
- SHA-256: `7a4acfc30141e48e0469ce271aaa357f367f27e8030e1ca7b6adc1bbefb6156e`
- PDFium / Poppler: `3 / 3 PASS`
- 固定5問: `5 / 5 covered`
- 合計答案要素: `28 / 28 covered`
- SPEC必須10項目: `10 / 10 covered`
- 指定3可視化: `3 / 3 PASS`
- canonical artifact identity blocker: `RESOLVED`

## Topic 25 練習PDF

- `PASS / PRACTICE_PDF_COMPLETE`
- canonical blob SHA: `2dbb1439e2ee237065fce69e8ac11a9315c0335f`
- file size: `14,089 bytes`
- PDFium / Poppler: `5 / 5 PASS`
- 一次8問＋完全解説: `8 / 8`
- 二次4問＋完全解説: `4 / 4`
- 一次正答一意性: `8 / 8 PASS`
- 数値・論理独立再計算: `12 / 12 PASS`
- 固定答案要素接続: `28 / 28`

## Topic 25 PowerPoint

- `PASS / POWERPOINT_COMPLETE`
- canonical blob SHA: `726da748b8ceb7c0d6cdee770daca7738fc1c202`
- 16:9 / `6 slides`
- file size: `258,876 bytes`
- SHA-256: `0d0998d38ab8e5075c86b9c6f8c993390d43f7d053c81b784373942c9419fbd7`
- ZIP integrity / python-pptx / geometry: `PASS`
- LibreOffice render: `6 / 6 PASS`
- 固定5問: `5 / 5 connected`
- 一次 `20 / 20`、二次 `8 / 8`、合計 `28 / 28 connected`
- SPEC必須10項目: `10 / 10 PASS`
- 指定3可視化: `3 / 3 PASS`

## Topic 25 clean blind公式照合

成果物:
- `topics/25_n700s_battery_self_propulsion_energy_design/25_n700s_battery_self_propulsion_energy_design_clean_blind_official_match_qa.md`

判定:
- `PASS / CLEAN_BLIND_OFFICIAL_MATCH_COMPLETE`
- R8一次 問5: `5 / 5 PASS`
- R4一次 問6: `5 / 5 PASS`
- R2一次 問4: `5 / 5 PASS`
- R1一次 問4: `5 / 5 PASS`
- H23二次 問3: `8 / 8 PASS`
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
- 一次答案要素: `20 / 20 PASS`
- 二次答案要素: `8 / 8 PASS`
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

列車の勾配抵抗式・走行抵抗式をそのまま直接問う第二種公式過去問は固定対象として確認できなかった。したがって直接出題とは記載せず、Topic 14で確定済みの列車側力学 `R_g=mg sinθ≈mgi`、`P=Fv` をSPEC必須事項として、上記の電動機・効率・回生過去問へ接続する。

実車接続はJR東日本公式資料で確認できる「北陸新幹線の30‰急勾配」と「E7系のブレーキ性能向上」まで。編成質量、主電動機出力、編成出力、実けん引力、走行抵抗係数、実効率、回生限界は未確認値を真値化しない。

## 固定境界

- Topic 25固定EXAM_ALIGNMENT変更: `0件`
- Topic 26固定EXAM_ALIGNMENT: `5問・16答案要素`
- Topic 26で未確認のE7・W7実車値を真値化: `0件`
- Topic 26で未確認走行抵抗経験式・係数追加: `0件`
- Topic 21 H26二次 問1(4)の過去問固有丸め注記を維持。一般式 `P=Tω`, `ω=2πN/60` 変更: `0件`
- Topic 26固定過去問へのH26二次 問1(4)重複採用: `0件`
- SPEC外主題追加: `0件`

## 次の安全な工程

Topic 26解説source。固定5問・16答案要素とSPEC必須7項目・指定3可視化だけを入力条件として、公式・成立条件・解法手順・3段階例題・E7/W7実車接続を作成する。未確認の実車値や走行抵抗係数は仮定値と明示するか使用しない。仕様不整合または確定不能事項が出た場合はexact blockerを記録して停止する。
