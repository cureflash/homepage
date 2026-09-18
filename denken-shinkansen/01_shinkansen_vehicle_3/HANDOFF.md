# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-18

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は `36 / 38`。01〜36がPASS。active topicは37 `COSMOS② 新幹線の電力設備を遠隔監視する`。

## 今回進捗
Topic 37を1段階進め、完成済み解説sourceと固定EXAM_ALIGNMENTだけを正本として解説画像PowerPointを作成した。16:9・4枚で、SCADAの公開範囲、遠隔計測/A-D変換、デジタル情報/シーケンス制御/遠隔制御、固定5問・6答案要素との対応を可視化した。180 dpi全スライド表示、shape geometry、PPTX ZIP整合性、PDF変換、範囲境界をQAした。

判定: `PASS / POWERPOINT_COMPLETE`。

- PowerPoint: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring_images.pptx`
- PowerPoint QA: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring_images_qa.md`
- 16:9: PASS
- スライド数: `4`
- 表示QA: `4 / 4 PASS (180 dpi)`
- 文字切れ・重なり・黒塗り・欠落: `0件`
- shape geometry overflow: `0件`
- PPTX ZIP整合性: PASS
- PDF変換: `4ページ / PASS`
- 固定EXAM_ALIGNMENT: `5問・6答案要素 / 6 / 6 PASS`
- 固定問題差替え: `0件`
- 固定範囲外追加: `0件`
- Topic 38先取り: `0件`
- COSMOS-SCADA未確認内部仕様追加: `0件`
- 完成数: `36 / 38`

## Topic 37 PowerPoint構成
1. COSMOS-SCADAの公開範囲とSCADA一般機能
2. 遠隔計測、センサ、A-D変換、二重積分形A-D変換
3. 2進/10進/16進、PLC/シーケンス制御、通信による遠隔制御
4. 固定EXAM_ALIGNMENT 5問・6答案要素と解法手順

## 固定EXAM_ALIGNMENT可視化
1. R6上 法規 問7 — slide 3・4
2. R3 機械 問14 — slide 3・4
3. R1 理論 問18(a) — slide 2・4
4. R1 理論 問18(b) — slide 2・4
5. H26 機械 問13 — slide 3・4
6. H23 法規 問6 — slide 3・4

結果: `6 / 6答案要素 PASS`。

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
- COSMOS-SCADA内部のデータ形式、通信プロトコル、ネットワーク構成、更新周期、サーバ構成、データベース構造は推測しない。
- 転送遮断装置の方式をCOSMOS-SCADAの実装方式とは断定しない。
- Topic 38の冗長化・バックアップ・フェイルセーフ・論理回路・障害検知・切替・システム信頼性は先取りしない。

## 次の正確な開始点
Topic 37の完成後blind独立再解答。PowerPoint・解説/練習成果物は変更せず、固定した公式問題PDFと完成教材だけを使い、6答案要素を先に独立導出する。全答案確定後に公式解答表を開いて照合し、教材外知識補完がないか判定する。最終QAへはまだ進まない。
