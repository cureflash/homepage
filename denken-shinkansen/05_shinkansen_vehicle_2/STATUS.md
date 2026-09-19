# STATUS - 新幹線車両・電験二種

更新日: 2026-09-19

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `22 / 39`
- current_status: `topic_23_final_qa_blocked_powerpoint_artifact_identity`
- last_completed_topic: `22 E5系 再粘着制御`
- active_topic: `23 N700S SiC主変換装置`
- next_start: 現行Topic 23 PowerPoint本体に対してbyte size・SHA-256・PPTX open/ZIP・LibreOffice変換・pdftoppm表示QAを再実施し、PowerPoint QAの成果物識別情報をreconcileする

## 完了済み

Topic 01〜22は最終QAまで `PASS / completed`。完成数は `22 / 39`。

## Topic 23 固定品質ゲート

- 固定過去問: 第二種一次4問＋二次1問 = `5問`
- 一次答案要素: `17`
- 二次答案要素: `6`
- 合計答案要素: `23`
- SPEC固定8項目・指定3可視化: 変更なし
- 固定EXAM_ALIGNMENT変更: `0件`
- 未確認N700S実車値の真値化: `0件`

## Topic 23 clean blind初回

判定: `FAIL / NEEDS_REVISION`（候補ファイルは変更しない）

- 候補固定commit: `17837d40774f12e8348e9b55f250d5573b35f901`
- R7一次 問4: `5 / 5 PASS`
- R4一次 問4: `5 / 5 PASS`
- R2一次 問2: `3 / 5 PASS`
- H24一次 問6 `(2),(3)`: `2 / 2 PASS`
- H24二次 問1: `6 / 6 PASS`
- 一次合計: `15 / 17 PASS`
- 二次合計: `6 / 6 PASS`
- 総合: `21 / 23 PASS`
- 不一致はR2一次問2 `(2),(4)` の2点だけ

## Topic 23 clean blind補強

補強済み:

1. R2一次問2 `(2)`: 「矢印極性→状態表→平均値」、固定図では `V=D V_dc`
2. R2一次問2 `(4)`: `p(t)` 三角波を積分し `W_off=(1/2)V_dc I_dc T_2`
3. 練習一次問4の `VI t_s/6` は相補的直線ランプ条件だけに限定
4. 一般式 `E_sw=∫v(t)i(t)dt` は変更しない

## Topic 23 成果物再同期

- 解説PDF: `PASS / EXPLANATION_PDF_RESYNC_COMPLETE`
  - A4縦 `5 pages`
  - clean blind補強2点 `2 / 2 PASS`
  - 固定5問・23答案要素 `23 / 23 covered`
- 練習PDF: `PASS / PRACTICE_PDF_RESYNC_COMPLETE`
  - A4縦 `5 pages`
  - clean blind補強2点 `2 / 2 PASS`
  - 一次8問＋二次4問 `12 / 12`
  - 固定5問・23答案要素 `23 / 23 covered`
- PowerPoint QA記録:
  - `PASS / POWERPOINT_RESYNC_COMPLETE`
  - 16:9 `6 slides`
  - 記録ファイルサイズ `12,944 bytes`
  - 記録SHA-256 `dc5babab362325cb00ca462660cd7f9b6c1cd1f6ef6f1e36c62ffe55395ae70c`
  - R2読図補強2点 `2 / 2 PASS`
  - 固定5問・23答案要素 `23 / 23 covered`
  - SPEC固定8項目 `8 / 8 covered`
  - SPEC指定3可視化 `3 / 3 PASS`
  - LibreOffice / pdftoppm表示QA `6 / 6 PASS`

## Topic 23 修正後clean blind

判定: `PASS / 23_OF_23`

- 候補固定commit: `5d28e38e9151edc9d2ca3e309783aea2e6b9272f`
- R7一次: `5 / 5 PASS`
- R4一次: `5 / 5 PASS`
- R2一次: `5 / 5 PASS`
- H24一次: `2 / 2 PASS`
- H24二次: `6 / 6 PASS`
- 一次合計: `17 / 17 PASS`
- 二次合計: `6 / 6 PASS`
- 総合: `23 / 23 PASS`
- 固定候補後編集: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- SPEC外追加: `0件`

## Topic 23 最終QA

判定: `BLOCKED / POWERPOINT_ARTIFACT_IDENTITY_MISMATCH`

- 最終QA: `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_final_qa.md`
- 現行GitHub PPTX blob: `ff2c73d872da4fc3605fb30e5f67c9dc97517f5c`
- 現行GitHub PPTX size: `12,326 bytes`
- PowerPoint QA記録size: `12,944 bytes`
- PowerPoint本体とQAの最新更新commit: `3d8608c3af48e9ea81e1534927fb8cdb09e065a5`
- 固定5問・23答案要素: `23 / 23 PASS`
- 解説PDF / 練習PDF: `PASS / synced`
- PowerPoint artifact identity: `BLOCKED`
- SPEC固定8項目: `8 / 8 PASS`
- SPEC指定3可視化: `3 / 3 PASS`
- 仮定値／実車値境界: `PASS`
- 新規exact blocker: `1件`

exact blocker:

`Current GitHub PPTX is 12,326 bytes, while the authoritative PowerPoint QA records 12,944 bytes. Recompute the current PPTX byte size and SHA-256, rerun PPTX open/ZIP/render/display QA against that exact artifact, and reconcile the QA record before completion.`

## Topic 21 H26二次 問1(4)

`48.0 / 48.1 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。Topic 21は `PASS / completed` のまま。

## 次工程

Topic 23はまだ `completed` にしない。現行 `23_n700s_sic_main_converter_images.pptx` そのものへ識別情報・表示QAを再実施し、PowerPoint QAをreconcileする。技術本文・固定EXAM_ALIGNMENT・問題・数式・SPECは変更しない。Topic 24へは進めない。
