# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-15

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は5/16。Topic 01〜05は完成済み。active topicは06 `275,000Vをどうやって25,000Vにする？`。

## 今回進捗
Topic 06を1段階進め、完成後独立再解答 `5 / 5 PASS` を `topics/06_substation/06_substation.md` の状態・EXAM_ALIGNMENT・次工程へ同期した。

教材本文・固定5過去問・SPEC固定範囲・除外境界は変更していない。sourceには公式解答一致 `5 / 5`、教材のみ完結 `5 / 5`、教材外知識補完 `0件`、固定範囲外追加 `0件` を反映済み。

## 現在状態
- `current_status`: `topic_06_source_reanswer_synced`
- 完成数: `5/16`
- last completed: Topic 05
- active: Topic 06 `275,000Vをどうやって25,000Vにする？`

## Topic 06 固定5過去問
1. R7下 電力 問6 — 避雷器 — `(1)` PASS
2. R6下 電力 問7 — 計器用変成器 — `(4)` PASS
3. R4上 電力 問7 — 過電流継電器の限時特性 — `(1)` PASS
4. R3 電力 問8 — 断路器 — `(4)` PASS
5. R2 電力 問7 — 真空遮断器 — `(5)` PASS

制作前独立検証 `5/5 PASS`。完成後独立再解答も `5/5 PASS`。

EXAM_ALIGNMENT / 解説source:
- `topics/06_substation/06_substation.md`
- 完成後独立再解答結果を同期済み

解説PDF:
- `topics/06_substation/06_substation_explanation.pdf`
- A4縦4ページ
- 200 dpi全ページ表示QA PASS
- 文字抽出QA PASS

練習PDF:
- `topics/06_substation/06_substation_practice.pdf`
- A4縦3ページ、12問（基礎3／標準7／複合2）、全問五肢択一＋完全解説
- 200 dpi全ページ表示QA PASS
- 文字抽出QA PASS
- 数値問題独立再計算 `4/4 PASS`

解説画像PowerPoint:
- `topics/06_substation/06_substation_images.pptx`
- 16:9・4枚
- 全4枚表示QA PASS
- 境界外はみ出し検査 PASS
- PPTX ZIP整合性 PASS

完成後独立再解答:
- `topics/06_substation/06_substation_independent_reanswer.md`
- 公式解答一致 `5/5 PASS`
- 教材のみ完結 `5/5`
- 教材外知識補完 `0件`
- 固定範囲外追加 `0件`

## Topic 06 SPEC固定範囲
- 変電所
- 変圧器
- 母線
- 遮断器
- 断路器
- 計器用変成器
- 避雷器
- 保護リレー
- 受電電圧
- き電電圧

基本構成は `電力系統 → 特別高圧受電 → 新幹線変電所 → き電用変圧器 → 交流25kV`。

境界:
- 三相→単相変換方式はTopic 07
- 電圧降下・線路損失はTopic 08以降
- 詳細な短絡・遮断計算はTopic 11
- GIS・調相設備・%インピーダンス計算・配電線詳細保護は追加しない
- 未確認の個別新幹線変電所受電電圧・変圧器容量・遮断器定格等を実値化しない

## 次の正確な開始点
Topic 06の最終QAを実施する。必須成果物、固定5過去問の教材内マッピング、完成後独立再解答 `5 / 5 PASS`、表示QA、source進捗整合、SPEC境界を確認し、全件PASSの場合のみ `completed` とする。