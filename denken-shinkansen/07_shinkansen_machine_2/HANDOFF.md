# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-19

## 現在地
- Topic 01〜17: 最終QA `PASS / completed`
- 完成数: `17 / 22`
- active topic: `18 速度指令を変えたら何秒で追従する？`
- current status: `topic_18_progress_records_synced`
- 次工程: Topic 18 最終QA再実施

仕様authorityは `denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`。仕様追加はしない。

## reconcile結果
- 最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、Topic 18成果物を確認した。
- 最初の未完了テーマはTopic 18「速度指令を変えたら何秒で追従する？」。
- 固定EXAM_ALIGNMENTは一次1問＋二次4問、計5問・12答案要素のまま。
- 完成後独立再解答 `12 / 12 PASS`、教材外知識補完 `0件`。
- 解説PDF・PowerPoint・仕様境界はPASS。
- 練習PDFは `≈` 欠落グリフ修正後の現行blob `fb67c0ac0d3b6d9ec7656d0a759b6ac86992f242` に対して再QA済み。表示・文字抽出・数値論理・固定12答案要素接続は全PASS。
- main source `## 状態`、main source末尾 `# 次工程`、練習source末尾 `# 次工程`、`STATUS.md` / `HANDOFF.md` を現状態へ同期した。
- 技術本文・問題・正答・固定EXAM_ALIGNMENT・解説PDF・PowerPoint・独立再解答結果は変更していない。

## Topic 17 最終状態
- 固定一次1問＋二次4問、計5問・6答案要素
- 独立再解答 `6 / 6 PASS`
- 必須成果物、各QA、仕様境界、進捗整合: PASS
- 判定: `PASS / topic_17_final_qa_pass / completed`

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

Topic 19のPID、Topic 20の安定判別・周波数応答、Topic 21の再粘着制御は先取りしない。Topic 17の伝達関数・ブロック線図は既習事項として必要最小限だけ使う。未確認の新幹線実車時定数・制御ゲイン・整定時間等は使用しない。

## Topic 18 固定EXAM_ALIGNMENT
- H23 一次 機械 問7 (2) — 1答案要素
- R07 二次 機械・制御 問4 (2),(4),(5) — 4答案要素
- R06 二次 機械・制御 問4 (2),(3),(4) — 3答案要素
- R03 二次 機械・制御 問4 (3),(4) — 2答案要素
- H29 二次 機械・制御 問4 (5) — 2答案要素

一次1問＋二次4問、計5問。品質ゲート対象は12答案要素。

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

## Topic 18 品質ゲート状況
- 制作前EXAM_ALIGNMENT: `PASS`
- 固定5問・12答案要素接続: `12 / 12 PASS`
- 一次10問正答一意性: `10 / 10 PASS`
- 練習全15問の独立再計算・論理QA: `15 / 15 PASS`
- 完成後独立再解答: `12 / 12 PASS`
- 解説PDF QA: `PASS`
- PowerPoint QA: `PASS`
- 仕様境界: `PASS`

## Topic 18 最終QA（前回）
- 必須成果物: PASS
- 固定5問・12答案要素: PASS
- 完成後独立再解答: PASS
- 解説PDF・PowerPoint QA: PASS
- 練習PDF QA: FAIL — 当時の現行PDFと既存QA対象のblob不一致
- 進捗記録整合: FAIL — main source `## 状態`、main source末尾 `# 次工程`、練習source末尾 `# 次工程` が旧工程
- 判定: `NEEDS_REVISION / topic_18_final_qa_needs_revision / IN_PROGRESS`

## Topic 18 練習PDF再QA
- 現行PDF Git blob: `fb67c0ac0d3b6d9ec7656d0a759b6ac86992f242`
- PDF SHA-256: `50fdfc549fdefd89e14577f671e5e13261a95b3141acd9cba69637f5e2d1f209`
- A4縦・3ページ、一次10問＋二次5問
- 160 dpi全3ページをPDFium / Popplerで表示確認: `3 / 3 PASS`
- 切れ・重なり・overflow・黒四角・欠落グリフ: `0件`
- source中 `≈` 17箇所 / PDF抽出 `≈` 17箇所
- Unicode置換文字 `0件` / `(cid:)` `0件`
- 一次正答一意性 `10 / 10 PASS`
- 全15問数値・論理QA `15 / 15 PASS`
- 固定5問・12答案要素接続 `12 / 12 PASS`
- 判定: `PASS / topic_18_practice_pdf_reqa_pass / IN_PROGRESS`

## Topic 18 進捗記録同期
- main source `## 状態`: 現行練習PDF再QA PASS後の実状態へ同期済み
- main source末尾 `# 次工程`: Topic 18最終QA再実施へ同期済み
- 練習source末尾 `# 次工程`: Topic 18最終QA再実施へ同期済み
- `STATUS.md` / `HANDOFF.md`: 同状態へ同期済み
- 技術本文・問題・正答・固定EXAM_ALIGNMENT・解説PDF・PowerPoint・独立再解答結果の変更: `0件`
- 判定: `PASS / topic_18_progress_records_synced / IN_PROGRESS`

## 次に行うこと
Topic 18最終QAを再実施する。