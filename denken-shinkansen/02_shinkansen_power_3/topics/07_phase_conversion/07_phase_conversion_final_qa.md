# Topic 07 最終QA記録

対象: `07 なぜ三相交流をそのまま架線へ流さない？`
実施日: 2026-09-15

## 判定
`PASS / completed`。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`02_shinkansen_power_3/SPEC.md` とGitHub正本の現状を再照合した。仕様追加は行っていない。

## 必須成果物
GitHub正本上で以下の実在を確認した。

- source Markdown: `07_phase_conversion.md`
- 解説PDF: `07_phase_conversion_explanation.pdf`
- 練習PDF: `07_phase_conversion_practice.pdf`
- 解説画像PowerPoint: `07_phase_conversion_images.pptx`
- EXAM_ALIGNMENT再監査: `07_phase_conversion_exam_alignment_reaudit.md`
- 練習PDF QA: `07_phase_conversion_practice_qa.md`
- PowerPoint QA: `07_phase_conversion_powerpoint_qa.md`
- 改定完成後独立再解答: `07_phase_conversion_independent_reanswer_revised.md`

必須成果物の実在: PASS。

## 現行EXAM_ALIGNMENT
初回固定5問・8小問は完成後独立再解答で教材のみ完結 `2 / 8` となったため再監査済み。

現行SPEC固定範囲へ直接対応し、完成教材だけで完答できることを確認した次の3問を品質ゲートとする。

- R4上 機械 問9 — スコット結線、二次90°
- H30 電力 問8 — 変圧比、平衡三相有効電力
- H22 理論 問9 — Y結線、線間/相関係、三相電力、中性線電流

`MASTER_SPEC.md` の「該当問題が5問未満しか確認できない場合は確認できた全件を対象」を適用する。

再監査で除外したR7下理論問15、R5下理論問15、H27機械問7を通すために、RLC、力率とインピーダンス分解、Δ-Y/Y-Δ位相差30°を教材へ追加していない。

## 完成後独立再解答
改定3問を保存済み正答を先に見ず、公式問題文と完成教材だけで再解答した後に公式解答と照合した。

- R4上 機械 問9: `(3)` / 公式 `(3)` / PASS
- H30 電力 問8: `(3)` / 公式 `(3)` / PASS
- H22 理論 問9: `(4)` / 公式 `(4)` / PASS

集計:
- 公式解答一致: `3 / 3 PASS`
- 教材のみ完結: `3 / 3 PASS`
- 教材外知識補完: `0件`
- SPEC固定範囲外追加: `0件`

過去問対応品質ゲート: PASS。

## 成果物QA
- 解説PDF: A4縦4ページ、200 dpi全4ページ表示QA PASS、文字抽出QA PASS。
- 練習PDF: A4縦3ページ、12問五肢択一、200 dpi全3ページ表示QA PASS、文字抽出QA PASS、正答一意性PASS、数値問題独立再計算 `8 / 8 PASS`。
- PowerPoint: 16:9・4枚。改定3問へ同期済み。1601×900再レンダリング `4 / 4 PASS`、文字欠け0、クリップ0、意図しない重なり0、境界外はみ出し0、ZIP整合性PASS。
- 練習PDF QA・PowerPoint QAは旧5問表記を除去し、現行3問へ同期済み。

表示・ファイルQA: PASS。

## SPEC境界
維持した範囲:
- 三相交流・単相交流
- 線間電圧・相電圧
- 三相電力
- き電用変圧器・相変換
- 三相側負荷平衡
- スコット結線
- 変形ウッドブリッジ結線
- ルーフ・デルタ結線

追加していない範囲:
- 二種相当の厳密ベクトル導出
- RLCの無効電流相殺
- 力率からのインピーダンス分解
- Δ-Y/Y-Δの一次・二次30°位相差
- Topic 08以降の電圧降下・線路損失・き電回路詳細
- Topic 10の力率改善
- Topic 11の短絡・保護
- 未確認の個別新幹線変電所の結線・定格・配置

SPEC境界: PASS。

## 最終判定
- 必須成果物: PASS
- 現行EXAM_ALIGNMENT: PASS
- 完成後独立再解答: `3 / 3 PASS`
- 教材外知識補完: `0件`
- PDF/PPTX QA: PASS
- 進捗記録整合: PASS
- SPEC境界: PASS

よってTopic 07を `completed` とする。完成数は `7 / 16`。次はTopic 08 `新幹線の変電所はなぜ数十kmおき？` の制作前EXAM_ALIGNMENTから開始する。
