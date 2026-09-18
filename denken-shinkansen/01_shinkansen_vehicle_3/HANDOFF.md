# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-18

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は `37 / 38`。01〜37がPASS。active topicは38 `COSMOS③ システムが壊れても新幹線を止めない`。

## 今回進捗
Topic 38を1段階進め、制作前EXAM_ALIGNMENTを完了した。

判定: `PASS / EXAM_ALIGNMENT_COMPLETE`。

- source: `topics/38_cosmos_high_reliability/38_cosmos_high_reliability.md`
- EXAM_ALIGNMENT QA: `topics/38_cosmos_high_reliability/38_cosmos_high_reliability_exam_alignment_qa.md`
- 固定公式過去問: `5問・5答案要素`
- R6下 機械 問14 — AND・OR・NOT、入力波形から出力波形を判定
- R6上 機械 問14 — ExOR・NOR・ORのビット論理演算
- R6下 電力 問9 — 多回線配電線路の地絡保護と故障回線選択
- R4下 電力 問13 — 複数給電線・低圧ネットワーク方式・ネットワークプロテクタ
- R3 電力 問13 — 遮断器・保護継電器・区分開閉器による事故区間切離し
- 固定5問の公式問題本文・図表: `確認済み`
- 固定5問の公式解答PDF: `未参照`
- 固定5問の第三者正答表示: `未参照`
- 個別正答番号保存: `0件`
- 制作前blind独立解答: `未実施`

調査中に正答表示へ到達した別問題は固定対象から除外した。固定5問は、正答を見ずに公式問題PDFの本文・図表を確認できた問題だけで構成している。

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

## Topic 37 完成状態
Topic 37 `COSMOS② 新幹線の電力設備を遠隔監視する` は最終QA `PASS / COMPLETED`。完成成果物・個別QAは `STATUS.md` と `topics/37_cosmos_power_remote_monitoring/` を正本とする。

## 次の正確な開始点
Topic 38の固定5問・5答案要素を変更せず、公式問題PDFだけで制作前blind独立解答を行う。各答案と根拠を確定した後に初めて公式解答PDFを開いて照合する。本文・解説PDF・練習source/PDF・PowerPoint制作へ先に進まない。
