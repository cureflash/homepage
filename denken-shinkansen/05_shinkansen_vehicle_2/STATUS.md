# STATUS - 新幹線車両・電験二種

更新日: 2026-09-19

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `20 / 39`
- current_status: `topic_21_exam_alignment_complete`
- last_completed_topic: `20 N700系 フィードバック制御`
- active_topic: `21 高速域の速度・けん引力・出力制御`
- next_start: Topic 21 解説source作成。固定EXAM_ALIGNMENTの一次2問＋二次3問・6答案要素を変えず、SPEC固定8項目・3可視化を本試験対応粒度で説明する

## 完了済み

Topic 01〜20は最終QAまで `PASS / completed`。完成数は `20 / 39`。

## Topic 21 制作前EXAM_ALIGNMENT

判定: `PASS / topic_21_exam_alignment_complete`

固定範囲:
- 定トルク
- 定出力
- 電圧制限
- 電流制限
- けん引力
- 主電動機出力
- 編成出力
- 走行抵抗
- 速度―けん引力
- 速度―主電動機出力
- 速度―編成必要出力

固定品質ゲート:
- H26 一次 機械 問5 `(4),(5)` — 2答案要素
- H25 一次 機械 問3 `(1)` — 1答案要素
- R7 二次 機械・制御 問2 `(1)のT1のみ` — 1答案要素
- R1 二次 機械・制御 問1 `(4)` — 1答案要素
- H26 二次 機械・制御 問1 `(4)` — 1答案要素
- 合計: `一次2問＋二次3問 / 5問 / 一次3＋二次3 = 6答案要素`
- 二次記述計算: `3問`
- 参考教材: `e-sysnet + 電験王2 / 2系統以上`
- 公式解答・標準解答の個別正答を制作前sourceへ保存: `0件`
- 固定SPEC外追加 / 未確認N700系実車値の真値化: `0件`

補足:
- 列車の走行抵抗式や `P=Fv` そのものを直接問う第二種公式問題は、今回の固定候補では品質ゲート対象として確認できないため「過去問で直接出題」とは扱わない。
- `P=Fv`、走行抵抗、編成必要出力はSPEC必須として、公式過去問の `P=Tω`・定出力域・電圧/電流制限から橋渡しして説明する。

主source:
- `topics/21_high_speed_tractive_force_output_control/21_high_speed_tractive_force_output_control.md`

## 次工程

Topic 21解説sourceを作成する。固定5問・6答案要素、SPEC固定8項目・3可視化を変更せず、未確認実車値を真値化しない。