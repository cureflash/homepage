# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-15

## 現在地

Topic 01 `0系の主変圧器を等価回路で解剖する`、Topic 02 `0系の直流主電動機はどんな特性だった？`、Topic 03 `0系を210km/hまで加速させる`、Topic 04 `200系のサイリスタ制御を計算する`、Topic 05 `300系の誘導電動機を等価回路で解く`、Topic 06 `誘導電動機の最大トルクはどこで出る？`、Topic 07 `300系のPWMコンバータは何をしている？` は最終QAまでPASSし、`completed`。

完成数: `7 / 22`

active topic: `08 VVVFインバータで三相交流を作る`

current status: `topic_08_explanation_source_complete`

## Topic 07 制作前EXAM_ALIGNMENT

固定EXAM_ALIGNMENT:
- H22 一次 機械 問3: (1)〜(5)
- H27 一次 機械 問3: (1)〜(3)
- H24 二次 機械・制御 問3: (1)〜(4)
- R01 二次 機械・制御 問3: (1)〜(3)
- R05 二次 機械・制御 問3: (1),(2)

一次2問＋二次記述3問、計5問・17小問。公式問題・公式解答／標準解答との制作前独立検証は `17 / 17 PASS`。

固定範囲外として次を除外した。
- H22一次問3のMPPTアルゴリズム詳細
- H27一次問3(4),(5)の蓄電装置種類・設置条件
- R01二次問3(4)〜(6)の昇圧コンバータ連続電流・リプル
- R05二次問3(3)〜(5)の能動フィルタ補償電流設計

件数合わせによる仕様外論点の追加は0件。未確認の300系実車回路定数・スイッチング周波数・DCリンク電圧等も真値化していない。

Topic 07 source:
`topics/07_300series_pwm_converter/07_300series_pwm_converter.md`

## Topic 07 固定範囲

`SPEC.md` 第7章どおり、次だけを扱う。

- PWMコンバータ
- スイッチング
- DCリンク電圧
- 交流側電流
- 力率制御
- 回生
- 高調波
- リアクトル
- 交流電圧
- PWM電圧
- 交流側電流波形
- DCリンク電圧波形

過去問から逆算して教材で欠落不可とした要点は、正弦波PWMと変調率、PWM基本波電圧とDCリンク電圧、系統連系リアクトルのフェーザ式、力率1と有効・無効電流、交流基本波位相による有効電力方向、回生、DCリンク電圧条件、高調波の発生・影響である。

Topic 08以降のVVVFインバータ詳細、ベクトル制御、電流制御器設計等は追加しない。

## Topic 07 解説本文完了

解説本文＋3段階例題をsource Markdownへ反映した。

- 固定5問・17小問を本文対応表へ全件マッピング
- 教材で欠落不可の10項目も全件マッピング
- 正弦波PWM、三角波搬送波、変調率
- H22型の `√3·kE_d/(2√2)`
- H24・R01型の `V̇_v=V̇_L+jXİ` と `E_d≥√2V_v`
- 力率1、`I_P/I_Q`、`√((V_L-XI_Q)^2+(XI_P)^2)`
- 交流基本波位相と有効電力方向、逆変換、回生失効
- 高調波の発生源と機器影響
- 3段階例題: 基礎／本試験標準／複合・ひっかけ

固定EXAM_ALIGNMENTは変更していない。MPPT、電力貯蔵装置設計、昇圧コンバータ設計、能動フィルタ設計、Topic 08以降の論点、未確認300系実車値の追加は0件。

## Topic 07 解説PDF完了

解説PDF:
`topics/07_300series_pwm_converter/07_300series_pwm_converter_explanation.pdf`

- A4縦4ページ
- 200 dpi全4ページ表示QA: `4 / 4 PASS`
- 文字抽出QA: PASS
- source Markdownの解説本文＋3段階例題を同期
- 固定5問・17小問への接続を維持
- 固定範囲外論点による件数合わせ: 0件
- 未確認300系実車値の追加: 0件

## Topic 07 練習PDF完了

練習PDF:
`topics/07_300series_pwm_converter/07_300series_pwm_converter_practice.pdf`

- A4縦6ページ
- 一次試験型10問＋二次記述5問、計15問
- 全15問に解答・完全解説を付与
- 200 dpi全6ページ表示QA: `6 / 6 PASS`
- 文字抽出QA: PASS
- 数値・正答整合QA: `15 / 15 PASS`
- 固定5問・17小問への接続を維持
- 教材数値は仮定値として明示し、未確認300系実車値の追加: 0件
- MPPT、蓄電装置設計、昇圧コンバータ設計、能動フィルタ設計等の固定範囲外論点追加: 0件

## Topic 07 解説画像PowerPoint完了

PowerPoint:
`topics/07_300series_pwm_converter/07_300series_pwm_converter_images.pptx`

- 16:9・4スライド
- PWMスイッチング／変調率、DCリンクと交流基本波電圧、リアクトルのフェーザ式、力率1・`I_P/I_Q`、回生・高調波、固定過去問対応を可視化
- 全4スライド表示QA: `4 / 4 PASS`
- overflow検査: PASS
- ZIP整合性: PASS
- 固定EXAM_ALIGNMENTは一次2問＋二次記述3問、計5問・17小問から変更なし
- 固定範囲外論点による件数合わせ: 0件
- 未確認300系実車値の追加: 0件

## Topic 07 SPEC指定4波形完了

成果物:
- `topics/07_300series_pwm_converter/07_pwm_converter_waveforms.py`
- `topics/07_300series_pwm_converter/07_ac_voltage_waveform.svg`
- `topics/07_300series_pwm_converter/07_pwm_voltage_waveform.svg`
- `topics/07_300series_pwm_converter/07_ac_current_waveform.svg`
- `topics/07_300series_pwm_converter/07_dc_link_voltage_waveform.svg`
- `topics/07_300series_pwm_converter/07_pwm_converter_waveforms_qa.md`

確認:
- 交流電圧／PWM電圧／交流側電流／DCリンク電圧をSPECどおり全4件独立成果物化
- 数値・論理QA: PASS
- SVG XML整合性: `4 / 4 PASS`
- 表示QA: `4 / 4 PASS`
- 力率1概念例で交流電圧と交流側電流の同相性を確認
- PWM図の変調率0.80・搬送波比20、DCリンク図の2%リプルは描画用仮定値と明示
- 固定5問・17小問への接続を維持
- 未確認300系実車値の追加: 0件
- MPPT、蓄電装置設計、昇圧コンバータ設計、能動フィルタ設計、Topic 08以降の固定範囲外論点追加: 0件

## Topic 07 完成後独立再解答完了

成果物:
`topics/07_300series_pwm_converter/07_300series_pwm_converter_independent_reanswer.md`

- H22 一次 機械 問3: `5 / 5 PASS`
- H27 一次 機械 問3: `3 / 3 PASS`
- H24 二次 機械・制御 問3: `4 / 4 PASS`
- R01 二次 機械・制御 問3: `3 / 3 PASS`
- R05 二次 機械・制御 問3: `2 / 2 PASS`
- 合計: `17 / 17 PASS`
- 完成教材だけで公式選択、途中式、記述理由を再構成
- 教材外知識による補完: 0件
- 固定範囲外論点の追加: 0件
- 未確認300系実車値の追加: 0件

## Topic 07 最終QA完了

成果物:
`topics/07_300series_pwm_converter/07_300series_pwm_converter_final_qa.md`

判定: `PASS / completed`。

- 必須成果物: PASS
- 固定EXAM_ALIGNMENT 一次2問＋二次記述3問、計5問・17小問: PASS
- 完成後独立再解答: `17 / 17 PASS`
- SPEC指定4波形QA: PASS
- source Markdown進捗整合: PASS
- 固定範囲外論点の追加: 0件
- 未確認300系実車値の真値化: 0件

前回 `NEEDS_REVISION` の唯一の理由だったsource Markdown旧進捗記録2箇所は解消済み。教材本文・固定EXAM_ALIGNMENT・数式・例題・成果物は変更せず、進捗記録のみ現在地へ同期した。

## Topic 08 制作前EXAM_ALIGNMENT完了

source:
`topics/08_vvvf_inverter_three_phase/08_vvvf_inverter_three_phase.md`

固定EXAM_ALIGNMENT:
- R07 一次 機械 問4: (4),(5)
- H22 一次 機械 問3: (1)〜(3)
- H19 一次 機械 問4: (1),(2)
- R04 二次 機械・制御 問3: (4),(5)
- H28 二次 機械・制御 問3: (1)〜(4)

一次3問＋二次記述2問、計5問・13小問。公式問題・公式解答／標準解答との制作前独立検証は `13 / 13 PASS`。

固定範囲は `SPEC.md` 第8章どおり、三相インバータ、6スイッチ構成、PWM、キャリア、基本波、線間電圧、出力周波数、高調波、スイッチング周波数、および計算プログラムのスイッチング波形・相電圧/線間電圧・基本波・FFT/高調波成分に限定する。

固定範囲外として次を除外した。
- R07一次問4(1)〜(3)の負荷・素子詳細
- H22一次問3(4),(5)の太陽光発電・系統連系制御
- H19一次問4(3)のベクトル制御、(4),(5)のデッドタイム・素子選定
- R04二次問3(1)〜(3)の整流器計算、(6)のV/f制御
- H28二次問3(5)の直流入力電流

件数合わせによる仕様外論点追加は0件。未確認の新幹線実車インバータ電圧・キャリア周波数・スイッチング周波数等も真値化していない。

## Topic 08 解説本文完了

解説本文＋3段階例題をsource Markdownへ反映した。

- 固定5問・13小問を本文対応表へ `13 / 13` マッピング
- 三相2レベル6スイッチ、120°位相差、相端電圧 `±E_d/2`、線間電圧 `0,±E_d`
- 正弦波PWMの信号波・三角波キャリア・変調率 `k=V_s/V_c`
- 信号波周波数＝出力基本波周波数、キャリア周波数＝スイッチング周波数
- H22/R04型 `V_phase,peak=kE_d/2`、`V_LL1=√3 kE_d/(2√2)` を導出
- H28型180°通電の `V_LL,rms=√(2/3)E_d` を波形の二乗平均から導出
- 3の整数倍次数高調波が三相線間電圧で相殺される理由を説明
- 3段階例題: 基礎／本試験標準／複合・ひっかけ

固定EXAM_ALIGNMENTは変更していない。V/f制御、ベクトル制御、デッドタイム設計、素子選定、整流器設計、負荷電流経路の詳細、未確認300系実車値の追加は0件。

## 次に行うこと

Topic 08の解説PDFを作成し、全ページ表示QAを行う。

- source Markdownの解説本文＋3段階例題を同期
- 固定5問・13小問への接続を維持
- H22/R04型とH28型の導出をPDF上でも省略しない
- V/f制御・ベクトル制御等のTopic 09論点を追加しない