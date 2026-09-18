# Topic 14 最終QA

更新日: 2026-09-19

## 判定

`NEEDS_REVISION / IN_PROGRESS`

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`、Topic 14の現行成果物・各QA、2026-09-19完成後blind独立再解答、進捗記録、Webカタログを確認した。

技術内容と過去問対応品質ゲートはPASS。前回最終QAで列挙した進捗記録6件の旧工程記述は同期済みで、残るblockerはPowerPoint現行バイナリの再QAとWebカタログ未登録の2件である。Topic 14はまだ `completed` としない。

## 品質ゲート

| 確認項目 | 結果 | 内容 |
|---|---|---|
| 上位仕様 | PASS | `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md` を再確認 |
| 正式EXAM_ALIGNMENT | PASS | 一次2問＋二次3問、固定5問・21答案要素を維持。正式問題追加・差替えなし |
| 制作前blind独立再解答 | PASS | `20 / 21` で不足1要素を特定し、固定範囲内で補強した記録あり |
| 完成後blind独立再解答 | PASS | 一次 `10 / 10`、二次 `11 / 11`、合計 `5 / 5問・21 / 21答案要素 PASS` |
| 必須成果物 | PASS | 主source、解説PDF、練習source/PDF、PowerPoint、各QA、blind記録が実在 |
| 解説PDF | PASS | 現行Git blob `af004d565ace53bcb2334ae038e4355fc57bc649`。A4縦5ページ、200 dpi `5 / 5 PASS`、3段階例題 `3 / 3`、固定21答案要素 `21 / 21` |
| 練習 | PASS | 15問（一次型10＋二次型5）、数値・論理 `15 / 15 PASS`、一次正答一意性 `10 / 10 PASS` |
| 練習PDF | PASS | A4縦7ページ、表示 `7 / 7 PASS`、文字抽出PASS、完全解説 `15 / 15` |
| PowerPoint | NEEDS_REVISION | QA記録の旧対象 `39281 bytes`・SHA-256 `3e8088524754227fbfddf027784cf2c5961fba01646b7ded626932eb70748047` と、現行GitHub正本 `15002 bytes`・blob `9ad4e4bc2e0c8f7eafbeb83f277c05496b2303d8` が一致しない。現行バイナリへの表示・構造QA証跡として確定できない |
| SPEC境界 | PASS | Topic 15以降先取り0件、Topic 16故障計算先取り0件、Topic 17保護・Topic 20安定度先取り0件、未確認実設備値0件、仕様追加0件 |
| 進捗記録整合 | PASS | 主source、解説source、練習source、解説PDF QA、練習PDF QA、PowerPoint QAの旧工程記述を現行工程へ同期済み |
| Web公開 | NEEDS_REVISION | `qualifications/denken-shinkansen/catalog.json` はTopic 12・13までで、Topic 14の解説PDF・練習PDF・PowerPoint・source登録がない |

## 正式過去問対応品質ゲート

- 令和6年度 第二種一次「電力」問5: `5 / 5答案要素 PASS`
- 令和4年度 第二種一次「法規」問4: `5 / 5答案要素 PASS`
- 令和5年度 第二種二次「電力・管理」問4: `2 / 2答案要素 PASS`
- 令和2年度 第二種二次「電力・管理」問6: `4 / 4答案要素 PASS`
- 平成23年度 第二種二次「電力・管理」問3: `5 / 5答案要素 PASS`
- 合計: 一次2問＋二次3問、`5 / 5問・21 / 21答案要素 PASS`
- 制作前不足「最低必要容量を不足側へ丸めない」: `PASS / 改善維持`
- 前回完成後blind blocker「66 kV側等価値 → 154 kV一次側」: `PASS / 改善確認`
- 教材外知識補完: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 新規正式過去問追加: `0件`
- 仕様追加: `0件`

## 解消済みblocker

前回最終QAのblocker 1〜6は解消済み。

1. 主sourceの最終QA未実施・旧次工程記述 — 解消。
2. 解説sourceの旧stage・次工程 — 解消。
3. 練習sourceの練習PDF・PowerPoint・blind未実施記述 — 解消。
4. 解説PDF QAの旧次工程 — 解消。
5. 練習PDF QAの旧次工程 — 解消。
6. PowerPoint QAのTopic全体の旧進捗記述 — 解消。

固定EXAM_ALIGNMENT、固定5問・21答案要素、教材技術範囲、learner-facing成果物の内容は変更していない。

## 未完了blocker（残り2件）

1. PowerPoint QA記録のファイル指紋が現行GitHub正本と一致しない。現行 `14_power_factor_voltage_control_images.pptx` を再QAし、現行blobに対応する記録へ更新する必要がある。
2. `qualifications/denken-shinkansen/catalog.json` にTopic 14が未登録。

## 完了判定

Topic 14は `IN_PROGRESS` を維持する。

完成数: `13 / 22`

次工程は、固定5問・21答案要素と教材技術範囲を変更せず、現行GitHub正本PPTXの再QA。その後にWebカタログ登録、最終QA再判定を行う。全件PASSまではTopic 15へ進めない。
