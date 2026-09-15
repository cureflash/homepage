# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-15

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は6/16。Topic 01〜06は完成済み。active topicは07 `なぜ三相交流をそのまま架線へ流さない？`。

## 今回進捗
Topic 07の前回最終QAで検出した残件を1段階進め、`07_phase_conversion_practice_qa.md` の過去問対応記録を旧5問から改定3問へ同期した。

- R4上 機械 問9: 練習問6・7・8
- H30 電力 問8: 練習問3・4・11（変圧比はTopic 06既習）
- H22 理論 問9: 練習問1・3・5でY結線・線間/相・三相電力を練習。中性線電流0は解説本文と改定完成後独立再解答で確認済み
- 練習PDF本文・問題数・正答: 変更なし
- SPEC固定範囲外追加: 0件

再監査で除外したR7下理論問15、R5下理論問15、H27機械問7は現行品質ゲートとして扱わない。

## 現行品質ゲート
- R4上 機械 問9 — スコット結線、二次90°
- H30 電力 問8 — 変圧比、平衡三相有効電力
- H22 理論 問9 — Y結線、線間/相関係、三相電力、中性線電流

改定完成後独立再解答は `(3),(3),(4)`、公式解答と `3 / 3 PASS`。教材のみ完結 `3 / 3 PASS`、教材外知識補完0件。

## 残件
1. `07_phase_conversion_images.pptx` Slide 4を旧5問対応表から改定3問へ同期する。
2. `07_phase_conversion_powerpoint_qa.md` を改定3問へ同期する。
3. 更新後PowerPointを再レンダリングし、はみ出し・ZIP整合性を再QAする。
4. PowerPoint QA末尾の次工程を現在地へ同期する。

旧固定対象を通すためにRLC、力率とインピーダンス分解、Δ-Y/Y-Δ位相差30°を教材へ追加してはならない。

## 現在状態
- `current_status`: `topic_07_practice_qa_exam_alignment_synced`
- 完成数: `6/16`
- last completed: Topic 06 `275,000Vをどうやって25,000Vにする？`
- active: Topic 07 `なぜ三相交流をそのまま架線へ流さない？`
- source: `topics/07_phase_conversion/07_phase_conversion.md`
- EXAM_ALIGNMENT再監査: `topics/07_phase_conversion/07_phase_conversion_exam_alignment_reaudit.md`
- 解説PDF: `topics/07_phase_conversion/07_phase_conversion_explanation.pdf`
- 練習PDF: `topics/07_phase_conversion/07_phase_conversion_practice.pdf`
- 練習PDF QA: `topics/07_phase_conversion/07_phase_conversion_practice_qa.md`
- 解説画像PowerPoint: `topics/07_phase_conversion/07_phase_conversion_images.pptx`
- PowerPoint QA: `topics/07_phase_conversion/07_phase_conversion_powerpoint_qa.md`
- 改定独立再解答: `topics/07_phase_conversion/07_phase_conversion_independent_reanswer_revised.md`
- 前回最終QA: `topics/07_phase_conversion/07_phase_conversion_final_qa.md`

## Topic 07 SPEC固定範囲
- 三相交流
- 単相交流
- 線間電圧
- 相電圧
- 三相電力
- き電用変圧器
- 相変換
- 三相側の負荷平衡
- スコット結線
- 変形ウッドブリッジ結線
- ルーフ・デルタ結線

境界:
- 二種相当の厳密ベクトル導出を追加しない
- Topic 08以降の電圧降下・線路損失・き電回路詳細へ広げない
- Topic 10の力率改善へ広げない
- Topic 11の短絡・保護へ広げない
- 変形ウッドブリッジ結線・ルーフ・デルタ結線は概略に留める
- 未確認の個別新幹線変電所の結線・定格・配置を実値化しない

## 次の正確な開始点
PowerPoint Slide 4とPowerPoint QAを改定3問へ同期し、PowerPoint表示QAを再実施する。問題数・教材範囲を追加しない。同期後、Topic 07最終QAを再判定する。
