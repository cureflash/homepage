# Topic 07 最終QA記録

対象: `07 微分② 速度を微分すると加速度`

実施日: 2026-09-15

## 判定

`NEEDS_REVISION / IN_PROGRESS`。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`09_electrical_math_3/SPEC.md` に照らして最終QAを実施した。仕様追加はしていない。

技術内容、固定EXAM_ALIGNMENT、完成後独立再解答、必須成果物、表示QA、仕様境界はPASS。未完了理由は主source `07_derivative_2.md` に残る旧進捗記録2箇所のみである。

## 必須成果物の実在確認

GitHub正本上で次を確認した。

| 成果物 | blob SHA | 判定 |
|---|---|---|
| source Markdown | `17b4729543abd207d5a0166123b4d42bafa027d8` | PASS |
| 解説PDF | `669d9ba1ba6ffccf9330beccda9ff96bb85f465d` | PASS |
| 練習source | `1b2f757e4080e9f8f4c993380b201f7e011b3b48` | PASS |
| 練習PDF | `a9f1420ad7b2b430e75c565f6874e100a3fc9747` | PASS |
| 解説画像PowerPoint | `c538d53fda90e6b2df6996ef578ae1e3345cf45d` | PASS |
| 完成後独立再解答記録 | `cb9f8edd808ebe40b47a4832c087b3072ea0d9d6` | PASS |

## EXAM_ALIGNMENT確認

固定対象は5問で変更なし。

- R6上 理論 問7
- R5下 理論 問12
- R3 理論 問7
- R1 理論 問12
- H27 理論 問12

Topic 07の固定範囲だけで直接対応する5問を品質ゲート対象としており、R7下・R7上・R6上問12・R4上問9は主論点不一致、H19問5・H23問12は再出題重複として除外済み。件数合わせによる仕様外追加は0件。

制作前独立解答は `(3),(5),(4),(1),(5)` で公式解答と `5 / 5 PASS`。

## 完成後独立再解答

完成教材だけによる独立再解答は `5 / 5 PASS`。

- R6上 理論 問7: `(3)` PASS
- R5下 理論 問12: `(5)` PASS
- R3 理論 問7: `(4)` PASS
- R1 理論 問12: `(1)` PASS
- H27 理論 問12: `(5)` PASS

教材外知識補完0件、固定EXAM_ALIGNMENT変更0件、Topic 08以降の数学論点追加0件、電子回路・ブラウン管等の専門体系説明追加0件、未確認新幹線実値追加0件。

## 練習・表示QA

- 練習問題: 12問、基礎3 / 標準7 / 複合2、全問五肢択一
- 練習独立計算QA: `12 / 12 PASS`
- 解説PDF: A4縦3ページ、200 dpi表示QA `3 / 3 PASS`、文字抽出QA PASS
- 練習PDF: A4縦4ページ、200 dpi表示QA `4 / 4 PASS`、文字抽出QA PASS
- PowerPoint: 16:9・4スライド、表示QA `4 / 4 PASS`、overflow・ZIP/XML整合性PASS

## 仕様境界

Topic 07の固定範囲を維持している。

扱う範囲:
- 二階微分
- 速度 `v=dx/dt`
- 加速度 `a=dv/dt=d²x/dt²`
- 増加・減少
- 極大・極小の基本
- 連鎖律の基本
- `a=v dv/dx`
- 発車・加速・定速・惰行・制動の位置・速度・加速度グラフ対応

後続へ残す範囲:
- 積分による一般的な運動公式の導出: Topic 08
- 電荷・電流、磁束・誘導起電力、電力量等の微積分体系: Topic 09
- 指数関数、RC/RL過渡現象、一階微分方程式: Topic 10
- 一般的な特性曲線読解の体系化: Topic 11

## FAIL項目

主source `07_derivative_2.md` の進捗記録が実成果物と不整合。

1. 冒頭 `## 状態` に「解説PDF、練習問題、練習PDF、PowerPoint、完成後独立再解答は未実施」と残っている。
2. 末尾 `## 解説本文段階の判定` に「次工程は解説PDF作成と全ページ表示QA」と残っている。

技術本文、数式、固定EXAM_ALIGNMENT、問題・正答、PDF/PPTX成果物を変更する必要はない。次工程では上記2箇所の進捗記録だけを実態へ同期する。

## 最終判定

- 必須成果物: PASS
- 固定EXAM_ALIGNMENT 5問: PASS
- 制作前独立検証: `5 / 5 PASS`
- 完成後独立再解答: `5 / 5 PASS`
- 練習独立計算QA: `12 / 12 PASS`
- 教材外補完: 0件
- 固定範囲外追加: 0件
- 未確認実車値追加: 0件
- 仕様境界: PASS
- 表示QA・成果物整合: PASS
- GitHub正本の進捗整合: FAIL（主source旧進捗2箇所）

したがって Topic 07 は `NEEDS_REVISION / IN_PROGRESS`。完成数は `6 / 12` のまま。次工程は主source旧進捗2箇所の同期とし、その後に最終QAを再判定する。
