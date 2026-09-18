# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-19

## 現在地

Topic 01〜18は `PASS / completed`。完成数は `18 / 21`。

current_status: `topic_19_progress_records_synced`

active_topic: `19 25kV・大電流をどう安全に測る？`

Topic 19は制作前EXAM_ALIGNMENT、制作前blind独立再解答、解説本文＋3段階例題、解説PDF＋表示QA、練習問題source＋練習PDF、PowerPoint＋表示QA、完成後独立再解答まで完了。初回最終QAで確認された2 blocker（PowerPoint本体欠落、主source進捗記録不一致）はともに解消した。主sourceはGitHub正本の実在成果物・QA記録へ同期済み。次工程は最終QA再実施。

## Topic 19 固定範囲

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

Topic 20の誤差・ブリッジ・波形・サンプリングは先取りしない。実設備CT・VTの定格、結線、精度階級等は一次資料未確認の真値として追加しない。

## Topic 19 固定EXAM_ALIGNMENT

品質ゲート対象は一次5問・25答案要素。

- R5 一次 理論 問8: 熱電形交流電力計
- R1 一次 理論 問4: コンデンサ形計器用変圧器
- H29 一次 理論 問4: エアトン分流器
- H25 一次 理論 問8: 可動コイル形計器
- H21 一次 理論 問6: 静電電圧計

令和8年度二次試験は2026-09-18時点で未実施。R7〜R1二次にTopic 19固定範囲だけで完答する直接対応問題は確認できず、二次採用0問・数合わせ0件。

## Topic 19 成果物

- source: `topics/19_high_voltage_current_measurement/19_high_voltage_current_measurement.md`
- 制作前blind独立再解答: `topics/19_high_voltage_current_measurement/19_high_voltage_current_measurement_blind_reanswer.md`
- 解説PDF: `topics/19_high_voltage_current_measurement/19_high_voltage_current_measurement_explanation.pdf`
- 解説PDF QA: `topics/19_high_voltage_current_measurement/19_high_voltage_current_measurement_explanation_pdf_qa.md`
- 練習source: `topics/19_high_voltage_current_measurement/19_high_voltage_current_measurement_practice.md`
- 練習PDF: `topics/19_high_voltage_current_measurement/19_high_voltage_current_measurement_practice.pdf`
- 練習PDF QA: `topics/19_high_voltage_current_measurement/19_high_voltage_current_measurement_practice_pdf_qa.md`
- PowerPoint: `topics/19_high_voltage_current_measurement/19_high_voltage_current_measurement_images.pptx` — `RESTORED`
- PowerPoint QA: `topics/19_high_voltage_current_measurement/19_high_voltage_current_measurement_powerpoint_qa.md`
- 完成後独立再解答: `topics/19_high_voltage_current_measurement/19_high_voltage_current_measurement_reanswer.md`
- 初回最終QA: `topics/19_high_voltage_current_measurement/19_high_voltage_current_measurement_final_qa.md`
- completion: `in_progress`
- stage: `PROGRESS_RECORDS_SYNCED`

## 品質ゲート現状

- 制作前blind独立再解答: `25 / 25 PASS`
- 公式標準解答照合: `25 / 25`
- SPEC固定範囲: `10 / 10`
- 必須説明: `16 / 16`
- 3段階例題: `3 / 3`
- 解説PDF表示QA: `5 / 5 PASS`
- 練習12問QA: `12 / 12 PASS`
- 練習PDF表示QA: `5 / 5 PASS`
- PowerPoint表示QA: `6 / 6 PASS`
- 完成後独立再解答: `25 / 25 PASS`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- Topic 20先取り: `0件`

## PowerPoint復元QA

- 16:9 / 6枚
- SHA-256: `7245837d236fb59360e0409906783e978d86477fcd71699dc532674a0c1f7faa`
- 200 dpi全スライド表示QA: `6 / 6 PASS`
- shape geometry overflow: `0件`
- PPTX ZIP整合性: `PASS`
- PDF変換: `6ページ / PASS`
- PDF文字抽出QA: `PASS`
- 固定一次5問・25答案要素: `25 / 25可視化`
- SPEC固定範囲: `10 / 10可視化`
- 練習12問要求論点: `12 / 12接続`
- SPEC固定範囲外追加: `0件`
- Topic 20先取り: `0件`

## 進捗記録同期

- 主source stage: `PROGRESS_RECORDS_SYNCED`
- 解説PDF QA: `PASS / EXPLANATION_PDF_COMPLETE`
- 練習PDF QA: `PASS / PRACTICE_PDF_COMPLETE`
- PowerPoint QA: `PASS / POWERPOINT_RESTORED`
- 完成後独立再解答: `25 / 25 PASS`
- 初回blocker「PowerPoint本体欠落」: `解消済み`
- 初回blocker「主source進捗記録不一致」: `解消済み`
- 判定: `PASS / PROGRESS_RECORDS_SYNCED`

## 次工程

Topic 19の最終QAを再実施する。固定一次5問・25答案要素、二次採用0問・二次数合わせ0件、SPEC固定範囲10項目、実在成果物と進捗記録の整合を再確認し、PASSの場合のみ `completed` 状態同期へ進む。
