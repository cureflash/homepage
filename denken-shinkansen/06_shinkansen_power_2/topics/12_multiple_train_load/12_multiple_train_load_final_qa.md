# Topic 12 最終QA

更新日: 2026-09-18

## 判定

`PASS / completed`

前回 `NEEDS_REVISION / IN_PROGRESS` の唯一の未完了理由だった進捗記録不整合を解消後、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`、最新main、Topic 12成果物、各QA、完成後blind独立再解答を再確認した。

技術内容、固定EXAM_ALIGNMENT、必須成果物、PDF/PPTX QA、練習問題QA、計算プログラムQA、完成後独立再解答、SPEC固定範囲、進捗記録整合を全件PASSとした。

## 品質ゲート

| 確認項目 | 結果 | 内容 |
|---|---|---|
| 上位仕様 | PASS | `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md` を再確認 |
| 正式EXAM_ALIGNMENT | PASS | R4二次問6、R1二次問2、H30一次問7、H29二次問4、H23二次問6の5問・25答案要素を維持 |
| 制作前独立再解答 | PASS | `23 / 25答案要素` で不足2要素を特定し、固定範囲内の符号規約補完へ戻した記録がある |
| 完成後独立再解答 | PASS | `5 / 5問・25 / 25答案要素 PASS`。一次 `5 / 5`、二次 `20 / 20`。制作前不足2要素も `2 / 2` 改善確認 |
| 必須成果物 | PASS | 主source、解説PDF、練習source/PDF、PowerPoint、計算プログラム・CSV・2グラフ、各QA、blind記録が実在 |
| 解説PDF | PASS | A4縦3ページ、200 dpi表示 `3 / 3 PASS`、文字抽出PASS、3段階例題 `3 / 3 PASS` |
| 練習 | PASS | 15問（一次10＋二次5）、数値・論理 `15 / 15 PASS`、一次正答一意性 `10 / 10 PASS`、正式25答案要素接続 `25 / 25 PASS` |
| 練習PDF | PASS | A4縦7ページ、表示 `7 / 7 PASS`、文字抽出PASS、一次10問＋二次5問・完全解説を維持 |
| 計算プログラム | PASS | 列車本数 `n=0...4` の5点で定電力負荷潮流を計算、CSV `5 / 5`、高電圧側解 `5 / 5`、SVG `2 / 2`、複素KVL再代入PASS |
| PowerPoint | PASS | 16:9・4枚、表示 `4 / 4 PASS`、overflow 0、ZIP整合性PASS、SPEC固定8項目 `8 / 8`、指定2量 `2 / 2` |
| SPEC境界 | PASS | Topic 13以降先取り0件、未確認N700S実設備値0件、仕様追加0件、公式過去問転載0件 |
| 進捗記録整合 | PASS | 前回blockerだった主source・練習source・PowerPoint QAの旧進捗記録を実成果物状態へ同期済み |

## 正式過去問対応品質ゲート

- R4 二種二次「電力・管理」問6: `8 / 8答案要素 PASS`
- R1 二種二次「電力・管理」問2: `6 / 6答案要素 PASS`
- H30 二種一次「電力」問7: `5 / 5答案要素 PASS`
- H29 二種二次「電力・管理」問4: `3 / 3答案要素 PASS`
- H23 二種二次「電力・管理」問6: `3 / 3答案要素 PASS`
- 合計: `5 / 5問・25 / 25答案要素 PASS`
- 教材外知識補完: `0件`
- 固定範囲外追加: `0件`
- 後続Topic知識への依存: `0件`
- 未確認N700S実設備値依存: `0件`
- 仕様追加: `0件`

一次1問に加えて二次4問を含み、二種の一次・二次双方を確認している。制作前 `23 / 25` で不足したH29二次問4の2要素は、完成教材の `S=P+jQ`、進み `Q<0`、`I=(P-jQ)/(√3V)` と複数枝KCL/KVLだけで正答でき、完成後 `2 / 2` 改善確認済みである。

## 必須成果物の実在確認

- `12_multiple_train_load.md`
- `12_multiple_train_load_explanation.pdf` — QA `PASS`
- `12_multiple_train_load_practice.md` — 15問、QA `PASS`
- `12_multiple_train_load_practice.pdf` — QA `PASS`
- `12_multiple_train_load_sim.py` / `12_multiple_train_load_sweep.csv` / 2 SVG — QA `PASS`
- `12_multiple_train_load_images.pptx` — QA `PASS`
- `12_multiple_train_load_blind_reanswer_20260918.md` — `5 / 5問・25 / 25答案要素 PASS`

## 完了判定

Topic 12 は `completed`。

完成数: `12 / 22`

次はTopic 13「単相の新幹線負荷は三相系統を乱さない？」の制作前EXAM_ALIGNMENTを行う。