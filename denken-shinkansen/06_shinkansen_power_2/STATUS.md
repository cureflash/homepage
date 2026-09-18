# STATUS

updated: 2026-09-19
series: `06_shinkansen_power_2`
active_topic: `15`
theme: 回生した電力が大量に戻ったら？
current_status: `topic_15_preproduction_blind_complete`
completed_topics: `14 / 22`

## Completed through Topic 14

Topic 01〜14は `completed`。

## Topic 15 current progress

制作前EXAM_ALIGNMENTと制作前blind独立再解答を完了。

正式品質ゲート対象は一次3問＋二次2問、計5問・24答案要素で固定したまま変更なし。

- R2一次「電力」問6: `5 / 5 PASS`
- H28一次「電力」問5: `5 / 5 PASS`
- H26一次「電力」問1: `5 / 5 PASS`
- H25二次「電力・管理」問6: `3 / 3答案群 PASS`
- H21二次「電力・管理」問4: `6 / 6 PASS`
- 一次: `15 / 15 PASS`
- 二次: `9 / 9 PASS`
- 合計: `5 / 5問・24 / 24答案要素 PASS`

制作前blind記録:
- `topics/15_regenerative_power/15_regenerative_power_preproduction_blind_20260919.md`

教材本文・例題・練習問題は未着手。

## Topic 14 completion

制作前EXAM_ALIGNMENT、制作前blind、解説source/PDF、練習source/PDF、PowerPoint、各QA、修正版learner-facing成果物に対する完成後blind、Webカタログ登録、最終QAまで完了。

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

`topics/14_power_factor_voltage_control/14_power_factor_voltage_control_images.pptx` は既存source・固定仕様だけで再構成し、再QA済み。

- Git blob: `74ef08c777c67cf30811d48230a6e143a2377a48`
- SHA-256: `bf643bbb5190cf8fe45a67f99696c345d1c66612f4494b0f49dba6a27b908a41`
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

### Web公開・最終QA

`qualifications/denken-shinkansen/catalog.json` にTopic 14を既存形式どおり登録済み。

`topics/14_power_factor_voltage_control/14_power_factor_voltage_control_final_qa.md`

判定: `PASS / COMPLETED`

## 品質境界

Topic 15:
- 固定EXAM_ALIGNMENT: `5問`（一次3・二次2）
- 一次多肢選択: `15空欄`
- 二次記述: `9答案要素`
- 合計: `24答案要素`
- 制作前blind: `24 / 24 PASS`
- 周辺問題による件数水増し: `0件`
- Topic 14問題の重複採用: `0件`
- Topic 16/17/20/21先取り: `0件`
- 未確認実設備値の真値化: `0件`
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
- [x] Topic 14 completed
- [ ] Topic 15 — IN_PROGRESS / 制作前blind完了

## next_start

Topic 15の固定済み本文節マッピングに従い、解説sourceを作成する。固定5問・24答案要素を全て教材内の該当節へ接続し、Topic 16/17/20/21へ範囲を広げない。