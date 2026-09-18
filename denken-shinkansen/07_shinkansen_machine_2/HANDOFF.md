# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-19

## 現在地
- Topic 01〜18: 最終QA `PASS / completed`
- 完成数: `18 / 22`
- active topic: `19 PIDで新幹線の速度を制御する`
- current status: `topic_18_final_qa_pass`
- 次工程: Topic 19 制作前EXAM_ALIGNMENT

仕様authorityは `denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`。仕様追加はしない。

## reconcile結果
- 最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、Topic 18成果物・最終QAを確認した。
- Topic 18は最終QA `PASS / topic_18_final_qa_pass / completed`。
- 固定EXAM_ALIGNMENTは一次1問＋二次4問、計5問・12答案要素のまま変更なし。
- 完成後独立再解答 `12 / 12 PASS`、教材外知識補完 `0件`。
- 解説PDF・練習PDF・PowerPoint QA、仕様境界、進捗記録整合は全PASS。
- main source、練習source、`STATUS.md`、`HANDOFF.md` の完成状態だけを同期した。
- 技術本文・問題・正答・固定EXAM_ALIGNMENT・PDF/PPTX・独立再解答結果は変更していない。
- 最初の未完了テーマはTopic 19「PIDで新幹線の速度を制御する」。

## Topic 18 固定範囲
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

Topic 19のPID、Topic 20の安定判別・周波数応答、Topic 21の再粘着制御はTopic 18へ先取りしていない。未確認の新幹線実車時定数・制御ゲイン・整定時間等も使用していない。

## Topic 18 固定EXAM_ALIGNMENT
- H23 一次 機械 問7 (2) — 1答案要素
- R07 二次 機械・制御 問4 (2),(4),(5) — 4答案要素
- R06 二次 機械・制御 問4 (2),(3),(4) — 3答案要素
- R03 二次 機械・制御 問4 (3),(4) — 2答案要素
- H29 二次 機械・制御 問4 (5) — 2答案要素

一次1問＋二次4問、計5問・12答案要素。

## Topic 18 成果物
- 解説source: `topics/18_speed_transient_response/18_speed_transient_response.md`
- 解説PDF: `topics/18_speed_transient_response/18_speed_transient_response_explanation.pdf`
- 解説PDF QA: `topics/18_speed_transient_response/18_speed_transient_response_explanation_pdf_qa.md`
- 練習source: `topics/18_speed_transient_response/18_speed_transient_response_practice.md`
- 練習PDF: `topics/18_speed_transient_response/18_speed_transient_response_practice.pdf`
- 練習PDF QA: `topics/18_speed_transient_response/18_speed_transient_response_practice_pdf_qa.md`
- PowerPoint: `topics/18_speed_transient_response/18_speed_transient_response_images.pptx`
- PowerPoint QA: `topics/18_speed_transient_response/18_speed_transient_response_powerpoint_qa.md`
- 独立再解答前ゲート: `topics/18_speed_transient_response/18_speed_transient_response_blind_reanswer_gate.md`
- 答案ロック: `topics/18_speed_transient_response/18_speed_transient_response_answer_lock.md`
- 独立再解答: `topics/18_speed_transient_response/18_speed_transient_response_independent_reanswer.md`
- 最終QA記録: `topics/18_speed_transient_response/18_speed_transient_response_final_qa.md`

## Topic 18 品質ゲート
- 制作前EXAM_ALIGNMENT: `PASS`
- 固定5問・12答案要素接続: `12 / 12 PASS`
- 一次10問正答一意性: `10 / 10 PASS`
- 練習全15問独立再計算・論理QA: `15 / 15 PASS`
- 完成後独立再解答: `12 / 12 PASS`
- 教材外知識補完: `0件`
- 解説PDF QA: `PASS`
- 練習PDF QA: `PASS`
- PowerPoint QA: `PASS`
- 仕様境界: `PASS`
- 進捗記録整合: `PASS`

## Topic 18 練習PDF現行QA
- Git blob: `fb67c0ac0d3b6d9ec7656d0a759b6ac86992f242`
- PDF SHA-256: `50fdfc549fdefd89e14577f671e5e13261a95b3141acd9cba69637f5e2d1f209`
- A4縦・3ページ、一次10問＋二次5問
- PDFium / Poppler表示 `3 / 3 PASS`
- 欠落グリフ `0件`
- source中 `≈` 17箇所 / PDF抽出 `≈` 17箇所

## Topic 18 最終判定
`PASS / topic_18_final_qa_pass / completed`

完成数は `18 / 22`。Topic 18の技術成果物は変更せず、完成状態の進捗表記だけを同期した。

## 次に行うこと
Topic 19「PIDで新幹線の速度を制御する」の制作前EXAM_ALIGNMENTを行う。