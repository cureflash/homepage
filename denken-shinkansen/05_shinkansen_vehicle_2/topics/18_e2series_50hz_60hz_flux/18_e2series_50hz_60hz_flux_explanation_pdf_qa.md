# Topic 18 解説PDF QA

更新日: 2026-09-19

対象:
- source: `18_e2series_50hz_60hz_flux_explanation_source.md`
- source blob SHA: `df938e27212a1daa208e01bfe39f82b5b0850acf`
- PDF: `18_e2series_50hz_60hz_flux_explanation.pdf`
- PDF SHA-256: `e6b9d358032196fba5a4c64a0e42124b2df372a3457727610cb3529460b64d88`

## 判定

`PASS / EXPLANATION_PDF_COMPLETE`

## PDF基本QA

- A4縦: `PASS`
- ページ数: `6`
- 暗号化: `なし`
- PyMuPDF openable: `PASS`
- 180 dpi描画: `6 / 6 PASS`
- pdfium描画: `6 / 6 PASS`
- pdftoppm描画: `6 / 6 PASS`
- 欠落文字・黒四角・クリップ・重なり: `0件`
- 文字抽出: `PASS`

使用したCID日本語フォントはPDFへ埋め込まれないためpreflight警告が出るが、pdfium / pdftoppmの2系統で全6ページを再描画し、本文・数式・表・グラフの表示を確認した。既存系列と同じ生成方式を維持する。

## 数式・数値QA

主要式の文字抽出:
- `E = 4.44 f N Φm`: `PASS`
- `Bm = Φm / A`: `PASS`
- `V/f = 一定`: `PASS`
- `Ns = 120 f / P`: `PASS`
- `s = (Ns - N) / Ns`: `PASS`
- `f2 = s f`: `PASS`

数値独立再計算:
- 60 Hz→50 Hzの磁束密度比 `60/50 = 1.20`: `PASS`
- 例題2 `Ns = 120×50/6 = 1000 min^-1`: `PASS`
- 例題2 `N = 0.96×1000 = 960 min^-1`: `PASS`
- 例題2 `f2 = 0.04×50 = 2.0 Hz`: `PASS`
- 例題3 `V = (200/50)×30 = 120 V`: `PASS`
- 例題3 `Ns = 120×30/4 = 900 min^-1`: `PASS`
- 例題3 `s = (900-855)/900 = 0.050`: `PASS`
- 例題3 `f2 = 0.050×30 = 1.5 Hz`: `PASS`
- 合計: `8 / 8 PASS`

## 固定EXAM_ALIGNMENT品質ゲート

固定EXAM_ALIGNMENTは変更していない。

- R7 二次 機械・制御 問2 `(1)の滑り算出`: `1要素`
- R2 二次 機械・制御 問1 `(1)〜(7)`: `7要素`
- R2 一次 機械 問3 `(1)(4)(5)`: `3要素`
- R2 一次 機械 問5 `(3)(4)(5)`: `3要素`
- H25 一次 機械 問2 `(5)`: `1要素`
- 一次: `7答案要素`
- 二次: `8答案要素`
- 合計: `5問・15答案要素`

PDF本文への固定要求知識配置: `15 / 15 PASS`

## SPEC品質ゲート

指定7項目:
- V/f: `PASS`
- 磁束: `PASS`
- 変圧器誘起電圧: `PASS`
- 鉄心磁束密度: `PASS`
- 同期速度: `PASS`
- インバータ出力周波数: `PASS`
- 機器定格: `PASS`
- 合計: `7 / 7 PASS`

指定3可視化:
- 周波数―磁束密度: `PASS`
- V/f特性: `PASS`
- 周波数―同期速度: `PASS`
- 合計: `3 / 3 PASS`

その他:
- 3段階例題: `3 / 3 PASS`
- 電源周波数とインバータ出力周波数の区別: `PASS`
- 二次試験用の回転磁界相対速度7要素: `7 / 7 covered`
- SPEC外追加: `0件`
- 未確認E2系実車値の真値化: `0件`
- 固定過去問・答案要素変更: `0件`

## 次工程

Topic 18の練習sourceを作る。解説PDF完成前の工程へ戻らず、固定5問・15答案要素とSPEC境界を維持する。完成後clean blind公式照合は、必要成果物完成後に実施する。
