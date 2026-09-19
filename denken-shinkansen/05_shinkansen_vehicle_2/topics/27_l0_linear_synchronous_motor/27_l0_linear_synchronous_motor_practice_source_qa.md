# 27 L0系① リニア同期モータ — 練習source QA

更新日: 2026-09-20

判定: `PASS / PRACTICE_SOURCE_COMPLETE`

## 対象

- 固定EXAM_ALIGNMENT: `27_l0_linear_synchronous_motor.md`
- 解説source: `27_l0_linear_synchronous_motor_explanation_source.md`
- 解説PDF: `27_l0_linear_synchronous_motor_explanation.pdf`
- 練習source: `27_l0_linear_synchronous_motor_practice_source.md`

## 構成QA

- 一次試験型: `8問`（五肢択一）
- 二次試験型: `4問`（記述・計算）
- 合計: `12問`
- 一次正答一意性: `8 / 8 PASS`
- 二次数値・論理独立再計算: `4 / 4 PASS`
- 全問独立再計算・再判定: `12 / 12 PASS`

## 過去問対応品質ゲート

- 固定過去問: `5 / 5 connected`
- 一次答案要素: `18 / 18 connected`
- 二次答案要素: `5 / 5 connected`
- 合計答案要素: `23 / 23 connected`
- SPEC必須7項目: `7 / 7 covered`
- SPEC指定2可視化の計算系: `2 / 2 aligned`

接続内訳:

1. R7一次「機械」問1 — 界磁起磁力、無負荷誘導起電力、電機子反作用起磁力、内部誘導起電力、漏れリアクタンス: `5 / 5`
2. R6一次「機械」問1 — 電機子反作用、増磁、交差磁化、減磁、誘導起電力低下: `5 / 5`
3. H29一次「機械」問1 — 極数、周波数、電機子反作用: `3 / 3`
4. H21一次「機械」問5 — フェーザ幾何の対応、`E=E_0-jX_aI_a`、リアクタンス降下、反作用リアクタンス、`X_s=X_a+X_l`: `5 / 5`
5. R6二次「機械・制御」問1 — 三相短絡特性、無負荷飽和曲線、短絡比、pu同期インピーダンス、Ω値換算: `5 / 5`

## 数値再計算

- 問1: `900 min^-1` — PASS
- 問2: `100 m/s` — PASS
- 問3: `60 Hz` — PASS
- 問5: `1.85 Ω/相` — PASS
- 問8: `K=1.20`, `Z_s=0.833 p.u.` — PASS
- 問10: `K=1.20`, `Z_base=4.356 Ω`, `Z_s=3.63 Ω`, `X_s=3.624... Ω≈3.62 Ω` — PASS
- 問11: `600 min^-1`, `120 m/s`, `62.5 Hz` — PASS
- 問12: `X_s=1.75 Ω/相`, `X_sI_a=140 V/相` — PASS

知識問題4・6・7・9についても固定解説sourceの定義・測定手順と照合し、矛盾なし。

## 境界QA

- 固定EXAM_ALIGNMENT変更: `0件`
- 公式過去問本文の複製: `0件`
- 未確認L0系実車値の真値化: `0件`
- 問2・3・10〜12の数値: `一般問題または教材用仮定値`
- 負荷角 `δ`、出力角特性、推力式の本格解析: `0件`（Topic 28へ維持）
- 一般式 `N_s=120f/P`, `v_s=2τf`, `X_s=X_a+X_l`: `変更0件`
- SPEC外主題追加: `0件`
- exact blocker: `0件`

## 判定

Topic 27練習sourceは `PASS / PRACTICE_SOURCE_COMPLETE`。Topic 27全体は未完了で、完成数は `26 / 39` のまま。

次工程: 練習PDF生成＋PDF QA。
