# Topic 14 最終QA

更新日: 2026-09-19

## 判定

`NEEDS_REVISION / IN_PROGRESS`

技術内容、正式過去問対応品質ゲート、修正版成果物に対する完成後blind、解説PDF、練習PDF、復旧後PowerPointはPASS。残るblockerはWebカタログ登録1件のみ。Topic 14はまだ `completed` としない。

## 品質ゲート

| 確認項目 | 結果 | 内容 |
|---|---|---|
| 上位仕様 | PASS | `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md` を維持 |
| 正式EXAM_ALIGNMENT | PASS | 一次2問＋二次3問、固定5問・21答案要素。追加・差替えなし |
| 制作前blind独立再解答 | PASS | `20 / 21` で不足1要素を特定し、固定範囲内で補強済み |
| 完成後blind独立再解答 | PASS | 一次 `10 / 10`、二次 `11 / 11`、合計 `21 / 21 PASS` |
| 解説PDF | PASS | A4縦5ページ、200 dpi `5 / 5 PASS`、3段階例題 `3 / 3`、固定21答案要素 `21 / 21` |
| 練習 | PASS | 15問（一次型10＋二次型5）、数値・論理 `15 / 15 PASS`、一次正答一意性 `10 / 10 PASS` |
| 練習PDF | PASS | A4縦7ページ、表示 `7 / 7 PASS`、文字抽出PASS、完全解説 `15 / 15` |
| PowerPoint | PASS | 復旧正本 `35351 bytes`、blob `74ef08c777c67cf30811d48230a6e143a2377a48`。ZIP、16:9・4枚、200 dpi `4 / 4`、overflow、PDF変換・文字抽出、固定10項目・3可視化、21答案要素すべてPASS |
| SPEC境界 | PASS | Topic 15以降先取り0件、未確認実設備値0件、仕様追加0件 |
| Web公開 | NEEDS_REVISION | `qualifications/denken-shinkansen/catalog.json` にTopic 14未登録 |

## 正式過去問対応品質ゲート

- 令和6年度 第二種一次「電力」問5: `5 / 5答案要素 PASS`
- 令和4年度 第二種一次「法規」問4: `5 / 5答案要素 PASS`
- 令和5年度 第二種二次「電力・管理」問4: `2 / 2答案要素 PASS`
- 令和2年度 第二種二次「電力・管理」問6: `4 / 4答案要素 PASS`
- 平成23年度 第二種二次「電力・管理」問3: `5 / 5答案要素 PASS`
- 合計: 一次2問＋二次3問、`5 / 5問・21 / 21答案要素 PASS`
- 制作前不足「最低必要容量を不足側へ丸めない」: `PASS / 改善維持`
- 完成後blind blocker「66 kV側等価値 → 154 kV一次側」: `PASS / PowerPointにも同期済み`

## PowerPoint復旧確認

破損していた旧正本は、既存source・固定仕様だけで再構成した。

新正本:
- size: `35351 bytes`
- Git blob: `74ef08c777c67cf30811d48230a6e143a2377a48`
- SHA-256: `bf643bbb5190cf8fe45a67f99696c345d1c66612f4494b0f49dba6a27b908a41`
- ZIP整合性: `PASS`
- 16:9・4スライド: `PASS`
- 200 dpi相当表示: `4 / 4 PASS`
- overflow: `0件`
- LibreOffice PDF: `4ページ PASS`
- U+FFFD: `0件`
- SPEC固定10項目: `10 / 10 PASS`
- SPEC固定3可視化: `3 / 3 PASS`
- 固定21答案要素の説明接続: `21 / 21 PASS`

## 未完了blocker（残り1件）

1. `qualifications/denken-shinkansen/catalog.json` にTopic 14を既存カタログ仕様どおり登録し、最終QAを再判定する。

## 品質境界

- 固定EXAM_ALIGNMENT変更: `0件`
- 固定5問・21答案要素変更: `0件`
- 新規正式過去問追加: `0件`
- Topic 15以降の先取り: `0件`
- Topic 16故障計算先取り: `0件`
- Topic 17保護・Topic 20安定度先取り: `0件`
- 未確認実設備値の真値化: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

## 完了判定

Topic 14は `IN_PROGRESS` を維持する。完成数 `13 / 22`。

次工程はWebカタログ登録。その後に最終QA再判定を行い、全件PASSまでTopic 15へ進めない。
