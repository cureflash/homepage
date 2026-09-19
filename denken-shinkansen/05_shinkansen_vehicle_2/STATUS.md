# STATUS - 新幹線車両・電験二種

更新日: 2026-09-19

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `22 / 39`
- current_status: `topic_23_powerpoint_recovery_complete`
- last_completed_topic: `22 E5系 再粘着制御`
- active_topic: `23 N700S SiC主変換装置`
- next_start: 復旧した現行Topic 23 PPTXを含め最終QAを再実施する。PASS確定前にTopic 24へ進めない

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
- PowerPoint: `PASS / POWERPOINT_RECOVERY_COMPLETE`

復旧PowerPoint:

- file: `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_images.pptx`
- Git blob SHA: `4ac7e4c493e8c24e8ea98d40db2494a7218f14b2`
- size: `8,587 bytes`
- SHA-256: `b7c1e6af945c9e1c36e01175db365a8c4f119800e0ae655894fdae2ee0b02062`
- 16:9 / `6 slides`
- ZIP: `PASS`
- python-pptx: `6 / 6 PASS`
- LibreOffice: `6 pages PASS`
- pdftoppm/contact sheet: `6 / 6 PASS`
- geometry overflow: `0`
- 固定5問・23答案要素: `23 / 23 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- R2一次問2(2),(4)補強: `2 / 2 PASS`

旧破損blob `ff2c73d872da4fc3605fb30e5f67c9dc97517f5c` のblockerは復旧artifactへの置換で解消。新たなexact blockerはない。

## Topic 21 H26二次 問1(4)

`48.0 / 48.1 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。Topic 21は `PASS / completed` のまま。

## 次工程

Topic 23はまだ `completed` にしない。復旧した現行PPTX、解説PDF、練習PDF、修正後clean blind `23 / 23 PASS` をreconcileして最終QAを再実施する。Topic 24へは進めない。
