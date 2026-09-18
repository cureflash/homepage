# Topic 14 最終QA

更新日: 2026-09-19

## 判定

`NEEDS_REVISION / IN_PROGRESS`

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`、Topic 14の現行成果物・各QA、2026-09-19完成後blind独立再解答、進捗記録、Webカタログを確認した。

技術内容と過去問対応品質ゲートはPASSしているが、進捗記録の旧工程記述、PowerPoint QAとGitHub正本バイナリの指紋不整合、Webカタログ未登録が残るため、Topic 14はまだ `completed` としない。

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
| PowerPoint | NEEDS_REVISION | QA本文は内容・表示をPASSとしているが、QA記録のファイルサイズ `39281 bytes` と現行GitHub正本 `15002 bytes`・blob `9ad4e4bc2e0c8f7eafbeb83f277c05496b2303d8` が一致しない。現行バイナリへのQA証跡として確定できない |
| SPEC境界 | PASS | Topic 15以降先取り0件、Topic 16故障計算先取り0件、Topic 17保護・Topic 20安定度先取り0件、未確認実設備値0件、仕様追加0件 |
| 進捗記録整合 | NEEDS_REVISION | 主source、解説source、練習source、解説PDF QA、練習PDF QA、PowerPoint QAに完了済み工程を「次工程」「未実施」とする旧記述が残る |
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

## 未完了blocker

1. `14_power_factor_voltage_control.md` が最終QA未実施・次工程を最終QAとしている旧状態。
2. `14_power_factor_voltage_control_explanation.md` のstage・次工程が旧状態。
3. `14_power_factor_voltage_control_practice.md` が練習PDF・PowerPoint・blindを未実施としている。
4. `14_power_factor_voltage_control_explanation_pdf_qa.md` の次工程が完成後blind再実施のまま。
5. `14_power_factor_voltage_control_practice_pdf_qa.md` の次工程がPowerPoint制作のまま。
6. `14_power_factor_voltage_control_powerpoint_qa.md` がTopic全体を「blind再実施前」としている。
7. PowerPoint QA記録のファイル指紋が現行GitHub正本と一致しない。現行PPTXを再QAし、現行blobに対応する記録へ同期する必要がある。
8. `qualifications/denken-shinkansen/catalog.json` にTopic 14が未登録。

## 完了判定

Topic 14は `IN_PROGRESS` を維持する。

完成数: `13 / 22`

次工程は上記8 blockerの解消。固定5問・21答案要素、教材本文の技術範囲、練習問題、正答、PDF内容は変更しない。現行PPTXの再QA、進捗記録同期、Webカタログ登録後に最終QAを再判定する。全件PASSまではTopic 15へ進めない。