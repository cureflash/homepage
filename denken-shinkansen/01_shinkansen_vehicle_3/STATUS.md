# STATUS - 新幹線車両・電験三種

更新日: 2026-09-18

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: `36 / 38`
- current_status: `topic_37_exam_alignment_complete`
- last_completed_topic: `36 COSMOS① 新幹線全体を統合管理する`
- active_topic: `37 COSMOS② 新幹線の電力設備を遠隔監視する`
- next_start: Topic 37の制作前blind独立解答。固定済み公式過去問5問・6答案要素を変更せず、公式問題PDFだけで答案を確定し、その後に公式解答PDFを開いて照合する

## 新品質ゲート進捗
- [x] 01〜36 — PASS / COMPLETED
- [ ] 37 — IN PROGRESS / EXAM_ALIGNMENT_COMPLETE
- [ ] 38 — 未着手

## Topic 37 制作前EXAM_ALIGNMENT
判定: `PASS / EXAM_ALIGNMENT_COMPLETE`。

- source: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring.md`
- QA: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring_exam_alignment_qa.md`
- 固定公式過去問: `5問・6答案要素`
- 制作前blind独立解答: `未実施`
- 本文制作: `未着手`

### 固定公式過去問
- R6上 法規 問7 — 配電用変電所の遮断信号、通信線による信号伝送、遠隔側機器動作
- R3 機械 問14 — 2進数・10進数・16進数、デジタル情報
- R1 理論 問18(a)(b) — 二重積分形A-D変換、デジタル直流電圧計
- H26 機械 問13 — シーケンス制御、レベルスイッチ、PLC
- H23 法規 問6 — 転送遮断装置、通信回線、別地点の遮断器動作

固定5問は公式問題本文・図表のみ確認済み。公式解答PDFと第三者正答表示は固定5問について未参照。個別正答番号は保存していない。

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
`36 / 38`。Topic 37は制作前EXAM_ALIGNMENT完了、完成扱いにはまだしない。
