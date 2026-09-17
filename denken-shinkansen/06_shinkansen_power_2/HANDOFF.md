# HANDOFF

updated: 2026-09-18
series: `06_shinkansen_power_2`
active_topic: `12`
current_status: `topic_12_calculation_program_complete`

## 今回完了

Topic 12「N700Sが何本も同時加速したら？」の列車本数―電圧・損失計算を制作した。

成果物:
- `topics/12_multiple_train_load/12_multiple_train_load_sim.py`
- `topics/12_multiple_train_load/12_multiple_train_load_sweep.csv`
- `topics/12_multiple_train_load/12_multiple_train_load_voltage.svg`
- `topics/12_multiple_train_load/12_multiple_train_load_loss.svg`
- `topics/12_multiple_train_load/12_multiple_train_load_sim_qa.md`

解説source §11.3 の教材上仮定値をそのまま使用した。
- `66 kV`
- 1列車 `2 MW`
- 遅れ力率 `0.90`
- 1相線路 `R=0.50 Ω`, `X=1.00 Ω`
- `n=0...4`

定電力負荷として受電端電圧を更新し、高電圧側解を採用した。`n=4` で `Vr=65.880407 kV`、`I=77.898765 A`、三相線路損失 `9.102326 kW`。

計算QA:
- CSV `5 / 5` 行 PASS
- 受電端電圧: 単調非増加 PASS
- 電流・損失: 単調非減少 PASS
- 実数高電圧解 `5 / 5 PASS`
- SVG XML parse `2 / 2 PASS`
- SPEC指定「列車本数―電圧」「列車本数―損失」 `2 / 2 PASS`
- 複素KVL独立再代入残差: 代表点最大 `0.000280 V`

## 正式品質ゲート

固定済み品質ゲートは変更していない。
- 令和4年度 第二種二次「電力・管理」問6 — 制作前再解答 `8 / 8 PASS`
- 令和元年度 第二種二次「電力・管理」問2 — 制作前再解答 `6 / 6 PASS`
- 平成30年度 第二種一次「電力」問7 — 制作前再解答 `5 / 5 PASS`
- 平成29年度 第二種二次「電力・管理」問4 — 制作前再解答 `1 / 3 PASS`
- 平成23年度 第二種二次「電力・管理」問6 — 制作前再解答 `3 / 3 PASS`
- 制作前合計: 一次1問＋二次4問、`23 / 25答案要素 PASS`

解説・練習教材の `25 / 25` は教材内カバレッジであり、完成後blind独立再解答PASSではない。

## 品質境界

- 固定5問・25答案要素の変更: `0件`
- Topic 13以降の論点追加: `0件`
- 未確認N700S実設備値の真値使用: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

## 現在地

Topic 11: `completed`。

Topic 12: 解説PDF＋QA、練習問題source＋source QA、練習PDF＋PDF QA、計算プログラム＋CSV＋SVG＋計算QAまで完了。品質ゲートは完成後blind独立再解答まで未通過。

完成数: `11 / 22`。

## 次に行う

Topic 12の解説画像PowerPointを制作し、PowerPoint QAを行う。固定5問・25答案要素、進み/遅れ符号規約、教材上仮定値と実設備値の区別を維持し、仕様外論点・Topic 13以降・未確認N700S実設備値を追加しない。
