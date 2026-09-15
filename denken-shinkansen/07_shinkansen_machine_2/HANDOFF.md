# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-15

## 現在地
Topic 01〜07は最終QAまで `PASS / completed`。

完成数: `7 / 22`

active topic: `08 VVVFインバータで三相交流を作る`

current status: `topic_08_source_progress_synced`

## Topic 08 固定EXAM_ALIGNMENT
- R07 一次 機械 問4: (4),(5)
- H22 一次 機械 問3: (1)〜(3)
- H19 一次 機械 問4: (1),(2)
- R04 二次 機械・制御 問3: (4),(5)
- H28 二次 機械・制御 問3: (1)〜(4)

一次3問＋二次記述2問、計5問・13小問。制作前独立検証・完成後独立再解答はいずれも `13 / 13 PASS`。

固定範囲は `SPEC.md` 第8章どおり、三相インバータ、6スイッチ構成、PWM、キャリア、基本波、線間電圧、出力周波数、高調波、スイッチング周波数、および計算プログラムのスイッチング波形・相電圧/線間電圧・基本波・FFT/高調波成分に限定する。

固定範囲外:
- V/f制御
- ベクトル制御
- デッドタイム設計
- 素子選定
- 整流器設計
- 負荷電流経路の詳細
- H28二次問3(5)の直流入力電流

件数合わせによる仕様外論点追加は0件。未確認の300系実車インバータ電圧・キャリア周波数・スイッチング周波数等も真値化しない。

## Topic 08 完成済み成果物
- source: `topics/08_vvvf_inverter_three_phase/08_vvvf_inverter_three_phase.md`
- 解説PDF: `topics/08_vvvf_inverter_three_phase/08_vvvf_inverter_three_phase_explanation.pdf`
- 練習source: `topics/08_vvvf_inverter_three_phase/08_vvvf_inverter_three_phase_practice.md`
- 練習PDF: `topics/08_vvvf_inverter_three_phase/08_vvvf_inverter_three_phase_practice.pdf`
- PowerPoint: `topics/08_vvvf_inverter_three_phase/08_vvvf_inverter_three_phase_images.pptx`
- 独立再解答: `topics/08_vvvf_inverter_three_phase/08_vvvf_inverter_three_phase_independent_reanswer.md`
- 最終QA記録: `topics/08_vvvf_inverter_three_phase/08_vvvf_inverter_three_phase_final_qa.md`

## Topic 08 計算プログラム・指定波形/FFT完了
成果物:
- `topics/08_vvvf_inverter_three_phase/08_vvvf_inverter_three_phase_calc.py`
- `topics/08_vvvf_inverter_three_phase/08_switching_waveforms.svg`
- `topics/08_vvvf_inverter_three_phase/08_phase_voltage_waveforms.svg`
- `topics/08_vvvf_inverter_three_phase/08_line_voltage_waveforms.svg`
- `topics/08_vvvf_inverter_three_phase/08_fundamental_waveform.svg`
- `topics/08_vvvf_inverter_three_phase/08_fft_harmonics.svg`
- `topics/08_vvvf_inverter_three_phase/08_vvvf_inverter_three_phase_calculation_qa.md`

QA:
- スイッチ状態: `{-1,+1}` のみ
- 相端電圧: `±300 V` のみ
- 線間電圧: `-600 / 0 / +600 V` のみ
- `v_uv=v_uO-v_vO`: 全4096点一致
- 相電圧基本波実効値: FFT `190.182 V` / 理論 `190.919 V`
- 線間電圧基本波実効値: FFT `330.229 V` / 理論 `330.681 V`
- 線間基本波理論式との差: `0.137 %`
- 3・6・9次線間高調波: 基本波比 `0.2534 % / 0.1155 % / 0.0823 %`
- 独立NumPy FFTとの全ビン比較: 最大絶対差 `3.47×10^-8`
- SVG XML parse: `5 / 5 PASS`
- ローカルレンダリング・表示QA: `5 / 5 PASS`
- 固定5問・13小問の変更: 0件
- 固定範囲外論点の追加: 0件
- 未確認300系実車値の追加: 0件

## Topic 08 完成後独立再解答
固定5問・13小問を完成教材だけで再導出し、公式解答・標準解答と `13 / 13 PASS`。

- R07一次: PWM、スイッチング周波数
- H22一次: 三角波、変調率、`√3 k E_d/(2√2)`
- H19一次: 基本波、直流電圧可変不要
- R04二次: `134 V`、`164 V`
- H28二次: `Q5/Q6`、相/線間波形、3n次高調波、`√(2/3)E_d`
- 教材外知識補完: 0件
- 固定範囲外論点追加: 0件
- 未確認300系実車値追加: 0件

## Topic 08 前回最終QA
`08_vvvf_inverter_three_phase_final_qa.md` の総合判定は `NEEDS_REVISION / IN_PROGRESS`。

技術内容、固定一次3問＋二次記述2問・13小問、独立再解答 `13 / 13 PASS`、必須成果物、PDF/PPTX表示QA、SPEC指定計算/波形QA、仕様境界はPASS。blockerは進捗記録3箇所のみだった。

## 今回の進捗記録同期
前回QAで指摘された3箇所を実成果物へ同期済み。

1. `08_vvvf_inverter_three_phase.md` 冒頭の状態欄
2. 同source末尾の `## 次工程`
3. `08_vvvf_inverter_three_phase_practice.md` 末尾の `## 次工程`

技術本文、固定EXAM_ALIGNMENT、数式、問題/正答、PDF/PPTX、計算プログラム・波形内容は変更していない。

## 次に行うこと
Topic 08の最終QAを再実施する。進捗記録整合を含む全品質ゲートがPASSした場合のみ `completed` とする。