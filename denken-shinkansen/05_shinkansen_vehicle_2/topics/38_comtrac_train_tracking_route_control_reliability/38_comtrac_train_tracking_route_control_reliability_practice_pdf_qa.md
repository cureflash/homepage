# Topic 38 COMTRAC 列車追跡・進路制御・高信頼化 — 練習PDF remediation QA

更新日: 2026-09-21

判定: `PASS / PRACTICE_PDF_REMEDIATED`

## 正本・reconcile

- main base: `9de1fa48ff22bb3fcd74fdc783024e5d6ed4218f`
- practice source: `38_comtrac_train_tracking_route_control_reliability_practice_source.md`
- practice source blob SHA: `8fd4c6b68d2e0f6a532b1bb6620b8f0ddc0ee8f8`
- practice source QA blob SHA: `f6aa766fb1b77469a11d1996bc8d82a323175f61`
- explanation PDF / PDF QA: `PASS / REMEDIATED`
- fixed EXAM_ALIGNMENT変更: `0件`
- remediation前の練習PDFを流用せず、remediated practice sourceから再生成した。
- 最新main、上位2仕様書、系列SPEC、STATUS/HANDOFF、既存Topic 38成果物をreconcileし、重複作業を避けた。

## PDF

- file: `38_comtrac_train_tracking_route_control_reliability_practice.pdf`
- Git blob SHA: `de360021d9245e8637a7f0dabe1ed74065e03f23`
- SHA-256: `3f378ed05b795a1b6590270c5e9d0900fde8a8ac8dc5297d1af2c246a449a724`
- file size: `16296 bytes`
- A4縦: `4頁`
- extracted text: `17576 chars`
- replacement character U+FFFD: `0件`
- 一次試験型12問、各五肢、正答、完全解説を収録。
- CID日本語フォントの描画安定性のため結合上線は意味等価な `overline(...)` 表記へ正規化した。

## 構文・表示QA

- Ghostscript nullpage parse/render: `PASS`
- Poppler `pdfinfo`: `PASS`
- Poppler `pdftotext -layout`: `PASS`
- PDFium render: `4 / 4 PASS`
- Poppler render: `4 / 4 PASS`
- PDFium visual inspection: `4 / 4 PASS`
- Poppler visual inspection: `4 / 4 PASS`
- 12 px edge scan: PDFium / Popplerとも全頁4辺 `0 dark pixels`
- clipped text / overlap / black square / broken glyph: `0件`

## clean blind v1 remediation反映QA

1. R8一次「機械」問8(5): 問6に「脱調がなければ角位置センサなしのオープンループ簡易位置決めが可能」「過負荷・急加減速では脱調し得る」を収録。`PASS`
2. H23一次「機械」問8(3): 問3にノイマン形コンピュータの「記憶プログラム方式」「命令を原則逐次実行」を収録。`PASS`
3. H29一次「機械」問8(4): 問7に「単体→結合→システム試験で対象プログラム量・対象範囲が一般に大きくなる」を収録。`PASS`

判定: `3 / 3 PASS`。

## 問題構成QA

- 一次試験型: `12問`
- 五肢択一: `12 / 12`
- 基礎確認: `3問 / 25%`
- 本試験標準: `6問 / 50%`
- 複合・応用: `3問 / 25%`
- 正答表示: `12 / 12`
- 一次正答一意性: remediated source QA `12 / 12 PASS` を継承し、PDFの設問・選択肢・正答一致を確認。`PASS`
- 二次試験型: `0題`
- 本Topicのコアへ直接対応する二次固定問題: `0問`
- 主題外二次問題の件数合わせ: `0件`
- 公式過去問本文の転載: `0件`

## 固定過去問対応ゲート

| 固定過去問 | 固定答案要素 | PDF接続 | 判定 |
|---|---:|---|---|
| R8 一次「機械」問8 | 5 | 問6 | `5 / 5 PASS` |
| R2 一次「機械」問8 | 5 | 問4、問5 | `5 / 5 PASS` |
| H29 一次「機械」問8 | 5 | 問7、問8 | `5 / 5 PASS` |
| H26 一次「機械」問3 | 5 | 問9、問10 | `5 / 5 PASS` |
| H23 一次「機械」問8 | 5 | 問1、問3 | `5 / 5 PASS` |

一次: `25 / 25 PASS`。
二次: `0 / 0`（直接対応固定問題なし）。
合計: `25 / 25 PASS`。
H29/H23実空欄mapping: `10 / 10 PASS`。

## SPEC固定9項目QA

- 列車追跡: 問12 `PASS`
- 状態データ: 問4、問12 `PASS`
- 論理処理: 問1〜3、問6、問12 `PASS`
- 時刻情報: 問12 `PASS`
- ブール代数: 問2、問12 `PASS`
- インターロック: 問12 `PASS`
- 状態遷移: 問1、問12 `PASS`
- 冗長化: 問10、問11 `PASS`
- 可用性: 問11 `PASS`

判定: `9 / 9 PASS`。

## 計算QA

- 問4: `240件 / 120 s = 2件/s`。`PASS`
- 問10: `300 kVA / 100 kVA = 3` より `n=3`, `n+1=4台`。1台故障後 `3×100=300 kVA`。`PASS`
- 問11: `A=1200/(1200+3)=0.997506234...=99.7506 %`、`A_parallel=1-(1-A)^2=0.999993781...=99.9994 %`。単純二状態・独立・完全切替の教材仮定を明記。`PASS`

計算再検算: `3 / 3 PASS`。

## 鉄道一次資料・境界QA

- JR東海一次資料で確認済みのCOMTRAC一般機能だけを実設備事実として使用: `PASS`
- JRTT一次資料で確認済みの軌道回路・連動装置の一般機能だけを実設備事実として使用: `PASS`
- 教材用 `Route_OK` 式をCOMTRAC実装式として表示: `0件`
- 教材用状態遷移をCOMTRAC内部状態機械として表示: `0件`
- 問11のMTBF/MTTR/可用性をCOMTRAC実値として表示: `0件`
- 第二総合指令所の存在から装置単位の冗長方式・切替方式を推測: `0件`
- 未確認COMTRAC内部構成・追跡アルゴリズム・進路制御論理・処理周期・OS・スケジューリング方式・データ構造を真値化: `0件`
- Topic 39のCOSMOS、SCADA、A/D変換、計器用変成器、遠隔計測・遠隔制御の先取り: `0件`
- Topic 21一般式変更: `0件`

## 最終判定

- remediated sourceから再生成: `PASS`
- 一次試験型: `12問 / 12問五肢択一`
- clean blind v1 remediation必須3点: `3 / 3 PASS`
- 固定5問・25答案要素: `25 / 25 PASS`
- SPEC固定9項目: `9 / 9 PASS`
- 計算再検算: `3 / 3 PASS`
- PDFium / Poppler render: `4 / 4 PASS`
- 未確認COMTRAC実装・数値の真値化: `0件`
- 二次問題の件数合わせ採用: `0件`
- Topic 39先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

判定: `PASS / PRACTICE_PDF_REMEDIATED`。

次工程: Topic 38 PowerPointをremediated sourceへ再同期し、render/content QAを行う。remediation前PowerPointは完成判定に使用しない。その後fresh clean blind v2へ進む。
