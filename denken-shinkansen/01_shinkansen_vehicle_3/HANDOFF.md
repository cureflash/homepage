# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-18

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は `37 / 38`。01〜37がPASS。active topicは38 `COSMOS③ システムが壊れても新幹線を止めない`。

## 今回進捗
Topic 38を1段階進め、練習sourceを制作・QAした。

判定: `PASS / PRACTICE_SOURCE_COMPLETE`。

- source: `topics/38_cosmos_high_reliability/38_cosmos_high_reliability.md`
- EXAM_ALIGNMENT QA: `topics/38_cosmos_high_reliability/38_cosmos_high_reliability_exam_alignment_qa.md`
- 制作前blind QA: `topics/38_cosmos_high_reliability/38_cosmos_high_reliability_preanswer_qa.md`
- 解説source QA: `topics/38_cosmos_high_reliability/38_cosmos_high_reliability_explanation_source_qa.md`
- 解説PDF: `topics/38_cosmos_high_reliability/38_cosmos_high_reliability_explanation.pdf`
- 解説PDF QA: `topics/38_cosmos_high_reliability/38_cosmos_high_reliability_explanation_pdf_qa.md`
- 練習source: `topics/38_cosmos_high_reliability/38_cosmos_high_reliability_practice.md`
- 練習source QA: `topics/38_cosmos_high_reliability/38_cosmos_high_reliability_practice_source_qa.md`
- 固定公式過去問: `5問・5答案要素`
- 制作前blind独立解答: `5 / 5 PASS`
- 解説本文マッピング: `5 / 5 PASS`
- 練習問題: `15問`（基礎4 / 標準8 / 複合3）
- 五肢択一: `15 / 15`
- 練習source独立再解答: `15 / 15 PASS`
- 固定5問5答案要素の練習接続: `5 / 5 PASS`
- 正答位置: A=3 / B=3 / C=3 / D=3 / E=3
- 複数正答: `0件`
- 固定問題差替え: `0件`
- 固定範囲外追加: `0件`
- COSMOS-SCADA未確認内部仕様追加: `0件`

## Topic 38 source/PDF/練習sourceで反映した試験論点
- AND・OR・NOT・ExOR・NOR、論理式、bit演算、タイムチャート
- 6.6 kV非接地配電、多回線地絡、地絡方向継電器、高圧カットアウト
- 遮断器、保護継電器、区分開閉器、避雷器、ケッチヒューズ
- 低圧ネットワーク方式、複数給電線、ネットワークプロテクタ、供給継続
- 冗長化、バックアップ、フェイルセーフ、システム信頼性
- 独立故障を仮定した直列・並列信頼度の学習用計算

固定R6下 機械 問14、R6上 機械 問14、R6下 電力 問9、R4下 電力 問13、R3 電力 問13の5答案要素を練習sourceへも接続した。

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
- source/練習source内の信頼度例は独立故障を仮定した学習用仮定値であり、COSMOSや新幹線電力設備の実信頼度とは扱わない。

## Topic 37 完成状態
Topic 37 `COSMOS② 新幹線の電力設備を遠隔監視する` は最終QA `PASS / COMPLETED`。完成成果物・個別QAは `STATUS.md` と `topics/37_cosmos_power_remote_monitoring/` を正本とする。

## 次の正確な開始点
Topic 38の練習sourceを正本として練習PDFを制作する。15問の問題文・正答・解説を変更せず、全ページ表示、文字抽出、問題/正答/解説整合、固定5問・5答案要素の反映をQAする。PowerPoint、完成後blind独立再解答、最終QAにはまだ進まない。
