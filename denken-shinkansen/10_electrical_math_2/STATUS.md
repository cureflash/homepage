# STATUS - 電験二種「電気数学」

更新日: 2026-09-15

## 状態

- active_series: `10_electrical_math_2`
- exam_aligned_completed_topics: 6 / 20
- current_status: `topic_07_explanation_source_complete`
- last_completed_topic: `06 微積分で新幹線の運転曲線を解析する`
- active_topic: `07 一階常微分方程式`
- next_start: Topic 07の解説PDF。固定一次5問・22小問との対応、3段階例題、頻出ミス、範囲境界を収録し全ページ表示QAを行う

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
- [ ] 解説PDF
- [ ] 練習問題source
- [ ] 練習PDF
- [ ] 解説画像PowerPoint
- [ ] PowerPoint表示QA
- [ ] 完成後独立再解答
- [ ] 最終QA
- [ ] `completed`

## 今回進めた内容

Topic 07 `一階常微分方程式` の解説本文＋3段階例題をsource Markdownへ追加した。

本文では次を固定範囲内で説明した。
- 変数分離形
- `A dy/dt+B y=C` と `dy/dt+ay=b`
- 同次解＋定常特解
- `y=y∞+(y0-y∞)e^{-t/τ}`
- コンデンサ電圧・コイル電流の連続性
- RCの `τ=R_eq C`
- RLの `τ=L/R_eq`
- スイッチ切替前後の初期値継承
- 電荷保存と `q=CV`, `i=dq/dt`
- 時間領域の一次遅れ `T dy/dt+y=Ku`

3段階例題は、RL立上り、抵抗網を含むRC応答、二つのコンデンサの電荷再配分を扱った。

固定一次5問・22小問は教材内対応表で全件マッピング済み。

教材外知識補完: 0件。
固定範囲外追加: 0件。
未確認実車値追加: 0件。

## 判定

Topic 07は `EXPLANATION_SOURCE_COMPLETE / IN_PROGRESS`。完成数は `6 / 20` のまま。次は解説PDF。