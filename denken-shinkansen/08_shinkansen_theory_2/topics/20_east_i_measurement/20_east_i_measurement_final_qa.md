# Topic 20 最終QA

テーマ: `20 East iは走りながら何をどう測る？`

再実施日: 2026-09-19
判定: `PASS / FINAL_QA_COMPLETE`

## 再照合対象

`denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`、`STATUS.md`、`HANDOFF.md`、GitHub正本のTopic 20成果物を再照合した。

品質ゲートは固定一次5問・25答案要素。系列08は一次理論中心であり、Topic 20固定範囲だけで完答する二次直接対応問題は採用していないため、二次採用0問・二次数合わせ0件を維持する。

## 初回blocker再確認

初回最終QAのblockerは1件だった。

1. 主source `20_east_i_measurement.md` の進捗記録がGitHub正本上の実進捗と不一致。

再確認結果:

- 主source stage: `INDEPENDENT_REANSWER_COMPLETE`
- 主source completion: `in_progress`
- 解説PDF＋表示QA: `PASS / EXPLANATION_PDF_COMPLETE`
- 練習PDF＋表示QA: `PASS / PRACTICE_PDF_COMPLETE`
- PowerPoint＋表示QA: `PASS / POWERPOINT_COMPLETE`
- 完成後独立再解答: `25 / 25 PASS / INDEPENDENT_REANSWER_COMPLETE`
- 主sourceの次工程: `最終QA再実施`
- 初回blocker解消: `1 / 1`

## 必須成果物

- source Markdown: `PASS`
- 制作前blind独立再解答: `25 / 25 PASS`
- 解説PDF: `PASS / EXPLANATION_PDF_COMPLETE`
- 解説PDF QA: `8 / 8 PASS`
- 練習source: `PASS`
- 練習PDF: `PASS / PRACTICE_PDF_COMPLETE`
- 練習PDF QA: `4 / 4 PASS`
- 解説画像PowerPoint: `PASS / POWERPOINT_COMPLETE`
- PowerPoint QA: `8 / 8 PASS`
- 完成後独立再解答: `25 / 25 PASS`

必須成果物の欠落: `0件`。

## 過去問対応品質ゲート

- R8 一次 理論 問4: `5 / 5 PASS`
- R7 一次 理論 問4: `5 / 5 PASS`
- R6 一次 理論 問6: `5 / 5 PASS`
- H24 一次 理論 問7: `5 / 5 PASS`
- H20 一次 理論 問6: `5 / 5 PASS`
- 固定一次5問・25答案要素: `25 / 25 PASS`
- R8/R7/R6/H24 公式標準解答直接一致: `20 / 20`
- H20二次資料掲載解答一致: `5 / 5`
- 完成教材内の固定範囲だけで再構成: `PASS`
- 教材外知識補完: `0件`

H20は現行の電気技術者試験センター公式アーカイブ外であり、公式標準解答を直接確認済みとは扱わず、電験王の問題転記・掲載解答による二次照合という出典境界を維持する。

## 二次試験の扱い

令和8年度二次試験は2026-09-19時点で未実施。系列08は一次理論中心であり、固定EXAM_ALIGNMENTで確認済みの既実施二次試験には、Topic 20固定範囲だけで完答できる直接対応記述問題を採用していない。

- 二次採用: `0問`
- 二次数合わせ: `0件`
- 二次採用方針変更: `0件`

## SPEC固定範囲

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

## 成果物QA

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

## East i出典境界

- JR東日本/JREメディア公開範囲の検査・検測項目を導入例に限定: `PASS`
- 2025-10-23 JR東日本資料のトロリ線摩耗・高さ・偏位、カメラ画像等の取得を使用: `PASS`
- E926内部測定回路の推測: `0件`
- 未公開ADC bit数・サンプリング周波数・センサ方式の実値化: `0件`

## 範囲・正本QA

- 必須成果物欠落: `0件`
- 主source / STATUS / HANDOFF の最終QA前進捗整合: `PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定範囲外追加: `0件`
- 二次数合わせ: `0件`
- East i未公開内部値の追加: `0件`
- 初回blocker解消: `1 / 1`

## 最終判定

`PASS / FINAL_QA_COMPLETE / IN_PROGRESS`

Topic 20は過去問対応品質ゲートと最終QAを通過した。`completed` への状態同期はまだ行わず、完成数は `19 / 21` のままとする。

次工程: Topic 20の `completed` 状態同期。
