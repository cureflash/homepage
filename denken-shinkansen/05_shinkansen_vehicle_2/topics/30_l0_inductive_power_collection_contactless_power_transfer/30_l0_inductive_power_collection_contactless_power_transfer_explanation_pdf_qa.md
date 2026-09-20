# Topic 30 解説PDF QA

更新日: 2026-09-20

判定: `PASS / EXPLANATION_PDF_COMPLETE`

## reconcile

生成着手直前の最新main `ac0233a9537f2fc275e1cac90a6d07ea8369d326`、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、`HANDOFF.md`、Topic 30固定EXAM_ALIGNMENT、既存workerの解説source/QAおよび一時PDF builderをreconcileした。既存workerが完了したEXAM_ALIGNMENT/source工程は再実施せず、既存builderを引き継いで解説PDF工程だけを完了した。

## artifact identity

- path: `30_l0_inductive_power_collection_contactless_power_transfer_explanation.pdf`
- canonical Git blob SHA: `a3926909e5240e4d77042f12e903f299f81d6800`
- source blob SHA: `4c65d9499783cf262f7cc5d9956bd75da7866cbc`
- file size: `154,721 bytes`
- A4縦: `7 pages`

GitHub正本のcontent metadataとcanonical render QAで Git blob SHA `a3926909e5240e4d77042f12e903f299f81d6800` を一致確認した。

## 表示・構造QA

- PDFium: `7 / 7 PASS`
- Poppler: `7 / 7 PASS`
- `pdftotext -layout`: `PASS`
- 置換文字 `�`: `0件`
- 文字・図のクリッピング: `0件`
- 文字重なり: `0件`
- A4縦: `PASS`
- 指定3可視化: `3 / 3 PASS`
  - 結合係数―伝送電力
  - 負荷条件―効率
  - 周波数特性

GitHub正本PDFを150 dpiでPoppler / PDFiumの双方に通し、7頁すべてのレンダリング成功を確認した。ローカル事前レンダーでは表示欠け・文字化け・クリッピング・重なりなしを目視確認した。

## 数式・数値QA

sourceの数式・単位・成立条件を維持した。教材用数値は独立再計算済み。

- `M=0.30*sqrt(2.0 mH*1.5 mH)=0.5196 mH`: `PASS`
- `C_2=1/(ω^2L_2)=16.8869 μF` at 1.000 kHz: `PASS`
- 共振時 `|I_2|=7.593 A`, `P_L=230.59 W`: `PASS`
- `P_cu1=40.00 W`, `P_cu2=17.29 W`, `η=80.1%`: `PASS`
- 負荷効率の教材モデル最適点 `R_L,opt≈2.84 Ω`: `PASS`
- 周波数特性 500/750/1000/1250/1500 Hz の `P_L,η`: source値と一致 `PASS`
- 変圧器例 `α_max=sqrt(500/800)=0.7906`, `η≈98.4%`: `PASS`

## 過去問対応品質ゲート

- R8 一次「理論」問5: `5 / 5 covered`
- R7 一次「理論」問2: `5 / 5 covered`
- H30 一次「理論」問2: `5 / 5 covered`
- H30 一次「機械」問5: `5 / 5 covered`
- R2 二次「機械・制御」問2: `5 / 5 covered`
- 一次答案要素: `20 / 20 covered`
- 二次答案要素: `5 / 5 covered`
- 合計答案要素: `25 / 25 covered`
- SPEC必須7項目: `7 / 7 covered`
- 指定3可視化: `3 / 3 PASS`

これは解説PDF工程の教材接続QAであり、Topic 30最終clean blind PASSを意味しない。

## 境界QA

- 未確認L0系の `k/L_1/L_2/M/R/f/伝送電力/効率/ギャップ/寸法/補償定数` の真値化: `0件`
- 教材用1 kHz・仮定`k`の実機値化: `0件`
- 通常変圧器とL0系誘導集電の同一定数・同一構造扱い: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

Topic 21 H26二次「機械・制御」問1(4)の `48.1 / 48.0 N·m` は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差という既存診断を維持し、一般式 `P=Tω`, `ω=2πN/60` は変更していない。

## 最終判定

`PASS / EXPLANATION_PDF_COMPLETE`

完成数は `29 / 39` のまま。次工程はTopic 30練習source作成。教材一式完成前にclean blind独立再解答へ進まない。
