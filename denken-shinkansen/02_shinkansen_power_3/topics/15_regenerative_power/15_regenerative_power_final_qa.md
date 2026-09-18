# Topic 15 最終QA記録

対象: `15 回生した電気はどこへ行く？`
実施日: 2026-09-19

## 判定
`PASS / completed`。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`02_shinkansen_power_3/SPEC.md` とGitHub正本を再照合した。初回最終QAで唯一FAILだった進捗記録整合は7箇所すべて同期済み。技術内容、必須成果物、固定EXAM_ALIGNMENT、完成後ブラインド独立再解答、PDF/PPTX QA、SPEC境界、進捗記録整合を再確認し、全件PASSとした。仕様追加は行っていない。

## 必須成果物
GitHub正本上で以下を確認した。

- source Markdown: `15_regenerative_power.md`
- 解説PDF: `15_regenerative_power_explanation.pdf`
- 解説PDF QA: `15_regenerative_power_explanation_qa.md`
- 練習問題source: `15_regenerative_power_practice_source.md`
- 練習PDF: `15_regenerative_power_practice.pdf`
- 練習PDF QA: `15_regenerative_power_practice_qa.md`
- 解説画像PowerPoint: `15_regenerative_power_images.pptx`
- PowerPoint QA: `15_regenerative_power_powerpoint_qa.md`
- 完成後ブラインド固定候補: `15_regenerative_power_independent_reanswer_candidates.md`
- 完成後ブラインド独立再解答: `15_regenerative_power_independent_reanswer.md`

必須成果物: PASS。

## 現行EXAM_ALIGNMENT
品質ゲート対象はTopic 15固定範囲だけで完答できる公式過去問5出題回・8答案要素。

- R8上 電力 問5
- R7上 法規 問13(a)(b)
- R4下 電力 問11
- H29 法規 問13(a)(b)
- H25 法規 問12(a)(b)

R7上法規問13はH25法規問12の再出題であり、新規パターンとして水増ししていない。固定5出題回・8答案要素の本文要求事項マッピングは `8 / 8 PASS`。

## 完成後ブラインド独立再解答
候補答案を公式標準解答参照前に固定し、その後に電気技術者試験センター公式標準解答と照合した記録を再確認した。

- R8上 電力 問5: `(4)` / PASS
- R7上 法規 問13(a): `(2)` / PASS
- R7上 法規 問13(b): `(3)` / PASS
- R4下 電力 問11: `(5)` / PASS
- H29 法規 問13(a): `(2)` / PASS
- H29 法規 問13(b): `(5)` / PASS
- H25 法規 問12(a): `(2)` / PASS
- H25 法規 問12(b): `(3)` / PASS

集計:
- 公式解答一致: `8 / 8 PASS`
- 完成教材だけで解法選択・途中計算・論理判定: `8 / 8 PASS`
- 教材外知識補完: `0件`
- 候補固定後の答案変更: `0件`
- SPEC固定範囲外追加: `0件`
- Topic 16先取り: `0件`
- 未確認新幹線実設備値の真値化: `0件`

過去問対応品質ゲート: PASS。

## 成果物QA
- 解説PDF: A4縦4ページ、200 dpi表示QA `4 / 4 PASS`、文字抽出QA PASS、3段階例題再検算 `3 / 3 PASS`、固定5出題回・8答案要素への対応 `8 / 8 PASS`。
- 練習PDF: A4縦4ページ、全12問・全問五肢択一。200 dpi表示QA `4 / 4 PASS`、文字抽出QA PASS、数値・論理再検算 `12 / 12 PASS`、正答一意性 `12 / 12 PASS`、固定5出題回・8答案要素への接続 `8 / 8 PASS`。
- PowerPoint: 16:9・4枚。固定5出題回・8答案要素の要求事項可視化 `8 / 8 PASS`。表示QA `4 / 4 PASS`、overflow `0件`、ZIP整合性PASS、数値・論理QA PASS。

表示・ファイルQA: PASS。

## SPEC境界
維持した範囲:
- 回生電力、電力系統、電力融通、負荷、蓄電池、回生失効、電力貯蔵、需給バランス、省エネルギー
- `P[kW]` と `W[kWh]`、`W=Pt`、`W=∫Pdt`、時間変化グラフの面積
- 余剰・不足・送受電、自家消費
- 固定過去問理解に必要な太陽光・揚水・運転予備力・火力の最小限の例

追加していない範囲:
- 電池化学、UPS、充電方式
- 系統連系保護、配電電圧制御、パワーコンディショナ詳細
- 電気事業法上の広域運営・供給計画
- Topic 16の総合系統計算
- 未確認の新幹線実回生電力、蓄電池容量、設備配置、具体的回生融通方式

SPEC境界: PASS。

## 進捗記録整合
初回最終QAでFAILだった7箇所を再確認した。

1. `STATUS.md` — 最終QA再実施へ同期済み。
2. `15_regenerative_power.md` — 完成後独立再解答と最終QA再実施結果を同期。
3. `15_regenerative_power_explanation_qa.md` — 完了状態へ同期。
4. `15_regenerative_power_practice_source.md` — 完了状態へ同期。
5. `15_regenerative_power_practice_qa.md` — 完了状態へ同期。
6. `15_regenerative_power_powerpoint_qa.md` — 完了状態へ同期。
7. `15_regenerative_power_independent_reanswer.md` — 最終QA再実施結果へ同期。

`15_regenerative_power_independent_reanswer_candidates.md` は公式解答照合前のblind固定証跡として固定時点の内容を保持する。

進捗記録整合: `7 / 7 PASS`。

## 最終判定
- 必須成果物: PASS
- 現行EXAM_ALIGNMENT: PASS
- 完成後独立再解答: `8 / 8 PASS`
- 公式解答一致: `8 / 8 PASS`
- 教材外知識補完: `0件`
- PDF/PPTX QA: PASS
- SPEC境界: PASS
- 進捗記録整合: `7 / 7 PASS`

Topic 15は `PASS / completed`。新品質基準の完成数は `15 / 16`。次はTopic 16 `発電所からN700Sまで全部つないでみる` の制作前EXAM_ALIGNMENT。