# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜32は最終QAまで `PASS / completed`。完成数 `32 / 39`。

現在地は `topic_32_completed`。次のactive topicは `33 空調・電熱の熱収支`。

## Topic 32 完了記録

判定: `PASS / COMPLETED`

clean blind canonical:
- candidate: `topics/32_lighting_design/32_lighting_design_clean_blind_candidate.md`
- candidate blob SHA: `b153d374febdd737285e8a6db7722ce14bf019fb`
- lock commit: `30e30f320db482bf63c939ee2be3c6a00d8dbc42`
- final QA: `topics/32_lighting_design/32_lighting_design_clean_blind_qa.md`

最終QA:
- 固定5問 `5 / 5 PASS`
- 一次 `30 / 30 PASS`
- 二次 `対象外（公式「機械・制御」試験範囲に照明なし）`
- candidate固定後修正 `0件`
- SPEC固定9項目 `9 / 9 connected`
- 固定EXAM_ALIGNMENT変更 `0件`
- 未確認実車値の真値化 `0件`
- exact blocker `0件`

EXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPoint、完成後clean blind独立再解答まで全工程を通過済み。

## 次工程 — Topic 33 制作前EXAM_ALIGNMENT

テーマ: `空調・電熱の熱収支`

系列SPEC固定項目:
- 熱量
- 熱収支
- COP
- 消費電力

fresh workerで最新main、上位仕様、系列SPEC、`STATUS.md` / `HANDOFF.md`、直近の車両二種worker成果をreconcileしてから開始する。

品質ゲート:
- 電気技術者試験センター公式過去問を最優先し、直近年度から遡る。
- 二種は一次・二次を合わせ原則5問以上を調査する。
- 二次はTopic 33の固定論点に実際に対応する記述問題が確認できる場合のみ採用する。
- 二次問題を件数合わせで採用しない。
- 過去問の要求答案要素を分解し、SPEC固定項目との接続を記録する。
- 仕様不整合・問題文解釈・公式解答との照合で確定不能事項が生じた場合は、推測せずexact blockerを記録して止める。

## Topic 21 固定境界

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有の丸め差として診断済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
