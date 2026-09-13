# STATUS - 新幹線・電験二種「理論」

更新日: 2026-09-13

## 状態
- active_series: `08_shinkansen_theory_2`
- exam_aligned_completed_topics: 2 / 21
- current_status: `topic_03_exam_alignment_complete`
- last_completed_topic: `02 架線は長くなるとなぜ電圧が落ちる？`
- active_topic: `03 25kV架線の周囲にはどんな電界ができる？`
- next_start: Topic 03の解説本文＋3段階例題を作成する。制作前EXAM_ALIGNMENTで固定した一次理論6問・21小問を解くための中間知識を欠落させず、クーロンの法則、電界、電束・電束密度、ガウスの法則、電位・電位差、電位傾度、電界の積分、線電荷教育用モデルの範囲だけで構成する

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
- [ ] 解説本文＋3段階例題
- [ ] 解説PDF
- [ ] 練習PDF（解答・完全解説付き）
- [ ] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの完成後独立再解答
- [ ] 最終QA PASS

## 今回進めた内容

Topic 03の制作前EXAM_ALIGNMENTを実施し、`topics/03_catenary_electric_field/03_catenary_electric_field.md` を作成した。

品質ゲート対象:
- R8 一次 理論 問1 (1)〜(3)
- R5 一次 理論 問1 (1)
- R4 一次 理論 問1 (1)〜(5)
- H30 一次 理論 問1 (1)〜(4)
- H23 一次 理論 問1 (1)〜(3)
- H21 一次 理論 問1 (1)〜(5)

計6問・21小問。公式問題・公式解答で対象と正答を照合済み。

二次試験は確認対象に含めたが、ガウスの法則・電位・静電界解析を本Topicの固定範囲だけで直接問う問題を今回確認した範囲では採用しない。`08 理論・二種` の一次中心原則に従い、絶縁設計、誘電体、静電容量、高電圧設備等を数合わせで追加していない。

## 判定

Topic 03は `topic_03_exam_alignment_complete`。まだ `completed` ではない。完成数は `2 / 21` のまま。次工程は解説本文＋3段階例題。