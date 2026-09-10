# STATUS - 新幹線車両・電験三種

更新日: 2026-09-11

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 20 / 38
- current_status: `topic_21_source_content_pass_binary_pending`
- last_completed_topic: `20 N700S② 6極誘導電動機`
- active_topic: `21 N700S③ バッテリー自走`
- next_start: topic 21 の確定済みsource Markdownから解説PDF・練習PDF・PowerPointを生成し、Visual QAと4成果物実在確認を行う

## 新品質ゲート進捗
- [x] 01〜20 — PASS
- [ ] 21 N700S③ バッテリー自走 — EXAM_ALIGNMENT、本文、例題、15問練習、計算QA、公式過去問5件の独立再解答までPASS。3バイナリ・Visual QA未完了

## 20 完了確認
`qualifications/denken-shinkansen/catalog.json` に `20_n700s_six_pole_motor` が登録され、解説PDF・練習PDF・PowerPoint・source Markdownへの公開参照が設定された。topic 20 は内容QA・独立過去問再解答・Visual QA・4成果物実在確認を通過済み。

## 21 EXAM_ALIGNMENT
対象: 第三種電気主任技術者 / 機械・電力。

公式過去問5件:
1. H30 機械 問12 — リチウムイオン二次電池の構成、放電時Liイオン移動、セル電圧。
2. R3 機械 問12 — 鉛蓄電池の構成、充放電、電解液、過充電時の現象。
3. R4上 機械 問12 — NAS電池の構成、セル起電力、直列・並列によるモジュール化。
4. H26 電力 問5 — 二次電池の種類・用途・充電方式等の正誤判断。
5. R4下 電力 問11 — 電力需給調整と電力貯蔵、揚水・蓄電池の役割。

## 21 今回完了した工程
source Markdownに以下を追加し、内容QAを通過した。
- 電池種別: リチウムイオン、鉛、NAS
- `C=It`、Ah、`P=VI`、`E=Pt`、Wh
- 直列・並列
- SOC、変換効率、運転時間
- N700Sのバッテリ自走システムとDCリンクの関係
- 基礎・標準・複合の3段階例題
- 練習15問: 基礎3 / 標準9 / 応用3、五肢択一12問
- 全15問の完全解説と計算QA

公式解答を開く前に5問を独立再解答し、H30機械問12 `(1)`、R3機械問12 `(4)`、R4上機械問12 `(4)`、H26電力問5 `(5)`、R4下電力問11 `(5)` と判定。その後の公式解答照合で5/5一致した。

## 21 N700S根拠境界
JR東海公式ページとIEEJ論文を再確認。公開根拠があるのは、バッテリ自走、Li-ion battery self-traction system、DC 750 V、通常DCリンク3000 V、16両量産編成8ユニット、試験約30 km/hなど。

1ユニット当たりAh、総kWh、実自走電流、実継続時間・距離、セル数・実直並列数は公開値として確定しない。教材内の容量・電力量計算はすべて一般問題または明示した教材用仮定値とする。

## QA判定
- topic 21 source: `SOURCE_CONTENT_PASS`
- topic 21 overall: `BINARY_PENDING`
- completed count: 20 / 38 のまま

## 次
topic 21のsource Markdownを正本として解説PDF・練習PDF・PowerPointを生成する。内容一致、文字切れ、数式、図、出典表示をVisual QAし、3バイナリとsource Markdownの4成果物が揃った場合のみcatalog登録とtopic 21 PASSへ進める。
