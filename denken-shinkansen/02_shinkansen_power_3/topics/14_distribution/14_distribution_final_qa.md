# Topic 14 最終QA記録

対象: `14 駅やトンネルにはどう電気を配る？`
実施日: 2026-09-18

## 判定
`NEEDS_REVISION / IN_PROGRESS`。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`02_shinkansen_power_3/SPEC.md` とGitHub正本を再照合した。技術内容、必須成果物、固定EXAM_ALIGNMENT、完成後ブラインド独立再解答、PDF/PPTX QA、SPEC境界はPASS。進捗記録整合のみFAILと判定する。

Topic 14はまだ `completed` にしない。仕様追加、固定問題変更、数式・問題・正答・PDF/PPTXの変更は行わない。

## 必須成果物
GitHub正本上で以下の実在を確認した。

- source Markdown: `14_distribution.md`
- 解説PDF: `14_distribution_explanation.pdf`
- 解説PDF QA: `14_distribution_explanation_qa.md`
- 練習問題source: `14_distribution_practice_source.md`
- 練習PDF: `14_distribution_practice.pdf`
- 練習PDF QA: `14_distribution_practice_qa.md`
- 解説画像PowerPoint: `14_distribution_images.pptx`
- PowerPoint QA: `14_distribution_powerpoint_qa.md`
- 完成後ブラインド独立再解答: `14_distribution_independent_reanswer.md`

必須成果物: PASS。

## 現行EXAM_ALIGNMENT
品質ゲート対象はTopic 14固定範囲だけで完答できる公式過去問5問・6答案要素。

- R8上 電力 問13
- R7下 電力 問10
- R3 電力 問12
- H23 電力 問9
- H20 電力 問17(a)(b)

固定5問・6答案要素の本文要求事項マッピング: `6 / 6 PASS`。

件数合わせの仕様追加はなく、バランサ、ケーブル詳細損失、OF/CVT比較、保護・接地・配電自動化、分散型電源連系、Topic 15の回生・蓄電・電力融通、未確認の新幹線実設備値へ範囲を広げていない。

## 完成後ブラインド独立再解答
- R8上 電力 問13: `(2)` / PASS
- R7下 電力 問10: `(5)` / PASS
- R3 電力 問12: `(5)` / PASS
- H23 電力 問9: `(1)` / PASS
- H20 電力 問17(a): `(2)` / PASS
- H20 電力 問17(b): `(3)` / PASS

集計:
- 公式解答一致: `6 / 6 PASS`
- 教材のみ完結: `6 / 6 PASS`
- 教材外知識補完: `0件`
- Topic 15以降の論点による補完: `0件`
- 未確認新幹線実設備値の使用: `0件`
- SPEC固定範囲外追加: `0件`

過去問対応品質ゲート: PASS。

## 成果物QA
- 解説PDF: A4縦4ページ、200 dpi表示QA `4 / 4 PASS`、文字抽出QA PASS、3段階例題の数値・論理再検算 `3 / 3 PASS`、固定5問・6答案要素への対応 `6 / 6`。
- 練習PDF: A4縦4ページ、全12問・全問五肢択一。200 dpi表示QA `4 / 4 PASS`、文字抽出QA PASS、数値・論理再検算 `12 / 12 PASS`、正答一意性 `12 / 12 PASS`、固定5問・6答案要素への接続 `6 / 6 PASS`。
- PowerPoint: 16:9・4枚。固定5問・6答案要素の要求事項可視化 `6 / 6 PASS`。表示QA `4 / 4 PASS`、文字欠け0、クリップ0、意図しない重なり0、境界外はみ出し0、ZIP整合性PASS。

表示・ファイルQA: PASS。

## SPEC境界
維持した範囲:
- 高圧配電
- 低圧配電
- 単相三線式
- 三相三線式
- 配電変圧器
- ケーブル
- CVケーブル
- 地中電線路
- 許容電流
- 電圧降下
- 駅・トンネル・車両基地・信号・照明・ポンプ・空調・防災設備を配電先負荷として使用

追加していない範囲:
- バランサ
- シース損・誘電体損・故障点標定
- OF/CVT等の詳細比較
- 保護リレー・遮断器・接地方式
- 配電自動化・ループ・スポットネットワーク・分散型電源連系
- Topic 15の回生電力・蓄電・電力融通
- 未確認の新幹線実設備電圧・ケーブル種類・断面積・許容電流

SPEC境界: PASS。

## 進捗記録整合
最終QA実施時点で、以下5箇所が旧工程を次工程として残しており、現在地と不整合。

1. `14_distribution_explanation_qa.md` — `次` が「練習問題sourceを作成する」のまま。
2. `14_distribution_practice_source.md` — `次` が「練習PDFを作成する」のまま。`practice_source_complete` は当該成果物自体のローカル状態として保持可能だが、後工程未反映の `次` は同期が必要。
3. `14_distribution_practice_qa.md` — `次` が「最終QAを実施する」のまま。
4. `14_distribution_powerpoint_qa.md` — `次` が「最終QAを実施する」のまま。
5. `14_distribution_independent_reanswer.md` — `次` が「最終QAを実施する」のまま。

技術内容、数式、固定問題、正答、PDF/PPTX、独立再解答結果に修正事項はない。

進捗記録整合: FAIL。

## 最終判定
- 必須成果物: PASS
- 現行EXAM_ALIGNMENT: PASS
- 完成後独立再解答: `6 / 6 PASS`
- 教材外知識補完: `0件`
- PDF/PPTX QA: PASS
- SPEC境界: PASS
- 進捗記録整合: FAIL（旧工程5箇所）

Topic 14は `NEEDS_REVISION / IN_PROGRESS`。新品質基準の完成数は `13 / 16` のまま。

次工程は旧進捗記録5箇所を現在地へ同期する。固定EXAM_ALIGNMENT、数式、問題、正答、PDF/PPTX、独立再解答結果は変更しない。同期後に最終QAを再実施し、全件PASSの場合のみ `completed` とする。
