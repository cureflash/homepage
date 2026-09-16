# HANDOFF - 電験三種「電気数学」

更新日: 2026-09-17

## 現在地

Topic 01〜10は `completed`。

Topic 10 `指数関数・一階微分方程式入門` は、制作前EXAM_ALIGNMENT、制作前独立解答、解説本文＋3段階例題、解説PDF、練習問題source、練習PDF、解説画像PowerPoint、完成後独立再解答前ブラインドゲート、完成教材だけでの固定5問独立再解答、初回最終QA、source進捗記録3箇所の同期、最終QA再判定まで完了し、`PASS / completed`。

完成数: `10 / 12`

current_status: `topic_10_completed`

last_completed_topic: `10 指数関数・一階微分方程式入門`

active_topic: `11 グラフ・特性曲線を読む`

next_start: `Topic 11制作前EXAM_ALIGNMENT`

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

## Topic 10 解説画像PowerPoint

成果物:
`topics/10_exponential_first_order_ode/10_exponential_first_order_ode_images.pptx`

- 16:9・5枚
- 一階応答共通形、RC、RL、複雑なRC、解法フロー＋固定5過去問対応を可視化
- 表示QA `5 / 5 PASS`
- overflow 0件
- PPTX ZIP整合性 PASS
- 固定5過去問への接続 `5 / 5 PASS`
- 固定EXAM_ALIGNMENT変更0件
- RLC二次過渡・ラプラス変換・伝達関数・PID追加0件
- Topic 11一般特性曲線体系の先取り0件
- 未確認新幹線実値追加0件

判定: `PASS / IMAGES_PPT_COMPLETE`。

## Topic 10 完成後独立再解答前ブラインドゲート

記録:
`topics/10_exponential_first_order_ode/10_exponential_first_order_ode_blind_gate.md`

- 固定品質ゲート対象5問は変更なし
- 主sourceの `## 制作前独立解答・公式解答照合` 節は、独立解答を確定するまで参照しない
- 公式問題文だけを取得して先に独立解答を固定し、その後に公式解答と照合する
- 教材本文・練習問題・PDF/PPTX・固定EXAM_ALIGNMENTは変更していない

判定: `BLIND_REANSWER_READY`。

## Topic 10 完成後独立再解答

記録:
`topics/10_exponential_first_order_ode/10_exponential_first_order_ode_independent_reanswer.md`

ブラインド条件を守り、固定5問の公式問題文だけを先に確認して独立解答を確定した。

- R8上 理論 問10: 独立 `(4)` / 公式 `(4)` → PASS
- R7下 理論 問10: 独立 `(4)` / 公式 `(4)` → PASS
- R6下 理論 問10: 独立 `(4)` / 公式 `(4)` → PASS
- R5下 理論 問10: 独立 `(5)` / 公式 `(5)` → PASS
- R2 理論 問10: 独立 `(2)` / 公式 `(2)` → PASS

結果: `5 / 5 PASS`。

- 教材外知識補完0件
- 固定範囲外追加0件
- 固定EXAM_ALIGNMENT変更0件
- RLC二次過渡・ラプラス変換・伝達関数・PID追加0件
- Topic 11先取り0件

判定: `PASS / INDEPENDENT_REANSWER_COMPLETE`。

## Topic 10 初回最終QA

記録:
`topics/10_exponential_first_order_ode/10_exponential_first_order_ode_final_qa.md`

初回判定: `NEEDS_REVISION / IN_PROGRESS`。

PASS:
- 必須成果物5点の実在
- 固定EXAM_ALIGNMENT 5問
- 制作前独立検証 `5 / 5 PASS`
- 完成後独立再解答 `5 / 5 PASS`
- 練習数値・論理QA `12 / 12 PASS`
- 正答一意性 `12 / 12 PASS`
- 解説PDF / 練習PDF / PowerPoint表示QA
- 教材外補完0件
- 固定範囲外追加0件
- 未確認新幹線実値追加0件
- 仕様境界

FAILは進捗記録3箇所のみだった。

## Topic 10 source進捗記録同期

初回最終QAでFAILだった3箇所を実成果物へ同期済み。

- 主source冒頭 `## 状態`: 必須成果物・完成後独立再解答・初回最終QAまで完了した現在地へ同期
- 主source末尾 `## 次工程`: 最終QA再判定へ同期
- 練習source末尾 `## 次工程`: 最終QA再判定へ同期
- 技術本文・固定EXAM_ALIGNMENT・問題/正答・PDF/PPTX・独立再解答結果は変更していない

判定: `topic_10_source_progress_synced / IN_PROGRESS`。

## Topic 10 最終QA再判定

初回FAILだった進捗記録3箇所の解消を確認し、技術内容・成果物・過去問対応・仕様境界を再確認した。

- 必須成果物: PASS
- 固定EXAM_ALIGNMENT 5問: PASS
- 制作前独立検証: `5 / 5 PASS`
- 完成後独立再解答: `5 / 5 PASS`
- 練習QA: `12 / 12 PASS`
- PDF/PPTX表示QA: PASS
- source進捗整合: PASS
- 教材外補完0件
- 固定範囲外追加0件
- 未確認新幹線実値追加0件

判定: `PASS / completed`。

## 次工程

Topic 11「グラフ・特性曲線を読む」の制作前EXAM_ALIGNMENTを実施する。系列SPECのTopic 11固定範囲だけを対象に、公式過去問を直近年度から調査し、件数合わせの仕様追加をしない。