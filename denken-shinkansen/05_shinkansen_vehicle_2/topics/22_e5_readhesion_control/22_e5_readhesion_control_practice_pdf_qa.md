# Topic 22 E5系 再粘着制御 - 練習PDF QA

更新日: 2026-09-19

判定: `PASS / PRACTICE_PDF_COMPLETE`

## 対象

- source: `22_e5_readhesion_control_practice_source.md`
- PDF: `22_e5_readhesion_control_practice.pdf`
- A4縦: `7ページ`
- SHA-256: `86f325b51ac1e0e9fa1e509fbcca56115c6858ee5a82d32cb7888d8589df0530`

## 表示・構造QA

- PDFium 180 dpi: `7 / 7 PASS`
- pdftoppm 180 dpi: `7 / 7 PASS`
- ページ欠落: `0`
- 文字・表のクリッピング: `0`
- 文字重なり: `0`
- 日本語欠落グリフ: `0`
- A4縦: `PASS`
- `pdftotext` 文字抽出: `PASS`

## 問題QA

- 一次試験型: `8 / 8`
- 五肢択一: `8 / 8`
- 二次記述式: `4 / 4`
- 全問題: `12 / 12`
- 完全解説: `12 / 12`
- 途中式・単位・理由説明: `12 / 12`

抽出テキストで問1〜問12の見出しを全件確認した。

## 固定過去問品質ゲート

- H28 一次 機械 問5 `(4),(5)`: `covered`
- R2 一次 機械 問3 `(1)`: `covered`
- R7 二次 機械・制御 問2 `s1`,`N2`: `covered`
- R2 二次 機械・制御 問1 `(2),(3),(4)`: `covered`
- H21 二次 機械・制御 問4 `(4),(5a),(5b)`: `covered`

- 固定5問: `5 / 5 unchanged`
- 一次答案要素: `3 / 3 covered`
- 二次答案要素: `8 / 8 covered`
- 合計答案要素: `11 / 11 covered`

## SPEC品質ゲート

SPEC固定8項目:
- 粘着係数: `PASS`
- 粘着限界: `PASS`
- 空転: `PASS`
- 滑走: `PASS`
- 速度差検出: `PASS`
- トルク指令: `PASS`
- 再粘着: `PASS`
- フィードバック: `PASS`

`8 / 8 covered`

SPEC指定3可視化への接続:
1. 粘着限界-速度: `PASS`
2. 指令トルク-粘着限界: `PASS`
3. 簡略再粘着応答: `PASS`

`3 / 3 aligned`

## 境界QA

- 固定問題差替え: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 公式過去問本文の複製: `0件`
- 公式解答・標準解答の個別正答保存: `0件`
- 固定SPEC外追加: `0件`
- 未確認E5系実車値の真値化: `0件`
- 車輪側速度差と誘導機すべりの同一視: `0件`
- `T proportional to s` の成立条件外一般化: `0件`
- 新たなexact blocker: `0件`

## 次工程

Topic 22 解説画像PowerPoint作成＋QA。練習PDF・PowerPoint完成後にclean blind独立再解答へ進む。
