# STATUS - 新幹線車両・電験三種

更新日: 2026-09-12

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 21 / 38
- current_status: `topic_22_exam_alignment_complete`
- last_completed_topic: `21 N700S③ バッテリー自走`
- active_topic: `22 L0系① リニア同期モータ`
- next_start: topic 22 の解説本文・例題・練習問題作成。制作前EXAM_ALIGNMENTで確定した同期速度・極数・周波数・回転磁界・同期条件を漏れなく教材化し、L0系固有の実値は一次資料確認後にのみ使用する

## 新品質ゲート進捗
- [x] 01〜21 — PASS
- [ ] 22 L0系① リニア同期モータ — 制作前EXAM_ALIGNMENT完了。本文・解説PDF・練習PDF・PowerPointは未作成

## 22 EXAM_ALIGNMENT進捗
公式過去問から、Topic 22 に必要な試験論点を確定した。

選定した6問:
1. R8上 機械 問3 — 三相交流、回転磁界、周波数制御
2. R8上 機械 問4 — `Ns=120f/p`、滑り、回転速度
3. R8上 機械 問5 — 周波数・極数・同期速度の関係
4. R7上 機械 問5 — 同期発電機の並列・同期条件
5. R6上 機械 問5 — 同期電動機、回転磁界、同期引込み
6. R6上 電力 問15(b) — 周波数・回転速度から磁極数を逆算

教材で必須とする範囲:
- 対称三相交流から回転磁界が生じる原理
- 同期速度 `Ns=120f/p` と `f`・`p` の逆算
- 誘導機の滑りと同期機の同期運転の違い
- 同期状態の意味
- 回転同期機を直線状へ展開した移動磁界・リニア同期モータへの接続

source Markdown:
- `topics/22_l0_linear_synchronous_motor/22_l0_linear_synchronous_motor.md`

公式正答番号は、完成後の独立再解答を汚染しないため制作前sourceには転記していない。

L0系の実際の極ピッチ、実運転周波数、500 km/h時の具体計算などは未確認値として扱い、Topic 23との境界も維持する。

## 22 QA判定
`IN_PROGRESS`。制作前EXAM_ALIGNMENTは完了したが、必須成果物と完成後の独立過去問再解答が未完了のため、完成数は21/38のまま。

## 次
EXAM_ALIGNMENTで確定した要求事項を基にTopic 22の解説本文・3段階例題・12問以上の練習問題を作成する。L0系固有の技術事実・実値を使う場合はJR東海・鉄道総研等の一次資料で確認する。成果物完成後、選定6問を公式正答を先に見ず独立再解答し、公式解答と照合して最終PASSを判定する。
