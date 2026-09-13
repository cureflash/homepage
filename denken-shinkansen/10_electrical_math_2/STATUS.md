# STATUS - 電験二種「電気数学」

更新日: 2026-09-13

## 状態

- active_series: `10_electrical_math_2`
- exam_aligned_completed_topics: 2 / 20
- current_status: `topic_03_images_pptx_complete`
- last_completed_topic: `02 ベクトルと座標変換`
- active_topic: `03 偏微分・全微分`
- next_start: Topic 03の選定公式過去問5問・16小問を、完成教材（source Markdown・解説PDF・練習PDF・解説画像PowerPoint）のみを使い、保存済み正答を先に見ずに独立再解答して記録する。固定範囲を維持し、Topic 04の極値・最適条件、Topic 07の微分方程式、Topic 11の一般行列、Topic 18・19の反復計算・最適化は先取りしない

## Topic 03 品質ゲート進捗

- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 公式過去問を直近年度優先で調査
- [x] 一次理論5問・対象16小問を選定
- [x] R7/R6二次試験も確認し、直接対応しない後続論点を数合わせで採用しない判断を記録
- [x] 参考教材を電験王2＋e-sysnet＋オーム社の複数系統で確認
- [x] source Markdownへ要求知識・式・設問型・教材内必要説明を固定
- [x] 制作前独立再解答 5問・16小問 PASS
- [x] 公式解答との照合 16/16一致
- [x] 解説本文＋3段階例題
- [x] 解説PDF
- [x] 練習PDF（解答・完全解説付き）
- [x] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの完成後独立再解答
- [ ] 最終QA PASS

## 今回進めた内容

Topic 03 `偏微分・全微分` の解説画像PowerPoint `topics/03_partial_total_differentials/03_partial_total_differentials_images.pptx` を作成した。

- 16:9・全4枚
- 1枚目: 偏微分と全微分の使い分け。固定量・変化量を先に判定し、`∂W/∂θ` と `dZx` を対比
- 2枚目: 全時間微分。`I1(t), I2(t), θ(t)` から `Φ1` への依存関係と `dΦ1/dt` の各寄与を模式化
- 3枚目: 一次近似と相対感度。二次微小項の大小比較、`S_A^G` と `S_H^G` の差を可視化
- 4枚目: 選定5問・16小問と教材内論点の対応、一次資料・参考教材、新幹線への接続範囲を整理
- 外部図版は使用せず、自作の模式図・数式・表のみで構成
- 選定5問・16小問の要求知識を維持
- Topic 04/07/11/18/19の後続論点、未確認の新幹線実車値・特性式・感度係数は追加していない

PowerPointをPDFへ変換して全4枚を180 dpiでレンダリングし、文字欠け、重なり、はみ出し、黒塗り、空白スライドがないことを確認した。`slides_test.py` によるスライド外はみ出し検査もPASSした。

## 判定

Topic 03は `topic_03_images_pptx_complete`。まだ `completed` ではない。完成数は `2 / 20` のまま。次工程は、完成教材のみを用いた選定5問・16小問の完成後独立再解答。
