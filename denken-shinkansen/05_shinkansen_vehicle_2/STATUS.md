# STATUS - 新幹線車両・電験二種

更新日: 2026-09-20

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `32 / 39`
- current_status: `topic_32_completed`
- last_completed_topic: `32 照明設計`
- active_topic: `33 空調・電熱の熱収支`
- next_start: 最新main、上位仕様、系列SPEC、`STATUS.md` / `HANDOFF.md`、直近の車両二種worker成果をreconcile後、Topic 33の制作前EXAM_ALIGNMENTを公式過去問から開始する。二次は実際に対応論点が確認できる場合のみ採用し、件数合わせをしない。

Topic 01〜32は `PASS / completed`。完成数 `32 / 39`。

## Topic 32 照明設計

判定: `PASS / COMPLETED`

完成後clean blind:
- candidate: `topics/32_lighting_design/32_lighting_design_clean_blind_candidate.md`
- candidate blob SHA: `b153d374febdd737285e8a6db7722ce14bf019fb`
- lock commit: `30e30f320db482bf63c939ee2be3c6a00d8dbc42`
- final QA: `topics/32_lighting_design/32_lighting_design_clean_blind_qa.md`
- 固定5問: `5 / 5 PASS`
- 一次: `30 / 30 PASS`
- 二次: `対象外（公式「機械・制御」試験範囲に照明なし）`
- candidate固定後修正: `0件`
- SPEC固定9項目: `9 / 9 connected`
- 固定EXAM_ALIGNMENT変更: `0件`
- 未確認実車値の真値化: `0件`
- exact blocker: `0件`

Topic 32のEXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPoint、完成後clean blind独立再解答まで全工程 `PASS`。

## Topic 33 次工程

テーマ: `空調・電熱の熱収支`

SPEC固定項目:
- 熱量
- 熱収支
- COP
- 消費電力

制作前EXAM_ALIGNMENTでは、公式過去問を直近年度から調査し、一次・二次を合わせ原則5問以上を対象とする。二次で対応する記述問題が確認できない場合は推測・件数合わせをせず、確認できた範囲を正本へ記録する。

## Topic 21 固定注記

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有の丸め差として診断済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
