# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-19

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: `17 / 22`
- current_status: `topic_18_progress_records_synced`
- last_completed_topic: `17 新幹線の速度をフィードバック制御する`
- active_topic: `18 速度指令を変えたら何秒で追従する？`
- next_start: Topic 18 最終QA再実施

## 完了テーマ
- [x] Topic 01〜17 最終QA `PASS / completed`
- [ ] Topic 18 `IN_PROGRESS` — 必須成果物、独立再解答、現行練習PDF再QAまでPASS。進捗記録同期済み。最終QA再実施待ち。

仕様authorityは `denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`。仕様追加はしない。

## Topic 17 最終状態
- 固定一次1問＋二次記述4問、計5問・6答案要素
- 完成後独立再解答 `6 / 6 PASS`
- 解説PDF・練習PDF・PowerPoint QA、仕様境界、進捗整合: PASS
- 最終判定: `PASS / topic_17_final_qa_pass / completed`

## Topic 18 固定範囲
系列 `SPEC.md` の次だけを扱う。

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
- Topic 19のP・PI・PD・PID制御・ゲイン調整を独立論点として追加しない。
- Topic 20の安定判別・周波数応答を独立論点として追加しない。
- Topic 21の空転・再粘着制御を先取りしない。
- Topic 17の伝達関数・ブロック線図は既習事項として必要最小限だけ再使用する。
- 未確認の新幹線実車時定数・制御ゲイン・整定時間等を実車値として置かない。

## Topic 18 固定EXAM_ALIGNMENT
一次1問＋二次記述4問、計5問・12答案要素を品質ゲート対象とする。

- H23 一次 機械 問7 (2) — 1答案要素
- R07 二次 機械・制御 問4 (2),(4),(5) — 4答案要素
- R06 二次 機械・制御 問4 (2),(3),(4) — 3答案要素
- R03 二次 機械・制御 問4 (3),(4) — 2答案要素
- H29 二次 機械・制御 問4 (5) — 2答案要素

## Topic 18 制作前EXAM_ALIGNMENT
- [x] R08一次「機械」まで直近年度から公式過去問を確認
- [x] 一次1問＋二次記述4問、計5問・12答案要素を固定
- [x] 二次記述・計算問題を4問含む
- [x] 参考教材2系統以上を確認
- [x] Topic 19〜21先取り、仕様外独立論点、未確認実車値追加 `0件`
- [x] 固定問題の正答記号・最終数値保存 `0件`
- 判定: `PASS / topic_18_exam_alignment_complete / IN_PROGRESS`

## Topic 18 成果物
- [x] 解説source: `topics/18_speed_transient_response/18_speed_transient_response.md`
- [x] 解説PDF: `topics/18_speed_transient_response/18_speed_transient_response_explanation.pdf`
- [x] 練習source: `topics/18_speed_transient_response/18_speed_transient_response_practice.md`
- [x] 練習PDF: `topics/18_speed_transient_response/18_speed_transient_response_practice.pdf`
- [x] PowerPoint: `topics/18_speed_transient_response/18_speed_transient_response_images.pptx`
- [x] 独立再解答前ゲート: `topics/18_speed_transient_response/18_speed_transient_response_blind_reanswer_gate.md`
- [x] 答案ロック: `topics/18_speed_transient_response/18_speed_transient_response_answer_lock.md`
- [x] 完成後独立再解答: `topics/18_speed_transient_response/18_speed_transient_response_independent_reanswer.md`
- [x] 最終QA記録: `topics/18_speed_transient_response/18_speed_transient_response_final_qa.md`
- [x] 練習PDF再QA: `topics/18_speed_transient_response/18_speed_transient_response_practice_pdf_qa.md`

## Topic 18 品質ゲート
- [x] 固定5問・12答案要素へ教材接続 `12 / 12 PASS`
- [x] 一次10問の正答一意性 `10 / 10 PASS`
- [x] 練習全15問の独立再計算・論理QA `15 / 15 PASS`
- [x] 完成後独立再解答 `12 / 12 PASS`
- [x] 教材外知識による補完 `0件`
- [x] 解説PDF QA: PASS
- [x] PowerPoint QA: PASS
- [x] 仕様境界: PASS

## Topic 18 最終QA（前回）
- 必須成果物実在: PASS
- 固定5問・12答案要素: PASS
- 完成後独立再解答: PASS
- 解説PDF・PowerPoint QA: PASS
- 練習PDF QA: FAIL — 当時の現行PDF blobと既存QA対象blobが不一致
- 進捗記録整合: FAIL — main source `## 状態`、main source末尾 `# 次工程`、練習source末尾 `# 次工程` が旧工程
- 判定: `NEEDS_REVISION / topic_18_final_qa_needs_revision / IN_PROGRESS`

## Topic 18 練習PDF再QA
- [x] 現行PDF blob `fb67c0ac0d3b6d9ec7656d0a759b6ac86992f242` を再QA
- [x] A4縦・3ページ、一次10問＋二次5問
- [x] 160 dpi全3ページをPDFium / Popplerの2系統で表示確認 `3 / 3 PASS`
- [x] 文字・表の切れ、重なり、overflow、黒四角・欠落グリフ `0件`
- [x] source中 `≈` 17箇所 / PDF抽出 `≈` 17箇所
- [x] Unicode置換文字 `0件` / `(cid:)` `0件`
- [x] 一次正答一意性 `10 / 10 PASS`
- [x] 全15問数値・論理QA `15 / 15 PASS`
- [x] 固定5問・12答案要素接続 `12 / 12 PASS`
- [x] PDF SHA-256 `50fdfc549fdefd89e14577f671e5e13261a95b3141acd9cba69637f5e2d1f209`
- 判定: `PASS / topic_18_practice_pdf_reqa_pass / IN_PROGRESS`

## Topic 18 進捗記録同期
- [x] main source `## 状態` を現行練習PDF再QA PASS後の実状態へ同期
- [x] main source末尾 `# 次工程` をTopic 18最終QA再実施へ同期
- [x] 練習source末尾 `# 次工程` をTopic 18最終QA再実施へ同期
- [x] `STATUS.md` / `HANDOFF.md` を同状態へ同期
- [x] 技術本文・問題・正答・固定EXAM_ALIGNMENT・解説PDF・PowerPoint・独立再解答結果の変更 `0件`
- 判定: `PASS / topic_18_progress_records_synced / IN_PROGRESS`

## 今回進めた内容
前回blockerだった現行練習PDFの再QA PASSを正本へ反映し、Topic 18のmain source、練習source、`STATUS.md`、`HANDOFF.md` の進捗記録を実状態へ同期した。完成数は `17 / 22` のまま。

## 次工程
Topic 18最終QAを再実施する。