# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜22は最終QAまで `PASS / completed`。完成数は `22 / 39`。

現在地は `topic_22_completed`。次のactive topicは Topic 23 `N700S SiC主変換装置`。

## 今回のreconcile

latest main、最新 `STATUS.md` / `HANDOFF.md`、Topic 22全成果物、直近車両二種workerのclean blind候補固定・公式照合を再確認した。

Topic 22では先行 `10 / 11` 診断が残っていたが、これはTopic 22が前提参照を許可するTopic 20フィードバック制御教材を参照範囲から外したworkerの診断だった。有効候補は公式照合前に commit `f8aa715525de8747459c27cb02254575eaeca868` で固定され、許可されたTopic 20既習内容を用いてH21二次 問4 `(5a)` を正しく導出。その後の公式照合で固定5問・11答案要素が全件一致したため、こちらを品質ゲート正本とする。公式照合結果は最終QAへ統合済みで、重複照合ファイルは削除済み。

Topic 21 H26二次「機械・制御」問1(4)の `48.0 / 48.1 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## Topic 22 最終QA

判定: `PASS / COMPLETED`

- 固定過去問: 第二種一次2問＋二次3問 = `5問`
- 一次: `3 / 3 PASS`
- 二次: `8 / 8 PASS`
- 合計: `11 / 11 PASS`
- 固定5問: `5 / 5 PASS`
- 解説source / PDF / QA: `PASS`
- 練習source / PDF / QA: `PASS`
- PowerPoint / QA: `PASS`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- SPEC外追加: `0件`
- 未確認E5系実車値の真値化: `0件`
- 新たなexact blocker: `0件`

最終QA正本:
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_final_qa.md`

有効clean blind候補固定記録:
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_blind_reanswer_candidates_clean.md`

## Topic 22境界

- H28一次 問5 `(4),(5)` だけを再粘着テーマへの直接問題として扱う。
- 他4問は橋渡し技能であり、再粘着制御の直接出題とは扱わない。
- 車輪側速度差と誘導電動機すべりを同一視しない。
- `T∝s` は小すべり域等の成立条件が問題で明示された場合だけ使用する。
- E5系実車の粘着係数、検出閾値、トルク低減率、復帰時定数、制御ゲインを真値化しない。

## 次の安全な工程

Topic 23「N700S SiC主変換装置」の制作前EXAM_ALIGNMENT。

`SPEC.md` 固定範囲（SiC、導通損失、スイッチング損失、スイッチング周波数、変換効率、発熱、冷却、小型軽量化）と指定3可視化を変えず、公式第二種一次・二次過去問を直近年度優先で調査する。直接問題と橋渡し問題を区分し、二次対象論点で記述問題が確認できる場合は含め、完成後clean blind用の固定品質ゲートを先に確定する。未確認N700S実車値は真値化しない。
