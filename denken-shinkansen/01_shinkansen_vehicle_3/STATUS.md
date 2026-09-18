# STATUS - 新幹線車両・電験三種

更新日: 2026-09-18

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: `36 / 38`
- current_status: `topic_37_postanswer_needs_revision`
- last_completed_topic: `36 COSMOS① 新幹線全体を統合管理する`
- active_topic: `37 COSMOS② 新幹線の電力設備を遠隔監視する`
- next_start: Topic 37の解説source補強。完成後独立再解答で不足したR6上 法規 問7の系統連系保護知識とH23 法規 問6の用語判定だけを追加し、固定5問・6答案要素は差し替えない。PDF・練習・PowerPoint修正と最終QAにはまだ進まない

## 新品質ゲート進捗
- [x] 01〜36 — PASS / COMPLETED
- [ ] 37 — IN PROGRESS / POSTANSWER_NEEDS_REVISION
- [ ] 38 — 未着手

## Topic 37 現在進捗
判定: `NEEDS_REVISION / POSTANSWER_GATE 4 / 6 PASS`。

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
- 固定公式過去問: `5問・6答案要素`
- 制作前blind独立解答: `6 / 6 PASS`
- 解説本文: `§1〜§15 / 完成`
- 3段階例題: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT本文マッピング: `6 / 6 PASS`
- 解説PDF表示QA: `6 / 6 PASS (180 dpi)`
- 解説PDF文字抽出QA: `PASS`
- 練習source: `15問 / 基礎4・標準8・複合3 / 全問五肢択一・完全解説 / 完成`
- 練習source独立再解答: `15 / 15 PASS`
- 練習source固定EXAM_ALIGNMENT接続: `6 / 6 PASS`
- 練習PDF: `A4縦3ページ / 完成`
- 練習PDF表示QA: `3 / 3 PASS (180 dpi)`
- 練習PDF文字抽出QA: `PASS`
- 練習PDF固定EXAM_ALIGNMENT接続: `6 / 6 PASS`
- PowerPoint: `16:9 / 4枚 / 完成`
- PowerPoint表示QA: `4 / 4 PASS (180 dpi)`
- PowerPoint shape overflow: `0件`
- PowerPoint ZIP整合性: `PASS`
- PowerPoint固定EXAM_ALIGNMENT反映: `6 / 6 PASS`
- 完成後独立再解答: `4 / 6 PASS / 2答案要素は教材だけで一意導出不可`
- 最終QA: `未実施`

### 完成後独立再解答で判明した不足
- R6上 法規 問7: 転送遮断の一般原理だけでは不足。発電電圧/系統電圧、系統側/発電側事故、地絡過電圧リレー、単独運転検出の対応が必要。
- H23 法規 問6: 転送遮断装置の定義だけでは誤り肢を一意に選べない。逆潮流、自立運転、単独運転、逆充電の定義が必要。
- 教材外知識で補完してPASS扱いしないため `NEEDS_REVISION` とした。

### 固定公式過去問
- R6上 法規 問7 — 完成後独立再解答 FAIL（一意導出不可）
- R3 機械 問14 — 完成後独立再解答 PASS
- R1 理論 問18(a) — 完成後独立再解答 PASS
- R1 理論 問18(b) — 完成後独立再解答 PASS
- H26 機械 問13 — 完成後独立再解答 PASS
- H23 法規 問6 — 完成後独立再解答 FAIL（一意導出不可）

固定5問・6答案要素は追加・差替えなし。

## Topic 37 固定範囲
系列SPECどおり、次を対象とする。

- SCADA
- 変電所
- センサ
- 遠隔計測
- A/D変換
- デジタル情報
- 遠隔制御

完成後独立再解答で不足した周辺語句は、固定過去問を解くために必要な最小限だけ補強する。Topic 38の冗長化・バックアップ・フェイルセーフ・論理回路・障害検知・切替・システム信頼性は先取りしない。

## Topic 36 最終状態
`PASS / COMPLETED`。必須4成果物、制作前/完成後blind独立解答、最終QAまで完了。

- 最終QA: `topics/36_cosmos_integrated_management/36_cosmos_integrated_management_final_qa.md`
- 固定公式過去問: `5問・8答案要素`
- 制作前blind独立解答: `8 / 8 PASS`
- 完成後blind独立再解答: `8 / 8 PASS`

## 完成数
`36 / 38`。Topic 37は必須成果物まで存在するが、完成後独立再解答が `4 / 6 PASS` のため完成扱いにしない。
