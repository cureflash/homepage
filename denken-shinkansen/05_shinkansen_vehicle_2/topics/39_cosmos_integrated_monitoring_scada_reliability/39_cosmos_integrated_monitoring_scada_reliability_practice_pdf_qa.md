# Topic 39 COSMOS 統合監視・SCADA・信頼性 — 練習PDF QA

更新日: 2026-09-21

判定: `PASS / PRACTICE_PDF_COMPLETE`

## 正本・reconcile

- active series: `05_shinkansen_vehicle_2`
- source: `39_cosmos_integrated_monitoring_scada_reliability_practice_source.md`
- source blob SHA: `73f08fb29a90d0c95275335e87bd5fc250abda24`
- source QA: `39_cosmos_integrated_monitoring_scada_reliability_practice_source_qa.md`
- source QA blob SHA: `c470f95a98bded30f90fadbfaa5666735dd772a5`
- fixed EXAM_ALIGNMENT: `39_cosmos_integrated_monitoring_scada_reliability.md`
- 作業開始時に最新main、`STATUS.md`、`HANDOFF.md`、直近commit、既存worker成果をreconcileした。
- Topic 39練習source＋source QAが既に `PASS` だったため再作成せず、次工程の練習PDFへ進んだ。
- source正本自体の変更: `0件`

## PDF

- file: `39_cosmos_integrated_monitoring_scada_reliability_practice.pdf`
- SHA-256: `e42cce298699a90f0c0869c121e48bc66da1518bd7805f6e113ae929de094b7e`
- file size: `25652 bytes`
- A4縦: `7頁`
- extracted text: `23432 bytes`
- replacement character U+FFFD: `0件`
- `(cid:)`: `0件`

PDFは一次12問の問題、五肢、正答、完全解説、二次1題5設問と模範解答、固定過去問接続、系列SPEC固定13項目、頻出ミス、Topic 21固定注記を収録した。問8〜10の同一式・同一条件から、教材用の信頼度―時間、単一系・独立理想2並列、可用性比較の確認グラフを追加した。これらはCOSMOS実設備値ではない。

## 構文・表示QA

- Ghostscript nullpage parse/render: `PASS`
- Poppler `pdfinfo`: `PASS`
- Poppler `pdftotext -layout`: `PASS`
- PDFium 200 dpi render: `7 / 7 PASS`
- Poppler 200 dpi render: `7 / 7 PASS`
- PDFium / Poppler renderer parity: `7 / 7 rendered`
- visual inspection: `7 / 7 PASS`
- clipped text: `0件`
- overlap: `0件`
- black square: `0件`
- broken glyph: `0件`
- A4 page size: `PASS`
- 選択肢番号欠落・崩れ: `0件`

## 一次試験型QA

- 一次試験型: `12問`
- 五肢択一: `12 / 12 PASS`
- 正答表示: `12 / 12 PASS`
- 完全解説: `12 / 12 PASS`
- 正答番号だけの解説: `0件`
- 数値問題の式・代入・中間値・最終値・検算: `PASS`
- 知識問題の正答理由・主要誤答肢理由: `PASS`

正答:

| 問 | 正答 |
|---:|---:|
| 1 | 4 |
| 2 | 2 |
| 3 | 2 |
| 4 | 3 |
| 5 | 2 |
| 6 | 2 |
| 7 | 3 |
| 8 | 3 |
| 9 | 5 |
| 10 | 4 |
| 11 | 3 |
| 12 | 2 |

## 二次試験型QA

- 二次問題: `1題 / 5設問`
- 模範解答: `5 / 5 PASS`
- R2二次「電力・管理」問2への直接接続: `PASS`
- 主題外二次問題の件数合わせ: `0件`

5設問で、計器用変成器の目的・CT/VT、比誤差、正動作性/正不動作性と信頼性向上策、77/66 kV級遮断器5又は3サイクルとトリップコイル、トリップフリーを確認する。

## 固定5問・25答案要素ゲート

1. R4一次「機械」問3 — 負担 / 励磁電流 / CT励磁インピーダンスと誤差 / 比誤差 / CT二次開放禁止 — `5 / 5 PASS`
2. R3一次「機械」問8 — 2進数 / 量子化誤差 / 変換時間 / MSB / サンプルホールド — `5 / 5 PASS`
3. H30一次「機械」問8 — リピータ / ブリッジ / MAC / Wi-Fi / DHCP — `5 / 5 PASS`
4. H25一次「機械」問8 — 搬送波 / 復調 / AM / QAM / ASK — `5 / 5 PASS`
5. R2二次「電力・管理」問2 — CT・VTの目的 / 比誤差 / 正動作・正不動作・自動監視・低故障率・冗長化 / 77・66 kV級遮断器5又は3サイクル・トリップコイル / トリップフリー — `5 / 5 PASS`

集計:

- 一次: `20 / 20 PASS`
- 二次: `5 / 5 PASS`
- 合計: `25 / 25 PASS`
- 固定5問変更: `0件`
- Topic 38固定問題重複採用: `0件`

## 系列SPEC固定13項目QA

PDF抽出本文で以下を全て確認した。

- 分散システム
- 情報伝送
- データ収集
- 状態監視
- SCADA
- A/D変換
- 計器用変成器
- 遠隔計測
- 遠隔制御
- 冗長系
- 故障率
- 信頼度
- 可用性

判定: `13 / 13 PASS`。

## 系列SPEC計算・グラフ3種QA

1. 信頼度―時間: 問8の `R(t)=exp(-2.0×10^-4 t)` を数値計算・グラフ化 — `PASS`
2. 単一系・冗長系比較: 問9の単一系 `R` と独立理想2並列 `1-(1-R)^2` を比較 — `PASS`
3. 可用性比較: 問10の `MTBF=2000 h`, `MTTR=4 h` から単一系 `99.8004 %` と独立理想2並列 `99.9996 %` を比較 — `PASS`

判定: `3 / 3 PASS`。

## 境界・安全QA

- 一般SCADAモデルをCOSMOS内部構成図と断定: `0件`
- COSMOS未公開内部構成、独自通信プロトコル、データ形式、監視周期、遠隔制御論理、装置単位冗長方式を推測: `0件`
- COSMOSの故障率、MTBF、MTTR、可用性実値を真値化: `0件`
- 教材用理想並列を実設備の改善率として断定: `0件`
- CT一次通電中の二次開放禁止: `COVERED`
- VT二次短絡禁止: `COVERED`
- 信頼度と可用性の区別: `COVERED`
- 共通原因故障・完全切替等の成立条件: `COVERED`

## Topic 21固定注記

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた丸め差として診断済みの扱いを維持した。

- 一般式 `P=Tω`: 変更 `0件`
- 一般式 `ω=2πN/60`: 変更 `0件`
- Topic 39への波及修正: `0件`

## 最終判定

`PASS / PRACTICE_PDF_COMPLETE`

- 一次12問・五肢・正答・完全解説: `12 / 12 PASS`
- 二次1題5設問・模範解答: `5 / 5 PASS`
- 固定25答案要素: `25 / 25 PASS`
- 系列SPEC固定13項目: `13 / 13 PASS`
- 計算・グラフ3種: `3 / 3 PASS`
- PDFium/Poppler: `7 / 7 + 7 / 7 PASS`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

次工程はTopic 39 PowerPoint生成＋render/content QA。練習PDFまでの正本を変更せず、固定25答案要素、系列SPEC固定13項目、計算・グラフ3種を解説画像へ接続する。
