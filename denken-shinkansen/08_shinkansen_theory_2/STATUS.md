# STATUS - 新幹線・電験二種「理論」

更新日: 2026-09-13

## 状態
- active_series: `08_shinkansen_theory_2`
- exam_aligned_completed_topics: 2 / 21
- current_status: `topic_03_explanation_body_complete`
- last_completed_topic: `02 架線は長くなるとなぜ電圧が落ちる？`
- active_topic: `03 25kV架線の周囲にはどんな電界ができる？`
- next_start: Topic 03のsource Markdownだけを正本として解説PDFを作成する。制作前EXAM_ALIGNMENTで固定した一次理論6問・21小問に必要な説明・3段階例題を欠落させず、SPEC外論点を追加しない

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
- [ ] 解説PDF
- [ ] 練習PDF（解答・完全解説付き）
- [ ] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの完成後独立再解答
- [ ] 最終QA PASS

## 今回進めた内容

Topic 03の解説本文＋3段階例題を `topics/03_catenary_electric_field/03_catenary_electric_field.md` に追加した。

収録内容:
- クーロンの法則、点電荷の電界、`F=qE` と負電荷の向き
- 点電荷のベクトル合成と電界0条件
- 電束・電束密度、`D=εE`、ガウスの法則
- 球対称、一様体積電荷球、球殻の領域別 `Q_enc`
- 円筒対称、無限長線電荷、同軸円筒の `E∝1/r`
- 電位・電位差、`E=-dV/dr`、電界の積分
- 無限長線電荷では無限遠を0 Vにせず有限基準半径を使う条件
- 架線を無限長線電荷とする教育用簡略モデル
- 基礎・本試験標準・複合ひっかけの3段階例題
- 一次理論6問・21小問への本文節マッピング

実在架線の未確認値は使用していない。影像法、静電容量、誘電体、静電エネルギー、絶縁設計等は追加していない。

## 判定

Topic 03は `topic_03_explanation_body_complete`。まだ `completed` ではない。完成数は `2 / 21` のまま。次工程は解説PDF。