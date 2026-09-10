# STATUS - 新幹線車両・電験三種

更新日: 2026-09-11

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 20 / 38
- current_status: `topic_21_artifacts_generated_qa_pending`
- last_completed_topic: `20 N700S② 6極誘導電動機`
- active_topic: `21 N700S③ バッテリー自走`
- next_start: topic 21 の公式過去問5件を保存済み正答を先に見ずに独立再解答し、最終QAを完了する

## 新品質ゲート進捗
- [x] 01〜20 — PASS
- [ ] 21 N700S③ バッテリー自走 — EXAM_ALIGNMENT・教材4成果物生成・計算QA・Visual QA完了、公式過去問5件の独立再解答は未実施

## 20 完了確認
`qualifications/denken-shinkansen/catalog.json` に `20_n700s_six_pole_motor` が登録され、解説PDF・練習PDF・PowerPoint・source Markdownへの公開参照が設定された。topic 20 は内容QA・独立過去問再解答・Visual QA・4成果物実在確認を通過済みのため、20/38 PASS。

## 21 EXAM_ALIGNMENT
対象: 第三種電気主任技術者 / 機械・電力。

公式過去問5件:
1. H30 機械 問12 — リチウムイオン二次電池の正極・負極・電解液、放電時のLiイオン移動、セル電圧。
2. R3 機械 問12 — 鉛蓄電池の構成、充放電、電解液、過充電時の現象。
3. R4上 機械 問12 — ナトリウム硫黄電池の構成、セル起電力、セルの直列・並列によるモジュール化。
4. H26 電力 問5 — 二次電池の種類・用途・浮動充電方式等の正誤判断。
5. R4下 電力 問11 — 電力需給調整と電力貯蔵、揚水・蓄電池・運転予備力の役割。

参照: 一般財団法人 電気技術者試験センター公式過去問題・公式解答、e-sysnet、電験王、電験三種まとめました。参照日2026-09-11。

## 21 N700S一次・技術資料
JR東海所属著者によるIEEJ Journal of Industry Applications 2021論文により、バッテリ自走ユニットが主にリチウムイオン電池・接触器・制御装置で構成され、通常時は補助電源装置から充電、自走時はDC 750 Vの電池を通常DC 3000 Vの主変換装置DCリンクへ接続すること、16両編成で8ユニットを搭載すること、試作車で約30 km/hまで低速自走を確認していることを根拠化している。

公開資料で確認できない電池1ユニット当たりのAh、総kWh、実運転時の電流値・継続時間・距離、セル数・具体的直並列数は真値化していない。教材計算は「教材用仮定値」と明示した数値だけを使用する。

## 21 今回の成果物
- `21_n700s_battery_self_propulsion.md`
- `21_n700s_battery_self_propulsion_explanation.pdf` — 3ページ
- `21_n700s_battery_self_propulsion_practice.pdf` — 15問、2ページ
- `21_n700s_battery_self_propulsion_images.pptx` — 6スライド

練習問題は15問中14問を五肢択一、1問を記述計算とした。`C=It`、`P=VI`、`E=Pt`、理想化した`E=VC`、直列・並列、効率、SOC、二次電池の構成・用途・浮動充電、電力貯蔵、N700S実例をカバーする。計算・論理QAとPDF/PPTXのレンダリングVisual QAはPASS。

## QA判定
21は `QA_PENDING`。最終ゲートの「公式過去問5件を保存済み正答を先に見ずに教材だけで独立再解答」が未実施のため、PASS計上・catalog登録は行わない。

## 次
topic 21 の5件を完全ブラインドで独立再解答する。5/5 PASSした場合のみsourceへ結果を記録し、catalog登録・21 PASS化へ進む。
