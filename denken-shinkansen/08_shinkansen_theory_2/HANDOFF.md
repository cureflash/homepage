# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-14

## 現在地

Topic 01 `25kV架線を一つの等価回路にする` は `completed`。

Topic 02 `架線は長くなるとなぜ電圧が落ちる？` は `completed`。

Topic 03 `25kV架線の周囲にはどんな電界ができる？` は `completed`。

Topic 04 `架線と車体は巨大なコンデンサなのか？` は解説本文＋3段階例題、解説PDF、練習source＋練習PDF、解説画像PowerPoint、各表示QA、完成後独立再解答まで完了。最終QAのみ未着手。

完成数: `3 / 21`

current_status: `topic_04_independent_reanswer_complete`

active_topic: `04 架線と車体は巨大なコンデンサなのか？`

## Topic 04 固定EXAM_ALIGNMENT

品質ゲート対象は一次「理論」5問・22小問。

- R6 問1 (1)〜(5): 二層誘電体の平行板コンデンサ、`D=εE`、各層電界、最大印加電圧
- R5 問1 (1)〜(5): 同軸円筒の電界・静電容量、半径方向に変化する誘電率
- R3 問1 (1)〜(5): 二層誘電体の `D`・`E`・電圧、静電エネルギー
- H27 問1 (1)〜(2): 同軸円筒の `D(r)`、電位積分、単位長さ当たり静電容量
- H24 問5 (1)〜(5): 平行板、複数容量、電荷保存、静電エネルギー

公式解答との照合済み。完成後独立再解答は `22 / 22 PASS`。

R7一次問1は静電容量を扱うが、中心解法が電気影像法でSPEC外のため採用しない。H27問1(3)〜(5)の導電率・電流密度・コンダクタンスも固定範囲外のため採用しない。

二次試験は最新実施済みR7〜R5の「電力・管理」「機械・制御」を確認したが、Topic 04の固定範囲を直接問う問題は採用なし。R5電力・管理の力率改善用コンデンサは無効電力・配電電圧計算が主題で別論点。`08 理論・二種` は一次理論中心なので、二次数合わせはしない。

固定範囲は `SPEC.md` どおり、静電容量、平行板コンデンサ、円筒導体の基本、合成容量、誘電率、誘電体、分極、静電エネルギーのみ。実車形状を直接コンデンサ計算しない。

## Topic 04 成果物

source:
`topics/04_catenary_capacitance/04_catenary_capacitance.md`

解説PDF:
`topics/04_catenary_capacitance/04_catenary_capacitance_explanation.pdf`

練習source:
`topics/04_catenary_capacitance/04_catenary_capacitance_practice.md`

練習PDF:
`topics/04_catenary_capacitance/04_catenary_capacitance_practice.pdf`

解説画像PowerPoint:
`topics/04_catenary_capacitance/04_catenary_capacitance_images.pptx`

完成後独立再解答記録:
`topics/04_catenary_capacitance/04_catenary_capacitance_independent_reanswer.md`

完了:
- 制作前EXAM_ALIGNMENT
- 解説本文
- 3段階例題
- 一次5問・22小問と本文節の対応表
- 解説PDF（A4縦6ページ）
- 解説PDF全6ページ表示QA
- 練習source（12問、全問五肢択一、完全解説付き）
- 練習PDF（A4縦4ページ）
- 練習12問の計算QA `12 / 12 PASS`
- 練習PDF全4ページ200 dpi表示QA
- 解説画像PowerPoint（16:9、5スライド）
- PowerPoint全5スライド表示QA
- PowerPoint領域外はみ出し検査 PASS
- 固定一次5問・22小問の完成後独立再解答 `22 / 22 PASS`

未作成:
- 最終QA記録

## 今回の更新

Topic 04の完成後独立再解答を完了した。

- R6: `5 / 5 PASS`
- R5: `5 / 5 PASS`
- R3: `5 / 5 PASS`
- H27: `2 / 2 PASS`
- H24: `5 / 5 PASS`
- 合計 `22 / 22 PASS`
- 教材外の電気理論による補完 `0件`
- 固定範囲外論点追加 `0件`
- 二次数合わせ `0件`
- 各小問の導出と公式解答照合を独立再解答記録へ保存

## 次に行うこと

Topic 04の最終QAを行う。

1. MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPECと固定範囲を再確認する。
2. 必須成果物の実在と相互整合を確認する。
3. 一次5問・22小問のEXAM_ALIGNMENTと独立再解答 `22 / 22 PASS` を確認する。
4. 解説PDF・練習PDF・PowerPointの既存表示QA記録を確認する。
5. 電気影像法、導電率・コンダクタンス、力率改善、未確認実車値等のSPEC外追加がないことを確認する。
6. 全品質ゲートPASSの場合のみTopic 04を `completed` にして完成数を `4 / 21` へ進める。
