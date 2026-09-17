# Topic 11 計算プログラム QA

更新日: 2026-09-17
判定: `PASS`

## 対象

- `11_moving_train_voltage_sim.py`
- `11_moving_train_voltage_sweep.csv`
- `11_moving_train_voltage_pantograph_voltage.svg`
- `11_moving_train_voltage_line_current.svg`
- `11_moving_train_voltage_active_loss.svg`
- `11_moving_train_voltage_reactive_power.svg`

## 仕様境界

SPEC固定の単一移動負荷モデルだけを実装した。

- 列車位置 `x` を連続範囲で掃引
- パンタグラフ電圧
- 線路電流
- 有効電力損失
- 無効電力

複数列車潮流、無効電力補償、逆潮流、短絡、保護、安定度などTopic 12以降の論点は実装していない。

## 入力条件

解説source例題2の教材上仮定値をそのまま再利用した。実設備値ではない。

- `|Vs| = 25.0 kV`
- `P = 4.00 MW`
- 遅れ力率 `cosφ = 0.90`
- `z' = 0.04 + j0.06 Ω/km`
- 掃引範囲 `x = 0.0 ... 12.0 km`
- 刻み `0.1 km`
- 出力点数 `121`

新しい実設備条件は追加していない。

## 使用式

`Q = P tan(cos^-1 pf)`

`R(x)=r'x`, `X(x)=x'x`

`A=RP+XQ`, `B=XP-RQ`

`y=Vr^2` として

`y^2 + (2A-|Vs|^2)y + (A^2+B^2)=0`

の高電圧側解を使用する。

`|I| = sqrt(P^2+Q^2)/Vr`

`P_loss = |I|^2 R`

`Q_line = |I|^2 X`

負荷無効電力 `Q_load` と線路リアクタンスの無効電力 `Q_line` はCSVとグラフで名称を分離した。

## 独立再計算

プログラム出力だけを根拠にせず、代表点を式へ再代入した。

| x | Vr | I | P_loss | Q_load | Q_line |
|---:|---:|---:|---:|---:|---:|
| 0 km | 25.000000 kV | 177.777778 A | 0.000000 kW | 1937.288419 kvar | 0.000000 kvar |
| 6 km | 24.933496 kV | 178.251959 A | 7.625703 kW | 1937.288419 kvar | 11.438554 kvar |
| 12 km | 24.866572 kV | 178.731693 A | 15.333609 kW | 1937.288419 kvar | 23.000413 kvar |

`x=12 km` は解説source例題2の丸め値 `Vr≈24.867 kV`, `I≈178.7 A`, `P_loss≈15.3 kW` と一致した。

CSV丸め値を `Vs = Vr + ZI` へ独立再代入した送電端電圧大きさの残差は、代表点0 / 6 / 12 kmでそれぞれ `0 / 0.000370 / 0.000376 V`。6桁CSV丸めによる差だけである。

## 全点QA

- CSV行数: `121 / 121 PASS`
- `x=0.0 ... 12.0 km`, `0.1 km`刻み: PASS
- パンタグラフ電圧: 全点で単調非増加 PASS
- 線路電流: 全点で単調非減少 PASS
- 有効電力損失: 全点で単調非減少 PASS
- `Q_load`: 全点一定 PASS
- `Q_line`: 全点で単調非減少 PASS
- 実数高電圧解: `121 / 121 PASS`
- SPEC指定4量のCSV出力: `4 / 4 PASS`
- SPEC指定4量のグラフ化: `4 / 4 PASS`

## 試験対応品質ゲート維持

計算プログラムは既存解説の式を可視化する工程であり、正式過去問セットは変更していない。

- 平成30年度 第二種一次「電力」問7 — `5 / 5 PASS`
- 平成27年度 第二種二次「電力・管理」問3 — `4 / 4 PASS`
- 平成27年度 第二種二次「電力・管理」問4 — `5 / 5 PASS`
- 平成26年度 第二種二次「電力・管理」問4 — `3 / 3 PASS`
- 合計 `4 / 4問・17 / 17答案要素 PASS`

## 範囲監査

- Topic 12以降の先取り: `0件`
- 未確認実設備値: `0件`
- 仕様追加: `0件`
- 公式過去問転載: `0件`

## SHA-256

- `11_moving_train_voltage_sim.py`: `0ffab3cbf34567788c8c3b8128129a0058869b910cca1c0e1185188c04e044b8`
- `11_moving_train_voltage_sweep.csv`: `7bf437243dcd7f5b4b8f2bceab38456c7ced3847e58149f14e804d2915c24ac4`
- `11_moving_train_voltage_pantograph_voltage.svg`: `a1236eb7c2004e078242540ba105ee38e8e6389b5e751d663ebfaff66fbb463d`
- `11_moving_train_voltage_line_current.svg`: `1f10af17e46966cbf8c7f6cd6ccceb21081dd0fa680c808ed48ea03b95e9d5a0`
- `11_moving_train_voltage_active_loss.svg`: `55a112e09086ee2deb3ff52e52618903acd6b5193444b5eee227645f1b30b91a`
- `11_moving_train_voltage_reactive_power.svg`: `33a965c120aedb9914312c65643130844ad5fdfed6954b27448d35a86c4fb8e0`

## 次工程

Topic 11の解説画像PowerPointを制作し、PowerPoint QAを行う。完成後blind再解答はまだ実施しない。
