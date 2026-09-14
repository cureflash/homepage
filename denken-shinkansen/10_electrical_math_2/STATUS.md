# STATUS - 電験二種「電気数学」

更新日: 2026-09-14

## 状態

- active_series: `10_electrical_math_2`
- exam_aligned_completed_topics: 5 / 20
- current_status: `topic_06_practice_source_complete`
- last_completed_topic: `05 積分によるエネルギー計算`
- active_topic: `06 微積分で新幹線の運転曲線を解析する`
- next_start: 練習問題source全12問・完全解説を正本として練習PDFを作成し、全ページ表示QAを行う

## Topic 06 制作品質ゲート

- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 公式過去問を直近年度優先で調査
- [x] 一次4問＋二次1問、計5問・15対象項目を選定
- [x] source Markdownへ要求知識・式・設問型・教材内必要説明を固定
- [x] 制作前独立再導出・公式解答照合 15 / 15 PASS
- [x] 教材外知識補完 0件確認
- [x] Topic 07以降・半導体定常ドリフト・インバータ制御・ガバナ特性等を品質ゲート対象から除外
- [x] 解説本文＋3段階例題
- [x] 解説PDF
- [x] 練習問題source（一次型8問＋二次記述4問・完全解説）
- [ ] 練習PDF（解答・完全解説付き）
- [ ] 解説画像PowerPoint
- [ ] PowerPoint表示QA
- [ ] 完成後独立再解答
- [ ] 最終QA
- [ ] `completed`

## 今回進めた内容

Topic 06 `微積分で新幹線の運転曲線を解析する` の練習問題・完全解説sourceを作成した。

成果物:
`topics/06_calculus_train_curve/06_calculus_train_curve_practice.md`

構成:
- 全12問
- 一次型8問
- 二次記述型4問
- 全問に式・理由・単位・検算または収支説明を付与

固定EXAM_ALIGNMENT接続:
- R5 一次 理論 問6: 問2、問10
- R3 一次 理論 問6: 問4、問9
- H28 一次 理論 問4(1)〜(3): 問5、問9
- H25 一次 機械 問3(1): 問8
- H23 二次 電力・管理 問5(1)-[A]: 問11、問12

独立計算QA `12 / 12 PASS`。一次型8問は正答一意。教材外知識補完0件、固定範囲外追加0件。未確認の実車運転曲線・実車回生効率は追加していない。

## 判定

Topic 06は `practice_source_complete`。完成数は `5 / 20` のまま。次は練習PDF作成＋全ページ表示QA。
