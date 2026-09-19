# 23 N700S SiC主変換装置 — 解説PDF QA

更新日: 2026-09-19

判定: `PASS / EXPLANATION_PDF_COMPLETE`

## 対象

- source: `23_n700s_sic_main_converter_explanation_source.md`
- PDF: `23_n700s_sic_main_converter_explanation.pdf`
- A4縦: `5 pages`
- SHA-256: `1aeefef853b5b7c8dea01ab2f0bc1e8d8fa12e30450c8914b8abe47e62432686`

## 表示・構造QA

- PDFium render: `5 / 5 PASS`
- Poppler render: `5 / 5 PASS`
- 文字抽出: `PASS`
- 置換文字 `�`: `0件`
- クリッピング: `0件`
- 文字重なり: `0件`
- 黒四角・破損グリフ: `0件`
- 3可視化の軸・凡例・仮定値注記: `PASS`

## 内容QA

固定EXAM_ALIGNMENTは変更していない。

- 固定過去問: 第二種一次4問＋二次1問 = `5 / 5 covered`
- 一次答案要素: `17 / 17 covered`
- 二次答案要素: `6 / 6 covered`
- 合計答案要素: `23 / 23 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`

## 実車値境界

- 比較用の `V_on`, `E_on+E_off`, `f_s`, `R_th` は教材用仮定値と明記: `PASS`
- JR東海公表のN700A比7%消費電力量低減をSiC単独効果として扱っていない: `PASS`
- 富士電機公表の従来比20%軽量化を「車両用駆動システム全体」の範囲に限定し、N700S車両全体20%減へ読み替えていない: `PASS`
- 損失低減→発熱低減→冷却要求低減→冷却機構簡素化→小型軽量化の因果だけを教材責務として扱う: `PASS`

## 過去問品質ゲート上の位置付け

本工程では固定5問・23答案要素がPDF内で解ける説明に対応していることを確認した。完成後clean blindの候補答案固定・公式照合はまだ実施しない。Topic 23教材完成後に別工程で行う。

## 次工程

Topic 23練習source作成。固定5問・23答案要素、SPEC固定8項目、指定3可視化、実車値境界を変更しない。
