# STATUS - 新幹線・電験二種「電力」

更新日: 2026-09-14

## 状態
- active_series: `06_shinkansen_power_2`
- exam_aligned_completed_topics: `2 / 22`
- last_completed_topic: `02 信濃川の水で新幹線を何本走らせられる？`
- active_topic: `03 川崎発電所は新幹線の負荷変動に追従できる？`
- current_status: `topic_03_seal_oil_sources_synced`
- next_start: R3一次「電力」問5(5)の密封油ポンプ補強を解説PDF・練習PDF・PowerPointへ必要最小限で同期し、全ページ・全スライドの表示QAとoverflow/ZIP整合性を再確認する

## Topic 03 品質ゲート
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC確認
- [x] Topic 03固定範囲を確認し、範囲追加なし
- [x] 二種一次3問＋二次2問、計5問を正式選定
- [x] 二次論説記述2問を含む
- [x] 直近年度から候補を確認し、固定範囲外問題を除外
- [x] e-sysnetを含む複数系統の参考教材を確認
- [x] 制作前EXAM_ALIGNMENT作成
- [x] 過去問要求事項から本文節マッピング作成
- [x] 制作前独立検証・公式解答照合 `5 / 5 PASS`
- [x] 解説本文8節＋3段階例題
- [x] 練習問題＋完全解説
- [x] 練習問題独立QA `15 / 15 PASS`（密封油補強前の既存版）
- [x] 解説PDF
- [x] 練習PDF
- [x] 解説画像PowerPoint
- [x] 完成後独立再解答を実施 `4 / 5 PASS`
- [x] R3一次問5(5)の不足原因を特定し、補強sourceを作成
- [x] 密封油ポンプ補強を主source・練習sourceへ同期
- [ ] 密封油ポンプ補強を解説PDF・練習PDF・PowerPointへ同期し表示QA
- [ ] 完成後独立再解答 `5 / 5 PASS`
- [ ] 最終QA PASS

正式対象:
- R3 一次 電力 問5
- H29 二次 電力・管理 問1
- R1 二次 電力・管理 問1
- H27 一次 電力 問1
- H25 一次 電力 問1

## 今回のsource同期段階
記録:
- `topics/03_thermal_power/03_thermal_power_seal_oil_revision.md`

同期結果:
- 主source `03_thermal_power.md` の「4. 所内電力と重要補機」に密封油ポンプを追加
- 水素冷却発電機の軸封部へ密封油を供給して水素漏えいを防ぐ役割を明記
- 主機停止後も発電機内部に水素が残る間は軸封維持が必要で、通常交流電源喪失時も非常用電源から継続給電する因果を明記
- 練習source `03_thermal_power_practice.md` の問14へ `(3) 密封油ポンプ` を追加し、完全解説にも同じ因果を追加
- 問題数15問、難易度配分、正式選定5問は変更なし
- 固定範囲外知識の追加: `0件`

この段階ではPDF/PPTXは未同期。したがって完成後独立再解答は再実施せず、前回判定 `4 / 5 PASS` を維持する。

## R3一次問5(5) 補強根拠
- 公式解答は `(1)〜(5) = [ヌ, ホ, ワ, リ, ヲ]`
- (5) の `ヲ` は `密封油ポンプ`
- 水素冷却発電機では軸封部へ密封油を供給し、水素漏えいを防ぐ
- 通常交流電源喪失後も水素が残る間は軸封維持が必要なため、密封油ポンプは非常用電源による継続給電対象となる
- JICA Technical Guidelines および JICA / 九州電力の発電設備技術資料で役割と非常用ポンプ構成を確認
- これは既存固定範囲 `所内電力 / 発電機運用` の中間知識補強であり、新規仕様論点ではない

## 完成後独立再解答（前回）
- 記録: `topics/03_thermal_power/03_thermal_power_independent_reanswer.md`
- H29二次 問1: PASS
- R1二次 問1: PASS
- H27一次 問1: PASS
- H25一次 問1: PASS
- R3一次 問5: FAIL
  - (1)〜(4)は教材のみで `[ヌ, ホ, ワ, リ]` まで再構成可能
  - (5)は教材だけでは一意に確定不可
  - 公式解答確認後、(5)は `ヲ = 密封油ポンプ`
  - 改訂前教材には水素冷却発電機の軸封部へ密封油を供給し、水素漏えいを防ぐため停止後も継続運転する説明が不足
- 完全PASS: `4 / 5`
- 教材外知識補完: `0件`
- 固定範囲外知識の追加: `0件`

## 既存成果物
解説source:
- `topics/03_thermal_power/03_thermal_power.md`
- 本文8節＋3段階例題
- 密封油ポンプ補強source同期済み

練習source:
- `topics/03_thermal_power/03_thermal_power_practice.md`
- 全15問、基礎4 / 本試験標準8 / 複合・応用3
- 一次型10問＋二次記述型5問
- 問14へ密封油ポンプ補強を同期済み

解説PDF:
- `topics/03_thermal_power/03_thermal_power_explanation.pdf`
- A4縦4ページ
- 既存版200 dpi全ページ表示QA PASS
- 密封油ポンプ補強は未同期

練習PDF:
- `topics/03_thermal_power/03_thermal_power_practice.pdf`
- A4縦6ページ
- 既存版200 dpi全ページ表示QA PASS
- 密封油ポンプ補強は未同期

PowerPoint:
- `topics/03_thermal_power/03_thermal_power_images.pptx`
- 16:9・4スライド
- 既存版全スライド表示QA・overflow・ZIP整合性 PASS
- 密封油ポンプ補強は未同期

川崎発電所の実値は一次資料確認済みの総出力 `809 MW`、2024年度発電効率 `43.1%`、発電機4台、都市ガス・天然ガス、2021年6月新1号機運転開始のみ使用。未確認の個別負荷率―効率曲線、新幹線1本当たり電力、実設備ランプレートは使用していない。

## Topic 02
`PASS / completed`。一次4問＋二次2問の独立再解答 `6 / 6 PASS`、練習QA `15 / 15 PASS`、教材外知識補完 `0件`。

## Topic 01
`completed`。最終QA PASS、完成後独立再解答 `5 / 5 PASS`、教材外知識補完 `0件`。

## 次
密封油ポンプ補強を解説PDF・練習PDF・PowerPointへ同期し、表示QAを再実施する。同期と表示QAが完了するまで独立再解答の再判定・最終QAへ進めない。