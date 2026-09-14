# STATUS - 電験二種「電気数学」

更新日: 2026-09-15

## 状態

- active_series: `10_electrical_math_2`
- exam_aligned_completed_topics: 6 / 20
- current_status: `topic_07_explanation_pdf_complete`
- last_completed_topic: `06 微積分で新幹線の運転曲線を解析する`
- active_topic: `07 一階常微分方程式`
- next_start: Topic 07の練習問題source。固定一次5問・22小問へ接続し、Topic 07固定範囲内で本試験型の問題と完全解説を作る

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
- [ ] 練習問題source
- [ ] 練習PDF
- [ ] 解説画像PowerPoint
- [ ] PowerPoint表示QA
- [ ] 完成後独立再解答
- [ ] 最終QA
- [ ] `completed`

## 今回進めた内容

Topic 07 `一階常微分方程式` の解説PDFを完成した。

成果物:
- `topics/07_first_order_ode/07_first_order_ode_explanation.pdf`
- A4縦5ページ

収録内容:
- 変数分離形、一階線形微分方程式、同次解＋定常特解
- 初期値・最終値・時定数からの指数応答
- RCの `τ=R_eq C`
- RLの `τ=L/R_eq`
- スイッチ切替とC電圧・L電流の連続性
- KCL/KVLによる一未知量への縮約
- 電荷保存から一階方程式を作る手順
- 時間領域の一次遅れ
- 本試験用解法アルゴリズム
- 基礎／本試験標準／複合の3段階例題
- 頻出ミス
- 固定一次5問・22小問の対応
- Topic 08〜10を先取りしない範囲境界

QA:
- 200 dpi 全5ページ表示QA: PASS
- 文字抽出QA: PASS
- 固定一次5問・22小問との対応維持: PASS
- 教材外知識補完: 0件
- 固定範囲外追加: 0件
- 未確認実車値追加: 0件

## 判定

Topic 07は `EXPLANATION_PDF_COMPLETE / IN_PROGRESS`。完成数は `6 / 20` のまま。次は練習問題source。