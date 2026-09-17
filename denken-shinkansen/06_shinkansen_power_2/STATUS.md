# STATUS

updated: 2026-09-17
series: `06_shinkansen_power_2`
active_topic: `11`
theme: 新幹線が移動すると電圧はどう変わる？
current_status: `topic_11_source_progress_synced`
completed_topics: `10 / 22`

## Topic 11 current result

前回最終QAの唯一のFAILだった進捗記録不整合を修正した。

同期対象:
1. `topics/11_moving_train_voltage/11_moving_train_voltage.md`
   - 冒頭状態・要約・次工程を実成果物状態へ同期。
2. `topics/11_moving_train_voltage/11_moving_train_voltage_practice.md`
   - 冒頭状態を完成後blind独立再解答完了状態へ同期。
3. `topics/11_moving_train_voltage/11_moving_train_voltage_powerpoint_qa.md`
   - 末尾を完成後blind独立再解答完了・最終QA再判定待ちへ同期。

技術本文、固定EXAM_ALIGNMENT、正式4問・17答案要素、練習問題・正答、PDF/PPTX、計算プログラム、blind独立再解答結果は変更していない。

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

原則5問に対し、Topic 11固定範囲だけで問題全体を完答できる5問目は確認できなかったため、固定範囲外論点を追加して件数を水増ししていない。

Topic 11はまだ `completed` にしない。前回最終QAの `NEEDS_REVISION` は監査履歴として保持し、次工程で進捗記録整合を含む最終QAを再判定する。

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
- [ ] Topic 11 — progress sync complete; final QA re-evaluation pending

## next_start

Topic 11の最終QAを再判定する。技術内容・試験対応品質ゲート・必須成果物・PDF/PPTX QA・練習QA・計算プログラムQA・blind独立再解答・進捗記録整合を再確認し、全件PASSの場合のみ `completed` として完成数を `11 / 22` に進める。
