# STATUS - 新幹線・電験三種「機械」

更新日: 2026-09-16

## 状態
- active_series: `03_shinkansen_machine_3`
- exam_aligned_completed_topics: `9 / 16`
- current_status: `topic_10_source_progress_synced`
- last_completed_topic: `09 新幹線はどうやって電気で止まる？`
- active_topic: `10 新幹線の速度はどう自動制御される？`
- next_start: Topic 10の最終QAを再実施する

## 新品質ゲート進捗
- [x] 01 架線25kVをそのままモーターに入れたらどうなる？ — 品質ゲートPASS / completed
- [x] 02 初代0系はどうやって走っていた？ — 品質ゲートPASS / completed
- [x] 03 直流モーターはどうやって速度を変える？ — 品質ゲートPASS / completed
- [x] 04 300系でモーターが全部変わった — 品質ゲートPASS / completed
- [x] 05 誘導電動機はなぜ勝手に回る？ — 品質ゲートPASS / completed
- [x] 06 新幹線はどうやって速度を変えている？ — 品質ゲートPASS / completed
- [x] 07 GTO→IGBT→SiCで何が変わった？ — 品質ゲートPASS / completed
- [x] 08 N700Sのモーターはなぜ小さくできた？ — 品質ゲートPASS / completed
- [x] 09 新幹線はどうやって電気で止まる？ — 品質ゲートPASS / completed
- [ ] 10 新幹線の速度はどう自動制御される？ — 技術内容・固定5件・完成後blind独立再解答・成果物QAはPASS。最終QAで指摘された練習source末尾の旧進捗記録を同期済み。最終QA再実施待ち
- [ ] 11〜16 — 未完了

## Topic 10 EXAM_ALIGNMENT
品質ゲート対象は、系列SPECの固定範囲だけで完結する公式過去問5件で固定する。

1. R8上 機械 問13 — ブロック線図、負帰還、並列経路、合成周波数伝達関数
2. R7下 機械 問13 — ブロック線図、負帰還、正負の並列経路、合成周波数伝達関数
3. R5下 機械 問18(a) — RC回路の周波数伝達関数、一次遅れ形の分母
4. R5上 機械 問13 — 一次遅れ、時定数、R-L回路、周波数伝達関数
5. R4上 機械 問15(a) — フィードバック系、制御対象の合成、一巡伝達関数

- 制作前独立検証: `5 / 5 PASS`
- 完成後blind独立再解答: `(4),(3),(5),(1),(2)` / `5 / 5 PASS`
- 教材だけで公式選択・途中式構成・選択肢照合: `5 / 5 PASS`
- 教材外・固定範囲外知識による補完: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 制作前答案番号・完成済み導出結果: blind再解答開始前に必須先読み対象から除去済み

### 非選定
R7上問13、R6下問13、R6上問13、R5下問13、R5下問18(b)、R4上問15(b)は、行過ぎ量、PID、シーケンス制御・インタロック・タイムチャート、ボード線図、比例プラス積分要素、ベクトル軌跡等のTopic 10固定範囲外を正答に必要とするため、全部または該当小問を除外する。

## Topic 10 固定範囲
系列SPECどおり以下だけを扱う。

- 目標値、制御量、操作量、外乱
- フィードバック、フィードフォワード
- 開ループ、閉ループ
- ブロック線図、伝達関数
- 一次遅れ、二次遅れ、時定数、定常偏差、安定性
- 電験三種の典型的な伝達関数とフィードバック系の合成 `G(s)/(1+G(s)H(s))`

新幹線実車の制御アルゴリズムは推測して再現しない。PID、ボード線図、ナイキスト線図、ベクトル軌跡、シーケンス制御等を件数合わせで追加しない。未確認実車値は追加しない。

## Topic 10 成果物・品質状態
- source: `topics/10_automatic_control/10_automatic_control.md`
- 解説本文＋3段階例題: 完成
- 固定5件の本文マッピング: `5 / 5 全件`
- 解説PDF: `topics/10_automatic_control/10_automatic_control_explanation.pdf` — A4縦4ページ、200 dpi表示QA `4 / 4 PASS`、文字抽出QA `PASS`
- 練習問題source: `topics/10_automatic_control/10_automatic_control_practice.md` — 12問、全問五肢択一、独立計算・論理QA `12 / 12 PASS`、正答一意性QA `12 / 12 PASS`、末尾進捗記録を実成果物へ同期済み
- 練習PDF: `topics/10_automatic_control/10_automatic_control_practice.pdf` — A4縦6ページ、200 dpi表示QA `6 / 6 PASS`、文字抽出QA `PASS`
- 解説画像PowerPoint: `topics/10_automatic_control/10_automatic_control_images.pptx` — 16:9・4枚、表示QA `4 / 4 PASS`、overflow `0件`、PPTX ZIP整合性 `PASS`
- 独立再解答前ゲート: `topics/10_automatic_control/10_automatic_control_blind_reanswer_gate.md` — `BLIND_REANSWER_READY`
- 完成後独立再解答: `(4),(3),(5),(1),(2)` / `5 / 5 PASS`
- 教材外・固定範囲外知識による補完: `0件`
- 最終QA: 前回 `NEEDS_REVISION / IN_PROGRESS`。唯一のblockerだった練習source末尾の旧進捗記録は解消済み。再判定待ち
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`

## Topic 10 最終QA
前回判定時:
- 必須成果物の実在: `PASS`
- 固定EXAM_ALIGNMENT 5件: `PASS`
- 完成後blind独立再解答: `5 / 5 PASS`
- 解説PDF表示QA・文字抽出QA: `PASS`
- 練習PDF表示QA・文字抽出QA: `PASS`
- PowerPoint表示QA・overflow・ZIP整合性: `PASS`
- 固定範囲境界: `PASS`
- 教材外・固定範囲外知識による補完: `0件`
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`
- source進捗整合: `FAIL`（`10_automatic_control_practice.md` 末尾1箇所）
- 判定: `NEEDS_REVISION / IN_PROGRESS`

今回、その旧進捗記録を実態へ同期した。教材本文、固定EXAM_ALIGNMENT、問題・正答、PDF/PPTXは変更していない。最終QA自体の再判定は次工程とする。

## 今回進捗
Topic 10を1段階進め、`topics/10_automatic_control/10_automatic_control_practice.md` 末尾に残っていた旧次工程だけを実成果物へ同期した。練習PDFは既に完成済みで、200 dpi表示QA `6 / 6 PASS`、文字抽出QA `PASS`。技術本文、固定EXAM_ALIGNMENT、問題・正答、PDF/PPTXは変更していない。

## 次工程
Topic 10の最終QAを再実施する。