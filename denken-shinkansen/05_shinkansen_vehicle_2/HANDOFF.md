# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜24は最終QAまで `PASS / completed`。完成数は `24 / 39`。

現在地は `topic_25_powerpoint_complete`。active topicは Topic 25 `N700S バッテリー自走のエネルギー設計`。

## 今回の進行

最新main、系列 `STATUS.md` / `HANDOFF.md`、上位仕様、系列 `SPEC.md`、Topic 25固定EXAM_ALIGNMENT、解説source/PDF、練習source/PDF、直近Topic 25コミットをreconcileした。既存成果物を重複修正せず、次の未完了工程だった解説画像PowerPoint生成・QAだけを1段階進めた。

## Topic 25 解説PDF

- 判定: `PASS / EXPLANATION_PDF_CANONICAL_REPAIR_COMPLETE`
- canonical blob SHA: `7588e85204db180eee2bd5e2494708df4810276e`
- file size: `13,227 bytes`
- SHA-256: `7a4acfc30141e48e0469ce271aaa357f367f27e8030e1ca7b6adc1bbefb6156e`
- PDFium / Poppler: `3 / 3 PASS`
- 固定過去問 `5 / 5`、答案要素 `28 / 28`、SPEC必須10項目 `10 / 10`、指定3可視化 `3 / 3 PASS`
- artifact identity blocker: `RESOLVED`

## Topic 25 練習source

- 判定: `PASS / PRACTICE_SOURCE_COMPLETE`
- 一次8問、二次4問、合計12問
- 固定過去問 `5 / 5 connected`
- 一次 `20 / 20`、二次 `8 / 8`、合計 `28 / 28 connected`
- SPEC必須10項目 `10 / 10 covered`
- 数値・論理独立再計算 `12 / 12 PASS`
- 一次正答一意性 `8 / 8 PASS`

## Topic 25 練習PDF

成果物:
- `topics/25_n700s_battery_self_propulsion_energy_design/25_n700s_battery_self_propulsion_energy_design_practice.pdf`
- `topics/25_n700s_battery_self_propulsion_energy_design/25_n700s_battery_self_propulsion_energy_design_practice_pdf_qa.md`

判定:
- `PASS / PRACTICE_PDF_COMPLETE`
- blob SHA: `2dbb1439e2ee237065fce69e8ac11a9315c0335f`
- file size: `14,089 bytes`
- SHA-256: `ab6df0853fe14f2ec8daeb4a43329bab7fcc9a3eeb68f260aadb05531f4d343c`
- A4縦: `5 pages`
- PDFium 180 dpi: `5 / 5 PASS`
- Poppler 180 dpi: `5 / 5 PASS`
- `pdftotext`: `PASS`
- 置換文字・クリッピング・重なり・破損グリフ: `0件`
- 一次8問＋完全解説: `8 / 8`
- 二次4問＋完全解説: `4 / 4`
- 一次正答列: `3,2,3,3,2,3,4,2`
- 一次正答一意性: `8 / 8 PASS`
- 数値・論理独立再計算: `12 / 12 PASS`
- 固定過去問: 第二種一次4問＋二次1問 = `5 / 5 connected`
- 一次答案要素: `20 / 20 connected`
- 二次答案要素: `8 / 8 connected`
- 合計答案要素: `28 / 28 connected`
- SPEC必須10項目: `10 / 10 covered`
- SPEC指定3計算・可視化への計算接続: `3 / 3 aligned`

## Topic 25 解説画像PowerPoint

成果物:
- `topics/25_n700s_battery_self_propulsion_energy_design/25_n700s_battery_self_propulsion_energy_design_images.pptx`
- `topics/25_n700s_battery_self_propulsion_energy_design/25_n700s_battery_self_propulsion_energy_design_images_qa.md`

判定:
- `PASS / POWERPOINT_COMPLETE`
- canonical blob SHA: `726da748b8ceb7c0d6cdee770daca7738fc1c202`
- 16:9 / `6 slides`
- file size: `258,876 bytes`
- SHA-256: `0d0998d38ab8e5075c86b9c6f8c993390d43f7d053c81b784373942c9419fbd7`
- ZIP integrity / python-pptx open / geometry: `PASS`
- LibreOffice render: `6 / 6 PASS`
- `pdftotext`: `PASS`
- 固定過去問: `5 / 5 connected`
- 一次答案要素: `20 / 20 connected`
- 二次答案要素: `8 / 8 connected`
- 合計答案要素: `28 / 28 connected`
- SPEC必須10項目: `10 / 10 PASS`
- SPEC指定3可視化: `3 / 3 PASS`

## 固定境界

- 固定EXAM_ALIGNMENT変更: `0件`
- N700S実車接続は東芝一次メーカー資料で確認済みのSCiB採用・バッテリー自走共同開発まで
- 未確認の電池電圧、Ah、Wh、セル数、直並列数、Cレート、実放電電流、各効率の真値化: `0件`
- 速度条件―必要電力は教材用与件に限定、未指定走行抵抗モデル追加: `0件`
- Topic 21 H26二次 問1(4)の過去問固有丸め注記を維持。一般式 `P=Tω`, `ω=2πN/60` 変更: `0件`
- SPEC外主題追加: `0件`
- 完成後clean blind: `PENDING`

## 次の安全な工程

Topic 25完成後clean blind独立再解答。保存済み正答を先に見ず、固定5問・28答案要素を教材だけで再解答し、PASS後に最終QAへ進む。完成数は `24 / 39` のまま。
