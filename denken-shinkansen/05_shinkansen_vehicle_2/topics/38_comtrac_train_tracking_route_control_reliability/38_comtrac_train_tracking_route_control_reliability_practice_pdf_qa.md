# Topic 38 COMTRAC 列車追跡・進路制御・高信頼化 — 練習PDF QA

更新日: 2026-09-21

判定: `PASS / PRACTICE_PDF_COMPLETE`

## 正本・reconcile

- main base: `ba21fa8ea07593d90f35a95c20938e81fbeb222c`
- source: `38_comtrac_train_tracking_route_control_reliability_practice_source.md`
- source blob SHA: `852491ff724289157213a8ea04440845be3efa66`
- source QA: `38_comtrac_train_tracking_route_control_reliability_practice_source_qa.md`
- fixed EXAM_ALIGNMENT: `38_comtrac_train_tracking_route_control_reliability.md`
- 固定EXAM_ALIGNMENT差し替え: `0件`
- Topic 38既存成果物をreconcileし、練習PDF・PDF QAの重複成果物がないことを確認してから生成した。

## PDF

- file: `38_comtrac_train_tracking_route_control_reliability_practice.pdf`
- SHA-256: `b6fee6b8df42340297fe37584111ca0cca9636a629b82d25b4af6c3b148e4d95`
- file size: `11451 bytes`
- A4縦: `6頁`
- extracted text: `17404 bytes`
- replacement character U+FFFD: `0件`
- 練習source由来の本文は空白差を除いて `6741 / 6741 chars` 一致。
- CID標準フォントで安定表示するため、結合上線は意味等価な `overline(...)` 表記を維持した。

## 構文・表示QA

- Ghostscript nullpage parse/render: `PASS`
- Poppler `pdfinfo`: `PASS`
- Poppler `pdftotext -layout`: `PASS`
- PDFium render: `6 / 6 PASS`
- Poppler render: `6 / 6 PASS`
- visual inspection: `6 / 6 PASS`
- HeiseiKakuGo-W5 Type0 CID / UniJIS-UCS2-H: PDFium・Poppler双方で日本語描画 `PASS`
- clipped text / overlap / black square / broken glyph: `0件`
- 12 px edge scan: PDFium / Popplerとも全頁4辺 `0 dark pixels`

`qpdf` は実行環境に未導入のため未実施。Ghostscript、Poppler、PDFiumの独立系統で構文・描画を確認した。

## 問題構成QA

- 一次試験型: `12問`
- 五肢択一: `12 / 12`
- 基礎確認: `3問 / 25%`
- 本試験標準: `6問 / 50%`
- 複合・応用: `3問 / 25%`
- 正答表示: `12 / 12`
- 二次試験型: `0題`
- 本Topicのコアへ直接対応する二次固定問題: `0問`
- 主題外二次問題の件数合わせ: `0件`
- 公式過去問本文の転載: `0件`

判定: `PASS`。

## 固定過去問対応ゲート

固定5問は制作前EXAM_ALIGNMENTから変更していない。

| 固定過去問 | 固定答案要素 | PDF接続 | 判定 |
|---|---:|---|---|
| R8 一次「機械」問8 | 5 | 問6 | `5 / 5 PASS` |
| R2 一次「機械」問8 | 5 | 問4、問5 | `5 / 5 PASS` |
| H29 一次「機械」問8 | 5 | 問7、問8 | `5 / 5 PASS` |
| H26 一次「機械」問3 | 5 | 問9、問10 | `5 / 5 PASS` |
| H23 一次「機械」問8 | 5 | 問1〜問3 | `5 / 5 PASS` |

一次: `25 / 25 PASS`。
二次: `0 / 0`（直接対応固定問題なし）。
合計: `25 / 25 PASS`。

## SPEC固定9項目QA

- 列車追跡: 問12 `PASS`
- 状態データ: 問4、問12 `PASS`
- 論理処理: 問1〜3、問6、問12 `PASS`
- 時刻情報: 問12 `PASS`
- ブール代数: 問2、問12 `PASS`
- インターロック: 問12 `PASS`
- 状態遷移: 問1、問3、問12 `PASS`
- 冗長化: 問10、問11 `PASS`
- 可用性: 問11 `PASS`

判定: `9 / 9 PASS`。

## 計算QA

### 問4 スループット

`240件 / 120 s = 2件/s`

PDF表示値一致。`PASS`。

### 問10 n+1容量

`300 kVA / 100 kVA = 3` より `n=3`、`n+1=4台`。1台故障後の残存容量 `3×100=300 kVA`。

PDF表示値一致。`PASS`。

### 問11 可用性

`A=1200/(1200+3)=0.997506234...=99.7506 %`

`A_parallel=1-(1-A)^2=0.999993781...=99.9994 %`

PDF表示値一致。単純二状態、独立、完全切替という成立仮定を明示済み。`PASS`。

計算再検算: `3 / 3 PASS`。

## 鉄道一次資料・境界QA

- JR東海一次資料で確認済みのCOMTRAC一般機能だけを実設備事実として使用: `PASS`
- JRTT一次資料で確認済みの軌道回路・連動装置の一般機能だけを実設備事実として使用: `PASS`
- 教材用 `Route_OK` 式をCOMTRAC実装式として表示: `0件`
- 教材用状態遷移をCOMTRAC内部状態機械として表示: `0件`
- 問11のMTBF/MTTR/可用性をCOMTRAC実値として表示: `0件`
- 第二総合指令所の存在から装置単位の冗長方式・切替方式を推測: `0件`
- 未確認COMTRAC内部構成・追跡アルゴリズム・処理周期・OS・スケジューリング方式・データ構造を真値化: `0件`
- Topic 39のCOSMOS、SCADA、A/D変換、計器用変成器、遠隔計測・遠隔制御の先取り: `0件`
- Topic 21一般式変更: `0件`

判定: `PASS`。

## 最終判定

- 一次試験型: `12問 / 12問五肢択一`
- 一次正答一意性: source QAを継承し `12 / 12 PASS`
- 二次試験型: `0題`（直接対応固定問題なし）
- 固定5問・25答案要素: `25 / 25 PASS`
- SPEC固定9項目: `9 / 9 PASS`
- 計算再検算: `3 / 3 PASS`
- PDFium / Poppler render: `6 / 6 PASS`
- 練習source本文保持: `PASS`
- 未確認COMTRAC実装・数値の真値化: `0件`
- 二次問題の件数合わせ採用: `0件`
- Topic 39先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

判定: `PASS / PRACTICE_PDF_COMPLETE`。

次工程: Topic 38 PowerPoint＋render/content QA。固定EXAM_ALIGNMENT、一次25答案要素、SPEC固定9項目、鉄道一次資料の境界を変更しない。
