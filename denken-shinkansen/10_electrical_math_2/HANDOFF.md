# HANDOFF - 電験二種「電気数学」

更新日: 2026-09-15

## 現在地

Topic 01〜08は `completed`。

完成数: `8 / 20`

current_status: `topic_09_explanation_pdf_complete`

active_topic: `09 ラプラス変換`

次工程: Topic 09の練習問題source。

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

## Topic 09 進行記録

テーマ: `ラプラス変換`

source:
`topics/09_laplace_transform/09_laplace_transform.md`

解説PDF:
`topics/09_laplace_transform/09_laplace_transform_explanation.pdf`

### Topic 09 固定範囲

- ラプラス変換の定義
- 線形性
- 微分の変換
- 積分の変換
- 初期値
- 代表的な変換対
- 部分分数分解
- 逆ラプラス変換
- 一階・二階微分方程式を時間領域で解いた後にラプラス変換で解き直し、意味を比較する

Topic 10の伝達関数・極・零点、安定判別、周波数応答は先取りしない。

### Topic 09 EXAM_ALIGNMENT

固定二次5問・6対象設問。

- R6 二次 機械・制御 問4 (4)
- H29 二次 機械・制御 問4 (1)〜(2)
- H25 二次 機械・制御 問4 (1)
- H24 二次 機械・制御 問4 (1)
- H18 二次 機械・制御 問4 (1)

制作前独立再解答・公式標準解答照合: `6 / 6 PASS`。

選定境界:
- R7 問4は伝達関数・定常偏差・畳み込み等が中心でTopic 10以降へ跨るため非採用。
- R6 問4は(4)だけを対象とし、前小問で得る並列結合後の有理式を既知としてラプラス変換・部分分数分解・逆変換だけを扱う。
- H29は微分・積分の変換と初期値を直接要求する(1)〜(2)だけを採用。
- H25/H24/H18は与えられたラプラス領域の式から時間応答を復元する設問だけを採用。
- 件数合わせのTopic 10論点追加は0件。

H18 問4 (1)は公式標準解答どおり初期値 `y0` を任意のまま残し、`y(t)=y0+(1/(2J))(1-cos 2t)` として固定した。初期値を勝手に0としない。

### Topic 09 解説本文＋3段階例題

主sourceへ完成済み。

本文では以下を収録した。
- 定義と線形性
- 代表的な変換対
- 微分の変換と初期値
- 積分の変換
- RLC回路式の変換
- 部分分数分解（単純一次因子・重複因子）
- 逆ラプラス変換
- Topic 07の一階方程式をラプラス変換で解き直す比較
- Topic 08の二階方程式をラプラス変換で解き直す比較
- 非零初期値を保持する解法
- 単位ステップと単位インパルスの区別
- 二種二次向け解法アルゴリズム

3段階例題:
- 基礎: 変換対と線形性
- 本試験標準: 初期値0の直列RLC回路
- 複合・ひっかけ: 非零初期値を残した微分方程式の逆変換

固定5問・6対象設問への本文マッピングは `6 / 6`。Topic 10先取り、固定範囲外追加、未確認実車値依存はいずれも0件。

### Topic 09 解説PDF

`topics/09_laplace_transform/09_laplace_transform_explanation.pdf`

QA:
- A4縦5ページ
- 200 dpi全ページ表示QA `5 / 5 PASS`
- 文字抽出QA `PASS`
- 固定二次5問・6対象設問の反映 `6 / 6`
- 3段階例題反映: PASS
- Topic 10先取り: 0件
- 固定範囲外追加: 0件
- 未確認実車値依存: 0件

## 次に行うこと

Topic 09 `ラプラス変換` の練習問題sourceを1段階進める。

固定済みEXAM_ALIGNMENTの5問・6対象設問と完成済み解説だけを根拠にし、Topic 10の伝達関数・極・零点を追加しない。