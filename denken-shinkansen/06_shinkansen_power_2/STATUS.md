# STATUS

updated: 2026-09-14
series: `06_shinkansen_power_2`
active_topic: `03_thermal_power`
theme: 川崎発電所は新幹線の負荷変動に追従できる？
current_status: `topic_03_seal_oil_artifacts_synced_and_display_qa_complete`

## EXAM_ALIGNMENT

正式選定5問:
- R3 二種一次「電力」問5
- H29 二種二次「電力・管理」問1
- R1 二種二次「電力・管理」問1
- H27 二種一次「電力」問1
- H25 二種一次「電力」問1

制作前独立検証: `5 / 5 PASS`。
練習15問の独立QA: `15 / 15 PASS`（密封油補強前の基準結果）。
完成後独立再解答（密封油補強前）: `4 / 5 PASS`。R3一次「電力」問5(5)のみ、教材から `密封油ポンプ` を一意に導けずFAIL。

## 密封油ポンプ補強

既存固定範囲 `所内電力 / 発電機運用` の中間知識としてのみ補強し、仕様は追加していない。

- 主source `03_thermal_power.md`: 同期済み
- 練習source `03_thermal_power_practice.md`: 同期済み
- 解説PDF: 同期済み。A4縦4ページ、200 dpi全4ページ表示QA `PASS`
- 練習PDF: 同期済み。A4縦6ページ、200 dpi全6ページ表示QA `PASS`
- PowerPoint: 同期済み。16:9・4スライド、全4スライド表示QA `PASS`
- PowerPoint overflow検査: `PASS / No overflow detected`
- PowerPoint ZIP整合性: `PASS / No errors detected`
- 固定範囲外知識の追加: `0件`
- 未確認実設備値の追加: `0件`

正式5問の補強後独立再解答はまだ実施していないため、品質ゲート判定は前回の `4 / 5 PASS` のまま維持する。

## Gate checklist

- [x] 公式過去問5問を選定（二次記述2問を含む）
- [x] 制作前独立検証 `5 / 5 PASS`
- [x] 解説本文＋3段階例題
- [x] 練習15問＋完全解説
- [x] 練習独立QA `15 / 15 PASS`
- [x] 解説PDF
- [x] 練習PDF
- [x] 解説画像PowerPoint
- [x] 密封油ポンプsource補強
- [x] 密封油ポンプをPDF・PowerPointへ同期＋表示QA
- [ ] 補強後の正式5問完成後独立再解答 `5 / 5 PASS`
- [ ] 最終QA / completed

## next_start

正式選定5問を現行教材だけで完成後独立再解答する。R3一次「電力」問5(5)が教材だけから `密封油ポンプ` に一意に到達できることを確認する。`5 / 5 PASS` の場合のみ次段階で最終QAへ進む。固定範囲は変更しない。
