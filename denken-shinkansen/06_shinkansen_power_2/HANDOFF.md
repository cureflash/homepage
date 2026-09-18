# HANDOFF

updated: 2026-09-19
series: `06_shinkansen_power_2`
active_topic: `14`
current_status: `topic_14_source_progress_sync_complete`

## 今回完了

Topic 14最終QAで残っていた進捗記録blockerを1段階進め、主source・解説source・練習sourceの3件を現行工程へ同期した。

- `14_power_factor_voltage_control.md`
  - 最終QA済み、完成後blind `21 / 21 PASS`、残blockerを反映。
- `14_power_factor_voltage_control_explanation.md`
  - learner-facing反映、解説PDF再QA、完成後blind再実施済みへ同期。
- `14_power_factor_voltage_control_practice.md`
  - 練習PDF、PowerPoint作成、完成後blind、最終QA実施済みへ同期。

固定EXAM_ALIGNMENT、固定5問・21答案要素、教材技術範囲、learner-facing成果物の内容は変更していない。

## 品質ゲート維持

- 固定EXAM_ALIGNMENT: 一次2問＋二次3問、`5問・21答案要素`
- 完成後blind: 一次 `10 / 10`、二次 `11 / 11`、合計 `21 / 21 PASS`
- 解説PDF: `5 / 5` ページ表示PASS、3段階例題 `3 / 3`、固定21答案要素 `21 / 21`
- 練習: 15問、一次型10＋二次型5、数値・論理 `15 / 15 PASS`
- 練習PDF: `7 / 7` ページ表示PASS
- SPEC境界: PASS

最終QA記録:
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_final_qa.md`

## 未完了blocker（残り2件）

1. PowerPoint QA記録のファイル指紋と現行GitHub正本PPTXが不一致。現行PPTXの再QAが必要。
   - 旧QA対象: `39281 bytes`, SHA-256 `3e8088524754227fbfddf027784cf2c5961fba01646b7ded626932eb70748047`
   - 現行GitHub正本: `15002 bytes`, blob `9ad4e4bc2e0c8f7eafbeb83f277c05496b2303d8`
   - 現状: `REQUIRES_REQA / CURRENT_BINARY_UNVERIFIED`
2. `qualifications/denken-shinkansen/catalog.json` にTopic 14が未登録。

今回解消したblocker:
- 主sourceの旧進捗記録
- 解説sourceの旧stage・次工程
- 練習sourceの旧進捗記録

## 現在地

Topic 01〜13: `completed`。
完成数: `13 / 22`。
Topic 14は最終QA `NEEDS_REVISION`。Topic自体はまだ未完了。

## 次に行う

固定5問・21答案要素と教材技術範囲を変更せず、現行GitHub正本 `14_power_factor_voltage_control_images.pptx` を再QAし、現行blobに対応する `14_power_factor_voltage_control_powerpoint_qa.md` へ更新する。

その後、Topic 14をWebカタログへ登録し、最終QAを再判定する。全件PASSまではTopic 14を `completed` にせず、Topic 15へ進めない。

## 品質境界

- 固定5問・21答案要素変更: `0件`
- 新規正式過去問追加: `0件`
- Topic 15以降の先取り: `0件`
- Topic 16故障計算先取り: `0件`
- Topic 17保護・Topic 20安定度先取り: `0件`
- 未確認実設備値の真値化: `0件`
- 教材外知識補完: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`
