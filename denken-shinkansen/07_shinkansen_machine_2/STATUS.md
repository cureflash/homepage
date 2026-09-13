# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-13

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: 4 / 22
- current_status: `topic_04_completed`
- last_completed_topic: `04 200系のサイリスタ制御を計算する`
- active_topic: `05 300系の誘導電動機を等価回路で解く`
- next_start: Topic 05の制作前EXAM_ALIGNMENTを行う。SPEC固定範囲の誘導機一相等価回路、一次抵抗・一次漏れリアクタンス、励磁枝、二次抵抗・二次漏れリアクタンス、`r2'/s`、一次入力・二次入力・二次銅損・機械出力・軸出力・トルク・効率に対応する電験二種公式過去問を一次・二次合わせて原則5問以上調査し、二次記述対象が確認できる場合は少なくとも1問含める

## Topic 01 品質ゲート進捗
- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 公式過去問を一次・二次合わせて6問選定
- [x] 二次試験の記述式問題を含めた
- [x] 参考教材を複数系統確認
- [x] source Markdownへ制作前EXAM_ALIGNMENTを記録
- [x] 公式解答との照合を伴う要求事項の独立検証
- [x] 解説本文
- [x] 解説PDF
- [x] 練習PDF（解答・完全解説付き）
- [x] 解説画像PowerPoint
- [x] 公式過去問の教材のみでの独立再解答
- [x] 最終QA PASS

## Topic 02 品質ゲート進捗
- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 公式過去問を一次4問＋二次記述1問、計5問選定
- [x] 混合問題は本テーマ対応小問だけをゲート対象として明示
- [x] 参考教材を複数系統確認
- [x] source Markdownへ制作前EXAM_ALIGNMENTを記録
- [x] ゲート対象10小問の公式解答照合を伴う要求事項の独立検証: 10 / 10 PASS
- [x] 解説本文＋3段階例題
- [x] 解説PDF
- [x] 練習PDF（解答・完全解説付き）
- [x] 解説画像PowerPoint
- [x] 公式過去問の教材のみでの独立再解答: 10 / 10 PASS
- [x] 最終QA PASS

## Topic 03 品質ゲート進捗
- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 公式過去問を一次4問＋二次記述1問、計5問選定
- [x] 混合問題は本テーマ対応小問・式だけをゲート対象として明示
- [x] 参考教材を e-sysnet＋電験王2 の複数系統で確認
- [x] source Markdownへ制作前EXAM_ALIGNMENTを記録
- [x] ゲート対象8小問の公式解答照合を伴う要求事項の独立検証: 8 / 8 PASS
- [x] 解説本文＋3段階例題
- [x] 解説PDF
- [x] 練習PDF（解答・完全解説付き）
- [x] 解説画像PowerPoint
- [x] 公式過去問の教材のみでの独立再解答: 8 / 8 PASS
- [x] 最終QA PASS

## Topic 04 品質ゲート進捗
- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 公式過去問を一次2問＋二次記述3問、計5問選定
- [x] 混合問題は固定範囲へ直接対応する小問だけをゲート対象として明示
- [x] 参考教材を e-sysnet＋電験王2 の複数系統で確認
- [x] source Markdownへ制作前EXAM_ALIGNMENTを記録
- [x] ゲート対象12小問の公式解答照合を伴う要求事項の独立検証: 12 / 12 PASS
- [x] 解説本文＋3段階例題
- [x] 解説PDF
- [x] 練習PDF（解答・完全解説付き）
- [x] 解説画像PowerPoint
- [x] 公式過去問の教材のみでの独立再解答: 12 / 12 PASS
- [x] source Markdownの進捗記録をGitHub正本へ同期
- [x] 最終QA PASS

## 今回進めた内容
Topic 04の最終QAを再実施し、`topics/04_200series_thyristor_control/04_200series_thyristor_control_final_qa.md` に記録した。

確認結果:
- source Markdown、解説PDF、練習PDF、解説画像PowerPoint、独立再解答記録の実在: PASS
- 固定EXAM_ALIGNMENTの一次2問＋二次記述3問、ゲート対象12小問: PASS
- 完成教材のみの独立再解答: 12 / 12 PASS
- 式・成立条件・途中式・単位と教材内マッピング: PASS
- 既実施のPDF/PPTX表示QAとPowerPoint ZIP整合性: PASS
- 教材外知識・固定範囲外論点による補完: 0件
- 未確認200系実車値の追加: 0件

## 判定
Topic 04を `completed` とする。完成数を `4 / 22` へ更新。次工程はTopic 05「300系の誘導電動機を等価回路で解く」の制作前EXAM_ALIGNMENT。
