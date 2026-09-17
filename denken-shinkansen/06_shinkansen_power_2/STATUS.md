# STATUS

updated: 2026-09-18
series: `06_shinkansen_power_2`
active_topic: `12`
theme: N700Sが何本も同時加速したら？
current_status: `topic_12_explanation_pdf_complete`
completed_topics: `11 / 22`

## Topic 12 current result

解説PDFを制作し、表示・文字抽出・数式・3段階例題QAを完了した。

成果物:
- `topics/12_multiple_train_load/12_multiple_train_load_explanation.pdf`
- `topics/12_multiple_train_load/12_multiple_train_load_explanation_pdf_qa.md`

PDF QA:
- A4縦 `3ページ`
- 200 dpi表示QA `3 / 3 PASS`
- `pdftotext` 文字抽出 PASS、U+FFFD `0件`
- 3段階例題独立再計算 `3 / 3 PASS`
- 固定5問・25答案要素の教材内説明マッピング `25 / 25`
- 進み/遅れ無効電力符号規約 `S=P+jQ`、遅れ `Q>0`、進み `Q<0`、三相 `I=(P-jQ)/(√3V)` をPDFへ明示

正式品質ゲートは変更しない。
- 令和4年度 第二種二次「電力・管理」問6 — 制作前再解答 `8 / 8 PASS`
- 令和元年度 第二種二次「電力・管理」問2 — 制作前再解答 `6 / 6 PASS`
- 平成30年度 第二種一次「電力」問7 — 制作前再解答 `5 / 5 PASS`
- 平成29年度 第二種二次「電力・管理」問4 — 制作前再解答 `1 / 3 PASS`
- 平成23年度 第二種二次「電力・管理」問6 — 制作前再解答 `3 / 3 PASS`
- 制作前合計: 一次1問＋二次4問、`23 / 25答案要素 PASS`

PDF内の `25 / 25` は説明箇所の存在確認であり、完成後blind独立再解答PASSを意味しない。Topic 12は未完了のまま維持する。

制作境界:
- 固定5問・25答案要素の変更: `0件`
- 後続Topic論点の追加: `0件`
- 未確認N700S実設備値の真値使用: `0件`
- 仕様追加: `0件`

source:
- `topics/12_multiple_train_load/12_multiple_train_load.md`
- `topics/12_multiple_train_load/12_preproduction_reanswer.md`
- `topics/12_multiple_train_load/12_multiple_train_load_explanation.md`
- `topics/12_multiple_train_load/12_multiple_train_load_explanation.pdf`
- `topics/12_multiple_train_load/12_multiple_train_load_explanation_pdf_qa.md`

## Topic 11 final result

Topic 11は `PASS / completed` を維持する。

正式品質ゲート:
- 平成30年度 第二種一次「電力」問7 — `5 / 5 PASS`
- 平成27年度 第二種二次「電力・管理」問3 — `4 / 4 PASS`
- 平成27年度 第二種二次「電力・管理」問4 — `5 / 5 PASS`
- 平成26年度 第二種二次「電力・管理」問4 — `3 / 3 PASS`
- 合計: `4 / 4問・17 / 17答案要素 PASS`

## Gate checklist

- [x] Topic 01 completed
- [x] Topic 02 completed
- [x] Topic 03 completed
- [x] Topic 04 completed
- [x] Topic 05 completed
- [x] Topic 06 completed
- [x] Topic 07 completed
- [x] Topic 08 completed
- [x] Topic 09 completed
- [x] Topic 10 completed
- [x] Topic 11 completed
- [ ] Topic 12 — explanation PDF completed; final blind gate pending

## next_start

Topic 12の練習問題・完全解説sourceを制作する。一次試験型と二次記述型を固定5問・25答案要素へ接続し、進み/遅れ無効電力の符号規約を落とさない。仕様外論点・Topic 13以降・未確認N700S実設備値を追加せず、完成後blind独立再解答まではTopic 12をcompletedにしない。
