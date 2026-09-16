# 12 300系③ VVVFインバータと誘導機制御 — 解説画像PowerPoint QA

更新日: 2026-09-17

## 対象
- `12_300series_vvvf_inverter_induction_control_images.pptx`
- 16:9
- 4スライド
- 引用画像: なし（PowerPoint内の教材用模式図・数式のみ）

## スライド構成
1. 周波数―同期速度 — `n_s=120f/P`、すべり（R2一次、R4一次）
2. 周波数―電圧 — V/f一定、電圧上限到達後はV一定（R6一次、H30二次、H26一次）
3. 回転速度―トルク — 定トルク域から定出力近似へ、電圧制限・電流制限（R4一次、H26一次）
4. 回転速度―出力 — `P=ωT`、速度比例から基底出力一定へ（H26一次）

## SPEC指定可視化
- [x] 周波数―同期速度: `P=4`、`0〜75 Hz`、`n_s=30f [rpm]`
- [x] 周波数―電圧: `f_b=50 Hz`、`V_max=400 V`、`V=8f` → `400 V`
- [x] 回転速度―トルク: `n_b=1440 rpm`、`T_b=900 N·m`、基底速度後 `T=900×1440/n`
- [x] 回転速度―出力: `P_b=135.7 kW`、基底速度まで速度比例、以後一定
- 上記数値はすべて教材用仮定値であり、300系実車値ではない。
- 判定: `4 / 4 PASS`

## 過去問対応
固定EXAM_ALIGNMENTは変更なし（一次4問＋二次1問、計5問・13答案要素）。
- R6 一次 機械 問2 (1),(5): slide 2
- R4 一次 機械 問2 (3)〜(5): slides 1, 3
- R2 一次 機械 問3 (1),(4),(5): slide 1
- H30 二次 機械・制御 問1 (4): slide 2
- H26 一次 機械 問5 (3)〜(5): slides 2〜4
- 固定5問・13答案要素への接続: 維持

## 表示・構造QA
- LibreOfficeレンダリング: `4 / 4 PASS`
- Visual QA: `4 / 4 PASS`
- overlap / clipping / broken glyph: `0件`
- `slides_test.py` overflow検査: `PASS / 0件`
- PowerPoint ZIP/XML整合性 (`unzip -t`): `PASS`
- GitHub正本 binary size: `5,591 bytes`
- Git blob SHA-1: `f3921af2672b3b0b963e73d839690adec24d8e41`
- SHA-256: `f865eec36a8152a7ed7e2d0d67db5b1fee1b32028180b2da73691c8e6bbf2811`

## 固定範囲境界
- Topic 13の回生・四象限運転・回生エネルギー先取り: `0件`
- ベクトル制御・センサレス制御等のSPEC外制御方式追加: `0件`
- Topic 11のPWMコンバータ側論点再展開: `0件`
- 未確認300系実車値追加: `0件`
- 図中数値は教材用仮定値として明示: `PASS`

## 判定
`PASS`
