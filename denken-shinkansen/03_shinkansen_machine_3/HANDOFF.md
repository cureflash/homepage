# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-14

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は3/16。Topic 01〜03は品質ゲートPASSでcompleted。active topicは04 `300系でモーターが全部変わった`。

## 今回進捗
Topic 04を1段階進め、完成後独立再解答を実施した。

保存済み正答・公式解答を先に見ず、完成教材だけでEXAM_ALIGNMENTの選定5問を解答し、答案確定後に公式解答と照合した。

結果: `5 / 5 PASS`

- R8上 機械 問4 → 導出 `(3)` / 公式 `(3)` PASS
- R6下 機械 問4 → 導出 `(3)` / 公式 `(3)` PASS
- R5上 機械 問3 → 導出 `(5)` / 公式 `(5)` PASS
- R5上 機械 問4 → 導出 `(2)` / 公式 `(2)` PASS
- R1 機械 問3 → 導出 `(3)` / 公式 `(3)` PASS

答案列は `3 / 3 / 5 / 2 / 3`。教材外知識による補完 `0件`、固定範囲外論点の追加 `0件`。使用公式・途中式・正答理由を教材内から再構成できた。

詳細は `topics/04_induction_motor/04_induction_motor_independent_reanswer.md` に記録済み。

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
- `topics/04_induction_motor/04_induction_motor_images.pptx` — 16:9・4枚、全スライド表示QA・はみ出し検査・ZIP整合性PASS
- `topics/04_induction_motor/04_induction_motor_independent_reanswer.md` — 完成後独立再解答5/5 PASS

## QA判定
Topic 04は `IN_PROGRESS`。必須成果物と完成後独立再解答 `5 / 5 PASS` まで完了。最終QA未完了のため完成数3/16据え置き。

## 次の正確な開始点
Topic 04の最終QAを実施する。必須成果物の実在と内容整合、EXAM_ALIGNMENTの選定5問固定、完成後独立再解答 `5 / 5 PASS`、PDF/PPTX表示QA、固定範囲外追加0件、source・STATUS・HANDOFFの進捗整合を確認し、全件PASSの場合のみ `completed` とする。