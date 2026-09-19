# STATUS - 新幹線車両・電験二種

更新日: 2026-09-19

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `23 / 39`
- current_status: `topic_23_completed`
- last_completed_topic: `23 N700S SiC主変換装置`
- active_topic: `24 N700S 主電動機設計の比較`
- next_start: Topic 24の制作前EXAM_ALIGNMENTを実施し、二種一次・二次の公式過去問対応範囲を固定する

## 完了済み

Topic 01〜23は最終QAまで `PASS / completed`。完成数は `23 / 39`。

## Topic 23 最終品質ゲート

- 固定過去問: 第二種一次4問＋二次1問 = `5 / 5 PASS`
- 一次答案要素: `17 / 17 PASS`
- 二次答案要素: `6 / 6 PASS`
- 合計答案要素: `23 / 23 PASS`
- 修正後clean blind: `23 / 23 PASS`
- 解説PDF: `PASS / EXPLANATION_PDF_RESYNC_COMPLETE`
- 練習PDF: `PASS / PRACTICE_PDF_RESYNC_COMPLETE`
- PowerPoint: `PASS / POWERPOINT_RECOVERY_COMPLETE`
- 最終QA: `PASS / COMPLETED`
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- 新たなexact blocker: `0件`

現行PowerPoint:

- file: `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_images.pptx`
- Git blob SHA: `4ac7e4c493e8c24e8ea98d40db2494a7218f14b2`
- size: `8,587 bytes`
- SHA-256: `b7c1e6af945c9e1c36e01175db365a8c4f119800e0ae655894fdae2ee0b02062`
- 16:9 / `6 slides`
- ZIP / python-pptx / LibreOffice / pdftoppm: `PASS`
- 固定5問・23答案要素: `23 / 23 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`

旧破損blob `ff2c73d872da4fc3605fb30e5f67c9dc97517f5c` のblockerは解消済み。

## Topic 21 H26二次 問1(4)

`48.0 / 48.1 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。Topic 21は `PASS / completed` のまま。

## 次工程

Topic 24「N700S 主電動機設計の比較」の制作前EXAM_ALIGNMENTを実施する。`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md` に従い、一次・二次を含む公式過去問を直近年度から確認し、固定問題・答案要素・教材責務を確定する。確定不能事項があれば推測せずexact blockerを記録する。
