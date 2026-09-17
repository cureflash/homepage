# STATUS

updated: 2026-09-18
series: `06_shinkansen_power_2`
active_topic: `12`
theme: N700Sが何本も同時加速したら？
current_status: `topic_12_explanation_source_complete`
completed_topics: `11 / 22`

## Topic 12 current result

解説本文sourceを制作した。固定5問・25答案要素を本文へ `25 / 25` マッピングし、制作前独立再解答で検出した進み/遅れ無効電力の符号規約を反映した。

正式品質ゲートは変更しない。
- 令和4年度 第二種二次「電力・管理」問6 — 制作前再解答 `8 / 8 PASS`
- 令和元年度 第二種二次「電力・管理」問2 — 制作前再解答 `6 / 6 PASS`
- 平成30年度 第二種一次「電力」問7 — 制作前再解答 `5 / 5 PASS`
- 平成29年度 第二種二次「電力・管理」問4 — 制作前再解答 `1 / 3 PASS`
- 平成23年度 第二種二次「電力・管理」問6 — 制作前再解答 `3 / 3 PASS`
- 制作前合計: 一次1問＋二次4問、`23 / 25答案要素 PASS`

今回のsourceで次を明示した。
- `S=P+jQ`
- 遅れ `Q>0`、進み `Q<0`
- 三相負荷の `I=(P-jQ)/(√3V)` と共役関係
- 進み/遅れを符号へ変換してから複数枝KVLへ進む手順
- 最大需要、需要率、不等率、負荷率
- 定電力負荷、簡易P-Q潮流、複数枝電流、`I^2R` 損失、損失係数
- 基礎・本試験標準・複合の3段階例題

教材内説明箇所のマッピングは `25 / 25` だが、完成後blind独立再解答は未実施のため品質ゲートは未通過のまま維持する。

制作境界:
- 固定5問・25答案要素の変更: `0件`
- 後続Topic論点の追加: `0件`
- 未確認N700S実設備値の真値使用: `0件`
- 公式過去問の個別正答値・正答記号のsource転記: `0件`

source:
- `topics/12_multiple_train_load/12_multiple_train_load.md`
- `topics/12_multiple_train_load/12_preproduction_reanswer.md`
- `topics/12_multiple_train_load/12_multiple_train_load_explanation.md`

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
- [ ] Topic 12 — explanation source completed; final blind gate pending

## next_start

Topic 12の解説PDFを制作し、表示・文字抽出・数式欠落・3段階例題をQAする。固定5問・25答案要素と今回補った進み/遅れ無効電力符号規約を落とさず、仕様外論点・後続Topic・未確認実設備値で穴埋めしない。完成後blind独立再解答までTopic 12をcompletedにしない。