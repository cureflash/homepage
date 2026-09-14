# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-14

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は4/16。Topic 01〜04は品質ゲートPASSでcompleted。active topicは05 `誘導電動機はなぜ勝手に回る？`。

## 今回進捗
Topic 05の解説画像PowerPointを完成した。

成果物:
- `topics/05_induction_motor_principle/05_induction_motor_principle_images.pptx`
- 16:9、5スライド
- 回転磁界→電磁誘導→回転子電流→トルク、同期速度・滑り・二次周波数、電力フロー、`P2=Tωs` / `Pm=Tωm`、最大トルク・比例推移、固定EXAM_ALIGNMENTへの接続を図解
- 全5スライドをPDF化して表示QAし、文字切れ・重なり・欠落グリフなし
- スライド領域外はみ出し `0件`
- PPTX ZIP整合性 `PASS`
- 固定5問・6小問の要求事項を維持
- 仕様外論点・未確認実車値の追加は0件

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

中心関係:
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
- 解説PDF: 完了
- 解説PDF表示QA: `PASS`
- 解説PDF文字抽出QA: `PASS`
- 練習問題source: 完了（12問、固定5問・6小問を全件マッピング）
- 練習PDF: 完了
- 練習PDF表示QA: `PASS`
- 練習PDF文字抽出QA: `PASS`
- 解説画像PowerPoint: 完了（16:9、5スライド）
- PowerPoint表示QA: `PASS`
- PowerPointはみ出し検査: `PASS / 0件`
- PowerPoint ZIP整合性: `PASS`
- 完成後独立再解答: 未着手
- 固定範囲外追加: `0件`
- 完成数: `4 / 16` 据え置き

## Topic 04 完成記録
Topic 04 `300系でモーターが全部変わった` は最終QA `PASS / completed`。

- EXAM_ALIGNMENT: 5問
- 完成後独立再解答: `5 / 5 PASS`
- 教材外知識による補完: `0件`
- 固定範囲外論点の追加: `0件`
- 解説PDF・練習PDF・PowerPointの表示QA: PASS

## 現在状態
- `current_status`: `topic_05_powerpoint_complete`
- 完成数: `4/16`
- last completed: Topic 04 `300系でモーターが全部変わった`
- active: Topic 05 `誘導電動機はなぜ勝手に回る？`

## 次の正確な開始点
Topic 05の固定EXAM_ALIGNMENTと完成済み4成果物を変更せず、選定5問・6小問を完成教材だけで独立再解答する。保存済み正答を先に見ず、教材外知識で補完しない。