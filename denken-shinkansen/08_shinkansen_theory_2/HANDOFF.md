# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-19

## 現在地

Topic 01〜18は `PASS / completed`。完成数は `18 / 21`。

current_status: `topic_19_powerpoint_restored`

active_topic: `19 25kV・大電流をどう安全に測る？`

Topic 19は制作前EXAM_ALIGNMENT、制作前blind独立再解答、解説本文＋3段階例題、解説PDF＋表示QA、練習問題source＋練習PDF、完成後独立再解答まで完了。初回最終QAではPowerPoint本体欠落と主source進捗記録不一致の2点で `NEEDS_REVISION` となった。今回、PowerPoint本体を既存source・固定範囲・固定EXAM_ALIGNMENTだけから再生成し、表示QAを再実施してGitHub正本へ復元した。残blockerは主source進捗記録の同期のみ。

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
- stage: `POWERPOINT_RESTORED`

## 品質ゲート現状

- 制作前blind独立再解答: `25 / 25 PASS`
- 公式標準解答照合: `25 / 25`
- SPEC固定範囲: `10 / 10`
- 必須説明: `16 / 16`
- 3段階例題: `3 / 3`
- 解説PDF表示QA: `5 / 5 PASS`
- 練習12問QA: `12 / 12 PASS`
- 練習PDF表示QA: `5 / 5 PASS`
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

## 残 blocker

`topics/19_high_voltage_current_measurement/19_high_voltage_current_measurement.md` の状態欄が旧工程 `EXPLANATION_SOURCE_COMPLETE` のまま。初回最終QA記録はこの不整合もblockerとしているため、PowerPoint復元だけでTopic 19を `completed` にしない。

## 次工程

主sourceの状態・工程記録をGitHub正本の実状態へ同期する。その後、Topic 19最終QAを再実施する。
