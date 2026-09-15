# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-15

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は6/16。Topic 01〜06は完成済み。active topicは07 `なぜ三相交流をそのまま架線へ流さない？`。

## 今回進捗
Topic 07の改定EXAM_ALIGNMENTを主source `topics/07_phase_conversion/07_phase_conversion.md` へ同期した。

初回完成後独立再解答は公式解答と `8 / 8` 一致したが、教材のみ完結は `2 / 8`。R7下理論問15、R5下理論問15、H27機械問7では、RLC、力率とインピーダンス分解、Δ-Y/Y-Δ位相差30°というTopic 07固定範囲外知識が必要だったため `NEEDS_REVISION` とした。

EXAM_ALIGNMENT再監査では、固定範囲を拡張せず、完成教材だけで完答できる公式過去問を次の3問へ見直した。

1. R4上 機械 問9 — スコット結線・二次90° — `(3)`
2. H30 電力 問8 — 変圧比・三相電力 — `(3)`
3. H22 理論 問9 — Y結線・線間/相関係・三相電力・中性線電流 — `(4)`

現行SPEC固定範囲へ直接対応する公式過去問が3問しか確認できないため、`MASTER_SPEC.md` の「該当問題が5問未満しか確認できない場合は確認できた全件を対象」とする例外を適用する。

主sourceでは、改定3問を現行品質ゲートとして固定し、旧5問・8小問は再監査で除外した問題として履歴化した。H22理論問9に必要なY結線の `I_L=I_phase`、平衡時の中性線電流0、三相電力の対応も既存固定範囲内で明示した。

SPEC固定範囲変更0件、固定範囲外教材追加0件。既存の解説PDF・練習PDF・PowerPointは改定3問の要求事項を包含するため、この段階では変更していない。

## 現在状態
- `current_status`: `topic_07_source_exam_alignment_synced`
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
- SPEC固定範囲外追加: 0件

## 次の正確な開始点
改定品質ゲート3問（R4上機械問9、H30電力問8、H22理論問9）を完成教材だけで改めて独立再解答する。保存済み正答・公式解答との照合は解答後に行う。固定範囲は拡張しない。
