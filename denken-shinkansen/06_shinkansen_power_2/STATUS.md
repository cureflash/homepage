# STATUS

updated: 2026-09-14
series: `06_shinkansen_power_2`
active_topic: `04`
theme: むつの原子炉を積んだ原子力新幹線を東京から佐世保まで走らせる
current_status: `topic_04_final_qa_needs_revision`
completed_topics: `3 / 22`

## Topic 04 current result

最終QAを実施し、`NEEDS_REVISION / IN_PROGRESS`。

過去問対応品質ゲートは合格:
- 正式選定: 一次3問＋二次2問
- 完成後独立再解答: `5 / 5 PASS`
- 練習15問独立QA: `15 / 15 PASS`
- 教材外知識補完: `0件`
- 固定範囲外追加: `0件`
- 未確認実設備値依存: `0件`
- 解説PDF: A4縦6ページ、200 dpi `6 / 6 PASS`
- 練習PDF: A4縦7ページ、200 dpi `7 / 7 PASS`
- PowerPoint: 16:9・4枚、表示QA・overflow・ZIP整合性PASS

未完了理由:
1. 系列SPECの計算・可視化「効率を変えた場合の走行可能出力」が未収録。
2. 系列SPECの計算・可視化「東京―佐世保間の必要走行エネルギーとの比較」が未収録。
3. `04_nuclear_power.md`、`04_nuclear_power_explanation_source.md`、`04_nuclear_power_practice.md` の進捗記録が現在地と不整合。

最終QA記録:
- `topics/04_nuclear_power/04_nuclear_power_final_qa.md`

## Gate checklist

- [x] Topic 01 completed
- [x] Topic 02 completed
- [x] Topic 03 completed
- [x] Topic 04 制作前EXAM_ALIGNMENT
- [x] Topic 04 制作前独立検証
- [x] Topic 04 解説本文＋3段階例題
- [x] Topic 04 練習問題＋完全解説source
- [x] Topic 04 練習15問の独立QA
- [x] Topic 04 解説PDF
- [x] Topic 04 練習PDF
- [x] Topic 04 解説画像PowerPoint
- [x] Topic 04 完成後独立再解答
- [x] Topic 04 最終QA実施
- [ ] Topic 04 completed

## next_start

Topic 04 の系列SPEC未充足2項目を固定範囲内で解説sourceへ補強し、主source・解説source・練習sourceの進捗記録を現在地へ同期する。未確認実値は追加せず、教材用条件は仮定値と明示する。正式選定5問・EXAM_ALIGNMENT・既存過去問解法は変更しない。