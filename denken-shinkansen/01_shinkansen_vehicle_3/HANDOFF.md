# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-18

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は `37 / 38`。01〜37がPASS。active topicは38 `COSMOS③ システムが壊れても新幹線を止めない`。

## 今回進捗
Topic 38を1段階進め、完成後独立再解答を実施した。

判定: `PASS / INDEPENDENT_REANSWER_COMPLETE`。

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
- 完成後独立再解答: `topics/38_cosmos_high_reliability/38_cosmos_high_reliability_independent_reanswer.md`
- 固定公式過去問: `5問・5答案要素`
- 固定問題差替え: `0件`
- 完成後候補固定コミット: `b13634cfd502ce968cb5a4bf62ac440b12f3fc47`
- 完成後再解答: `3, 5, 4, 3, 2`
- 公式解答一致: `5 / 5 PASS`
- 教材だけでの導出: `5 / 5 PASS`
- 教材外知識補完: `0件`
- 固定範囲外追加: `0件`
- COSMOS-SCADA未確認内部仕様依存: `0件`

## Topic 38 既存成果物QA
- 解説本文マッピング: `5 / 5 PASS`
- 解説PDF: A4縦 / 180 dpi表示QA `PASS`
- 練習問題: `15問`（基礎4 / 標準8 / 複合3）
- 五肢択一: `15 / 15`
- 練習source独立再解答: `15 / 15 PASS`
- 練習PDF: A4縦 `4ページ` / 180 dpi表示 `4 / 4 PASS`
- PowerPoint: `16:9 / 4スライド` / 180 dpi表示 `4 / 4 PASS`
- PowerPoint shape geometry overflow: `0件 / PASS`
- PowerPoint PPTX ZIP整合性: `PASS`
- PowerPoint固定5問5答案要素接続: `5 / 5 PASS`
- PowerPoint外部引用画像: `0件`

## Topic 38 PowerPointで可視化した試験論点
- slide 1: JR東日本公開範囲、検知・局所化・継続、冗長化・バックアップ・フェイルセーフの区別。
- slide 2: AND・OR・NOT・ExOR・NOR、論理式、タイムチャート、bit演算、2進→16進。
- slide 3: 6.6 kV非接地多回線地絡、地絡方向継電器、保護継電器・遮断器・区分開閉器・避雷器・高圧カットアウト・ケッチヒューズ、低圧ネットワーク方式、ネットワークプロテクタ、供給継続。
- slide 4: 固定5問・5答案要素マッピング、直列・並列信頼度の学習用式、再利用可能な解法手順、主要出典。

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
- 信頼度式は独立故障を仮定した学習用モデルであり、COSMOSや新幹線電力設備の実信頼度とは扱わない。

## Topic 37 完成状態
Topic 37 `COSMOS② 新幹線の電力設備を遠隔監視する` は最終QA `PASS / COMPLETED`。完成成果物・個別QAは `STATUS.md` と `topics/37_cosmos_power_remote_monitoring/` を正本とする。

## 次の正確な開始点
Topic 38の最終QAを実施する。必須4成果物の存在、固定5問5答案要素、各段階QA、完成後独立再解答 `5 / 5 PASS`、仕様外追加0件、未確認COSMOS内部仕様依存0件を横断確認し、問題がなければTopic 38を`COMPLETED`として系列完成数を`38 / 38`へ更新する。
