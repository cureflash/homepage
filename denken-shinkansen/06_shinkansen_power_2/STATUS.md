# STATUS

updated: 2026-09-14
series: `06_shinkansen_power_2`
active_topic: `04`
theme: むつの原子炉を積んだ原子力新幹線を東京から佐世保まで走らせる
current_status: `topic_04_practice_independent_qa_complete`
completed_topics: `3 / 22`

## Topic 04 current result

練習15問の独立QAを完了。

正式選定5問:
- R7 二種一次「電力」問5
- H22 二種一次「電力」問1
- R3 二種一次「電力」問5
- R1 二種二次「電力・管理」問1
- R3 二種二次「電力・管理」問6

今回の確認:
- 全15問を独立再計算・再判定
- 一次型10問: `10 / 10 PASS`、正答肢一意
- 二次記述型5問: `5 / 5 PASS`、途中式・単位・因果・必要キーワードを採点可能
- 総合: `15 / 15 PASS`
- 固定5過去問の要求事項対応を維持
- 教材外知識補完: `0件`
- SPEC外追加: `0件`
- 未確認実値追加: `0件`

制作前独立検証 `5 / 5 PASS` も維持。

source:
- `topics/04_nuclear_power/04_nuclear_power.md`（EXAM_ALIGNMENT・制作前独立検証）
- `topics/04_nuclear_power/04_nuclear_power_explanation_source.md`（解説本文＋3段階例題）
- `topics/04_nuclear_power/04_nuclear_power_practice.md`（練習15問＋完全解説）
- `topics/04_nuclear_power/04_nuclear_power_practice_qa.md`（練習15問独立QA）

## Gate checklist

- [x] Topic 01 completed
- [x] Topic 02 completed
- [x] Topic 03 completed
- [x] Topic 04 制作前EXAM_ALIGNMENT
- [x] Topic 04 制作前独立検証
- [x] Topic 04 解説本文＋3段階例題
- [x] Topic 04 練習問題＋完全解説source
- [x] Topic 04 練習15問の独立QA
- [ ] Topic 04 解説PDF

## next_start

Topic 04 の解説PDFを作成する。`04_nuclear_power_explanation_source.md` の本文・3段階例題・固定EXAM_ALIGNMENT・出典・数式・単位を同期し、PDF生成後に全ページ表示QAを行う。仕様外論点・未確認実設備値は追加しない。