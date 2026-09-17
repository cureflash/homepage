# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-18

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は `36 / 38`。01〜36がPASS。active topicは37 `COSMOS② 新幹線の電力設備を遠隔監視する`。

## 今回進捗
Topic 37を1段階進め、制作前blind独立解答を完了した。EXAM_ALIGNMENTで固定済みの5問・6答案要素を変更せず、公式問題PDFだけで全答案と根拠を先に確定し、その後で公式解答PDFを開いて照合した。

判定: `PASS / PREANSWER_COMPLETE`。

- source: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring.md`
- EXAM_ALIGNMENT QA: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring_exam_alignment_qa.md`
- 制作前blind QA: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring_preanswer_qa.md`
- 固定公式過去問: `5問・6答案要素`
- 制作前blind独立解答: `6 / 6 PASS`
- 問題差替え: `0件`
- 公式解答との不一致: `0件`
- 完成数: `36 / 38`

## Topic 37 制作前blind独立解答結果
1. R6上 法規 問7 — 独立答案 `5` / 公式 `5` / PASS
2. R3 機械 問14 — 独立答案 `5` / 公式 `5` / PASS
3. R1 理論 問18(a) — 独立答案 `1` / 公式 `1` / PASS
4. R1 理論 問18(b) — 独立答案 `4` / 公式 `4` / PASS
5. H26 機械 問13 — 独立答案 `3` / 公式 `3` / PASS
6. H23 法規 問6 — 独立答案 `1` / 公式 `1` / PASS

R1問18(a)(b)では、二重積分形A-D変換について `Vm = kVxT1`、`Vo = Vm - kVr(t-T1)`、`Vx = (T2/T1)Vr` を問題図から導出し、(b)は `Vx = (N2/N1)Vr = 4.0 V` と独立計算した。

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
- COSMOS-SCADA内部のデータ形式、通信プロトコル、ネットワーク構成、更新周期は推測しない。
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
Topic 37の解説source本文作成。固定済みEXAM_ALIGNMENTの5問・6答案要素を本文へ全件マッピングし、系列SPEC固定範囲だけで基礎概念・公式/関係・解法手順・3段階例題・新幹線接続・頻出ミスを構成する。Topic 38へは進まない。
