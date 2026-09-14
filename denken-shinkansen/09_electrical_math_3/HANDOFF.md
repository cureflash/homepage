# HANDOFF - 電験三種「電気数学」

更新日: 2026-09-15

## 現在地

Topic 01〜05は `completed`。

Topic 06 `微分① ダイヤの傾きは速度` は制作前EXAM_ALIGNMENT、解説本文＋3段階例題、解説PDF、練習source/PDF、解説画像PowerPoint、完成後独立再解答まで実施済み。完成後独立再解答は、数学操作自体は4問とも教材内で再構築できたが、問題全体の正答に不足前提があり `0 / 4 PASS / NEEDS_REVISION` だった。

今回、その不足4件だけを `topics/06_derivative_1/06_derivative_1_revision_supplement.md` へ最小補強した。

完成数: `5 / 12`

current_status: `topic_06_revision_supplement_complete`

active_topic: `06 微分① ダイヤの傾きは速度`

## Topic 06 固定EXAM_ALIGNMENT

品質ゲート対象は次の4問で固定する。

- R7上 理論 問13: トランジスタ静特性グラフから局所的な `ΔI/ΔV` とその逆数を読む
- R6下 理論 問3: 直線的な磁束変化の `ΔΦ/Δt` を計算する
- R5上 理論 問10: `i-t` 折れ線グラフの各区間で `Δi/Δt` を比較する
- R4下 理論 問7: 20℃と21℃の抵抗値から有限区間の変化量・変化率を式で扱う

制作前独立計算・公式照合: `4 / 4 PASS`

三種は原則5問以上だが、追加候補はTopic 07以降の極値・2階微分、Topic 08の積分、Topic 10の指数関数・RC/RL過渡現象、またはレンツの法則等の専門論点を必要とするため採用しない。H16理論問9はR5上理論問10と同型のため件数合わせで重複カウントしない。

## 完成後独立再解答で不足した前提

| 過去問 | 教材だけでできた数学操作 | 不足していた前提 |
|---|---|---|
| R7上 理論 問13 | 局所的な `ΔI/ΔV` と逆数、`S↔Ω` | 当該設問での `h_fe=I_C/I_B` |
| R6下 理論 問3 | 直線変化から `ΔΦ/Δt=10 Wb/s` | `|e|=N|dΦ/dt|` |
| R5上 理論 問10 | 各区間の `|Δi/Δt|` 比較、`mA/ms=A/s` | `|v|=L|di/dt|` |
| R4下 理論 問7 | `(r21-r20)/r20` の相対変化整理 | 抵抗温度係数の一次関係と並列合成抵抗 |

完成後独立再解答: `0 / 4 PASS / NEEDS_REVISION`。

## 今回の補強

`06_derivative_1_revision_supplement.md` に次だけを追加した。

1. R7上 理論 問13: 固定問で `I_B` と `I_C` を読んで `h_fe=I_C/I_B` と評価する接続
2. R6下 理論 問3: 誘導起電力の大きさ `|e|=N|dΦ/dt|`
3. R5上 理論 問10: 一定 `L` での自己誘導電圧の大きさ `|v|=L|di/dt|`
4. R4下 理論 問7: `R(T+ΔT)=R(T)(1+αΔT)` と `r=R1R2/(R1+R2)`

範囲境界は維持する。半導体回路、ファラデー則、自己誘導、抵抗温度特性の体系説明は行わない。極値・2階微分、積分、指数関数等の後続Topic論点、未確認新幹線実値の追加は0件。

## Topic 06 制作範囲

扱う内容:
- 平均変化率
- 接線
- 微分係数
- 導関数
- 多項式の微分
- 三角関数の微分
- 合成関数の基本
- `v(t)=dx/dt`
- 区分的直線グラフの傾き比較
- 局所的な `ΔI/ΔV` と逆数
- 有限変化・相対変化
- 固定4過去問を完結させるための上記4つの最小接続

扱わない内容:
- 極値・最大最小、2階微分、加速度: Topic 07
- 積分: Topic 08
- 電荷・磁束等の微分公式の体系説明: Topic 09
- 指数関数、RC/RL過渡現象: Topic 10
- 半導体・電磁誘導・自己誘導・温度特性の体系説明

## 既存成果物

- `topics/06_derivative_1/06_derivative_1.md`
  - 制作前EXAM_ALIGNMENT、解説本文、3段階例題、固定4過去問マッピング、完成後独立再解答記録
- `topics/06_derivative_1/06_derivative_1_revision_supplement.md`
  - 独立再解答FAIL 4件の不足前提を固定範囲内で最小補強
- `topics/06_derivative_1/06_derivative_1_explanation.pdf`
  - A4縦4ページ、200 dpi表示QA・文字抽出QA PASS
- `topics/06_derivative_1/06_derivative_1_practice.md`
  - 12問、基礎3 / 標準7 / 複合2、独立計算 `12 / 12 PASS`
- `topics/06_derivative_1/06_derivative_1_practice.pdf`
  - A4縦6ページ、200 dpi表示QA・文字抽出QA PASS
- `topics/06_derivative_1/06_derivative_1_images.pptx`
  - 16:9・3枚、表示QA・overflow・ZIP整合性PASS

固定EXAM_ALIGNMENT 4問、既存3段階例題、練習12問、既存PDF/PPTXは今回変更していない。

## 次に行うこと

補強4点を学習用成果物へ必要最小限同期する。同期後、完成教材だけを使い、保存済み正答を見ず固定4問を再独立解答する。
