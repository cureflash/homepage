# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-14

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は3/16。Topic 01〜03は品質ゲートPASSでcompleted。active topicは04 `300系でモーターが全部変わった`。

## 今回進捗
Topic 04を1段階進め、練習問題source `topics/04_induction_motor/04_induction_motor_practice.md` を作成した。

全12問を五肢択一とし、基礎3問、本試験標準7問、複合・応用2問で構成した。数値問題は使用式・理由・代入・中間計算・最終値・検算まで、知識問題は正答理由と主要誤答肢の誤りまで記載した。

選定5過去問の要求事項は次のように全件マッピングした。

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
- 練習PDF — 未着手
- 解説画像PowerPoint — 未着手

## QA判定
Topic 04は `IN_PROGRESS`。解説PDFと練習問題sourceまで完了したが、練習PDF、PowerPoint、完成後独立再解答が未完了。完成数3/16据え置き。

## 次の正確な開始点
Topic 04の練習PDFを作成する。`04_induction_motor_practice.md` の12問を内容変更せずPDF化し、全ページ表示QA・文字抽出QAを行う。