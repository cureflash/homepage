# STATUS - 新幹線車両・電験三種

更新日: 2026-09-18

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: `36 / 38`
- current_status: `topic_37_explanation_source_complete`
- last_completed_topic: `36 COSMOS① 新幹線全体を統合管理する`
- active_topic: `37 COSMOS② 新幹線の電力設備を遠隔監視する`
- next_start: Topic 37の解説PDF作成。完成済みsourceだけを正本としてPDF化し、全ページ表示・文字抽出・固定5問6答案要素反映・固定範囲境界をQAする

## 新品質ゲート進捗
- [x] 01〜36 — PASS / COMPLETED
- [ ] 37 — IN PROGRESS / EXPLANATION_SOURCE_COMPLETE
- [ ] 38 — 未着手

## Topic 37 現在進捗
判定: `PASS / EXPLANATION_SOURCE_COMPLETE`。

- source: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring.md`
- EXAM_ALIGNMENT QA: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring_exam_alignment_qa.md`
- 制作前blind QA: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring_preanswer_qa.md`
- 解説source QA: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring_explanation_source_qa.md`
- 固定公式過去問: `5問・6答案要素`
- 制作前blind独立解答: `6 / 6 PASS`
- 解説本文: `§1〜§15 / 完成`
- 3段階例題: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT本文マッピング: `6 / 6 PASS`
- 解説PDF: `未着手`
- 練習source/PDF: `未着手`
- PowerPoint: `未着手`
- 完成後blind独立再解答: `未実施`
- 最終QA: `未実施`

### 固定公式過去問
- R6上 法規 問7 — 制作前blind PASS
- R3 機械 問14 — 制作前blind PASS
- R1 理論 問18(a) — 制作前blind PASS
- R1 理論 問18(b) — 制作前blind PASS
- H26 機械 問13 — 制作前blind PASS
- H23 法規 問6 — 制作前blind PASS

固定5問・6答案要素は追加・差替えなし。

### 解説source QA
- SCADA一般概念とCOSMOS-SCADA公開事実の区別: PASS
- 変電所・センサ・遠隔計測: PASS
- A-D変換・量子化・二重積分形: PASS
- 2進/10進/16進変換: PASS
- シーケンス制御・PLC: PASS
- 通信による遮断信号・遠隔制御: PASS
- 例題独立再計算: `3 / 3 PASS`
- 固定範囲外追加: `0件`
- Topic 38先取り: `0件`
- COSMOS-SCADA未確認内部仕様追加: `0件`

## Topic 37 固定範囲
系列SPECどおり、次だけを対象とする。

- SCADA
- 変電所
- センサ
- 遠隔計測
- A/D変換
- デジタル情報
- 遠隔制御

Topic 38の冗長化・バックアップ・フェイルセーフ・論理回路・障害検知・切替・システム信頼性は先取りしない。

## Topic 36 最終状態
`PASS / COMPLETED`。必須4成果物、制作前/完成後blind独立解答、最終QAまで完了。

- 最終QA: `topics/36_cosmos_integrated_management/36_cosmos_integrated_management_final_qa.md`
- 固定公式過去問: `5問・8答案要素`
- 制作前blind独立解答: `8 / 8 PASS`
- 完成後blind独立再解答: `8 / 8 PASS`

## 完成数
`36 / 38`。Topic 37は解説sourceまで完成したが、必須成果物・完成後blind独立再解答・最終QAが未完了のため完成扱いにはしない。
