# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-16

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は `9 / 16`。Topic 01〜09は品質ゲートPASSでcompleted。active topicは10「新幹線の速度はどう自動制御される？」。

## 今回進捗
Topic 10のblind独立再解答準備を完了し、`BLIND_REANSWER_READY` とした。前回BLOCKED要因だった制作前答案番号・完成済み導出結果を、必須先読み対象の `STATUS.md`、`HANDOFF.md`、主sourceから除去した。固定問題選定、要求知識、教材内マッピング、制作前検証 `5 / 5 PASS` の事実は維持し、教材本文・PDF・練習問題・PowerPoint・固定EXAM_ALIGNMENTは変更していない。

- 品質ゲート対象: 公式過去問5件
- 固定問題: R8上 問13、R7下 問13、R5下 問18(a)、R5上 問13、R4上 問15(a)
- 制作前検証: `5 / 5 PASS`
- 解説本文＋3段階例題: 完成
- 固定5件の本文マッピング: `5 / 5 全件`
- 解説PDF: A4縦4ページ、200 dpi表示QA `4 / 4 PASS`、文字抽出QA `PASS`
- 練習問題source: 全12問・全問五肢択一、独立計算・論理QA `12 / 12 PASS`、正答一意性QA `12 / 12 PASS`
- 練習PDF: A4縦6ページ、200 dpi表示QA `6 / 6 PASS`、文字抽出QA `PASS`
- 解説画像PowerPoint: 16:9・4枚、表示QA `4 / 4 PASS`、overflow `0件`、PPTX ZIP整合性 `PASS`
- 完成後独立再解答前ゲート: `BLIND_REANSWER_READY`
- 完成後独立再解答: 未実施
- 最終QA: 未実施
- 固定EXAM_ALIGNMENT変更: `0件`
- 教材外・固定範囲外知識による補完: `0件`
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`
- 完成数: `9 / 16`

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

制作前検証 `5 / 5 PASS` は維持するが、完成後blind独立再解答のため制作前答案番号・完成済み導出結果は必須先読み対象に保持しない。

### 非選定
- R7上 機械 問13: 行過ぎ量等を直接要求し、固定範囲外の説明追加を避けるため除外。
- R6下 機械 問13: PID制御を直接要求するため除外。
- R6上 機械 問13: リレーシーケンス、インタロック、タイムチャートまで必要なため除外。
- R5下 機械 問13: ボード線図が主要求のため除外。
- R5下 機械 問18(b): 比例プラス積分要素まで拡張するため除外。
- R4上 機械 問15(b): ベクトル軌跡が固定範囲外のため除外。

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
- 完成後独立再解答前ゲート: `BLIND_REANSWER_READY`
- 完成後独立再解答: 未実施
- 最終QA: 未実施
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`

## 次に行う
公式解答・保存済み正答を先に見ず、完成教材だけを使って固定5件を独立再解答する。再解答完了後に公式解答と照合し、教材外知識補完の有無を判定する。