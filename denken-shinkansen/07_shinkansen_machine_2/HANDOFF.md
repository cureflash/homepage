# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-13

## 現在地

Topic 01 `0系の主変圧器を等価回路で解剖する`、Topic 02 `0系の直流主電動機はどんな特性だった？`、Topic 03 `0系を210km/hまで加速させる` は最終QAまでPASSし、`completed`。

完成数: `3 / 22`

active topic: `04 200系のサイリスタ制御を計算する`

current status: `topic_04_independent_reanswer_complete`

## Topic 04 現在の成果物

source Markdown:
`topics/04_200series_thyristor_control/04_200series_thyristor_control.md`

独立再解答記録:
`topics/04_200series_thyristor_control/04_200series_thyristor_control_reanswer.md`

解説PDF:
`topics/04_200series_thyristor_control/04_200series_thyristor_control_explanation.pdf`

練習PDF:
`topics/04_200series_thyristor_control/04_200series_thyristor_control_practice.pdf`

解説画像PowerPoint:
`topics/04_200series_thyristor_control/04_200series_thyristor_control_images.pptx`

制作前EXAM_ALIGNMENT、公式解答照合付き要求事項独立検証、解説本文＋3段階例題、解説PDF＋表示QA、練習PDF＋表示QA、解説画像PowerPoint＋表示QA、完成後の教材のみ独立再解答12/12 PASSまで完了。最終QAは未実施。

## Topic 04 固定範囲

- サイリスタ
- 制御角
- 位相制御整流
- 平均直流電圧
- 電流
- 力率
- 高調波の基本
- 直流主電動機との接続
- 制御角―平均直流電圧
- 制御角―主電動機電流
- 制御角―トルク

固定範囲外の降圧チョッパ、PWM、インバータ、回生・逆変換、能動フィルタ補償設計、サイクロコンバータ固有制御は追加しない。200系の回路定数・制御角・主電動機電流等は一次資料未確認のため実車値として置かない。

## Topic 04 過去問品質ゲート

固定EXAM_ALIGNMENT:
- R05 一次 機械 問4: (1)〜(3)
- R01 一次 機械 問3: (1)、(2)、(5)
- R05 二次 機械・制御 問3: (1)、(2)
- H30 二次 機械・制御 問3: (2)〜(4)
- H27 二次 機械・制御 問3: (2)

一次2問＋二次記述3問、計5問。ゲート対象12小問。

公式解答・標準解答照合後の制作前要求事項独立検証: `12 / 12 PASS`。

完成後教材のみ独立再解答: `12 / 12 PASS`。

内訳:
- R05 一次 機械 問4: 3 / 3 PASS
- R01 一次 機械 問3: 3 / 3 PASS
- R05 二次 機械・制御 問3: 2 / 2 PASS
- H30 二次 機械・制御 問3: 3 / 3 PASS
- H27 二次 機械・制御 問3: 1 / 1 PASS

重要式:
- `V_d=(3√2/π)V cosα ≒ 1.35V cosα`
- `P=(3√2/π)VI_d cosα`
- `I_1=(√6/π)I_d`
- `Q_1=(3√2/π)VI_d sinα`（H30二次の条件）
- `V_d(α)=E+I_aR_a`
- `T=kΦI_a`

独立再解答では教材外知識・固定範囲外論点による補完は0件。200系の未確認実車値も追加していない。

## Topic 04 PowerPoint QA

- 16:9・1スライドの解法マップ: PASS
- 固定5問・12小問に必要な論点を可視化: PASS
- 60°区間平均値積分と `V_d=(3√2/π)V cosα`: PASS
- `α=0`、`0≤α≤π/2` と制御角―平均直流電圧: PASS
- 直流側電流・一素子平均電流・一素子実効値・交流側線電流の区別: PASS
- `I_T(av)=I_d/3`、`I_T(rms)=I_d/√3`、R01抵抗負荷型の一素子平均電流式を収録: PASS
- H30二次条件の `P`、`I_1`、`S_1`、`Q_1`、基本波力率: PASS
- 基本波力率と総合力率を区別: PASS
- 高調波は発生源と基本的影響までに限定: PASS
- `V_d→I_a→T` と `α-V_d`、`α-I_a`、`α-T` の読み方を収録: PASS
- `α-I_a`、`α-T` は `E`・`R_a`・`kΦ` 一定の教材比較モデルとして扱い、未確認実車値を使っていない: PASS
- 仕様外論点の追加なし: PASS
- LibreOfficeでPDF化し、表示QAでクリッピング・重なり・文字化けなし: PASS
- PPTX ZIP整合性: PASS

## 次に行うこと

Topic 04の最終QAを実施する。固定EXAM_ALIGNMENT 5問・12小問の独立再解答 `12 / 12 PASS`、source、解説PDF、練習PDF、PowerPoint、各表示QA、仕様境界を再確認し、全品質ゲートを満たす場合のみ `completed` とする。