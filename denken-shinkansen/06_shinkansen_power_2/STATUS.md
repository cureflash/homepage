# STATUS

updated: 2026-09-19
series: `06_shinkansen_power_2`
active_topic: `15`
theme: 回生した電力が大量に戻ったら？
current_status: `topic_15_web_catalog_complete`
completed_topics: `14 / 22`

## Completed through Topic 14

Topic 01〜14は `completed`。

## Topic 15 current progress

制作前EXAM_ALIGNMENT、制作前blind独立再解答、解説source、解説PDF＋QA、練習source、練習PDF＋QA、PowerPoint＋QA、完成後blind独立再解答、Webカタログ登録まで完了。

正式品質ゲート対象は一次3問＋二次2問、計5問・24答案要素で固定したまま変更なし。

### 制作前blind

- R2一次「電力」問6: `5 / 5 PASS`
- H28一次「電力」問5: `5 / 5 PASS`
- H26一次「電力」問1: `5 / 5 PASS`
- H25二次「電力・管理」問6: `3 / 3答案群 PASS`
- H21二次「電力・管理」問4: `6 / 6 PASS`
- 一次: `15 / 15 PASS`
- 二次: `9 / 9 PASS`
- 合計: `5 / 5問・24 / 24答案要素 PASS`

記録:
- `topics/15_regenerative_power/15_regenerative_power_preproduction_blind_20260919.md`

### learner-facing成果物

解説source:
- `topics/15_regenerative_power/15_regenerative_power_explanation.md`
- 固定本文節マッピング `8 / 8`
- MASTER SPEC最低構成、3段階例題、SPEC固定時系列データを収録
- `系統受容性`、`電圧上昇`、`回生失効の概念` を収録

解説PDF:
- `topics/15_regenerative_power/15_regenerative_power_explanation.pdf`
- QA: `PASS`
- A4縦 `3ページ` / 200 dpi `3 / 3 PASS`
- 固定5問・24答案要素: `24 / 24 covered`

練習source/PDF:
- `topics/15_regenerative_power/15_regenerative_power_practice.md`
- `topics/15_regenerative_power/15_regenerative_power_practice.pdf`
- 全15問 / 一次型10 / 二次型5 / 完全解説15 / 15
- 固定5問・24答案要素: `24 / 24`
- PDF QA: `PASS`

PowerPoint:
- `topics/15_regenerative_power/15_regenerative_power_images.pptx`
- `topics/15_regenerative_power/15_regenerative_power_powerpoint_qa.md`
- 16:9 `5スライド`
- 現行artifact SHA-256: `6f64016cb118012d02ab080a6292a31dda279d9c856ddad4ba75eea557b37116`
- ZIP整合性 / overflow / 5枚表示 / PDF変換 / 文字抽出: `PASS`
- SPEC固定8項目: `8 / 8 PASS`
- SPEC固定3可視化: `3 / 3 PASS`
- 固定5問・24答案要素: `24 / 24 covered`
- QA総合判定: `PASS`

### 完成後blind

記録:
- `topics/15_regenerative_power/15_regenerative_power_completion_blind_20260919.md`

結果:
- R2一次「電力」問6: `5 / 5 PASS`
- H28一次「電力」問5: `5 / 5 PASS`
- H26一次「電力」問1: `5 / 5 PASS`
- H25二次「電力・管理」問6: `3 / 3答案群 PASS`
- H21二次「電力・管理」問4: `6 / 6 PASS`
- 一次: `15 / 15 PASS`
- 二次: `9 / 9 PASS`
- 合計: `5 / 5問・24 / 24答案要素 PASS`
- 判定: `PASS / topic_15_completion_blind_complete`

### Webカタログ

`qualifications/denken-shinkansen/catalog.json` に既存Topic形式で登録済み。

- id: `15_regenerative_power`
- seriesId: `06_shinkansen_power_2`
- topicNo: `15`
- title: `回生した電力が大量に戻ったら？`
- explanation / practice / slides / source: Topic 15正本への相対パス

最終QA・Topic 15 completed化は未実施。

## 品質境界

Topic 15:
- 固定EXAM_ALIGNMENT: `5問`（一次3・二次2）
- 固定答案要素: `24`（一次15・二次9）
- 制作前blind: `24 / 24 PASS`
- 完成後blind: `24 / 24 PASS`
- 解説PDF QA: `PASS`
- 練習PDF QA: `PASS`
- PowerPoint QA: `PASS`
- Webカタログ登録: `PASS`
- 周辺問題による件数水増し: `0件`
- Topic 14問題の重複採用: `0件`
- Topic 16故障計算先取り: `0件`
- Topic 17保護・FRT設計先取り: `0件`
- Topic 18雷サージ先取り: `0件`
- Topic 20安定度先取り: `0件`
- Topic 21需給制御一般の新規展開: `0件`
- 未確認実設備値の真値化: `0件`
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
- [x] Topic 14 completed
- [ ] Topic 15 — IN_PROGRESS / Webカタログ登録済み / 完成後blind `PASS`

## next_start

Topic 15の固定5問・24答案要素、本文節マッピング、仮定値/実値境界、後続Topic境界を変更せず、最終QAを行う。Topic 16着手はまだ行わない。
