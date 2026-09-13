# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-13

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: 3 / 22
- current_status: `topic_03_completed`
- last_completed_topic: `03 0系を210km/hまで加速させる`
- active_topic: `04 200系のサイリスタ制御を計算する`
- next_start: Topic 04の制作前EXAM_ALIGNMENTを行う。SPEC固定範囲のサイリスタ、制御角、位相制御整流、平均直流電圧、電流、力率、高調波の基本、直流主電動機との接続に対応する電験二種公式過去問を一次・二次合わせて原則5問以上調査し、二次記述対象が確認できる場合は少なくとも1問含める

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

## 今回進めた内容
Topic 03の最終QAを実施し、`topics/03_0series_acceleration/03_0series_acceleration_final_qa.md` に記録した。

確認結果:
- source Markdown、解説PDF、練習PDF、解説画像PowerPointの4成果物実在: PASS
- 現行blob SHAと各制作時の表示QA対象blobが一致: PASS
- 解説PDFはA4縦2ページ、練習PDFはA4縦5ページ、PowerPointは16:9・5枚の既実施表示QAを維持: PASS
- 固定EXAM_ALIGNMENTの一次4問＋二次記述1問、ゲート対象8小問を教材のみで独立再解答: 8 / 8 PASS
- 代表計算、単位、途中式、成立条件、丸めを独立再計算: PASS
- 0系実車値、一次資料からの計算値、教材上の仮定値の区別: PASS
- 車輪径・主電動機回転速度・各タップ電圧等の未確認値を実車値化していない: PASS
- チョッパ、回生、誘導機V/f・ベクトル制御、等価RC始動過渡を追加していない: PASS

## 判定
Topic 03を `completed` とする。完成数を `3 / 22` へ更新。次工程はTopic 04「200系のサイリスタ制御を計算する」の制作前EXAM_ALIGNMENT。