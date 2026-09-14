# Topic 06 最終QA記録

対象: `06 微分① ダイヤの傾きは速度`

実施日: 2026-09-15

## 判定

`PASS / completed`。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`09_electrical_math_3/SPEC.md` に照らして最終QAを再判定した。仕様追加はしていない。

前回最終QAで唯一FAILだった主source `06_derivative_1.md` の進捗記録不整合は解消済み。固定EXAM_ALIGNMENT、完成後独立再解答、必須成果物、表示QA、仕様境界、GitHub正本の進捗整合を再確認し、全品質ゲートPASSとした。

## 必須成果物の実在確認

GitHub正本上で次を確認した。

| 成果物 | blob SHA | 判定 |
|---|---|---|
| source Markdown | `72cf9709da419771f97a146dbf6542f5d250056d` | PASS |
| 解説PDF | `4ea50f43e687ab6880bab988eeb02ffde4da2a3e` | PASS |
| 練習source | `516bfd6ce7d25735c675eee65e7079e32db7c85a` | PASS |
| 練習PDF | `974979d87fcc8de558d5484ed31511434e708535` | PASS |
| 解説画像PowerPoint | `977a4133548277825f6dfc57f921fd29d215ff65` | PASS |
| revision supplement source | `d8a8702386383ca0c2c14fb0f97651c5db9d6797` | PASS |
| revision supplement PDF | `c137a8550533689eac2fdc8893e2dd801d1601c9` | PASS |
| 完成後独立再解答記録 | `af3c74bef2da423a3fea799a6aca67398900609b` | PASS |

PDF・PowerPoint等のバイナリ成果物は前回表示QA以降blob SHA不変で、既工程の表示QA・整合性QA PASSを維持している。

## EXAM_ALIGNMENT確認

固定対象は4問で変更なし。

- R7上 理論 問13
- R6下 理論 問3
- R5上 理論 問10
- R4下 理論 問7

三種は原則5問以上だが、追加候補を直近年度から確認したうえで、Topic 07以降の極値・2階微分、Topic 08の積分、Topic 10の指数関数・RC/RL過渡現象、専門論点を必要とする問題を除外し、同型既出問題による件数合わせもしない判断がsourceに記録されている。固定範囲だけで直接対応できる確認済み全件を対象としており、品質ゲート上の問題はない。

## 完成後独立再解答

補強同期後の完成教材だけによる再独立解答は `4 / 4 PASS`。

- R7上 理論 問13: `(2)` PASS
- R6下 理論 問3: `(2)` PASS
- R5上 理論 問10: `(4)` PASS
- R4下 理論 問7: `(2)` PASS

公式解答と全件一致。教材外知識補完0件、固定EXAM_ALIGNMENT変更0件、Topic 07以降の数学論点追加0件、専門分野の体系説明追加0件、未確認新幹線実値追加0件。

## 前回FAIL項目の再確認

前回FAILは主sourceの進捗記録不整合3点だけだった。

1. 冒頭 `## 状態`
2. `# 完成後独立再解答` の到達状態
3. 末尾 `# 次工程`

現在は補強後 `4 / 4 PASS`、最終QA再判定、Topic 06 `completed`、次工程Topic 07へ同期済み。進捗記録不整合は0件。

## 仕様境界

Topic 06の固定範囲を維持している。

扱う範囲:
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
- 固定4問を完結させるための最小接続4点

後続へ残す範囲:
- 極値・最大最小、2階微分、加速度: Topic 07
- 積分: Topic 08
- 電荷・磁束等の微分公式の体系説明: Topic 09
- 指数関数、RC/RL過渡現象: Topic 10
- 半導体・電磁誘導・自己誘導・温度特性の体系説明

## 最終判定

- 必須成果物: PASS
- 固定EXAM_ALIGNMENT 4問: PASS
- 制作前独立検証: `4 / 4 PASS`
- 補強後完成教材による独立再解答: `4 / 4 PASS`
- 教材外補完: 0件
- 固定範囲外追加: 0件
- 未確認実車値追加: 0件
- 仕様境界: PASS
- 表示QA・成果物整合: PASS
- GitHub正本の進捗整合: PASS

したがって Topic 06 は `PASS / completed`。完成数を `6 / 12` とし、次工程は Topic 07「微分② 速度を微分すると加速度」の制作前EXAM_ALIGNMENTとする。
