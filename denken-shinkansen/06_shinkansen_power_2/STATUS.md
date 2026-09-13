# STATUS - 新幹線・電験二種「電力」

更新日: 2026-09-13

## 状態
- active_series: `06_shinkansen_power_2`
- exam_aligned_completed_topics: `2 / 22`
- last_completed_topic: `02 信濃川の水で新幹線を何本走らせられる？`
- active_topic: `03 川崎発電所は新幹線の負荷変動に追従できる？`
- current_status: `topic_03_independent_reanswer_needs_revision`
- next_start: R3一次「電力」問5の(5)を教材だけで解けるよう、固定範囲内の所内電力／発電機運用に水素密封油ポンプの役割と停電時継続理由を補強し、必要成果物を同期した後に独立再解答を再実施する

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
- [x] 練習問題独立QA `15 / 15 PASS`
- [x] 解説PDF
- [x] 練習PDF
- [x] 解説画像PowerPoint
- [x] 完成後独立再解答を実施 `4 / 5 PASS`
- [ ] 完成後独立再解答 `5 / 5 PASS`
- [ ] 最終QA PASS

正式対象:
- R3 一次 電力 問5
- H29 二次 電力・管理 問1
- R1 二次 電力・管理 問1
- H27 一次 電力 問1
- H25 一次 電力 問1

完成後独立再解答:
- 記録: `topics/03_thermal_power/03_thermal_power_independent_reanswer.md`
- H29二次 問1: PASS
- R1二次 問1: PASS
- H27一次 問1: PASS
- H25一次 問1: PASS
- R3一次 問5: FAIL
  - (1)〜(4)は教材のみで `[ヌ, ホ, ワ, リ]` まで再構成可能
  - (5)は教材だけでは一意に確定不可
  - 公式解答確認後、(5)は `ヲ = 密封油ポンプ`
  - 現行教材に水素冷却発電機の軸封部へ密封油を供給し、水素漏えい防止のため停止後も継続運転する説明がない
  - 教材外知識で補完せずFAIL扱い
- 完全PASS: `4 / 5`
- 教材外知識補完: `0件`
- 固定範囲外知識の追加: `0件`

解説PDF段階:
- `topics/03_thermal_power/03_thermal_power_explanation.pdf`
- A4縦4ページ
- 本文8節・3段階例題・EXAM_ALIGNMENT・正式選定5問の要求事項を同期
- 200 dpiで全4ページをレンダリングし、文字切れ・重なり・表崩れ・数式・単位・出典表示を確認してPASS
- 川崎発電所の実値は一次資料確認済みの総出力 `809 MW`、2024年度発電効率 `43.1%`、発電機4台、都市ガス・天然ガス、2021年6月新1号機運転開始のみ使用
- 未確認の個別負荷率―効率曲線、新幹線1本当たり電力、実設備ランプレートは使用していない
- 固定範囲外知識の追加 `0件`

練習問題段階:
- 全15問
- 基礎4 / 本試験標準8 / 複合・応用3
- 一次型五肢択一10問
- 二次「電力・管理」型記述5問
- 正式選定5問の要求事項を全件マッピング
- 計算問題は使用式・選定理由・代入・単位・中間値・最終値・検算まで記載
- 論説記述は大気温度影響、重要補機継続理由、負荷追従を答案化
- 独立QAは保存済み解答を見ずに全15問を再計算・再判定し、一次10問の一意解と二次5問の採点可能性を確認
- 独立QA `15 / 15 PASS`
- 教材外知識補完 `0件`
- 未確認の川崎発電所個別負荷率―効率曲線、新幹線1本当たり電力、実設備ランプレートは使用していない
- 固定範囲外知識の追加 `0件`

練習PDF段階:
- `topics/03_thermal_power/03_thermal_power_practice.pdf`
- A4縦6ページ
- `03_thermal_power_practice.md` の全15問・完全解説を同期
- 一次型10問＋二次記述型5問、基礎4 / 本試験標準8 / 複合・応用3を維持
- 練習問題独立QA `15 / 15 PASS` と正答・途中式・単位・記述答案を同期
- 200 dpiで全6ページをレンダリングし、文字切れ・重なり・表崩れ・数式・単位を確認してPASS
- 教材外知識補完 `0件`
- 未確認実設備値の追加 `0件`
- 固定範囲外知識の追加 `0件`

PowerPoint段階:
- `topics/03_thermal_power/03_thermal_power_images.pptx`
- 16:9・4スライド
- 本文8節・3段階例題・正式選定5問の要求事項を、固定範囲内で図式化
- コンバインドサイクル構成、発電端/送電端熱収支、蒸気タービン運用と重要補機、大気温度影響と負荷追従、川崎発電所実値と仮定例題を収録
- 川崎発電所の実値は `809 MW`、発電機4台、都市ガス・天然ガス、2024年度発電効率 `43.1%` のみ使用
- 夏季 `720 MW`、所内率 `4.0%`、負荷 `670+35 MW` は教材本文どおり仮定値として明示
- 全4スライドをレンダリングし、文字切れ・重なり・可読性を確認してPASS
- slide overflow検査 PASS
- PPTX ZIP整合性 PASS
- 教材外知識補完 `0件`
- 未確認実設備値の追加 `0件`
- 固定範囲外知識の追加 `0件`

記録:
- `topics/03_thermal_power/03_thermal_power.md`
- `topics/03_thermal_power/03_thermal_power_preproduction_verification.md`
- `topics/03_thermal_power/03_thermal_power_practice.md`
- `topics/03_thermal_power/03_thermal_power_practice_qa.md`
- `topics/03_thermal_power/03_thermal_power_explanation.pdf`
- `topics/03_thermal_power/03_thermal_power_practice.pdf`
- `topics/03_thermal_power/03_thermal_power_images.pptx`
- `topics/03_thermal_power/03_thermal_power_powerpoint_qa.md`
- `topics/03_thermal_power/03_thermal_power_independent_reanswer.md`

## Topic 02 品質ゲート
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC確認
- [x] 一次4問＋二次2問、計6問を正式選定
- [x] 二次論説記述1問＋二次記述計算1問を含む
- [x] 参考教材を複数系統確認
- [x] 制作前EXAM_ALIGNMENT
- [x] 制作前独立検証・公式解答照合 `6 / 6 PASS`
- [x] 解説本文9節＋3段階例題
- [x] 練習15問・完全解説
  - 一次型10問
  - 二次記述型5問
- [x] 練習問題独立再計算・一意解QA `15 / 15 PASS`
- [x] 解説PDF
- [x] 練習PDF
- [x] 解説画像PowerPoint
- [x] 完成後独立再解答 `6 / 6 PASS`
- [x] 教材外知識補完 `0件`
- [x] 最終QA実施
- [x] 最終QA PASS

## Topic 02 最終QA
記録:
- `topics/02_hydropower/02_hydropower_final_qa.md`

判定:
- `PASS / completed`

## Topic 01
`completed`。最終QA PASS、完成後独立再解答 `5 / 5 PASS`、教材外知識補完 `0件`。

## 次
R3一次「電力」問5の不足論点を、Topic 03固定範囲内で教材へ補強して成果物を同期する。補強後、正式選定5問の完成後独立再解答を再実施する。