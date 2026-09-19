# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜24は最終QAまで `PASS / completed`。完成数は `24 / 39`。

現在地は `topic_25_practice_source_complete`。active topicは Topic 25 `N700S バッテリー自走のエネルギー設計`。

## 今回のreconcile

最新main、系列 `STATUS.md` / `HANDOFF.md`、Topic 25固定EXAM_ALIGNMENT、解説source、解説PDF/PDF QA、練習source、直近commitをreconcileした。既存workerが練習sourceまで進めていたため同工程は重複せず、先に検出された解説PDF正本artifact identity blockerの解消だけを1段階進めた。

旧正本blob `aeec135e3fcecd5002623c8ab8de7d5bf76bd5ea` は `9,982 bytes` で `startxref=13270` と不整合だったため、後続工程へ進まず正常なPDFへ置換して正本再QAを実施した。

## Topic 25 解説PDF 正本修復

成果物:
- `topics/25_n700s_battery_self_propulsion_energy_design/25_n700s_battery_self_propulsion_energy_design_explanation.pdf`
- `topics/25_n700s_battery_self_propulsion_energy_design/25_n700s_battery_self_propulsion_energy_design_explanation_pdf_qa.md`

判定:
- `PASS / EXPLANATION_PDF_CANONICAL_REPAIR_COMPLETE`
- 修復commit: `31b90f6b7238a825986ca41ccedd7a0762300670`
- GitHub main blob SHA: `7588e85204db180eee2bd5e2494708df4810276e`
- file size: `13,227 bytes`
- SHA-256: `7a4acfc30141e48e0469ce271aaa357f367f27e8030e1ca7b6adc1bbefb6156e`
- A4縦: `3 pages`
- PDFium 180 dpi: `3 / 3 PASS`
- Poppler 180 dpi: `3 / 3 PASS`
- `pdftotext`: `PASS`
- 置換文字・クリッピング・重なり・破損グリフ: `0件`
- 固定過去問: 第二種一次4問＋二次1問 = `5 / 5 covered`
- 一次答案要素: `20 / 20 covered`
- 二次答案要素: `8 / 8 covered`
- 合計答案要素: `28 / 28 covered`
- SPEC必須10項目: `10 / 10 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`
- 旧canonical artifact identity blocker: `RESOLVED`
- 新たなexact blocker: `0件`

GitHub mainをbase64で再取得し、blob SHAが事前QA対象blob `7588e85204db180eee2bd5e2494708df4810276e` と一致することを確認したため、render・文字抽出結果を正本QAとして採用する。

## Topic 25 練習source

判定: `PASS / PRACTICE_SOURCE_COMPLETE`

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

一次 `20`、二次 `8`、合計 `28`。固定EXAM_ALIGNMENT変更 `0件`。

## Topic 25 固定境界

N700S実車接続は東芝一次メーカー資料で確認済みのSCiB採用・バッテリー自走共同開発まで。未確認の電池電圧、Ah、Wh、セル数、直並列数、Cレート、実放電電流、各効率を真値化しない。速度条件―必要電力は与件の仮定入力比較に限定し、未指定走行抵抗モデルを追加しない。

## Topic 21 H26二次 問1(4)

`48.1 / 48.0 N·m` 差は公式標準解答が `π=3.14` 相当を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 次の安全な工程

Topic 25練習PDFを既存練習sourceから生成し、表示・数式・単位・一次正答一意性・二次記述解答・固定28答案要素coverageをQAする。完成数は `24 / 39` のまま。
