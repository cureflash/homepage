# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-18

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は `37 / 38`。01〜37がPASS。active topicは38 `COSMOS③ システムが壊れても新幹線を止めない`。

## 今回進捗
Topic 38を1段階進め、解説画像PowerPointを制作・QAした。

判定: `PASS / POWERPOINT_COMPLETE`。

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
- PowerPoint: 16:9 / 4スライド / 180 dpi表示 `4 / 4 PASS`
- 文字切れ・重なり・黒塗り・欠落: `0件`
- shape geometry overflow: `0件 / PASS`
- PPTX ZIP整合性: `PASS`
- PDF変換: `4ページ / PASS`
- 固定公式過去問: `5問・5答案要素`
- 制作前blind独立解答: `5 / 5 PASS`
- 解説本文マッピング: `5 / 5 PASS`
- 練習source独立再解答: `15 / 15 PASS`
- 固定5問5答案要素のPowerPoint接続: `5 / 5 PASS`
- 固定問題差替え: `0件`
- 固定範囲外追加: `0件`
- COSMOS-SCADA未確認内部仕様追加: `0件`

## Topic 38 PowerPointで可視化した試験論点
- slide 1: JR東日本公開範囲、検知・局所化・継続、冗長化・バックアップ・フェイルセーフの区別。
- slide 2: AND・OR・NOT・ExOR・NOR、論理式、タイムチャート、bit演算、2進→16進。
- slide 3: 6.6 kV非接地多回線地絡、地絡方向継電器、保護継電器・遮断器・区分開閉器・避雷器・高圧カットアウト・ケッチヒューズ、低圧ネットワーク方式、ネットワークプロテクタ、供給継続。
- slide 4: 固定5問・5答案要素マッピング、直列・並列信頼度の学習用式、再利用可能な解法手順、主要出典。

固定R6下 機械 問14、R6上 機械 問14、R6下 電力 問9、R4下 電力 問13、R3 電力 問13の5答案要素をPowerPointへ接続した。

## Topic 38 系列SPEC固定範囲
扱う内容:
- 冗長化
- バックアップ
- フェイルセーフ
- 論理回路
- 障害検知
- 切替
- システム信頼性

境界確認:
- JR東日本公開資料で確認できる「システム信頼度の向上」「事故時の情報収集・制御・早期復旧」までを実システム事実として扱う。
- COSMOS/COSMOS-SCADAのサーバ台数、二重系/三重系、ホット/コールドスタンバイ、通信経路、切替時間、切替条件、データ同期方式は推測しない。
- 冗長化・バックアップ・フェイルセーフは一般概念と電験過去問へ接続する範囲で扱い、COSMOS固有の実装方式とは断定しない。
- PowerPointの信頼度式は独立故障を仮定した学習用モデルであり、COSMOSや新幹線電力設備の実信頼度とは扱わない。

## Topic 37 完成状態
Topic 37 `COSMOS② 新幹線の電力設備を遠隔監視する` は最終QA `PASS / COMPLETED`。完成成果物・個別QAは `STATUS.md` と `topics/37_cosmos_power_remote_monitoring/` を正本とする。

## 次の正確な開始点
Topic 38の完成後blind独立再解答を実施する。固定5問・5答案要素は変更せず、公式問題PDFと完成教材だけで先に5答案を導出し、全答案確定後に公式解答表と照合する。最終QAにはまだ進まない。
