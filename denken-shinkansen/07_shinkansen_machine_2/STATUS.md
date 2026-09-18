# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-19

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: `18 / 22`
- current_status: `topic_18_final_qa_pass`
- last_completed_topic: `18 速度指令を変えたら何秒で追従する？`
- active_topic: `19 PIDで新幹線の速度を制御する`
- next_start: Topic 19 制作前EXAM_ALIGNMENT

## 完了テーマ
- [x] Topic 01〜17 最終QA `PASS / completed`
- [x] Topic 18 最終QA `PASS / topic_18_final_qa_pass / completed`
- [ ] Topic 19 `NOT_STARTED` — 制作前EXAM_ALIGNMENTから開始

仕様authorityは `denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`。仕様追加はしない。

## Topic 18 固定範囲
系列 `SPEC.md` の次だけを扱った。

- 一次遅れ
- 二次遅れ
- 時定数
- 減衰係数
- 固有角周波数
- オーバーシュート
- 立上り時間
- 整定時間
- 定常偏差
- グラフ: ステップ応答、時定数変更比較、減衰係数変更比較

境界:
- Topic 19のP・PI・PD・PID制御・ゲイン調整の先取り `0件`
- Topic 20の安定判別・周波数応答の先取り `0件`
- Topic 21の空転・再粘着制御の先取り `0件`
- 未確認の新幹線実車時定数・制御ゲイン・整定時間等の実車値化 `0件`

## Topic 18 固定EXAM_ALIGNMENT
一次1問＋二次記述4問、計5問・12答案要素。

- H23 一次 機械 問7 (2) — 1答案要素
- R07 二次 機械・制御 問4 (2),(4),(5) — 4答案要素
- R06 二次 機械・制御 問4 (2),(3),(4) — 3答案要素
- R03 二次 機械・制御 問4 (3),(4) — 2答案要素
- H29 二次 機械・制御 問4 (5) — 2答案要素

## Topic 18 成果物
- [x] 解説source: `topics/18_speed_transient_response/18_speed_transient_response.md`
- [x] 解説PDF: `topics/18_speed_transient_response/18_speed_transient_response_explanation.pdf`
- [x] 解説PDF QA: `topics/18_speed_transient_response/18_speed_transient_response_explanation_pdf_qa.md`
- [x] 練習source: `topics/18_speed_transient_response/18_speed_transient_response_practice.md`
- [x] 練習PDF: `topics/18_speed_transient_response/18_speed_transient_response_practice.pdf`
- [x] 練習PDF QA: `topics/18_speed_transient_response/18_speed_transient_response_practice_pdf_qa.md`
- [x] PowerPoint: `topics/18_speed_transient_response/18_speed_transient_response_images.pptx`
- [x] PowerPoint QA: `topics/18_speed_transient_response/18_speed_transient_response_powerpoint_qa.md`
- [x] 独立再解答前ゲート: `topics/18_speed_transient_response/18_speed_transient_response_blind_reanswer_gate.md`
- [x] 答案ロック: `topics/18_speed_transient_response/18_speed_transient_response_answer_lock.md`
- [x] 完成後独立再解答: `topics/18_speed_transient_response/18_speed_transient_response_independent_reanswer.md`
- [x] 最終QA記録: `topics/18_speed_transient_response/18_speed_transient_response_final_qa.md`

## Topic 18 品質ゲート
- [x] 制作前EXAM_ALIGNMENT: PASS
- [x] 固定5問・12答案要素へ教材接続 `12 / 12 PASS`
- [x] 一次10問の正答一意性 `10 / 10 PASS`
- [x] 練習全15問の独立再計算・論理QA `15 / 15 PASS`
- [x] 完成後独立再解答 `12 / 12 PASS`
- [x] 教材外知識による補完 `0件`
- [x] 解説PDF QA: PASS
- [x] 練習PDF QA: PASS
- [x] PowerPoint QA: PASS
- [x] 仕様境界: PASS
- [x] 進捗記録整合: PASS

## Topic 18 練習PDF現行QA
- Git blob: `fb67c0ac0d3b6d9ec7656d0a759b6ac86992f242`
- SHA-256: `50fdfc549fdefd89e14577f671e5e13261a95b3141acd9cba69637f5e2d1f209`
- A4縦・3ページ、一次10問＋二次5問
- PDFium / Poppler 160 dpi表示 `3 / 3 PASS`
- 切れ・重なり・overflow・黒四角・欠落グリフ `0件`
- source中 `≈` 17箇所 / PDF抽出 `≈` 17箇所
- Unicode置換文字 `0件` / `(cid:)` `0件`

## Topic 18 最終QA
- 必須成果物: PASS
- 固定5問・12答案要素: `12 / 12 PASS`
- 完成後独立再解答: `12 / 12 PASS`
- 解説PDF・練習PDF・PowerPoint QA: PASS
- 仕様境界: PASS
- 進捗記録整合: PASS
- 最終判定: `PASS / topic_18_final_qa_pass / completed`

## 今回進めた内容
Topic 18最終QA PASSをreconcileし、main source、練習source、`STATUS.md`、`HANDOFF.md` の完成状態同期を進めた。技術本文・問題・正答・固定EXAM_ALIGNMENT・PDF/PPTX・独立再解答結果は変更していない。完成数を `18 / 22` へ更新した。

## 次工程
Topic 19「PIDで新幹線の速度を制御する」の制作前EXAM_ALIGNMENTを行う。