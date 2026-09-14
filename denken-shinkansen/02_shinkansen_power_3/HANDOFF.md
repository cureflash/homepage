# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-15

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は6/16。Topic 01〜06は完成済み。active topicは07 `なぜ三相交流をそのまま架線へ流さない？`。

## 今回進捗
Topic 06の最終QAを実施し、必須成果物、固定5過去問の教材内マッピング、複数系統の参考教材、完成後独立再解答 `5 / 5 PASS`、表示QA、source進捗整合、SPEC境界を確認した。全件PASSのためTopic 06を `completed` とした。

教材本文・固定5過去問・SPEC固定範囲・除外境界は変更していない。最終QA記録は `topics/06_substation/06_substation_final_qa.md`。

## 現在状態
- `current_status`: `topic_06_completed`
- 完成数: `6/16`
- last completed: Topic 06 `275,000Vをどうやって25,000Vにする？`
- active: Topic 07 `なぜ三相交流をそのまま架線へ流さない？`

## Topic 06 完了記録
固定5過去問:
1. R7下 電力 問6 — 避雷器 — `(1)` PASS
2. R6下 電力 問7 — 計器用変成器 — `(4)` PASS
3. R4上 電力 問7 — 過電流継電器の限時特性 — `(1)` PASS
4. R3 電力 問8 — 断路器 — `(4)` PASS
5. R2 電力 問7 — 真空遮断器 — `(5)` PASS

制作前独立検証 `5/5 PASS`。完成後独立再解答も `5/5 PASS`。

EXAM_ALIGNMENT / 解説source:
- `topics/06_substation/06_substation.md`
- 完成後独立再解答結果を同期済み
- 固定5過去問の要求事項を本文へ全件マッピング済み

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

最終QA:
- `topics/06_substation/06_substation_final_qa.md`
- 必須成果物実在 PASS
- EXAM_ALIGNMENT PASS
- 表示QA PASS
- source進捗整合 PASS
- SPEC境界 PASS
- 最終判定 `PASS / completed`

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
Topic 07「なぜ三相交流をそのまま架線へ流さない？」の制作前EXAM_ALIGNMENTを実施する。`SPEC.md` のTopic 07固定範囲だけを対象に、直近年度優先で関連する公式過去問を原則5問以上調査し、固定候補を独立検証してからsourceへEXAM_ALIGNMENTを作る。件数合わせでTopic 08以降や二種相当の厳密導出を追加しない。