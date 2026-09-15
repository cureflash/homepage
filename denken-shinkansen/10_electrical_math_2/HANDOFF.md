# HANDOFF - 電験二種「電気数学」

更新日: 2026-09-15

## 現在地

Topic 01〜07は `completed`。

完成数: `7 / 20`

current_status: `topic_07_completed`

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

R8問6のC-L結合となる(3)〜(5)は固定範囲外として除外。直近R7〜R5二次「機械・制御」はTopic 09〜10相当の伝達関数・ラプラス領域が中心のため、件数合わせで追加していない。

完成後独立再解答は `22 / 22 PASS`。教材外知識補完、固定範囲外追加、Topic 08〜10先取り、二次記述の件数合わせ、未確認実車値依存はいずれも0件。

完成成果物:
- 解説PDF: `topics/07_first_order_ode/07_first_order_ode_explanation.pdf`
- 練習source: `topics/07_first_order_ode/07_first_order_ode_practice.md`
- 練習PDF: `topics/07_first_order_ode/07_first_order_ode_practice.pdf`
- PowerPoint: `topics/07_first_order_ode/07_first_order_ode_images.pptx`
- PowerPoint QA: `topics/07_first_order_ode/07_first_order_ode_powerpoint_qa.md`

表示QA:
- 解説PDF: A4縦5ページ、200 dpi全5ページ表示QA・文字抽出QA PASS
- 練習PDF: A4縦4ページ、200 dpi全4ページ表示QA・文字抽出QA PASS
- PowerPoint: 16:9・5枚、表示QA・overflow・ZIP整合性PASS

前回最終QAの唯一のFAILだった主source進捗記録2箇所は同期済み。再判定で全品質ゲートPASSとなり、Topic 07を `completed` とした。

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

## 次に行うこと

Topic 08の制作前EXAM_ALIGNMENTを行う。

1. `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列`SPEC.md`を再確認する。
2. 電気技術者試験センター公式過去問を直近年度優先で調査する。
3. Topic 08固定範囲に直接対応する問題だけを選定する。
4. 二種では一次・二次を合わせ原則5問以上を調査し、直接対応する二次記述問題が確認できる場合は最低1問含める。
5. 要求知識・式・設問型・教材内必要説明をsourceへ固定する。
6. Topic 09以降のラプラス変換・伝達関数等を件数合わせで先取りしない。
7. 保存済み正答を見ずに制作前独立再解答し、公式解答と照合する。