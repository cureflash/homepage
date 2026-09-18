# Topic 13 最終QA

更新日: 2026-09-18

## 判定

`NEEDS_REVISION / IN_PROGRESS`

最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`、Topic 13成果物、各QA、完成後blind独立再解答を再確認した。

技術内容、固定EXAM_ALIGNMENT、必須教材成果物、PDF/PPTX QA、練習問題QA、完成後独立再解答、SPEC固定範囲はPASS。未完了理由は進捗記録同期3件とWebカタログ未登録1件のみであり、技術内容・固定2問8答案要素の変更は不要。

## 品質ゲート

| 確認項目 | 結果 | 内容 |
|---|---|---|
| 上位仕様 | PASS | `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md` を再確認 |
| 正式EXAM_ALIGNMENT | PASS | H28一次法規問6、H23二次電力・管理問4の2問・8答案要素を維持。固定範囲外を数合わせで追加していない |
| 制作前blind独立再解答 | PASS | `6 / 8答案要素` で不足2要素を特定し、異容量V結線の回路電流・フェーザ投影・利用率へ固定範囲内で補強した記録がある |
| 完成後blind独立再解答 | PASS | 一次 `5 / 5`、二次 `3 / 3`、合計 `2 / 2問・8 / 8答案要素 PASS`。制作前不足2要素も `2 / 2` 改善確認 |
| 必須成果物 | PASS | 主source、解説PDF、練習source/PDF、PowerPoint、各QA、blind記録が実在 |
| 解説PDF | PASS | A4縦4ページ、200 dpi表示 `4 / 4 PASS`、文字抽出PASS、3段階例題 `3 / 3 PASS`、正式8答案要素 `8 / 8` |
| 練習 | PASS | 15問（一次10＋二次5）、数値・論理 `15 / 15 PASS`、一次正答一意性 `10 / 10 PASS`、正式8答案要素接続 `8 / 8` |
| 練習PDF | PASS | A4縦10ページ、表示 `10 / 10 PASS`、文字抽出PASS、15問・完全解説を維持 |
| PowerPoint | PASS | 16:9・4枚、表示 `4 / 4 PASS`、overflow 0、ZIP整合性PASS、SPEC固定8項目 `8 / 8`、正式8答案要素 `8 / 8` |
| SPEC境界 | PASS | Topic 14以降先取り0件、Topic 16故障計算先取り0件、未確認実設備値0件、公式過去問転載0件、仕様追加0件 |
| 進捗記録整合 | FAIL | 主source、練習source、PowerPoint QAの3ファイルに旧工程の状態・次工程が残る |
| Web公開 | FAIL | `MASTER_SPEC.md` §12で新規テーマ完了時に同一checkpointで必要な `qualifications/denken-shinkansen/catalog.json` 登録が未実施 |

## 正式過去問対応品質ゲート

- 平成28年度 第二種一次「法規」問6: `5 / 5答案要素 PASS`
- 平成23年度 第二種二次「電力・管理」問4: `3 / 3答案要素 PASS`
- 合計: `2 / 2問・8 / 8答案要素 PASS`
- 制作前不足2答案要素: `2 / 2 改善確認`
- 教材外知識補完: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定範囲外追加: `0件`
- Topic 14以降への依存: `0件`
- Topic 16故障計算への依存: `0件`
- 未確認実設備値依存: `0件`
- 仕様追加: `0件`

原則5問未満だが、現行公式問題・公式解答を双方確認でき、Topic 13固定範囲だけで問題全体を扱える正式問題は一次1問＋二次1問の2問である。件数合わせのために故障計算・配電方式・保護・法令詳細を追加していない。

## 必須成果物の実在確認

- `13_three_phase_unbalance.md`
- `13_three_phase_unbalance_explanation.md`
- `13_three_phase_unbalance_explanation.pdf` — QA `PASS`
- `13_three_phase_unbalance_practice.md` — 15問、QA `PASS`
- `13_three_phase_unbalance_practice.pdf` — QA `PASS`
- `13_three_phase_unbalance_images.pptx` — QA `PASS`
- `13_three_phase_unbalance_blind_reanswer_20260918.md` — `2 / 2問・8 / 8答案要素 PASS`

## exact blockers

### 1. 主sourceの旧進捗記録

`13_three_phase_unbalance.md` の状態が `topic_13_preproduction_exam_alignment_complete` のままで、次工程も「制作前独立再解答」と記録されている。実状態は完成後blind独立再解答まで完了しているため不整合。

### 2. 練習sourceの旧進捗記録

`13_three_phase_unbalance_practice.md` の状態が `PRACTICE_SOURCE_COMPLETE / IN_PROGRESS`、末尾の次工程が「練習PDF化」になっている。練習PDF、PowerPoint、完成後blindは既に完了済み。

### 3. PowerPoint QAの旧次工程

`13_three_phase_unbalance_powerpoint_qa.md` の末尾が「完成後blind独立再解答は未実施」とする旧状態のまま。実際には `13_three_phase_unbalance_blind_reanswer_20260918.md` で `8 / 8 PASS` 済み。

### 4. Webカタログ未登録

`qualifications/denken-shinkansen/catalog.json` に `13_three_phase_unbalance` が存在しない。`MASTER_SPEC.md` §12に従い、completed化と同一checkpointで解説PDF・練習PDF・PowerPoint・sourceを登録する必要がある。

## 次工程

技術成果物、固定EXAM_ALIGNMENT、問題・正答は変更しない。

次回は上記3ファイルの旧進捗記録を実成果物状態へ同期し、`catalog.json` へTopic 13を追加したうえで最終QAを再判定する。全4 blocker解消を確認するまではTopic 13を `completed` にせず、完成数は `12 / 22` のままとする。Topic 14以降・Topic 16故障計算は先取りしない。
