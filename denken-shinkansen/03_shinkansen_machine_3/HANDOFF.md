# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-14

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は3/16。Topic 01〜03は品質ゲートPASSでcompleted。active topicは04 `300系でモーターが全部変わった`。

## 今回進捗
Topic 04を1段階進め、練習PDF `topics/04_induction_motor/04_induction_motor_practice.pdf` を作成した。

練習sourceの12問と完全解説を内容変更せずA4縦6ページへ収録した。200 dpiで全6ページをレンダリングし、文字切れ・重なり・欠落グリフがないことを確認した。PDF文字抽出でも問1〜12、正答列 `2 / 4 / 4 / 2 / 1 / 3 / 3 / 2 / 3 / 2 / 3 / 2`、主要公式を確認済み。

選定5過去問の要求事項マッピングは変更していない。

- R8上 機械 問4 → 問2、問8、問12
- R6下 機械 問4 → 問9、問10、問11
- R5上 機械 問3 → 問1、問4、問5
- R5上 機械 問4 → 問2、問3、問6、問7
- R1 機械 問3 → 問2、問3、問10、問11

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
- `topics/04_induction_motor/04_induction_motor.md` — EXAM_ALIGNMENT＋解説本文＋3段階例題まで完了
- `topics/04_induction_motor/04_induction_motor_explanation.pdf` — 完了、表示QA PASS
- `topics/04_induction_motor/04_induction_motor_practice.md` — 12問、完全解説付き、選定5問マッピング済み
- `topics/04_induction_motor/04_induction_motor_practice.pdf` — A4縦6ページ、表示QA・文字抽出QA PASS
- 解説画像PowerPoint — 未着手

## QA判定
Topic 04は `IN_PROGRESS`。練習PDFまで完了したが、PowerPoint、完成後独立再解答が未完了。完成数3/16据え置き。

## 次の正確な開始点
Topic 04の解説画像PowerPointを作成する。系列SPECと確定済みEXAM_ALIGNMENTの固定範囲だけを図解し、全スライド表示QA・はみ出し検査を行う。