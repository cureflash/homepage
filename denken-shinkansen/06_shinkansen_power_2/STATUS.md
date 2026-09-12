# STATUS - 新幹線・電験二種「電力」

更新日: 2026-09-13

## 状態
- active_series: `06_shinkansen_power_2`
- exam_aligned_completed_topics: 1 / 22
- current_status: `topic_01_completed`
- last_completed_topic: `01 新幹線を電力系統から見てみる`
- active_topic: `02 信濃川の水で新幹線を何本走らせられる？`
- next_start: Topic 02 の制作前EXAM_ALIGNMENTを行う。公式過去問を直近年度優先で一次・二次合わせて原則5問以上選定し、二次対象論点では確認できる記述式を最低1問含め、要求知識・式・設問型・参考教材をsource Markdownへ記録する

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

## 正式な品質ゲート対象
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
Topic 02 `信濃川の水で新幹線を何本走らせられる？` の制作前EXAM_ALIGNMENTから開始する。本文や成果物は、公式過去問から要求事項を確定する前に作成しない。