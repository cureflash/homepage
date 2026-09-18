# Topic 20 解説画像PowerPoint QA

実施日: 2026-09-19

対象:
- `20_shinkansen_math_model_images.pptx`

## 判定

`PASS / POWERPOINT_COMPLETE`

## 構成QA

- 16:9: `PASS`
- スライド数: `5`
- SPEC固定統合範囲: `7 / 7 covered`
  - 牽引力・走行抵抗
  - 運動方程式
  - 数値積分
  - 速度・位置
  - 消費電力・回生電力
  - ラプラス領域の簡略制御モデル
  - PWM波形・FFT
- 教材で必要な説明6項目の可視化: `6 / 6 PASS`
- 接続確認した第二種公式過去問5問との対応: `5 / 5 PASS`
- 統合新幹線モデル自体を直接要求する確認済み第二種過去問: `0問`
- 接続5問の直接対応品質ゲート件数への水増し: `0件`
- 第一種・第三種問題の追加: `0件`

## 数値整合QA

### Slide 2 力→速度→位置→仕事

- `Fnet=10000 N`
- `a=2 m/s^2`
- `v1=8 m/s`
- `Δx=12 m`
- `Wtraction=180 kJ`
- `ΔK=120 kJ`
- `Wresistance=60 kJ`
- 台形則による電力積分 `180 kJ`
- `FΔx = ∫Pdt = ΔK + Wresistance`: `PASS`

### Slide 3 一次運動モデル

- `G(s)=1/(6s+2)`: `PASS`
- `τ=3 s`: `PASS`
- 定常速度 `6 m/s`: `PASS`
- 解析解 `v(3)=3.792723... m/s`: `PASS`
- Euler `Δt=1 s` の `v3=4.222222... m/s`: `PASS`
- 差 `0.429499... m/s`: `PASS`

### Slide 4 回生符号

- 速度列 `12, 10, 8, 6 m/s`: `PASS`
- `Δx=27 m`: `PASS`
- `E_signed=-162 kJ`: `PASS`
- `ΔK=-162 kJ`: `PASS`
- 正表示する機械側回収量 `162 kJ`: `PASS`
- 電気側の実回収電力量とは区別: `PASS`

### Slide 5 サンプリング・FFT

- `f_max=30 Hz`: `PASS`
- `f_s=50 Hz` は `f_s>2f_max` を満たさない: `PASS`
- `f_s=80 Hz, N=8`: `PASS`
- `Δf=10 Hz`: `PASS`
- 10 Hz→`k=1`, 30 Hz→`k=3`: `PASS`

## 表示QA

- 全5スライド再レンダリング: `5 / 5 PASS`
- 文字切れ・重なり・文字化け: `0件`
- shape geometry overflow: `0件`
- `slides_test.py`: `PASS`
- PPTX ZIP整合性: `PASS`
- PPTX XML / rels parse: `PASS`

## 仕様境界

- Topic 05〜19で未採用だった数学理論・算法の追加: `0件`
- 最適制御理論・KKT条件・一般的数値最適化の追加: `0件`
- 電力潮流詳細アルゴリズムの追加: `0件`
- 陰的Euler法・多段法・適応刻み等の追加数値ODE手法: `0件`
- FFT実装詳細・ADC量子化・変換回路方式の追加: `0件`
- PWM制御方式・スイッチング戦略の一般論追加: `0件`
- 詳細な車両工学解説の追加: `0件`
- 未確認実車値依存: `0件`

## ファイル整合

- SHA-256: `8932bb5f1553cf6f7e0c2dd5e8a193e1a8c6761f23558e715a5d93e90b691254`
- file size: `17972 bytes`

## 次工程

固定済みEXAM_ALIGNMENT、制作前独立検証、解説本文・解説PDF・練習問題source・練習PDF・PowerPointを変更せず、Topic 20の完成後独立検証を行う。