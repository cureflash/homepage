# STATUS

updated: 2026-09-19
series: `06_shinkansen_power_2`
active_topic: `15`
theme: 回生した電力が大量に戻ったら？
current_status: `topic_15_explanation_pdf_needs_revision`
completed_topics: `14 / 22`

## Completed through Topic 14

Topic 01〜14は `completed`。

## Topic 15 current progress

制作前EXAM_ALIGNMENT、制作前blind独立再解答、解説source作成、解説PDF生成＋PDF QAまで実施。

正式品質ゲート対象は一次3問＋二次2問、計5問・24答案要素で固定したまま変更なし。

制作前blind:
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

解説source:
- `topics/15_regenerative_power/15_regenerative_power_explanation.md`
- 固定本文節マッピング `8 / 8` 接続
- MASTER SPEC最低構成を収録
- 基礎・本試験標準・複合の3段階例題を収録
- SPEC指定時系列データを収録

解説PDF:
- `topics/15_regenerative_power/15_regenerative_power_explanation.pdf`
- `topics/15_regenerative_power/15_regenerative_power_explanation_pdf_qa.md`
- A4縦 `5ページ`
- 200 dpi表示: `5 / 5 PASS`
- 文字抽出: `PASS / U+FFFD 0件 / 黒四角0件`
- SPEC固定可視化: `3 / 3 PASS`
- 固定5問・24答案要素の説明接続: `24 / 24 covered`
- 数値整合: `PASS`
- PDF QA総合判定: `NEEDS_REVISION`

blocker:
- 系列SPEC固定の `系統受容性` をlearner-facing用語として明示する説明が不足
- 系列SPEC固定の `電圧上昇` の最小限の説明が不足
- 系列SPEC固定の `回生失効の概念` の説明が不足

これらは新規仕様ではなく、既存SPECの固定項目。固定過去問・答案要素の変更は行わない。

練習問題、PowerPoint、完成後blindは未着手。

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

## 品質境界

Topic 15:
- 固定EXAM_ALIGNMENT: `5問`（一次3・二次2）
- 一次多肢選択: `15空欄`
- 二次記述: `9答案要素`
- 合計: `24答案要素`
- 制作前blind: `24 / 24 PASS`
- 解説source固定本文節: `8 / 8` 接続
- 周辺問題による件数水増し: `0件`
- Topic 14問題の重複採用: `0件`
- Topic 16故障計算先取り: `0件`
- Topic 17保護・FRT設計先取り: `0件`
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
- [ ] Topic 15 — IN_PROGRESS / 解説PDF QA `NEEDS_REVISION`

## next_start

`topics/15_regenerative_power/15_regenerative_power_explanation.md` と解説PDFへ、系列SPECで既に固定されている `系統受容性`、`電圧上昇`、`回生失効の概念` の3項目だけを補完し、PDFを再生成・再QAする。固定5問・24答案要素、本文節マッピング、仮定値/実値境界、後続Topic境界を変更しない。
