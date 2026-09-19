# 25 N700S バッテリー自走のエネルギー設計 — 練習PDF QA

更新日: 2026-09-20

判定: `PASS / PRACTICE_PDF_COMPLETE`

## 正本artifact identity

- path: `25_n700s_battery_self_propulsion_energy_design_practice.pdf`
- GitHub blob SHA: `2dbb1439e2ee237065fce69e8ac11a9315c0335f`
- file size: `14,077 bytes`
- SHA-256: `ab6df0853fe14f2ec8daeb4a43329bab7fcc9a3eeb68f260aadb05531f4d343c`
- A4縦: `5 pages`

## 表示・構造QA

- PDFium 180 dpi: `5 / 5 PASS`
- Poppler 180 dpi: `5 / 5 PASS`
- 目視確認: `5 / 5 PASS`
- `pdftotext`: `PASS`（8,988 bytes）
- 置換文字 `�`: `0件`
- 文字・表のクリッピング: `0件`
- 文字重なり・破損グリフ: `0件`
- 一次8問＋解答完全解説: `8 / 8`
- 二次4問＋解答完全解説: `4 / 4`

## 数値・論理QA

- 一次1: `26.8×3600=96480 C` → 正答3
- 一次4: `3.5×0.50×10/175=0.100 kg` → 正答3
- 一次5: `370 V, 100 Ah, 37 kWh` → 正答2
- 一次6: `20 A, 0.5 h, 3.70 V` → 正答3
- 一次7: `240/(0.90×0.96)=277.78 kW` → 正答4
- 一次8: 充電 `D E_p1` / 放電 `E_b2/(1-D)` → 正答2
- 一次正答列: `3,2,3,3,2,3,4,2`
- 一次正答一意性: `8 / 8 PASS`
- 二次1: 充電 `10 A / 1 h / 3.65→3.85 V`、放電 `20 A / 0.5 h / 3.70→3.50 V`、`I^2R` 損失 `0.5 / 2.0 W`: `PASS`
- 二次2: `25 kWh → 29.48 kWh → 49.13 Ah`、`336.02 kW → 560.0 A → 280 Ah`: `PASS`
- 二次3: `100s20p / 2000セル / 37 kWh / 200 A / 0.5 h`: `PASS`
- 二次4: `200 Ah → 7.20×10^5 C → 3.73 mol → 約893 g`: `PASS`
- 数値・論理独立再計算: `12 / 12 PASS`

## 過去問対応品質ゲート

- 固定過去問: 第二種一次4問＋二次1問 = `5 / 5 connected`
- 一次答案要素: `20 / 20 connected`
- 二次答案要素: `8 / 8 connected`
- 合計答案要素: `28 / 28 connected`
- SPEC必須10項目: `10 / 10 covered`
- SPEC指定3計算・可視化への計算接続: `3 / 3 aligned`
- 固定EXAM_ALIGNMENT変更: `0件`

## 境界QA

- 未確認N700S電池電圧・Ah・Wh・セル数・直並列数・Cレート・実電流・各効率の真値化: `0件`
- N700S実車事実: 東芝一次メーカー資料で確認済みのSCiB採用・バッテリー自走共同開発まで
- 未指定走行抵抗モデル追加: `0件`
- Topic 21一般式 `P=Tω`, `ω=2πN/60` 変更: `0件`
- SPEC外主題追加: `0件`
- 新たなexact blocker: `0件`

## 完成判定

練習PDF工程は `PASS / PRACTICE_PDF_COMPLETE`。Topic 25全体はPowerPoint、完成後clean blind、最終QAが未完了のため `completed` ではない。完成数は `24 / 39` のまま。

次工程: 解説source / 解説PDF / 練習source / 練習PDFを正本入力として解説画像PowerPointを作成し、内容・表示・固定28答案要素への接続をQAする。
