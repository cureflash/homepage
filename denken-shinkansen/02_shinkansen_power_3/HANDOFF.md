# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-15

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は6/16。Topic 01〜06は完成済み。active topicは07 `なぜ三相交流をそのまま架線へ流さない？`。

## 今回進捗
Topic 07の改定品質ゲート3問について、保存済み正答・再監査記録・初回独立再解答記録・公式解答を先に見ず、公式問題文と完成教材だけで解法・解答を確定した後に公式解答と照合した。

結果:
1. R4上 機械 問9 — 独立 `(3)` / 公式 `(3)` / PASS
2. H30 電力 問8 — 独立 `(3)` / 公式 `(3)` / PASS
3. H22 理論 問9 — 独立 `(4)` / 公式 `(4)` / PASS

公式解答一致 `3 / 3 PASS`、教材のみ完結 `3 / 3 PASS`、教材外知識補完0件、SPEC固定範囲外追加0件。

H30電力問8では、完成済みTopic 06の変圧比 `V1/V2=N1/N2` から一次線間電圧を `200×6600/210=6285.7 V` とし、Topic 07の `P=√3 V_L I_L cosφ` で `約174.2 kW` を得た。H22理論問9では、平衡Y結線の `P=3V_phaseI_phase` と比較し、`P=√3V_phaseI_phase` とする選択肢(4)を誤りと判定した。

改定独立再解答記録:
`topics/07_phase_conversion/07_phase_conversion_independent_reanswer_revised.md`

改定再解答結果は主source `topics/07_phase_conversion/07_phase_conversion.md` のEXAM_ALIGNMENT・状態欄・成果物QA・次工程へ同期済み。

## 現在状態
- `current_status`: `topic_07_independent_reanswer_complete`
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
- 初回独立再解答: `topics/07_phase_conversion/07_phase_conversion_independent_reanswer.md`
- 改定独立再解答: `topics/07_phase_conversion/07_phase_conversion_independent_reanswer_revised.md`

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

## 既存成果物QA
- 解説PDF: A4縦4ページ、200 dpi全4ページ表示QA・文字抽出QA PASS
- 練習PDF: A4縦3ページ・全12問・全問五肢択一、数値問題独立再計算 `8 / 8 PASS`、表示QA・文字抽出QA・正答一意性PASS
- 解説画像PowerPoint: 16:9・4枚、全4枚表示QA、境界外はみ出し0件、PPTX ZIP整合性PASS
- 改定独立再解答: `3 / 3 PASS`、教材外知識補完0件
- SPEC固定範囲外追加: 0件

## 次の正確な開始点
Topic 07最終QAを実施し、必須成果物、改定EXAM_ALIGNMENT、独立再解答 `3 / 3 PASS`、既存表示QA、SPEC境界、source・STATUS・HANDOFFの進捗整合を確認する。固定範囲は拡張しない。
