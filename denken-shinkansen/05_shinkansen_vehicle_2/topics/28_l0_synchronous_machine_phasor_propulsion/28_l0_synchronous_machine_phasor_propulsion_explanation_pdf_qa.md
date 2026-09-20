# Topic 28 解説PDF QA

更新日: 2026-09-20

判定: `PASS / EXPLANATION_PDF_RESYNC_V2_COMPLETE`

## reconcile

最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、`HANDOFF.md`、Topic 28固定EXAM_ALIGNMENT、fresh blind履歴、remediation V2 source、既存練習PDF・PowerPointをreconcileした。

fresh blindで新たに露呈した教材不足だけをsourceへ最小補強し、固定5問・27答案要素、SPEC必須8項目、指定3可視化は変更していない。

## artifact identity

- path: `28_l0_synchronous_machine_phasor_propulsion_explanation.pdf`
- canonical GitHub blob SHA: `774df59978f3b4952fceb04fa596f0a3b191899e`
- source blob SHA: `ca52ffa9625184be7d5b00844aa411b713b52141`
- canonical artifact commit: `20dea48c39b2c0dc236acce45c15252342e13459`
- A4縦: `5 pages`

GitHub正本のbase64 payloadについて `%PDF-1.3` header、`/Count 5`、xref/trailer、`startxref=13818`、`%%EOF` を確認した。正本blobの構造破損は認められない。

## 表示・構造QA

アップロード元build artifactを130 dpiで両レンダラ検証した。

- PDFium: `5 / 5 PASS`
- Poppler: `5 / 5 PASS`
- `pdftotext -layout`: `PASS`
- 置換文字 `�`: `0件`
- 文字・図のクリッピング: `0件`
- 文字重なり: `0件`
- 指定3可視化: `3 / 3 PASS`
  - 発電機 / 電動機フェーザ図
  - 電力角特性
  - 負荷角―出力
- A4縦5頁: `PASS`

正本blobはGitHub contents APIで上記artifact identityを再取得し、5頁構造と正常なPDF trailerを確認した。

## remediation V2同期QA

- fresh blindで露呈したR4一次の並行運転条件に必要な因果説明: `PASS`
- fresh blindで露呈したH29二次の短絡比→同期リアクタンス中間知識: `PASS`
- 短絡比の成立条件明示: `PASS`
- H29 `φ / θ / δ` 記号分離: `PASS`
- 固定candidate編集: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`

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

これは教材接続QAであり、remediation V2後のfresh clean-blind再試験PASSを意味しない。Topic 28はまだ `completed` と数えない。

## 境界QA

- L0系の未確認実`X_s`、`E`、`δ`、有効電力、無効電力、推力、推進効率の真値化: `0件`
- `90°`をL0系実機の許容負荷角とする記述: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外主題追加: `0件`
- Topic 29浮上・案内系の先取り: `0件`
- Topic 21一般式変更: `0件`
- artifact-level exact blocker: `0件`

Topic 21 H26二次「機械・制御」問1(4)の `48.1 / 48.0 N·m` は公式標準解答の `π=3.14` 相当の数値処理による過去問固有丸め差という既存診断を維持し、一般式 `P=Tω`, `ω=2πN/60` は変更していない。

## 最終判定

`PASS / EXPLANATION_PDF_RESYNC_V2_COMPLETE`

完成数は `27 / 39` のまま。次工程は、今回のfresh candidate・fresh compare・公式解答を事前に見ていないfresh workerによる新規clean blind再試験。candidate固定後に公式照合し、`27 / 27 PASS` の場合のみTopic 28最終QAへ進む。
