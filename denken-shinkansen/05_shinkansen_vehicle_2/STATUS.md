# STATUS - 新幹線車両・電験二種

更新日: 2026-09-19

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `22 / 39`
- current_status: `topic_23_practice_pdf_complete`
- last_completed_topic: `22 E5系 再粘着制御`
- active_topic: `23 N700S SiC主変換装置`
- next_start: Topic 23解説画像PowerPoint作成＋QA。固定5問・23答案要素、SPEC固定8項目、指定3可視化、仮定値／実車値境界を変更しない

## 完了済み

Topic 01〜22は最終QAまで `PASS / completed`。完成数は `22 / 39`。

## Topic 22 最終QA

判定: `PASS / COMPLETED`

- 固定過去問: 第二種一次2問＋二次3問 = `5問`
- 一次答案要素: `3 / 3 PASS`
- 二次答案要素: `8 / 8 PASS`
- 合計答案要素: `11 / 11 PASS`
- 固定5問: `5 / 5 PASS`
- clean blind候補固定後の答案変更: `0件`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- SPEC外追加: `0件`
- 未確認E5系実車値の真値化: `0件`
- 新たなexact blocker: `0件`

成果物:
- `topics/22_e5_readhesion_control/22_e5_readhesion_control.md`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_explanation_source.md`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_explanation.pdf`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_explanation_pdf_qa.md`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_practice_source.md`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_practice.pdf`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_practice_pdf_qa.md`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_images.pptx`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_powerpoint_qa.md`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_blind_reanswer_candidates_clean.md`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_blind_reanswer_official_check.md`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_final_qa.md`

### clean blind reconcile

先行 `10 / 11` 記録は、Topic 22が前提参照を許可するTopic 20フィードバック制御教材を参照範囲から外したworkerの診断だった。有効候補は公式照合前に commit `f8aa715525de8747459c27cb02254575eaeca868` で固定され、許可されたTopic 20既習内容を用いてH21二次 問4 `(5a)` を正しく導出。その後の公式照合で `11 / 11 PASS`。重複照合ファイルは削除し、`22_e5_readhesion_control_blind_reanswer_official_check.md` を公式照合記録として残す。Topic 22本文・一般式・PDF/PPTXへの追加修正は不要。

## Topic 23 制作前EXAM_ALIGNMENT

判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

- 固定過去問: 第二種一次4問＋二次1問 = `5問`
- 一次答案要素: `17`
- 二次答案要素: `6`
- 合計答案要素: `23`
- 二次記述・計算問題: `1問`
- Topic 17で検証済みの同一5問・23答案要素を再利用し、過去問再調査・再解答の重複実施はしない
- Topic 23追加責務: SiC、N700S接続、損失低減→発熱低減→冷却簡素化→小型軽量化の因果
- SPEC固定8項目: 変更なし
- SPEC指定3可視化: 変更なし
- 未確認N700S実車値の真値化: `0件`
- 新たなexact blocker: `0件`

## Topic 23 解説source

判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

- 固定5問: `5 / 5 unchanged`
- 一次答案要素: `17 / 17 covered`
- 二次答案要素: `6 / 6 covered`
- 合計: `23 / 23 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 regeneration-ready`
- 3段階例題: `3 / 3 complete`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- 新たなexact blocker: `0件`

## Topic 23 解説PDF

判定: `PASS / EXPLANATION_PDF_COMPLETE`

- A4縦: `5 pages`
- PDFium render: `5 / 5 PASS`
- Poppler render: `5 / 5 PASS`
- 文字抽出・破損グリフ: `PASS`
- 固定5問・23答案要素: `23 / 23 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- JR東海7%値のSiC単独効果化: `0件`
- 富士電機20%軽量化の車両全体への誤拡張: `0件`

成果物:
- `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter.md`
- `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_explanation_source.md`
- `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_explanation.pdf`
- `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_explanation_pdf_qa.md`

## Topic 23 練習source

判定: `PASS / PRACTICE_SOURCE_COMPLETE`

- 一次試験型: `8問`（五肢択一）
- 二次試験型: `4問`（途中式・前提・単位・理由を含む記述式）
- 合計: `12問`
- 固定5問・23答案要素: `23 / 23 connected`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化の式系・条件: `3 / 3 aligned`
- 数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- JR東海7%値のSiC単独効果化: `0件`
- 富士電機20%軽量化の車両全体への誤拡張: `0件`
- 新たなexact blocker: `0件`

成果物追加:
- `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_practice_source.md`

## Topic 23 練習PDF

判定: `PASS / PRACTICE_PDF_COMPLETE`

- A4縦: `5 pages`
- PDFium 180 dpi: `5 / 5 PASS`
- Poppler 180 dpi: `5 / 5 PASS`
- 文字抽出・破損グリフ: `PASS`
- 一次試験型: `8 / 8`
- 二次記述式: `4 / 4`
- 全問題・完全解説: `12 / 12`
- sourceから問題条件・正答・計算値の変更: `0件`
- 固定5問・23答案要素: `23 / 23 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化への接続: `3 / 3 aligned`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- JR東海7%値のSiC単独効果化: `0件`
- 富士電機20%軽量化の車両全体への誤拡張: `0件`
- 新たなexact blocker: `0件`

成果物追加:
- `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_practice.pdf`
- `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_practice_pdf_qa.md`

## Topic 21 H26二次 問1(4)

`48.0 / 48.1 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。Topic 21は `PASS / completed` のまま。

## 次工程

Topic 23解説画像PowerPoint作成＋QA。固定5問・23答案要素、SPEC固定8項目、指定3可視化、仮定値／実車値境界を変更しない。完成後clean blind独立再解答へ進む。
