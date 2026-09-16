# Topic 09 最終QA記録

対象: `09 微積分で電気を読む`

実施日: 2026-09-16

## 判定

`NEEDS_REVISION / IN_PROGRESS`。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`09_electrical_math_3/SPEC.md` に照らして最終QAを実施した。技術内容、固定EXAM_ALIGNMENT、完成後独立再解答、必須成果物、記録済み表示QA、仕様境界はPASS。未完了理由はsource進捗記録2箇所の不整合だけである。

## 必須成果物の実在確認

GitHub正本上で次を確認した。

| 成果物 | blob SHA | 判定 |
|---|---|---|
| 主source Markdown | `38d13038aa17b4727947877b255ed8cd908fcfaa` | PASS |
| 解説PDF | `7e8b4a62009a889b0a01af5ea9b87243d86e6b1e` | PASS |
| 練習source | `f375b45930e8d16f9e80adc34985fc5a1d786b2e` | PASS |
| 練習PDF | `09017b8c901c31af932dbb397d0c1a63efca90a4` | PASS |
| 解説画像PowerPoint | `0196731a85a5200b6ef2b295022cc150f4516305` | PASS |

## EXAM_ALIGNMENT確認

固定対象は次の5問で変更なし。

- R7上 法規 問13
- R6下 理論 問3
- R3 理論 問4
- R7上 電力 問1
- H29 法規 問13

制作前独立解答・公式解答照合は `5 / 5問・7 / 7答案要素 PASS`。固定5式以外の件数合わせ、Topic 10〜11先取り、固定範囲外論点追加は0件。

## 完成後独立再解答

保存済み正答を先に見ず、完成教材と固定5問の公式問題だけで再導出済み。

- R7上 法規 問13: `(a) 2 / (b) 3` PASS
- R6下 理論 問3: `2` PASS
- R3 理論 問4: `4` PASS
- R7上 電力 問1: `2` PASS
- H29 法規 問13: `(a) 2 / (b) 5` PASS

合計 `5 / 5問・7 / 7答案要素 PASS`。公式解答との不一致0件、教材外知識補完0件。

## 練習・表示QA

記録済みQAを再確認した。

- 練習問題: 12問、全問五肢択一、基礎3 / 標準7 / 複合2
- 練習数値・論理・正答一意性QA: `12 / 12 PASS`
- 解説PDF: A4縦6ページ、200 dpi表示QA `6 / 6 PASS`、文字抽出QA PASS
- 練習PDF: A4縦4ページ、200 dpi表示QA `4 / 4 PASS`、文字抽出QA PASS、正答番号・主要数値整合 `12 / 12 PASS`
- PowerPoint: 16:9・5枚、200 dpi表示QA `5 / 5 PASS`、文字抽出QA PASS、ZIP整合PASS

## 仕様境界

系列SPECのTopic 09固定範囲を維持している。

扱う式:
- `i=dq/dt`
- `q=∫i dt`
- `e=-N dΦ/dt`
- `E=∫P dt`
- `W=∫F dx`

新幹線接続は、走行電力の消費電力量、回生電力の回収電力量、牽引力の仕事の3点だけ。指数関数・RC/RL過渡・一階微分方程式はTopic 10、一般特性曲線体系はTopic 11へ残している。未確認新幹線実値追加0件。

## FAIL項目

技術内容ではなく進捗記録だけに2件の不整合がある。

1. 主source `09_calculus_electricity.md` は冒頭と末尾で `Topic 09 は in_progress。次工程は最終QA` としている。最終QAを実施した現時点では旧進捗である。
2. 練習source `09_calculus_electricity_practice.md` 末尾は `このsourceを正本として練習PDFを作成` を次工程としているが、練習PDF、PowerPoint、完成後独立再解答はすでに完了している。

両方とも教材内容・問題・正答・固定EXAM_ALIGNMENTの欠陥ではない。次工程で進捗記録だけを実成果物へ同期し、その後に最終QAを再判定する。

## 最終判定

- 必須成果物: PASS
- 固定EXAM_ALIGNMENT 5問・7答案要素: PASS
- 制作前独立検証: `5 / 5問・7 / 7答案要素 PASS`
- 完成後独立再解答: `5 / 5問・7 / 7答案要素 PASS`
- 練習QA: `12 / 12 PASS`
- 表示QA・成果物実在: PASS
- 教材外補完: 0件
- 固定範囲外追加: 0件
- 未確認実車値追加: 0件
- 仕様境界: PASS
- source進捗整合: FAIL（2箇所）

したがって Topic 09 は `NEEDS_REVISION / IN_PROGRESS`。系列完成数は `8 / 12` のまま。次工程は主source・練習sourceの進捗記録2箇所だけを現在地へ同期する。