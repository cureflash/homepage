# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-18

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は `37 / 38`。01〜37がPASS。active topicは38 `COSMOS③ システムが壊れても新幹線を止めない`。

## 今回進捗
Topic 38を1段階進め、制作前blind独立解答を完了した。

判定: `PASS / PREANSWER_COMPLETE`。

- source: `topics/38_cosmos_high_reliability/38_cosmos_high_reliability.md`
- EXAM_ALIGNMENT QA: `topics/38_cosmos_high_reliability/38_cosmos_high_reliability_exam_alignment_qa.md`
- 制作前blind QA: `topics/38_cosmos_high_reliability/38_cosmos_high_reliability_preanswer_qa.md`
- 固定公式過去問: `5問・5答案要素`
- 候補固定コミット: `c073dbd91cd3090bd98bcd2392c477f1c4015d21`
- R6下 機械 問14: blind `3` / 公式 `3` / PASS
- R6上 機械 問14: blind `5` / 公式 `5` / PASS
- R6下 電力 問9: blind `4` / 公式 `4` / PASS
- R4下 電力 問13: blind `3` / 公式 `3` / PASS
- R3 電力 問13: blind `2` / 公式 `2` / PASS
- 制作前blind独立解答: `5 / 5 PASS`
- 固定問題差替え: `0件`
- 候補固定前の公式解答参照: `0件`
- 第三者正答表示による候補修正: `0件`

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
Topic 38の固定5問・5答案要素と系列SPEC固定範囲を変更せず、解説source本文を制作する。固定5問を教材だけで解けるよう、論理回路、配電保護、低圧ネットワーク方式と冗長化・バックアップ・フェイルセーフ・システム信頼性の関係を説明する。COSMOS/COSMOS-SCADAの未公開内部構成は追加しない。
