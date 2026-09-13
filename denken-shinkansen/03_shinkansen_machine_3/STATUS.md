# STATUS - 新幹線・電験三種「機械」

更新日: 2026-09-14

## 状態
- active_series: `03_shinkansen_machine_3`
- exam_aligned_completed_topics: 3 / 16
- current_status: `topic_04_practice_pdf_complete`
- last_completed_topic: `03 直流モーターはどうやって速度を変える？`
- active_topic: `04 300系でモーターが全部変わった`
- next_start: Topic 04の解説画像PowerPointを作成し、全スライド表示QA・はみ出し検査を行う

## 新品質ゲート進捗
- [x] 01 架線25kVをそのままモーターに入れたらどうなる？ — 選定5問を教材だけで再解答し5/5正答、品質ゲートPASS
- [x] 02 初代0系はどうやって走っていた？ — 選定6問を教材だけで再解答し6/6正答、品質ゲートPASS
- [x] 03 直流モーターはどうやって速度を変える？ — 必須4成果物を新選定5問へ同期。完成後独立再解答5/5正答、品質ゲートPASS
- [ ] 04 300系でモーターが全部変わった — 制作前EXAM_ALIGNMENT、解説本文＋3段階例題、解説PDF、練習問題source、練習PDFまで完了。PowerPoint・完成後独立再解答は未完了
- [ ] 05〜16 — 未着手

## 04 EXAM_ALIGNMENT対象
1. R8上 機械 問4 — かご形三相誘導電動機、同期速度、同期ワット（二次入力）、トルク・機械出力
2. R6下 機械 問4 — 三相入力、滑り、鉄損・一次銅損・二次銅損、`Pc2=sP2`
3. R5上 機械 問3 — 回転磁界、固定子・回転子、変圧器との対応、滑りによる二次誘導起電力
4. R5上 機械 問4 — `Ns=120f/p`、`N=(1-s)Ns`、機械出力からトルク
5. R1 機械 問3 — 同期速度、滑り、二次入力・二次銅損、入力・出力・効率

直近年度でも始動法、Y-Δ始動、インバータ/V/f制御、詳細等価回路、発電運転・用途材料などTopic 04の固定範囲外を設問全体の正答に必要とする問題は選定から除外した。教材へ仕様外論点を追加して通過させない。

## 04 解説source
`topics/04_induction_motor/04_induction_motor.md` に以下を追加済み。

- 本試験で問われる中心関係と式の意味
- 固定子・回転子・かご形回転子・回転磁界
- 同期速度、滑り、二次周波数、二次誘導起電力
- 実回転速度・同期速度とトルク式の使い分け
- `P1 → P2 → Pm → Pout` の電力フロー、二次銅損、効率
- 再利用可能な解法アルゴリズム
- 300系への接続。ただし未確認実車値・後続Topicの制御方式は追加していない
- 頻出ミス、公式まとめ
- 基礎・本試験標準・複合の3段階例題
- 選定5問の各節への対応マッピング

## 04 解説PDF
`topics/04_induction_motor/04_induction_motor_explanation.pdf` を作成済み。

- A4縦 5ページ
- 解説sourceの固定範囲だけを収録
- 同期速度・滑り・二次周波数・トルク・電力フロー・損失・効率・3段階例題・過去問対応を収録
- 200 dpiで全5ページをレンダリングし、文字切れ・重なり・欠落グリフなしを確認
- PDF文字抽出で主要見出し・公式・過去問番号を確認

## 04 練習問題source
`topics/04_induction_motor/04_induction_motor_practice.md` を作成済み。

- 全12問、すべて五肢択一
- 基礎3問／本試験標準7問／複合・応用2問
- 数値問題は使用式・理由・代入・中間計算・最終値・検算まで記載
- 知識問題は正答理由と主要誤答肢の誤りを記載
- 選定5過去問の要求事項を全件マッピング
- 始動法、Y-Δ、巻線形比例推移、インバータ/V/f・VVVF、ベクトル制御、回生制動、詳細等価回路は追加していない

## 04 練習PDF
`topics/04_induction_motor/04_induction_motor_practice.pdf` を作成済み。

- A4縦 6ページ
- 練習sourceの12問と完全解説を内容変更せず収録
- 200 dpiで全6ページをレンダリングし、文字切れ・重なり・欠落グリフなしを確認
- PDF文字抽出で問1〜12、正答列 `2 / 4 / 4 / 2 / 1 / 3 / 3 / 2 / 3 / 2 / 3 / 2`、主要公式を確認
- Topic 04固定範囲外の論点・未確認実車値は追加していない

## 04 成果物
- `topics/04_induction_motor/04_induction_motor.md` — EXAM_ALIGNMENT＋解説本文＋3段階例題まで完了
- `topics/04_induction_motor/04_induction_motor_explanation.pdf` — 完了、表示QA PASS
- `topics/04_induction_motor/04_induction_motor_practice.md` — 完了
- `topics/04_induction_motor/04_induction_motor_practice.pdf` — 完了、表示QA・文字抽出QA PASS
- 解説画像PowerPoint — 未着手

## 04 品質ゲート
`IN_PROGRESS`。選定5問の要求事項は解説source・解説PDF・練習問題source・練習PDFへ反映済み。PowerPoint、完成後独立再解答が未完了のため完成数は3/16据え置き。

## 03 完成記録
Topic 03は新選定5問（R7下 問2、R6上 問2、R2 問1、R1 問1、H30 問1）を完成教材だけで再解答し5/5正答。`PASS / completed`。

## 次
Topic 04の解説画像PowerPointを作成する。系列SPECと確定済みEXAM_ALIGNMENTの固定範囲だけを図解し、全スライド表示QA・はみ出し検査を行う。