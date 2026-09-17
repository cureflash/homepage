# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-18

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: `15 / 22`
- current_status: `topic_16_blind_reanswer_gate_complete`
- last_completed_topic: `15 新幹線の補機モーターを設計する`
- active_topic: `16 N700Sバッテリーから主回路へ電力を送る`
- next_start: Topic 16 完成後独立再解答

## 完了テーマ
- [x] Topic 01〜15 最終QA `PASS / completed`
- [ ] Topic 16 `IN_PROGRESS` — 独立再解答前ゲート完了

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

固定問題の正答記号・完成済み数値解は保存せず、完成教材後に独立再解答してから公式解答・標準解答と照合する。

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
- [x] QA記録 `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_explanation_pdf_qa.md`
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
- [x] QA記録 `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_practice_pdf_qa.md`
- [x] PDF SHA-256 `ec0ac0e9c6e95a662f42c0a4526b4c2287c322a7bb458809e12a61319f2e93dc`
- [x] PDF Git blob SHA `ea328bb7d1f2dd4a8d3adb74e1a7a67ccaf2a4d0`
- 判定: `PASS / topic_16_practice_pdf_complete`

## Topic 16 解説画像PowerPoint
- [x] `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_images.pptx`
- [x] 16:9・4枚
- [x] 起電力＋内部抵抗、Ah/Wh/C-rate、H23二次型波形、DC/DC→DCリンク→主変換装置の4論点を可視化
- [x] 固定一次4問＋二次記述1問・12答案要素を維持し可視化
- [x] 120 dpi・1601×900 全4枚表示QA `4 / 4 PASS`
- [x] 文字・数式・図の欠落、重なり、切れ、overflow `0件`
- [x] PDF文字抽出QA PASS / Unicode置換文字 `0件` / `(cid:)` `0件`
- [x] PPTX ZIP整合性 PASS
- [x] 未確認N700S実車値、電池材料反応・BMS・チョッパ詳細、Topic 17以降先取り `0件`
- [x] 固定公式過去問の個別正答記号・完成済み数値解保存 `0件`
- [x] QA記録 `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_powerpoint_qa.md`
- [x] PPTX SHA-256 `6f1b89c2c652aac4210cbb7a3fb05a3c6b5527d87d3ecc02b767fefbc78c5cc1`
- [x] Git blob SHA `aba7ff0a01d5d139a1a3370d384761d48f4085ba`
- 判定: `PASS / topic_16_powerpoint_complete`

## Topic 16 独立再解答前ゲート
- [x] `MASTER_SPEC.md` / `EXAM_ALIGNMENT_SPEC.md` と最新mainを再監査
- [x] Topic 16の解説source/PDF、練習source/PDF、PowerPoint/QAの実在を再確認
- [x] main上で先行完成済みだったPowerPoint/QAを正本としてreconcileし、既存blobへ復帰
- [x] 固定一次4問＋二次1問・12答案要素を変更していない
- [x] 固定5過去問の公式正答番号・標準解答本文の保存 `0件`
- [x] 固定5過去問の完成済み個別解答・数値解・導出結果の保存 `0件`
- [x] 未確認N700S実車値、仕様外論点、Topic 17以降先取り `0件`
- [x] 判定 `BLIND_REANSWER_READY`

## 今回進めた内容
Topic 16の完成済み成果物を再監査し、独立再解答前ゲートを完了した。固定一次4問＋二次1問・12答案要素は変更せず、公式正答・標準解答・完成済み個別解答を参照しない状態を確認した。main上で先行完成済みだったPowerPoint/QAは既存正本blobへreconcileした。

## 判定
Topic 16は `topic_16_blind_reanswer_gate_complete / IN_PROGRESS`。完成数は `15 / 22` のまま。次はTopic 16 完成後独立再解答。
