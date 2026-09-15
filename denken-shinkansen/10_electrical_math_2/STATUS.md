# STATUS - 電験二種「電気数学」

更新日: 2026-09-15

## 状態

- active_series: `10_electrical_math_2`
- exam_aligned_completed_topics: 6 / 20
- current_status: `topic_07_source_progress_synced`
- last_completed_topic: `06 微積分で新幹線の運転曲線を解析する`
- active_topic: `07 一階常微分方程式`
- next_start: Topic 07の最終QAを再判定する。固定一次5問・22小問、完成後独立再解答 `22 / 22 PASS`、必須成果物、表示QA、SPEC境界、進捗整合を再確認し、全品質ゲートPASSの場合のみ `completed` とする

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
- [x] 練習PDF
- [x] 解説画像PowerPoint
- [x] PowerPoint表示QA
- [x] 完成後独立再解答 `22 / 22 PASS`
- [x] 最終QA実施 → `NEEDS_REVISION`
- [x] source進捗記録2箇所の同期
- [ ] 最終QA再判定
- [ ] `completed`

## 今回進めた内容

Topic 07 `一階常微分方程式` を1段階進め、主source `topics/07_first_order_ode/07_first_order_ode.md` の旧進捗2箇所だけを実成果物へ同期した。

変更箇所:
- `## 状態`: 解説PDF以降未実施という旧記録を、解説PDF・練習source/PDF・PowerPoint・表示QA・完成後独立再解答まで完了した現在地へ更新
- `## 次工程`: 解説PDF作成から最終QA再判定へ更新

非変更:
- 教材本文
- 固定EXAM_ALIGNMENT 一次5問・22小問
- 数式・3段階例題
- 練習問題
- PDF / PowerPoint
- 完成後独立再解答 `22 / 22 PASS`
- 固定範囲・除外境界

## 判定

Topic 07は `IN_PROGRESS`。完成数は `6 / 20` のまま。旧進捗不整合は同期済みで、次は最終QA再判定。