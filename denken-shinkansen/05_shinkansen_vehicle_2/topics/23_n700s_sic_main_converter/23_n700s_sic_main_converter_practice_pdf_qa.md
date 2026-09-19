# 23 N700S SiC主変換装置 - 練習PDF QA

更新日: 2026-09-19

判定: `PASS / PRACTICE_PDF_RESYNC_COMPLETE`

## 対象

- source: `23_n700s_sic_main_converter_practice_source.md`
- source blob: `f9b0db257ae972a6a89d8e4983dcd7006578ce40`
- PDF: `23_n700s_sic_main_converter_practice.pdf`
- A4縦: `5ページ`
- SHA-256: `9dce2e523db192ca32ce786e7ca60672fe8fca6a91f279117c17d8ce3e81d1fc`

## clean blind補強同期

- R2一次「機械」問2 `(2)`: 「矢印極性→状態表→平均値」を同期し、`V=D V_dc` を明示: `PASS`
- R2一次「機械」問2 `(4)`: 与えられた `p(t)` 三角波を積分し、`W_off=(1/2)V_dc I_dc T_2` を明示: `PASS`
- 練習一次問4の `VI t_s/6`: `v(t)` と `i(t)` が相補的直線ランプとなる本問条件だけに限定: `PASS`
- 既存12問の問題数・正答・数値変更: `0件`

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
- sourceから問題条件・正答・計算値の変更: `0件`

## 固定過去問品質ゲート

- 固定5問: `5 / 5 unchanged`
- R7 一次「機械」問4 `(1)〜(5)`: `covered`
- R4 一次「機械」問4 `(1)〜(5)`: `covered`
- R2 一次「機械」問2 `(1)〜(5)`: `covered`
- H24 一次「機械」問6 `(2),(3)`: `covered`
- H24 二次「機械・制御」問1 `(1)〜(6)`: `covered`
- 一次答案要素: `17 / 17 covered`
- 二次答案要素: `6 / 6 covered`
- 合計答案要素: `23 / 23 covered`
- 固定EXAM_ALIGNMENT変更: `0件`

## SPEC品質ゲート

- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化への接続: `3 / 3 aligned`
- 一般式 `E_sw=∫v(t)i(t)dt` 変更: `0件`
- 固定SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- JR東海公表のN700A比7%消費電力量低減をSiC単独効果へ読み替え: `0件`
- 富士電機公表の20%軽量化をN700S車両全体の重量低減率へ拡張: `0件`
- 新たなexact blocker: `0件`

## 次工程

Topic 23 PowerPointを既存6枚構成の範囲で必要最小限再生成し、R2読図補強2点を同期して表示・内容QAする。固定5問・23答案要素、SPEC固定8項目・指定3可視化、一般式、仮定値／実車値境界は変更しない。
