# HANDOFF

updated: 2026-09-17
series: `06_shinkansen_power_2`
active_topic: `11`
current_status: `topic_11_calculation_program_complete`

## 今回完了

Topic 11「新幹線が移動すると電圧はどう変わる？」のSPEC指定計算プログラムを制作し、CSV・4種グラフ・独立計算QAをGitHub正本へ反映した。

前提の試験対応品質ゲートは変更していない。

- 平成30年度 第二種一次「電力」問7 — `5 / 5 PASS`
- 平成27年度 第二種二次「電力・管理」問3 — `4 / 4 PASS`
- 平成27年度 第二種二次「電力・管理」問4 — `5 / 5 PASS`
- 平成26年度 第二種二次「電力・管理」問4 — `3 / 3 PASS`
- 合計: `4 / 4問・17 / 17答案要素 PASS`

追加成果物:
- `topics/11_moving_train_voltage/11_moving_train_voltage_sim.py`
- `topics/11_moving_train_voltage/11_moving_train_voltage_sweep.csv`
- `topics/11_moving_train_voltage/11_moving_train_voltage_pantograph_voltage.svg`
- `topics/11_moving_train_voltage/11_moving_train_voltage_line_current.svg`
- `topics/11_moving_train_voltage/11_moving_train_voltage_active_loss.svg`
- `topics/11_moving_train_voltage/11_moving_train_voltage_reactive_power.svg`
- `topics/11_moving_train_voltage/11_moving_train_voltage_sim_qa.md`

計算条件・QA:
- 解説source例題2の教材上仮定値を再利用。実設備値ではない。
- `|Vs|=25.0 kV`, `P=4.00 MW`, 遅れ力率 `0.90`, `z'=0.04+j0.06 Ω/km`
- `x=0.0 ... 12.0 km`, `0.1 km`刻み、`121点`
- SPEC指定4量のCSV出力・グラフ化: `4 / 4 PASS`
- 代表点 `0 / 6 / 12 km` の独立再代入: PASS
- `x=12 km`: `Vr=24.866572 kV`, `I=178.731693 A`, `P_loss=15.333609 kW`, `Q_load=1937.288419 kvar`, `Q_line=23.000413 kvar`
- 解説例題2の丸め値 `24.867 kV / 178.7 A / 15.3 kW` と一致
- 全点で `Vr` 単調非増加、`I/P_loss/Q_line` 単調非減少、`Q_load` 一定: PASS
- Topic 12以降の先取り: `0件`
- 未確認実設備値: `0件`
- 仕様追加: `0件`
- 公式過去問転載: `0件`

## 現在地

Topic 11: `calculation_program_complete / IN_PROGRESS`。

完成数: `10 / 22`。

## 次に行う

Topic 11の解説画像PowerPointを制作し、表示・数式・試験対応QAを行う。完成後blind再解答はまだ実施しない。
