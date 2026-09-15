# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-16

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は `9 / 16`。Topic 01〜09は品質ゲートPASSでcompleted。active topicは10「新幹線の速度はどう自動制御される？」。

## 今回進捗
Topic 10「新幹線の速度はどう自動制御される？」の練習PDFを完成し、全ページ表示QA・文字抽出QAまで完了した。

- 品質ゲート対象: 公式過去問5件
- 固定問題: R8上 問13、R7下 問13、R5下 問18(a)、R5上 問13、R4上 問15(a)
- 制作前答案列: `(4), (3), (5), (1), (2)`
- 制作前公式照合: `5 / 5 PASS`
- 解説本文＋3段階例題: 完成
- 固定5件の本文マッピング: `5 / 5 全件`
- 解説PDF: A4縦4ページ、200 dpi表示QA `4 / 4 PASS`、文字抽出QA `PASS`
- 練習問題source: 全12問・全問五肢択一
- 問題構成: 基礎3／本試験標準7／複合・応用2
- 練習PDF: A4縦6ページ・全12問＋完全解説
- 練習PDF表示QA: `6 / 6 PASS`
- 練習PDF文字抽出QA: `PASS`
- clipping / overlap / broken glyph: `0件`
- 固定EXAM_ALIGNMENT 5件への接続: `5 / 5`
- 独立計算・論理QA: `12 / 12 PASS`
- 正答一意性QA: `12 / 12 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 教材外・固定範囲外知識による補完: `0件`
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`
- 完成数: `9 / 16`

固定範囲は、目標値・制御量・操作量・外乱、フィードバック/フィードフォワード、開ループ/閉ループ、ブロック線図、伝達関数、一次/二次遅れ、時定数、定常偏差、安定性、`G(s)/(1+G(s)H(s))`。PID、ボード線図、ナイキスト線図、ベクトル軌跡、シーケンス制御等は件数合わせで追加しない。実車の制御アルゴリズムは推測しない。

source: `topics/10_automatic_control/10_automatic_control.md`

解説PDF: `topics/10_automatic_control/10_automatic_control_explanation.pdf`

解説PDF QA: `topics/10_automatic_control/10_automatic_control_explanation_pdf_qa.md`

練習問題source: `topics/10_automatic_control/10_automatic_control_practice.md`

練習PDF: `topics/10_automatic_control/10_automatic_control_practice.pdf`

練習PDF QA: `topics/10_automatic_control/10_automatic_control_practice_pdf_qa.md`

## Topic 10 EXAM_ALIGNMENT
品質ゲート対象は5件で固定。

1. R8上 機械 問13 — ブロック線図、負帰還、並列経路、合成周波数伝達関数
2. R7下 機械 問13 — ブロック線図、負帰還、正負の並列経路、合成周波数伝達関数
3. R5下 機械 問18(a) — RC回路の周波数伝達関数、一次遅れ形の分母
4. R5上 機械 問13 — 一次遅れ、時定数、R-L回路、周波数伝達関数
5. R4上 機械 問15(a) — フィードバック系、制御対象の合成、一巡伝達関数

制作前公式照合: `5 / 5 PASS`

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
- 解説PDF: 完了（A4縦4ページ、200 dpi表示QA `4 / 4 PASS`、文字抽出QA `PASS`）
- 練習問題source: 完了（12問、全問五肢択一、独立計算・論理QA `12 / 12 PASS`、正答一意性QA `12 / 12 PASS`）
- 練習PDF: 完了（A4縦6ページ、200 dpi表示QA `6 / 6 PASS`、文字抽出QA `PASS`）
- 解説画像PowerPoint: 未着手
- 完成後独立再解答: 未実施
- 最終QA: 未実施
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`

## 次に行う
Topic 10の解説画像PowerPointを作成し、全スライド表示QA・overflow・PPTX整合性QAを行う。系列SPEC固定範囲外へ拡張しない。

## Topic 09 完了要約
Topic 09「新幹線はどうやって電気で止まる？」は品質ゲートPASS / completed。

- 品質ゲート対象: 公式過去問5問
- 制作前答案列: `(4), (3), (2), (5), (1)`
- 制作前公式照合: `5 / 5 PASS`
- 完成後独立答案列: `(4), (3), (2), (5), (1)`
- 完成後公式照合: `5 / 5 PASS`
- 完成教材だけで解答可能: `5 / 5 PASS`
- 教材外・固定範囲外知識による補完: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`
- 解説本文＋3段階例題: 完了
- 固定5問の本文マッピング: `5 / 5 全件`
- 解説PDF: A4縦3ページ、表示QA `3 / 3 PASS`
- 練習問題source: 12問・全問五肢択一、独立QA `12 / 12 PASS`
- 練習PDF: A4縦6ページ、表示QA `6 / 6 PASS`
- 解説画像PowerPoint: 16:9・4枚、表示QA `4 / 4 PASS`、overflow `0件`、ZIP整合性 `PASS`
- source進捗整合: `PASS`
- 固定範囲境界: `PASS`
- 最終QA: `PASS / completed`
- 完成数: `9 / 16`

source: `topics/09_regenerative_braking/09_regenerative_braking.md`

practice source: `topics/09_regenerative_braking/09_regenerative_braking_practice.md`

practice PDF: `topics/09_regenerative_braking/09_regenerative_braking_practice.pdf`

practice PDF QA: `topics/09_regenerative_braking/09_regenerative_braking_practice_pdf_qa.md`

PowerPoint: `topics/09_regenerative_braking/09_regenerative_braking_images.pptx`

PowerPoint QA: `topics/09_regenerative_braking/09_regenerative_braking_powerpoint_qa.md`

## Topic 08 完了要約
Topic 08「N700Sのモーターはなぜ小さくできた？」は品質ゲートPASS / completed。

- 固定EXAM_ALIGNMENT: 4問・5小問
- 制作前検証: `5 / 5 PASS`
- 完成後独立再解答: `5 / 5 PASS`
- 解説PDF・練習PDF・PowerPoint: 完成
- 表示QA・文字抽出QA・overflow・PPTX整合性: PASS
- 教材外・固定範囲外知識による補完: `0件`
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`

## Topic 07 完了要約
Topic 07「GTO→IGBT→SiCで何が変わった？」は品質ゲートPASS / completed。

- 固定EXAM_ALIGNMENT: 5問
- 制作前検証: `5 / 5 PASS`
- 完成後独立再解答: `5 / 5 PASS`
- 解説PDF・練習PDF・PowerPoint: 完成
- 表示QA・文字抽出QA・overflow・PPTX整合性: PASS
- 教材外・固定範囲外知識による補完: `0件`
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`

## Topic 06 完了要約
Topic 06「新幹線はどうやって速度を変えている？」は品質ゲートPASS / completed。固定5問・7小問の完成後独立再解答 `7 / 7 PASS`、解説PDF・練習PDF・PowerPoint・表示QA・範囲境界を確認済み。教材外・固定範囲外知識による補完 `0件`。