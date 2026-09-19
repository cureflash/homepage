# Topic 25 PowerPoint QA

更新日: 2026-09-20

判定: `PASS / POWERPOINT_COMPLETE`

## 対象

- `25_n700s_battery_self_propulsion_energy_design_images.pptx`
- canonical blob SHA: `726da748b8ceb7c0d6cdee770daca7738fc1c202`
- 16:9 / `6 slides`
- file size: `258,876 bytes`
- SHA-256: `0d0998d38ab8e5075c86b9c6f8c993390d43f7d053c81b784373942c9419fbd7`

## reconcile

最新main、系列 `STATUS.md` / `HANDOFF.md`、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、Topic 25解説source/PDF、練習source/PDF、直近Topic 25コミットを照合した。既存成果物を変更せず、未完了だったPowerPoint生成・QAだけを実施した。

## 構造・表示QA

- PPTX ZIP integrity: `PASS`
- python-pptx open: `PASS`
- slide count: `6 / 6`
- slide geometry bounds: `PASS`
- LibreOffice headless render: `6 / 6 pages PASS`
- `pdftotext`: `PASS`
- 16:9: `PASS`
- 同一generatorのcontact-sheet視認: `6 / 6 PASS`
- クリッピング・重なり・破損グリフ: `0件`

## 内容QA

固定EXAM_ALIGNMENTは変更していない。

1. R8 一次「機械」問5 `(1)〜(5)` — 5答案要素
2. R4 一次「機械」問6 `(1)〜(5)` — 5答案要素
3. R2 一次「機械」問4 `(1)〜(5)` — 5答案要素
4. R1 一次「機械」問4 `(1)〜(5)` — 5答案要素
5. H23 二次「機械・制御」問3 `(1)〜(4)` — 8答案要素

一次 `20 / 20`、二次 `8 / 8`、合計 `28 / 28 connected`。電池基礎、ファラデー換算、鉛蓄電池、リチウムイオン電池、Cレート、内部抵抗、充放電端子電圧、可逆チョッパ、エネルギー収支へ接続した。

SPEC必須10項目: 電池電圧 / Ah / Wh / 直列・並列 / Cレート / 放電電流 / 電池効率 / インバータ効率 / モーター効率 / 必要容量 = `10 / 10 PASS`。

SPEC指定3可視化: 走行時間―必要電力量 / 速度条件―必要電力 / 効率―必要電池容量 = `3 / 3 PASS`。

## 数値再確認

- `η_total = 0.93×0.96×0.95 = 0.84816`: `PASS`
- 5 min, 300 kW → `E_mech = 25 kWh`: `PASS`
- `25/0.84816 = 29.48 kWh`: `PASS`
- `29.48×1000/600 = 49.13 Ah`: `PASS`
- `300/(0.93×0.96) = 336.0 kW`: `PASS`
- `336000/600 = 560 A`: `PASS`
- 2C条件 → `560/2 = 280 Ah`: `PASS`
- `Q_design = max(49.13,280) = 280 Ah`: `PASS`
- 効率0.70 / 0.75 / 0.80 / 0.85 / 0.90 → `59.52 / 55.56 / 52.08 / 49.02 / 46.30 Ah`: `PASS`

## 固定境界

- N700S実車接続はSCiB採用・バッテリー自走共同開発まで: `維持`
- 未確認N700S電池値の真値化: `0件`
- 未指定走行抵抗モデル追加: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21 H26二次 問1(4)の `48.0 / 48.1 N·m` 過去問固有丸め差に関する一般式変更: `0件`

## 次工程

Topic 25完成後clean blind独立再解答。PowerPoint完成だけではTopic 25を `completed` にしない。
