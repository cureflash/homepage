# STATUS - 新幹線車両・電験三種

更新日: 2026-09-11

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 20 / 38
- current_status: `topic_21_exam_alignment_complete`
- last_completed_topic: `20 N700S② 6極誘導電動機`
- active_topic: `21 N700S③ バッテリー自走`
- next_start: topic 21の確定済みEXAM_ALIGNMENTと一次資料に基づき、解説本文と練習問題の制作へ進む

## 新品質ゲート進捗
- [x] 01〜20 — PASS
- [ ] 21 N700S③ バッテリー自走 — 制作前EXAM_ALIGNMENT・N700S一次資料確認まで完了。本文・練習・PDF/PPTX・独立過去問再解答は未着手

## 20 QA判定
20: `PASS`。EXAM_ALIGNMENT、本文、15問練習、独立QA、解説PDF・練習PDF・PPTX、GitHub上の4成果物実在確認、Web catalog登録まで完了。2026-09-11にmain上の`qualifications/denken-shinkansen/catalog.json`と4成果物への参照整合を確認した。

## 21 EXAM_ALIGNMENT
公式過去問5件:
1. H30 機械 問12 — リチウムイオン二次電池の構成、放電時のリチウムイオン移動、セル電圧。
2. R3 機械 問12 — 鉛蓄電池の充放電反応、電圧回復、過充電。
3. H28 機械 問12 — 一次・二次電池、イオンと電子の移動、酸化還元、出力インピーダンス、開放電圧。
4. R4上 機械 問12 — ナトリウム－硫黄電池、セル電圧、直並列接続とモジュール化。
5. R4下 電力 問11 — 電力需給平準化と蓄電池などの電力貯蔵装置。

正本は電気技術者試験センター公式過去問題・公式解答。参考教材としてe-sysnetの直流回路・電力/電力量解説、でんけんマッスルの電池理論、電気の神髄の年度別出題一覧を照合した。参照日2026-09-11。

## 21 N700S一次資料
東芝インフラシステムズの2018年・2020年公式資料とJR Central向け事例から、N700SでSCiBを用いたバッテリー自走システムが採用され、長時間停電時に避難しやすい場所まで自力走行する用途、通常時の充電経路と自走時の推進系への給電経路を確認した。

公開一次資料で確認できない総電圧、総Ah、総Wh、セル数、直並列数、自走時電力、自走距離は実値化しない。

## 21 制作状態
- `topics/21_n700s_battery_self_propulsion/21_n700s_battery_self_propulsion.md` — EXAM_ALIGNMENTと一次資料根拠を作成
- 解説本文 — 未着手
- 練習問題 — 未着手
- 解説PDF — 未着手
- 練習PDF — 未着手
- PowerPoint — 未着手
- 独立過去問再解答 — 未着手

## Web公開
20はcatalog登録済み。21は品質ゲート未完了のためcatalog未登録。

## 次
21の解説本文と12問以上の本試験型練習問題を、確定済みEXAM_ALIGNMENTから作成する。N700S固有の未公開数値は使わず、計算問題では仮定値と明示する。