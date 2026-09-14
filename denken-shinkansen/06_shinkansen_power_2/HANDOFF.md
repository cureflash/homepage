# HANDOFF

updated: 2026-09-14
series: `06_shinkansen_power_2`
active_topic: `04`
current_status: `topic_04_final_qa_needs_revision`

## 今回完了

Topic 04「むつの原子炉を積んだ原子力新幹線を東京から佐世保まで走らせる」の最終QAを実施した。

判定: `NEEDS_REVISION / IN_PROGRESS`

PASS:
- 正式選定5問: 一次3問＋二次2問
- 完成後独立再解答: `5 / 5 PASS`
- 練習15問独立QA: `15 / 15 PASS`
- 解説PDF: A4縦6ページ、200 dpi全6ページPASS
- 練習PDF: A4縦7ページ、200 dpi全7ページPASS
- PowerPoint: 16:9・4枚、表示QA・overflow・ZIP整合性PASS
- 教材外知識補完: `0件`
- 固定範囲外追加: `0件`
- 未確認実設備値依存: `0件`

FAIL:
- 系列SPECの「効率を変えた場合の走行可能出力」が未収録。
- 系列SPECの「東京―佐世保間の必要走行エネルギーとの比較」が未収録。
- 主source・解説source・練習sourceの進捗記録が現在地と不整合。

最終QA記録:
- `topics/04_nuclear_power/04_nuclear_power_final_qa.md`

## 次に行う

系列SPECで欠けている2項目だけを固定範囲内で解説sourceへ補強し、`04_nuclear_power.md`、`04_nuclear_power_explanation_source.md`、`04_nuclear_power_practice.md` の進捗記録を現在地へ同期する。

未確認実値は追加せず、教材用条件は仮定値と明示する。正式選定5問、EXAM_ALIGNMENT、既存過去問解法は変更しない。補強後、影響するPDF/PPTXへ同期し、最終QAを再実施する。

## 範囲境界

Topic 04は `SPEC.md` 記載の原子炉熱出力、蒸気発生、タービン出力、発電端出力、所内電力、熱効率、多段効率、負荷変動、負荷追従、主機トリップ等の過渡応答概念を上限とする。

核燃料サイクル、放射線・遮蔽・被ばく、原子炉事故時の放射線安全、法規制、社会的受容、新型炉等へ拡張しない。