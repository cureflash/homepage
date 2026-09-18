# STATUS

updated: 2026-09-19
series: `06_shinkansen_power_2`
active_topic: `15`
theme: 回生した電力が大量に戻ったら？
current_status: `topic_15_exam_alignment_complete`
completed_topics: `14 / 22`

## Completed through Topic 14

Topic 01〜14は `completed`。

## Topic 15 current progress

制作前EXAM_ALIGNMENTを完了。

正式品質ゲート対象を一次3問＋二次2問、計5問に固定した。

- R2一次「電力」問6: 電池電力貯蔵設備
- H28一次「電力」問5: 電力貯蔵装置としての二次電池
- H26一次「電力」問1: 揚水発電所の総合効率
- H25二次「電力・管理」問6: 電力の需給及び貯蔵
- H21二次「電力・管理」問4: 中・小規模の電力貯蔵装置

`topics/15_regenerative_power/15_regenerative_power.md`

直近年度候補も確認し、固定範囲外へ広がる問題は正式採用していない。

- R6二次問6: 逆潮流は関連するがFRTまで要求するため不採用
- R5二次問4: Topic 14で採用済みのため重複不採用
- R4二次問5: 安定度・需給一般へ広がるため不採用
- R7一次問3: 同期安定性が中心のため不採用
- R7二次問6: 需給計画・デマンドレスポンスが中心のため不採用

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
- 二次記述を含む: `PASS`
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
- [ ] Topic 15 — IN_PROGRESS / EXAM_ALIGNMENT完了

## next_start

Topic 15の固定5問を教材なしで独立再解答し、公式解答と照合する制作前blindを実施する。不一致があれば本文制作へ進まずexact blockerを記録する。
