# STATUS - 新幹線・電験二種「電力」

更新日: 2026-09-13

## 状態
- active_series: `06_shinkansen_power_2`
- exam_aligned_completed_topics: `2 / 22`
- last_completed_topic: `02 信濃川の水で新幹線を何本走らせられる？`
- active_topic: `03 川崎発電所は新幹線の負荷変動に追従できる？`
- current_status: `topic_03_practice_pdf_complete`
- next_start: Topic 03 の解説画像PowerPointを作成し、本文8節・3段階例題・正式選定5問の要求事項を固定範囲内で可視化する

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
- [ ] 解説画像PowerPoint
- [ ] 完成後独立再解答
- [ ] 最終QA PASS

正式対象:
- R3 一次 電力 問5
- H29 二次 電力・管理 問1
- R1 二次 電力・管理 問1
- H27 一次 電力 問1
- H25 一次 電力 問1

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

記録:
- `topics/03_thermal_power/03_thermal_power.md`
- `topics/03_thermal_power/03_thermal_power_preproduction_verification.md`
- `topics/03_thermal_power/03_thermal_power_practice.md`
- `topics/03_thermal_power/03_thermal_power_practice_qa.md`
- `topics/03_thermal_power/03_thermal_power_explanation.pdf`
- `topics/03_thermal_power/03_thermal_power_practice.pdf`

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

確認済み:
- 必須成果物はGitHub正本に存在
- 正式対象は R8/R7/R6/R5一次4問＋R5/R4二次2問
- 完成後独立再解答 `6 / 6 PASS`、教材外知識補完 `0件`
- 練習15問の独立QA `15 / 15 PASS`
- 解説PDF A4縦6ページ、既存全ページレンダリングQA済み
- 練習PDF A4縦6ページ、既存全ページレンダリングQA済み
- PowerPoint 16:9・4枚、既存レンダリング/overflow QA済み
- 固定範囲外の劣化診断、短絡計算、潮流計算等の追加なし
- 未確認の列車1本電力 `P_train` の数値化なし
- 主sourceの進捗メタデータ・完成後独立再解答結果・次段階を現状へ同期済み

## Topic 02 成果物
- `topics/02_hydropower/02_hydropower.md`
- `topics/02_hydropower/02_hydropower_practice.md`
- `topics/02_hydropower/02_hydropower_practice_qa.md`
- `topics/02_hydropower/02_hydropower_independent_reanswer.md`
- `topics/02_hydropower/02_hydropower_final_qa.md`
- `topics/02_hydropower/02_hydropower_explanation.pdf`
- `topics/02_hydropower/02_hydropower_practice.pdf`
- `topics/02_hydropower/02_hydropower_images.pptx`

## Topic 01
`completed`。最終QA PASS、完成後独立再解答 `5 / 5 PASS`、教材外知識補完 `0件`。

## 次
Topic 03 の解説画像PowerPointを作成する。本文8節・3段階例題・正式選定5問の要求事項を固定範囲内で可視化し、未確認実設備値を追加しない。
