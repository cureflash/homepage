# Topic 34 コンプレッサ・ポンプ・ファンの負荷特性 — 解説PDF QA

更新日: 2026-09-20

判定: `PASS / EXPLANATION_PDF_COMPLETE`

## 正本・reconcile

- `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md` / `HANDOFF.md`、固定EXAM_ALIGNMENT、解説source/source QAを確認した。
- 固定EXAM_ALIGNMENT `5問 / 27答案要素` は変更していない。
- PDF canonical commit: `fc51bf01a1ffbeca40d0ccf8c5820278731009ea`。
- PDF SHA-256: `0e296a9fe5efe720c7d1ed3d21194327b2eded20c6e4c80c0db03d6d0a00e507`。

## PDF QA

- canonical: `34_compressor_pump_fan_load_characteristics_explanation.pdf`
- A4縦: `8頁 / PASS`
- PDFium render: `8 / 8 PASS`
- Poppler render: `8 / 8 PASS`
- 空白頁: `0件`
- ページ端切れ: `0件`
- 文字抽出: `7323 chars / PASS`
- 置換文字 U+FFFD: `0件`
- 160 dpi content bounds: 全8頁で安全マージン内 `PASS`
- renderer pixel差: `0.8407%〜4.3934%`。フォント描画差を含むが、5%超のページ `0件`、ページ数・内容境界は一致。

## 固定過去問答案要素ゲート

- R7 一次「機械」問2: `5 / 5 PASS`
- R6 一次「機械」問2: `5 / 5 PASS`
- H25 一次「機械」問3: `5 / 5 PASS`
- R7 二次「機械・制御」問2: `6 / 6 PASS`
- R4 二次「機械・制御」問3: `6 / 6 PASS`
- 一次: `15 / 15 PASS`
- 二次: `12 / 12 PASS`
- 合計: `27 / 27 PASS`

## SPEC固定7項目

- 電動機出力: `PASS`
- 負荷トルク: `PASS`
- ポンプ動力: `PASS`
- ファン動力: `PASS`
- 回転速度: `PASS`
- 効率: `PASS`
- インバータ制御: `PASS`

`7 / 7 PASS`。

初回PDFでは解説本文の内容は満たしていたが、PDF冒頭で `インバータ制御` のSPEC表記が明示されず文字抽出ゲートが `6 / 7` となったため、固定SPECを変更せず冒頭に7項目を明示して再生成した。最終PDFでは `7 / 7 PASS`。

## 3段階例題再計算

### 基礎

`T = 15000 / {2π(1500/60)} = 95.49... N·m` → PDF値 `95.5 N·m`: `PASS`

### 本試験標準

- `N_s = 120×50/4 = 1500 min^-1`: `PASS`
- `s = (1500-1440)/1500 = 0.040 = 4.0 %`: `PASS`
- `ω = 2π×1440/60 = 150.796... rad/s`: `PASS`
- `T = 30000/150.796... = 198.94... N·m` → `199 N·m`: `PASS`
- `P_in = 30/0.90 = 33.333... kW` → `33.3 kW`: `PASS`

### 複合・ひっかけ

- `k = 45/60 = 0.75`: `PASS`
- `18×0.75^3 = 7.59375 kW` → `7.59 kW`: `PASS`
- `7.59375/0.88 = 8.629... kW` → `8.63 kW`: `PASS`
- V/f一定時の電圧比 `0.75`: `PASS`

`3 / 3 PASS`。

## 範囲境界QA

- 固定EXAM_ALIGNMENT変更: `0件`
- コンプレッサ圧縮熱力学追加: `0件`
- 冷凍サイクル・冷媒物性追加: `0件`
- 未確認新幹線実車値の真値化: `0件`
- Topic 35以降の先取り: `0件`
- Topic 21一般式変更: `0件`
- ポンプ水動力式・ファン相似則を固定二種過去問の直接出題式とする記述: `0件`
- exact blocker: `0件`

## 次工程

Topic 34練習source。固定5問・27答案要素、SPEC固定7項目へ接続し、一次試験型と二次記述型を含める。範囲境界は維持する。
