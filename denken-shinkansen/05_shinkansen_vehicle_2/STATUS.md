# STATUS - 新幹線車両・電験二種

更新日: 2026-09-19

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `22 / 39`
- current_status: `topic_23_practice_pdf_resync_complete`
- last_completed_topic: `22 E5系 再粘着制御`
- active_topic: `23 N700S SiC主変換装置`
- next_start: Topic 23 PowerPointを既存6枚構成の範囲で必要最小限再生成し、R2読図補強2点を同期して表示・内容QAする

## 完了済み

Topic 01〜22は最終QAまで `PASS / completed`。完成数は `22 / 39`。

## Topic 22 最終QA

判定: `PASS / COMPLETED`

- 固定過去問: 第二種一次2問＋二次3問 = `5問`
- 一次答案要素: `3 / 3 PASS`
- 二次答案要素: `8 / 8 PASS`
- 合計答案要素: `11 / 11 PASS`
- clean blind: `11 / 11 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- SPEC外追加: `0件`

## Topic 23 制作前EXAM_ALIGNMENT

判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

- 固定過去問: 第二種一次4問＋二次1問 = `5問`
- 一次答案要素: `17`
- 二次答案要素: `6`
- 合計答案要素: `23`
- 二次記述・計算問題: `1問`
- Topic 17で検証済みの同一5問・23答案要素を再利用し、過去問再調査・再解答の重複実施はしない
- Topic 23追加責務: SiC、N700S接続、損失低減→発熱低減→冷却簡素化→小型軽量化の因果
- SPEC固定8項目・指定3可視化: 変更なし
- 未確認N700S実車値の真値化: `0件`

## Topic 23 source

判定: `PASS / SOURCE_REMEDIATION_COMPLETE`

- 解説source: `23 / 23 covered`、clean blind不一致2点を補強済み
- 練習source: 一次8問＋二次4問、固定23答案要素 `23 / 23 connected`
- 固定R2一次問2 `(2)`: 「矢印極性→状態表→平均値」を追加し `V=D V_dc` を明示
- 固定R2一次問2 `(4)`: `p(t)` 三角波をそのまま積分し `W_off=(1/2)V_dc I_dc T_2` を明示
- 練習一次問4の `VI t_s/6`: 当該相補的直線ランプ条件だけに限定
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式 `E_sw=∫v(t)i(t)dt` 変更: `0件`
- SPEC外追加: `0件`
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
- 候補固定後の答案変更: `0件`
- 不一致はR2一次問2 `(2),(4)` の2点だけで、source補強済み

## Topic 23 clean blind補強 同期要否QA

判定: `SYNC_REQUIRED / 3 ARTIFACTS`

正本QA:
- `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_post_blind_artifact_sync_qa.md`
- QA commit: `d2b9e2e38b784c266bdf1df074e23807e1990955`

同期判定:
- 解説PDF: `PASS / RESYNCED`。補強後sourceの「矢印極性→状態表→平均値」と固定R2図3の三角波 `1/2` 判定を反映済み
- 練習PDF: `PASS / RESYNCED`。R2読図補強2点と `VI t_s/6` の条件限定を反映済み
- PowerPoint: `REGENERATE_REQUIRED`。既存内容QAには固定R2向け2読図手順が明示されていないため、既存6枚構成の範囲で最小同期する

品質ゲート:
- 固定5問・23答案要素: `unchanged`
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- SPEC固定8項目変更: `0件`
- SPEC指定3可視化変更: `0件`
- 新規問題追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- JR東海7%値・富士電機20%値の誤拡張: `0件`
- 新たなexact blocker: `0件`

## Topic 23 解説PDF clean blind後再同期

判定: `PASS / EXPLANATION_PDF_RESYNC_COMPLETE`

- A4縦: `5 pages`
- SHA-256: `13ea5c2773466a40f1053ea850051b5b2740682244495d7c8b482f86a83e6e27`
- PDFium render: `5 / 5 PASS`
- Poppler render: `5 / 5 PASS`
- clean blind補強2点: `2 / 2 PASS`
- 固定過去問: `5 / 5 covered`
- 一次答案要素: `17 / 17 covered`
- 二次答案要素: `6 / 6 covered`
- 合計答案要素: `23 / 23 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- 新たなexact blocker: `0件`

## Topic 23 練習PDF clean blind後再同期

判定: `PASS / PRACTICE_PDF_RESYNC_COMPLETE`

- A4縦: `5 pages`
- SHA-256: `9dce2e523db192ca32ce786e7ca60672fe8fca6a91f279117c17d8ce3e81d1fc`
- PDFium render: `5 / 5 PASS`
- Poppler render: `5 / 5 PASS`
- clean blind補強2点: `2 / 2 PASS`
- 一次問4 `VI t_s/6` 条件限定: `PASS`
- 一次試験型: `8 / 8`
- 二次記述式: `4 / 4`
- 全問題: `12 / 12`
- 既存12問の問題数・正答・数値変更: `0件`
- 固定過去問: `5 / 5 covered`
- 一次答案要素: `17 / 17 covered`
- 二次答案要素: `6 / 6 covered`
- 合計答案要素: `23 / 23 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 aligned`
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- 新たなexact blocker: `0件`

## Topic 21 H26二次 問1(4)

`48.0 / 48.1 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。Topic 21は `PASS / completed` のまま。

## 次工程

Topic 23 PowerPointを既存6枚構成の範囲で必要最小限再生成し、R2読図補強2点を同期して表示・内容QAする。固定5問・23答案要素、SPEC固定8項目・指定3可視化、一般式、仮定値／実車値境界は変更しない。PowerPoint同期後に、初回候補とは別ファイルでclean blind再試験を行う。
