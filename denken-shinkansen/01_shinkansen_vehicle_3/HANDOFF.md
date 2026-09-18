# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-18

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は `36 / 38`。01〜36がPASS。active topicは37 `COSMOS② 新幹線の電力設備を遠隔監視する`。

## 今回進捗
Topic 37を1段階進め、改訂後完成教材を変更せず、固定5問・6答案要素の完成後独立再解答を再実施した。

判定: `PASS / INDEPENDENT_REANSWER`。

- R6上 法規 問7: `5 / PASS`
- R3 機械 問14: `5 / PASS`
- R1 理論 問18(a): `1 / PASS`
- R1 理論 問18(b): `4 / PASS`
- H26 機械 問13: `3 / PASS`
- H23 法規 問6: `1 / PASS`
- 完成教材だけで一意導出: `6 / 6 PASS`
- 独立答案と公式解答一致: `6 / 6`
- 教材外知識補完: `0件`
- 固定問題追加・差替え: `0件`
- COSMOS-SCADA未確認内部仕様依存: `0件`
- Topic 38先取り: `0件`

第1回完成後独立再解答 `4 / 6 PASS / NEEDS_REVISION` は履歴として維持し、今回の改訂後再実施結果 `6 / 6 PASS` を同じ記録へ追記した。最終QAはまだ実施していないため、Topic 37はcompletedにしない。

## 現在の成果物状態
- source: 改訂済み
- 解説source QA: 改訂後再QA済み
- 解説PDF: 改訂sourceへ同期済み
- 解説PDF QA: 改訂後PASS
- 練習source: 改訂sourceへ同期済み
- 練習source QA: 改訂後PASS
- 練習PDF: 改訂sourceへ同期済み
- 練習PDF QA: 改訂後PASS
- PowerPoint: 改訂sourceへ同期済み
- PowerPoint QA: 改訂後PASS
- 完成後独立再解答: 改訂後 `6 / 6 PASS`
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
Topic 37の最終QAだけを実施する。固定範囲、必須4成果物、各QA、固定5問・6答案要素、改訂後完成後独立再解答 `6 / 6 PASS`、COSMOS-SCADA未確認内部仕様0件、Topic 38先取り0件を確認する。全条件PASSの場合だけTopic 37を `completed` とし、完成数を `37 / 38` へ更新する。Topic 38制作には同じrunで進まない。
