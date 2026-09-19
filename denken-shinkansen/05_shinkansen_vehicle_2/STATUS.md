# STATUS - 新幹線車両・電験二種

更新日: 2026-09-20

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `25 / 39`
- current_status: `topic_26_practice_pdf_complete`
- last_completed_topic: `25 N700S バッテリー自走のエネルギー設計`
- active_topic: `26 E7・W7系 勾配条件を含む総合走行解析`
- next_start: Topic 26 PowerPoint生成＋QA。固定EXAM_ALIGNMENT、解説source/PDF、練習source/PDFを正本として、SPEC指定3可視化と過去問接続を16:9スライドへ反映し表示・構造・内容QAを行う

## Topic 25 最終状態

- 判定: `PASS / COMPLETED`
- 解説PDF canonical blob SHA: `7588e85204db180eee2bd5e2494708df4810276e`
- 練習PDF canonical blob SHA: `2dbb1439e2ee237065fce69e8ac11a9315c0335f`
- PowerPoint canonical blob SHA: `726da748b8ceb7c0d6cdee770daca7738fc1c202`
- 固定過去問: `5 / 5 PASS`
- 一次答案要素: `20 / 20 PASS`
- 二次答案要素: `8 / 8 PASS`
- 合計答案要素: `28 / 28 PASS`
- SPEC必須10項目: `10 / 10 PASS`
- SPEC指定3可視化: `3 / 3 PASS`
- exact blocker: `0件`

## Topic 25 固定EXAM_ALIGNMENT

1. R8 一次「機械」問5 `(1)〜(5)` — 5答案要素
2. R4 一次「機械」問6 `(1)〜(5)` — 5答案要素
3. R2 一次「機械」問4 `(1)〜(5)` — 5答案要素
4. R1 一次「機械」問4 `(1)〜(5)` — 5答案要素
5. H23 二次「機械・制御」問3 `(1)〜(4)` — 8答案要素

集計: 一次 `20`、二次 `8`、合計 `28`。固定EXAM_ALIGNMENT変更 `0件`。

## Topic 25 固定境界

N700S実車接続は東芝一次メーカー資料で確認済みのSCiB採用・バッテリー自走共同開発まで。未確認の電池電圧、Ah、Wh、セル数、直並列数、Cレート、実放電電流、各効率を真値化しない。速度条件―必要電力は与件の仮定入力比較に限定し、未指定走行抵抗モデルを追加しない。

## Topic 26 制作前EXAM_ALIGNMENT

- 判定: `PASS / EXAM_ALIGNMENT_COMPLETE`
- path: `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis.md`
- 固定過去問: `5問`
- 一次: `4問・10答案要素`
- 二次: `1問・6答案要素`
- 合計: `16答案要素`
- SPEC必須: `7項目`
- SPEC指定可視化: `3件`
- 固定問題: R7二次「機械・制御」問2、H26一次「機械」問5、H25一次「機械」問3、R5一次「機械」問2、H27一次「機械」問3
- 列車の勾配抵抗式・走行抵抗式を直接問う第二種公式問題: 固定対象として確認できず。Topic 14で確定済みの列車側力学からSPEC必須として接続し、直接出題とは記載しない
- 実車接続: JR東日本公式資料で北陸新幹線の30‰急勾配とE7系のブレーキ性能向上を確認。未公表の実車値は推定しない
- exact blocker: `0件`

## Topic 26 解説source

- 判定: `PASS / EXPLANATION_SOURCE_COMPLETE`
- path: `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_explanation_source.md`
- 固定過去問: `5 / 5 mapped`
- 一次答案要素: `10 / 10 covered`
- 二次答案要素: `6 / 6 covered`
- 合計答案要素: `16 / 16 covered`
- SPEC必須7項目: `7 / 7 covered`
- SPEC指定3可視化: `3 / 3 defined`
- 3段階例題: `3 / 3`
- 未確認E7・W7実車値の真値化: `0件`
- 未確認実車走行抵抗係数の追加: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外主題追加: `0件`
- exact blocker: `0件`

## Topic 26 解説PDF

- 判定: `PASS / EXPLANATION_PDF_COMPLETE`
- path: `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_explanation.pdf`
- canonical blob SHA: `0d6c373ca4dc1edcc004be32666ac40f8607b6b4`
- QA: `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_explanation_pdf_qa.md`
- file size: `10,902 bytes`
- SHA-256: `304095fecec8fe3d2e46eda8fb020c3e48a2164179eb204b5e318b93dc591b17`
- A4縦: `3 pages`
- PDFium render: `3 / 3 PASS`
- Poppler render: `3 / 3 PASS`
- `pdftotext`: `PASS`
- 置換文字 `�`: `0件`
- 固定過去問: `5 / 5 covered`
- 一次答案要素: `10 / 10 covered`
- 二次答案要素: `6 / 6 covered`
- 合計答案要素: `16 / 16 covered`
- SPEC必須7項目: `7 / 7 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`
- 教材用仮定値と実車値の混同: `0件`
- exact blocker: `0件`

## Topic 26 練習source

- 判定: `PASS / PRACTICE_SOURCE_COMPLETE`
- path: `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_practice_source.md`
- 一次試験型: `8問`
- 二次試験型: `4問`
- 合計: `12問`
- 固定過去問: `5 / 5 connected`
- 一次答案要素: `10 / 10 connected`
- 二次答案要素: `6 / 6 connected`
- 合計答案要素: `16 / 16 connected`
- SPEC必須7項目: `7 / 7 covered`
- SPEC指定3可視化の計算系: `3 / 3 aligned`
- 数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 教材用仮定値と実車値の混同: `0件`
- 未確認E7・W7実性能曲線の追加: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- exact blocker: `0件`

## Topic 26 練習PDF

- 判定: `PASS / PRACTICE_PDF_COMPLETE`
- path: `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_practice.pdf`
- canonical blob SHA: `8905c072f60a0b584c8cd7f439713606588bb500`
- QA: `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_practice_pdf_qa.md`
- file size: `11,005 bytes`
- SHA-256: `6c54571db61e98f8251e7171291a5a5bc57afaf751ff7e194240021b2009441e`
- A4縦: `4 pages`
- PDFium / Poppler render: `4 / 4 PASS`
- `pdftotext`: `PASS`（6,415 bytes）
- 置換文字 `�`: `0件`
- 一次8問＋正答・完全解説: `8 / 8`
- 二次4問＋完全解説: `4 / 4`
- 数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定過去問: `5 / 5 connected`
- 一次答案要素: `10 / 10 connected`
- 二次答案要素: `6 / 6 connected`
- 合計答案要素: `16 / 16 connected`
- SPEC必須7項目: `7 / 7 covered`
- SPEC指定3可視化の計算接続: `3 / 3 aligned`
- 教材用仮定値と実車値の混同: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- exact blocker: `0件`

## Topic 21 H26二次 問1(4)

`48.0 / 48.1 N·m` 差は公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 完成数

Topic 01〜25: `PASS / completed`。完成数 `25 / 39`。Topic 26は練習PDFまで完了。次はPowerPoint生成＋QA。