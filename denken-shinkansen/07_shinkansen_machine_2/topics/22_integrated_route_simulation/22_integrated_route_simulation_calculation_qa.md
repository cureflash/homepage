# Topic 22 総合シミュレーション計算QA

更新日: 2026-09-20

## 判定

`PASS / topic_22_simulation_artifacts_complete / IN_PROGRESS`

系列 `SPEC.md` と `22_integrated_route_simulation.md` で固定済みの式・符号規約・教材用仮定値だけを使用し、計算プログラム、CSV、指定6グラフを生成した。東京―新大阪の実運転曲線・勾配・区間距離・未確認実車定数への置換はしていない。

## 成果物

- `22_integrated_route_simulation_calc.py`
- `22_integrated_route_simulation_results.csv`
- `22_time_speed.svg`
- `22_time_acceleration.svg`
- `22_time_current.svg`
- `22_time_torque.svg`
- `22_time_power.svg`
- `22_time_regeneration_power.svg`

実行:

```text
python 22_integrated_route_simulation_calc.py
```

実行結果:

```text
rows=3301
max synchronous-speed residual=0.000e+00 rpm
max slip residual=0.000e+00
max speed-conversion residual=7.105e-15 m/s
max traction-force residual=0.000e+00 N
max acceleration residual=0.000e+00 m/s^2
motoring points=1828
regeneration points=1149
max speed=39.367024 m/s
max consumption=4383.698188 kW
max regeneration=2209.886537 kW
CSV schema/rows=PASS; SVG XML=6/6 PASS
Generated CSV and six Series-SPEC graphs (SVG).
```

## CSV確認

行数: `3301`（`0.0 s`〜`330.0 s`、`Δt=0.1 s`）

系列SPECの8出力:

- 主電動機電流: `motor_current_a`
- トルク: `motor_torque_nm`
- 出力: `motor_output_kw`
- 車輪速度: `wheel_speed_rpm`
- 列車速度: `speed_mps`
- 加速度: `acceleration_mps2`
- 消費電力: `consumption_power_kw`
- 回生電力: `regeneration_power_kw`

QA用の計算追跡列として `synchronous_speed_rpm` と `traction_force_n` も保存した。これは新しい車両仕様・制御方式ではなく、source §10.3 の式照合用である。

## 数値QA

| 項目 | 結果 |
|---|---|
| `n_s = 120f/p` | 最大残差 `0.000e+00 rpm` / PASS |
| `s = (n_s-n_m)/n_s` | 最大残差 `0.000e+00` / PASS |
| `v = πDn_m/(60i)` | 最大残差 `7.105e-15 m/s` / PASS |
| `F_tr = 2iT/D` | 最大残差 `0.000e+00 N` / PASS |
| `a = (F_tr-F_R)/M` | 最大残差 `0.000e+00 m/s²` / PASS |
| 力行点 | `1828` 点存在 / PASS |
| 回生点 | `1149` 点で `s<0`, `T<0`, `regeneration_power_kw>0` / PASS |
| 消費・回生同時正値 | `0` 点 / PASS |
| 速度負値 | `0` 点 / PASS |
| CSV schema / 行数 | PASS |
| SVG XML | `6 / 6 PASS` |

## 代表点の独立再計算

プログラム関数を呼び出さず、CSVに保存された `f`, `v` とsourceの式から別計算した。

### t = 120 s（力行）

CSV:
- `f = 112.204561 Hz`
- `v = 34.266767 m/s`

独立計算:

`n_s = 120f/p = 2244.091220 min^-1`

`n_m = 60iv/(πD) = 1902.462332 min^-1`

`s = (n_s-n_m)/n_s = 0.152234849`

周波数換算した等価回路から:

- `I_1 = 1338.438195 A`
- `T = 16873.909780 N m`
- `P_m = 3361.711249 kW`

走行系:

`F_tr = 2iT/D = 98104.126626 N`

`a = (F_tr-F_R)/M = 0.277013755 m/s²`

CSV丸め値との差は最大でも `0.0054 N`（駆動力）で、6桁保存の丸め範囲内。

### t = 210 s（回生）

CSV:
- `f = 83.594231 Hz`
- `v = 33.307446 m/s`

独立計算:

`n_s = 1671.884620 min^-1`

`n_m = 1849.201630 min^-1`

`s = -0.106058162`

- `I_1 = 871.916833 A`
- `T = -13138.226356 N m`
- `P_m = -2544.190494 kW`
- `F_tr = -76385.036953 N`
- `a = -0.304616790 m/s²`
- 架線側符号付き電力 = `-2205.734689 kW`

CSVでは `regeneration_power_kw = 2205.734344 kW`。符号規約と6桁保存の丸めを含め整合する。

## グラフQA

指定6種をCSVと同じ `rows` から直接生成したため、グラフ元データとCSV生成元は同一である。

- 時間―速度: PASS
- 時間―加速度: PASS
- 時間―電流: PASS
- 時間―トルク: PASS
- 時間―電力: PASS
- 時間―回生電力: PASS

各SVGにタイトル、軸ラベル、単位、凡例、計算条件、値区分注記を付した。6ファイルともXML parse `PASS`、レンダリング確認でも軸・凡例・曲線の欠落なし。

## 試験対応・仕様境界

- 固定EXAM_ALIGNMENT: 一次4問＋二次2問・16答案要素を変更していない。
- 固定過去問の個別正答記号・最終数値を新規保存していない。
- 未確認実車・実路線値の真値化: `0件`
- 系列SPEC外の新規制御方式・車両仕様追加: `0件`
- 25 kV以外の基準数値はsourceで固定済みの教材用仮定値。
- 本シミュレーションは東京―新大阪の実運転曲線を再現したものではない。
- 独立過去問再解答: `NOT_RUN`（全成果物完成後）

次工程: Topic 22 解説プリントPDF。
