# STATUS - 新幹線車両・電験二種

更新日: 2026-09-20

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `24 / 39`
- current_status: `topic_25_practice_source_complete`
- last_completed_topic: `24 N700S 主電動機設計の比較`
- active_topic: `25 N700S バッテリー自走のエネルギー設計`
- next_start: Topic 25練習PDFを生成し、表示・数式・単位・一次正答一意性・二次記述解答・固定28答案要素coverageをQAする

## Topic 25 解説PDF 正本修復

- 判定: `PASS / EXPLANATION_PDF_CANONICAL_REPAIR_COMPLETE`
- 修復commit: `31b90f6b7238a825986ca41ccedd7a0762300670`
- GitHub main blob SHA: `7588e85204db180eee2bd5e2494708df4810276e`
- file size: `13,227 bytes`
- SHA-256: `7a4acfc30141e48e0469ce271aaa357f367f27e8030e1ca7b6adc1bbefb6156e`
- A4縦: `3 pages`
- PDFium render: `3 / 3 PASS`
- Poppler render: `3 / 3 PASS`
- `pdftotext`: `PASS`
- 固定過去問: 第二種一次4問＋二次1問 = `5 / 5 covered`
- 一次答案要素: `20 / 20 covered`
- 二次答案要素: `8 / 8 covered`
- 合計答案要素: `28 / 28 covered`
- SPEC必須10項目: `10 / 10 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`
- 旧正本blob `aeec135e3fcecd5002623c8ab8de7d5bf76bd5ea` / `9,982 bytes` のartifact identity blocker: `RESOLVED`
- 未確認N700S電池値の真値化: `0件`
- 未指定走行抵抗モデル追加: `0件`
- Topic 21一般式変更: `0件`
- 新たなexact blocker: `0件`

成果物:
- `topics/25_n700s_battery_self_propulsion_energy_design/25_n700s_battery_self_propulsion_energy_design_explanation.pdf`
- `topics/25_n700s_battery_self_propulsion_energy_design/25_n700s_battery_self_propulsion_energy_design_explanation_pdf_qa.md`

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
- SPEC指定3計算・可視化: `3 / 3 aligned`
- 数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 未確認N700S電池値の真値化: `0件`
- 未指定走行抵抗モデル追加: `0件`
- Topic 21一般式変更: `0件`
- 完成後clean blind: `PENDING`

成果物:
- `topics/25_n700s_battery_self_propulsion_energy_design/25_n700s_battery_self_propulsion_energy_design_practice_source.md`

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

Topic 01〜24: `PASS / completed`。完成数 `24 / 39`。Topic 25は練習PDF、PowerPoint、完成後clean blind、最終QAが未完了。
