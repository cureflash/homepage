# 11 300系② PWMコンバータ — 解説画像PowerPoint QA

更新日: 2026-09-16

## 対象
- `11_300series_pwm_converter_images.pptx`
- 16:9
- 4スライド
- 引用画像: なし（PowerPoint内の教材用模式図・数式のみ）

## スライド構成
1. PWM波形 — 信号波・三角搬送波・比較結果（H22一次、R4一次）
2. 基本波・高調波 — 方形波・基本波、実効値二乗和（R5二次）
3. 変調条件―基本波電圧 — `VLL1/Ed=√3k/(2√2)`（H22一次、H24二次、R1二次）
4. 入力電流波形 — `iL=i1+iH`, `ic=-iH`, `is=i1`（R5二次）

## SPEC指定可視化
- [x] PWM波形: `f1=50 Hz`, `fc=1000 Hz`, carrier正規化振幅 `1`, `k=0.80`（教材用）
- [x] 基本波・高調波: `IL=1 pu`, `I1≈0.900 pu`, `IH≈0.435 pu`
- [x] 変調条件―基本波電圧: `VLL1/Ed=√3k/(2√2)`, `0≤k≤1`; `k=0,0.5,1.0` の代表点を表示
- [x] 入力電流波形: 正規化した `iL=i1+iH`, `ic=-iH`, `is=i1`
- 判定: `4 / 4 PASS`

## 過去問対応
固定EXAM_ALIGNMENTは変更なし（一次2問＋二次3問、計5問・27答案要素）。
- R5 二次 機械・制御 問3: slides 2, 4
- R4 一次 機械 問4: slide 1
- R1 二次 機械・制御 問3 (1)〜(3): slide 3
- H24 二次 機械・制御 問3: slide 3
- H22 一次 機械 問3: slides 1, 3
- 固定過去問変更: `0件`
- 固定5問・27答案要素への接続: 維持

## 表示・構造QA
- LibreOfficeで全4スライドをレンダリング
- Visual QA: `4 / 4 PASS`
- overlap / clipping / broken glyph: `0件`
- `slides_test.py` overflow検査: `PASS / 0件`
- PowerPoint ZIP/XML整合性 (`unzip -t`): `PASS`
- GitHub正本 binary size: `10,375 bytes`
- Git blob SHA-1: `8688e3b87936a08c80ae5cdbf19dbc6d1033fb44`
- SHA-256: `26158481860cac4adb3f870aeaf19d2100a4418b0e6c60a0032b1c114286b4aa`

## 固定範囲境界
- Topic 12〜13先取り: `0件`
- 未確認300系実車値追加: `0件`
- SPEC外仕様追加: `0件`
- 図中の周波数・変調率・pu値は教材用仮定値／正規化値として明記

## 判定
`PASS`
