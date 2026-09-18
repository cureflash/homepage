# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-18

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は `36 / 38`。01〜36がPASS。active topicは37 `COSMOS② 新幹線の電力設備を遠隔監視する`。

## 今回進捗
Topic 37を1段階進め、改訂済み解説source・練習sourceを正本としてPowerPointを同期修正し、16:9全スライド表示・overflow・固定EXAM_ALIGNMENT反映・ZIP整合性をQAした。

判定: `PASS / POWERPOINT_REVISED`。

- PowerPoint: `16:9 / 4枚`
- R6上 法規 問7: 発電電圧異常、系統側短絡・地絡、地絡過電圧リレー、単独運転、転送遮断の対応をslide 3へ反映
- H23 法規 問6: 逆潮流、自立運転、単独運転、逆充電、転送遮断装置の定義をslide 3へ反映
- slide 4: 固定5問・6答案要素のPowerPoint接続を `6 / 6` で確認
- 180 dpi相当表示: `4 / 4 PASS`
- shape geometry overflow: `0件 / PASS`
- PPTX ZIP整合性: `PASS`
- PDF変換: `4ページ / PASS`
- 固定問題追加・差替え: `0件`
- 固定範囲外追加: `0件`
- COSMOS-SCADA未確認内部仕様追加: `0件`
- 転送遮断・系統連系保護をCOSMOS-SCADA固有実装と断定: `0件`
- Topic 38先取り: `0件`
- 完成後blind独立再解答の再実施: `未実施`

既存完成後独立再解答の判定 `4 / 6 PASS / NEEDS_REVISION` は履歴として維持する。今回のPowerPoint同期で全必須成果物は改訂sourceへそろったが、再独立解答前なのでTopic 37はcompletedにしない。

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
- 完成後独立再解答: 旧版教材で `4 / 6 PASS / NEEDS_REVISION`、再実施前
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
完成教材を変更せず、Topic 37の完成後blind独立再解答を固定5問・6答案要素で再実施する。公式問題PDFと完成教材だけで全答案を先に導出し、全答案確定後に公式解答表と照合する。教材外知識で補完した答案はFAILとする。最終QAにはまだ進まない。
