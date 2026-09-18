# Topic 20 最終QA

更新日: 2026-09-19

対象: `20 East iは走りながら何をどう測る？`

## 結論

判定: `NEEDS_REVISION / FINAL_QA_BLOCKED`

教材本体・表示QA・過去問対応品質ゲートはPASSしているが、主source `20_east_i_measurement.md` の進捗記録が `EXPLANATION_SOURCE_COMPLETE` のままで、GitHub正本上の実進捗 `INDEPENDENT_REANSWER_COMPLETE` と不一致である。完了判定はGitHub正本と実在成果物で行うため、この不一致を残したまま `completed` にはしない。

## 1. 必須成果物の存在確認

- source Markdown: `20_east_i_measurement.md` → `PASS`
- 制作前blind独立再解答: `20_east_i_measurement_blind_reanswer.md` → `PASS`
- 解説PDF: `20_east_i_measurement_explanation.pdf` → `PASS`
- 解説PDF QA: `20_east_i_measurement_explanation_pdf_qa.md` → `PASS`
- 練習source: `20_east_i_measurement_practice.md` → `PASS`
- 練習PDF: `20_east_i_measurement_practice.pdf` → `PASS`
- 練習PDF QA: `20_east_i_measurement_practice_pdf_qa.md` → `PASS`
- PowerPoint: `20_east_i_measurement_images.pptx` → `PASS`
- PowerPoint QA: `20_east_i_measurement_powerpoint_qa.md` → `PASS`
- 完成後独立再解答: `20_east_i_measurement_reanswer.md` → `PASS`

必須成果物欠落: `0件`。

## 2. EXAM_ALIGNMENT・過去問対応品質ゲート

固定EXAM_ALIGNMENTは一次5問・25答案要素。

- R8 一次 理論 問4: `5 / 5 PASS`
- R7 一次 理論 問4: `5 / 5 PASS`
- R6 一次 理論 問6: `5 / 5 PASS`
- H24 一次 理論 問7: `5 / 5 PASS`
- H20 一次 理論 問6: `5 / 5 PASS`
- 合計: `25 / 25 PASS`
- R8/R7/R6/H24 公式標準解答直接一致: `20 / 20`
- H20二次資料掲載解答一致: `5 / 5`
- 完成教材内の固定範囲だけで再構成: `PASS`
- 教材外知識補完: `0件`

H20は現行の電気技術者試験センター公式アーカイブ外であり、公式標準解答を直接確認済みとは扱わず、電験王の問題転記・掲載解答による二次照合として記録されている。この出典境界は維持されている。

## 3. 二次試験の扱い

- 系列08は一次「理論」中心: `PASS`
- Topic 20固定範囲だけで完答する直接対応二次問題の無理な採用: `0件`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- 二次採用方針変更: `0件`

## 4. SPEC固定範囲

固定12項目:

1. 測定誤差
2. 絶対誤差
3. 相対誤差
4. 精度
5. 有効数字
6. ブリッジ回路
7. 波形計測
8. オシロスコープ
9. A/D変換
10. サンプリング
11. 標本化
12. エイリアシング

- 解説PDF: `12 / 12収録`
- 練習問題: `12 / 12接続`
- PowerPoint: `12 / 12可視化`
- 固定範囲外追加: `0件`
- A/D・サンプリング・エイリアシングを存在しない公式過去問へ接続: `0件`

## 5. 成果物QA

### 解説PDF

- A4縦8ページ
- 200 dpi全ページ表示QA: `8 / 8 PASS`
- 文字抽出QA: `PASS`
- クリッピング / 重なり / 文字化け / ページ欠落: `0件`
- 必須説明: `20 / 20`
- 3段階例題: `3 / 3`
- 例題独立再計算: `3 / 3 PASS`

### 練習PDF

- A4縦4ページ
- 問題数: `12問`
- 形式: `全問五肢択一`
- 難易度: `基礎3 / 本試験標準6 / 複合・ひっかけ3`
- 200 dpi全ページ表示QA: `4 / 4 PASS`
- 数値再計算・論理QA: `12 / 12 PASS`
- 正答一意性: `12 / 12 PASS`
- 固定一次5問・25答案要素接続: `25 / 25`

### PowerPoint

- 16:9 / 8枚
- 200 dpi全スライド表示QA: `8 / 8 PASS`
- shape geometry overflow: `0件`
- PPTX ZIP整合性: `PASS`
- PDF変換: `8ページ / PASS`
- PDF/XML文字抽出QA: `PASS`
- 文字化け / クリッピング / 重なり / 欠落: `0件`
- 固定一次5問・25答案要素可視化: `25 / 25`

## 6. East i出典境界

- JR東日本/JREメディア公開範囲の検査・検測項目を導入例に限定: `PASS`
- 2025-10-23 JR東日本資料のトロリ線摩耗・高さ・偏位、カメラ画像等の取得を使用: `PASS`
- E926内部測定回路の推測: `0件`
- 未公開ADC bit数・サンプリング周波数・センサ方式の実値化: `0件`

## 7. blocker

`20_east_i_measurement.md` 冒頭の状態欄が実進捗と不一致。

現在の主source記録:

- stage: `EXPLANATION_SOURCE_COMPLETE`
- 次工程: `解説PDF＋表示QA`

GitHub上の実進捗:

- 解説PDF: 完了
- 練習PDF: 完了
- PowerPoint: 完了
- 完成後独立再解答: `25 / 25 PASS`
- 現在工程: 最終QA

blocker数: `1件`。

## 次工程

主source `20_east_i_measurement.md` の状態欄を実進捗へ同期する。同期後に最終QAを再実施し、PASSした場合のみ `completed` 状態同期へ進む。
