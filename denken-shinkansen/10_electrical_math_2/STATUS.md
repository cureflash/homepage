# STATUS - 電験二種「電気数学」

更新日: 2026-09-15

## 状態

- active_series: `10_electrical_math_2`
- exam_aligned_completed_topics: 6 / 20
- current_status: `topic_07_exam_alignment_complete`
- last_completed_topic: `06 微積分で新幹線の運転曲線を解析する`
- active_topic: `07 一階常微分方程式`
- next_start: Topic 07の制作前独立再解答・公式解答照合。固定した一次5問・22小問を、保存済み正答を先に見ずにSPEC固定範囲だけで再解答する

## Topic 06

`PASS / completed`。

- 固定EXAM_ALIGNMENT: 一次4問＋二次1問、計5問・15対象項目
- 完成後独立再解答: `15 / 15 PASS`
- 教材外知識補完: 0件
- SPEC外追加: 0件
- 必須成果物・表示QA・最終QA: PASS

## Topic 07 制作品質ゲート

- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 公式過去問を直近年度優先で調査
- [x] 一次5問・22小問を選定
- [x] source Markdownへ要求知識・式・設問型・教材内必要説明を固定
- [x] R8 問6は一次応答の(1)〜(2)だけ採用し、C-L結合となる(3)〜(5)を除外
- [x] 直近R7〜R5二次「機械・制御」を確認し、Topic 09〜10相当の伝達関数・ラプラス領域問題を件数合わせで追加しないことを確認
- [ ] 制作前独立再解答・公式解答照合 22 / 22
- [ ] 解説本文＋3段階例題
- [ ] 解説PDF
- [ ] 練習問題source
- [ ] 練習PDF
- [ ] 解説画像PowerPoint
- [ ] PowerPoint表示QA
- [ ] 完成後独立再解答
- [ ] 最終QA
- [ ] `completed`

## 今回進めた内容

Topic 07 `一階常微分方程式` の制作前EXAM_ALIGNMENTを作成した。

固定過去問:
- R8 一次 理論 問6 (1)〜(2)
- R7 一次 理論 問6 (1)〜(5)
- R6 一次 理論 問4 (1)〜(5)
- R5 一次 理論 問5 (1)〜(5)
- R4 一次 理論 問4 (1)〜(5)

合計: 一次5問・22小問。

固定する教材論点:
- 変数分離形
- 一階線形微分方程式
- 初期条件
- 同次解・特解
- 指数応答
- RC `τ=R_eq C`
- RL `τ=L/R_eq`
- C端子・L端子から見た等価抵抗
- スイッチ切替前後の初期値継承
- 一次遅れの時間領域表現

除外:
- 二階常微分方程式
- C-L結合後の二次系
- ラプラス変換
- 伝達関数・極・零点
- 周波数応答

## 判定

Topic 07は `EXAM_ALIGNMENT_COMPLETE / IN_PROGRESS`。完成数は `6 / 20` のまま。次は固定5問・22小問の制作前独立再解答・公式解答照合。
