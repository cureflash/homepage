# STATUS - 電験二種「電気数学」

更新日: 2026-09-15

## 状態

- active_series: `10_electrical_math_2`
- exam_aligned_completed_topics: 7 / 20
- current_status: `topic_08_explanation_source_complete`
- last_completed_topic: `07 一階常微分方程式`
- active_topic: `08 二階常微分方程式`
- next_start: Topic 08の解説PDFを作成する。完成済みsourceの固定一次5問・15小問、3段階例題、固定範囲だけを収録し、Topic 09のラプラス変換、Topic 10の伝達関数・極・零点は先取りしない。PDF完成後は全ページ表示QAを行う

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
- [x] 解説画像PowerPoint
- [x] PowerPoint表示QA
- [x] 完成後独立再解答 `22 / 22 PASS`
- [x] 最終QA実施 → `NEEDS_REVISION`
- [x] source進捗記録2箇所の同期
- [x] 最終QA再判定 → `PASS`
- [x] `completed`

## Topic 08 制作品質ゲート

- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 公式過去問を直近年度優先で調査
- [x] 一次5問・15小問を固定
- [x] 要求知識・式・設問型・教材内必要説明をsourceへ固定
- [x] 二次「機械・制御」の二次系候補を確認
- [x] 二次候補はラプラス変換・伝達関数を前提とするためTopic 09〜10先取りを避けて非採用
- [x] 制作前独立再解答・公式解答照合 `15 / 15 PASS`
- [x] 解説本文＋3段階例題
- [ ] 解説PDF
- [ ] 練習問題source
- [ ] 練習PDF
- [ ] 解説画像PowerPoint
- [ ] 完成後独立再解答
- [ ] 最終QA
- [ ] `completed`

## 今回進めた内容

Topic 08 `二階常微分方程式` の解説本文＋3段階例題を完成した。

本文では固定一次5問・15小問の要求事項を全件マッピングし、以下を時間領域だけで整理した。

- 二階線形微分方程式と二つの初期条件
- 特性方程式
- 異なる実根・重根・複素共役根
- 過減衰・臨界減衰・不足減衰・無減衰
- `ω_n`、`ζ`、`ω_d`
- 直列RLCの `Lq''+Rq'+q/C=0`
- 電流方向に応じた `i=dq/dt` / `i=-dq/dt`
- RLC切替時の初期条件
- 機械系 `mx''+cx'+kx=F(t)`
- 二次遅れの時間領域表現

3段階例題:
- 基礎: 無減衰の固有振動
- 本試験標準: 異なる二実根のRLC自然応答
- 複合: 不足減衰RLCで `ω_n` と `ω_d` を区別

Topic 09のラプラス変換、Topic 10の伝達関数・極・零点、固定範囲外論点、未確認実車値の追加はいずれも0件。

制作前独立再解答 `15 / 15 PASS` は変更なし。

## 判定

Topic 08は `IN_PROGRESS / EXPLANATION_SOURCE_COMPLETE`。完成数は `7 / 20` のまま。

次は解説PDF。