# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-18

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は `36 / 38`。01〜36がPASS。active topicは37 `COSMOS② 新幹線の電力設備を遠隔監視する`。

## 今回進捗
Topic 37を1段階進め、解説source本文を完成した。制作前EXAM_ALIGNMENTで固定済みの5問・6答案要素を変更せず、系列SPEC固定範囲だけで§1〜§15、3段階例題、解法手順、頻出ミス、固定EXAM_ALIGNMENT本文マッピングまで作成した。

判定: `PASS / EXPLANATION_SOURCE_COMPLETE`。

- source: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring.md`
- EXAM_ALIGNMENT QA: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring_exam_alignment_qa.md`
- 制作前blind QA: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring_preanswer_qa.md`
- 解説source QA: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring_explanation_source_qa.md`
- 固定公式過去問: `5問・6答案要素`
- 制作前blind独立解答: `6 / 6 PASS`
- 固定EXAM_ALIGNMENT本文マッピング: `6 / 6 PASS`
- 3段階例題: `3 / 3 PASS`
- 固定問題差替え: `0件`
- 固定範囲外追加: `0件`
- Topic 38先取り: `0件`
- COSMOS-SCADA未確認内部仕様追加: `0件`
- 完成数: `36 / 38`

## Topic 37 解説source内容
1. 電験で問う論点 — A-D変換、デジタル計測、数値表現、シーケンス制御、通信遠隔制御
2. COSMOS-SCADAの公開範囲 — JR東日本公開資料で確認できる新幹線電力設備の状態監視・制御
3. SCADA一般概念 — Data Acquisition / Supervisory Monitoring / Control
4. 変電所の遠隔監視 — 現地情報→デジタル情報→通信→指令側
5. センサと遠隔計測
6. A-D変換 — `2^n`コード、量子化幅
7. 二重積分形A-D変換 — `Vx=(T2/T1)Vr`
8. 二重積分形の解法手順 — 同一クロックなら `Vx=(N2/N1)Vr`
9. 2進数・10進数・16進数変換
10. シーケンス制御とPLC
11. 通信による遮断信号と遠隔制御
12. 遠隔監視・遠隔制御の問題解法手順
13. 基礎例題 — 2進/16進・量子化
14. 本試験標準例題 — 二重積分形A-D変換
15. 複合例題 — センサ→A-D→PLC→通信→遠方機器

例題は独立再計算し `3 / 3 PASS`。

## 固定EXAM_ALIGNMENT本文マッピング
1. R6上 法規 問7 — §11、§12、§15
2. R3 機械 問14 — §9、§13
3. R1 理論 問18(a) — §7、§8、§14
4. R1 理論 問18(b) — §7、§8、§14
5. H26 機械 問13 — §5、§10、§12、§15
6. H23 法規 問6 — §11、§12

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

## 参考確認済み
- e-sysnet: PLC、センサ/制御
- 電験三種まとめました: デジタル計器、A-D変換、量子化
- JR東日本 電気システムインテグレーションオフィス: COSMOS-SCADAの新幹線電力設備状態監視・制御
- JR東日本 2000年プレスリリース: 中央電力指令からの直接制御・監視
- 中部電力パワーグリッド: 一般的な変電所SCADAのリアルタイム監視・制御・自動計測
- 東京電力パワーグリッド: 無人変電所の遠隔監視制御

## 次の正確な開始点
Topic 37の解説PDF作成。`37_cosmos_power_remote_monitoring.md` の完成済み解説本文だけを正本にしてA4 PDF化し、全ページ表示、文字抽出、固定5問・6答案要素の反映、固定範囲外0件、Topic 38先取り0件をQAする。練習問題・PowerPointへはまだ進まない。
