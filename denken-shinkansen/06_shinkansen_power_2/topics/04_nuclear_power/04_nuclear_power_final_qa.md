# Topic 04 最終QA

更新日: 2026-09-14

## 判定

`NEEDS_REVISION / IN_PROGRESS`

一次・二次の過去問対応品質ゲート、練習問題、既存PDF/PPTX表示QAはPASSしている。ただし、系列 `SPEC.md` が明示する計算・可視化2項目が成果物に未収録で、source Markdownの進捗記録にも旧状態が残るため、Topic 04 はまだ `completed` にしない。

## 確認結果

| 確認項目 | 結果 | 確認内容 |
|---|---|---|
| 上位仕様 | PASS | `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`06_shinkansen_power_2/SPEC.md` を再確認 |
| 正式EXAM_ALIGNMENT | PASS | 一次3問＋二次2問、計5問を維持。差し替えなし |
| 必須成果物 | PASS | 解説source、練習source、解説PDF、練習PDF、解説画像PowerPointがGitHub正本上に実在 |
| 練習問題 | PASS | 15問（一次型10＋二次記述5）、独立QA `15 / 15 PASS` |
| 完成後独立再解答 | PASS | 正式5問 `5 / 5 PASS`。教材外知識補完 `0件` |
| 解説PDF表示QA | PASS | A4縦6ページ、200 dpi全6ページ `6 / 6 PASS` |
| 練習PDF表示QA | PASS | A4縦7ページ、200 dpi全7ページ `7 / 7 PASS`、問題15問・解答15問の文字抽出PASS |
| PowerPoint表示QA | PASS | 16:9・4スライド、全4枚表示QA、overflow、ZIP整合性PASS |
| 過去問固定範囲境界 | PASS | 核燃料サイクル・放射線・法規制・新型炉等の追加 `0件`、未確認実設備値追加 `0件` |
| 系列SPEC計算・可視化 | FAIL | 「効率を変えた場合の走行可能出力」「東京―佐世保間の必要走行エネルギーとの比較」が未収録 |
| 進捗記録整合 | FAIL | 主source・解説source・練習sourceに旧進捗が残る |

## 系列SPEC未充足

`06_shinkansen_power_2/SPEC.md` のTopic 04は、多段エネルギーフローに加えて次の4項目を計算・可視化対象としている。

1. 原子炉熱出力―車輪出力
2. 効率を変えた場合の走行可能出力
3. 東京―佐世保間の必要走行エネルギーとの比較
4. 発車・加速・惰行・停車を想定した負荷変化

現行成果物では、1は多段効率式・例題で、4は負荷変動・負荷追従の説明で扱っている。一方、2の効率変化に対する出力比較と、3の東京―佐世保間の必要走行エネルギー比較は、`04_nuclear_power_explanation_source.md` とPowerPoint QA記録の双方に存在しない。

したがって、過去問5問を解けることだけでは系列SPECを完了したことにならない。

## 進捗記録の不整合

### `04_nuclear_power.md`

冒頭状態が `topic_04_preproduction_independent_verification_complete` のまま。末尾の品質ゲートも、解説本文・PDF・練習問題・練習PDF・PowerPoint・完成後独立再解答を未実施としており、現在地と一致しない。

### `04_nuclear_power_explanation_source.md`

状態が `topic_04_explanation_source_complete`、末尾の次段階が「練習問題＋完全解説sourceを作成」のまま。実際には練習source、両PDF、PowerPoint、完成後独立再解答まで完了済み。

### `04_nuclear_power_practice.md`

冒頭状態が `topic_04_practice_questions_and_full_explanations_complete` のままで、完成テーマとしての現在地に同期していない。

## 過去問対応品質ゲート

- R7 一次 電力 問5: PASS
- H22 一次 電力 問1: PASS
- R3 一次 電力 問5: PASS
- R1 二次 電力・管理 問1: PASS
- R3 二次 電力・管理 問6: PASS
- 合計: `5 / 5 PASS`
- 一次: `3 / 3 PASS`
- 二次: `2 / 2 PASS`
- 教材外知識補完: `0件`
- 固定範囲外追加: `0件`
- 未確認実設備値依存: `0件`

## 必須成果物の実在確認

- `04_nuclear_power.md` — blob `7dcba2bcae9e5ffccf47b75ab72b8aae9f2b6f6a`
- `04_nuclear_power_explanation_source.md` — blob `d05de1d706f14b36c03abcf71f80eb361b226410`
- `04_nuclear_power_explanation.pdf` — blob `1ecb19ba3ea513ed6ed594e62f7936d3a9653d97`
- `04_nuclear_power_practice.md` — blob `15efc8ceb62ee72321caa5af79316f846057028f`
- `04_nuclear_power_practice.pdf` — blob `45a590897c1ba574cb45d230e0d3f0b894b47a67`
- `04_nuclear_power_images.pptx` — blob `bf1fdddd725f738b49a0de3dfaca8a7c5e6a319b`
- `04_nuclear_power_practice_qa.md` — blob `287089ac914102112be18e6088948689f2319f12`
- `04_nuclear_power_powerpoint_qa.md` — blob `617e546a56efa9d63f719f85d59334a9f6c05dbf`
- `04_nuclear_power_independent_reanswer.md` — blob `12c8d2a412b707af42b974e83fbbbc1a174e13b5`

## 次段階

系列SPECで欠けている2項目だけを固定範囲内で解説sourceへ補強し、進捗記録を現在地へ同期する。未確認実値は追加せず、必要な教材用条件は仮定値と明示する。正式選定5問、EXAM_ALIGNMENT、既存の過去問解法は変更しない。その後、影響するPDF/PPTXへ同期し、最終QAを再実施する。