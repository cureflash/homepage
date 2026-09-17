# Topic 11 最終QA記録

対象: `11 グラフ・特性曲線を読む`

実施日: 2026-09-17

## 判定

`NEEDS_REVISION / IN_PROGRESS`。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`09_electrical_math_3/SPEC.md` に照らして最終QAを実施した。仕様追加はしていない。

技術内容、必須成果物、固定EXAM_ALIGNMENT、練習QA、完成後独立再解答はPASSしている。ただし、GitHub正本である主source・練習sourceに実成果物と矛盾する旧進捗記録が3箇所残っているため、現時点では `completed` としない。

## 必須成果物の実在確認

GitHub正本上で次を確認した。

| 成果物 | blob SHA | 判定 |
|---|---|---|
| 主source Markdown | `a586250f59d0a6f8d384dd272f70055face3dfba` | PASS |
| 解説PDF | `12a8a1b9f5eb496769a909e0e380f44326714097` | PASS |
| 練習source | `c5de4ba33c9f74680c6233bb8a2311f1565ec90b` | PASS |
| 練習PDF | `0abf3ef20c543661b70629aa2aea62ec41b2d8a4` | PASS |
| 解説画像PowerPoint | `062d7266f9bd790c555aa647a1e51524fd8c7e9f` | PASS |

blind gate記録 `a81eaf12ecb60609f2c848724e64fc4f60777522`、完成後独立再解答記録 `a43b98a1d2641a2eefed6d9762e6912abe70f3b7` も実在する。

## EXAM_ALIGNMENT確認

固定対象は次の5問で変更なし。

- R7下 機械 問1
- R6下 理論 問13
- R6下 理論 問9
- R5上 機械 問7
- R5上 機械 問9

制作前独立解答・公式解答照合は `5 / 5 PASS`。固定5問から逆算した必須説明15項目は主sourceへ `15 / 15` 実装済みで、固定5問の教材内マッピングも `5 / 5`。

伝達関数、ボード線図、PID、ラプラス変換、各機器の詳細設計論を件数合わせで追加していない。

## 完成後独立再解答

blind gateに従い、固定5問を完成教材だけで独立再解答済み。

- R7下 機械 問1: 独立 `(5)` / 公式 `(5)` → PASS
- R6下 理論 問13: 独立 `(2)` / 公式 `(2)` → PASS
- R6下 理論 問9: 独立 `(3)` / 公式 `(3)` → PASS
- R5上 機械 問7: 独立 `(4)` / 公式 `(4)` → PASS
- R5上 機械 問9: 独立 `(4)` / 公式 `(4)` → PASS

合計 `5 / 5 PASS`。教材外知識補完0件、固定範囲外追加0件、固定EXAM_ALIGNMENT変更0件。

## 練習・表示QA

記録済みQAと対応成果物の実在を確認した。

- 練習問題: 12問、全問五肢択一、基礎3 / 標準7 / 複合2
- 練習数値・論理QA: `12 / 12 PASS`
- 練習正答一意性: `12 / 12 PASS`
- 解説PDF: A4縦4ページ、200 dpi表示QA `4 / 4 PASS`、文字抽出QA PASS
- 練習PDF: A4縦5ページ、200 dpi表示QA `5 / 5 PASS`、文字抽出QA PASS、source整合 `12 / 12 PASS`
- PowerPoint: 16:9・5枚、表示QA `5 / 5 PASS`、overflow 0件、PPTX ZIP整合性PASS

## 仕様境界

系列SPECのTopic 11固定範囲を維持している。

扱う:
- 一次関数
- 二次関数
- 反比例
- 指数関数
- 正弦波
- 傾き
- 面積
- 最大・最小
- パラメータ変化
- 変圧器効率、誘導機トルク、ダイオード特性、RLC周波数特性、速度―時間曲線等の特性曲線読解

新規体系化していない:
- 微分・積分の再導入
- RC/RL過渡現象の再体系化
- ラプラス変換
- 伝達関数
- ボード線図
- PID等の制御理論体系
- 各機器の詳細設計論

仕様境界はPASS。

## FAIL項目: source進捗整合

技術内容ではなく、正本内の進捗記録3箇所のみFAIL。

1. 主source冒頭 `## 状態` が「解説本文＋3段階例題を完成した」段階のままで、解説PDF・練習source/PDF・PowerPoint・完成後独立再解答まで完了した現在地を反映していない。
2. 主source末尾 `## 次工程` が「解説PDFを作成」となっているが、解説PDFは既に実在しQA済み。
3. 練習source末尾 `## 次工程` が「練習PDFを作成」となっているが、練習PDFは既に実在しQA済み。

`MASTER_SPEC.md` は完了判定をGitHub正本と実在成果物で行うため、この不整合を残したまま `completed` にはしない。

## 最終判定

- 必須成果物: PASS
- 固定EXAM_ALIGNMENT 5問: PASS
- 制作前独立検証: `5 / 5 PASS`
- 完成後独立再解答: `5 / 5 PASS`
- 練習QA: `12 / 12 PASS`
- 表示QA・成果物実在: PASS
- 教材外補完: 0件
- 固定範囲外追加: 0件
- 未確認実車値追加: 0件
- 仕様境界: PASS
- source進捗整合: FAIL（3箇所）

したがって Topic 11 は `NEEDS_REVISION / IN_PROGRESS`。完成数は `10 / 12` のまま。

次工程は、技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTX・独立再解答結果を変更せず、主source・練習sourceの旧進捗記録3箇所だけを実成果物と現在地へ同期する。