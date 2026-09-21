# Topic 38 COMTRAC 列車追跡・進路制御・高信頼化 — 解説PDF QA

更新日: 2026-09-21

判定: `PASS / EXPLANATION_PDF_COMPLETE`

## 正本・reconcile

- main base: `14016af410f76c93242e77502c8325a014e50981`
- active series latest commit before this run: `a4bf0cbe3be31091190bb23a298b8c6c5dcdb4fb`
- source: `38_comtrac_train_tracking_route_control_reliability_explanation_source.md`
- source blob SHA: `ae6df73e7b0892f1ee37fce26556254f083f8207`
- source QA: `38_comtrac_train_tracking_route_control_reliability_explanation_source_qa.md`
- source QA blob SHA: `b6ec8378fbb6ef7d156b275ba42f734fd3783bf7`
- fixed EXAM_ALIGNMENT: `38_comtrac_train_tracking_route_control_reliability.md`
- Topic 38既存成果物をreconcileし、解説PDF・PDF QAの重複成果物がないことを確認してから生成した。
- main base以降の車両二種更新: `0件`。他系列の更新のみであり、Topic 38成果物との競合なし。

## PDF

- file: `38_comtrac_train_tracking_route_control_reliability_explanation.pdf`
- SHA-256: `e85827c8505972ed839eac15a29269520ccf6a4d3d4a1d25062f5b7c21357c7b`
- file size: `14164 bytes`
- A4縦: `5頁`
- extracted text: `9270 chars`
- replacement character U+FFFD: `0件`
- source本文は全22節を収録。CID標準フォントで結合上線を安定表示するため、`Ā` / `B̄` / `C̄` / `Conflict̄` の14出現だけを意味等価な `overline(...)` 表記へ置換した。その他の論点・数値・出典・固定過去問接続は削除なし。

## 構文・表示QA

- Ghostscript nullpage parse/render: `PASS`
- Poppler `pdfinfo`: `PASS`
- Poppler `pdftotext -layout`: `PASS`
- PDFium render: `5 / 5 PASS`
- Poppler render: `5 / 5 PASS`
- visual inspection: `5 / 5 PASS`
- HeiseiKakuGo-W5 Type0 CID / UniJIS-UCS2-H: PDFium・Poppler双方で日本語描画 `PASS`
- clipped text / overlap / black square / broken glyph: `0件`
- URLのはみ出し: `0件`

`qpdf` は実行環境に未導入のため未実施。Ghostscript、Poppler、PDFiumの独立系統で構文・描画を確認した。

## 固定過去問ゲート

PDF本文に固定5問を差し替えず接続した。

1. R8一次「機械」問8 — `5 / 5`
2. R2一次「機械」問8 — `5 / 5`
3. H29一次「機械」問8 — `5 / 5`
4. H26一次「機械」問3 — `5 / 5`
5. H23一次「機械」問8 — `5 / 5`

- 一次: `25 / 25 connected`
- 二次: `0問`
- 合計: `25 / 25 connected`
- 主題外二次問題の件数合わせ: `0件`

抽出テキストで固定5問ラベル、`25 / 25 connected` を再確認した。

## SPEC固定9項目QA

PDF本文で以下9項目を確認。

- 列車追跡
- 状態データ
- 論理処理
- 時刻情報
- ブール代数
- インターロック
- 状態遷移
- 冗長化
- 可用性

判定: `9 / 9 PASS`。

## 3段階例題QA

- 基礎例題: Boolean `R=A・B・C̄` — `PASS`
- 本試験標準例題: FIFOと割込み — `PASS`
- 複合例題: MTBF/MTTR可用性＋独立二並列 — `PASS`

抽出テキストで `MTBF=1000 h`、`99.8004 %`、`99.9996 %`、`A_parallel` を再確認した。

判定: `3 / 3 PASS`。

## 鉄道一次資料・境界QA

- JR東海一次資料で確認済みのCOMTRAC運行状況・設備状態把握、進路制御、時刻・番線・列車順序等のみ実設備事実として使用: `PASS`
- JRTT一次資料で確認した軌道回路・連動の一般原理のみ実設備側へ使用: `PASS`
- 教材用 `Route_OK` を実COMTRAC/電子連動論理式として記述: `0件`
- 教材用状態遷移を実設備状態遷移として記述: `0件`
- 未確認COMTRAC内部構成、追跡アルゴリズム、処理周期、冗長方式、故障率、MTBF、MTTR、可用性値の真値化: `0件`
- Topic 39先取り: `0件`

## Topic 21固定注記QA

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有の丸め差という既存診断を維持した。

- 一般式 `P=Tω`: 変更なし
- `ω=2πN/60`: 変更なし
- Topic 38への波及: `0件`

## 最終判定

- 固定5問・25答案要素: `25 / 25 connected`
- SPEC固定9項目: `9 / 9 PASS`
- 3段階例題: `3 / 3 PASS`
- source全22節保持: `PASS`（結合上線14出現のみ意味等価な `overline(...)` 表記へ正規化）
- 未確認COMTRAC実装・数値の真値化: `0件`
- Topic 39先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

次工程: Topic 38練習source作成＋独立source QA。固定EXAM_ALIGNMENT、一次25答案要素、SPEC固定9項目、鉄道一次資料の境界を変更しない。
