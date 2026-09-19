# Topic 15 最終QA

更新日: 2026-09-19

## 判定

`PASS / COMPLETED`

最新main、系列STATUS/HANDOFF、直近の同系列コミット、Topic 15現行成果物・各QA・完成後blind・Webカタログをreconcileした。技術内容、正式過去問対応品質ゲート、解説PDF、練習PDF、PowerPoint、完成後blind、Web公開は全件PASS。Topic 15を `completed` とする。

## 品質ゲート

| 確認項目 | 結果 | 内容 |
|---|---|---|
| 上位仕様 | PASS | `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md` を維持 |
| 正式EXAM_ALIGNMENT | PASS | 一次3問＋二次2問、固定5問・24答案要素。追加・差替えなし |
| 制作前blind独立再解答 | PASS | 一次 `15 / 15`、二次 `9 / 9`、合計 `24 / 24 PASS` |
| 解説PDF | PASS | A4縦3ページ、200 dpi `3 / 3 PASS`、3段階例題、固定24答案要素 `24 / 24` |
| 練習 | PASS | 15問（一次型10＋二次型5）、数値・論理 `15 / 15 PASS`、一次正答一意性 `10 / 10 PASS` |
| 練習PDF | PASS | A4縦3ページ、200 dpi `3 / 3 PASS`、完全解説 `15 / 15`、固定24答案要素 `24 / 24` |
| PowerPoint | PASS | 現行正本 blob `740457627d8c112a75b171985fc1ec205032352f`。ZIP、16:9・5枚、表示 `5 / 5`、overflow、PDF変換・文字抽出、固定8項目・3可視化、24答案要素すべてPASS |
| 完成後blind独立再解答 | PASS | 一次 `15 / 15`、二次 `9 / 9`、合計 `5 / 5問・24 / 24答案要素 PASS` |
| SPEC境界 | PASS | Topic 16/17/18/20/21先取り0件、未確認実設備値0件、仕様追加0件 |
| Web公開 | PASS | `qualifications/denken-shinkansen/catalog.json` にTopic 15を既存形式で登録済み |

## 現行artifact整合

最終QAでは、各QA後にlearner-facing artifactが差し替わっていないことをGitHub正本で確認した。

- 解説PDF: blob `5665087d40f7c7c9817f4ea0db433972070796ca`
  - 解説PDF QA記録のblobと一致
  - QA記録 SHA-256: `9479c399f98524c3f56993312c73b44593e5de4ca923361b9cb0be4a3a987401`
- 練習PDF: blob `d0fbf8d065155af70e64c06f58b279e608b16e4f`
  - QA後の差替えなし
  - QA記録 SHA-256: `5481b3df81a94b1f37ca9fc80c226016b8c12590469419d662d1db172dea2fa4`
- PowerPoint: blob `740457627d8c112a75b171985fc1ec205032352f`
  - artifact修復とPowerPoint QAが同一コミットで同期済み
  - QA記録 SHA-256: `6f64016cb118012d02ab080a6292a31dda279d9c856ddad4ba75eea557b37116`

完成後blindは現行PowerPoint修復後に実施されており、修復後learner-facing成果物だけで固定5問を再解答している。

## 正式過去問対応品質ゲート

- 令和2年度 第二種一次「電力」問6: `5 / 5答案要素 PASS`
- 平成28年度 第二種一次「電力」問5: `5 / 5答案要素 PASS`
- 平成26年度 第二種一次「電力」問1: `5 / 5答案要素 PASS`
- 平成25年度 第二種二次「電力・管理」問6: `3 / 3答案群 PASS`
- 平成21年度 第二種二次「電力・管理」問4: `6 / 6答案要素 PASS`
- 一次: `15 / 15 PASS`
- 二次: `9 / 9 PASS`
- 合計: `5 / 5問・24 / 24答案要素 PASS`

## Webカタログ確認

`qualifications/denken-shinkansen/catalog.json` に以下を既存Topic形式で登録済み。

- id: `15_regenerative_power`
- seriesId: `06_shinkansen_power_2`
- topicNo: `15`
- title: `回生した電力が大量に戻ったら？`
- explanation / practice / slides / source: Topic 15正本への相対パス

## 品質境界

- 固定EXAM_ALIGNMENT変更: `0件`
- 固定5問・24答案要素変更: `0件`
- 新規正式過去問追加: `0件`
- Topic 14固定問題の重複採用: `0件`
- Topic 16故障計算先取り: `0件`
- Topic 17保護・FRT設計先取り: `0件`
- Topic 18雷サージ先取り: `0件`
- Topic 20安定度先取り: `0件`
- Topic 21需給制御一般の新規展開: `0件`
- 未確認実設備値の真値化: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

## 完了判定

Topic 15は `completed`。完成数 `15 / 22`。

次工程はTopic 16「25kV架線が短絡したら何kA流れる？」の制作前EXAM_ALIGNMENT確認から開始する。Topic 16の制作は本QAでは行わない。
