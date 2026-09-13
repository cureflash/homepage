# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-14

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は4/16。Topic 01〜04は品質ゲートPASSでcompleted。active topicは05 `誘導電動機はなぜ勝手に回る？`。

## 今回進捗
Topic 05の解説本文＋基礎・本試験標準・複合の3段階例題を完成した。

`topics/05_induction_motor_principle/05_induction_motor_principle.md` に、固定済みEXAM_ALIGNMENTを変更せず以下を追加した。

- 回転磁界→誘導起電力→回転子電流→トルク発生
- 同期速度、滑り、二次周波数
- 三種範囲の二次等価回路と `r2/s`
- `P1 → P2 → Pm → Pout` の電力フロー、損失、効率
- `P2=Tωs` と `Pm=Tωm` の使い分け
- 最大トルクと比例推移
- 速度・電力・トルク・比例推移の解法アルゴリズム
- 基礎例題: 同期速度・滑り・二次周波数
- 本試験標準例題: 三相一次入力から二次入力・損失・軸出力・効率
- 複合例題: 比例推移＋実回転速度＋同期ワット・機械変換電力
- 選定5問・6小問の本文節への対応マッピング

仕様外論点・未確認実車値の追加は0件。

## Topic 05 固定EXAM_ALIGNMENT
選定は変更していない。

- R8上 機械 問4 — 同期速度、同期ワット（二次入力）、トルク
- R6下 機械 問3 — 最大トルク、二次抵抗、比例推移
- R6下 機械 問4 — 三相一次入力、固定子損失、二次入力・二次銅損、滑り
- R6上 機械 問15(a)(b) — 滑り・トルク比例、比例推移、実回転速度
- R4下 機械 問2 — 二次銅損、二次入力、機械変換電力、機械損、軸出力

制作前独立検証は `6 / 6 PASS`。完成後独立再解答を汚染しないため、正答番号はsourceへ保存していない。

## Topic 05 固定範囲
系列SPECに従い、次だけを扱う。

- 回転磁界
- 電磁誘導
- 回転子電流
- すべり
- 二次入力
- 二次銅損
- 機械出力
- トルク
- 最大トルク
- 比例推移
- 効率
- 一次入力
- 固定子損失
- 誘導機の等価回路は三種で必要な範囲まで

教材で使用する中心関係:

- `Ns=120f/p`、`s=(Ns-N)/Ns`、`f2=sf1`
- `E2=sE20`、`x2=sx20`、三種範囲の `r2/s`
- `P1 → 固定子損失 → P2 → Pc2/Pm → 機械損 → Pout`
- `Pc2=sP2`、`Pm=(1-s)P2`、`η=Pout/P1`
- `P2=Tωs` と `Pm=Tωm`
- 最大トルク、二次抵抗と比例推移
- 問題文で与えられた微小滑り領域の `T∝s` の条件付き使用

Y-Δ始動、始動補償器、インバータ/V/f・VVVF・ベクトル制御、発電運転・回生制動、単相誘導電動機、円線図・詳細等価回路、未確認実車値は追加しない。

## Topic 05 現在の品質状態
- 制作前EXAM_ALIGNMENT: 完了
- 制作前独立検証: `6 / 6 PASS`
- 解説本文: 完了
- 3段階例題: 完了
- 選定5問・6小問の本文マッピング: 完了
- 固定範囲外追加: `0件`
- 解説PDF: 未着手
- 練習問題source/PDF: 未着手
- 解説画像PowerPoint: 未着手
- 完成後独立再解答: 未着手
- 完成数: `4 / 16` 据え置き

## Topic 04 完成記録
Topic 04 `300系でモーターが全部変わった` は最終QA `PASS / completed`。

- EXAM_ALIGNMENT: 5問
- 完成後独立再解答: `5 / 5 PASS`
- 教材外知識による補完: `0件`
- 固定範囲外論点の追加: `0件`
- 解説PDF・練習PDF・PowerPointの表示QA: PASS

成果物:
- `topics/04_induction_motor/04_induction_motor.md`
- `topics/04_induction_motor/04_induction_motor_explanation.pdf`
- `topics/04_induction_motor/04_induction_motor_practice.md`
- `topics/04_induction_motor/04_induction_motor_practice.pdf`
- `topics/04_induction_motor/04_induction_motor_images.pptx`
- `topics/04_induction_motor/04_induction_motor_independent_reanswer.md`

## 現在状態
- `current_status`: `topic_05_explanation_source_complete`
- 完成数: `4/16`
- last completed: Topic 04 `300系でモーターが全部変わった`
- active: Topic 05 `誘導電動機はなぜ勝手に回る？`

## 次の正確な開始点
Topic 05の固定EXAM_ALIGNMENTと完成済み解説sourceを変更せず、解説PDFを作成する。全ページ表示QA・文字抽出QAを行い、系列SPEC外論点と未確認実車値は追加しない。