# STATUS - 電験二種「電気数学」

更新日: 2026-09-13

## 状態
- active_series: `10_electrical_math_2`
- exam_aligned_completed_topics: 2 / 20
- current_status: `topic_03_explanation_source_complete`
- last_completed_topic: `02 ベクトルと座標変換`
- active_topic: `03 偏微分・全微分`
- next_start: Topic 03の解説PDFを作成し、全ページQAを行う。sourceの固定範囲と3段階例題だけを使用し、Topic 04の極値・最適条件、Topic 07の微分方程式、Topic 11の一般行列、Topic 18・19の反復計算・最適化は先取りしない

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
- [ ] 解説PDF
- [ ] 練習PDF（解答・完全解説付き）
- [ ] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの完成後独立再解答
- [ ] 最終QA PASS

## 今回進めた内容

Topic 03 `偏微分・全微分` の解説本文＋3段階例題を `topics/03_partial_total_differentials/03_partial_total_differentials.md` に追加した。

本文へ反映した固定論点:
- 多変数関数と「固定量／変化量」の整理
- 偏微分 `∂y/∂x`
- 全微分 `dy=Σ(∂y/∂xi)dxi`
- 全時間微分 `dy/dt=Σ(∂y/∂xi)(dxi/dt)`
- 一次近似 `Δy≈dy` と二次微小項の大小比較
- 絶対感度・相対感度 `S_x^y=(x/y)(∂y/∂x)`
- 近似条件、符号、単位、元式代入による検算

3段階例題:
- 基礎: `P=V^2/R` の偏微分と全微分
- 本試験標準: `Zx={k/(1-k)}Zs` の二変数誤差伝播
- 複合・ひっかけ: `G=A/(1+AH)` のA・Hに対する相対感度

選定5問・16小問の要求事項を本文対応節へマッピング済み。未確認の新幹線実車値・特性式・感度係数は追加していない。

## 判定

Topic 03は `topic_03_explanation_source_complete`。まだ `completed` ではない。完成数は `2 / 20` のまま。次工程は解説PDF作成と全ページQA。