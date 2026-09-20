# Topic 33 解説source QA

更新日: 2026-09-20

判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

## reconcile

最新main、上位仕様、系列SPEC、`STATUS.md` / `HANDOFF.md`、固定EXAM_ALIGNMENT、直近worker成果をreconcileした。先行workerがTopic 33制作前EXAM_ALIGNMENTを完了したため重複せず、固定5問・22答案要素を変更せず解説sourceへ接続した。

## 品質ゲート

- 固定公式過去問5問: `22 / 22 connected`
- R8 一次「機械」問6: `5 / 5 connected`
- R3 一次「機械」問7: `5 / 5 connected`
- R1 一次「機械」問7 ヒートポンプ行: `2 / 2 connected`
- H30 一次「機械」問4: `5 / 5 connected`
- H27 一次「機械」問4: `5 / 5 connected`
- SPEC固定7項目: `7 / 7 connected`
- 3段階例題: `3 / 3 PASS`
- 二次: `対象外（公式「機械・制御」試験範囲に電熱なし）`
- 固定EXAM_ALIGNMENT変更: `0件`
- 未確認実車値の真値化: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## 式・単位QA

- `Q=Pt`: `W·s=J` — `PASS`
- `Q=I²Rt`: `A²·Ω·s=J` — `PASS`
- `Q=mcΔT`: `kg×J/(kg·K)×K=J` — `PASS`
- 伝導 `Qdot=kAΔT/L`: `W/(m·K)×m²×K/m=W` — `PASS`
- 対流 `Qdot=hAΔT`: `W/(m²·K)×m²×K=W` — `PASS`
- 放射 `εσS_1F_12(T_1^4-T_2^4)`: `W` — `PASS`
- `COP_C=Q_L/W`, `COP_H=Q_H/W`: 無次元比 — `PASS`
- `COP_H=1+Q_L/W`: H27固定過去問と一致 — `PASS`
- `η=Q_use/(Pt)`: 無次元、COPと区別 — `PASS`

## 固定過去問接続QA

### R8 一次「機械」問6

- 1時間の抵抗発熱 `3600RI²`: §2 — `PASS`
- 壁1 m²の伝導熱流 `10 W`: §4.1 — `PASS`
- 水の最終温度 `79.5℃`: §3 — `PASS`
- 放射 `εσS_1F_12(T_1^4-T_2^4)`: §4.3 — `PASS`
- Stefan-Boltzmann定数: §11.3 — `PASS`

### R3 一次「機械」問7

- ジュール熱: §2 — `PASS`
- 熱平衡: §5 — `PASS`
- 熱伝導: §4.1 — `PASS`
- 対流熱伝達: §4.2 — `PASS`
- 放射伝熱: §4.3 — `PASS`

### R1 一次「機械」問7

- 電動機による圧縮機駆動: §8, §11.2 — `PASS`
- 凝縮器側から熱を受け取る: §8, §11.2 — `PASS`

### H30 一次「機械」問4

- 位相制御: §11.1 — `PASS`
- 高調波: §11.1 — `PASS`
- 伝導: §4, §11.1 — `PASS`
- 赤外放射: §4.3, §11.1 — `PASS`
- 対流熱流束は温度差に比例: §4.2, §11.1 — `PASS`

### H27 一次「機械」問4

- 圧縮機: §8 — `PASS`
- 膨張弁: §8 — `PASS`
- 逆カルノーサイクル: §8 — `PASS`
- 暖房COP `1+Q_L/W`: §8 — `PASS`
- HFC: §8の過去問固有注記 — `PASS`

## 例題再計算

### 例題1

`1200 W×480 s=576000 J`

`Q_use=0.85×576000=489600 J`

`ΔT=489600/(5×4186)=23.392... K`

教材値 `23.39 K` — `PASS`

### 例題2

`Qdot_trans=1.8×120×15=3240 W=3.24 kW`

`Qdot_vent=0.18×1000×15=2700 W=2.70 kW`

`Qdot_load=3.24+2.70+4.50=10.44 kW`

`P=10.44/3.2=3.2625 kW`

教材値 `3.26 kW` — `PASS`

### 例題3

`Qdot_H=18-6=12 kW`

`Wdot=12/4=3 kW`

`Qdot_L=12-3=9 kW`

`COP_C=9/3=3`, `COP_H=COP_C+1=4`

熱収支閉合 — `PASS`

## 境界QA

- R1問7はヒートポンプ行のみ固定ゲート: `PASS`
- H27問4のHFCを現行実車冷媒へ一般化しない: `PASS`
- 伝導・対流・放射を伝熱工学の独立テーマへ拡張しない: `PASS`
- 潜熱・湿り空気線図・冷媒物性設計を先取りしない: `PASS`
- 外気負荷・車内負荷の例題値は実車値でなく仮定値と明記: `PASS`
- 実車の空調能力・COP・消費電力・換気量・熱貫流率・乗客発熱・機器発熱を真値化しない: `PASS`
- COPと電熱器効率を混同しない: `PASS`

## 次工程

解説sourceから解説PDFを生成し、固定5問・22答案要素、SPEC固定7項目、3段階例題、数式・単位、ページ端、置換文字をPDF QAする。