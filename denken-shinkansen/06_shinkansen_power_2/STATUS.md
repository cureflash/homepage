# STATUS - 新幹線・電験二種「電力」

更新日: 2026-09-13

## 状態
- active_series: `06_shinkansen_power_2`
- exam_aligned_completed_topics: 0 / 22
- current_status: `topic_01_independent_reanswer_needs_revision`
- last_completed_topic: `none`
- active_topic: `01 新幹線を電力系統から見てみる`
- next_start: Topic 01の完成後独立再解答で判明した3点の不足だけを補強する。タービン発電機の直軸過渡リアクタンス代表範囲、駆動点インピーダンスと節点インピーダンス行列の関係、短絡容量と系統の強さ・電圧維持能力の関係を解説本文へ追加し、該当成果物を同期した後に同じ5問で再試験する

## Topic 01 品質ゲート進捗
- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 公式過去問を全問範囲監査し、一次2問＋二次記述3問の計5問を正式選定
- [x] 二次試験の記述式問題を含めた
- [x] 参考教材を複数系統確認
- [x] source Markdownへ制作前EXAM_ALIGNMENTを記録
- [x] 公式解答との照合を伴う要求事項の独立検証
- [x] 要求事項を解説本文の節へマッピング
- [x] 解説本文（検証済み9節＋3段階例題）
- [x] 練習問題・完全解説（15問、一次型10問＋二次記述型5問）
- [x] 練習問題15問の独立再計算・一意解QA
- [x] 解説PDF
- [x] 練習PDF（解答・完全解説付き）
- [x] 解説画像PowerPoint
- [ ] 公式過去問5問の教材のみでの独立再解答（2026-09-13実施: 3/5 PASS、2/5 FAIL。補強後に再実施）
- [ ] 最終QA PASS

## 正式な品質ゲート対象
- H29 一次 電力 問6
- R5 一次 電力 問4
- R4 二次 電力・管理 問3
- R5 二次 電力・管理 問4
- R6 二次 電力・管理 問4

## source Markdown
- `topics/01_power_system_view/01_power_system_view.md`
  - EXAM_ALIGNMENT、制作前独立検証、解説本文、3段階例題
- `topics/01_power_system_view/01_power_system_view_practice.md`
  - 練習15問、完全解説、過去問対応マッピング、練習問題QA
- `topics/01_power_system_view/01_power_system_view_independent_reanswer.md`
  - 完成後独立再解答のQA結果、PASS/FAIL根拠、必要な最小修正点

## 今回進めた内容
Topic 01の次工程である完成後独立再解答を実施した。

正式選定5問のうち、教材本文・練習教材の一般説明だけで完答できたのは3問。

- R4 二次 電力・管理 問3: PASS
- R5 二次 電力・管理 問4: PASS
- R6 二次 電力・管理 問4: PASS
- H29 一次 電力 問6: FAIL
  - タービン発電機の直軸過渡リアクタンス代表範囲 `0.2～0.4 p.u.` が教材本文・練習教材にない
- R5 一次 電力 問4: FAIL
  - 駆動点インピーダンスと節点インピーダンス行列の関係が教材本文・練習教材にない
  - 短絡容量を系統の強さ・電圧維持能力の指標として読む説明が教材本文・練習教材にない

制作前EXAM_ALIGNMENT内の保存済み独立検証結果は正答情報を含むため、今回の教材充足判定の解答根拠には使用しなかった。公式解答との照合では、再導出できた3問はいずれも一致した。

詳細は `topics/01_power_system_view/01_power_system_view_independent_reanswer.md` に記録した。

## 判定
Topic 01 は `independent_reanswer_needs_revision`。まだ `completed` ではない。`EXAM_ALIGNMENT_SPEC.md` の「教材外知識で補って解いた場合はFAIL」に該当する2問があるため、完成数は `0 / 22` のまま。