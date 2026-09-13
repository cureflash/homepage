# HANDOFF - 新幹線・電験二種「電力」

更新日: 2026-09-13

## 現在地
- completed topics: `01 新幹線を電力系統から見てみる`
- 完成数: `1 / 22`
- active topic: `02 信濃川の水で新幹線を何本走らせられる？`
- current status: `topic_02_final_qa_needs_revision`

Topic 02 の最終QAを実施した。教材内容・過去問対応・既存成果物のQAはPASS条件を満たしているが、主sourceの進捗メタデータが現状と同期していないため `completed` にはしていない。

## Topic 02 既完了
- MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC確認
- 一次4問＋二次2問を正式選定
- 制作前EXAM_ALIGNMENT
- 制作前独立検証 `6 / 6 PASS`
- 解説本文9節＋3段階例題
- 練習15問（一次型10＋二次記述5）
- 練習問題独立QA `15 / 15 PASS`
- 解説PDF A4縦6ページ
- 練習PDF A4縦6ページ
- 解説画像PowerPoint 16:9・4枚
- 完成後独立再解答 `6 / 6 PASS`
- 教材外知識補完 `0件`
- 既存PDF全ページレンダリングQA確認
- 既存PowerPointレンダリング/overflow QA確認

## 正式過去問
- R8 一次 電力 問5
- R7 一次 電力 問1
- R6 一次 電力 問3
- R5 一次 電力 問1
- R5 二次 電力・管理 問1
- R4 二次 電力・管理 問1

一次4問＋二次2問。二次は論説記述1問＋記述計算1問。

## 最終QA
記録:
- `topics/02_hydropower/02_hydropower_final_qa.md`

判定:
- `NEEDS_REVISION`

未解消は進捗メタデータ同期だけ。

`topics/02_hydropower/02_hydropower.md` に以下の旧記録が残っている。
- 状態 `explanation_complete`
- 「練習問題・PDF・PowerPoint・完成後独立再解答は未着手」
- 末尾の次段階が「練習問題・完全解説を作成する」

実際には上記成果物と完成後独立再解答は完了済み。教材本文の論点追加・削除は不要。

## 次に行うこと
`02_hydropower.md` の進捗メタデータと完成後独立再解答結果だけを現状へ同期する。仕様・解説本文・練習内容・実設備値は変更しない。

同期後、同じ最終QA項目を再確認し、全条件がPASSした場合のみ Topic 02 を `completed`、完成数を `2 / 22` とする。
