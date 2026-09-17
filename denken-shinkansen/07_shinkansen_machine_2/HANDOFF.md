# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-18

## 現在地
- Topic 01〜15: 最終QA `PASS / completed`
- 完成数: `15 / 22`
- active topic: `16 N700Sバッテリーから主回路へ電力を送る`
- current status: `topic_16_powerpoint_complete`
- 次工程: Topic 16 独立再解答前ゲート

仕様authorityは `denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`。仕様追加はしない。

## reconcile結果
- 最新main、系列 `STATUS.md` / `HANDOFF.md`、直近変更、Topic 16既存成果物を確認した。
- 既存の「機械二種を進行」枠による練習PDF完成状態を引き継ぎ、重複制作 `0件`。
- Topic 01〜15は最終QA `PASS / completed` のまま変更なし。
- 最初の未完了テーマは Topic 16。
- 固定範囲・固定EXAM_ALIGNMENTは変更なし。一次4問＋二次記述1問、計5問・12答案要素。
- 解説source/PDF、練習source/PDFの内容・QAを変更していない。
- 解説画像PowerPointを16:9・4枚で作成し、固定12答案要素を可視化した。
- 120 dpi・1601×900表示QA `4 / 4 PASS`、文字抽出QA PASS、PPTX ZIP整合性 PASS。
- 未確認N700S電池電圧・容量・セル数・内部抵抗・C-rate・DC/DC具体定格の実車値化、電池材料反応・BMS・チョッパ詳細の仕様追加、Topic 17以降先取り `0件`。
- 固定問題の正答記号・完成済み数値解は参照・保存していない。

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

## Topic 16 完成済み成果物
- [x] 制作前EXAM_ALIGNMENT `PASS`
- [x] 解説source `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link.md`
- [x] 解説PDF `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_explanation.pdf` — 8ページ、表示QA `8 / 8 PASS`
- [x] 練習source `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_practice.md` — 一次10問＋二次5問、独立QA `15 / 15 PASS`
- [x] 練習PDF `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_practice.pdf` — 5ページ、主要数値 `29 / 29 PASS`、表示QA `5 / 5 PASS`
- [x] 解説画像PowerPoint `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_images.pptx` — 16:9・4枚、表示QA `4 / 4 PASS`
- [x] PowerPoint QA `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_powerpoint_qa.md`

## Topic 16 解説画像PowerPointゲート
- [x] 起電力 `E`＋内部抵抗 `r`、放電 `V=E-Ir`、充電 `V=E+Ir`、内部抵抗損 `I²r` を可視化
- [x] Ah・Wh・平均電圧・C-rate・重量エネルギー密度を可視化
- [x] H23二次型の定電流充放電電流波形、端子電圧 `E_i±Ir`、充放電時間、損失比較を可視化
- [x] 蓄電池→DC/DC→DCリンク→主変換装置→主電動機と変換効率を可視化
- [x] 固定一次4問＋二次記述1問・12答案要素を維持
- [x] 120 dpi・1601×900 全4枚表示QA `4 / 4 PASS`
- [x] 文字・数式・図の欠落、重なり、切れ、overflow `0件`
- [x] PDF文字抽出QA PASS / Unicode置換文字 `0件` / `(cid:)` `0件`
- [x] PPTX ZIP整合性 PASS
- [x] 未確認N700S実車値・仕様外論点・Topic 17以降先取り `0件`
- [x] 固定公式過去問の個別正答記号・完成済み数値解保存 `0件`
- [x] PPTX SHA-256 `6f1b89c2c652aac4210cbb7a3fb05a3c6b5527d87d3ecc02b767fefbc78c5cc1`
- [x] Git blob SHA `aba7ff0a01d5d139a1a3370d384761d48f4085ba`
- 判定: `PASS / topic_16_powerpoint_complete`

## 次に行うこと
固定EXAM_ALIGNMENTと完成済み教材を変更せず、Topic 16の独立再解答前ゲートを実施する。`MASTER_SPEC.md` / `EXAM_ALIGNMENT_SPEC.md`、最新main、Topic 16全成果物を再監査し、固定5過去問の個別正答記号・標準解答本文・完成済み数値解が保存されていないことを確認する。`BLIND_REANSWER_READY` を確認するまで公式解答・標準解答を参照しない。
