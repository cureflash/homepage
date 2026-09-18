# STATUS

updated: 2026-09-19
series: `06_shinkansen_power_2`
active_topic: `14`
theme: 新幹線の力率と電圧をどう維持する？
current_status: `topic_14_powerpoint_rebuild_reqa_complete`
completed_topics: `13 / 22`

## Completed through Topic 13

Topic 01〜13は `completed`。

## Topic 14 progress

制作前EXAM_ALIGNMENT、制作前blind、解説source/PDF、練習source/PDF、PowerPoint、各QA、修正版learner-facing成果物に対する完成後blindまで実施済み。

完成後blind:
- R6一次「電力」問5: `5 / 5 PASS`
- R4一次「法規」問4: `5 / 5 PASS`
- R5二次「電力・管理」問4: `2 / 2 PASS`
- R2二次「電力・管理」問6: `4 / 4 PASS`
- H23二次「電力・管理」問3: `5 / 5 PASS`
- 一次: `10 / 10 PASS`
- 二次: `11 / 11 PASS`
- 合計: `5 / 5問・21 / 21答案要素 PASS`

固定EXAM_ALIGNMENT、固定5問・21答案要素、教材技術範囲は変更していない。

### PowerPoint復旧・再QA

破損していた `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_images.pptx` を、既存source・固定仕様だけで再構成した。

新正本:
- size: `35351 bytes`
- Git blob: `74ef08c777c67cf30811d48230a6e143a2377a48`
- SHA-256: `bf643bbb5190cf8fe45a67f99696c345d1c66612f4494b0f49dba6a27b908a41`

QA:
- ZIP整合性: `PASS`
- 16:9・4スライド: `PASS`
- 200 dpi相当表示: `4 / 4 PASS`
- overflow: `0件`
- LibreOffice PDF変換: `4ページ PASS`
- PDF文字抽出: `PASS / U+FFFD 0件`
- SPEC固定10項目: `10 / 10 PASS`
- SPEC固定3可視化: `3 / 3 PASS`
- 固定5問・21答案要素のPowerPoint説明接続: `21 / 21 PASS`
- H23二次問3 (2a) `66.258 × 154/66 = 154.6 kV ≒ 155 kV`: 収録・確認済み

### 最終QA

`topics/14_power_factor_voltage_control/14_power_factor_voltage_control_final_qa.md`

判定: `NEEDS_REVISION / IN_PROGRESS`

技術内容・過去問対応・必須成果物はPASS。残るblockerはWebカタログ登録1件のみ。

### 最終QA blocker（残り1件）

1. `qualifications/denken-shinkansen/catalog.json` にTopic 14を既存カタログ仕様どおり登録し、最終QAを再判定する。

### 品質境界

- 固定EXAM_ALIGNMENT変更: `0件`
- 固定5問・21答案要素変更: `0件`
- 新規正式過去問追加: `0件`
- Topic 15以降の先取り: `0件`
- Topic 16故障計算先取り: `0件`
- Topic 17保護・Topic 20安定度先取り: `0件`
- 未確認実設備値の真値化: `0件`
- 教材外知識補完: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

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
- [x] Topic 11 completed
- [x] Topic 12 completed
- [x] Topic 13 completed
- [ ] Topic 14 — PowerPoint復旧・再QA PASS、Webカタログ未登録

## next_start

`qualifications/denken-shinkansen/catalog.json` の既存Topic登録形式を確認し、Topic 14を仕様追加なしで登録する。登録後に最終QAを再判定する。

全件PASSまではTopic 14を `completed` にせず、Topic 15へ進めない。
