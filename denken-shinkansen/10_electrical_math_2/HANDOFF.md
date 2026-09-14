# HANDOFF - 電験二種「電気数学」

更新日: 2026-09-15

## 現在地

Topic 01〜06は `completed`。

完成数: `6 / 20`

current_status: `topic_07_final_qa_needs_revision`

active_topic: `07 一階常微分方程式`

## Topic 07 source

`topics/07_first_order_ode/07_first_order_ode.md`

制作前EXAM_ALIGNMENT、制作前独立再解答、解説本文＋3段階例題、解説PDF、練習問題source、練習PDF、解説画像PowerPoint、表示QA、完成後独立再解答まで完了。

最終QA記録:
`topics/07_first_order_ode/07_first_order_ode_final_qa.md`

判定は `NEEDS_REVISION / IN_PROGRESS`。技術内容・成果物・過去問対応はPASSだが、主sourceの進捗記録2箇所が旧状態のため未完了。

## Topic 07 固定範囲

テーマ: `一階常微分方程式`

系列SPECで扱う内容:
- 変数分離形
- 一階線形微分方程式
- 初期条件
- 同次解・特解の基本
- 指数応答
- 時定数
- RC・RL・一次遅れ

代表式:
- `L di/dt + Ri = V`
- `y(t)=y∞+(y0-y∞)e^{-t/τ}`
- RC: `τ=R_eq C`
- RL: `τ=L/R_eq`

Topic 08の二階常微分方程式、Topic 09のラプラス変換、Topic 10の伝達関数・極・零点は先取りしない。

## 固定EXAM_ALIGNMENT

品質ゲート対象は一次5問・22小問。

- R8 一次 理論 問6 (1)〜(2): RL立上り、初期条件、時定数。C-L結合となる(3)〜(5)は除外。
- R7 一次 理論 問6 (1)〜(5): コンデンサ初期電荷、電荷保存、KVL、`i=dq/dt`、一階線形微分方程式、定常値。
- R6 一次 理論 問4 (1)〜(5): RC初期値・定常値、過渡項、端子から見た等価抵抗、`τ=R_eq C`。
- R5 一次 理論 問5 (1)〜(5): RL一階微分方程式、電流連続性、指数減衰、`τ=L/(R1+R2)`、コイル電圧。
- R4 一次 理論 問4 (1)〜(5): KCL/KVLからの一階微分方程式、指数立上り・減衰、スイッチ切替、時定数変化。

対象小問数: `22`。

二次試験は直近R7〜R5「機械・制御」を確認したが、Topic 09〜10相当の伝達関数・ラプラス領域が中心のため件数合わせで追加しない。

## 完成教材

- 解説PDF: `topics/07_first_order_ode/07_first_order_ode_explanation.pdf`
  - A4縦5ページ
  - 200 dpi全5ページ表示QA・文字抽出QA PASS
- 練習source: `topics/07_first_order_ode/07_first_order_ode_practice.md`
  - 全12問・全問五肢択一
  - 基礎3／標準6／複合3
  - 独立計算・正答一意性 `12 / 12 PASS`
- 練習PDF: `topics/07_first_order_ode/07_first_order_ode_practice.pdf`
  - A4縦4ページ
  - 200 dpi全4ページ表示QA・文字抽出QA PASS
- PowerPoint: `topics/07_first_order_ode/07_first_order_ode_images.pptx`
  - 16:9・5枚
  - 全5枚表示QA、overflow、ZIP整合性 PASS
- PowerPoint QA: `topics/07_first_order_ode/07_first_order_ode_powerpoint_qa.md`

教材外知識補完0件、固定範囲外追加0件、Topic 08〜10先取り0件、二次記述の件数合わせ0件、未確認実車値追加0件。

## 完成後独立再解答

記録:
`topics/07_first_order_ode/07_first_order_ode_exam_reanswer.md`

- R8: `2 / 2 PASS`
- R7: `5 / 5 PASS`
- R6: `5 / 5 PASS`
- R5: `5 / 5 PASS`
- R4: `5 / 5 PASS`
- 合計: `22 / 22 PASS`

教材外知識補完、固定範囲外追加、Topic 08〜10先取り、二次記述の件数合わせ、未確認実車値依存はいずれも0件。

## 最終QA

記録:
`topics/07_first_order_ode/07_first_order_ode_final_qa.md`

判定: `NEEDS_REVISION / IN_PROGRESS`

PASS:
- 必須成果物実在
- 固定一次5問・22小問
- 完成後独立再解答 `22 / 22 PASS`
- PDF / PowerPoint表示QA
- SPEC境界

FAIL:
1. 主sourceの `## 状態` が「解説PDF以降は未実施」の旧記録。
2. 主sourceの `## 次工程` が「次は解説PDF」の旧記録。

## 次に行うこと

主source `topics/07_first_order_ode/07_first_order_ode.md` の旧進捗2箇所だけを実成果物へ同期する。

- `## 状態` を完成後独立再解答まで完了・最終QA `NEEDS_REVISION` の現在地へ更新
- `## 次工程` を最終QA再判定へ更新
- 教材本文、固定EXAM_ALIGNMENT、数式、例題、問題、PDF、PowerPointは変更しない
- 同期後に最終QAを再実施し、全品質ゲートPASSの場合のみ `completed` とする
