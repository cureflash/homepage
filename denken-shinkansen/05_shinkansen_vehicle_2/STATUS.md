# STATUS - 新幹線車両・電験二種

更新日: 2026-09-19

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `20 / 39`
- current_status: `topic_20_completed`
- last_completed_topic: `20 N700系 フィードバック制御`
- active_topic: `21 高速域の速度・けん引力・出力制御`
- next_start: Topic 21の制作前EXAM_ALIGNMENT。公式過去問を二種一次・二次合わせ原則5問以上調査し、SPEC固定範囲へマッピングする

## 完了済み

Topic 01〜20は最終QAまで `PASS / completed`。完成数は `20 / 39`。

## Topic 20 最終QA再実施

判定: `PASS / COMPLETED`

技術品質ゲート:
- 固定公式過去問: `一次1問＋二次4問 / 5問 / 変更なし`
- 固定答案要素: `一次1＋二次18 / 19`
- clean blind公式照合: `19 / 19 PASS`
- 必須成果物: `PASS`
- 解説PDF / 練習PDF / PowerPoint QA: `PASS / PASS / PASS`
- 練習問題: `一次8＋二次4 / 12 / 12 PASS`
- SPEC指定10項目: `10 / 10 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更 / SPEC外追加 / 未確認N700系実車制御値の真値化: `0件`

進捗整合:
- 前回最終QAの唯一FAILだった主source進捗表記は同期済み。
- 前回QA後のTopic 20差分は主source・`STATUS.md`・`HANDOFF.md` の進捗記録のみ。
- 技術本文・問題・正答・数式・PDF/PPTX・各技術QA・clean blind記録・固定EXAM_ALIGNMENTの変更: `0件`。
- 再QAで進捗記録整合も `PASS`。

最終QA記録:
- `topics/20_n700_feedback_control/20_n700_feedback_control_final_qa.md`

## worker reconcile

- PowerPoint / QA: commit `ddd7a1b73b5b94d9bfd86a45b9de954ae6eb40a1`
- clean blind候補固定: commit `cb1d6247a2c221151af9e7a7457875563ea83261`
- clean blind公式照合: commit `160daedfa770c59c153f97f425f0f1c289a0d3bb`
- 前回最終QA: commit `c749003967911c8b2c0abe38f5b839a725833977`
- 主source進捗同期: commit `f47d681ec9a349997b49bf4b5370e35c23a16075`
- 最終QA再実施: `PASS / COMPLETED`

## 次工程

Topic 21「高速域の速度・けん引力・出力制御」の制作前EXAM_ALIGNMENT。固定SPECは定トルク、定出力、電圧制限、電流制限、けん引力、主電動機出力、編成出力、走行抵抗、および速度―けん引力・速度―主電動機出力・速度―編成必要出力の3可視化。仕様外の論点は追加しない。