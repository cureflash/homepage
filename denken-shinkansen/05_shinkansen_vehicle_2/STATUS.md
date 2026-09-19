# STATUS - 新幹線車両・電験二種

更新日: 2026-09-19

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `22 / 39`
- current_status: `topic_23_blocked_current_powerpoint_zip_corrupt`
- last_completed_topic: `22 E5系 再粘着制御`
- active_topic: `23 N700S SiC主変換装置`
- next_start: 正常なTopic 23 PPTXを既存source・固定6枚構成から再生成または正しい成果物へ復元した後、同一artifactへPowerPoint全QAを再実施する。Topic 24へは進めない

## 完了済み

Topic 01〜22は最終QAまで `PASS / completed`。完成数は `22 / 39`。

## Topic 23 固定品質ゲート

- 固定過去問: 第二種一次4問＋二次1問 = `5問`
- 一次答案要素: `17 / 17 PASS`
- 二次答案要素: `6 / 6 PASS`
- 合計答案要素: `23 / 23 PASS`
- 修正後clean blind: `23 / 23 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`

## Topic 23 成果物

- 解説PDF: `PASS / RESYNCED`
- 練習PDF: `PASS / RESYNCED`
- PowerPoint: `FAIL / CURRENT_ARTIFACT_CORRUPT`

現行GitHub PPTX:

- blob SHA: `ff2c73d872da4fc3605fb30e5f67c9dc97517f5c`
- size: `12,326 bytes`
- SHA-256: `8abfe66b9dbf6f05dba212af35405abe9981b9bd017980866c03186030dde5b8`
- Git blob SHA-1再計算: GitHub blobと一致
- ZIP整合性: `FAIL` — `missing 618 bytes in zipfile`, `overlapped components`
- python-pptx open: `FAIL`
- LibreOffice: `FAIL / source file could not be loaded`
- pdftoppm表示QA: `BLOCKED`

以前のPowerPoint QAが記録した `12,944 bytes` / SHA-256 `dc5babab362325cb00ca462660cd7f9b6c1cd1f6ef6f1e36c62ffe55395ae70c` は現行GitHub artifactではないため、現行PPTXへのPASS根拠として使用しない。

## exact blocker

`Current GitHub PPTX blob ff2c73d872da4fc3605fb30e5f67c9dc97517f5c is exactly 12,326 bytes and is a malformed ZIP. python-pptx and LibreOffice cannot open it, so render/display QA cannot be completed. A valid Topic 23 PPTX must be recreated or restored without changing the fixed technical content/spec, then full PowerPoint QA must be rerun before completion.`

## Topic 21 H26二次 問1(4)

`48.0 / 48.1 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。Topic 21は `PASS / completed` のまま。

## 次工程

Topic 23は `completed` にしない。技術本文・固定EXAM_ALIGNMENT・問題・数式・SPECを変更せず、有効なPPTX artifactを確保できるまで停止する。Topic 24へは進めない。
