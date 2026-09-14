# Topic 07 最終QA記録

対象: `07 一階常微分方程式`

実施日: 2026-09-15

## 判定

`NEEDS_REVISION / IN_PROGRESS`。

必須成果物、固定EXAM_ALIGNMENT、完成後独立再解答、表示QA、SPEC範囲境界はPASS。ただし主source Markdownの進捗記録2箇所が実成果物と不整合のため、`completed` にはしない。

## 必須成果物の実在確認

GitHub正本上で次を確認した。

| 成果物 | 判定 |
|---|---|
| source Markdown | PASS（技術内容） / NEEDS_REVISION（進捗記録） |
| 解説PDF | PASS |
| 練習問題source | PASS |
| 練習PDF | PASS |
| 解説画像PowerPoint | PASS |
| PowerPoint QA | PASS |
| 完成後独立再解答記録 | PASS |
| 最終QA記録 | PASS |

## EXAM_ALIGNMENT確認

固定品質ゲートは一次5問・22小問。

- R8 一次 理論 問6 (1)〜(2)
- R7 一次 理論 問6 (1)〜(5)
- R6 一次 理論 問4 (1)〜(5)
- R5 一次 理論 問5 (1)〜(5)
- R4 一次 理論 問4 (1)〜(5)

R8問6のC-L結合となる(3)〜(5)は固定範囲外として除外済み。直近R7〜R5二次「機械・制御」はTopic 09〜10相当の伝達関数・ラプラス領域を中心とするため、件数合わせで追加していない。

## 完成後独立再解答

完成教材だけを使った再解答は一次5問・22小問すべてPASS。

- R8: `2 / 2 PASS`
- R7: `5 / 5 PASS`
- R6: `5 / 5 PASS`
- R5: `5 / 5 PASS`
- R4: `5 / 5 PASS`
- 合計: `22 / 22 PASS`

教材外知識補完、固定範囲外追加、Topic 08〜10先取り、二次記述の件数合わせ、未確認実車値依存はいずれも0件。

## 表示・成果物QA

- 解説PDF: A4縦5ページ、200 dpi全5ページ表示QA・文字抽出QA PASS
- 練習PDF: A4縦4ページ、200 dpi全4ページ表示QA・文字抽出QA PASS
- 練習問題: 全12問・全問五肢択一、独立計算・正答一意性 `12 / 12 PASS`
- PowerPoint: 16:9・5枚、全5スライド表示QA、overflow、ZIP整合性PASS

## SPEC境界確認

固定範囲は変数分離形、一階線形微分方程式、初期条件、同次解・定常特解、指数応答、時定数、RC・RL・時間領域の一次遅れ。

Topic 08の二階常微分方程式、Topic 09のラプラス変換、Topic 10の伝達関数・極・零点は先取りしていない。未確認の実車時定数・回路定数も追加していない。

## FAIL項目

主source `07_first_order_ode.md` の進捗記録が実成果物と一致していない。

1. `## 状態` が「解説本文＋3段階例題まで完了。解説PDF以降は未実施」のまま残っている。
2. `## 次工程` が「次は解説PDFを作成」のまま残っている。

実際には解説PDF、練習source/PDF、PowerPoint、PowerPoint QA、完成後独立再解答まで完了しているため、進捗正本として不整合。

## 最終判定

- 必須成果物実在: PASS
- 二種相当EXAM_ALIGNMENT 一次5問・22小問: PASS
- 完成後独立再解答 `22 / 22`: PASS
- 教材外知識補完0件: PASS
- SPEC外内容の非混入: PASS
- 表示QA: PASS
- source Markdown進捗記録と実成果物の整合: FAIL

総合判定: `NEEDS_REVISION / IN_PROGRESS`。

次は主sourceの `## 状態` と `## 次工程` だけを実成果物へ同期する。教材本文、固定EXAM_ALIGNMENT、数式、例題、練習問題、PDF、PowerPointは変更しない。
