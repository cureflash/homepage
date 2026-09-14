# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-15

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は5/16。Topic 01〜05は完成済み。active topicは06 `275,000Vをどうやって25,000Vにする？`。

## 今回進捗
Topic 06を1段階進め、解説画像PowerPoint `topics/06_substation/06_substation_images.pptx` を作成した。

16:9・4枚。固定5過去問の要求事項を、変電所全体構成、遮断器/断路器/VCB、VT/CT、ZnO避雷器、保護リレーと過電流継電器、過去問対応表として可視化した。固定5過去問・SPEC固定範囲・除外境界は変更していない。

表示QA:
- 全4枚を1601×900でレンダリングし目視確認
- 文字欠け 0、クリップ 0、意図しない重なり 0
- `slides_test.py` 境界外はみ出し 0件 PASS
- `unzip -t` PPTX ZIP整合性 PASS
- SHA-256 `56121bee8ad2408569cb703a4b7f4447875733489632b5c681ba5ddf475acab6`

PowerPoint QA: `topics/06_substation/06_substation_powerpoint_qa.md`

## 現在状態
- `current_status`: `topic_06_powerpoint_complete`
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

解説画像PowerPoint:
- `topics/06_substation/06_substation_images.pptx`
- 16:9・4枚
- 全4枚表示QA PASS
- 境界外はみ出し検査 PASS
- PPTX ZIP整合性 PASS

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
完成済みの `06_substation.md`・解説PDF・練習PDF・PowerPointだけを使い、固定5過去問を保存済み正答を見ずに独立再解答する。外部知識補完が必要な場合はFAILとして不足箇所を特定する。
