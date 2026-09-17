# Topic 11 最終QA

更新日: 2026-09-17

## 判定

`PASS / completed`

前回 `NEEDS_REVISION / IN_PROGRESS` の唯一の未完了理由だった進捗記録不整合を解消後、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`、最新main、Topic 11成果物、各QA、完成後blind独立再解答を再確認した。

技術内容、固定EXAM_ALIGNMENT、必須成果物、PDF/PPTX QA、練習問題QA、計算プログラムQA、完成後独立再解答、SPEC固定範囲、進捗記録整合を全件PASSとした。

## 品質ゲート

| 確認項目 | 結果 | 内容 |
|---|---|---|
| 上位仕様 | PASS | `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md` を再確認 |
| 正式EXAM_ALIGNMENT | PASS | H30一次問7、H27二次問3・問4、H26二次問4の4問を維持。固定範囲外問題で5問へ水増ししていない |
| 制作前独立再解答 | PASS | `4 / 4問・17 / 17答案要素 PASS` |
| 完成後独立再解答 | PASS | `4 / 4問・17 / 17答案要素 PASS`。一次 `5 / 5`、二次 `12 / 12` |
| 必須成果物 | PASS | 主source、解説PDF、練習source/PDF、PowerPoint、計算プログラム・CSV・4グラフ、各QA、blind記録が実在 |
| 解説PDF | PASS | A4縦2ページ、200 dpi表示 `2 / 2 PASS`、文字抽出PASS、3段階例題 `3 / 3 PASS` |
| 練習 | PASS | 15問（一次10＋二次5）、数値・論理 `15 / 15 PASS`、一次正答一意性 `10 / 10 PASS`、正式17答案要素接続 `17 / 17 PASS` |
| 練習PDF | PASS | A4縦8ページ、表示 `8 / 8 PASS`、文字抽出PASS、GitHub正本bytes再レンダリング差分0 |
| 計算プログラム | PASS | `x=0...12 km` を0.1 km刻み121点、SPEC指定4量をCSV・グラフ化、代表点再代入・全点傾向QA PASS |
| PowerPoint | PASS | 16:9・4枚、表示 `4 / 4 PASS`、overflow 0、ZIP整合性PASS、SPEC固定6項目 `6 / 6`、指定4量 `4 / 4` |
| SPEC境界 | PASS | Topic 12以降先取り0件、未確認実設備値0件、仕様追加0件、公式過去問転載0件 |
| 進捗記録整合 | PASS | 前回blockerだった主source・練習source・PowerPoint QAの旧進捗記録を実成果物へ同期し、主sourceを `completed` へ更新 |

## 正式過去問対応品質ゲート

- H30 二種一次「電力」問7: `5 / 5答案要素 PASS`
- H27 二種二次「電力・管理」問3: `4 / 4答案要素 PASS`
- H27 二種二次「電力・管理」問4: `5 / 5答案要素 PASS`
- H26 二種二次「電力・管理」問4: `3 / 3答案要素 PASS`
- 合計: `4 / 4問・17 / 17答案要素 PASS`
- 教材外知識補完: `0件`
- 固定範囲外追加: `0件`
- 後続Topic知識への依存: `0件`
- 未確認実設備値依存: `0件`
- 仕様追加: `0件`

原則5問未満である点は、Topic 11固定範囲だけで問題全体を完答できる正式問題を4問に限定し、固定範囲外論点を追加して件数を水増ししないためである。一次1問に加えて二次3問を含み、二種の一次・二次双方を確認している。

## 必須成果物の実在確認

- `11_moving_train_voltage.md` — `completed`
- `11_moving_train_voltage_explanation.pdf` — QA `PASS`
- `11_moving_train_voltage_practice.md` — 15問、QA `PASS`
- `11_moving_train_voltage_practice.pdf` — QA `PASS`
- `11_moving_train_voltage_sim.py` / `11_moving_train_voltage_sweep.csv` / 4 SVG — QA `PASS`
- `11_moving_train_voltage_images.pptx` — QA `PASS`
- `11_moving_train_voltage_blind_reanswer_20260917.md` — `4 / 4問・17 / 17答案要素 PASS`

## 完了判定

Topic 11 は `completed`。

完成数: `11 / 22`

次はTopic 12「N700Sが何本も同時加速したら？」の制作前EXAM_ALIGNMENTを行う。