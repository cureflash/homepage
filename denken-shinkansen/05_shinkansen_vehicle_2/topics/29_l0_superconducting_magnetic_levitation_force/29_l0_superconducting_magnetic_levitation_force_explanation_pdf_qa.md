# Topic 29 解説PDF QA

更新日: 2026-09-20

判定: `PASS / EXPLANATION_PDF_COMPLETE`

## reconcile

最新main `629d63e9540141cd081cd171bacd6ed2a8895645`、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、`HANDOFF.md`、Topic 29固定EXAM_ALIGNMENT、既存workerの解説source/QAをreconcileした。既存workerが完了したsource工程は再実施せず、その正本から解説PDFのみ生成した。

## artifact identity

- path: `29_l0_superconducting_magnetic_levitation_force_explanation.pdf`
- canonical Git blob SHA: `f656c1b95a542bf15bfc77ca2f799fda6886faa0`
- source blob SHA: `23b9130422a3089eb682ce4c20edc7d715b41d47`
- file size: `14,747 bytes`
- A4縦: `4 pages`

ローカル生成物のGit blob SHAを独立計算し、`f656c1b95a542bf15bfc77ca2f799fda6886faa0` と一致することを確認した。

## 表示・構造QA

- PDFium: `4 / 4 PASS`
- Poppler: `4 / 4 PASS`
- `pdftotext -layout`: `PASS`
- 置換文字 `�`: `0件`
- 文字・図のクリッピング: `0件`
- 文字重なり: `0件`
- A4縦: `PASS`
- 指定3可視化: `3 / 3 PASS`
  - 磁束変化―誘導起電力
  - 速度―誘導電流
  - 速度―電磁力

## 数式・数値QA

sourceの数式・単位・符号を維持した。例題は独立再計算済み。

- `Ψ(t)=0.12 cos(2π50t)` → `E_hat=37.7 V`, `E_rms=26.7 V`: `PASS`
- `M=0.010 cos(20x)`, `i1=30 A`, `i2=10 A`, `20x=30°` → `dM/dx=-0.100 H/m`, `F=-30 N`: `PASS`
- 教材用1コイルモデル `v=30 m/s` → `ω=120 rad/s`, `E_rms=6.79 V`, `ωL=2.40 Ω`, `I_rms=2.74 A`, `F_model≈110 N`: `PASS`

## 過去問対応品質ゲート

- R8 一次「理論」問2: `5 / 5 covered`
- R7 一次「理論」問2: `5 / 5 covered`
- R4 一次「理論」問2: `5 / 5 covered`
- R2 一次「理論」問2: `5 / 5 covered`
- H23 二次「機械・制御」問1: `4 / 4 covered`
- 一次答案要素: `20 / 20 covered`
- 二次答案要素: `4 / 4 covered`
- 合計答案要素: `24 / 24 covered`
- SPEC必須8項目: `8 / 8 covered`
- 指定3可視化: `3 / 3 PASS`

これは解説PDF工程の教材接続QAであり、Topic 29最終clean blind PASSを意味しない。

## 境界QA

- L0系未確認の磁界・コイル電流・`R/L/M`・寸法・浮上力・案内力・速度しきい値の真値化: `0件`
- 教材用 `I_rms(v)` / `F_model(v)` の実車一般式化: `0件`
- Topic 30「誘導集電・非接触電力伝送」先取り: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

Topic 21 H26二次「機械・制御」問1(4)の `48.1 / 48.0 N·m` は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差という既存診断を維持し、一般式 `P=Tω`, `ω=2πN/60` は変更していない。

## 最終判定

`PASS / EXPLANATION_PDF_COMPLETE`

完成数は `28 / 39` のまま。次工程はTopic 29練習source作成。教材一式完成前にclean blind独立再解答へ進まない。
