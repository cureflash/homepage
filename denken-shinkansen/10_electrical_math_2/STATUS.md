# STATUS - 電験二種「電気数学」

更新日: 2026-09-15

## 状態

- active_series: `10_electrical_math_2`
- exam_aligned_completed_topics: 6 / 20
- current_status: `topic_07_practice_source_complete`
- last_completed_topic: `06 微積分で新幹線の運転曲線を解析する`
- active_topic: `07 一階常微分方程式`
- next_start: Topic 07の練習PDF。練習source全12問・完全解説を同期し、A4縦で全ページ表示QA・文字抽出QAを行う

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
- [x] 制作前独立再解答・公式解答照合 `22 / 22 PASS`
- [x] 解説本文＋3段階例題
- [x] 解説PDF
- [x] 練習問題source
- [ ] 練習PDF
- [ ] 解説画像PowerPoint
- [ ] PowerPoint表示QA
- [ ] 完成後独立再解答
- [ ] 最終QA
- [ ] `completed`

## 今回進めた内容

Topic 07 `一階常微分方程式` の練習問題sourceを完成した。

成果物:
- `topics/07_first_order_ode/07_first_order_ode_practice.md`

構成:
- 全12問・全問五肢択一
- 基礎3問／標準6問／複合3問
- 固定一次5問・22小問へ全件接続
- R8: RL立上り・初期条件・時定数
- R7: 電荷保存・KVL・`i=dq/dt`・一階線形方程式・定常値
- R6: RC初期値・最終値・`R_eq`・`τ=R_eq C`
- R5: RL自然減衰・電流連続性・`τ=L/R_eq`・コイル電圧
- R4: KCL/KVL・指数立上り/減衰・スイッチ切替・時定数変化
- SPEC固有の時間領域一次遅れも収録

QA:
- 独立計算・正答一意性: `12 / 12 PASS`
- 五肢重複: 0件
- 固定範囲外追加: 0件
- Topic 08〜10先取り: 0件
- 二次記述の件数合わせ: 0件
- 未確認実車値追加: 0件

## 判定

Topic 07は `PRACTICE_SOURCE_COMPLETE / IN_PROGRESS`。完成数は `6 / 20` のまま。次は練習PDF。