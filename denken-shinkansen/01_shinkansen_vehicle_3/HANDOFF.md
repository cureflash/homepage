# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-18

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は `36 / 38`。01〜36がPASS。active topicは37 `COSMOS② 新幹線の電力設備を遠隔監視する`。

## 今回進捗
Topic 37を1段階進め、完成後独立再解答でFAILした2答案要素だけを解説sourceへ補強し、固定EXAM_ALIGNMENT本文マッピングを再QAした。固定5問・6答案要素は変更していない。

判定: `PASS / EXPLANATION_SOURCE_REVISED`。

- R6上 法規 問7: 発電電圧の異常上昇/低下、系統側短絡・地絡、地絡過電圧リレー、単独運転、転送遮断/単独運転検出を追加
- H23 法規 問6: 逆潮流、自立運転、単独運転、逆充電、転送遮断装置の定義を追加
- 改訂sourceの固定EXAM_ALIGNMENT本文マッピング: `6 / 6 PASS`
- 固定問題追加・差替え: `0件`
- COSMOS-SCADA未確認内部仕様追加: `0件`
- Topic 38先取り: `0件`

既存完成後独立再解答の判定 `4 / 6 PASS / NEEDS_REVISION` は履歴として維持する。今回まだ再独立解答していないため、Topic 37はcompletedにしない。

## 現在の成果物状態
- source: 改訂済み
- 解説source QA: 改訂後再QA済み
- 解説PDF: 存在するが改訂source未反映
- 練習source/PDF: 存在するが改訂source未反映
- PowerPoint: 存在するが改訂source未反映
- 完成後独立再解答: 旧版教材で `4 / 6 PASS`
- 最終QA: 未実施
- 完成数: `36 / 38`

## Topic 37 系列SPEC固定範囲
扱う内容:
- SCADA
- 変電所
- センサ
- 遠隔計測
- A/D変換
- デジタル情報
- 遠隔制御

境界:
- 固定過去問を一意に解くために必要な最小限の系統連系保護・用語定義のみ補強する。
- COSMOS-SCADA内部のデータ形式、通信プロトコル、ネットワーク構成、更新周期、サーバ構成、データベース構造は推測しない。
- 転送遮断装置や系統連系保護をCOSMOS-SCADAの実装方式とは断定しない。
- Topic 38の冗長化・バックアップ・フェイルセーフ・論理回路・障害検知・切替・システム信頼性は先取りしない。

## 次の正確な開始点
改訂sourceを正本としてTopic 37の解説PDFを同期修正する。修正後、全ページ表示・文字抽出・固定5問6答案要素の反映・固定範囲境界をQAする。練習source/PDF、PowerPoint、完成後blind独立再解答、最終QAにはまだ進まない。
