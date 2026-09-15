# Topic 08 最終QA記録

対象: `08 積分 速度曲線の面積は距離`

実施日: 2026-09-16

## 判定

`NEEDS_REVISION / IN_PROGRESS`。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`09_electrical_math_3/SPEC.md` に照らして最終QAを実施した。技術内容、固定EXAM_ALIGNMENT、完成後独立再解答、必須成果物、既存の表示QA記録、仕様境界はPASSした。

未完了理由は進捗記録2箇所だけである。

1. 主source `08_integral_distance.md` 冒頭 `## 状態` が「解説本文＋3段階例題まで完了」「次工程は解説PDF」の旧記録のまま。
2. 練習source `08_integral_distance_practice.md` 末尾が「次工程は練習PDF作成」の旧記録のまま。

実際には解説PDF、練習PDF、PowerPoint、補強source/PDF、補強後独立再解答まで完了しているため、GitHub正本内の進捗記録が成果物実態と不一致である。技術本文や固定範囲を変更せず、この2箇所だけを同期してから最終QAを再判定する。

## 必須成果物の実在確認

GitHub正本上で次を確認した。

| 成果物 | blob SHA | 判定 |
|---|---|---|
| 主source Markdown | `6c0612a068fe065e28f6a2cda87e6a77fa1260e1` | PASS |
| 解説PDF | `339b71ca1e4e53d2f9a5bb0fc51a2a97c870dfae` | PASS |
| 練習source | `9e24a346c5ca0dbdcc22d27195f4773742e222dd` | PASS |
| 練習PDF | `40f63eefde72d744deafeccc2d3ce80725f440c8` | PASS |
| 解説画像PowerPoint | `d264d88eea5f7c95885fed3e830f6b16333b91e3` | PASS |
| 補強source | `aef254147cb80d2aa299c0a3ff2968479c2efae5` | PASS |
| 補強PDF | `152a663236d9c1b43afe29f8c2cd25c724e27cfa` | PASS |
| 完成後独立再解答記録 | `b05cfbf149f3841c09ed103fdaccddea5f52f339` | PASS |

## EXAM_ALIGNMENT確認

固定対象は次の5問で変更なし。

- R8上 機械 問16
- R3 機械 問16
- R1 理論 問18
- H28 機械 問16
- H24 機械 問10

制作前独立計算・公式解答照合は `5 / 5問・9 / 9答案要素 PASS`。件数合わせによる仕様外論点追加は0件。

## 完成後独立再解答

初回再解答は `2 / 5問・5 / 9答案要素 PASS / NEEDS_REVISION` だったが、不足3群だけを固定範囲内で補強した後、完成教材だけで再独立解答を実施している。

補強後結果:

- R8上 機械 問16: `(a)(2), (b)(2)` PASS
- R3 機械 問16: `(a)(1), (b)(3)` PASS
- R1 理論 問18: `(a)(1), (b)(4)` PASS
- H28 機械 問16: `(a)(5), (b)(2)` PASS
- H24 機械 問10: `(5)` PASS

合計 `5 / 5問・9 / 9答案要素 PASS`。公式解答との不一致0件、教材外知識補完0件。

## 練習・表示QA

記録済みQAを確認した。

- 練習問題: 12問、全問五肢択一、基礎3 / 標準7 / 複合2
- 練習独立計算・正答一意性QA: `12 / 12 PASS`
- 解説PDF: A4縦4ページ、200 dpi表示QA `4 / 4 PASS`、文字抽出QA PASS
- 練習PDF: A4縦5ページ、200 dpi表示QA `5 / 5 PASS`、文字抽出QA PASS
- 補強PDF: A4縦2ページ、200 dpi表示QA `2 / 2 PASS`、文字抽出QA PASS
- PowerPoint: 16:9・5枚、表示QA `5 / 5 PASS`、overflow 0件、ZIP整合性PASS

## 仕様境界

Topic 08の固定範囲を維持している。

扱う範囲:
- 不定積分
- 定積分
- 原始関数
- 面積・符号付き面積
- 多項式・三角関数の基本積分
- 必要範囲の置換積分
- 波形平均・区分積分
- `x=∫v(t)dt`
- `t=∫dx/v(x)`
- `a=v dv/dx` から一定加速度式を導出

後続へ残す範囲:
- 電荷・電流、磁束・誘導起電力、電力量、仕事の微積分体系: Topic 09
- 指数関数、RC/RL過渡現象、一階微分方程式: Topic 10
- 一般的な特性曲線読解の体系化: Topic 11

固定EXAM_ALIGNMENT変更0件、Topic 09〜11先取り0件、専門分野の体系説明追加0件、未確認新幹線実値追加0件。

## 最終判定

- 必須成果物: PASS
- 固定EXAM_ALIGNMENT 5問・9答案要素: PASS
- 制作前独立検証: `5 / 5問・9 / 9答案要素 PASS`
- 補強後独立再解答: `5 / 5問・9 / 9答案要素 PASS`
- 練習QA: `12 / 12 PASS`
- 表示QA・成果物実在: PASS
- 教材外補完: 0件
- 固定範囲外追加: 0件
- 未確認実車値追加: 0件
- 仕様境界: PASS
- source進捗整合: FAIL（2箇所）

したがって Topic 08 は `NEEDS_REVISION / IN_PROGRESS`。完成数は `7 / 12` のまま。次工程は主source冒頭と練習source末尾の旧進捗記録2箇所だけを実成果物へ同期する。