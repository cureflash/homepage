# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-18

## 現在地
- Topic 01〜15: 最終QA `PASS / completed`
- 完成数: `15 / 22`
- active topic: `16 N700Sバッテリーから主回路へ電力を送る`
- current status: `topic_16_independent_reanswer_complete`
- 次工程: Topic 16 最終QA

仕様authorityは `denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`。仕様追加はしない。

## reconcile結果
- 最新main、系列 `STATUS.md` / `HANDOFF.md`、Topic 16全成果物を再監査した。
- Topic 01〜15は最終QA `PASS / completed` のまま変更なし。
- 最初の未完了テーマは Topic 16。
- 固定範囲・固定EXAM_ALIGNMENTは変更なし。一次4問＋二次記述1問、計5問・12答案要素。
- 解説source/PDF、練習source/PDF、PowerPoint/QAは変更していない。
- 既存枠の成果をreconcileし、完成済み工程を重複実施していない。
- R02一次3要素、H30一次2要素、H26一次1要素、H23二次5要素は既存の厳密ブラインド `11 / 11 PASS` を維持。
- H18一次「機械」問3 (1) は隔離済み問題入力と完成教材だけで再解答し、（カ）DC/DCコンバータと理由を `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_h18_q3_1_answer_lock.md` へ解答照合前に固定した。
- 答案ロックをGitHubへ保存した後に別ソースで解答を照合し一致。H18 `1 / 1 PASS`、固定12答案要素は `12 / 12 PASS`。
- 未確認N700S実車値、電池材料反応・BMS・チョッパ詳細の仕様追加、Topic 17以降先取り `0件`。

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
- [x] 独立再解答前ゲート `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_blind_reanswer_gate.md`
- [x] H18再実施用問題入力 `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_h18_q3_1_blind_input.md`
- [x] H18答案ロック `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_h18_q3_1_answer_lock.md`
- [x] 完成後独立再解答記録 `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_independent_reanswer.md` — 厳密ブラインド `12 / 12 PASS`

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

## Topic 16 独立再解答前ゲート
- [x] `MASTER_SPEC.md` / `EXAM_ALIGNMENT_SPEC.md` / 系列 `SPEC.md` / 最新mainを再監査
- [x] 完成済み教材だけで固定5問・12答案要素を再解答できる状態を確認
- [x] 固定公式過去問の個別正答番号・標準解答本文の保存 `0件`
- [x] 固定公式過去問の完成済み個別解答・数値解・導出結果の保存 `0件`
- [x] 固定EXAM_ALIGNMENT変更、仕様外追加、Topic 17以降先取り、未確認実車値追加 `0件`
- 判定: `BLIND_REANSWER_READY / IN_PROGRESS`

## Topic 16 完成後独立再解答
- R02一次 問4 (1),(4),(5): `3 / 3 PASS`
- H30一次 問6 (3),(4): `2 / 2 PASS`
- H26一次 問3 (1): `1 / 1 PASS`
- H18一次 問3 (1): `1 / 1 PASS` — （カ）DC/DCコンバータを解答照合前にロックし、後から照合して一致
- H23二次 問3 (3),(4): `5 / 5 PASS`
- R02/H30/H26/H23は完成教材だけで答案確定後、電気技術者試験センター公式解答・標準解答へ照合した。
- H18は問題側だけを隔離した再実施入力から答案を固定し、GitHub保存後に電験王2の解答欄へ照合した。公式アーカイブが正本であることは確認済みだが、本runではH18一次の個別公式解答PDFを直接取得できなかったため、公式直接照合とは記録しない。
- 厳密ブラインド結果: `12 / 12 PASS`
- 判定: `PASS / topic_16_independent_reanswer_complete`

## 次に行うこと
Topic 16最終QAを実施する。必須成果物の実在、解説PDF・練習PDF・PowerPoint各QA、固定5問・12答案要素 `12 / 12 PASS`、仕様境界、source/STATUS/HANDOFFの進捗整合を監査する。PASS時のみTopic 16を `completed` とする。