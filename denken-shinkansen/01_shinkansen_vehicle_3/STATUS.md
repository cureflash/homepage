# STATUS - 新幹線車両・電験三種

更新日: 2026-09-18

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: `36 / 38`
- current_status: `topic_37_preanswer_complete`
- last_completed_topic: `36 COSMOS① 新幹線全体を統合管理する`
- active_topic: `37 COSMOS② 新幹線の電力設備を遠隔監視する`
- next_start: Topic 37の解説source本文作成。固定済みEXAM_ALIGNMENTの5問・6答案要素を全件カバーし、系列SPEC固定範囲外やTopic 38を追加しない

## 新品質ゲート進捗
- [x] 01〜36 — PASS / COMPLETED
- [ ] 37 — IN PROGRESS / PREANSWER_COMPLETE
- [ ] 38 — 未着手

## Topic 37 制作前進捗
判定: `PASS / PREANSWER_COMPLETE`。

- source: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring.md`
- EXAM_ALIGNMENT QA: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring_exam_alignment_qa.md`
- 制作前blind QA: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring_preanswer_qa.md`
- 固定公式過去問: `5問・6答案要素`
- 制作前blind独立解答: `6 / 6 PASS`
- 本文制作: `未着手`

### 固定公式過去問
- R6上 法規 問7 — 独立答案5 / 公式5 / PASS
- R3 機械 問14 — 独立答案5 / 公式5 / PASS
- R1 理論 問18(a) — 独立答案1 / 公式1 / PASS
- R1 理論 問18(b) — 独立答案4 / 公式4 / PASS
- H26 機械 問13 — 独立答案3 / 公式3 / PASS
- H23 法規 問6 — 独立答案1 / 公式1 / PASS

固定5問は、公式問題PDFだけで全答案を先に確定し、その後で公式解答PDFを開いて照合した。問題差替え0件、公式解答との不一致0件。

### 参考教材・実設備資料
- e-sysnet: PLC、センサ/制御
- 電験三種まとめました: デジタル計器、A-D変換、量子化
- JR東日本: COSMOS-SCADAの新幹線電力設備監視・制御
- 中部電力パワーグリッド: 一般的な変電所SCADAの監視・制御・自動計測
- 東京電力パワーグリッド: 無人変電所の遠隔監視制御

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
`36 / 38`。Topic 37は制作前blind独立解答まで完了、完成扱いにはまだしない。
