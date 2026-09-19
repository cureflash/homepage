# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜21は最終QAまで `PASS / completed`。完成数は `21 / 39`。

現在地は `topic_22_practice_source_complete`。active topic は Topic 22 `E5系 再粘着制御`。

## reconcile

開始時に最新main、系列 `STATUS.md` / `HANDOFF.md`、直近車両二種commit、Topic 22成果物を再照合した。開始直後は解説sourceまでだったが、既存の車両二種workerが `1877633ba6f7b781c41aa1b17f32e7092254137b` でTopic 22解説PDF＋PDF QAを完了したため、その成果を正本としてreconcileし、解説PDF作成は重複実施しなかった。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`、Topic 22固定EXAM_ALIGNMENT・解説source・解説PDF QAを再確認し、次の安全な工程である練習source作成だけを進めた。

## 固定品質ゲート

固定公式過去問:
- H28 一次 機械 問5 `(4),(5)` — `2答案要素 / 直接`
- R2 一次 機械 問3 `(1)` — `1答案要素 / 橋渡し`
- R7 二次 機械・制御 問2 `(1)のs1のみ`, `(3)のN2のみ` — `2答案要素 / 橋渡し`
- R2 二次 機械・制御 問1 `(2),(3),(4)` — `3答案要素 / 橋渡し`
- H21 二次 機械・制御 問4 `(4),(5a),(5b)` — `3答案要素 / 橋渡し`

品質ゲート:
- 一次: `2問・3答案要素`
- 二次: `3問・8答案要素`
- 合計: `5問・11答案要素`
- 二次記述問題: `3問`
- 完成後clean blind要求: `一次3 / 3、二次8 / 8、総計11 / 11、固定5問5 / 5`

## 今回実施

Topic 22練習問題・完全解説sourceを作成した。

判定: `PASS / PRACTICE_SOURCE_COMPLETE`

成果物:
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_practice_source.md`

練習source QA:
- 一次試験型: `8 / 8`（五肢択一）
- 二次記述式: `4 / 4`
- 全問題: `12 / 12`
- 固定5問・11答案要素: `11 / 11 covered`
- 一次答案要素: `3 / 3 covered`
- 二次答案要素: `8 / 8 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化の式系: `3 / 3 aligned`
- 途中式・単位・理由説明: `12 / 12`
- 固定問題差替え: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 公式過去問本文の複製: `0件`
- 公式解答・標準解答の個別正答保存: `0件`
- 固定SPEC外追加: `0件`
- 未確認E5系実車値の真値化: `0件`
- 新たなexact blocker: `0件`

練習問題は、同期速度・すべり・相対回転速度・滑り周波数、車輪側速度差と誘導機すべりの区別、粘着限界、空転・滑走、トルク低減後の速度応答、定常偏差・速応性・減衰の読み分けを一般問題として練習できる構成にした。

## 重要な境界

- H28一次 問5 `(4),(5)` だけを再粘着テーマへの直接問題として扱う。
- 他4問は速度差・滑り・トルク応答・フィードバック特性の橋渡し技能であり、「再粘着制御の直接出題」とは扱わない。
- 誘導機の詳細等価回路、詳細ベクトル制御、粘着推定器、軸重移動補償、実車台車・軸別ロジックを新規主題化しない。
- E5系実車の粘着係数、検出閾値、トルク低減率、復帰時定数、制御ゲインを真値化しない。練習問題中の数値は学習用仮定値のみ。
- 公式解答・標準解答の個別正答記号・最終数値はまだ保存しない。
- clean blind独立再解答は練習PDF・PowerPoint完成後に行う。

記録:
- `topics/22_e5_readhesion_control/22_e5_readhesion_control.md`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_explanation_source.md`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_explanation.pdf`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_explanation_pdf_qa.md`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_practice_source.md`
- `STATUS.md`
- `HANDOFF.md`

## 次の安全な工程

Topic 22 練習PDF作成＋PDF QA。

練習sourceを正本としてA4 PDF化し、表示・文字抽出・全12問・固定11答案要素・SPEC固定8項目・指定3可視化への接続を確認する。固定EXAM_ALIGNMENTは変更しない。
