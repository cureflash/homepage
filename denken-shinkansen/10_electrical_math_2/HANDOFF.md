# HANDOFF - 電験二種「電気数学」

更新日: 2026-09-15

## 現在地

Topic 01〜08は `completed`。

完成数: `8 / 20`

current_status: `topic_08_completed`

active_topic: `09 ラプラス変換`

次工程: Topic 09の制作前EXAM_ALIGNMENT。

## 上位仕様

毎runで以下を正本として確認する。

- `denken-shinkansen/MASTER_SPEC.md`
- `denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`
- `denken-shinkansen/10_electrical_math_2/SPEC.md`
- 本 `HANDOFF.md`
- `STATUS.md`

仕様外論点を件数合わせで追加しない。二種相当の公式過去問対応を先に固定し、完成後は教材だけで独立再解答してPASSしたテーマだけを `completed` とする。

## Topic 07 完了記録

テーマ: `一階常微分方程式`

source:
`topics/07_first_order_ode/07_first_order_ode.md`

最終QA:
`topics/07_first_order_ode/07_first_order_ode_final_qa.md`

完成後独立再解答:
`topics/07_first_order_ode/07_first_order_ode_exam_reanswer.md`

固定EXAM_ALIGNMENTは一次5問・22小問。完成後独立再解答 `22 / 22 PASS`。全品質ゲートPASSで `completed`。

## Topic 08 完了記録

テーマ: `二階常微分方程式`

source:
`topics/08_second_order_ode/08_second_order_ode.md`

解説PDF:
`topics/08_second_order_ode/08_second_order_ode_explanation.pdf`

練習source:
`topics/08_second_order_ode/08_second_order_ode_practice.md`

練習PDF:
`topics/08_second_order_ode/08_second_order_ode_practice.pdf`

PowerPoint:
`topics/08_second_order_ode/08_second_order_ode_images.pptx`

PowerPoint QA:
`topics/08_second_order_ode/08_second_order_ode_powerpoint_qa.md`

完成後独立再解答:
`topics/08_second_order_ode/08_second_order_ode_exam_reanswer.md`

最終QA:
`topics/08_second_order_ode/08_second_order_ode_final_qa.md`

### Topic 08 固定範囲

- 二階線形微分方程式
- 特性方程式
- 実根
- 重根
- 複素共役根
- 過減衰
- 臨界減衰
- 不足減衰
- 固有角周波数
- 減衰比
- RLC回路
- 機械系
- 二次遅れの時間領域表現

Topic 09のラプラス変換、Topic 10の伝達関数・極・零点は先取りしていない。

### Topic 08 EXAM_ALIGNMENT

固定一次5問・15小問。

- R8 一次 理論 問1 (4)〜(5)
- R8 一次 理論 問6 (3)〜(4)
- R3 一次 理論 問5 (1)〜(4)
- H28 一次 理論 問3 (1)〜(5)
- H24 一次 理論 問3 (1)〜(2)

制作前独立再解答・公式解答照合: `15 / 15 PASS`

二次「機械・制御」の二次系候補は確認済みだが、確認できた問題はラプラス変換または伝達関数を前提とするため非採用。Topic 09〜10を先取りする件数合わせは0件。

### Topic 08 成果物QA

- 解説本文＋3段階例題: PASS
- 解説PDF: A4縦5ページ、200 dpi `5 / 5 PASS`、文字抽出QA PASS
- 練習問題: 12問（基礎3／標準6／複合3）、全問五肢択一、独立計算・正答一意性 `12 / 12 PASS`
- 練習PDF: A4縦5ページ、200 dpi `5 / 5 PASS`、文字抽出QA PASS
- PowerPoint: 16:9・5枚、表示QA `5 / 5 PASS`、overflow 0件、ZIP整合性PASS
- 完成後独立再解答: `15 / 15 PASS`
- 教材外知識補完: 0件
- 固定範囲外追加: 0件
- 未確認実車値依存: 0件

### Topic 08 最終QA

初回最終QAは、主sourceの進捗記録2箇所だけが旧状態だったため `NEEDS_REVISION`。

その後、`08_second_order_ode.md` の以下だけを実成果物へ同期した。

- 冒頭 `## 状態`
- 末尾 `## 次工程`

教材本文、固定EXAM_ALIGNMENT、数式、3段階例題、問題、PDF、PowerPoint、完成後独立再解答は変更していない。

再判定で以下を確認した。

- 必須成果物実在: PASS
- 固定EXAM_ALIGNMENT 一次5問・15小問: PASS
- 完成後独立再解答 `15 / 15 PASS`: PASS
- 表示QA: PASS
- source進捗整合: PASS
- Topic 09〜10先取り: 0件
- 固定範囲外追加: 0件
- 二次記述の件数合わせ: 0件
- 未確認実車値依存: 0件

総合判定: `PASS / completed`。

## 次に行うこと

Topic 09 `ラプラス変換` の制作前EXAM_ALIGNMENTを1段階進める。

系列SPECのTopic 09固定範囲は以下。

- ラプラス変換の定義
- 線形性
- 微分の変換
- 積分の変換
- 初期値
- 代表的な変換対
- 部分分数分解
- 逆ラプラス変換
- 一階・二階微分方程式を時間領域で解いた後にラプラス変換で解き直し、意味を比較する

制作前に公式過去問を直近年度優先で調査し、二種相当の要求知識・式・設問型・教材内必要説明を固定する。Topic 10の伝達関数・極・零点を先取りしない。
