# HANDOFF - 電験二種「電気数学」

更新日: 2026-09-14

## 現在地

Topic 01 `複素数・複素指数・フェーザ計算` は `completed`。

Topic 02 `ベクトルと座標変換` は `completed`。

Topic 03 `偏微分・全微分` は `completed`。

Topic 04 `微分による極値・最適条件` は `completed`。

Topic 05 `積分によるエネルギー計算` は解説本文＋3段階例題・解説PDF・練習PDF・解説画像PowerPointまで完成。

完成数: `4 / 20`

current_status: `topic_05_images_pptx_complete`

active_topic: `05 積分によるエネルギー計算`

## Topic 05 現在の成果物

source Markdown:
`topics/05_integral_energy/05_integral_energy.md`

解説PDF:
`topics/05_integral_energy/05_integral_energy_explanation.pdf`

練習PDF:
`topics/05_integral_energy/05_integral_energy_practice.pdf`

解説画像PowerPoint:
`topics/05_integral_energy/05_integral_energy_images.pptx`

PowerPoint QA:
`topics/05_integral_energy/05_integral_energy_powerpoint_qa.md`

解説本文＋3段階例題: 完成。

解説PDF: A4縦6ページ、全6ページ200 dpi表示QA PASS。

練習PDF: A4縦7ページ、全12問（一次型五肢択一8問＋二次記述型4問）、解答・完全解説付き。全7ページ200 dpi表示QA PASS。

PowerPoint: 16:9、全5スライド。LibreOffice PDF変換・全スライド表示・overflow検査・ZIP整合性すべてPASS。

## Topic 05 固定EXAM_ALIGNMENT

品質ゲート対象は一次5問＋二次1問、計6問・16対象項目。

- R7 一次 理論 問2 (2)
  - 結合コイルの磁気エネルギー
  - 後続のトルク微分・電磁誘導は不採用
- R6 一次 理論 問2 (1)〜(2)
  - `H(r)`、`w_m=1/2 μH^2`、体積積分
  - 抵抗・表皮効果は不採用
- R4 二次 機械・制御 問3 (1)
  - 三相整流電圧の平均値積分
  - RMSから波高値への変換
  - PWM・V/f等の後続設問は不採用
- R3 一次 理論 問2 (4)〜(5)
  - 一周期エネルギーと `P_avg=fE_cycle`
- R2 一次 理論 問2 (1)〜(5)
  - `W=1/2 LI^2`
  - 鎖交磁束保存
  - 外力の仕事と磁気エネルギー収支
- H25 一次 理論 問1 (1)〜(5)
  - コンデンサ蓄積エネルギー
  - 一定電圧下の誘電体引抜き
  - 電源とのエネルギー授受と外力の仕事

制作前再導出・公式解答照合は `16 / 16 PASS`。

完成本文・解説PDF・練習PDF・PowerPointでは固定6問・16対象項目を全件マッピング済み。

## 解説画像PowerPoint

- 16:9、全5スライド
- Slide 1: `E=∫Pdt` / `W=∫Fdx` / `W=∫w dV`、平均値/RMS、解法判定
- Slide 2: R4二次 問3(1) の RMS→波高値→三相全波整流平均値積分
- Slide 3: H25一次 問1の電界エネルギー、一定電圧、電源との授受、外力仕事
- Slide 4: R7/R6/R2 の磁気エネルギー、結合、円柱体積積分、鎖交磁束保存
- Slide 5: 固定6問・16対象項目対応表とSPEC境界

表示QA:
- LibreOffice PDF変換: PASS
- 全5スライド表示確認: PASS
- 文字切れ・重なり・空白ページ・文字化け: なし
- キャンバス外はみ出し: なし
- ZIP整合性: PASS

## SPEC固定範囲

- `E=∫Pdt`
- `W=∫Fdx`
- 電界・磁界のエネルギー
- 平均値
- RMSとの関係

新幹線への接続は、力行・回生電力を時間積分して電力量を求める範囲に限定する。

## 実装上の境界

- Topic 06の運転曲線、位置・速度・加速度解析を先取りしない
- Topic 07・08以降の微分方程式・過渡応答を先取りしない
- Topic 13以降のフーリエ解析・高調波分解を先取りしない
- 選定問題のうち固定範囲外の後続小問を件数合わせで採用しない
- 実車固有の制御則や未確認実車値を追加しない
- 平均値とRMSを明確に区別する
- 電界・磁界エネルギーでは、電源接続条件・線形性・保存される量を明示する

## 次に行うこと

完成教材だけを使い、保存済み正答を先に見ずに固定6問・16対象項目を独立再解答し、公式解答・標準解答と照合する。

教材外知識で補完せず、固定SPEC外論点を追加しない。16 / 16一致後に最終QAへ進む。
