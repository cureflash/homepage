# Topic 32 解説PDF QA

更新日: 2026-09-20

判定: `PASS / EXPLANATION_PDF_COMPLETE`

## reconcile

最新main、上位仕様、系列SPEC、STATUS/HANDOFF、固定EXAM_ALIGNMENT、既存workerの解説source/source QAをreconcileし、既存成果を再利用した。固定EXAM_ALIGNMENTは変更していない。

## PDF QA

- A4縦: `7頁`
- PDFium render: `7 / 7 PASS`
- Poppler render: `7 / 7 PASS`
- 空白頁: `0件`
- ページ端・重大な重なり: `0件`（同一builderの事前視認＋canonical raster確認）
- 置換文字 U+FFFD: `0件`
- 固定5問・30答案要素: `30 / 30 PASS`
- R8 一次「機械」問7: `10 / 10 connected`
- R7 一次「機械」問7: `5 / 5 connected`
- R6 一次「機械」問6: `5 / 5 connected`
- R4 一次「機械」問5: `5 / 5 connected`
- R3 一次「機械」問6: `5 / 5 connected`
- 一次: `30 / 30 PASS`
- 二次: `対象外（公式「機械・制御」試験範囲に照明なし）`
- SPEC固定9項目: `9 / 9 PASS`
- 3段階例題: `3 / 3 PASS`
- 例題1: `63.66 cd / 15.92 lx` — `PASS`
- 例題2: `13.02... → 14光源 → 7器具` — `PASS`
- 例題3: `942.48 lm / 94.25 lm/W / 33.33 lx` — `PASS`
- R7一次問7の `111 lm/W / 70% / 16.6 lx`: `PASS`
- R4一次問5型の `26器具`: `PASS`
- R3一次問6型の多重反射・光度・光束発散度・水平面照度・輝度: `PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 未確認実車値の真値化: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答の `π=3.14` 相当の数値処理による過去問固有丸め差として注記し、一般式 `P=Tω`, `ω=2πN/60` は変更していない。

## 次工程

Topic 32練習source。固定5問・30答案要素、SPEC固定9項目へ接続し、一次試験型を中心に作成する。二次は公式範囲外のため件数合わせで追加しない。
