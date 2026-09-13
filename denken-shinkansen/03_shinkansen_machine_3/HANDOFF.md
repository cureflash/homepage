# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-14

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は4/16。Topic 01〜04は品質ゲートPASSでcompleted。active topicは05 `誘導電動機はなぜ勝手に回る？`。

## 今回進捗
Topic 04の最終QAを再実施し、`PASS / completed` とした。

確認済み:
- 必須成果物はGitHub正本上に全件実在
- EXAM_ALIGNMENT選定5問はsource・練習source・独立再解答・STATUS/HANDOFFで一致
- 完成後独立再解答は `5 / 5 PASS`
- 答案列 `3 / 3 / 5 / 2 / 3` は公式解答と全件一致
- 教材外知識による補完 `0件`
- 固定範囲外論点の追加 `0件`
- 解説PDF・練習PDFの既存表示QA記録PASS
- PowerPointの既存表示QA・はみ出し検査・ZIP整合性PASS
- 前回最終QAで指摘した解説sourceの進捗不整合2箇所は修正済みで、今回も整合を確認

`04_induction_motor.md` の状態欄と末尾へ最終QA `PASS / completed` を反映し、完成数を4/16へ更新した。

## Topic 04 EXAM_ALIGNMENT
選定は変更していない。

- R8上 機械 問4 — かご形三相誘導電動機、同期速度、同期ワット、トルク・機械出力
- R6下 機械 問4 — 三相入力、滑り、鉄損・一次銅損・二次銅損
- R5上 機械 問3 — 回転磁界、固定子・回転子、誘導起電力、滑り
- R5上 機械 問4 — 同期速度、実回転速度、出力からトルク
- R1 機械 問3 — 滑り、二次入力・二次銅損、損失、効率

## Topic 04 範囲判断
系列SPECのTopic 04固定範囲だけを使用した。始動法、Y-Δ始動、巻線形誘導電動機の比例推移、インバータ/V/f・VVVF、ベクトル制御、回生制動、詳細等価回路は追加していない。

300系との接続も、直流主電動機方式から三相誘導電動機方式への転換と、かご形誘導電動機では整流子・ブラシを不要にできるという系列SPEC記載範囲に限定している。未確認の主電動機定格値・具体的制御方式は追加していない。

## Topic 04 成果物
- `topics/04_induction_motor/04_induction_motor.md` — EXAM_ALIGNMENT、解説本文、3段階例題、独立再解答、最終QA PASS記録まで完了
- `topics/04_induction_motor/04_induction_motor_explanation.pdf` — 完了、表示QA PASS
- `topics/04_induction_motor/04_induction_motor_practice.md` — 12問、完全解説付き、選定5問マッピング済み
- `topics/04_induction_motor/04_induction_motor_practice.pdf` — A4縦6ページ、表示QA・文字抽出QA PASS
- `topics/04_induction_motor/04_induction_motor_images.pptx` — 16:9・4枚、全スライド表示QA・はみ出し検査・ZIP整合性PASS
- `topics/04_induction_motor/04_induction_motor_independent_reanswer.md` — 完成後独立再解答5/5 PASS

## 現在状態
- `current_status`: `topic_04_completed`
- 完成数: `4/16`
- last completed: Topic 04 `300系でモーターが全部変わった`
- active: Topic 05 `誘導電動機はなぜ勝手に回る？`

## Topic 05 固定範囲
系列SPECに従い、次を扱う。

- 回転磁界
- 電磁誘導
- 回転子電流
- すべり
- 二次入力
- 二次銅損
- 機械出力
- トルク
- 最大トルク
- 比例推移
- 効率
- 一次入力
- 固定子損失
- 誘導機の等価回路は三種で必要な範囲まで

仕様外論点を追加して過去問件数を合わせない。

## 次の正確な開始点
Topic 05の制作前EXAM_ALIGNMENTを行う。公式過去問を直近年度から原則5問以上確認し、Topic 05固定範囲だけで設問全体を解ける問題を選定する。各問の要求知識・使用式・設問型・教材で必要な説明を固定し、制作前独立検証を通過してから本文制作へ進む。