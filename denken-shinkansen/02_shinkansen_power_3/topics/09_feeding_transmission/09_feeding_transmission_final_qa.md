# Topic 09 最終QA記録

対象: `09 変電所からパンタグラフまでどう送る？`
実施日: 2026-09-16

## 判定
`PASS / completed`。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`02_shinkansen_power_3/SPEC.md` とGitHub正本の現状を再照合した。仕様追加は行っていない。

## 必須成果物
GitHub正本上で以下の実在を確認した。

- source Markdown: `09_feeding_transmission.md`
- 解説PDF: `09_feeding_transmission_explanation.pdf`
- 練習問題source: `09_feeding_transmission_practice_source.md`
- 練習PDF: `09_feeding_transmission_practice.pdf`
- 解説画像PowerPoint: `09_feeding_transmission_images.pptx`
- 練習PDF QA: `09_feeding_transmission_practice_qa.md`
- PowerPoint QA: `09_feeding_transmission_powerpoint_qa.md`
- 完成後ブラインド独立再解答: `09_feeding_transmission_independent_reanswer.md`

必須成果物の実在: PASS。

## 現行EXAM_ALIGNMENT
品質ゲート対象はTopic 09固定範囲だけで解答を完結できる公式過去問5問・7小問。

- R6下 電力 問12
- R6下 電力 問16 (a)(b)
- R6下 電力 問17 (a)(b)
- R5上 電力 問10
- R4下 電力 問9

R8上 電力 問8、およびR7上・R7下の送電関連候補のうち、機械的強度・コロナ・雷／開閉サージ・架空送電線路の構成部品・誘導障害等を要求する問題はTopic 09固定範囲外のため品質ゲートから除外している。除外問題を通すための仕様拡張はしていない。

固定5問・7小問の本文要求事項マッピング: `7 / 7`。

## 完成後独立再解答
保存済み正答を先に見ず、公式問題文と完成教材だけで固定5問・7小問を再解答した後に公式解答と照合した。

- R6下 電力 問12: `(2)` / PASS
- R6下 電力 問16(a)(b): `(3),(4)` / PASS
- R6下 電力 問17(a)(b): `(2),(4)` / PASS
- R5上 電力 問10: `(2)` / PASS
- R4下 電力 問9: `(1)` / PASS

集計:
- 公式解答一致: `7 / 7 PASS`
- 教材のみ完結: `7 / 7 PASS`
- 教材外知識補完: `0件`
- Topic 10以降の論点による補完: `0件`
- 未確認実設備値の使用: `0件`
- SPEC固定範囲外追加: `0件`

過去問対応品質ゲート: PASS。

## 成果物QA
- 解説PDF: A4縦4ページ、200 dpi表示QA `4 / 4 PASS`、文字抽出QA PASS、数値・論理再検算PASS。
- 練習PDF: A4縦4ページ、全12問・全問五肢択一。200 dpi表示QA `4 / 4 PASS`、文字抽出QA PASS、数値・論理再検算 `12 / 12 PASS`、正答一意性 `12 / 12 PASS`、固定5問・7小問への接続 `7 / 7`。
- PowerPoint: 16:9・4枚。固定5問・7小問の要求事項可視化 `7 / 7`。1601×900表示QA `4 / 4 PASS`、文字欠け0、クリップ0、意図しない重なり0、境界外はみ出し0、ZIP整合性PASS。

表示・ファイルQA: PASS。

## SPEC境界
維持した範囲:
- 送電線路
- 電線抵抗
- インダクタンス
- 静電容量
- インピーダンス／アドミタンス
- 電圧降下
- 電力損失
- T形・π形一相等価回路
- 充電電流・無負荷時電圧上昇
- ATき電方式・帰線の三種相当の概略

追加していない範囲:
- 分布定数線路の厳密導出
- 地中送電線路の布設方式・ケーブル構造
- AT容量・詳細電流分担率・鉄道固有保護方式・短絡計算
- Topic 10以降の需要率・負荷率・不等率・無効電力補償
- 短絡・保護・遮断
- 弛度・張力、材料、配電、回生電力
- 未確認の新幹線実設備値

SPEC境界: PASS。

## 最終判定
- 必須成果物: PASS
- 現行EXAM_ALIGNMENT: PASS
- 完成後独立再解答: `7 / 7 PASS`
- 教材外知識補完: `0件`
- PDF/PPTX QA: PASS
- SPEC境界: PASS

よってTopic 09を `completed` とする。完成数は `9 / 16`。次はTopic 10 `新幹線が突然大電力を使ったら？` の制作前EXAM_ALIGNMENTから開始する。
