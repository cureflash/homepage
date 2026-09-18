# Topic 14 最終QA

更新日: 2026-09-19

## 判定

`NEEDS_REVISION / IN_PROGRESS`

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`、Topic 14の現行成果物・各QA、2026-09-19完成後blind独立再解答、進捗記録、Webカタログを確認した。

技術内容と過去問対応品質ゲートはPASS。残るblockerは2件で、PowerPointは再QAにより現行GitHub正本自体の破損が確定した。Topic 14はまだ `completed` としない。

## 品質ゲート

| 確認項目 | 結果 | 内容 |
|---|---|---|
| 上位仕様 | PASS | `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md` を再確認 |
| 正式EXAM_ALIGNMENT | PASS | 一次2問＋二次3問、固定5問・21答案要素を維持。正式問題追加・差替えなし |
| 制作前blind独立再解答 | PASS | `20 / 21` で不足1要素を特定し、固定範囲内で補強した記録あり |
| 完成後blind独立再解答 | PASS | 一次 `10 / 10`、二次 `11 / 11`、合計 `5 / 5問・21 / 21答案要素 PASS` |
| 必須成果物 | NEEDS_REVISION | PowerPointファイルは存在するが現行正本が破損しており、有効な成果物として確定できない |
| 解説PDF | PASS | 現行Git blob `af004d565ace53bcb2334ae038e4355fc57bc649`。A4縦5ページ、200 dpi `5 / 5 PASS`、3段階例題 `3 / 3`、固定21答案要素 `21 / 21` |
| 練習 | PASS | 15問（一次型10＋二次型5）、数値・論理 `15 / 15 PASS`、一次正答一意性 `10 / 10 PASS` |
| 練習PDF | PASS | A4縦7ページ、表示 `7 / 7 PASS`、文字抽出PASS、完全解説 `15 / 15` |
| PowerPoint | FAIL | 現行GitHub正本 `15002 bytes`・blob `9ad4e4bc2e0c8f7eafbeb83f277c05496b2303d8`。GitHub Actions上の `unzip -t` で `missing 24279 bytes`、`start of central directory not found; zipfile corrupt`、exit 51。現行正本自体が破損 |
| SPEC境界 | PASS | Topic 15以降先取り0件、Topic 16故障計算先取り0件、Topic 17保護・Topic 20安定度先取り0件、未確認実設備値0件、仕様追加0件 |
| 進捗記録整合 | PASS | 主source、解説source、練習source、各QA、STATUS/HANDOFFを現行工程へ同期 |
| Web公開 | NEEDS_REVISION | `qualifications/denken-shinkansen/catalog.json` はTopic 12・13までで、Topic 14未登録 |

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

## PowerPoint破損確認

現行正本の再QAをGitHub Actions run `35392633009` で実施した。

- checkout commit: `74b7a98deed2e9416266b4ee3b1d9cde4a8c85a4`
- size: `15002 bytes`
- git blob: `9ad4e4bc2e0c8f7eafbeb83f277c05496b2303d8`
- SHA-256: `dcc0824a5db5acaafa467c9d2b6574fddc39d72a7e281b8bb5cfc33c95c213cf`
- ZIP整合性: `FAIL`
- 欠損報告: `24279 bytes`
- 旧QA対象 `39281 bytes` と現行 `15002 bytes` の差も `24279 bytes`

従来の「QA指紋不一致」から、現行PPTX自体の破損へblocker原因を確定した。旧PPTXの表示・構造PASS結果は現行正本へ流用しない。

## 未完了blocker（残り2件）

1. 破損した現行 `14_power_factor_voltage_control_images.pptx` を、既存source・固定仕様の範囲だけで正常なPPTXへ復旧し、新しい正本blobを再QAする。
2. PowerPoint復旧・再QA PASS後、`qualifications/denken-shinkansen/catalog.json` にTopic 14を登録する。

## 完了判定

Topic 14は `IN_PROGRESS` を維持する。

完成数: `13 / 22`

次工程はPowerPoint正本の復旧と再QA。固定5問・21答案要素と教材技術範囲は変更しない。全件PASSまではTopic 15へ進めない。
