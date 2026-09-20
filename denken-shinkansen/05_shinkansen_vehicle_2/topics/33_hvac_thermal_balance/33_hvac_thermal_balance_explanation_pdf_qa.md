# Topic 33 解説PDF QA

更新日: 2026-09-20

判定: `PASS / EXPLANATION_PDF_COMPLETE`

## reconcile

最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md` / `HANDOFF.md`、固定EXAM_ALIGNMENT、先行workerの解説source/source QAをreconcileした。先行workerがTopic 33制作前EXAM_ALIGNMENTと解説sourceを完了していたため重複せず、固定5問・22答案要素を変更せずPDFへ接続した。

## PDF QA

- canonical: `33_hvac_thermal_balance_explanation.pdf`
- A4縦: `7頁`
- PDFium render: `7 / 7 PASS`
- Poppler render: `7 / 7 PASS`
- 空白頁: `0件`
- ページ端切れ: `0件`
- 重大な重なり: `0件`
- 文字化け・欠字: `0件`（canonical rasterを両rendererで確認）
- 置換文字 U+FFFD: `0件`
- 初回renderでCID font非対応の下付き数字・近似記号を検出し、canonicalでは `S1/F12/T1/T2` と `= 約` の安全表記へ置換済み
- 固定EXAM_ALIGNMENT変更: `0件`
- 未確認実車値の真値化: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## 固定過去問ゲート

- 固定5問・22答案要素: `22 / 22 PASS`
- R8 一次「機械」問6: `5 / 5 PASS`
  - 1時間の抵抗発熱 `3600RI²`
  - 壁1 m²の伝導熱流 `10 W`
  - 水の最終温度 `79.5℃`
  - 放射式 `εσS1F12(T1^4-T2^4)`
  - Stefan-Boltzmann定数
- R3 一次「機械」問7: `5 / 5 PASS`
  - ジュール熱 / 熱平衡 / 熱伝導 / 対流熱伝達 / 放射伝熱
- R1 一次「機械」問7 ヒートポンプ行: `2 / 2 PASS`
  - 電動機による圧縮機駆動
  - 凝縮器側から熱を受け取る
- H30 一次「機械」問4: `5 / 5 PASS`
  - 位相制御 / 高調波 / 伝導 / 赤外放射 / 対流熱流束と温度差
- H27 一次「機械」問4: `5 / 5 PASS`
  - 圧縮機 / 膨張弁 / 逆カルノーサイクル / 暖房COP `1+Q_L/W` / HFC過去問固有注記
- 二次: `対象外（公式「機械・制御」試験範囲に電熱なし）`

## SPEC固定7項目

- 熱量: `PASS`
- 熱収支: `PASS`
- COP: `PASS`
- 消費電力: `PASS`
- 外気負荷: `PASS`
- 車内負荷: `PASS`
- 効率: `PASS`

`7 / 7 PASS`。

## 3段階例題再計算

### 基礎

`1200×480=576000 J`

`0.85×576000=489600 J`

`489600/(5×4186)=23.392... K`

PDF値 `23.39 K` — `PASS`

### 標準

`1.8×120×15=3.24 kW`

`0.18×1000×15=2.70 kW`

`3.24+2.70+4.50=10.44 kW`

`10.44/3.2=3.2625 kW` → PDF値 `約3.26 kW` — `PASS`

### 発展

`18-6=12 kW`

`12/4=3 kW`

`12-3=9 kW`

`COP_C=9/3=3`, `COP_H=COP_C+1=4` — `PASS`

`3 / 3 PASS`。

## 境界QA

- R1問7はヒートポンプ行のみ固定: `PASS`
- H27問4のHFCを現行実車冷媒へ一般化しない: `PASS`
- 潜熱・湿り空気線図・冷媒物性設計を先取りしない: `PASS`
- 仮定例の `U`、面積、換気量、車内負荷、COPを実車値として扱わない: `PASS`
- COPと電熱器効率を混同しない: `PASS`
- Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` は過去問固有丸め差の既診断を維持し、一般式 `P=Tω`, `ω=2πN/60` を変更しない: `PASS`

## 次工程

Topic 33練習source。固定5問・22答案要素、SPEC固定7項目へ接続し、一次試験型を中心に作成する。二次は公式範囲外のため件数合わせで追加しない。
