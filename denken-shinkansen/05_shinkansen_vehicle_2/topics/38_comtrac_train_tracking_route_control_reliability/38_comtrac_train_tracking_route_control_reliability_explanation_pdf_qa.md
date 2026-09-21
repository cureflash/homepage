# Topic 38 COMTRAC 列車追跡・進路制御・高信頼化 — 解説PDF QA

更新日: 2026-09-21

判定: `PASS / EXPLANATION_PDF_REMEDIATED`

## 正本・reconcile

- main base: `bb37a5552b51d1004071982a86ccfa2828b3baba`
- active series latest commit before this run: `fee98b0cbb742ec2b4ad1823062e4695de5ddfc8`
- source: `38_comtrac_train_tracking_route_control_reliability_explanation_source.md`
- source blob SHA: `5e78be9bc99e279e977e482a7d08236b7bcc8304`
- source QA: `38_comtrac_train_tracking_route_control_reliability_explanation_source_qa.md`
- source QA blob SHA: `90f48db5b346b713fd26d48bb81ae87ae148e5f4`
- fixed EXAM_ALIGNMENT: `38_comtrac_train_tracking_route_control_reliability.md`
- `STATUS.md` / `HANDOFF.md` の `topic_38_practice_source_remediated` を確認し、remediation前PDFを流用せず再生成した。
- main baseまでの直近車両二種commitは `fee98b0c...`。以後mainの更新は他系列/色彩教材で、Topic 38との競合なし。

## PDF

- file: `38_comtrac_train_tracking_route_control_reliability_explanation.pdf`
- SHA-256: `6c62015dbb8a88f8ba35383768e47bb9bf3a9e2b76d6bbd2b3fd93c2a3628989`
- file size: `15512 bytes`
- A4縦: `4頁`
- extracted text: `8944 chars`
- replacement character U+FFFD: `0件`
- remediated sourceの番号付き全22節を収録。
- CID日本語フォントでの描画安定性のため、結合上線は意味等価な `overline(...)` 表記へ正規化。Markdown記号は紙面用に除去した。論点・数値・固定過去問接続は変更していない。

## 構文・表示QA

- Ghostscript nullpage parse/render: `PASS`
- Poppler `pdfinfo`: `PASS`
- Poppler `pdftotext -layout`: `PASS`
- PDFium render: `4 / 4 PASS`
- Poppler render: `4 / 4 PASS`
- PDFium / Poppler pixel comparison: `4 / 4 PASS`
- visual inspection: `4 / 4 PASS`
- HeiseiKakuGo-W5 CID: 日本語描画 `PASS`
- clipped text / overlap / black square / broken glyph: `0件`
- URLのはみ出し: `0件`

## clean blind v1 remediation反映QA

- R8一次「機械」問8(5): ステッピングモータの角位置センサなしオープンループ簡易位置決めと、過負荷・急加減速時の脱調: `PASS`
- H23一次「機械」問8(3): ノイマン形コンピュータの記憶プログラム方式・原則逐次命令実行: `PASS`
- H29一次「機械」問8(4): 単体→結合→システム試験で対象プログラム量・対象範囲が大きくなる: `PASS`

判定: `3 / 3 PASS`。

## 固定過去問ゲート

PDF本文に固定5問を差し替えず接続した。

1. R8一次「機械」問8 — `5 / 5`
2. R2一次「機械」問8 — `5 / 5`
3. H29一次「機械」問8 — `5 / 5`
4. H26一次「機械」問3 — `5 / 5`
5. H23一次「機械」問8 — `5 / 5`

- 一次: `25 / 25 connected`
- 二次: `0問`
- 主題外二次問題の件数合わせ: `0件`
- H29/H23 actual blank mapping: `10 / 10 PASS`

## SPEC固定9項目QA

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

- 基礎例題: Boolean `R=A・B・overline(C)` — `PASS`
- 本試験標準例題: FIFOと割込み — `PASS`
- 複合例題: `MTBF=1000 h`, `MTTR=2 h`, `99.8004 %`, 独立二並列 `99.9996 %` — `PASS`

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

- explanation PDF: `PASS / REMEDIATED`
- 固定5問・25答案要素: `25 / 25 connected`
- clean blind v1 remediation必須3点: `3 / 3 PASS`
- SPEC固定9項目: `9 / 9 PASS`
- 3段階例題: `3 / 3 PASS`
- source番号付き全22節: `PASS`
- 未確認COMTRAC実装・数値の真値化: `0件`
- Topic 39先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

次工程: remediated練習sourceから練習PDFを再生成し、PDF表示・内容QAを行う。remediation前練習PDFは流用しない。
