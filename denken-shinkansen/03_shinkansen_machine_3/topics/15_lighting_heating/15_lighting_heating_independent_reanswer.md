# Topic 15 完成後blind独立再解答

更新日: 2026-09-18

対象: Topic 15 固定EXAM_ALIGNMENT 7問・12答案要素

状態: `COMPLETE / 12 of 12 verified`

## 実施条件

完成済み教材 `15_lighting_heating.md` の固定範囲だけを使い、固定EXAM_ALIGNMENT 7問を再解答した。光束発散度、熱伝導・熱放射、工業電熱、未確認の実車値、Topic 16の知識は補っていない。

答案固定までは電気技術者試験センターの問題PDFだけを参照し、公式解答PDFは参照していない。12答案要素はcommit `e5dc7884e5500fe7b407f67c758b45e51c9501a3` で先に固定し、その後に公式解答と照合した。

## blind答案固定

### R8上 機械 問17(a)(b)

乾燥木材は `100 - 70 = 30 kg`、蒸発させる水は `70 - 5 = 65 kg`。20 ℃から100 ℃までの温度上昇は `80 K`。

```text
Q_wood = 30 × 1.25 × 80 = 3.00×10^3 kJ
Q_water = 70 × 4.19 × 80 = 23.464×10^3 kJ
Q_latent = 65 × 2.26×10^3 = 146.9×10^3 kJ
Q_total = 173.364×10^3 kJ
```

(a) 最も近い選択肢: `(5)`。

有効加熱電力は `22 × 0.55 = 12.1 kW`。

```text
t = 173364 / 12.1 = 1.4328×10^4 s = 3.98 h
```

(b) 最も近い選択肢: `(2)`。

blind答案: `(a)5 / (b)2`

### R7上 機械 問12

駐車場中心から各柱までの水平距離は `sqrt(3^2 + 4^2) = 5 m`。光源高さも5 mなので、斜距離 `r = sqrt(5^2 + 5^2) = sqrt(50) m`、`cosθ = 5/sqrt(50)`。

```text
I = 5000/(4π) = 397.9 cd
E_1 = I cosθ / r^2 = 5.63 lx
E_total = 4E_1 = 22.5 lx
```

最も近い選択肢: `(4)`。

blind答案: `(4)`

### R7上 機械 問17(a)(b)

(a)

```text
Q = 5 × 334 = 1670 kJ
P = Q/(ηt) = 1670/(0.70×1800) = 1.33 kW
```

最も近い選択肢: `(2)`。

(b)

```text
Q = 5 × 4.2 × 50 = 1050 kJ
t = Q/(ηP) = 1050/(0.70×1.7) = 882 s = 14.7 min
```

最も近い選択肢: `(2)`。

blind答案: `(a)2 / (b)2`

### R6下 機械 問17(a)(b)

(a)

```text
I = 3000/(4π) = 238.7 cd
```

最も近い選択肢: `(2)`。

(b) `r = sqrt(2^2 + 1.5^2) = 2.5 m`、`cosθ = 2/2.5 = 0.8`。

```text
E = 238.7 × 0.8 / 2.5^2 = 30.6 lx
```

最も近い選択肢: `(3)`。

blind答案: `(a)2 / (b)3`

### R6上 機械 問17(a)(b)

```text
I = 12000/(4π) = 954.9 cd
```

(a) 直下3 mなので、

```text
E = I/3^2 = 106.1 lx
```

最も近い選択肢: `(2)`。

(b) 球の投影面積は直径0.30 mの円なので、

```text
A_proj = π×0.15^2 = 0.07069 m^2
L = I/A_proj = 1.351×10^4 cd/m^2
```

`I ≈ 955 cd`、`L ≈ 13 500 cd/m^2` の組合せは `(1)`。

blind答案: `(a)2 / (b)1`

### R4上 機械 問17(a)(b)

入力電力量は `1.00 kW × 6 h = 6.00 kWh = 21.6 MJ`。COP 4.5より、

```text
Q = 4.5 × 21.6 = 97.2 MJ
```

(a) 選択肢: `(5)`。

水の質量は `0.370 × 1.00×10^3 = 370 kg`。

```text
ΔT = 97.2×10^6 /(370×4.18×10^3) = 62.85 K
T_final = 20.0 + 62.85 = 82.85 ℃
```

(b) 最も近い選択肢: `(5)`。

blind答案: `(a)5 / (b)5`

### R2 機械 問12

床面積は `15×10 = 150 m^2`。

```text
N = EA/(FUM)
  = 500×150/(2400×0.60×0.70)
  = 74.4
```

必要最小数なので75灯へ切り上げる。選択肢 `(3)`。

blind答案: `(3)`

## 答案固定一覧

- R8上 機械 問17: `(a)5 / (b)2`
- R7上 機械 問12: `(4)`
- R7上 機械 問17: `(a)2 / (b)2`
- R6下 機械 問17: `(a)2 / (b)3`
- R6上 機械 問17: `(a)2 / (b)1`
- R4上 機械 問17: `(a)5 / (b)5`
- R2 機械 問12: `(3)`

合計: `12答案要素`。

## 公式解答照合

答案固定commit後、電気技術者試験センター公式解答PDFを確認した。

| 対象 | blind答案 | 公式解答 | 判定 |
|---|---|---|---|
| R8上 機械 問17(a) | 5 | 5 | PASS |
| R8上 機械 問17(b) | 2 | 2 | PASS |
| R7上 機械 問12 | 4 | 4 | PASS |
| R7上 機械 問17(a) | 2 | 2 | PASS |
| R7上 機械 問17(b) | 2 | 2 | PASS |
| R6下 機械 問17(a) | 2 | 2 | PASS |
| R6下 機械 問17(b) | 3 | 3 | PASS |
| R6上 機械 問17(a) | 2 | 2 | PASS |
| R6上 機械 問17(b) | 1 | 1 | PASS |
| R4上 機械 問17(a) | 5 | 5 | PASS |
| R4上 機械 問17(b) | 5 | 5 | PASS |
| R2 機械 問12 | 3 | 3 | PASS |

公式解答一致: `12 / 12 PASS`。

公式資料:
- R8上: https://www.shiken.or.jp/chief/upload/20260830_ch_third_q03.pdf / https://www.shiken.or.jp/chief/upload/20260830_ch_third_a01.pdf
- R7上: https://www.shiken.or.jp/chief/upload/20250831_ch_third_q03.pdf / https://www.shiken.or.jp/chief/upload/20250831_ch_third_a01.pdf
- R6下: https://www.shiken.or.jp/chief/upload/20250323_ch_third_q03.pdf / https://www.shiken.or.jp/chief/upload/2024_3_2.pdf
- R6上: https://www.shiken.or.jp/chief/upload/20240818_ch_third_q03.pdf / https://www.shiken.or.jp/chief/upload/20240818_ch_third_a01.pdf
- R4上: https://www.shiken.or.jp/chief/upload/20220821_ch_third_q03.pdf / https://www.shiken.or.jp/chief/upload/20220821_ch_third_a01.pdf
- R2: https://www.shiken.or.jp/chief/upload/20200913_ch_third_q03.pdf / https://www.shiken.or.jp/chief/upload/20200913_ch_third_a01.pdf
- 参照日: 2026-09-18

## 品質ゲート判定

- 完成教材だけで必要公式を選択: `12 / 12 PASS`
- 完成教材だけで途中式を構成: `12 / 12 PASS`
- 選択肢を一意に確定: `12 / 12 PASS`
- 公式解答一致: `12 / 12 PASS`
- 教材外・固定範囲外知識による補完: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定範囲外追加: `0件`
- 光束発散度・熱伝導・熱放射・工業電熱の追加: `0件`
- 未確認新幹線車内設備実値追加: `0件`
- Topic 16先取り: `0件`

判定: `PASS`

次工程はTopic 15の最終QA。必須成果物、表示QA、固定EXAM_ALIGNMENT、完成後blind独立再解答、進捗記録整合、固定範囲境界を再確認し、全件PASSの場合のみ `completed` とする。
