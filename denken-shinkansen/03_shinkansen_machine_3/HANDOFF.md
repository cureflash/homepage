# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-14

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は3/16。Topic 01〜03は品質ゲートPASSでcompleted。active topicは04 `300系でモーターが全部変わった`。

## 今回進捗
Topic 04を1段階進め、前回最終QAで指摘された解説sourceの進捗不整合2箇所を修正した。

- 冒頭状態欄を、解説PDF・練習source/PDF・PowerPoint・独立再解答まで完了した現状へ同期
- 末尾独立再解答欄を、答案列 `3 / 3 / 5 / 2 / 3`・公式照合 `5 / 5 PASS`・教材外知識補完0件・範囲外追加0件の実績へ同期

本文、3段階例題、EXAM_ALIGNMENT選定5問、範囲境界、PDF/PPTXは変更していない。Topic 04は最終QA再実施前のため、まだ `completed` にはしていない。

## 前回最終QAでPASSした項目
- Topic 04必須成果物はGitHub正本上に全件実在
- EXAM_ALIGNMENT選定5問はsource・練習source・独立再解答・STATUS/HANDOFFで一致
- 完成後独立再解答は `5 / 5 PASS`
- 答案列 `3 / 3 / 5 / 2 / 3` は公式解答と全件一致
- 教材外知識による補完 `0件`
- 固定範囲外論点の追加 `0件`
- 解説PDF・練習PDFの既存表示QA記録PASS
- PowerPointの既存表示QA・はみ出し検査・ZIP整合性PASS

## EXAM_ALIGNMENT
選定は変更していない。

- R8上 機械 問4 — かご形三相誘導電動機、同期速度、同期ワット、トルク・機械出力
- R6下 機械 問4 — 三相入力、滑り、鉄損・一次銅損・二次銅損
- R5上 機械 問3 — 回転磁界、固定子・回転子、誘導起電力、滑り
- R5上 機械 問4 — 同期速度、実回転速度、出力からトルク
- R1 機械 問3 — 滑り、二次入力・二次銅損、損失、効率

## 範囲判断
系列SPECのTopic 04固定範囲だけを使用した。始動法、Y-Δ始動、巻線形誘導電動機の比例推移、インバータ/V/f・VVVF、ベクトル制御、回生制動、詳細等価回路は追加していない。

300系との接続も、直流主電動機方式から三相誘導電動機方式への転換と、かご形誘導電動機では整流子・ブラシを不要にできるという系列SPEC記載範囲に限定している。未確認の主電動機定格値・具体的制御方式は追加していない。

## 成果物現在地
- `topics/04_induction_motor/04_induction_motor.md` — 内容本体＋進捗記録同期まで完了
- `topics/04_induction_motor/04_induction_motor_explanation.pdf` — 完了、表示QA PASS
- `topics/04_induction_motor/04_induction_motor_practice.md` — 12問、完全解説付き、選定5問マッピング済み
- `topics/04_induction_motor/04_induction_motor_practice.pdf` — A4縦6ページ、表示QA・文字抽出QA PASS
- `topics/04_induction_motor/04_induction_motor_images.pptx` — 16:9・4枚、全スライド表示QA・はみ出し検査・ZIP整合性PASS
- `topics/04_induction_motor/04_induction_motor_independent_reanswer.md` — 完成後独立再解答5/5 PASS

## QA判定
前回判定は `NEEDS_REVISION`。指摘2件は修正済み。最終QA再実施前のため完成数は3/16据え置き。

## 次の正確な開始点
Topic 04の最終QAを再実施する。

1. `04_induction_motor.md` の冒頭状態欄と末尾独立再解答欄が現状へ同期済みであることを確認する。
2. 必須成果物、EXAM_ALIGNMENT選定5問、独立再解答 `5 / 5 PASS`、表示QA、固定範囲境界を再確認する。
3. 全件PASSならTopic 04を `completed`、完成数を4/16に更新する。
4. 次の未完了Topic 05へ進む。