# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-18

## 現在地
- Topic 01〜15: 最終QA `PASS / completed`
- 完成数: `15 / 22`
- active topic: `16 N700Sバッテリーから主回路へ電力を送る`
- current status: `topic_16_practice_pdf_complete`
- 次工程: Topic 16 解説画像PowerPoint作成

仕様authorityは `denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`。仕様追加はしない。

## reconcile結果
- 最新main、系列 `STATUS.md` / `HANDOFF.md`、Topic 16 source・解説PDF・練習sourceを確認した。
- Topic 01〜15は最終QA `PASS / completed` のまま変更なし。
- 最初の未完了テーマは Topic 16。
- Topic 16の系列SPEC固定範囲は、リチウムイオン電池、起電力、内部抵抗、放電電流、電圧降下、Ah、Wh、C-rate、DCリンク、DC/DC変換の概念、変換効率。
- 固定EXAM_ALIGNMENTは一次4問＋二次記述1問、計5問・12答案要素のまま変更なし。
- 解説source/PDFの固定12答案要素 `12 / 12` 接続、3段階例題、N700S実車事実と教材用仮定値の区別を維持した。
- 練習問題sourceは一次10問＋二次5問、固定12答案要素へ `12 / 12` 接続、一次正答一意性 `10 / 10 PASS`、全15問の計算・論理QA `15 / 15 PASS` を維持した。
- 練習PDFをA4縦5ページで作成し、一次10問＋二次5問の解答・解説を収録した。
- PDF化後の主要数値29チェックポイントは `29 / 29 PASS`、160 dpi表示QA `5 / 5 PASS`、文字抽出QA PASS。
- 未確認N700S電池電圧・容量・セル数・内部抵抗・C-rate・効率の実車値化、Topic 17以降先取り、電池材料反応・BMS・チョッパ回路詳細の仕様追加は `0件`。
- 固定問題の正答記号・完成済み数値解の掲載は `0件`。完成教材後のblind独立再解答まで参照しない。

## Topic 15 最終状態
- 固定一次3問＋二次記述2問、5問・8答案要素
- 完成後独立再解答 `8 / 8 PASS`
- 必須成果物、練習・PDF/PPTX QA、仕様境界、進捗整合: PASS
- 最終判定: `PASS / completed`

## Topic 16 固定EXAM_ALIGNMENT
- R02 一次 機械 問4 (1),(4),(5) — 3答案要素
  - リチウムイオン二次電池の公称電圧、大電流放電時の電圧低下、`Wh=VIt` と重量エネルギー密度
- H30 一次 機械 問6 (3),(4) — 2答案要素
  - `Ah=It` による放電時間、`Wh/Ah` による平均電圧
- H26 一次 機械 問3 (1) — 1答案要素
  - 蓄電池を電力変換装置の直流回路へ接続する構成
- H18 一次 機械 問3 (1) — 1答案要素
  - 直流入力から直流出力を得るDC/DCコンバータの識別
- H23 二次 機械・制御 問3 (3),(4) — 5答案要素
  - 内部抵抗＋起電力モデル、C-rate、充放電電流、端子電圧波形、充放電時間、内部抵抗損と充電効率

一次4問＋二次記述1問、計5問。品質ゲート対象は12答案要素。

## Topic 16 解説sourceゲート
- [x] 固定5問・12答案要素を変更していない
- [x] 固定12答案要素を本文へ `12 / 12` 接続
- [x] 起電力・内部抵抗・端子電圧・内部抵抗損を説明
- [x] Ah・Wh・平均電圧・C-rateを説明
- [x] 充放電電流・端子電圧波形・充放電時間を説明
- [x] DC/DC・DCリンク・変換効率を説明
- [x] 3段階例題を作成し再計算PASS
- [x] N700S実車側を公式メーカー資料で確認
- [x] 未確認実車値追加 `0件`
- [x] Topic 17以降先取り `0件`
- [x] 仕様外論点追加 `0件`
- [x] 正答記号・完成済み固定問題数値解保存 `0件`
- 判定: `PASS / topic_16_explanation_source_complete`

## Topic 16 解説PDFゲート
- [x] `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_explanation.pdf`
- [x] A4縦・8ページ
- [x] 固定12答案要素を `12 / 12` 接続
- [x] 3段階例題の数値再計算PASS
- [x] 160 dpi表示QA `8 / 8 PASS`
- [x] 文字・数式・表の欠落、重なり、切れ、overflow `0件`
- [x] PDF文字抽出QA PASS / Unicode置換文字 `0件` / `(cid:)` `0件`
- [x] N700S実車事実と教材用仮定値の区別を維持
- [x] 未確認実車値追加 `0件`
- [x] Topic 17以降先取り `0件`
- [x] 仕様外論点追加 `0件`
- [x] 固定問題の正答記号・完成済み数値解掲載 `0件`
- [x] QA記録 `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_explanation_pdf_qa.md`
- [x] PDF SHA-256 `b9c88d84c1914d8d939356694603228b8303df38312e7f22cc5674b4ad90b3c0`
- [x] PDF Git blob SHA `ec0988d134a802f9f54f1e1f54af442e6bde23b6`
- 判定: `PASS / topic_16_explanation_pdf_complete`

## Topic 16 練習sourceゲート
- [x] `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_practice.md`
- [x] 一次試験型10問、全問五肢択一
- [x] 二次試験型5問、途中式・前提・単位・検算または論証付き
- [x] 一次正答一意性 `10 / 10 PASS`
- [x] 独立計算・論理QA `15 / 15 PASS`
- [x] 固定一次4問＋二次記述1問・12答案要素へ `12 / 12` 接続
- [x] H23二次型の充放電電流・端子電圧波形・充放電時間・`I²r` 損失比較を記述式で収録
- [x] 未確認N700S実車値追加 `0件`
- [x] Topic 17以降先取り `0件`
- [x] 電池材料反応・BMS・チョッパ回路詳細の仕様追加 `0件`
- [x] 固定問題の正答記号・完成済み数値解掲載 `0件`
- 判定: `PASS / topic_16_practice_source_complete`

## Topic 16 練習PDFゲート
- [x] `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_practice.pdf`
- [x] A4縦・5ページ
- [x] 一次10問＋二次5問の解答・解説を収録
- [x] 固定一次4問＋二次記述1問・12答案要素へ `12 / 12` 接続
- [x] 主要数値29チェックポイント `29 / 29 PASS`
- [x] 160 dpi表示QA `5 / 5 PASS`
- [x] 文字・数式・表の欠落、重なり、切れ、overflow `0件`
- [x] PDF文字抽出QA PASS / Unicode置換文字 `0件` / `(cid:)` `0件`
- [x] 未確認N700S実車値追加 `0件`
- [x] Topic 17以降先取り `0件`
- [x] 仕様外論点追加 `0件`
- [x] 固定問題の正答記号・完成済み数値解掲載 `0件`
- [x] QA記録 `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_practice_pdf_qa.md`
- [x] PDF SHA-256 `ec0ac0e9c6e95a662f42c0a4526b4c2287c322a7bb458809e12a61319f2e93dc`
- [x] PDF Git blob SHA `ea328bb7d1f2dd4a8d3adb74e1a7a67ccaf2a4d0`
- 判定: `PASS / topic_16_practice_pdf_complete`

## 次に行うこと
固定EXAM_ALIGNMENT、解説source/PDF、練習source/PDFを変更せず、Topic 16の解説画像PowerPointを作成する。固定12答案要素を可視化し、表示QAと仕様境界を確認する。固定問題の正答記号・完成済み数値解はblind独立再解答まで参照しない。
