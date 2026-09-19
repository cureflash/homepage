# Topic 21 解説PDF QA

更新日: 2026-09-19

対象:
- source: `21_high_speed_tractive_force_output_control_explanation_source.md`
- gate補足: `21_high_speed_tractive_force_output_control_explanation_source_gate_addendum.md`
- PDF: `21_high_speed_tractive_force_output_control_explanation.pdf`

判定: `PASS / EXPLANATION_PDF_H26_NOTE_SYNC_COMPLETE`

## 今回の同期

H26二次「機械・制御」問1 `(4)` の過去問固有数値処理注記を解説PDFへ同期した。

同期内容:
- 一般式 `P=Tω`、`ω=2πN/60` は変更しない
- 高精度 `π` では `TL=48.046775... N·m → 48.0 N·m`
- 公式標準解答は `I2'=22.430 A`、`48.067 → 48.1 N·m`
- 公式掲載 `I2'=22.430 A` と `π=3.14` で `48.067347... N·m` を再現できる
- 差は当該過去問固有の数値処理差として扱う
- H26二次 問1 `(4)` の公式照合では公式標準解答 `48.1 N·m` を正本とする
- 他の例題・練習問題・一般式の `π` の扱いは変更しない

## 仕様・過去問対応

- 固定EXAM_ALIGNMENT変更: `0件`
- 固定過去問: `一次2問＋二次3問 / 5問`
- 固定答案要素: `一次3＋二次3 / 6`
- 固定答案要素のPDF接続: `6 / 6 covered`
- H26一次 問5 `(4),(5)` の最小判別条件: `2 / 2 covered`
- SPEC指定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`
- 固定問題差替え: `0件`
- SPEC外追加: `0件`
- 未確認実車値の真値化: `0件`
- 一般式変更: `0件`
- 練習問題・正答変更: `0件`

## PDF QA

- A4縦: `3 pages`
- PDFium 180 dpi: `3 / 3 PASS`
- pdftoppm 180 dpi: `3 / 3 PASS`
- 文字抽出: `PASS`
- H26固有注記文字抽出: `PASS`
- 欠落グリフ・黒四角・重なり・クリップ: `0件 / 2 renderer visual check`
- PDF構造・開封: `PASS`
- 数式・数値のsource再照合: `PASS`
- 例題1: `ω=314.159 rad/s`, `T=954.930 N·m`
- 例題2: `T(4500 min^-1)=636.620 N·m`, `P_train=7.2 MW`, `F(180 km/h)=144.0 kN`
- 例題3: `200 km/h`で`R=101.728 kN`, `P_req=5.652 MW`, `F_avail=129.6 kN`; `240 km/h`で`R=128.889 kN`, `P_req=8.593 MW`, `F_avail=108.0 kN`
- 可視化条件: source固定の `n_m=24`, `Pm0=300 kW`, `vb=120 km/h`, `R(v)=40000+20v^2` を維持
- 日本語フォント: Adobe Japanese CID参照。PDFium / Poppler双方で表示欠落なし、pdftotext抽出PASS

## 不変条件

- 候補答案変更: `0件`
- 他5答案要素変更: `0件`
- 固定問題差替え: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定SPEC外追加: `0件`
- 練習source/PDF変更: `0件`
- PowerPoint変更: `0件`

次工程はPowerPointのH26過去問固有注記同期要否を判定する。Topic 21は派生同期とclean blind再確認が終わるまで `completed` にしない。
