# 26 E7・W7系 勾配条件を含む総合走行解析 — 練習PDF QA

更新日: 2026-09-20

判定: `PASS / PRACTICE_PDF_COMPLETE`

## 正本artifact identity

- path: `26_e7_w7_gradient_integrated_running_analysis_practice.pdf`
- GitHub blob SHA: `8905c072f60a0b584c8cd7f439713606588bb500`
- file size: `11,005 bytes`
- SHA-256: `6c54571db61e98f8251e7171291a5a5bc57afaf751ff7e194240021b2009441e`
- A4縦: `4 pages`

## 表示・構造QA

- PDFium 160 dpi: `4 / 4 PASS`
- Poppler 160 dpi: `4 / 4 PASS`
- 目視確認: `4 / 4 PASS`
- `pdftotext`: `PASS`（6,415 bytes）
- 置換文字 `�`: `0件`
- 文字・表のクリッピング: `0件`
- 文字重なり・破損グリフ: `0件`
- 一次8問＋正答・完全解説: `8 / 8`
- 二次4問＋途中式・判定を含む完全解説: `4 / 4`

## 数値・論理QA

- 一次1: `Rg=98.0 kN`, `Freq=153 kN` → 正答4
- 一次2: `72 km/h=20 m/s`, `Pw=3.00 MW`, `Pin=3.33 MW` → 正答3
- 一次3: `Rg=78.4 kN`, `Freq=138.4 kN`, `v=260.1 km/h` → 正答3
- 一次4: `ω=157.08 rad/s`, `T=3819.7 N·m` → 正答4
- 一次5: `Ns=1000 min^-1`, `s=0.040` → 正答3
- 一次6: 固定H26条件表と一致 → 正答2
- 一次7: `Freq<0` 時の制動・回生成立条件を区別 → 正答3
- 一次8: 受電側なし→回生失効を区別 → 正答3
- 一次正答列: `4,3,3,4,3,2,3,3`
- 一次正答一意性: `8 / 8 PASS`
- 二次9: `117.6 kN`, `81.2 kN`, `198.8 kN`, `15.904 MW`, `17.67 MW`: `PASS`
- 二次10: `s=0.04`, `T≈4775 N·m`, `Pcu2=20.0 kW`, `Pfixed=100 kW`, `N'=970 min^-1`, `Pout'=363.75 kW`: `PASS`
- 二次11: `Freq=-36.4 kN`, `Breq=36.4 kN`, `Pbrake=2.912 MW`, `Preturn≤2.48 MW`: `PASS`
- 二次12: 力制限 `259.6 km/h`、出力制限 `254.7 km/h`、出力制限が先: `PASS`
- 数値・論理独立再計算: `12 / 12 PASS`

## 過去問対応品質ゲート

- 固定過去問: 第二種一次4問＋二次1問 = `5 / 5 connected`
- 一次答案要素: `10 / 10 connected`
- 二次答案要素: `6 / 6 connected`
- 合計答案要素: `16 / 16 connected`
- SPEC必須7項目: `7 / 7 covered`
- SPEC指定3可視化への計算接続: `3 / 3 aligned`
- 固定EXAM_ALIGNMENT変更: `0件`

## 境界QA

- 未確認E7・W7系の質量・走行抵抗式・効率・利用可能出力・けん引力・実性能曲線の真値化: `0件`
- 教材用仮定値を実車値として扱う: `0件`
- Topic 21 H26二次 問1(4)の過去問固有丸め注記を維持
- Topic 21一般式 `P=Tω`, `ω=2πN/60` 変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外主題追加: `0件`
- 新たなexact blocker: `0件`

## 完成判定

練習PDF工程は `PASS / PRACTICE_PDF_COMPLETE`。Topic 26全体は解説source/PDF、練習source/PDFまで完了。PowerPoint、完成後clean blind、最終QAが未完了のため `completed` ではない。完成数は `25 / 39` のまま。

次工程: Topic 26 PowerPoint生成＋QA。固定EXAM_ALIGNMENT・実車値境界・Topic 21一般式は変更しない。
