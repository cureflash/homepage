# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-13

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: 2 / 22
- current_status: `topic_03_explanation_pdf_complete`
- last_completed_topic: `02 0系の直流主電動機はどんな特性だった？`
- active_topic: `03 0系を210km/hまで加速させる`
- next_start: Topic 03の練習PDF（解答・完全解説付き）を作成する。一次試験型に加え、二次記述へ接続する論点は途中式・前提・単位・理由説明を採点可能な形で含める

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
- [ ] 練習PDF（解答・完全解説付き）
- [ ] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの独立再解答
- [ ] 最終QA PASS

## 今回進めた内容
Topic 03の解説PDF `topics/03_0series_acceleration/03_0series_acceleration_explanation.pdf` をsource正本から作成した。

確認結果:
- A4縦2ページにEXAM_ALIGNMENT、本文12節、3段階例題を反映: PASS
- 一次4問＋二次記述1問、ゲート対象8小問への対応を維持: PASS
- 電圧制御、タップ制御、弱め界磁、定トルク/定出力、歯車比、車輪、列車速度、走行抵抗、加速度の固定範囲を維持: PASS
- 日本車輌製造の一次資料で確認済みの0系実車値だけを実車値として使用: PASS
- 車輪径・主電動機回転速度など未確認値は教材上の仮定値と明記: PASS
- チョッパ、回生、誘導機V/f・ベクトル制御、厳密なRC始動過渡は追加していない: PASS
- 全ページを160 dpiでレンダリングし、文字欠け・クリップ・重なりを確認: PASS

## 判定
Topic 03を `topic_03_explanation_pdf_complete` とする。完成数は `2 / 22` のまま。次工程は練習PDF。