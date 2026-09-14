# HANDOFF - 電験二種「電気数学」

更新日: 2026-09-14

## 現在地

Topic 01 `複素数・複素指数・フェーザ計算` は `completed`。

Topic 02 `ベクトルと座標変換` は `completed`。

Topic 03 `偏微分・全微分` は `completed`。

Topic 04 `微分による極値・最適条件` は `completed`。

Topic 05 `積分によるエネルギー計算` は、前回最終QAで指摘されたsource進捗記録不整合の修正まで完了。次は最終QA再判定。

完成数: `4 / 20`

current_status: `topic_05_source_progress_final_synced`

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

完成後独立再解答:
`topics/05_integral_energy/05_integral_energy_exam_reanswer.md`

最終QA:
`topics/05_integral_energy/05_integral_energy_final_qa.md`

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

## 完成後独立再解答

完成教材の式・解法だけで固定6問・16対象項目を再導出し、公式解答・標準解答と照合した。

- R7 一次 理論 問2 (2): `(2)ワ` PASS
- R6 一次 理論 問2 (1)〜(2): `(1)チ (2)ヌ` PASS
- R4 二次 機械・制御 問3 (1): `E_d=297 V` PASS
- R3 一次 理論 問2 (4)〜(5): `(4)チ (5)カ` PASS
- R2 一次 理論 問2 (1)〜(5): `(1)イ (2)ヨ (3)ワ (4)ロ (5)ヌ` PASS
- H25 一次 理論 問1 (1)〜(5): `(1)ハ (2)ホ (3)リ (4)イ (5)ロ` PASS

一次15 / 15、二次1 / 1、合計 `16 / 16 PASS`。

教材外知識補完: 0件。

固定範囲外追加: 0件。

## 前回最終QAと今回の修正

前回最終QA総合判定は `NEEDS_REVISION / IN_PROGRESS`。

教材・過去問対応・表示QAはPASSで、FAILはsource Markdownの進捗記録不整合だけだった。

今回、source Markdownを再確認し、以下を現在地へ同期した。

- `制作前再導出・公式照合` 節末尾: 完成後独立再解答を未実施扱いしていた表現を、`16 / 16 PASS`・教材外知識補完0件の実績へ修正
- `次工程`: source進捗記録最終整合完了、次は最終QA再判定へ修正

教材本文・固定EXAM_ALIGNMENT・数式・例題・固定範囲は変更していない。

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

Topic 05の最終QAを再判定し、source進捗記録整合を含む全品質ゲートを確認する。

教材本文、固定EXAM_ALIGNMENT、数式、例題、SPEC固定範囲は変更しない。
