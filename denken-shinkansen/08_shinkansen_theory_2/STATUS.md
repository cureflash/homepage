# STATUS - 新幹線・電験二種「理論」

更新日: 2026-09-13

## 状態
- active_series: `08_shinkansen_theory_2`
- exam_aligned_completed_topics: 2 / 21
- current_status: `topic_03_practice_pdf_complete`
- last_completed_topic: `02 架線は長くなるとなぜ電圧が落ちる？`
- active_topic: `03 25kV架線の周囲にはどんな電界ができる？`
- next_start: Topic 03のsource Markdownと練習問題を正本として解説画像PowerPointを作成する。制作前EXAM_ALIGNMENTで固定した一次理論6問・21小問に接続し、SPEC外論点を追加しない

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
- [ ] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの完成後独立再解答
- [ ] 最終QA PASS

## 今回進めた内容

Topic 03の練習問題source `topics/03_catenary_electric_field/03_catenary_electric_field_practice.md` と練習PDF `topics/03_catenary_electric_field/03_catenary_electric_field_practice.pdf` を作成した。

練習PDF収録内容:
- 全12問、すべて一次試験型の五肢択一
- 基礎3問 / 本試験標準6問 / 複合・ひっかけ3問
- 点電荷の電界・負電荷に働く力
- 点電荷の成分分解・ベクトル合成・電界0条件
- 電束・電束密度・ガウスの法則
- 一様帯電球・球殻の領域別電界
- 無限長線電荷・同軸円筒の電界
- 電位差の積分・電位傾度
- 球殻で領域をまたぐ電位積分
- 全問の正答、途中式、理由、単位、典型ミスを含む完全解説
- 一次理論6問・21小問への過去問対応表

A4縦5ページ。全5ページを130 dpiでレンダリングし、文字切れ・重なり・欠落・破損グリフがないことを確認した。

既存EXAM_ALIGNMENTの二次試験確認結果を維持し、直接対応問題がないため記述式を数合わせで追加していない。実在架線の未確認値は使用していない。影像法、静電容量、誘電体、静電エネルギー、絶縁設計等は追加していない。

## 判定

Topic 03は `topic_03_practice_pdf_complete`。まだ `completed` ではない。完成数は `2 / 21` のまま。次工程は解説画像PowerPoint。
