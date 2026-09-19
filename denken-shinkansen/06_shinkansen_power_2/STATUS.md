# STATUS

updated: 2026-09-19
series: `06_shinkansen_power_2`
active_topic: `16`
theme: 25kV架線が短絡したら何kA流れる？
current_status: `topic_16_web_catalog_complete`
completed_topics: `15 / 22`

## Completed through Topic 15

Topic 01〜15は `completed`。

## Topic 16 current stage

制作前EXAM_ALIGNMENT、制作前blind独立再解答、解説source/PDF、練習source/PDF、PowerPoint、補正前完成後blind、learner-facing成果物への補正同期、補正後完成後blind clean rerun、Webカタログ登録まで実施済み。

補正前完成後blindでは固定5問・23答案要素の候補解自体は公式解答と `23 / 23` 一致し、二次は `13 / 13 PASS` だったが、一次固定2問の選択肢判定に必要なlearner-facing説明不足があり総合 `NEEDS_REVISION` となった。

補正済みlearner-facing成果物だけを使って完成後blindをclean rerunし、一次 `10 / 10`、二次 `13 / 13`、合計 `23 / 23 PASS`。公式標準解答とも `23 / 23一致` し、式選択・途中式・単位・選択肢根拠を教材内説明で説明できることを確認した。

Webカタログ登録:
- `qualifications/denken-shinkansen/catalog.json`
- id: `16_short_circuit`
- seriesId: `06_shinkansen_power_2`
- topicNo: `16`
- title: `25kV架線が短絡したら何kA流れる？`
- explanation: `../../denken-shinkansen/06_shinkansen_power_2/topics/16_short_circuit/16_short_circuit_explanation.pdf`
- practice: `../../denken-shinkansen/06_shinkansen_power_2/topics/16_short_circuit/16_short_circuit_practice.pdf`
- slides: `../../denken-shinkansen/06_shinkansen_power_2/topics/16_short_circuit/16_short_circuit_images.pptx`
- source: `../../denken-shinkansen/06_shinkansen_power_2/topics/16_short_circuit/16_short_circuit.md`

clean rerun記録:
- `topics/16_short_circuit/16_short_circuit_completion_blind_clean_rerun_20260919.md`

補正済み5項目:
- `電磁誘導障害` と電磁力・熱的ストレスの区別
- `遮断容量` と短絡容量の最小限の大小関係
- `BTB (Back to Back)` の直流リンクと交流短絡電流非直接通過
- `電圧階級上昇 + 系統分割` と短絡容量抑制
- 短絡容量式の電圧は短絡点の基準線間電圧・故障前電圧であり、ボルト短絡後の故障点電圧ではないこと

## 正式品質ゲート

固定EXAM_ALIGNMENT: 一次2問＋二次3問、計5問・23答案要素。変更なし。

制作前blind:
- 一次: `10 / 10 PASS`
- 二次: `13 / 13 PASS`
- 合計: `23 / 23 PASS`

補正前完成後blind:
- 公式解答との候補一致: `23 / 23`
- 二次: `13 / 13 PASS`
- 一次: `NEEDS_REVISION`
- 総合: `NEEDS_REVISION`

補正後完成後blind clean rerun:
- 一次: `10 / 10 PASS`
- 二次: `13 / 13 PASS`
- 合計: `23 / 23 PASS`
- 公式標準解答照合: `23 / 23一致`
- learner-facing根拠説明: `23 / 23 PASS`
- 判定: `PASS / topic_16_completion_blind_clean_rerun`

## 固定範囲

- 短絡容量
- ％インピーダンス
- 単位法
- 正相・逆相・零相インピーダンス
- 三相短絡
- 一線地絡
- 線間短絡
- 二線地絡
- 対称座標法
- 故障種別―短絡電流
- 故障位置を変えた短絡電流の可視化

## 品質境界

- 解説source: 補正済み
- 解説PDF: 補正同期・再QA `PASS`
- 練習source: 補正同期・source QA `PASS`
- 練習PDF: 補正同期・再QA `PASS`
- PowerPoint: 補正同期・再QA `PASS`
- 完成後blind: 補正後 clean rerun `23 / 23 PASS`
- Webカタログ: 登録済み `PASS`
- 周辺問題による件数水増し: `0件`
- Topic 17以降先取り: `0件`
- 未確認実設備値の真値化: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

Topic 16は試験対応品質ゲートを通過し、Webカタログ登録まで完了したが、最終QAが未実施のため `IN_PROGRESS`、完成数は `15 / 22` のまま。

## Gate checklist

- [x] Topic 01〜15 completed
- [ ] Topic 16 — 制作前EXAM_ALIGNMENT完了 / 制作前blind `23 / 23 PASS` / learner-facing全成果物補正済み / 完成後blind clean rerun `23 / 23 PASS` / Webカタログ登録済み / 最終QA待ち

## next_start

固定5問・23答案要素、Topic 16固定範囲、補正済み成果物、登録済みWebカタログを変更せず、Topic 16の最終QAを行う。最終QA PASS前に `completed` 化せず、Topic 17へ進まない。
