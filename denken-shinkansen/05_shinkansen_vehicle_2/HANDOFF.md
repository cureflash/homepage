# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜21は最終QAまで `PASS / completed`。完成数は `21 / 39`。

現在地は `topic_22_explanation_pdf_complete`。active topic は Topic 22 `E5系 再粘着制御`。

## reconcile

最新main `9422a0de90c626092fed1df15967f33e83cc4d4b`、系列 `STATUS.md` / `HANDOFF.md`、直近車両二種commit、Topic 22制作前EXAM_ALIGNMENT・解説sourceを照合した。既存workerが解説sourceまで完了済みだったため重複作業を避け、次の安全な工程である解説PDF作成＋PDF QAだけを進めた。

Topic 21のH26二次「機械・制御」問1(4)の `48.0 / 48.1 N·m` 差は、公式標準解答の `π=3.14` 相当の数値処理による当該過去問固有の丸め差として既に解決済み。一般式・Topic 21成果物は今回変更していない。

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

Topic 22解説PDFを解説sourceから作成し、PDF QAを完了した。

判定: `PASS / EXPLANATION_PDF_COMPLETE`

成果物:
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_explanation.pdf`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_explanation_pdf_qa.md`

PDF QA:
- A4縦: `5 pages`
- PDFium 200 dpi: `5 / 5 PASS`
- Poppler 200 dpi: `5 / 5 PASS`
- 文字抽出・PDF構造: `PASS`
- クリップ・重なり・欠落: `0件`
- 2 renderer間: アンチエイリアス差のみ、構造・配置差なし
- 固定5問・11答案要素: `11 / 11 covered`
- 一次答案要素: `3 / 3 covered`
- 二次答案要素: `8 / 8 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`
- 公式解答・標準解答の個別正答保存: `0件`
- 固定問題差替え: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定SPEC外追加: `0件`
- 未確認E5系実車値の真値化: `0件`
- 新たなexact blocker: `0件`

PDF SHA-256: `774365b7357a88417e9b029eabda9cd73d3154b86b7871a67104ec0d51f72f55`

## 重要な境界

- H28一次 問5 `(4),(5)` だけを再粘着テーマへの直接問題として扱う。
- 他4問は速度差・滑り・トルク応答・フィードバック特性の橋渡し技能であり、「再粘着制御の直接出題」とは扱わない。
- 誘導機の詳細等価回路、詳細ベクトル制御、粘着推定器、軸重移動補償、実車台車・軸別ロジックを新規主題化しない。
- E5系実車の粘着係数、検出閾値、トルク低減率、復帰時定数、制御ゲインを真値化しない。教材中の数値・波形・`μ(v)` は学習用仮定値のみ。
- 公式解答・標準解答の個別正答記号・最終数値はまだ保存しない。

記録:
- `topics/22_e5_readhesion_control/22_e5_readhesion_control.md`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_explanation_source.md`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_explanation.pdf`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_explanation_pdf_qa.md`
- `STATUS.md`
- `HANDOFF.md`

## 次の安全な工程

Topic 22 練習source作成。

固定5問・11答案要素、SPEC固定8項目・指定3可視化を変更しない。一次試験型と二次記述式を含め、途中式・単位・理由説明まで採点可能な練習問題にする。新幹線固有知識を知らなくても解ける一般問題とし、実車固有値を仮定しない。clean blind再解答は練習PDF・PowerPoint完成後に行う。