# HANDOFF - 電験三種「電気数学」

更新日: 2026-09-17

## 現在地

Topic 01〜09は `completed`。

Topic 10 `指数関数・一階微分方程式入門` は、制作前EXAM_ALIGNMENT、制作前独立解答、解説本文＋3段階例題、解説PDF、練習問題source、練習PDFまで完了。

完成数: `9 / 12`

current_status: `topic_10_practice_pdf_complete`

last_completed_topic: `09 微積分で電気を読む`

active_topic: `10 指数関数・一階微分方程式入門`

next_start: `Topic 10 解説画像PowerPoint`

## Topic 10 固定仕様範囲

系列 `SPEC.md` のTopic 10だけを対象とする。

扱う:
- `e^x`
- 自然対数
- 指数減衰
- 時定数
- 一階線形微分方程式の意味
- RC充放電
- RL電流立上り・減衰
- 一次遅れ
- RC時定数 `τ=RC`
- RL時定数 `τ=L/R`
- `e^-1≈0.368`、`1-e^-1≈0.632`
- 初期値・最終値・時定数による波形判定
- 複雑なRC回路での `τ=R_eq C`

三種では高度な微分方程式解法を目的化せず、回路方程式から指数応答が生じる理由を優先する。

このTopicで追加しない:
- RLC二次過渡・減衰振動・固有角周波数・減衰係数
- ラプラス変換
- 伝達関数体系
- PID等の制御理論体系
- Topic 11の一般特性曲線読解体系

## Topic 10 固定EXAM_ALIGNMENT

品質ゲート対象は次の5問で固定。

- R8上 理論 問10: RL直列回路の時定数、電流立上り、抵抗電圧立上り、コイル電圧減衰
- R7下 理論 問10: RL直列回路で抵抗変更時の最終電流と立上り速度の比較
- R6下 理論 問10: 初期電荷0のRC回路の投入直後・十分後の電流比
- R5下 理論 問10: RC放電の時定数、減衰速度、`t=τ` の電圧、初期電流
- R2 理論 問10: テブナン等価抵抗を用いたRC時定数と最終電圧

制作前独立解答・公式解答照合: `5 / 5 PASS`。

固定5問から逆算した必須説明15項目は解説本文へ `15 / 15` 実装済み。

主source:
`topics/10_exponential_first_order_ode/10_exponential_first_order_ode.md`

## Topic 10 解説PDF

成果物:
`topics/10_exponential_first_order_ode/10_exponential_first_order_ode_explanation.pdf`

- A4縦5ページ
- 200 dpi表示QA `5 / 5 PASS`
- 文字抽出QA PASS
- クリッピング・重なり・文字化け0件
- 固定5過去問・必須説明15項目・3段階例題を固定範囲内で収録
- 固定EXAM_ALIGNMENT変更0件
- 固定範囲外追加0件
- Topic 11先取り0件
- 未確認新幹線実値追加0件

判定: `PASS / EXPLANATION_PDF_COMPLETE`。

## Topic 10 練習問題source

成果物:
`topics/10_exponential_first_order_ode/10_exponential_first_order_ode_practice.md`

- 全12問・全問五肢択一
- 難易度: 基礎3 / 標準7 / 複合2
- 完全解説付き
- 固定5過去問への接続 `5 / 5 PASS`
- 数値・論理QA `12 / 12 PASS`
- 正答一意性 `12 / 12 PASS`
- `e^-1`、自然対数、RC/RL時定数、初期値・最終値、RC放電、RL立上り、抵抗変更時波形、`R_eq C` を固定範囲内で演習化
- 固定EXAM_ALIGNMENT変更0件
- RLC二次過渡・ラプラス変換・伝達関数・PID追加0件
- Topic 11一般特性曲線体系の先取り0件
- 未確認新幹線実値追加0件

判定: `PASS / PRACTICE_SOURCE_COMPLETE`。

## Topic 10 練習PDF

成果物:
`topics/10_exponential_first_order_ode/10_exponential_first_order_ode_practice.pdf`

- A4縦4ページ
- 全12問＋完全解説を収録
- 200 dpi表示QA `4 / 4 PASS`
- 文字抽出QA PASS
- 正答・主要数値のsource一致 `12 / 12 PASS`
- 固定5過去問への接続 `5 / 5 PASS`
- 固定EXAM_ALIGNMENT変更0件
- RLC二次過渡・ラプラス変換・伝達関数・PID追加0件
- Topic 11一般特性曲線体系の先取り0件
- 未確認新幹線実値追加0件

判定: `PASS / PRACTICE_PDF_COMPLETE`。

## 次工程

Topic 10の解説画像PowerPointを作成する。

PowerPoint完了後もTopic 10は `completed` ではない。完成教材だけでの固定5問独立再解答、最終QAが残る。
