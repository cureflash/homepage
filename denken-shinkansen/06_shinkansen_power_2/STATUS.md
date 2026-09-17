# STATUS

updated: 2026-09-17
series: `06_shinkansen_power_2`
active_topic: `11`
theme: 新幹線が移動すると電圧はどう変わる？
current_status: `topic_11_final_qa_needs_revision`
completed_topics: `10 / 22`

## Topic 11 current result

制作前EXAM_ALIGNMENTと制作前独立再解答をPASSした固定4問・17答案要素を基準に、解説本文source、解説PDF、練習問題・完全解説source、独立QA、練習PDFとPDF QA、計算プログラム・CSV・4グラフと独立計算QA、解説画像PowerPointとPowerPoint QA、完成後blind独立再解答まで完了した。

最終QAを実施し、技術内容・試験対応・必須成果物・各QA・SPEC境界はPASS。唯一の未完了理由は、主source・練習source・PowerPoint QAに残る旧進捗記録4箇所である。技術内容は修正しない。

正式品質ゲート:
- 平成30年度 第二種一次「電力」問7 — `5 / 5 PASS`
- 平成27年度 第二種二次「電力・管理」問3 — `4 / 4 PASS`
- 平成27年度 第二種二次「電力・管理」問4 — `5 / 5 PASS`
- 平成26年度 第二種二次「電力・管理」問4 — `3 / 3 PASS`
- 一次1問＋二次3問、計 `4 / 4問・17 / 17答案要素 PASS`

成果物・QA:
- 解説PDF: A4縦2ページ、表示 `2 / 2 PASS`、文字抽出PASS、3段階例題 `3 / 3 PASS`
- 練習: 15問（一次10＋二次5）、独立QA `15 / 15 PASS`、一次正答一意性 `10 / 10 PASS`、17答案要素接続 `17 / 17 PASS`
- 練習PDF: A4縦8ページ、表示 `8 / 8 PASS`、文字抽出PASS、GitHub正本bytes再レンダリング差分0
- 計算プログラム: `x=0.0...12.0 km` を0.1 km刻み121点、パンタグラフ電圧・線路電流・有効電力損失・無効電力 `4 / 4` 出力、代表点再代入・全点傾向QA PASS
- PowerPoint: 16:9・4枚、表示 `4 / 4 PASS`、overflow 0、ZIP整合性PASS、SPEC固定6項目 `6 / 6`、指定4量 `4 / 4`
- 完成後blind独立再解答: `4 / 4問・17 / 17答案要素 PASS`
- 教材外補完: `0件`
- Topic 12以降の先取り: `0件`
- 未確認実設備値依存: `0件`
- 仕様追加: `0件`
- 公式過去問転載: `0件`

最終QA記録:
- `topics/11_moving_train_voltage/11_moving_train_voltage_final_qa.md`
- 判定: `NEEDS_REVISION / IN_PROGRESS`

exact blocker:
1. `11_moving_train_voltage.md` 冒頭 `## 状態` が `topic_11_practice_source_complete / IN_PROGRESS` のまま。
2. 同main sourceの冒頭要約・末尾 `## 次工程` が練習PDF・計算プログラム・PowerPoint制作前のまま。
3. `11_moving_train_voltage_practice.md` 冒頭 `状態` が `topic_11_practice_source_complete / IN_PROGRESS` のまま。
4. `11_moving_train_voltage_powerpoint_qa.md` 末尾が「完成後blind独立再解答はまだ実施しない」のまま。

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
- [ ] Topic 11 — final QA `NEEDS_REVISION / IN_PROGRESS`

## next_start

技術内容は変更せず、上記4箇所の進捗記録だけを実成果物状態へ同期する。同期後にTopic 11最終QAを再実施し、全項目PASSの場合のみ `completed`、完成数 `11 / 22` とする。
