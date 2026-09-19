# 23 N700S SiC主変換装置 - 練習PDF QA

更新日: 2026-09-19

判定: `PASS / PRACTICE_PDF_COMPLETE`

## 対象

- source: `23_n700s_sic_main_converter_practice_source.md`
- PDF: `23_n700s_sic_main_converter_practice.pdf`
- A4縦: `5ページ`
- SHA-256: `f6af37846ed6b984585e4403034a3278965d6116dc1941075e33c790f437c983`

## 表示・構造QA

- PDFium 180 dpi: `5 / 5 PASS`
- pdftoppm 180 dpi: `5 / 5 PASS`
- ページ欠落: `0`
- 文字・表のクリッピング: `0`
- 文字重なり: `0`
- 日本語欠落グリフ: `0`
- 置換文字 `�`: `0件`
- 黒四角・破損グリフ: `0件`
- A4縦: `PASS`
- `pdftotext` 文字抽出: `PASS`

## 問題QA

- 一次試験型: `8 / 8`
- 五肢択一: `8 / 8`
- 二次記述式: `4 / 4`
- 全問題: `12 / 12`
- 完全解説: `12 / 12`
- 式・単位・理由説明: `12 / 12`
- sourceから問題条件・正答・計算値の変更: `0件`

抽出テキストで一次問1〜問8、二次問1〜問4の見出しを全件確認した。

## 固定過去問品質ゲート

- R7 一次「機械」問4 `(1)〜(5)`: `covered`
- R4 一次「機械」問4 `(1)〜(5)`: `covered`
- R2 一次「機械」問2 `(1)〜(5)`: `covered`
- H24 一次「機械」問6 `(2),(3)`: `covered`
- H24 二次「機械・制御」問1 `(1)〜(6)`: `covered`

- 固定5問: `5 / 5 unchanged`
- 一次答案要素: `17 / 17 covered`
- 二次答案要素: `6 / 6 covered`
- 合計答案要素: `23 / 23 covered`
- 固定EXAM_ALIGNMENT変更: `0件`

## SPEC品質ゲート

SPEC固定8項目:
- SiC: `PASS`
- 導通損失: `PASS`
- スイッチング損失: `PASS`
- スイッチング周波数: `PASS`
- 変換効率: `PASS`
- 発熱: `PASS`
- 冷却: `PASS`
- 小型軽量化: `PASS`

`8 / 8 covered`

SPEC指定3可視化への接続:
1. 電流-導通損失: `PASS`
2. スイッチング周波数-総損失: `PASS`
3. 条件をそろえたSi系素子との比較: `PASS`

`3 / 3 aligned`

## 境界QA

- 固定問題差替え: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 公式過去問本文の複製: `0件`
- 固定SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- JR東海公表のN700A比7%消費電力量低減をSiC単独効果へ読み替え: `0件`
- 富士電機公表の20%軽量化をN700S車両全体の重量低減率へ拡張: `0件`
- 比較用 `V_on`, `E_on+E_off`, `f_s`, `R_th` を実車値扱い: `0件`
- 新たなexact blocker: `0件`

## 次工程

Topic 23 解説画像PowerPoint作成＋QA。練習PDF・PowerPoint完成後にclean blind独立再解答へ進む。
