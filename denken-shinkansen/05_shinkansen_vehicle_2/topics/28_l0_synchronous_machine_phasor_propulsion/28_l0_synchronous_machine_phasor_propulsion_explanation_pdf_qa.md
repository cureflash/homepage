# Topic 28 解説PDF QA

更新日: 2026-09-20

判定: `PASS / EXPLANATION_PDF_RESYNC_COMPLETE`

## reconcile

最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、`HANDOFF.md`、Topic 28固定EXAM_ALIGNMENT、remediation後解説source、既存練習PDF・PowerPoint・旧clean blind結果を確認した。

既存workerがH29二次「機械・制御」問1(1)の `φ / θ / δ` 記号対応を解説sourceへ最小補強済みで、旧解説PDFだけが補強前sourceのままだった。このため本工程では解説PDF再同期＋表示/構造QAだけを実施し、練習成果物・PowerPoint・固定clean blind候補は再作成/編集していない。

固定EXAM_ALIGNMENTは変更していない。

- 固定過去問: `5問`
- 一次: `1問・5答案要素`
- 二次: `4問・22答案要素`
- 合計: `27答案要素`

## artifact identity

- path: `28_l0_synchronous_machine_phasor_propulsion_explanation.pdf`
- canonical blob SHA: `1eaa458d46a636ac4955d3475073e14071b4cd7f`
- source blob SHA: `8f9562b6b56a22ec7b507a5dc5834fda73787515`
- file size: `17,642 bytes`
- SHA-256: `45d7c54bda708a74bf760fa7c1ec470f4aedce67ab564eae52f7d99f09f23e9c`
- A4縦: `3 pages`

## 表示・構造QA

- PDFium 130 dpi: `3 / 3 PASS`
- Poppler 130 dpi: `3 / 3 PASS`
- `pdftotext -layout`: `PASS`（`11,200 bytes`）
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

## remediation同期QA

- H29本試験の `φ` = 本教材の `θ` = 力率角: `PASS`
- `φ / θ` は `V-I` 位相差、`δ` は `V-E` 負荷角として分離: `PASS`
- 指定変数式 `E=sqrt(V^2+2VX_sI sinφ+(X_sI)^2)`: `PASS`
- 電圧変動率 `ε={E-V}/V×100 [%]`: `PASS`
- 頻出ミスへの `φ / θ / δ` 取り違え追加: `PASS`
- 旧clean blind候補の編集: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`

## 数値・論理独立再計算

### 例題1 発電機フェーザ

`V=1.00`, `X_s=0.80`, `I=0.60`, 力率`0.80`遅れ。

`E=1.288+j0.384`

`|E|=1.3440238... p.u.`, `δ=16.6012...°`

`P=(VE/X_s)sinδ=0.480000... p.u.` = `VIcosθ=0.480000... p.u.`

判定: `PASS`

### 例題2 電力角特性と無効電力

`V=1.00`, `E=1.20`, `X_s=0.70`, `δ=25°`

`P=0.724488... p.u.`

`Q=0.125099... p.u.`

判定: `PASS`

### 例題3 負荷角から推進力

`V=1.00`, `E=1.15`, `X_s=0.60`, `P_e=0.80 p.u.`, base=`30 MW`, `η=0.88`, `v=500 km/h`

`δ=24.669998...°`, `P_e=24.0 MW`, `P_mech=21.12 MW`, `v=138.888... m/s`

`F=152064 N≈152 kN`

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

`PASS / EXPLANATION_PDF_RESYNC_COMPLETE`

完成数は `27 / 39` のまま。Topic 28はまだ未完了。

次工程: 公式解答を見ていないfresh workerが、remediation後教材だけを使ってclean blind候補を別ファイルへ新規固定し、固定5問・27答案要素を公式再照合する。旧候補は編集しない。
