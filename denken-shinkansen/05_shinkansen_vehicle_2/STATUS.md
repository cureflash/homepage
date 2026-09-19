# STATUS - 新幹線車両・電験二種

更新日: 2026-09-19

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `22 / 39`
- current_status: `topic_22_completed`
- last_completed_topic: `22 E5系 再粘着制御`
- active_topic: `23 N700S SiC主変換装置`
- next_start: Topic 23 制作前EXAM_ALIGNMENT。公式第二種一次・二次過去問を直近年度優先で調査し、SPEC固定範囲へ直接問題と橋渡し問題を区分して品質ゲートを固定する

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
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_final_qa.md`

### clean blind reconcile

先行 `10 / 11` 記録は、Topic 22が前提参照を許可するTopic 20フィードバック制御教材を参照範囲から外したworkerの診断だった。有効候補は公式照合前に commit `f8aa715525de8747459c27cb02254575eaeca868` で固定され、許可されたTopic 20既習内容を用いてH21二次 問4 `(5a)` を正しく導出。その後の公式照合で `11 / 11 PASS`。公式照合結果は最終QA正本へ統合済みで、重複照合ファイルは削除済み。Topic 22本文・一般式・PDF/PPTXへの追加修正は不要。

## Topic 21 H26二次 問1(4)

`48.0 / 48.1 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。Topic 21は `PASS / completed` のまま。

## 次工程

Topic 23「N700S SiC主変換装置」の制作前EXAM_ALIGNMENTから開始する。
