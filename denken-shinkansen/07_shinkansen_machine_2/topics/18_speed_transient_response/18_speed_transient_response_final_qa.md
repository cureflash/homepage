# Topic 18 最終QA記録

対象: `18 速度指令を変えたら何秒で追従する？`

更新日: 2026-09-19

## 判定

`NEEDS_REVISION / topic_18_progress_records_need_sync`。

固定EXAM_ALIGNMENT、完成後独立再解答、解説PDF、PowerPoint、仕様境界に加え、修正版の現行練習PDF再QAもPASSした。残るblockerは進捗記録同期のみであり、Topic 18はまだcompletedにしない。

## reconcile

- `MASTER_SPEC.md` / `EXAM_ALIGNMENT_SPEC.md` / 系列 `SPEC.md` と現行mainを確認した。
- 最初の未完了テーマはTopic 18。
- 固定EXAM_ALIGNMENTは一次1問＋二次4問、計5問・12答案要素のまま変更なし。
- 完成後独立再解答 `12 / 12 PASS`、教材外知識による補完 `0件`。
- 解説PDF・PowerPoint・仕様境界は既存最終QAでPASS。
- 前回blockerだった練習PDFの近似記号 `≈` 欠落グリフを生成側で修正し、現行PDF再QAを完了した。

## 現行練習PDF再QA

対象:
- Git blob: `fb67c0ac0d3b6d9ec7656d0a759b6ac86992f242`
- SHA-256: `50fdfc549fdefd89e14577f671e5e13261a95b3141acd9cba69637f5e2d1f209`
- size: `32909 byte`
- A4縦・3ページ

確認結果:
- 一次10問＋二次5問、問1〜問15: PASS
- 固定H23 / R07 / R06 / R03 / H29対応表: PASS
- 固定5問・12答案要素接続: `12 / 12 PASS`
- 一次10問正答一意性: `10 / 10 PASS`
- 全15問数値・論理: `15 / 15 PASS`
- 160 dpi表示: PDFium / Popplerの2系統で全3ページ確認、切れ・重なり・overflow・欠落グリフ `0件`
- `pdftotext -layout`: 抽出成功、Unicode置換文字 `0件`、`(cid:)` `0件`
- source中の `≈` 17箇所に対しPDF抽出も `17件`

判定: `PASS / topic_18_practice_pdf_reqa_pass`。

## EXAM_ALIGNMENT・独立再解答

- H23 一次 機械 問7 (2): `1 / 1 PASS`
- R07 二次 機械・制御 問4 (2),(4),(5): `4 / 4 PASS`
- R06 二次 機械・制御 問4 (2),(3),(4): `3 / 3 PASS`
- R03 二次 機械・制御 問4 (3),(4): `2 / 2 PASS`
- H29 二次 機械・制御 問4 (5): `2 / 2 PASS`
- 合計: `12 / 12 PASS`
- 教材外知識による補完: `0件`

判定: PASS。

## 解説PDF・PowerPoint

- 解説PDF: A4縦5ページ、表示QA `5 / 5 PASS`、文字抽出QA PASS、主要11チェックポイント `11 / 11 PASS`。
- PowerPoint: 16:9・4枚、表示QA `4 / 4 PASS`、overflow `0件`、ZIP整合性PASS、主要数値再計算PASS。

判定: PASS。

## 仕様境界

- Topic 19 PID先取り: `0件`
- Topic 20 安定判別・周波数応答先取り: `0件`
- Topic 21 再粘着制御先取り: `0件`
- 仕様外独立論点追加: `0件`
- 未確認の新幹線実車時定数・制御ゲイン・整定時間等の実車値化: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`

判定: PASS。

## 進捗記録整合

- main source `18_speed_transient_response.md` の `## 状態` と末尾 `# 次工程` は完成後実状態へ未同期。
- 練習source `18_speed_transient_response_practice.md` の末尾 `# 次工程` は未同期。
- `STATUS.md` / `HANDOFF.md` は修正版練習PDF再QA PASS後の実状態へ未同期。
- 技術本文・問題・正答・固定EXAM_ALIGNMENTを変更せず、上記4記録だけを同期する必要がある。

判定: FAIL。

## exact blocker

`現行練習PDFの表示・文字抽出・数値論理・固定12答案要素接続はPASSした。Topic 18をcompletedにする前に、main source・練習source・STATUS・HANDOFFを現状態へ同期し、最終QAを再実施する必要がある。`

## 次工程

Topic 18の進捗記録4箇所を同期する。技術本文・問題・正答・固定EXAM_ALIGNMENT・PDF/PPTX・独立再解答結果は変更しない。