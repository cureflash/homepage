# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-18

## 現在地

Topic 01〜18は `PASS / completed`。完成数は `18 / 21`。

current_status: `topic_19_preproduction_exam_alignment_complete`

active_topic: `19 25kV・大電流をどう安全に測る？`

Topic 19は制作前EXAM_ALIGNMENTまで完了。品質ゲートを一次5問・25答案要素に固定し、二次は固定範囲だけで完答する直接対応問題が確認できないため0問。次工程は制作前blind独立再解答。

## Topic 18 成果物

- source: `topics/18_sensor_signal_opamp/18_sensor_signal_opamp.md`
- 制作前blind独立再解答: `topics/18_sensor_signal_opamp/18_sensor_signal_opamp_blind_reanswer.md`
- 解説PDF: `topics/18_sensor_signal_opamp/18_sensor_signal_opamp_explanation.pdf`
- 解説PDF QA: `topics/18_sensor_signal_opamp/18_sensor_signal_opamp_explanation_pdf_qa.md`
- 練習source: `topics/18_sensor_signal_opamp/18_sensor_signal_opamp_practice.md`
- 練習PDF: `topics/18_sensor_signal_opamp/18_sensor_signal_opamp_practice.pdf`
- 練習PDF QA: `topics/18_sensor_signal_opamp/18_sensor_signal_opamp_practice_pdf_qa.md`
- PowerPoint: `topics/18_sensor_signal_opamp/18_sensor_signal_opamp_images.pptx`
- PowerPoint QA: `topics/18_sensor_signal_opamp/18_sensor_signal_opamp_powerpoint_qa.md`
- 完成後独立再解答: `topics/18_sensor_signal_opamp/18_sensor_signal_opamp_reanswer.md`
- 最終QA: `topics/18_sensor_signal_opamp/18_sensor_signal_opamp_final_qa.md`
- completion: `completed`
- stage: `COMPLETED`

## Topic 18 完了要約

- 固定一次5問・25答案要素: `25 / 25 PASS`
- 公式標準解答一致: `25 / 25`
- SPEC固定範囲: `8 / 8`
- 必須説明: `15 / 15`
- 3段階例題: `3 / 3`
- 解説PDF表示QA: `3 / 3 PASS`
- 練習PDF表示QA: `3 / 3 PASS`
- 練習12問QA: `12 / 12 PASS`
- PowerPoint表示QA: `5 / 5 PASS`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- 最終判定: `PASS / completed`

## Topic 19 source

- source: `topics/19_high_voltage_current_measurement/19_high_voltage_current_measurement.md`
- stage: `PREPRODUCTION_EXAM_ALIGNMENT_COMPLETE`
- completion: `in_progress`

## Topic 19 固定範囲

系列SPECどおり次だけを扱う。

- 電圧計
- 電流計
- 内部抵抗
- 倍率器
- 分流器
- 電力計
- CT
- VT
- 変成比
- 電力量測定

実設備のCT・VT形式、定格、結線、精度階級等を実値として使う場合は一次資料で確認する。Topic 20の誤差・ブリッジ・波形・サンプリングは先取りしない。

## Topic 19 固定EXAM_ALIGNMENT

品質ゲート対象は一次5問・25答案要素。

- R5 一次 理論 問8: 熱電形交流電力計。電力計、電圧・電流の変成、平均電力。
- R1 一次 理論 問4: コンデンサ形計器用変圧器。高電圧測定、内部インピーダンス、VT系計測。
- H29 一次 理論 問4: エアトン分流器。電流計、内部抵抗、分流器、測定範囲拡大。
- H25 一次 理論 問8: 可動コイル形計器。電流計・電圧計、内部抵抗、分流器、倍率器。
- H21 一次 理論 問6: 静電電圧計。高電圧測定、電圧計の測定範囲拡大。

直近候補も確認済み。R8一次理論問4、R7一次理論問4、R6一次理論問6、R4一次理論問8、R3一次理論問8、R2一次理論問6は校正・ブリッジ等が答案体系の中心となるため固定品質ゲートへ混在させない。H20一次理論問6は測定誤差が主題でTopic 20側として非採用。

令和8年度二次試験は2026-09-18時点で未実施。直近R7〜R1二次「電力・管理」「機械・制御」を確認したが、Topic 19固定範囲だけで完答する直接対応記述問題は確認できなかった。

- 二次採用: `0問`
- 二次数合わせ: `0件`
- Topic 20先取り: `0件`
- 実設備CT・VTの未確認実値追加: `0件`
- 公式標準解答・正答記号のsource事前保存: `0件`

判定: `PASS / PREPRODUCTION_EXAM_ALIGNMENT_COMPLETE / IN_PROGRESS`

## 次工程

Topic 19の制作前blind独立再解答。固定一次5問・25答案要素を問題文だけから独立導出し、その後に公式標準解答と照合する。