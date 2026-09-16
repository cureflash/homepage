# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-17

## 現在地
- Topic 01〜12: 最終QA `PASS / completed`
- 完成数: `12 / 22`
- active topic: `13 L0系のリニア同期モータを等価回路で考える`
- current status: `topic_13_progress_records_synced`
- 次工程: Topic 13 最終QA再実施

仕様authorityは `denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`。仕様追加はしない。

## Topic 13 固定範囲
- 同期機
- 界磁
- 電機子
- 同期リアクタンス
- 励磁
- 電機子反作用
- フェーザ
- リニア同期モータ
- 移動磁界

境界:
- Topic 14の負荷角・力率・電力角特性・最大出力を先取りしない。
- 無負荷飽和曲線・短絡特性・短絡比・同期インピーダンス測定を追加しない。
- 後続Topicの蓄電池・伝達関数・過渡応答・PID・安定判別・再粘着制御を追加しない。
- リニア同期モータ直接対応の公式過去問を件数合わせで作らない。
- 未確認L0実値を真値として追加しない。

## Topic 13 固定EXAM_ALIGNMENT
固定過去問:
- R07 一次 機械 問1: (1)〜(5)
- R06 一次 機械 問1: (1)〜(5)
- H29 一次 機械 問1: (1),(2),(5)
- H21 一次 機械 問5: (1)〜(5)
- R07 二次 機械・制御 問1: (1)の(a),(d),(e),(f)

一次4問＋二次記述1問、計5問。ゲート対象22答案要素。

制作前独立検証:
- R07 一次 機械 問1: `5 / 5 PASS`
- R06 一次 機械 問1: `5 / 5 PASS`
- H29 一次 機械 問1の固定3答案要素: `3 / 3 PASS`
- H21 一次 機械 問5: `5 / 5 PASS`
- R07 二次 機械・制御 問1の固定4答案要素: `4 / 4 PASS`
- 合計: `22 / 22 PASS`

最新R08一次機械問1は同期発電機の冷却方式でTopic 13固定範囲外のため不採用。件数合わせによる仕様追加はしていない。

## Topic 13 成果物
- main source: `topics/13_l0_linear_synchronous_motor_equivalent_circuit/13_l0_linear_synchronous_motor_equivalent_circuit.md`
- 解説PDF: `topics/13_l0_linear_synchronous_motor_equivalent_circuit/13_l0_linear_synchronous_motor_equivalent_circuit_explanation.pdf`
- 練習source: `topics/13_l0_linear_synchronous_motor_equivalent_circuit/13_l0_linear_synchronous_motor_equivalent_circuit_practice.md`
- 練習PDF: `topics/13_l0_linear_synchronous_motor_equivalent_circuit/13_l0_linear_synchronous_motor_equivalent_circuit_practice.pdf`
- PowerPoint: `topics/13_l0_linear_synchronous_motor_equivalent_circuit/13_l0_linear_synchronous_motor_equivalent_circuit_images.pptx`
- PowerPoint QA: `topics/13_l0_linear_synchronous_motor_equivalent_circuit/13_l0_linear_synchronous_motor_equivalent_circuit_powerpoint_qa.md`
- blind reanswer gate: `topics/13_l0_linear_synchronous_motor_equivalent_circuit/13_l0_linear_synchronous_motor_equivalent_circuit_blind_reanswer_gate.md`
- independent reanswer: `topics/13_l0_linear_synchronous_motor_equivalent_circuit/13_l0_linear_synchronous_motor_equivalent_circuit_independent_reanswer.md`
- final QA: `topics/13_l0_linear_synchronous_motor_equivalent_circuit/13_l0_linear_synchronous_motor_equivalent_circuit_final_qa.md`

QA:
- 解説PDF: A4縦5ページ、200 dpi `5 / 5 PASS`、文字抽出PASS
- 練習source: 一次10問＋二次5問、独立計算・論理QA `15 / 15 PASS`、一次正答一意性 `10 / 10 PASS`
- 練習PDF: A4縦4ページ、200 dpi `4 / 4 PASS`、文字抽出PASS、再検算 `15 / 15 PASS`
- PowerPoint: 16:9・4枚、表示QA `4 / 4 PASS`、overflow 0、ZIP整合性PASS
- 固定5問・22答案要素への接続: `22 / 22 PASS`
- Topic 14先取り・固定範囲外追加・未確認L0実値追加: `0件`

## Topic 13 完成後独立再解答
公式解答・標準解答を開く前に完成教材だけで固定5問・22答案要素を再解答し、その後公式と照合済み。

- R07 一次 機械 問1: `5 / 5 PASS`
- R06 一次 機械 問1: `5 / 5 PASS`
- H29 一次 機械 問1の固定3答案要素: `3 / 3 PASS`
- H21 一次 機械 問5: `5 / 5 PASS`
- R07 二次 機械・制御 問1の固定4答案要素: `4 / 4 PASS`
- 合計: `22 / 22 PASS`
- 教材外知識補完: `0件`
- 固定範囲外論点追加: `0件`
- Topic 14依存: `0件`
- 未確認L0実値依存: `0件`
- 固定EXAM_ALIGNMENT・教材本文・練習問題・PDF/PPTXの内容変更: `0件`

## Topic 13 最終QA
前回判定: `NEEDS_REVISION / IN_PROGRESS`

PASS:
- 必須成果物の実在
- 一次4問＋二次1問・22答案要素の過去問対応
- 完成後独立再解答 `22 / 22 PASS`
- 練習問題・PDF/PPTX QA
- 固定範囲境界・未確認L0実値

前回FAIL:
- 進捗記録整合のみ

前回不整合:
1. main sourceの `## 状態` と末尾 `# 次工程` が「練習PDF作成」段階のまま。
2. 練習source末尾 `# 次工程` が「PowerPoint作成」段階のまま。

## Topic 13 進捗記録同期
- main sourceの `## 状態` と末尾 `# 次工程` を実成果物へ同期済み。
- 練習source末尾 `# 次工程` を実成果物へ同期済み。
- 技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTX・独立再解答結果は変更していない。
- Topic 14先取り・固定範囲外論点・未確認L0実値追加は `0件`。

## 次に行うこと
Topic 13最終QAを再実施する。進捗記録整合を再確認し、他の既PASS項目に変化がないことを確認して最終判定する。