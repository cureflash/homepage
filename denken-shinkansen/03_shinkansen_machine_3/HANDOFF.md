# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-16

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は `9 / 16`。Topic 01〜09は品質ゲートPASSでcompleted。active topicは10「新幹線の速度はどう自動制御される？」。

## 今回進捗
Topic 10の最終QAを実施し、`NEEDS_REVISION / IN_PROGRESS` と判定した。技術内容・過去問対応・必須成果物・表示QA・固定範囲境界は全件PASS。唯一のFAILは練習source `topics/10_automatic_control/10_automatic_control_practice.md` 末尾の旧次工程1箇所で、既に完成済みの練習PDF・QAより進捗記録が古い。技術本文、固定EXAM_ALIGNMENT、問題・正答、PDF/PPTXは変更していない。

- 品質ゲート対象: 公式過去問5件
- 固定問題: R8上 問13、R7下 問13、R5下 問18(a)、R5上 問13、R4上 問15(a)
- 制作前検証: `5 / 5 PASS`
- 解説本文＋3段階例題: 完成
- 固定5件の本文マッピング: `5 / 5 全件`
- 解説PDF: A4縦4ページ、200 dpi表示QA `4 / 4 PASS`、文字抽出QA `PASS`
- 練習問題source: 全12問・全問五肢択一、独立計算・論理QA `12 / 12 PASS`、正答一意性QA `12 / 12 PASS`
- 練習PDF: A4縦6ページ、200 dpi表示QA `6 / 6 PASS`、文字抽出QA `PASS`
- 解説画像PowerPoint: 16:9・4枚、表示QA `4 / 4 PASS`、overflow `0件`、PPTX ZIP整合性 `PASS`
- 完成後独立再解答前ゲート: `BLIND_REANSWER_READY`（再解答開始時に条件遵守済み）
- 完成後独立再解答: `(4),(3),(5),(1),(2)` / `5 / 5 PASS`
- 教材外・固定範囲外知識による補完: `0件`
- 最終QA: `NEEDS_REVISION / IN_PROGRESS`
- source進捗整合: `FAIL`（練習source末尾1箇所のみ）
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`
- 完成数: `9 / 16` のまま

固定範囲は、目標値・制御量・操作量・外乱、フィードバック/フィードフォワード、開ループ/閉ループ、ブロック線図、伝達関数、一次/二次遅れ、時定数、定常偏差、安定性、`G(s)/(1+G(s)H(s))`。PID、ボード線図、ナイキスト線図、ベクトル軌跡、シーケンス制御等は件数合わせで追加しない。実車の制御アルゴリズムは推測しない。

## 成果物
- source: `topics/10_automatic_control/10_automatic_control.md`
- 解説PDF: `topics/10_automatic_control/10_automatic_control_explanation.pdf`
- 解説PDF QA: `topics/10_automatic_control/10_automatic_control_explanation_pdf_qa.md`
- 練習問題source: `topics/10_automatic_control/10_automatic_control_practice.md`
- 練習PDF: `topics/10_automatic_control/10_automatic_control_practice.pdf`
- 練習PDF QA: `topics/10_automatic_control/10_automatic_control_practice_pdf_qa.md`
- PowerPoint: `topics/10_automatic_control/10_automatic_control_images.pptx`
- PowerPoint QA: `topics/10_automatic_control/10_automatic_control_powerpoint_qa.md`
- 独立再解答前ゲート監査: `topics/10_automatic_control/10_automatic_control_blind_reanswer_gate.md`

## Topic 10 EXAM_ALIGNMENT
品質ゲート対象は5件で固定。

1. R8上 機械 問13 — ブロック線図、負帰還、並列経路、合成周波数伝達関数
2. R7下 機械 問13 — ブロック線図、負帰還、正負の並列経路、合成周波数伝達関数
3. R5下 機械 問18(a) — RC回路の周波数伝達関数、一次遅れ形の分母
4. R5上 機械 問13 — 一次遅れ、時定数、R-L回路、周波数伝達関数
5. R4上 機械 問15(a) — フィードバック系、制御対象の合成、一巡伝達関数

完成後blind独立再解答は `(4),(3),(5),(1),(2)` で公式解答と `5 / 5 PASS`。教材だけで公式選択・途中式構成・選択肢照合が可能で、教材外・固定範囲外知識による補完は0件。

### 非選定
- R7上 機械 問13: 行過ぎ量等を直接要求し、固定範囲外の説明追加を避けるため除外。
- R6下 機械 問13: PID制御を直接要求するため除外。
- R6上 機械 問13: リレーシーケンス、インタロック、タイムチャートまで必要なため除外。
- R5下 機械 問13: ボード線図が主要求のため除外。
- R5下 機械 問18(b): 比例プラス積分要素まで拡張するため除外。
- R4上 機械 問15(b): ベクトル軌跡が固定範囲外のため除外。

## Topic 10 最終QA
- 必須成果物の実在: `PASS`
- 固定EXAM_ALIGNMENT 5件: `PASS`
- 完成後blind独立再解答: `5 / 5 PASS`
- 解説PDF表示QA・文字抽出QA: `PASS`
- 練習PDF表示QA・文字抽出QA: `PASS`
- PowerPoint表示QA・overflow・ZIP整合性: `PASS`
- 固定範囲境界: `PASS`
- 教材外・固定範囲外知識による補完: `0件`
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`
- source進捗整合: `FAIL`
- exact blocker: 練習source末尾に `次工程: このsourceを基に練習PDFを作成し、全ページ表示QA・文字抽出QAを行う。` が残るが、練習PDFとQAは既に完成済み
- 判定: `NEEDS_REVISION / IN_PROGRESS`

## Topic 10 現在地
- 制作前EXAM_ALIGNMENT: 完了
- 制作前独立検証: `5 / 5 PASS`
- 解説本文: 完了
- 3段階例題: 完了
- 固定5件の本文マッピング: `5 / 5 全件`
- 解説PDF: 完了
- 練習問題source: 完了
- 練習PDF: 完了
- 解説画像PowerPoint: 完了
- 完成後独立再解答前ゲート: `BLIND_REANSWER_READY`（条件遵守済み）
- 完成後独立再解答: `5 / 5 PASS`
- 教材外・固定範囲外知識による補完: `0件`
- 最終QA: `NEEDS_REVISION / IN_PROGRESS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`

## 次に行う
`topics/10_automatic_control/10_automatic_control_practice.md` 末尾の旧次工程1箇所だけを実成果物へ同期する。その後にTopic 10の最終QAを再実施する。