# STATUS - 新幹線車両・電験三種

更新日: 2026-09-18

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: `37 / 38`
- current_status: `topic_38_powerpoint_complete`
- last_completed_topic: `37 COSMOS② 新幹線の電力設備を遠隔監視する`
- active_topic: `38 COSMOS③ システムが壊れても新幹線を止めない`
- next_start: Topic 38の完成後blind独立再解答を実施し、固定5問5答案要素を完成教材だけで導出後、公式解答と照合する

## 新品質ゲート進捗
- [x] 01〜37 — PASS / COMPLETED
- [ ] 38 — POWERPOINT_COMPLETE / PASS。完成後blind独立再解答・最終QAは未実施

## Topic 37 最終状態
判定: `PASS / COMPLETED`。

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
- 最終QA: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring_final_qa.md`

### 最終ゲート
- 必須4成果物: `4 / 4 EXIST`
- 固定公式過去問: `5問・6答案要素`
- 制作前blind独立解答: `6 / 6 PASS`
- 第1回完成後独立再解答: `4 / 6 PASS / NEEDS_REVISION`
- 不足2答案要素補強後の完成後独立再解答: `6 / 6 PASS`
- 解説本文マッピング: `6 / 6 PASS`
- 練習問題接続: `6 / 6 PASS`
- PowerPoint可視化: `6 / 6 PASS`
- 教材外知識補完: `0件`
- 固定問題追加・差替え: `0件`
- COSMOS-SCADA未確認内部仕様依存: `0件`
- Topic 38先取り: `0件`

## Topic 38 今回完了した1段階
解説画像PowerPointを制作・QAし、`PASS / POWERPOINT_COMPLETE`。

- source: `topics/38_cosmos_high_reliability/38_cosmos_high_reliability.md`
- EXAM_ALIGNMENT QA: `topics/38_cosmos_high_reliability/38_cosmos_high_reliability_exam_alignment_qa.md`
- 制作前blind QA: `topics/38_cosmos_high_reliability/38_cosmos_high_reliability_preanswer_qa.md`
- 解説source QA: `topics/38_cosmos_high_reliability/38_cosmos_high_reliability_explanation_source_qa.md`
- 解説PDF: `topics/38_cosmos_high_reliability/38_cosmos_high_reliability_explanation.pdf`
- 解説PDF QA: `topics/38_cosmos_high_reliability/38_cosmos_high_reliability_explanation_pdf_qa.md`
- 練習source: `topics/38_cosmos_high_reliability/38_cosmos_high_reliability_practice.md`
- 練習source QA: `topics/38_cosmos_high_reliability/38_cosmos_high_reliability_practice_source_qa.md`
- 練習PDF: `topics/38_cosmos_high_reliability/38_cosmos_high_reliability_practice.pdf`
- 練習PDF QA: `topics/38_cosmos_high_reliability/38_cosmos_high_reliability_practice_pdf_qa.md`
- PowerPoint: `topics/38_cosmos_high_reliability/38_cosmos_high_reliability_images.pptx`
- PowerPoint QA: `topics/38_cosmos_high_reliability/38_cosmos_high_reliability_images_qa.md`
- 固定公式過去問: `5問・5答案要素`
- 制作前blind独立解答: `5 / 5 PASS`
- 解説本文マッピング: `5 / 5 PASS`
- 練習問題: `15問`（基礎4 / 標準8 / 複合3）
- 五肢択一: `15 / 15`
- 練習source独立再解答: `15 / 15 PASS`
- 練習PDF: A4縦 `4ページ`
- 練習PDF 180 dpi表示QA: `4 / 4 PASS`
- PowerPoint: `16:9 / 4スライド`
- PowerPoint 180 dpi表示QA: `4 / 4 PASS`
- PowerPoint shape geometry overflow: `0件 / PASS`
- PowerPoint PPTX ZIP整合性: `PASS`
- PowerPoint固定5問5答案要素接続: `5 / 5 PASS`
- PowerPoint外部引用画像: `0件`
- 固定問題差替え: `0件`
- 固定範囲外追加: `0件`
- COSMOS-SCADA未確認内部仕様追加: `0件`

### Topic 38 source/PDF/練習source・練習PDF/PowerPointで反映した試験論点
- AND・OR・NOT・ExOR・NOR、論理式、bit演算、タイムチャート
- 6.6 kV非接地配電、多回線地絡、地絡方向継電器、高圧カットアウト
- 遮断器、保護継電器、区分開閉器、避雷器、ケッチヒューズ
- 低圧ネットワーク方式、複数給電線、ネットワークプロテクタ、供給継続
- 冗長化、バックアップ、フェイルセーフ、システム信頼性
- 独立故障を仮定した直列・並列信頼度の学習用計算

### Topic 38 固定範囲
系列SPECどおり、次だけを対象とする。

- 冗長化
- バックアップ
- フェイルセーフ
- 論理回路
- 障害検知
- 切替
- システム信頼性

JR東日本公開資料で確認できた「システム信頼度の向上」「事故時の情報収集・制御・早期復旧」だけを実システム事実として扱う。COSMOS/COSMOS-SCADAのサーバ台数、二重系/三重系、待機方式、通信経路、切替時間、切替条件、同期方式は推測しない。信頼度数値・式の適用例は独立故障を仮定した学習用モデルであり、COSMOS/COSMOS-SCADAの実信頼度とは扱わない。

## 完成数
`37 / 38`。Topic 38はPowerPointまで完了。次は完成後blind独立再解答。
