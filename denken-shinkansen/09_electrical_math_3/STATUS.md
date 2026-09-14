# STATUS - 電験三種「電気数学」

更新日: 2026-09-14

## 状態
- active_series: `09_electrical_math_3`
- exam_aligned_completed_topics: 5 / 12
- current_status: `topic_06_exam_reanswer_needs_revision`
- last_completed_topic: `05 ベクトル`
- active_topic: `06 微分① ダイヤの傾きは速度`
- next_start: `Topic 06 完成後独立再解答で不足した4件の前提をSPEC範囲内で最小補強`

## Topic 06 進捗
- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 直近年度を優先して公式過去問を調査
- [x] Topic 06の固定範囲だけで直接対応できる公式過去問4問を選定
- [x] 件数合わせの仕様外論点・重複問題を除外
- [x] 参考教材を複数系統確認（e-sysnet含む）
- [x] source Markdownへ制作前EXAM_ALIGNMENTを記録
- [x] 制作前独立計算・公式解答照合 `4 / 4 PASS`
- [x] 解説本文＋3段階例題
- [x] 解説PDF
- [x] 練習問題source
- [x] 練習PDF（解答・完全解説付き）
- [x] 解説画像PowerPoint
- [x] 完成教材だけでの公式過去問独立再解答 `0 / 4 PASS / NEEDS_REVISION`
- [ ] 最終QA

## 今回進めた内容

Topic 06 `微分① ダイヤの傾きは速度` の完成後独立再解答を実施した。

固定4問の数学操作そのものは教材で再構築できるが、問題全体を正答するには次の教材外前提が必要だった。

- R7上 理論 問13: `h_fe` を `I_B`,`I_C` から求める電流増幅率の関係
- R6下 理論 問3: `|e|=N|dΦ/dt|`
- R5上 理論 問10: `|v|=L|di/dt|` の意味・成立条件・使い方
- R4下 理論 問7: 並列合成抵抗と抵抗温度係数の関係

`EXAM_ALIGNMENT_SPEC.md` の「教材に書かれていない知識を外部知識で補った場合はFAIL」に従い、完成後独立再解答は `0 / 4 PASS`、判定は `NEEDS_REVISION` とした。

固定EXAM_ALIGNMENT 4問、Topic 06の範囲、練習12問、PDF、PowerPointは変更していない。仕様外論点・未確認新幹線実値の追加は0件。

## 判定

`NEEDS_REVISION`。

Topic 06は品質ゲート未通過のため `completed` にしない。完成数は `5 / 12` のまま。

次は不足した4件の前提を、Topic 06の固定範囲と「電気分野への最小限の接続」を超えない形で補強する。
