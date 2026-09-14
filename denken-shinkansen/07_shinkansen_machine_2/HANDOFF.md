# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-15

## 現在地

Topic 01 `0系の主変圧器を等価回路で解剖する`、Topic 02 `0系の直流主電動機はどんな特性だった？`、Topic 03 `0系を210km/hまで加速させる`、Topic 04 `200系のサイリスタ制御を計算する`、Topic 05 `300系の誘導電動機を等価回路で解く`、Topic 06 `誘導電動機の最大トルクはどこで出る？` は最終QAまでPASSし、`completed`。

完成数: `6 / 22`

active topic: `07 300系のPWMコンバータは何をしている？`

current status: `topic_07_source_progress_synced`

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

## Topic 07 最終QA

成果物:
`topics/07_300series_pwm_converter/07_300series_pwm_converter_final_qa.md`

直前判定: `NEEDS_REVISION / IN_PROGRESS`。

PASS:
- 必須成果物
- 固定EXAM_ALIGNMENT 一次2問＋二次記述3問、計5問・17小問
- 完成後独立再解答 `17 / 17 PASS`
- SPEC指定4波形QA
- 固定範囲外論点の追加0件
- 未確認300系実車値の真値化0件

直前FAILだったsource Markdown進捗記録2箇所は今回同期済み。

## Topic 07 source進捗記録同期完了

`topics/07_300series_pwm_converter/07_300series_pwm_converter.md` の進捗記録のみを現在地へ同期した。

- 冒頭「状態」: 完成後独立再解答 `17 / 17 PASS`・最終QA `NEEDS_REVISION` へ更新
- 末尾「次工程」: 最終QA再実施へ更新
- 教材本文・固定EXAM_ALIGNMENT・数式・例題は変更なし
- PDF/PPTX/波形成果物は変更なし
- 固定範囲外論点の追加: 0件
- 未確認300系実車値の追加: 0件

Topic 07はまだ `completed` にしない。

## 次に行うこと

Topic 07の最終QAを再実施する。

- source Markdown進捗整合を再確認
- 固定5問・17小問の `17 / 17 PASS` を維持確認
- 必須成果物・4波形QA・仕様境界を再確認
- 全品質ゲートPASSの場合のみ `completed` にする
