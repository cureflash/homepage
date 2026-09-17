# STATUS

updated: 2026-09-17
series: `06_shinkansen_power_2`
active_topic: `11`
theme: 新幹線が移動すると電圧はどう変わる？
current_status: `topic_10_completed`
completed_topics: `10 / 22`

## Topic 10 final result

Topic 10「なぜ変電所を何十kmも離せない？」は最終QA再判定を完了し、`PASS / completed` とした。

品質ゲート:
- 平成30年度 第二種一次「電力」問7
- 平成27年度 第二種二次「電力・管理」問3
- 平成27年度 第二種二次「電力・管理」問4
- 平成26年度 第二種二次「電力・管理」問4
- 一次1問＋二次3問、計 `4問・17答案要素`
- 制作前独立再解答: `4 / 4問・17 / 17答案要素 PASS`
- 完成後blind clean retry: 一次 `5 / 5`＋二次 `12 / 12` = `4 / 4問・17 / 17答案要素 PASS`
- 解説本文への正式答案要素マッピング: `17 / 17`
- 3段階例題: `3 / 3 PASS`
- 固定10項目: `10 / 10`
- 解説PDF: A4縦 `2ページ`、200 dpi表示 `2 / 2 PASS`、文字抽出PASS
- 練習source: 全 `15問`（一次型10＋二次型5）、数値・論理 `15 / 15 PASS`、一次正答一意性 `10 / 10 PASS`
- 正式4問・17答案要素への練習接続: `17 / 17 PASS`
- 練習PDF: A4縦 `6ページ`、200 dpi表示 `6 / 6 PASS`、文字抽出PASS
- 解説画像PowerPoint: 16:9 `4スライド`、固定3可視化 `3 / 3 PASS`、固定10項目 `10 / 10`
- PowerPoint表示QA: `4 / 4 PASS`
- `slides_test.py`: `PASS / No overflow detected`
- PPTX ZIP整合性: `PASS / No errors detected`
- 教材外補完: `0件`
- Topic 10固定範囲外追加: `0件`
- Topic 11以降の先取り: `0件`
- 未確認実設備値追加: `0件`
- 仕様追加: `0件`
- 進捗記録整合: `PASS`

原則5問に対し、Topic 10固定範囲だけで問題全体を完答できる5問目は確認できなかったため、件数合わせを行っていない。

## Gate checklist

- [x] Topic 01 completed
- [x] Topic 02 completed
- [x] Topic 03 completed
- [x] Topic 04 completed
- [x] Topic 05 completed
- [x] Topic 06 completed
- [x] Topic 07 completed
- [x] Topic 08 completed
- [x] Topic 09 completed
- [x] Topic 10 completed
- [ ] Topic 11

## next_start

Topic 11「新幹線が移動すると電圧はどう変わる？」の制作前EXAM_ALIGNMENTを行う。`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md` の固定範囲から、二種一次・二次の公式過去問を直近年度優先で調査し、仕様を追加せず正式品質ゲートを固定する。