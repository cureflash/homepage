# STATUS - 新幹線・電験三種「機械」

更新日: 2026-09-14

## 状態
- active_series: `03_shinkansen_machine_3`
- exam_aligned_completed_topics: 4 / 16
- current_status: `topic_04_completed`
- last_completed_topic: `04 300系でモーターが全部変わった`
- active_topic: `05 誘導電動機はなぜ勝手に回る？`
- next_start: Topic 05の制作前EXAM_ALIGNMENTを実施する。系列SPECのTopic 05固定範囲から外れる論点を追加せず、公式過去問を直近年度から原則5問以上選定し、要求知識・使用式・設問型・教材で必要な説明を固定してから本文制作へ進む

## 新品質ゲート進捗
- [x] 01 架線25kVをそのままモーターに入れたらどうなる？ — 選定5問を教材だけで再解答し5/5正答、品質ゲートPASS
- [x] 02 初代0系はどうやって走っていた？ — 選定6問を教材だけで再解答し6/6正答、品質ゲートPASS
- [x] 03 直流モーターはどうやって速度を変える？ — 必須4成果物を新選定5問へ同期。完成後独立再解答5/5正答、品質ゲートPASS
- [x] 04 300系でモーターが全部変わった — 必須成果物・EXAM_ALIGNMENT・独立再解答5/5・表示QA・範囲境界・進捗整合を再確認し、最終QA `PASS / completed`
- [ ] 05〜16 — 未完了

## 04 EXAM_ALIGNMENT対象
1. R8上 機械 問4 — かご形三相誘導電動機、同期速度、同期ワット（二次入力）、トルク・機械出力
2. R6下 機械 問4 — 三相入力、滑り、鉄損・一次銅損・二次銅損、`Pc2=sP2`
3. R5上 機械 問3 — 回転磁界、固定子・回転子、変圧器との対応、滑りによる二次誘導起電力
4. R5上 機械 問4 — `Ns=120f/p`、`N=(1-s)Ns`、機械出力からトルク
5. R1 機械 問3 — 同期速度、滑り、二次入力・二次銅損、入力・出力・効率

直近年度でも始動法、Y-Δ始動、インバータ/V/f制御、詳細等価回路、発電運転・用途材料などTopic 04の固定範囲外を設問全体の正答に必要とする問題は選定から除外した。教材へ仕様外論点を追加して通過させていない。

## 04 解説source
`topics/04_induction_motor/04_induction_motor.md` に以下を収録済み。

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
- 完成後独立再解答 `5 / 5 PASS`
- 最終QA `PASS / completed`

前回最終QAで検出した進捗記録の不整合2箇所は修正済みで、今回再確認した。

- 冒頭状態欄は全成果物・独立再解答・最終QA完了へ同期
- 末尾独立再解答欄は答案列 `3 / 3 / 5 / 2 / 3`・公式照合 `5 / 5 PASS`・教材外知識補完0件・範囲外追加0件と整合
- 本文・式・EXAM_ALIGNMENT・3段階例題・範囲境界は変更していない

## 04 解説PDF
`topics/04_induction_motor/04_induction_motor_explanation.pdf` を作成済み。

- A4縦 5ページ
- 解説sourceの固定範囲だけを収録
- 同期速度・滑り・二次周波数・トルク・電力フロー・損失・効率・3段階例題・過去問対応を収録
- 200 dpiで全5ページをレンダリングし、文字切れ・重なり・欠落グリフなしを確認済み
- PDF文字抽出で主要見出し・公式・過去問番号を確認済み

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
- 200 dpiで全6ページをレンダリングし、文字切れ・重なり・欠落グリフなしを確認済み
- PDF文字抽出で問1〜12、正答列 `2 / 4 / 4 / 2 / 1 / 3 / 3 / 2 / 3 / 2 / 3 / 2`、主要公式を確認済み
- Topic 04固定範囲外の論点・未確認実車値は追加していない

## 04 解説画像PowerPoint
`topics/04_induction_motor/04_induction_motor_images.pptx` を作成済み。

- 16:9・4枚
- Slide 1: 直流主電動機から三相誘導電動機への転換、固定子・回転子・回転磁界、`Ns`・`s`・`f2`
- Slide 2: 同期速度→滑り→二次周波数の解法手順、`E2s=sE20`、典型ミス
- Slide 3: `P1 → P2 → Pm → Pout`、二次銅損・効率、実角速度・同期角速度とトルク
- Slide 4: 選定5過去問の要求事項マッピングとTopic 04範囲境界
- 全4枚をレンダリングし、文字切れ・意図しない重なりなしを確認済み
- `slides_test.py` でスライド境界外はみ出し0、PPTX ZIP整合性PASS
- 始動法、Y-Δ始動、巻線形比例推移、インバータ/V/f・VVVF、ベクトル制御、回生制動、詳細等価回路、未確認実車値は追加していない

## 04 完成後独立再解答
`topics/04_induction_motor/04_induction_motor_independent_reanswer.md` に詳細を記録済み。

- 保存済み正答・公式解答を先に見ず、完成教材だけで選定5問を再解答
- 導出した答案列: `3 / 3 / 5 / 2 / 3`
- 答案確定後に公式解答と照合し、`5 / 5 PASS`
- 教材外知識による補完: `0件`
- Topic 04固定範囲外の論点追加: `0件`
- 使用公式・途中式・正答理由をすべて教材内から再構成できた

## 04 成果物
- `topics/04_induction_motor/04_induction_motor.md` — EXAM_ALIGNMENT＋解説本文＋3段階例題＋独立再解答＋最終QA PASS記録
- `topics/04_induction_motor/04_induction_motor_explanation.pdf` — 完了、表示QA PASS
- `topics/04_induction_motor/04_induction_motor_practice.md` — 完了
- `topics/04_induction_motor/04_induction_motor_practice.pdf` — 完了、表示QA・文字抽出QA PASS
- `topics/04_induction_motor/04_induction_motor_images.pptx` — 完了、全スライド表示QA・はみ出し検査・ZIP整合性PASS
- `topics/04_induction_motor/04_induction_motor_independent_reanswer.md` — 完了、選定5問5/5 PASS

## 04 最終QA
判定: `PASS / completed`

確認結果:
- 必須成果物はGitHub正本上に全件実在
- EXAM_ALIGNMENTの選定5問はsource・練習source・独立再解答・STATUS/HANDOFFで一致
- 完成後独立再解答は `5 / 5 PASS`、教材外知識補完0件
- PDF/PPTXの既存表示QA記録は全件PASS
- Topic 04固定範囲外の追加0件
- 前回指摘した `04_induction_motor.md` の進捗不整合2箇所は修正済みで、今回の最終QA時点でも整合

Topic 04は品質ゲートを通過したため `completed` とする。完成数を4/16へ更新した。

## 03 完成記録
Topic 03は新選定5問（R7下 問2、R6上 問2、R2 問1、R1 問1、H30 問1）を完成教材だけで再解答し5/5正答。`PASS / completed`。

## 次
Topic 05「誘導電動機はなぜ勝手に回る？」の制作前EXAM_ALIGNMENTを実施する。系列SPECの固定範囲（回転磁界、電磁誘導、回転子電流、滑り、二次入力、二次銅損、機械出力、トルク、最大トルク、比例推移、効率、一次入力、固定子損失、三種で必要な範囲の等価回路）から外れる論点は追加しない。