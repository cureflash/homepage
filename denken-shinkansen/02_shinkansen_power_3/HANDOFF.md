# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-14

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は5/16。Topic 01〜05は完成済み。active topicは06 `275,000Vをどうやって25,000Vにする？`。

## 今回進捗
Topic 06を1段階進め、練習PDF `topics/06_substation/06_substation_practice.pdf` を作成した。

A4縦3ページ・全12問、全問五肢択一。難易度は基礎3／標準7／複合2で、全問に完全解説を付けた。固定5過去問・SPEC固定範囲・除外境界は変更していない。

固定5過去問への練習問題接続:
- R7下 電力 問6（避雷器）→ 問8・12
- R6下 電力 問7（計器用変成器）→ 問3・5・11・12
- R4上 電力 問7（過電流継電器）→ 問9・10
- R3 電力 問8（断路器）→ 問6・12
- R2 電力 問7（真空遮断器）→ 問7

200 dpiで全3ページをレンダリングし、文字切れ・数式欠落・表や選択肢のはみ出し・欠落文字なしを確認して表示QA PASS。文字抽出QAもPASS。

数値問題は別計算で再確認した。
- 問1: 一次巻数 `8,800回`
- 問4: 二次電流 `440 A`
- 問5: CT二次電流 `3.5 A`
- 問11: CT二次電流 `2.75 A`

独立再計算 `4 / 4 PASS`。

## 現在状態
- `current_status`: `topic_06_practice_pdf_complete`
- 完成数: `5/16`
- last completed: Topic 05
- active: Topic 06 `275,000Vをどうやって25,000Vにする？`

## Topic 06 固定5過去問
1. R7下 電力 問6 — 避雷器 — `(1)` PASS
2. R6下 電力 問7 — 計器用変成器 — `(4)` PASS
3. R4上 電力 問7 — 過電流継電器の限時特性 — `(1)` PASS
4. R3 電力 問8 — 断路器 — `(4)` PASS
5. R2 電力 問7 — 真空遮断器 — `(5)` PASS

制作前独立検証 `5/5 PASS`。

EXAM_ALIGNMENT / 解説source:
- `topics/06_substation/06_substation.md`

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
`topics/06_substation/06_substation.md` を正本sourceとして解説画像PowerPoint `topics/06_substation/06_substation_images.pptx` を作成する。固定5過去問の要求事項を可視化し、SPEC境界を変更しない。完成後は全スライド表示QA・境界外はみ出し検査を行う。