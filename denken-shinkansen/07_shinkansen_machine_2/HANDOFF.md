# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-15

## 現在地
Topic 01〜08は最終QAまで `PASS / completed`。

完成数: `8 / 22`

active topic: `09 誘導電動機を自由に操るには？`

current status: `topic_08_completed`

## Topic 08 最終結果
固定EXAM_ALIGNMENT:
- R07 一次 機械 問4: (4),(5)
- H22 一次 機械 問3: (1)〜(3)
- H19 一次 機械 問4: (1),(2)
- R04 二次 機械・制御 問3: (4),(5)
- H28 二次 機械・制御 問3: (1)〜(4)

一次3問＋二次記述2問、計5問・13小問。制作前独立検証・完成後独立再解答はいずれも `13 / 13 PASS`。

最終QA: `PASS / completed`。

確認済み:
- 必須成果物: PASS
- 練習問題: 一次10問＋二次記述5問、数値QA `15 / 15 PASS`
- 解説PDF・練習PDF・PowerPoint表示QA: PASS
- SPEC指定の計算プログラム・スイッチング波形・相/線間電圧・基本波・FFT/高調波: PASS
- source進捗記録整合: PASS
- 教材外知識補完: 0件
- 固定範囲外論点の追加: 0件
- 未確認300系実車値の追加: 0件

## Topic 08 成果物
- source: `topics/08_vvvf_inverter_three_phase/08_vvvf_inverter_three_phase.md`
- 解説PDF: `topics/08_vvvf_inverter_three_phase/08_vvvf_inverter_three_phase_explanation.pdf`
- 練習source: `topics/08_vvvf_inverter_three_phase/08_vvvf_inverter_three_phase_practice.md`
- 練習PDF: `topics/08_vvvf_inverter_three_phase/08_vvvf_inverter_three_phase_practice.pdf`
- PowerPoint: `topics/08_vvvf_inverter_three_phase/08_vvvf_inverter_three_phase_images.pptx`
- 計算プログラム: `topics/08_vvvf_inverter_three_phase/08_vvvf_inverter_three_phase_calc.py`
- 指定波形/FFT: `08_switching_waveforms.svg`、`08_phase_voltage_waveforms.svg`、`08_line_voltage_waveforms.svg`、`08_fundamental_waveform.svg`、`08_fft_harmonics.svg`
- 計算/波形QA: `topics/08_vvvf_inverter_three_phase/08_vvvf_inverter_three_phase_calculation_qa.md`
- 独立再解答: `topics/08_vvvf_inverter_three_phase/08_vvvf_inverter_three_phase_independent_reanswer.md`
- 最終QA: `topics/08_vvvf_inverter_three_phase/08_vvvf_inverter_three_phase_final_qa.md`

## 次に行うこと
Topic 09「誘導電動機を自由に操るには？」の制作前EXAM_ALIGNMENTを行う。`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`SPEC.md` 第9章の固定範囲だけを対象とし、一次・二次を含む公式過去問を直近年度から確認する。件数合わせで範囲外論点を追加しない。