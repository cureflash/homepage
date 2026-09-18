# STATUS - 新幹線車両・電験三種

更新日: 2026-09-18

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: `36 / 38`
- current_status: `topic_37_practice_pdf_revised`
- last_completed_topic: `36 COSMOS① 新幹線全体を統合管理する`
- active_topic: `37 COSMOS② 新幹線の電力設備を遠隔監視する`
- next_start: 改訂済み解説source・練習sourceを正本としてTopic 37のPowerPointを同期修正し、16:9表示・overflow・固定5問6答案要素の反映・PPTX ZIP整合性をQAする。完成後blind独立再解答・最終QAにはまだ進まない

## 新品質ゲート進捗
- [x] 01〜36 — PASS / COMPLETED
- [ ] 37 — IN PROGRESS / PRACTICE_PDF_REVISED
- [ ] 38 — 未着手

## Topic 37 現在進捗
判定: `IN PROGRESS / PRACTICE_PDF_REVISED_PASS`。

- source: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring.md`
- EXAM_ALIGNMENT QA: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring_exam_alignment_qa.md`
- 制作前blind QA: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring_preanswer_qa.md`
- 解説source QA: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring_explanation_source_qa.md`
- 解説PDF: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring_explanation.pdf`
- 解説PDF QA: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring_explanation_pdf_qa.md`
- 練習source: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring_practice.md`
- 練習source QA: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring_practice_source_qa.md`
- 練習PDF: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring_practice.pdf`
- 練習PDF QA: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring_practice_pdf_qa.md`
- PowerPoint: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring_images.pptx`
- PowerPoint QA: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring_images_qa.md`
- 完成後独立再解答: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring_independent_reanswer.md`

### 固定ゲート
- 固定公式過去問: `5問・6答案要素`
- 制作前blind独立解答: `6 / 6 PASS`
- 既存完成後独立再解答: `4 / 6 PASS / NEEDS_REVISION`
- 固定問題追加・差替え: `0件`

### 今回完了した1段階
改訂済み練習sourceを正本として、Topic 37の練習PDFを同期修正しQAした。

- PDF: `A4縦 / 4ページ`
- 練習問題: `15問`（基礎4 / 標準8 / 複合3）
- 五肢択一・完全解説: `15 / 15`
- 正答位置: A/B/C/D/E各3問
- Q9: R6上 法規 問7用の系統連系保護を反映
- Q15: H23 法規 問6用の逆潮流・自立運転・単独運転・逆充電・転送遮断装置を反映
- 180 dpi表示: `4 / 4 PASS`
- 文字抽出: PASS
- 問題/正答/解説整合: PASS
- 固定EXAM_ALIGNMENT: `5問・6答案要素 / 6 / 6` PDF接続
- 固定範囲外追加: `0件`
- COSMOS-SCADA未確認内部仕様追加: `0件`
- 転送遮断・系統連系保護をCOSMOS-SCADA固有実装と断定: `0件`
- Topic 38先取り: `0件`
- 完成後blind独立再解答の再実施: `未実施`

PowerPointは改訂source未反映のため、まだ最終成果物同期済みとはみなさない。

## Topic 37 固定範囲
系列SPECどおり、次を対象とする。

- SCADA
- 変電所
- センサ
- 遠隔計測
- A/D変換
- デジタル情報
- 遠隔制御

固定過去問を一意に解くために必要な最小限の系統連系保護・用語定義のみ補強可。COSMOS-SCADA内部のデータ形式、通信プロトコル、ネットワーク構成、更新周期、サーバ構成、データベース構造は推測しない。Topic 38の冗長化・バックアップ・フェイルセーフ・論理回路・障害検知・切替・システム信頼性は先取りしない。

## Topic 36 最終状態
`PASS / COMPLETED`。必須4成果物、制作前/完成後blind独立解答、最終QAまで完了。

- 最終QA: `topics/36_cosmos_integrated_management/36_cosmos_integrated_management_final_qa.md`
- 固定公式過去問: `5問・8答案要素`
- 制作前blind独立解答: `8 / 8 PASS`
- 完成後blind独立再解答: `8 / 8 PASS`

## 完成数
`36 / 38`。Topic 37は練習PDFの改訂同期まで完了したが、PowerPoint未同期かつ完成後blind独立再解答の再実施前なので完成扱いにしない。
