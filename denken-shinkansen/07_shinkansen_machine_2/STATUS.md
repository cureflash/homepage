# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-13

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: 2 / 22
- current_status: `topic_03_practice_pdf_complete`
- last_completed_topic: `02 0系の直流主電動機はどんな特性だった？`
- active_topic: `03 0系を210km/hまで加速させる`
- next_start: Topic 03の解説画像PowerPointを作成する。固定EXAM_ALIGNMENTと練習PDFの一次10問・二次記述5問の解法骨格を維持し、仕様外論点を追加しない

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
- [ ] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの独立再解答
- [ ] 最終QA PASS

## 今回進めた内容
Topic 03の練習PDF `topics/03_0series_acceleration/03_0series_acceleration_practice.pdf` を作成した。

確認結果:
- A4縦5ページ、全15問: PASS
- 一次試験型10問＋二次記述型5問を収録: PASS
- 数値問題は使用式、理由、代入、中間値、単位、最終値を記載: PASS
- 一次知識問題は正答理由と主要な誤答ポイントを記載: PASS
- H24二次「機械・制御」問1(4)型の「速度比→逆起電力、トルク比→電流、端子電圧」を途中式付きで反復: PASS
- 電圧制御、タップ制御、弱め界磁、定トルク/定出力、歯車比、車輪、列車速度、走行抵抗、加速度の固定範囲を維持: PASS
- 0系実車値と教材上の仮定値を区別し、未確認の車輪径・主電動機回転速度を実車値化していない: PASS
- チョッパ、回生、誘導機V/f・ベクトル制御、厳密なRC始動過渡を追加していない: PASS
- 全5ページを160 dpiでレンダリングし、文字欠け・クリップ・重なりを確認: PASS

## 判定
Topic 03を `topic_03_practice_pdf_complete` とする。完成数は `2 / 22` のまま。次工程は解説画像PowerPoint。
