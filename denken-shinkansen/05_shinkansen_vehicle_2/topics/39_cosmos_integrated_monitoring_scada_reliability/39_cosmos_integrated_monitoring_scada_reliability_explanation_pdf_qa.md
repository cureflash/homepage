# Topic 39 COSMOS 統合監視・SCADA・信頼性 — 解説PDF QA

更新日: 2026-09-21

判定: `PASS / EXPLANATION_PDF_COMPLETE`

## 正本・reconcile

- source: `39_cosmos_integrated_monitoring_scada_reliability_explanation_source.md`
- source blob SHA: `04cafb1d7f26770f5be55517b46f1abe93fdb31a`
- source QA: `39_cosmos_integrated_monitoring_scada_reliability_explanation_source_qa.md`
- source QA blob SHA: `e5fb3084e4e7440b7934742e4d0e48c1bb634194`
- fixed EXAM_ALIGNMENT: `39_cosmos_integrated_monitoring_scada_reliability.md`
- STATUS/HANDOFFの次工程 `TOPIC39_EXPLANATION_PDF` に従い、解説sourceの固定5問・25答案要素、系列SPEC固定13項目、3段階例題、計算・グラフ3種への接続を変更せずPDF化した。

## PDF

- file: `39_cosmos_integrated_monitoring_scada_reliability_explanation.pdf`
- SHA-256: `bf3de0a550f154d90727369f27b0ef718d1f1a1468377ba793e7885e640b20f8`
- file size: `11382 bytes`
- A4縦: `3頁`
- extracted text: `7247 bytes`
- replacement character U+FFFD: `0件`
- `(cid:)`: `0件`
- 一般SCADAモデル、CT/VT、A/D、LAN、変調・復調、遠隔計測・遠隔制御、保護リレー信頼性、信頼度・可用性、3段階例題、固定過去問接続を収録。

## 構文・表示QA

- Ghostscript nullpage parse/render: `PASS`
- Poppler `pdfinfo`: `PASS`
- Poppler `pdftotext -layout`: `PASS`
- PDFium 200 dpi render: `3 / 3 PASS`
- Poppler 200 dpi render: `3 / 3 PASS`
- PDFium / Poppler renderer parity確認: `3 / 3 rendered`
- visual inspection: `3 / 3 PASS`
- clipped text / overlap / black square / broken glyph: `0件`
- A4 page size: `PASS`

## 固定過去問ゲート

PDF本文に固定5問・25答案要素を差し替えず接続した。

1. R4一次「機械」問3 — 負担 / 励磁電流 / CT励磁インピーダンスと誤差 / 比誤差 / CT二次開放禁止 — `5 / 5`
2. R3一次「機械」問8 — 2進数 / 量子化誤差 / 変換時間 / MSB / サンプルホールド — `5 / 5`
3. H30一次「機械」問8 — リピータ / ブリッジ / MAC / Wi-Fi / DHCP — `5 / 5`
4. H25一次「機械」問8 — 搬送波 / 復調 / AM / QAM / ASK — `5 / 5`
5. R2二次「電力・管理」問2 — CT・VTの目的 / 比誤差 / 保護リレーの正動作・正不動作・自動監視・低故障率・冗長化 / 77・66 kV級遮断器5又は3サイクル・トリップコイル / トリップフリー — `5 / 5`

- 一次: `20 / 20 connected`
- 二次: `5 / 5 connected`
- 合計: `25 / 25 connected`
- 主題外二次問題の件数合わせ: `0件`
- 固定5問変更: `0件`

## 系列SPEC固定13項目QA

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

## 3段階例題QA

- 基礎例題: 0〜10 V、12 bit A/Dの分解能 `q≈2.44 mV`、理想量子化誤差 `≈1.22 mV` — `PASS`
- 本試験標準例題: `K_n=200`, `K=199` の比誤差 `≈+0.503 %` とCT二次開放禁止 — `PASS`
- 複合例題: `lambda=1.0×10^-4 1/h`, 5000 h時の単一系 `0.606531`、理想2並列 `0.845182`、`MTBF=5000 h`, `MTTR=5 h` の定常可用性 `99.9001 %` — `PASS`

判定: `3 / 3 PASS`。

## 系列SPEC計算・グラフQA

教材用仮定値と明記して次の3種をPDFへ収録した。

1. 信頼度―時間 `R(t)=exp(-lambda t)` — `PASS`
2. 単一系・理想2並列系比較 `R_parallel=1-(1-R)^2` — `PASS`
3. 可用性比較 `A=MTBF/(MTBF+MTTR)` と理想2並列比較 — `PASS`

判定: `3 / 3 PASS`。

## 境界・安全QA

- 一般SCADAモデルをCOSMOS内部構成図と断定: `0件`
- COSMOS未公開内部構成、独自通信プロトコル、データ形式、監視周期、遠隔制御論理、装置単位冗長方式の推測: `0件`
- COSMOSの故障率、MTBF、MTTR、可用性実値の真値化: `0件`
- 教材用仮定値を実設備値として扱う: `0件`
- CT一次通電中の二次開放禁止: `COVERED`
- VT二次短絡禁止: `COVERED`
- 独立並列式の共通原因故障への無条件適用: `0件`
- Topic 38固定問題重複採用: `0件`
- Topic 21一般式 `P=Tω`, `ω=2πN/60` の変更: `0件`

## 最終判定

- explanation PDF: `PASS / COMPLETE`
- 固定5問・25答案要素: `25 / 25 connected`
- 一次・二次: `20 / 20 + 5 / 5 PASS`
- SPEC固定13項目: `13 / 13 PASS`
- 3段階例題: `3 / 3 PASS`
- 計算・グラフ3種: `3 / 3 PASS`
- 未確認COSMOS実装・数値の真値化: `0件`
- exact blocker: `0件`

次工程: Topic 39の練習sourceを作成し、固定25答案要素、一次・二次接続、系列SPEC固定13項目、解答・完全解説をsource QAで確認する。
