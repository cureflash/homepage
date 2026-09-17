# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-18

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: `16 / 22`
- current_status: `topic_17_exam_alignment_complete`
- last_completed_topic: `16 N700Sバッテリーから主回路へ電力を送る`
- active_topic: `17 新幹線の速度をフィードバック制御する`
- next_start: Topic 17 解説source本文制作

## 完了テーマ
- [x] Topic 01〜16 最終QA `PASS / completed`
- [ ] Topic 17 `IN_PROGRESS` — 制作前EXAM_ALIGNMENT `PASS` / 次は解説source

仕様authorityは `denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`。仕様追加はしない。

## Topic 15 最終状態
- 固定一次3問＋二次記述2問、計5問・8答案要素
- 完成後独立再解答 `8 / 8 PASS`
- 必須成果物、解説PDF・練習PDF・PowerPoint QA、仕様境界、進捗整合: PASS
- 最終判定: `PASS / completed`

## Topic 16 固定範囲
系列 `SPEC.md` の次だけを扱う。

- リチウムイオン電池
- 起電力
- 内部抵抗
- 放電電流
- 電圧降下
- Ah
- Wh
- C-rate
- DCリンク
- DC/DC変換の概念
- 変換効率

境界:
- 電池材料・電極反応・BMSを独立論点として追加しない。
- Topic 07〜10のPWM変換器・インバータ・回生の回路詳細を再制作しない。
- Topic 17以降の伝達関数・過渡応答・PID・安定判別・再粘着制御を先取りしない。
- N700Sの電池電圧、容量、セル数、内部抵抗、C-rate、効率等を一次資料未確認のまま実車値として置かない。

## Topic 16 固定EXAM_ALIGNMENT
一次4問＋二次記述1問、計5問・12答案要素を品質ゲート対象とする。

- R02 一次 機械 問4 (1),(4),(5) — 3答案要素
- H30 一次 機械 問6 (3),(4) — 2答案要素
- H26 一次 機械 問3 (1) — 1答案要素
- H18 一次 機械 問3 (1) — 1答案要素
- H23 二次 機械・制御 問3 (3),(4) — 5答案要素

## Topic 16 制作前EXAM_ALIGNMENT
- [x] R08一次「機械」まで直近年度から公式過去問を確認
- [x] 一次4問＋二次記述1問、計5問・12答案要素を固定
- [x] H23二次「機械・制御」問3を二次記述品質ゲートに含めた
- [x] 参考教材2系統以上を確認
- [x] 件数合わせ採用、未確認実車値追加、Topic 17以降先取り、仕様外論点追加 `0件`
- [x] 正答記号・完成済み数値解保存 `0件`
- 判定: `PASS / topic_16_exam_alignment_complete`

## Topic 16 解説source
- [x] 起電力・内部抵抗・放電/充電端子電圧 `V=E∓Ir` を説明
- [x] Ah・Wh・平均電圧・C-rate・`I²r` を式、単位、逆算まで説明
- [x] H23二次型の充放電電流・端子電圧波形・充放電時間を説明
- [x] DC/DC・DCリンク・変換効率を固定範囲内で説明
- [x] N700S自走用SCiBと駆動システムへの給電関係を東芝公式資料で確認
- [x] 基礎／本試験標準／複合の3段階例題を作成・再計算PASS
- [x] 固定12答案要素を本文へ `12 / 12` 接続
- [x] 境界違反・固定問題の正答保存 `0件`
- 判定: `PASS / topic_16_explanation_source_complete`

## Topic 16 解説PDF
- [x] `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_explanation.pdf`
- [x] A4縦・8ページ、固定12答案要素 `12 / 12`
- [x] 160 dpi 全8ページ表示QA `8 / 8 PASS`
- [x] 文字・数式・表の欠落、重なり、切れ、overflow `0件`
- [x] PDF文字抽出QA PASS / Unicode置換文字 `0件` / `(cid:)` `0件`
- [x] PDF SHA-256 `b9c88d84c1914d8d939356694603228b8303df38312e7f22cc5674b4ad90b3c0`
- [x] PDF Git blob SHA `ec0988d134a802f9f54f1e1f54af442e6bde23b6`
- 判定: `PASS / topic_16_explanation_pdf_complete`

## Topic 16 練習source
- [x] `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_practice.md`
- [x] 一次10問＋二次5問
- [x] 一次正答一意性 `10 / 10 PASS`
- [x] 独立計算・論理QA `15 / 15 PASS`
- [x] 固定12答案要素へ `12 / 12` 接続
- [x] H23二次型の充放電電流・端子電圧波形・時間・`I²r` 損失比較を記述式で収録
- [x] 境界違反・固定問題の正答保存 `0件`
- 判定: `PASS / topic_16_practice_source_complete`

## Topic 16 練習PDF
- [x] `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_practice.pdf`
- [x] A4縦・5ページ、一次10問＋二次5問
- [x] 固定12答案要素へ `12 / 12` 接続
- [x] 主要数値29チェックポイント `29 / 29 PASS`
- [x] 160 dpi 全5ページ表示QA `5 / 5 PASS`
- [x] 文字・数式・表の欠落、重なり、切れ、overflow `0件`
- [x] PDF文字抽出QA PASS / Unicode置換文字 `0件` / `(cid:)` `0件`
- [x] PDF SHA-256 `ec0ac0e9c6e95a662f42c0a4526b4c2287c322a7bb458809e12a61319f2e93dc`
- [x] PDF Git blob SHA `ea328bb7d1f2dd4a8d3adb74e1a7a67ccaf2a4d0`
- 判定: `PASS / topic_16_practice_pdf_complete`

## Topic 16 解説画像PowerPoint
- [x] `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_images.pptx`
- [x] 16:9・4枚
- [x] 固定一次4問＋二次記述1問・12答案要素を維持
- [x] 120 dpi 全4枚表示QA `4 / 4 PASS`
- [x] 文字・数式・図の欠落、重なり、切れ、overflow `0件`
- [x] PPTX ZIP整合性 PASS
- [x] 未確認N700S実車値、仕様外論点、Topic 17以降先取り `0件`
- [x] PPTX SHA-256 `6f1b89c2c652aac4210cbb7a3fb05a3c6b5527d87d3ecc02b767fefbc78c5cc1`
- [x] Git blob SHA `aba7ff0a01d5d139a1a3370d384761d48f4085ba`
- 判定: `PASS / topic_16_powerpoint_complete`

## Topic 16 独立再解答前ゲート
- [x] `MASTER_SPEC.md` / `EXAM_ALIGNMENT_SPEC.md` と最新mainを再監査
- [x] Topic 16全成果物の実在を再確認
- [x] 固定一次4問＋二次1問・12答案要素を変更していない
- [x] 固定5過去問の公式正答番号・標準解答本文の事前保存 `0件`
- [x] 未確認N700S実車値、仕様外論点、Topic 17以降先取り `0件`
- 判定: `BLIND_REANSWER_READY`

## Topic 16 完成後独立再解答
- [x] R02一次 問4 (1),(4),(5): `3 / 3 PASS`
- [x] H30一次 問6 (3),(4): `2 / 2 PASS`
- [x] H26一次 問3 (1): `1 / 1 PASS`
- [x] H18一次 問3 (1): `1 / 1 PASS`
- [x] H23二次 問3 (3),(4): `5 / 5 PASS`
- [x] 厳密ブラインド再解答 `12 / 12 PASS`
- [x] 教材外知識による補完 `0件`
- 判定: `PASS / topic_16_independent_reanswer_complete`

## Topic 16 最終QA（前回）
- 必須成果物、固定5問・12答案要素、PDF/PPTX QA、仕様境界: PASS
- 進捗記録整合: FAIL
- 判定: `NEEDS_REVISION / topic_16_final_qa_needs_revision`

## Topic 16 進捗記録同期
- [x] main source `## 状態` を全成果物・独立再解答完了後の実状態へ同期
- [x] main source末尾 `## 次工程` を最終QA再実施へ同期
- [x] 練習source末尾 `# 次工程` を最終QA再実施へ同期
- [x] 技術本文・問題・正答・固定EXAM_ALIGNMENT・PDF/PPTX・独立再解答結果の変更 `0件`
- 判定: `PASS / topic_16_progress_records_synced`

## Topic 16 最終QA（再実施）
- [x] 必須成果物実在: PASS
- [x] 固定一次4問＋二次記述1問・12答案要素: `12 / 12 PASS`
- [x] 完成後独立再解答: `12 / 12 PASS`
- [x] 解説PDF表示・抽出QA: PASS
- [x] 練習PDF表示・数値・抽出QA: PASS
- [x] PowerPoint表示・ZIP整合性QA: PASS
- [x] 仕様境界: PASS
- [x] 進捗記録整合: PASS
- [x] 技術本文・問題・正答・固定EXAM_ALIGNMENTの変更 `0件`
- 記録: `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_final_qa.md`
- 判定: `PASS / topic_16_final_qa_pass / completed`

## Topic 17 固定範囲
系列 `SPEC.md` の次だけを扱う。

- 目標値
- 偏差
- 制御器
- プラント
- センサ
- 伝達関数
- ブロック線図
- 閉ループ伝達関数
- 外乱

境界:
- Topic 18の過渡応答、Topic 19のPID、Topic 20の安定判別・周波数応答、Topic 21の再粘着制御を先取りしない。
- 二自由度制御・フィードフォワード補償を独立論点として追加しない。
- 新幹線の制御ゲイン、時定数、センサ定数等を一次資料未確認のまま実車値として置かない。

## Topic 17 固定EXAM_ALIGNMENT
一次1問＋二次記述4問、計5問・6答案要素を品質ゲート対象とする。

- R07 二次 機械・制御 問4 (1) — 1答案要素
- R06 二次 機械・制御 問4 (1) — 1答案要素
- R04 二次 機械・制御 問4 (3) — 1答案要素
- R03 二次 機械・制御 問4 (1),(2) — 2答案要素
- H21 一次 機械 問4 (1) — 1答案要素

## Topic 17 制作前EXAM_ALIGNMENT
- [x] 直近年度から公式過去問を確認
- [x] 一次1問＋二次記述4問、計5問・6答案要素を固定
- [x] 伝達関数・ブロック線図・閉ループ伝達関数・外乱へ直接対応する小問だけを採用
- [x] 参考教材2系統以上を確認
- [x] Topic 18〜21先取り、二自由度制御の仕様追加、未確認実車値追加 `0件`
- [x] 正答記号・完成済み解答保存 `0件`
- source: `topics/17_speed_feedback_control/17_speed_feedback_control.md`
- 判定: `PASS / topic_17_exam_alignment_complete`

## 今回進めた内容
Topic 16完了後の最新mainと既存「機械二種を進行」枠の成果をreconcileし、重複作業を避けてTopic 17制作前EXAM_ALIGNMENTを実施した。一次1問＋二次4問、計5問・6答案要素を固定し、Topic 18以降の論点を除外した。

## 判定
Topic 17は `PASS / topic_17_exam_alignment_complete / IN_PROGRESS`。完成数は `16 / 22` のまま。次工程は解説source本文制作。