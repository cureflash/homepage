# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-14

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は5/16。Topic 01〜05は完成済み。active topicは06 `275,000Vをどうやって25,000Vにする？`。

## 今回進捗
Topic 06を1段階進め、完成済み解説本文＋3段階例題から解説PDF `topics/06_substation/06_substation_explanation.pdf` を作成した。

PDFはA4縦4ページ。200 dpiで全4ページをレンダリングし、文字切れ・数式欠落・表や図のはみ出し・欠落文字がないことを確認した。文字抽出QAもPASS。固定5過去問・SPEC固定範囲・除外境界は変更していない。

主な収録事項:
- 変電所の受電・変圧・開閉・計測・保護の役割分担
- 変圧器の巻数比・電圧比、理想変圧器の電流比
- 母線の共通接続・分岐機能
- 遮断器と断路器の役割差、操作順、インターロック
- 真空遮断器の高真空消弧、小形軽量、多頻度動作、開閉サージ、騒音特性
- VT/CTの接続と禁止操作、CT二次開放時の高電圧・鉄損増大
- ZnO避雷器の非線形抵抗、続流抑制、ギャップレス
- 過電流継電器の反限時・反限時定限時・定限時・瞬時の識別
- 受電側275kV例と交流25kVき電側の区別
- 3段階例題と固定5過去問への教材内マッピング

## 現在状態
- `current_status`: `topic_06_explanation_pdf_complete`
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
- 未確認の個別新幹線変電所受電電圧・変圧器容量・遮断器定格等を実値化しない

## 次の正確な開始点
`topics/06_substation/06_substation.md` を正本sourceとして練習PDFを作成する。MASTER_SPECに従い原則12問以上、少なくとも半数は五肢択一、全問に完全解説を付ける。PDF化後は全ページをレンダリングして表示QAし、数値問題は別計算で独立再計算する。固定5過去問・SPEC境界は変更しない。