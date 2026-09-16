# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-16

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は `9 / 16`。Topic 01〜09は完成済み。

## 今回進捗
Topic 09 `変電所からパンタグラフまでどう送る？` の最終QAを実施し、`PASS / completed` とした。

`topics/09_feeding_transmission/09_feeding_transmission_final_qa.md` を追加し、main source・STATUS・HANDOFFを現在地へ同期した。教材本文、固定5問・7小問、既存成果物、SPEC固定範囲は変更していない。

最終QA結果:
- 必須成果物: PASS
- 固定5問・7小問の本文マッピング: `7 / 7`
- 完成教材のみでの独立再解答: `7 / 7 PASS`
- 公式解答一致: `7 / 7 PASS`
- 教材外知識補完: `0件`
- Topic 10以降の論点による補完: `0件`
- SPEC固定範囲外追加: `0件`
- 未確認実設備値の使用: `0件`
- 解説PDF QA: PASS
- 練習PDF QA: PASS
- PowerPoint QA: PASS
- 最終判定: `PASS / completed`

## Topic 09 固定過去問
品質ゲート対象は変更していない。
- R6下 電力 問12
- R6下 電力 問16 (a)(b)
- R6下 電力 問17 (a)(b)
- R5上 電力 問10
- R4下 電力 問9

制作前独立検証 `7 / 7 PASS`、完成後ブラインド独立再解答 `7 / 7 PASS`、公式解答との不一致0件。

## Topic 09 固定範囲
SPEC固定範囲は、送電線路、電線抵抗、インダクタンス、静電容量、インピーダンス、電圧降下、電力損失、ATき電方式、帰線。

ATき電方式そのものの詳細解析は三種相当の理解に留める。

公式過去問で必要なT形・π形一相等価回路は、与えられた線路定数を使って電圧・電流を追う範囲まで扱う。分布定数線路の厳密導出は追加しない。地中送電線路はR・L・Cの確認にのみ使用し、布設方式・ケーブル構造へ広げない。フェランチ現象は静電容量とリアクタンスの直接的な応用として扱い、独立主題へ拡張しない。

Topic 10以降の需要率・負荷率・不等率・無効電力補償、短絡・保護・遮断、弛度・張力、材料、配電、回生電力へ先回りしない。

R8上 電力 問8、およびR7上・R7下の送電関連候補のうち、機械的強度・コロナ・雷／開閉サージ・架空送電線路の構成部品・誘導障害等の固定範囲外論点を要する問題は品質ゲートへ採用しない。

## Topic 09 完了記録
source: `topics/09_feeding_transmission/09_feeding_transmission.md`
解説PDF: `topics/09_feeding_transmission/09_feeding_transmission_explanation.pdf`
練習問題source: `topics/09_feeding_transmission/09_feeding_transmission_practice_source.md`
練習PDF: `topics/09_feeding_transmission/09_feeding_transmission_practice.pdf`
練習PDF QA: `topics/09_feeding_transmission/09_feeding_transmission_practice_qa.md`
解説画像PowerPoint: `topics/09_feeding_transmission/09_feeding_transmission_images.pptx`
PowerPoint QA: `topics/09_feeding_transmission/09_feeding_transmission_powerpoint_qa.md`
完成後独立再解答: `topics/09_feeding_transmission/09_feeding_transmission_independent_reanswer.md`
最終QA: `topics/09_feeding_transmission/09_feeding_transmission_final_qa.md`

品質ゲート:
- 制作前EXAM_ALIGNMENT: 完了
- 公式過去問: `5問・7小問` 固定
- 制作前独立検証: `7 / 7 PASS`
- 公式解答との不一致: `0件`
- 解説本文: §1〜§14 完成
- 3段階例題: 完成
- 本文要求事項マッピング: `7 / 7`
- 本文数式・単位QA: PASS
- 解説PDF: A4縦4ページ
- 解説PDF表示QA: 200 dpi `4 / 4 PASS`
- 解説PDF文字抽出QA: PASS
- 解説PDF数値・論理再検算: PASS
- 練習問題source: 全12問・全問五肢択一
- 練習難易度: 基礎3 / 本試験標準7 / 複合2
- 練習source数値・論理独立再計算: `12 / 12 PASS`
- 練習source正答一意性: `12 / 12 PASS`
- 練習source固定5問・7小問への接続: `7 / 7`
- 練習PDF: A4縦4ページ
- 練習PDF表示QA: 200 dpi `4 / 4 PASS`
- 練習PDF文字抽出QA: PASS
- 練習PDF数値・論理再検算: `12 / 12 PASS`
- 練習PDF正答一意性: `12 / 12 PASS`
- 練習PDF固定5問・7小問への接続: `7 / 7`
- 解説画像PowerPoint: 16:9・4枚
- PowerPoint固定5問・7小問の要求事項可視化: `7 / 7`
- PowerPoint表示QA: 1601×900 `4 / 4 PASS`
- PowerPoint overflow: `0件`
- PowerPoint ZIP整合性: PASS
- 完成後ブラインド独立再解答: `7 / 7 PASS`
- 公式解答一致: `7 / 7 PASS`
- 教材外知識補完: `0件`
- Topic 10以降の論点による補完: `0件`
- SPEC固定範囲外追加: `0件`
- 未確認実設備値の真値化: `0件`
- main sourceへの完成後独立再解答結果同期: 完了
- 最終QA: `PASS / completed`

## 直前完了テーマ
Topic 09 `変電所からパンタグラフまでどう送る？` は `PASS / completed`。

## 現在状態
- `current_status`: `topic_09_completed`
- 完成数: `9 / 16`
- last completed: Topic 09 `変電所からパンタグラフまでどう送る？`
- active: Topic 10 `新幹線が突然大電力を使ったら？`

## 次の正確な開始点
Topic 10の制作前EXAM_ALIGNMENTを実施する。`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`SPEC.md` のTopic 10固定範囲だけで公式過去問を直近年度から調査し、品質ゲート対象を固定する。仕様を追加しない。