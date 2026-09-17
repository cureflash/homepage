# STATUS

updated: 2026-09-18
series: `06_shinkansen_power_2`
active_topic: `12`
theme: N700Sが何本も同時加速したら？
current_status: `topic_12_calculation_program_complete`
completed_topics: `11 / 22`

## Topic 12 current result

列車本数―電圧・損失の計算プログラム、結果CSV、SVGグラフ2種、計算QAを制作した。

成果物:
- `topics/12_multiple_train_load/12_multiple_train_load_sim.py`
- `topics/12_multiple_train_load/12_multiple_train_load_sweep.csv`
- `topics/12_multiple_train_load/12_multiple_train_load_voltage.svg`
- `topics/12_multiple_train_load/12_multiple_train_load_loss.svg`
- `topics/12_multiple_train_load/12_multiple_train_load_sim_qa.md`

計算条件は解説source §11.3 の教材上仮定値を再利用した。N700S・新幹線実設備値ではない。
- 送電端線間電圧 `66 kV`
- 1列車あたり `2 MW`
- 遅れ力率 `0.90`
- 線路1相あたり `R=0.50 Ω`, `X=1.00 Ω`
- 列車本数 `n=0...4`

計算QA:
- CSV行数 `5 / 5 PASS`
- 受電端電圧: 全点単調非増加 PASS
- 線路電流・線路損失: 全点単調非減少 PASS
- 実数高電圧解 `5 / 5 PASS`
- SVG XML parse `2 / 2 PASS`
- SPEC指定「列車本数―電圧」「列車本数―損失」 `2 / 2 PASS`
- CSV丸め値を複素KVLへ独立再代入した代表点残差は最大 `0.000280 V`

正式品質ゲートは変更しない。
- 令和4年度 第二種二次「電力・管理」問6 — 制作前再解答 `8 / 8 PASS`
- 令和元年度 第二種二次「電力・管理」問2 — 制作前再解答 `6 / 6 PASS`
- 平成30年度 第二種一次「電力」問7 — 制作前再解答 `5 / 5 PASS`
- 平成29年度 第二種二次「電力・管理」問4 — 制作前再解答 `1 / 3 PASS`
- 平成23年度 第二種二次「電力・管理」問6 — 制作前再解答 `3 / 3 PASS`
- 制作前合計: 一次1問＋二次4問、`23 / 25答案要素 PASS`

解説・練習教材内では固定5問・25答案要素を `25 / 25` カバー済みだが、完成後blind独立再解答PASSではない。Topic 12は未完了のまま維持する。

制作境界:
- 固定5問・25答案要素の変更: `0件`
- 後続Topic論点の追加: `0件`
- 未確認N700S実設備値の真値使用: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

source:
- `topics/12_multiple_train_load/12_multiple_train_load.md`
- `topics/12_multiple_train_load/12_preproduction_reanswer.md`
- `topics/12_multiple_train_load/12_multiple_train_load_explanation.md`
- `topics/12_multiple_train_load/12_multiple_train_load_explanation.pdf`
- `topics/12_multiple_train_load/12_multiple_train_load_explanation_pdf_qa.md`
- `topics/12_multiple_train_load/12_multiple_train_load_practice.md`
- `topics/12_multiple_train_load/12_multiple_train_load_practice_qa.md`
- `topics/12_multiple_train_load/12_multiple_train_load_practice.pdf`
- `topics/12_multiple_train_load/12_multiple_train_load_practice_pdf_qa.md`
- `topics/12_multiple_train_load/12_multiple_train_load_sim.py`
- `topics/12_multiple_train_load/12_multiple_train_load_sweep.csv`
- `topics/12_multiple_train_load/12_multiple_train_load_voltage.svg`
- `topics/12_multiple_train_load/12_multiple_train_load_loss.svg`
- `topics/12_multiple_train_load/12_multiple_train_load_sim_qa.md`

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
- [ ] Topic 12 — calculation program completed; PowerPoint and final blind gate pending

## next_start

Topic 12の解説画像PowerPointを制作し、PowerPoint QAを行う。固定5問・25答案要素、進み/遅れ符号規約、教材上仮定値と実設備値の区別を維持し、仕様外論点・Topic 13以降・未確認N700S実設備値を追加しない。完成後blind独立再解答まではTopic 12をcompletedにしない。
