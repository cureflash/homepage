# Topic 36 ATC② 信号伝送と周波数 — 解説PDF QA

更新日: 2026-09-21

判定: `PASS / EXPLANATION_PDF_COMPLETE`

## 正本・reconcile

- `denken-shinkansen/MASTER_SPEC.md`
- `denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`
- `denken-shinkansen/05_shinkansen_vehicle_2/SPEC.md`
- 当該系列 `STATUS.md` / `HANDOFF.md`
- Topic 36 制作前EXAM_ALIGNMENT / QA
- Topic 36 解説source / source QA
- Topic 35までの完成成果と直近main

既存workerのTopic 36制作前EXAM_ALIGNMENT＋解説source/QAを継承し、重複制作・固定問題差替えは行っていない。

## canonical

- PDF: `topics/36_atc_signal_transmission_frequency/36_atc_signal_transmission_frequency_explanation.pdf`
- PDF canonical commit: `bff073fc92073c69f3856bb7af61e667b70ca164`
- PDF blob SHA: `18f138fc0c2fa6699645c61c7f4f4d2c7d7bf3c1`
- PDF SHA-256: `dc304539249d3bb644872bfdb0516dc0eb6e2b207c45c4e75be0c30603dff932`
- file size: `8521 bytes`

## PDF QA

- A4縦: `2頁 / PASS` (`595.276 × 841.89 pt`)
- Ghostscript nullpage parse/render: `PASS`
- Poppler `pdfinfo` / `pdftotext -layout`: `PASS`
- PDFium 160 dpi render: `2 / 2 PASS`
- Poppler 160 dpi render: `2 / 2 PASS`
- PDFium / Poppler mean pixel diff: `0.00000% / 2頁`
- visual inspection: `2 / 2 PASS`
- edge clipping / overlap / broken-glyph box: `0件`
- minimum rendered content margin: `51 px`
- extracted text: `3007 chars / PASS`
- replacement character U+FFFD: `0件`

## 過去問対応ゲート

固定公式過去問は制作前EXAM_ALIGNMENTから変更しない。

- R8一次「理論」問5: `5 / 5 connected`
- R3一次「機械」問8: `5 / 5 connected`
- H26一次「機械」問8: `5 / 5 connected`
- H25一次「機械」問8: `5 / 5 connected`
- H22一次「機械」問8: `5 / 5 connected`
- 一次合計: `25 / 25 connected`
- 二次: `0問`。公式試験概要上、「電力システムに関する情報伝送及び処理」は一次「機械」の範囲であり、二次「機械・制御」の科目範囲には含まれない。
- 主題外二次問題の件数合わせ採用: `0件`

## SPEC固定8項目

- 周波数: `PASS`
- 信号伝送: `PASS`
- 変調: `PASS`
- フィルタ: `PASS`
- ノイズ: `PASS`
- S/N: `PASS`
- デジタル判定: `PASS`
- 冗長化: `PASS`

合計: `8 / 8 PASS`

## 3段階例題

- RLC共振: `f0 約50.3 Hz / Q 約3.16` — `PASS`
- 標本化・量子化: `f_s > 6 kHz / 8 bit = 256 levels` — `PASS`
- S/N: `20 dB → 約14.0 dB` — `PASS`

合計: `3 / 3 PASS`

## 境界確認

- 固定EXAM_ALIGNMENT変更: `0件`
- 未確認実車周波数・変調方式・受信しきい値・S/N要求値・冗長構成の真値化: `0件`
- RAID一般原理をATC実構成と同一視: `0件`
- Topic 37・38先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有の丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更していない。

## 次工程

Topic 36練習source＋source QA。固定5問・25答案要素、SPEC固定8項目、二次0問の適用判定、鉄道一次資料境界を維持する。