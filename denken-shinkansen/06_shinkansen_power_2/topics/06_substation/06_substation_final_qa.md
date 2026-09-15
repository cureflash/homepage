# Topic 06 最終QA

更新日: 2026-09-15

## 判定

`NEEDS_REVISION / IN_PROGRESS`

上位仕様、固定EXAM_ALIGNMENT、一次・二次の過去問対応品質ゲート、練習問題、必須成果物、既存表示QA、系列SPEC固定6項目、固定範囲境界を再確認した。技術内容・成果物はPASSだが、主source `06_substation.md` の進捗記録が実態と一致していないため、Topic 06はまだ `completed` にしない。

## 確認結果

| 確認項目 | 結果 | 確認内容 |
|---|---|---|
| 上位仕様 | PASS | `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`06_shinkansen_power_2/SPEC.md` を再確認 |
| 正式EXAM_ALIGNMENT | PASS | 一次4問＋二次1問、計5問を維持。差し替えなし |
| 必須成果物 | PASS | 主source、解説source、練習source、解説PDF、練習PDF、解説画像PowerPointがGitHub正本上に実在 |
| 練習問題 | PASS | 15問（一次型10＋二次記述5）、独立QA `15 / 15 PASS` |
| 完成後独立再解答 | PASS | 正式5問 `5 / 5問 PASS`。一次 `20 / 20小問`、二次 `3 / 3設問`、教材外知識補完 `0件` |
| 解説PDF表示QA | PASS | A4縦6ページ、既存記録 `6 / 6 PASS` |
| 練習PDF表示QA | PASS | A4縦4ページ、既存記録 `4 / 4 PASS`、文字抽出QA PASS |
| PowerPoint表示QA | PASS | 16:9・5スライド、表示QA `5 / 5 PASS`、overflow 0件、ZIP整合性PASS |
| 系列SPEC固定6項目 | PASS | 変電所、母線、変圧器、遮断器、単線結線図、損失を維持 |
| 固定範囲境界 | PASS | スコット結線、％インピーダンス、ATき電、短絡計算、保護協調、雷サージ等の後続Topic論点を追加していない |
| 未確認実設備値 | PASS | 追加・依存 `0件` |
| 進捗記録 | FAIL | `06_substation.md` が旧状態 `practice_source_complete` のままで、本文冒頭と末尾に「次工程は練習15問の独立QA」が残存 |

## 過去問対応品質ゲート

- R2 一次 電力 問7: `5 / 5小問 PASS`
- H30 二次 電力・管理 問2: `3 / 3設問 PASS`
- H28 一次 電力 問3: `5 / 5小問 PASS`
- H22 一次 電力 問2: `5 / 5小問 PASS`
- H21 一次 電力 問1: `5 / 5小問 PASS`
- 合計: `5 / 5問 PASS`
- 一次合計: `20 / 20小問 PASS`
- 二次合計: `3 / 3設問 PASS`
- 教材外知識補完: `0件`
- 固定範囲外追加: `0件`
- 後続Topic知識への依存: `0件`
- 未確認実設備値依存: `0件`

## 必須成果物の実在確認

- `06_substation.md` — blob `1e5812992c340e9e07437766c008ad59ec87b7f5`
- `06_substation_explanation_source.md` — blob `fe4b44ba760ae617468460afad02b227e6919a68`
- `06_substation_explanation.pdf` — blob `7dbc6fe33260b024c32e1994a9df610ee0dbbbdb`
- `06_substation_practice.md` — blob `eb093671b647b44ccaa7544c494b477dc19937ee`
- `06_substation_practice.pdf` — blob `5ba8d735af21c8c5a7c6a63183461454004aa851`
- `06_substation_images.pptx` — blob `28167759ad2bcdc913b649e38eafe5aba96dd5e7`
- `06_substation_practice_qa.md` — blob `65b32e53f0c59da971f6502fc652ae4ff49916a9`
- `06_substation_powerpoint_qa.md` — blob `83a14d248bfef888e56a5aeb18f5dce259639274`
- `06_substation_independent_reanswer.md` — blob `937bff9c63783da2c597caf50a486a36c111da28`

## exact blocker

`06_substation.md` の教材本文・固定EXAM_ALIGNMENT・数式・問題・成果物は変更不要。進捗記録だけを実態へ同期する必要がある。

修正対象:
1. `## 状態` の `practice_source_complete`
2. 冒頭の「次工程は練習15問の独立QA」
3. 末尾進捗要約の「次工程: 練習15問の独立QA」

次段階では上記3箇所だけを `topic_06_independent_reanswer_complete`／「次は最終QA再実施」へ同期し、技術内容・固定EXAM_ALIGNMENT・問題・PDF/PPTXは変更しない。
