# Topic 34 clean blind v2 公式照合QA

更新日: 2026-09-21

判定: `PASS / 27_OF_27`

## candidate lock

- candidate: `34_compressor_pump_fan_load_characteristics_clean_blind_v2_candidate.md`
- candidate blob SHA: `fdf4b1217885497d478e17647598e4713fcca95b`
- lock commit: `94af90f8472262da74dda7b02eb6c362348fe207`
- candidate固定後修正: `0件`
- candidate固定後にのみ電気技術者試験センター公式標準解答を照合した。

## 一次15答案要素

### R7一次「機械」問2

candidate / 公式:
- `(1) ハ` = `3V1^2`
- `(2) ヌ` = `s > 0`
- `(3) ル` = 停動
- `(4) チ` = `r2'`
- `(5) ワ` = 比例する

判定: `5 / 5 PASS`

### R6一次「機械」問2

candidate / 公式:
- `(1) ヌ` = 誘導
- `(2) ニ` = `s < 0`
- `(3) ヲ` = ブラシ
- `(4) カ` = Insulated Gate Bipolar Transistor
- `(5) チ` = `V1/f1`

判定: `5 / 5 PASS`

### H25一次「機械」問3

candidate / 公式:
- `(1) ヨ` = 回転角速度
- `(2) イ` = 過負荷耐量
- `(3) ニ` = 定常状態
- `(4) ル` = トルク成分
- `(5) ヘ` = 滑り角周波数の積分値

判定: `5 / 5 PASS`

一次集計: `15 / 15 PASS`。

## 二次12答案要素

### R7二次「機械・制御」問2

| 答案要素 | candidate | 公式標準解答 | 判定 |
|---|---:|---:|---|
| 滑り | `3.50 %` | `3.5 %` | `PASS` |
| 定格トルク | `181.4 N·m` | `181 N·m` | `PASS` |
| 二次銅損 | `798 W` | `798 W` | `PASS` |
| 固定損 | `1.55 kW` | `1550 W` | `PASS` |
| 半負荷時回転速度 | `1179 min^-1` | 計算値 `1179` → 表示 `1180 min^-1` | `PASS_WITH_ROUNDING_NOTE` |
| 半負荷時出力 | `11.2 kW` | `11200 W` | `PASS` |

半負荷時回転速度は `N2=1200(1-0.0175)=1179 min^-1` まで一致し、公式標準解答は最終表示を `1180 min^-1` と丸めている。一般式・解法の不一致ではないためcandidateを変更せず `PASS_WITH_ROUNDING_NOTE` とする。

判定: `6 / 6 PASS`。

### R4二次「機械・制御」問3

| 答案要素 | candidate | 公式標準解答 | 判定 |
|---|---:|---:|---|
| 平均直流電圧 | `297.1 V` | `297 V` | `PASS` |
| 直流電流 | `33.66 A` | `33.7 A` | `PASS` |
| 交流基本波電流 | `26.24 A` | `26.2 A` | `PASS` |
| 相電圧基本波波高値 | `133.7 V` | `134 V` | `PASS` |
| 線間基本波実効値 | `163.7 V` | `164 V` | `PASS` |
| 25 Hz信号 | 周波数 `25 Hz`、振幅 `0.45` | 周波数1/2、振幅1/2 | `PASS` |

数値5項目はいずれもcandidateの未丸め値を公式指定桁へ丸めると公式標準解答に一致する。平均直流電圧についてcandidateは `3√2/π` を用い、公式は係数 `1.35` を用いているが、同一の三相ダイオードブリッジ平均値式の数値表現差であり最終桁は一致する。波形は公式が位相を拘束していないため、candidateの零位相例は許容される。

判定: `6 / 6 PASS`。

二次集計: `12 / 12 PASS`。

## 公式資料

- R7一次「機械」: `https://www.shiken.or.jp/chief/upload/20250831_ch_second_a03.pdf`
- R6一次「機械」: `https://www.shiken.or.jp/chief/upload/20240818_ch_second_a03.pdf`
- H25一次「機械」: `https://www.shiken.or.jp/chief/upload/20130831_ch_second_a03.pdf`
- R7二次「機械・制御」: `https://www.shiken.or.jp/chief/upload/20251116_ch_second_a02.pdf`
- R4二次「機械・制御」: `https://www.shiken.or.jp/chief/upload/20221113_ch_second_a02.pdf`

## 過去問対応品質ゲート

- 固定公式過去問: `5 / 5 PASS`
- 一次答案要素: `15 / 15 PASS`
- 二次答案要素: `12 / 12 PASS`
- 合計答案要素: `27 / 27 PASS`
- candidate固定後修正: `0件`
- 教材欠落による補完: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 既存解説・練習・PowerPoint再生成: `0件`
- SPEC固定7項目: `7 / 7 connected`
- Topic 35以降の先取り: `0件`
- exact blocker: `0件`

## Topic 21 固定境界

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は既診断どおり、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 最終判定

Topic 34「コンプレッサ・ポンプ・ファンの負荷特性」は、EXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPoint、clean blind v2独立再解答まで全工程を通過したため `PASS / COMPLETED` とする。

次工程: Topic 35「ATC① 軌道回路の回路解析」の制作前EXAM_ALIGNMENT。
