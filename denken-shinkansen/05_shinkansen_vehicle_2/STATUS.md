# STATUS - 新幹線車両・電験二種

更新日: 2026-09-20

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `23 / 39`
- current_status: `topic_24_powerpoint_blocked_artifact_identity`
- last_completed_topic: `23 N700S SiC主変換装置`
- active_topic: `24 N700S 主電動機設計の比較`
- next_start: Topic 24 PowerPointのartifact identity blocker解消。GitHub正本PPTXをQA済み最終artifactと一致させ、正本に対して構造・表示QAを再確認する。解消前はclean blindへ進まない

## 完了済み

Topic 01〜23は最終QAまで `PASS / completed`。完成数は `23 / 39`。

## Topic 24 解説画像PowerPoint

- 判定: `BLOCKED / ARTIFACT_IDENTITY_MISMATCH`
- QA済みローカルartifact: 16:9 / `6 slides` / `27,698 bytes`
- QA済みローカルSHA-256: `9d551c8110e7bd3081f7219d6d85e66f23f859d02ff4326ebf70ec51f3eca4f8`
- ローカル構造・表示QA: ZIP / python-pptx / LibreOffice / Poppler / PDFium / contact sheet = `PASS`
- ローカル内容QA: 固定5問・17答案要素 `17 / 17 covered`
- SPEC必須8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- GitHub main現行PPTX: `24,879 bytes`
- GitHub blob SHA: `5aa5cd61b81bc1d941d9d628c7abbc7af2bf536d`
- artifact identity: `FAIL` (`27,698 != 24,879 bytes`)
- GitHub正本PPTXへのローカル表示QA流用: `禁止 / 未確定`
- Topic 21 H26二次 問1(4)の丸め注記: `48.1 / 48.0 N·m` を過去問固有差として維持
- Topic 21一般式変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外主題追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- 完成後clean blind固定過去問再解答: `未実施`

exact blocker:
`GitHub main上のPPTX (24,879 bytes) と、最終表示QAを通したローカルPPTX (27,698 bytes, SHA-256 9d551c...) のartifact identityが不一致。GitHub正本PPTXについて同一性または独立表示QAを確定できていない。`

成果物:
- `topics/24_n700s_main_motor_design_comparison/24_n700s_main_motor_design_comparison_images.pptx`
- `topics/24_n700s_main_motor_design_comparison/24_n700s_main_motor_design_comparison_powerpoint_qa.md`

Topic 24全体は `completed` としない。

## Topic 24 練習PDF

- 判定: `PASS / PRACTICE_PDF_COMPLETE`
- A4縦: `5 pages`
- PDFium 180 dpi: `5 / 5 PASS`
- Poppler 180 dpi: `5 / 5 PASS`
- 文字抽出・破損グリフ: `PASS`
- 一次試験型: `8 / 8`
- 五肢択一: `8 / 8`
- 二次記述式: `4 / 4`
- 全問題・完全解説: `12 / 12`
- sourceから問題条件・正答・計算値の変更: `0件`
- 固定過去問: 第二種一次3問＋二次2問 = `5 / 5 covered`
- 一次答案要素: `11 / 11 covered`
- 二次答案要素: `6 / 6 covered`
- 合計答案要素: `17 / 17 covered`
- SPEC必須8項目: `8 / 8 covered`
- SPEC指定3可視化の計算系: `3 / 3 aligned`
- N700S実車接続: 確認済み6極化のみを実値として使用
- 軽量化境界: 駆動システム全体約20%であり、主電動機単体・6極化単独の20%とは扱わない
- 未確認N700S実運転周波数・回転速度・トルク・寸法・質量の真値化: `0件`
- Topic 21 H26二次 問1(4)の丸め注記: `48.1 / 48.0 N·m` を過去問固有差として維持
- Topic 21一般式変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外主題追加: `0件`
- 完成後clean blind固定過去問再解答: `未実施`
- 新たなexact blocker: `0件`
- SHA-256: `6905e73122ac1904ec0d4dd47561aba0875fe3687ba9b8c9dd7d08d867775b5b`

成果物:
- `topics/24_n700s_main_motor_design_comparison/24_n700s_main_motor_design_comparison_practice.pdf`
- `topics/24_n700s_main_motor_design_comparison/24_n700s_main_motor_design_comparison_practice_pdf_qa.md`

## Topic 24 練習source

- 判定: `PASS / PRACTICE_SOURCE_COMPLETE`
- 一次試験型: `8問`（五肢択一）
- 二次試験型: `4問`（途中式・前提・単位・理由を含む記述式）
- 合計: `12問`
- 固定過去問: 第二種一次3問＋二次2問 = `5 / 5 connected`
- 一次答案要素: `11 / 11 connected`
- 二次答案要素: `6 / 6 connected`
- 合計答案要素: `17 / 17 connected`
- SPEC必須8項目: `8 / 8 covered`
- SPEC指定3可視化の計算系: `3 / 3 aligned`
- 数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- N700S実車接続: 確認済み6極化のみを実値として使用
- 軽量化境界: 駆動システム全体約20%であり、主電動機単体・6極化単独の20%とは扱わない
- 未確認N700S実運転周波数・回転速度・トルク・寸法・質量の真値化: `0件`
- Topic 21 H26二次 問1(4)の丸め注記: `48.1 / 48.0 N·m` を過去問固有差として維持
- Topic 21一般式変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外主題追加: `0件`
- 完成後clean blind固定過去問再解答: `未実施`
- 新たなexact blocker: `0件`

成果物:
- `topics/24_n700s_main_motor_design_comparison/24_n700s_main_motor_design_comparison_practice_source.md`

## Topic 24 解説PDF

- 判定: `PASS / EXPLANATION_PDF_COMPLETE`
- A4縦: `6 pages`
- PDFium render: `6 / 6 PASS`
- Poppler render: `6 / 6 PASS`
- 置換文字 `�`: `0件`
- クリッピング・文字重なり・破損グリフ: `0件`
- 固定過去問: 第二種一次3問＋二次2問 = `5 / 5 covered`
- 一次答案要素: `11 / 11 covered`
- 二次答案要素: `6 / 6 covered`
- 合計答案要素: `17 / 17 covered`
- SPEC必須8項目: `8 / 8 covered`
- SPEC指定可視化: `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`
- N700S実車接続: 富士電機一次資料で主電動機6極化を確認
- 軽量化境界: 駆動システム全体約20%であり、主電動機単体・6極化単独の20%とは扱わない
- 未確認N700S実運転周波数・回転速度・トルク・寸法・質量の真値化: `0件`
- Topic 21 H26二次 問1(4)の丸め注記: `48.1 / 48.0 N·m` を過去問固有差として維持
- Topic 21一般式変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 新たなexact blocker: `0件`
- SHA-256: `c8cb9bd229f871e96667c5f845bcad8dfbdd7ecee2ceef7a01bd1bd95fe1aef8`

成果物:
- `topics/24_n700s_main_motor_design_comparison/24_n700s_main_motor_design_comparison_explanation.pdf`
- `topics/24_n700s_main_motor_design_comparison/24_n700s_main_motor_design_comparison_explanation_pdf_qa.md`

## Topic 24 解説source

- 判定: `PASS / EXPLANATION_SOURCE_COMPLETE`
- 固定過去問: 第二種一次3問＋二次2問 = `5問`
- 一次説明責務: `11 / 11 covered`
- 二次説明責務: `6 / 6 covered`
- 合計説明責務: `17 / 17 covered`
- SPEC必須8項目: `8 / 8 covered`
- SPEC指定可視化: `3 / 3 defined`
- 3段階例題: `3 / 3`
- N700S実車接続: 富士電機一次資料で主電動機6極化を確認
- 軽量化境界: SiC主変換装置＋主電動機6極化＋主変圧器冷却方式見直しを合わせ、駆動システム全体で約20%軽量化。主電動機単独・6極化単独の20%とは扱わない
- 未確認N700S実運転周波数・回転速度・トルク・寸法・質量の真値化: `0件`
- Topic 10/12の独立主題再展開: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- 新たなexact blocker: `0件`

成果物:
- `topics/24_n700s_main_motor_design_comparison/24_n700s_main_motor_design_comparison.md`
- `topics/24_n700s_main_motor_design_comparison/24_n700s_main_motor_design_comparison_explanation_source.md`

## Topic 24 制作前EXAM_ALIGNMENT

- 判定: `PASS / EXAM_ALIGNMENT_COMPLETE`
- 固定過去問: 第二種一次3問＋二次2問 = `5問`
- 一次答案要素: `11`
- 二次答案要素: `6`
- 合計答案要素: `17`
- 既存検証再利用: Topic 10・12の4問・13答案要素
- 新規検証: R7二次「機械・制御」問2 `(1),(3)` = `4 / 4 PASS`
- 新規問題の公式標準解答照合: `4 / 4一致`
- 電気角: 固定第二種過去問答案要素とは主張せず、SPEC必須一般関係 `θ_e=(P/2)θ_m` として収録
- 重複再調査・再解答: `0件`

固定問題:

1. R7 一次「機械」問2 `(1)〜(5)` — Topic 10検証済み
2. R4 一次「機械」問2 `(3)〜(5)` — Topic 12検証済み
3. R2 一次「機械」問3 `(1),(4),(5)` — Topic 12検証済み
4. R3 二次「機械・制御」問1 `(3),(4)` — Topic 10検証済み
5. R7 二次「機械・制御」問2 `(1),(3)` — 新規検証済み

Topic 24完成後はTopic 24教材だけで固定 `5問・17答案要素` をclean blind独立再解答する。

## Topic 23 最終品質ゲート

- 固定過去問: 第二種一次4問＋二次1問 = `5 / 5 PASS`
- 合計答案要素: `23 / 23 PASS`
- 修正後clean blind: `23 / 23 PASS`
- 解説PDF: `PASS / EXPLANATION_PDF_RESYNC_COMPLETE`
- 練習PDF: `PASS / PRACTICE_PDF_RESYNC_COMPLETE`
- PowerPoint: `PASS / POWERPOINT_RECOVERY_COMPLETE`
- 最終QA: `PASS / COMPLETED`

## Topic 21 H26二次 問1(4)

`48.0 / 48.1 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。Topic 21は `PASS / completed` のまま。

## 次工程

Topic 24 PowerPointのartifact identity blocker解消。GitHub正本PPTXをQA済み最終artifactと一致させ、その正本に対して構造・表示QAを再確認する。解消前はclean blindへ進まない。
