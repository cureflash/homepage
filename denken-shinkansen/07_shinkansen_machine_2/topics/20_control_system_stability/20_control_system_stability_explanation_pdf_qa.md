# Topic 20 解説PDF QA

更新日: 2026-09-19
対象: `20_control_system_stability_explanation.pdf`

## 1. 仕様照合
- `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`、Topic 20 source を再確認。
- 固定EXAM_ALIGNMENTは一次2問＋二次3問、計5問・14答案要素のまま。
- Topic 21先取り: `0件`
- 未確認の新幹線実車ゲイン・安定余裕・制御周期・極配置の実車値化: `0件`
- 固定過去問の個別正答記号・最終数値保存: `0件`

## 2. 成果物
- A4縦5ページ。
- 特性方程式、極・零点、指定極・主要極、ラウス・フルビッツ、二次振動条件、根軌跡の概念、周波数応答、ボード線図、PI折れ線、`ω_gc`・`ω_pc`、ゲイン余裕・位相余裕、指定交差周波数からの逆算、新幹線速度フィードバックへの概念接続を収載。
- 固定5問・14答案要素: `14 / 14 COVERED`
- 基礎・本試験標準・複合の3段階例題: `3 / 3 INCLUDED`
- SPEC指定グラフ: ボード線図、ゲイン変更時の単位ステップ応答、安定/安定限界/不安定比較を同一教材用モデルで収載。

## 3. 表示QA
- 200 dpi `pdftoppm`: `5 / 5 PASS`
- `pdftocairo` 160 dpi: `5 / 5 PASS`
- 文字切れ、本文重なり、ページ外はみ出し、欠落グリフ: `0件`
- `K=8` 不安定応答は比較用に図内縦軸範囲でクリップしている。本文・ページ境界のクリッピングではない。

## 4. 文字抽出QA
- `pdftotext` 抽出成功。
- replacement char: `0`
- `(cid:)`: `0`
- `H23`、`H25`、`H30`、`R03`、`R04`、`14 / 14 COVERED`、`0<K<6`、`GM=6/K`、`√2` を抽出確認。

## 5. 数値・論理QA
教材用モデル `L(s)=K/{s(s+1)(s+2)}` について独立計算。
1. 特性方程式 `s^3+3s^2+2s+K=0`: `PASS`
2. 三次ラウスから `0<K<6`: `PASS`
3. `K=6` roots `-3, ±j√2`: `PASS`
4. `K=1` all `Re<0`: `PASS`
5. `K=5` all `Re<0`: `PASS`
6. `K=8` has RHP pair: `PASS`
7. `ω_pc=√2`: `PASS`
8. `|L(j√2)|=K/6`, `GM=6/K`: `PASS`

合計: `8 / 8 PASS`

## 6. GitHub正本同一性
- size: `17333 bytes`
- SHA-256: `f8e84a5f92fc05e07845a551625b9abd01a6e6823cfb322a6aa465b0e9a4b648`
- Git blob: `bbe9d9ff7ee149b9c625cdfd121a2dd0756efd1f`

## 7. 判定
`PASS / topic_20_explanation_pdf_complete`

次工程: Topic 20 練習source。
