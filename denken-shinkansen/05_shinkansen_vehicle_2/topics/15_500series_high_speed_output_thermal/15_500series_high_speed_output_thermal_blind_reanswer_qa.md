# Topic 15 完成後独立再解答 QA

実施日: 2026-09-18

## 判定

`PASS / BLIND_REANSWER_COMPLETE`

候補答案は公式解答・標準解答を開く前に `15_500series_high_speed_output_thermal_blind_reanswer_candidates.md` として固定済み。固定後に公式解答・標準解答と照合した。

## 照合結果

- R8 一次「機械」問1 (1),(2): `2 / 2 PASS` — `ニ / ト`
- R7 二次「機械・制御」問2 (1)〜(3): `6 / 6 PASS`
  - `s1=3.50 %`
  - `T1=181 N·m`
  - `P_c2=798 W`
  - `P_f=1.55×10^3 W`
  - `N2=1.18×10^3 min^-1`
  - `P2=1.12×10^4 W`
- R5 一次「機械」問1 (1),(3),(5): `3 / 3 PASS` — `リ / ル / ヨ`
- H26 一次「機械」問5 (3)〜(5): `3 / 3 PASS` — `カ / ヲ / ニ`
- H25 一次「機械」問3 (1),(2): `2 / 2 PASS` — `ヨ / イ`

確定結果:

- 固定過去問: `5 / 5 PASS`
- 一次答案要素: `10 / 10 PASS`
- 二次答案要素: `6 / 6 PASS`
- 合計: `16 / 16 PASS`
- 公式解答・標準解答との不一致: `0件`

## 教材内根拠確認

- R8一次・R5一次: main source §5「入力・出力・損失・効率」
- R7二次: main source §2「P=ωT」、§6「誘導電動機の滑り・トルク・損失・出力」、§9.3「R7二次型の損失計算」
- H26一次: main source §4「電圧制限・電流制限とH26一次型の判定」、§9.2
- H25一次: main source §2、§8「連続出力と短時間出力」

全16答案要素は完成教材内の記載だけで導出・判断できた。教材外知識による補完は `0件`。

## 品質ゲート

- 公式解答を開く前の候補答案固定: `PASS`
- 固定5問再解答: `5 / 5 PASS`
- 固定16答案要素: `16 / 16 PASS`
- 教材だけで公式・条件を選択: `PASS`
- 教材だけで途中式を構築: `PASS`
- 正答理由の説明: `PASS`
- 教材外知識による補完: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC指定9項目・4可視化・共通仮定式系変更: `0件`
- SPEC外追加: `0件`
- 未確認500系実車値の真値化: `0件`

## 変更していないもの

- 固定EXAM_ALIGNMENT
- Topic 15教材本文
- 解説PDF
- 練習問題source / PDF
- PowerPoint
- 固定5問・16答案要素

## 公式照合先

- R8 一次 公式解答: https://www.shiken.or.jp/chief/upload/20260830_ch_second_a01.pdf
- R7 二次 標準解答: https://www.shiken.or.jp/chief/upload/20251116_ch_second_a01_tk.pdf
- R5 一次 公式解答: https://www.shiken.or.jp/chief/upload/20230819_ch_second_a01.pdf
- H26 一次 公式解答: https://www.shiken.or.jp/chief/upload/20140906_ch_second_a01.pdf
- H25 一次 公式解答: https://www.shiken.or.jp/chief/upload/20130831_ch_second_a01.pdf
- 照合日: 2026-09-18

## 次工程

Topic 15の最終QA。必須成果物、PDF/PPTX QA、練習問題QA、SPEC境界、進捗記録整合を再確認し、`completed` 判定を行う。
