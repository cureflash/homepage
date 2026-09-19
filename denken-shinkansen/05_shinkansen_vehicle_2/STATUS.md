# STATUS - 新幹線車両・電験二種

更新日: 2026-09-20

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `24 / 39`
- current_status: `topic_25_blind_reanswer_candidates_fixed`
- last_completed_topic: `24 N700S 主電動機設計の比較`
- active_topic: `25 N700S バッテリー自走のエネルギー設計`
- next_start: Topic 25 clean blind固定候補を変更せず、公式解答・標準解答と固定5問・28答案要素を照合する

## Topic 25 解説PDF

- 判定: `PASS / EXPLANATION_PDF_CANONICAL_REPAIR_COMPLETE`
- canonical blob SHA: `7588e85204db180eee2bd5e2494708df4810276e`
- file size: `13,227 bytes`
- SHA-256: `7a4acfc30141e48e0469ce271aaa357f367f27e8030e1ca7b6adc1bbefb6156e`
- PDFium / Poppler: `3 / 3 PASS`
- 固定過去問: `5 / 5 covered`
- 合計答案要素: `28 / 28 covered`
- SPEC必須10項目: `10 / 10 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- artifact identity blocker: `RESOLVED`

## Topic 25 練習source

- 判定: `PASS / PRACTICE_SOURCE_COMPLETE`
- 一次試験型: `8問`
- 二次試験型: `4問`
- 合計: `12問`
- 固定過去問: `5 / 5 connected`
- 一次答案要素: `20 / 20 connected`
- 二次答案要素: `8 / 8 connected`
- 合計答案要素: `28 / 28 connected`
- SPEC必須10項目: `10 / 10 covered`
- 数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`

## Topic 25 練習PDF

- 判定: `PASS / PRACTICE_PDF_COMPLETE`
- path: `topics/25_n700s_battery_self_propulsion_energy_design/25_n700s_battery_self_propulsion_energy_design_practice.pdf`
- blob SHA: `2dbb1439e2ee237065fce69e8ac11a9315c0335f`
- file size: `14,089 bytes`
- SHA-256: `ab6df0853fe14f2ec8daeb4a43329bab7fcc9a3eeb68f260aadb05531f4d343c`
- A4縦: `5 pages`
- PDFium render: `5 / 5 PASS`
- Poppler render: `5 / 5 PASS`
- `pdftotext`: `PASS`
- 一次8問＋完全解説: `8 / 8`
- 二次4問＋完全解説: `4 / 4`
- 一次正答一意性: `8 / 8 PASS`
- 数値・論理独立再計算: `12 / 12 PASS`
- 固定過去問: `5 / 5 connected`
- 合計答案要素: `28 / 28 connected`

## Topic 25 解説画像PowerPoint

- 判定: `PASS / POWERPOINT_COMPLETE`
- path: `topics/25_n700s_battery_self_propulsion_energy_design/25_n700s_battery_self_propulsion_energy_design_images.pptx`
- QA: `topics/25_n700s_battery_self_propulsion_energy_design/25_n700s_battery_self_propulsion_energy_design_images_qa.md`
- canonical blob SHA: `726da748b8ceb7c0d6cdee770daca7738fc1c202`
- file size: `258,876 bytes`
- SHA-256: `0d0998d38ab8e5075c86b9c6f8c993390d43f7d053c81b784373942c9419fbd7`
- 16:9: `6 slides`
- ZIP integrity / python-pptx / geometry: `PASS`
- LibreOffice render: `6 / 6 PASS`
- 固定過去問: `5 / 5 connected`
- 一次答案要素: `20 / 20 connected`
- 二次答案要素: `8 / 8 connected`
- 合計答案要素: `28 / 28 connected`
- SPEC必須10項目: `10 / 10 PASS`
- SPEC指定3可視化: `3 / 3 PASS`

## Topic 25 clean blind独立再解答候補

- 判定: `CANDIDATES_FIXED / OFFICIAL_NOT_CHECKED`
- path: `topics/25_n700s_battery_self_propulsion_energy_design/25_n700s_battery_self_propulsion_energy_design_blind_reanswer_candidates_clean.md`
- 固定過去問: `5 / 5 solved`
- 一次答案要素: `20 / 20 candidate fixed`
- 二次答案要素: `8 / 8 candidate fixed`
- 合計答案要素: `28 / 28 candidate fixed`
- 問題PDF以外の公式解答・標準解答参照: `0件`
- 候補固定後編集: `0件`
- 新たなexact blocker: `0件`

## Topic 25 固定EXAM_ALIGNMENT

1. R8 一次「機械」問5 `(1)〜(5)` — 5答案要素
2. R4 一次「機械」問6 `(1)〜(5)` — 5答案要素
3. R2 一次「機械」問4 `(1)〜(5)` — 5答案要素
4. R1 一次「機械」問4 `(1)〜(5)` — 5答案要素
5. H23 二次「機械・制御」問3 `(1)〜(4)` — 8答案要素

集計: 一次 `20`、二次 `8`、合計 `28`。固定EXAM_ALIGNMENT変更 `0件`。

## Topic 25 固定境界

N700S実車接続は東芝一次メーカー資料で確認済みのSCiB採用・バッテリー自走共同開発まで。未確認の電池電圧、Ah、Wh、セル数、直並列数、Cレート、実放電電流、各効率を真値化しない。速度条件―必要電力は与件の仮定入力比較に限定し、未指定走行抵抗モデルを追加しない。

## Topic 21 H26二次 問1(4)

`48.0 / 48.1 N·m` 差は公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 完成数

Topic 01〜24: `PASS / completed`。完成数 `24 / 39`。Topic 25は解説source/PDF、練習source/PDF、PowerPoint、clean blind候補固定まで完了。公式照合と最終QAが未完了。
