# STATUS - 電験二種「電気数学」

更新日: 2026-09-15

## 状態

- active_series: `10_electrical_math_2`
- exam_aligned_completed_topics: 6 / 20
- current_status: `topic_07_practice_pdf_complete`
- last_completed_topic: `06 微積分で新幹線の運転曲線を解析する`
- active_topic: `07 一階常微分方程式`
- next_start: Topic 07の解説画像PowerPoint。固定一次5問・22小問と本文の解法経路を可視化し、表示QA・overflow・PPTX整合性を確認する

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
- [ ] 解説画像PowerPoint
- [ ] PowerPoint表示QA
- [ ] 完成後独立再解答
- [ ] 最終QA
- [ ] `completed`

## 今回進めた内容

Topic 07 `一階常微分方程式` の練習PDFを完成した。

成果物:
- `topics/07_first_order_ode/07_first_order_ode_practice.md`
- `topics/07_first_order_ode/07_first_order_ode_practice.pdf`

構成:
- A4縦4ページ
- 全12問・全問五肢択一＋完全解説
- 基礎3問／標準6問／複合3問
- 固定一次5問・22小問へ全件接続
- R8: 問4
- R7: 問10・11
- R6: 問3・6・7
- R5: 問2・5・9
- R4: 問1・8・9
- SPEC固有の時間領域一次遅れ: 問12

QA:
- 200 dpi全ページ表示QA: `4 / 4 PASS`
- 文字抽出QA: PASS
- 全12問・完全解説の同期: PASS
- 独立計算・正答一意性: `12 / 12 PASS`
- 固定範囲外追加: 0件
- Topic 08〜10先取り: 0件
- 二次記述の件数合わせ: 0件
- 未確認実車値追加: 0件

## 判定

Topic 07は `PRACTICE_PDF_COMPLETE / IN_PROGRESS`。完成数は `6 / 20` のまま。次は解説画像PowerPoint。