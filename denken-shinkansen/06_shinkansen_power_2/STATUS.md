# STATUS - 新幹線・電験二種「電力」

更新日: 2026-09-13

## 状態
- active_series: `06_shinkansen_power_2`
- exam_aligned_completed_topics: `2 / 22`
- last_completed_topic: `02 信濃川の水で新幹線を何本走らせられる？`
- active_topic: `03 川崎発電所は新幹線の負荷変動に追従できる？`
- current_status: `topic_03_preproduction_independent_verification_complete`
- next_start: Topic 03 の本文節マッピングを上限として、解説本文＋基礎・本試験標準・複合の3段階例題を作成する

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
- [ ] 解説本文＋3段階例題
- [ ] 練習問題＋完全解説
- [ ] 練習問題独立QA
- [ ] 解説PDF
- [ ] 練習PDF
- [ ] 解説画像PowerPoint
- [ ] 完成後独立再解答
- [ ] 最終QA PASS

正式対象:
- R3 一次 電力 問5
- H29 二次 電力・管理 問1
- R1 二次 電力・管理 問1
- H27 一次 電力 問1
- H25 一次 電力 問1

記録:
- `topics/03_thermal_power/03_thermal_power.md`
- `topics/03_thermal_power/03_thermal_power_preproduction_verification.md`

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
Topic 03 の解説本文＋3段階例題を作成する。制作前独立検証 `5 / 5 PASS` を前提とし、`03_thermal_power.md` の本文節マッピングと固定範囲を上限にする。川崎発電所の実設備値はJR東日本等の一次資料で確認できたものだけを使用し、未確認値を置かない。
