# Topic 08 最終QA

実施日: 2026-09-15

対象: `08 二階常微分方程式`

判定: `NEEDS_REVISION / IN_PROGRESS`

## 1. 必須成果物

実在確認:

- `08_second_order_ode.md`: PASS
- `08_second_order_ode_explanation.pdf`: PASS
- `08_second_order_ode_practice.md`: PASS
- `08_second_order_ode_practice.pdf`: PASS
- `08_second_order_ode_images.pptx`: PASS
- `08_second_order_ode_powerpoint_qa.md`: PASS
- `08_second_order_ode_exam_reanswer.md`: PASS

判定: `PASS`

## 2. 試験対応品質ゲート

固定EXAM_ALIGNMENTは一次5問・15小問。

- R8 一次 理論 問1 (4)〜(5)
- R8 一次 理論 問6 (3)〜(4)
- R3 一次 理論 問5 (1)〜(4)
- H28 一次 理論 問3 (1)〜(5)
- H24 一次 理論 問3 (1)〜(2)

制作前独立再解答: `15 / 15 PASS`

完成後独立再解答: `15 / 15 PASS`

教材外知識補完: `0件`

二次記述の件数合わせ: `0件`

判定: `PASS`

## 3. 成果物QA

解説PDF:
- A4縦 5ページ
- 200 dpi 全5ページ表示QA: `5 / 5 PASS`
- 文字抽出QA: `PASS`

練習PDF:
- A4縦 5ページ
- 200 dpi 全5ページ表示QA: `5 / 5 PASS`
- 文字抽出QA: `PASS`
- 独立計算・正答一意性: `12 / 12 PASS`

PowerPoint:
- 16:9、全5スライド
- 全5スライド表示QA: `5 / 5 PASS`
- overflow: `0件`
- PPTX ZIP整合性: `PASS`

判定: `PASS`

## 4. 固定範囲境界

- Topic 09 ラプラス変換の先取り: `0件`
- Topic 10 伝達関数・極・零点の先取り: `0件`
- 固定範囲外追加: `0件`
- 未確認実車値依存: `0件`

判定: `PASS`

## 5. source進捗整合

`08_second_order_ode.md` の教材本文・EXAM_ALIGNMENT・数式・例題は現在の成果物と整合している。

ただし進捗記録に旧状態が2箇所残る。

1. 冒頭 `## 状態`
   - 「制作前EXAM_ALIGNMENT、制作前独立再解答・公式解答照合、解説本文＋3段階例題まで完了」
   - 「次工程は解説PDF」
   - 実際には解説PDF、練習source/PDF、PowerPoint、完成後独立再解答まで完了しているため不整合。

2. 末尾 `## 次工程`
   - 「本sourceだけを正本として、Topic 08の解説PDFを作成し、全ページ表示QAを行う」
   - 実際には後続成果物と完成後独立再解答まで完了しているため不整合。

判定: `FAIL`

## 6. 総合判定

必須成果物、試験対応、表示QA、固定範囲境界はすべてPASS。

source Markdownの進捗記録2箇所のみがGitHub正本の実態と不整合のため、Topic 08はまだ `completed` にしない。

総合判定: `NEEDS_REVISION / IN_PROGRESS`

次工程: `08_second_order_ode.md` の旧進捗2箇所だけを現在地へ同期する。教材本文、固定EXAM_ALIGNMENT、数式、3段階例題、問題、PDF、PowerPoint、完成後独立再解答は変更しない。
