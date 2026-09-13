# STATUS - 新幹線・電験二種「理論」

更新日: 2026-09-13

## 状態
- active_series: `08_shinkansen_theory_2`
- exam_aligned_completed_topics: 3 / 21
- current_status: `topic_03_completed`
- last_completed_topic: `03 25kV架線の周囲にはどんな電界ができる？`
- active_topic: `04 架線と車体は巨大なコンデンサなのか？`
- next_start: Topic 04の制作前EXAM_ALIGNMENT。公式二種一次・二次を直近年度から確認し、系列SPECの固定範囲（静電容量・誘電体・静電エネルギー）だけで対応問題を選定する。数合わせで仕様外論点を追加しない

## Topic 03 品質ゲート進捗
- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 公式過去問を直近年度優先で調査
- [x] 一次理論6問・対象21小問を選定
- [x] 二次試験も確認対象に含め、直接対応問題がないため数合わせで採用しない判断を記録
- [x] R7/R6/R2等のSPEC外論点（影像法、静電容量、誘電体）を除外
- [x] 参考教材をe-sysnet＋電験王2の複数系統で確認
- [x] source Markdownへ要求知識・式・設問型・典型ミス・教材内必要説明を固定
- [x] 公式問題・公式解答との照合
- [x] 解説本文＋3段階例題
- [x] 解説PDF
- [x] 練習PDF（解答・完全解説付き）
- [x] 解説画像PowerPoint
- [x] 公式過去問の教材のみでの完成後独立再解答
- [x] 最終QA実施
- [x] 最終QAで検出した練習source文字破損を修正し、練習PDFへ同期・全ページ表示QA
- [x] 解説sourceの状態欄・末尾品質判定を現在地へ同期
- [x] 最終QA再実施・PASS

## 今回進めた内容

Topic 03の最終QAを再実施し、全品質ゲートPASSで `completed` とした。

- 必須成果物7件の存在をGitHub正本で再確認
- 一次6問・21小問の完成後独立再解答 `21/21 PASS` を再確認
- 二次試験は確認対象に含めたうえで、固定範囲への直接対応がないため数合わせで採用しない判断を維持
- 前回指摘の練習source文字破損2箇所が修正済みであることを再確認
- 修正版練習PDFの全4ページ表示QA PASSを確認
- 解説PDF表示QA、PowerPoint表示QA・overflow検査PASSを確認
- 解説sourceの状態欄・末尾品質判定を `completed` へ同期
- SPEC外論点・未確認実車値・新規仕様の追加なし

## 判定

Topic 03は `PASS / completed`。完成数は `3 / 21`。
