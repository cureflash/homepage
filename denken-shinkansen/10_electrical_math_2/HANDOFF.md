# HANDOFF - 電験二種「電気数学」

更新日: 2026-09-15

## 現在地

Topic 01〜07は `completed`。

完成数: `7 / 20`

current_status: `topic_08_final_qa_needs_revision`

active_topic: `08 二階常微分方程式`

## Topic 07 完了記録

source:
`topics/07_first_order_ode/07_first_order_ode.md`

最終QA:
`topics/07_first_order_ode/07_first_order_ode_final_qa.md`

完成後独立再解答:
`topics/07_first_order_ode/07_first_order_ode_exam_reanswer.md`

固定EXAM_ALIGNMENTは一次5問・22小問。

- R8 一次 理論 問6 (1)〜(2)
- R7 一次 理論 問6 (1)〜(5)
- R6 一次 理論 問4 (1)〜(5)
- R5 一次 理論 問5 (1)〜(5)
- R4 一次 理論 問4 (1)〜(5)

完成後独立再解答は `22 / 22 PASS`。全品質ゲートPASSで `completed`。

## Topic 08 固定範囲

テーマ: `二階常微分方程式`

系列SPECで扱う内容:
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
- 二次遅れ

Topic 09のラプラス変換、Topic 10の伝達関数・極・零点は先取りしない。

## Topic 08 EXAM_ALIGNMENT完了記録

source:
`topics/08_second_order_ode/08_second_order_ode.md`

固定EXAM_ALIGNMENTは一次5問・15小問。

- R8 一次 理論 問1 (4)〜(5)
- R8 一次 理論 問6 (3)〜(4)
- R3 一次 理論 問5 (1)〜(4)
- H28 一次 理論 問3 (1)〜(5)
- H24 一次 理論 問3 (1)〜(2)

制作前独立再解答・公式解答照合: `15 / 15 PASS`

教材内必要説明として以下を固定済み。

- 時間領域の二階線形微分方程式
- 特性方程式と判別式
- 異なる実根・重根・複素共役根の解形
- 過減衰・臨界減衰・不足減衰
- `ω_n`、`ζ`、`ω_d` の区別
- 直列RLCの `Lq''+Rq'+q/C=0`
- `ω_n=1/sqrt(LC)`、`ζ=(R/2)sqrt(C/L)`
- 機械系 `mx''+cx'+kx=F(t)` とRLCの共通構造
- 二次遅れの時間領域表現

二次「機械・制御」はR3問4、R2問4、H29問4、H19問4等の候補を確認したが、確認できた二次系・減衰関連問題はいずれもラプラス変換または伝達関数を前提とする。Topic 09〜10先取りを避けるため採用0件。件数合わせの範囲追加はしていない。

## Topic 08 解説source完了記録

固定一次5問・15小問の要求事項を解説本文へ全件接続した。

本文の主な構成:
- 二階方程式で初期条件が二つ必要な理由
- 特性方程式の導出
- 異なる実根・重根・複素共役根の解形
- 判別式と減衰比による根分類
- `ω_n`、`ζ`、`ω_d` の区別
- 直列RLCの二階方程式と初期条件
- R8問6型の `i_L=-dq/dt` と一次微分係数 `2R`
- H28問3型の異なる二実根と定数決定
- 機械系 `mx''+cx'+kx=F(t)`
- 無減衰振動と固有周期
- 二次遅れの時間領域表現
- 本試験用解法アルゴリズム
- 新幹線への接続は未確認実車値を使わない教育用局所モデルに限定

3段階例題:
1. 基礎: `m=2 kg`, `k=18 N/m` の無減衰固有振動
2. 本試験標準: `q''+6q'+5q=0` の過減衰RLC自然応答
3. 複合: `L=1 H`, `R=2 Ω`, `C=0.25 F` の不足減衰RLCで `ω_n=2`, `ζ=0.5`, `ω_d=sqrt3`

解説source品質判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

- 固定一次5問・15小問の本文マッピング: PASS
- 3段階例題: PASS
- 制作前独立再解答 `15 / 15 PASS`: 維持
- Topic 09〜10先取り: 0件
- 固定範囲外追加: 0件
- 未確認実車値追加: 0件

## Topic 08 解説PDF完了記録

解説PDF:
`topics/08_second_order_ode/08_second_order_ode_explanation.pdf`

- A4縦 5ページ
- 固定一次5問・15小問への解法経路を収録
- 基礎／本試験標準／複合の3段階例題を収録
- 特性方程式、根分類、`ω_n`・`ζ`・`ω_d`、RLC初期条件をPDF単体で追える構成
- 200 dpi 全5ページ表示QA: `5 / 5 PASS`
- 文字抽出QA: `PASS`
- Topic 09〜10先取り: 0件
- 固定範囲外追加: 0件
- 未確認実車値追加: 0件

解説PDF品質判定: `PASS / EXPLANATION_PDF_COMPLETE`

## Topic 08 練習source完了記録

練習source:
`topics/08_second_order_ode/08_second_order_ode_practice.md`

- 全12問、全問五肢択一
- 基礎3問／標準6問／複合3問
- 固定一次5問・15小問の要求事項へ全件接続
- 特性方程式、根分類、初期条件、RLC、機械系、`ω_n`・`ζ`・`ω_d`、二次遅れの時間領域表現を反復
- 各問に途中式・理由・単位・検算を含む完全解説
- 独立計算・正答一意性QA: `12 / 12 PASS`
- Topic 09〜10先取り: 0件
- 固定範囲外追加: 0件
- 未確認実車値追加: 0件

練習source品質判定: `PASS / PRACTICE_SOURCE_COMPLETE`

## Topic 08 練習PDF完了記録

練習PDF:
`topics/08_second_order_ode/08_second_order_ode_practice.pdf`

- A4縦 5ページ
- 全12問（基礎3問／標準6問／複合3問）＋完全解説を収録
- 固定一次5問・15小問への接続を維持
- 200 dpi 全5ページ表示QA: `5 / 5 PASS`
- 文字抽出QA: `PASS`
- 独立計算・正答一意性: `12 / 12 PASS`
- Topic 09〜10先取り: 0件
- 固定範囲外追加: 0件
- 未確認実車値追加: 0件

練習PDF品質判定: `PASS / PRACTICE_PDF_COMPLETE`

## Topic 08 PowerPoint完了記録

解説画像PowerPoint:
`topics/08_second_order_ode/08_second_order_ode_images.pptx`

PowerPoint QA:
`topics/08_second_order_ode/08_second_order_ode_powerpoint_qa.md`

- 16:9、全5スライド
- 二階方程式の本試験解法フローを可視化
- 判別式・減衰比による根分類、`ω_n`・`ζ`・`ω_d` の区別を可視化
- 直列RLCの二階方程式、切替初期条件、R8問6型の `2R` 係数を可視化
- RLCと機械系の共通二階構造を可視化
- 固定一次5問・15小問との対応表を収録
- 全5スライド表示QA: `5 / 5 PASS`
- overflow: `0件`
- PPTX ZIP整合性: `PASS`
- Topic 09〜10先取り: 0件
- 固定範囲外追加: 0件
- 未確認実車値追加: 0件

PowerPoint品質判定: `PASS / POWERPOINT_COMPLETE`

## Topic 08 完成後独立再解答完了記録

完成後独立再解答:
`topics/08_second_order_ode/08_second_order_ode_exam_reanswer.md`

固定一次5問・15小問を完成教材だけで再解答し、各答案を確定後に公式解答と照合した。

- R8 一次 理論 問1 (4)〜(5): `(ラ, ロ)` → `2 / 2 PASS`
- R8 一次 理論 問6 (3)〜(4): `(チ, ヨ)` → `2 / 2 PASS`
- R3 一次 理論 問5 (1)〜(4): `(ホ, ル, ヌ, ハ)` → `4 / 4 PASS`
- H28 一次 理論 問3 (1)〜(5): `(ル, ト, ハ, カ, ヘ)` → `5 / 5 PASS`
- H24 一次 理論 問3 (1)〜(2): `(ニ, ト)` → `2 / 2 PASS`

完成後独立再解答: `15 / 15 PASS`

- 教材外知識補完: 0件
- Topic 09〜10先取り: 0件
- 固定範囲外追加: 0件
- 二次記述の件数合わせ: 0件
- 未確認実車値依存: 0件

品質判定: `PASS / EXAM_REANSWER_COMPLETE`

## Topic 08 最終QA記録

最終QA:
`topics/08_second_order_ode/08_second_order_ode_final_qa.md`

判定: `NEEDS_REVISION / IN_PROGRESS`

PASS:
- 必須成果物実在
- 固定一次5問・15小問のEXAM_ALIGNMENT
- 制作前独立再解答 `15 / 15 PASS`
- 完成後独立再解答 `15 / 15 PASS`
- 解説PDF表示QA `5 / 5 PASS`
- 練習PDF表示QA `5 / 5 PASS`
- PowerPoint表示QA `5 / 5 PASS`
- Topic 09〜10先取り 0件
- 固定範囲外追加 0件
- 未確認実車値依存 0件

FAIL:
- `08_second_order_ode.md` 冒頭 `## 状態` が解説source完了時点の旧進捗
- 同source末尾 `## 次工程` が「解説PDF作成」の旧進捗

教材内容・試験対応そのものの不足ではなく、GitHub正本内の進捗記録不整合だけが残っている。

## 次に行うこと

`topics/08_second_order_ode/08_second_order_ode.md` の旧進捗2箇所だけを現在地へ同期する。

- 冒頭 `## 状態` を、解説PDF・練習source/PDF・PowerPoint・完成後独立再解答まで完了済みの状態へ更新する。
- 末尾 `## 次工程` を、source同期後の最終QA再判定へ更新する。
- 教材本文、固定EXAM_ALIGNMENT、数式、3段階例題、問題、PDF、PowerPoint、完成後独立再解答は変更しない。
