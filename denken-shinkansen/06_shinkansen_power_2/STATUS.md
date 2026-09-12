# STATUS - 新幹線・電験二種「電力」

更新日: 2026-09-13

## 状態
- active_series: `06_shinkansen_power_2`
- exam_aligned_completed_topics: 1 / 22
- current_status: `topic_02_exam_alignment_complete`
- last_completed_topic: `01 新幹線を電力系統から見てみる`
- active_topic: `02 信濃川の水で新幹線を何本走らせられる？`
- next_start: Topic 02 の解説本文＋3段階例題を作成する。正式選定した一次4問＋二次2問の要求事項を本文節マッピング内で欠落なく扱い、実設備値は一次資料で確認できたものだけを使用する

## Topic 02 品質ゲート進捗
- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 一次4問＋二次2問の計6問を正式選定
- [x] 二次記述問題を含めた品質ゲートを確保
- [x] 参考教材を複数系統確認
- [x] source Markdownへ制作前EXAM_ALIGNMENTを記録
- [x] 制作前独立検証・公式解答照合（6/6 PASS）
- [ ] 解説本文（本文節＋3段階例題）
- [ ] 練習問題・完全解説
- [ ] 練習問題の独立再計算・一意解QA
- [ ] 解説PDF
- [ ] 練習PDF
- [ ] 解説画像PowerPoint
- [ ] 完成後独立再解答
- [ ] 最終QA

## Topic 02 正式な品質ゲート対象
- R8 一次 電力 問5
- R7 一次 電力 問1
- R6 一次 電力 問3
- R5 一次 電力 問1
- R5 二次 電力・管理 問1
- R4 二次 電力・管理 問1

一次4問＋二次2問、計6問。二次は論説記述1問＋記述計算1問を含む。`EXAM_ALIGNMENT_SPEC.md` の二種要件を満たす。

source Markdown:
- `topics/02_hydropower/02_hydropower.md`

選定見直し:
- R7二次 電力・管理 問1は水力発電所を題材にするが、劣化診断・MT/PT/UT・絶縁診断が主題でTopic 02固定範囲外のため不採用。
- R6二次 電力・管理にはTopic 02固定範囲に直接対応する水力問題を確認できず不採用。

## Topic 01 品質ゲート進捗
- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 一次2問＋二次記述3問の計5問を正式選定
- [x] 参考教材を複数系統確認
- [x] source Markdownへ制作前EXAM_ALIGNMENTを記録
- [x] 公式解答との照合を伴う要求事項の独立検証
- [x] 解説本文（9節＋3段階例題）
- [x] 練習問題・完全解説（15問、一次型10問＋二次記述型5問）
- [x] 練習問題15問の独立再計算・一意解QA
- [x] 解説PDF
- [x] 練習PDF
- [x] 解説画像PowerPoint
- [x] 初回完成後独立再解答（3/5 PASS、2/5 FAIL）
- [x] FAIL原因3点の最小補強
  - タービン発電機の直軸過渡リアクタンス代表範囲 `0.2～0.4 p.u.`
  - 駆動点インピーダンスと節点インピーダンス行列 `Z_bus` の関係
  - 短絡容量と系統の強さ・電圧維持能力の関係
- [x] 補強内容を解説PDFへ同期し、全ページをレンダリングQA PASS
- [x] 同じ公式過去問5問で再独立解答（5/5 PASS、教材外知識補完0件）
- [x] 最終QA PASS

## Topic 01 正式な品質ゲート対象
- H29 一次 電力 問6
- R5 一次 電力 問4
- R4 二次 電力・管理 問3
- R5 二次 電力・管理 問4
- R6 二次 電力・管理 問4

一次2問＋二次記述3問。`EXAM_ALIGNMENT_SPEC.md` の二種要件を満たす。

## Topic 01 最終QA
判定: `PASS`

確認済み:
- 必須source Markdown、解説PDF、練習PDF、解説画像PowerPointがGitHub正本に存在
- EXAM_ALIGNMENTは正式選定5問の要求事項を本文節へ対応付け済み
- 練習15問は一次型10問＋二次記述型5問で、正式選定5問の要求事項をマッピング済み
- 補強後の解説PDFは現行版でレンダリングQA PASS
- 練習PDFは作成時の全6ページ二系統レンダリングQA済み現行blob
- PowerPointは作成時の全4枚レンダリング確認・overflow検査PASS済み現行blob
- 完成後再独立解答は5/5 PASS、教材外知識補完0件
- Topic 08、12、16、20の本題および未確認実設備値は追加していない

以上によりTopic 01を `completed` とした。完成数は `1 / 22`。

## 次
Topic 02 `信濃川の水で新幹線を何本走らせられる？` の解説本文＋3段階例題を作成する。制作前EXAM_ALIGNMENTで確定した本文節マッピングを上限とし、仕様外論点を追加しない。