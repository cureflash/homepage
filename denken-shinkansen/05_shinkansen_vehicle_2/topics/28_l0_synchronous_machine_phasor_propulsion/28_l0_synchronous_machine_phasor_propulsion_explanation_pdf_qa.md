# Topic 28 解説PDF QA

更新日: 2026-09-20

判定: `PASS / EXPLANATION_PDF_COMPLETE`

## reconcile

最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、`HANDOFF.md`、Topic 28制作前EXAM_ALIGNMENT、解説sourceとsource QAを確認した。Topic 28は解説sourceまで完了済みだったため、重複せず次工程の解説PDF生成＋PDF QAだけを実施した。

固定EXAM_ALIGNMENTは変更していない。

- 固定過去問: `5問`
- 一次: `1問・5答案要素`
- 二次: `4問・22答案要素`
- 合計: `27答案要素`

## artifact identity

- path: `28_l0_synchronous_machine_phasor_propulsion_explanation.pdf`
- canonical blob SHA: `76972b166fbe6241349ba1b31f21367e5a1f298e`
- file size: `11,959 bytes`
- SHA-256: `a6cd9a0b51e3dfc49f8773e4f56fa4779f673b9b2e09525e81662acf2bbb676a`
- A4縦: `3 pages`

## 表示・構造QA

- PDFium 130 dpi: `3 / 3 PASS`
- Poppler 130 dpi: `3 / 3 PASS`
- `pdftotext -layout`: `PASS`（8,271 bytes）
- 置換文字 `�`: `0件`
- 文字・図のクリッピング: `0件`
- 文字重なり: `0件`
- 日本語欠落グリフ・破損グリフ: `0件`
- 指定3可視化: `3 / 3 PASS`
  - 発電機 / 電動機フェーザ図
  - 電力角特性
  - 負荷角―出力
- 教材用仮定値注記: `PASS`

PDFiumとPopplerの双方で全3ページを確認し、本文・図・表の欠落、クリッピング、重なりは確認されなかった。

## 数値・論理独立再計算

### 例題1 発電機フェーザ

`V=1.00`, `X_s=0.80`, `I=0.60`, 力率`0.80`遅れ。

`sinθ=0.60`, `X_sI=0.48`

`E=(1+0.48×0.60)+j(0.48×0.80)=1.288+j0.384`

`|E|=1.3440238... p.u.`, `δ=16.6012...°`

`P=(VE/X_s)sinδ=0.480000... p.u.` = `VIcosθ=0.480000... p.u.`

判定: `PASS`

### 例題2 電力角特性と無効電力

`V=1.00`, `E=1.20`, `X_s=0.70`, `δ=25°`

`P=(1.20/0.70)sin25°=0.724488... p.u.`

`Q=(1.20/0.70)cos25°-1/0.70=0.125099... p.u.`

判定: `PASS`

### 例題3 負荷角から推進力

`V=1.00`, `E=1.15`, `X_s=0.60`, `P_e=0.80 p.u.`, base=`30 MW`, `η=0.88`, `v=500 km/h`

`sinδ=0.80×0.60/1.15=0.4173913...`

`δ=24.669998...°`

`P_e=24.0 MW`, `P_mech=21.12 MW`, `v=138.888... m/s`

`F=21.12×10^6/138.888...=152064 N≈152 kN`

判定: `PASS`

3段階例題: `3 / 3 PASS`

## 過去問対応品質ゲート

- R4 一次「機械」問1: `5 / 5 covered`
- R7 二次「機械・制御」問1: `6 / 6 covered`
- R5 二次「機械・制御」問1: `6 / 6 covered`
- H29 二次「機械・制御」問1: `6 / 6 covered`
- H27 二次「機械・制御」問1: `4 / 4 covered`
- 一次答案要素: `5 / 5 covered`
- 二次答案要素: `22 / 22 covered`
- 合計答案要素: `27 / 27 covered`
- SPEC必須8項目: `8 / 8 covered`
- 固定教材必要説明8項目: `8 / 8 covered`
- 指定3可視化: `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`

## 境界QA

- L0系の未確認実`X_s`、`E`、`δ`、有効電力、無効電力、推力、推進効率の真値化: `0件`
- `90°`をL0系実機の許容負荷角とする記述: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外主題追加: `0件`
- Topic 29浮上・案内系の先取り: `0件`
- 突極機二反作用、d-q軸、過渡・次過渡リアクタンスの追加: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## 最終判定

`PASS / EXPLANATION_PDF_COMPLETE`

完成数は `27 / 39` のまま。Topic 28は未完了。

次工程: Topic 28 練習source。固定5問・27答案要素と解説PDFを入力として、一次試験型＋二次記述式の練習問題を作成し、数値・論理を独立再計算する。
