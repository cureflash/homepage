# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-13

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: 2 / 22
- current_status: `topic_03_exam_alignment_complete`
- last_completed_topic: `02 0系の直流主電動機はどんな特性だった？`
- active_topic: `03 0系を210km/hまで加速させる`
- next_start: Topic 03の解説本文＋3段階例題を作成する。EXAM_ALIGNMENTで固定した要求を全件収録し、0系の歯車比・車輪径・主電動機定格・タップ制御仕様等の実車値は一次資料で確認できたものだけを使う

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
- [ ] 解説本文＋3段階例題
- [ ] 解説PDF
- [ ] 練習PDF（解答・完全解説付き）
- [ ] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの独立再解答
- [ ] 最終QA PASS

## 今回進めた内容
Topic 03の制作前EXAM_ALIGNMENTを作成し、`topics/03_0series_acceleration/03_0series_acceleration.md` に記録した。

確認結果:
- 一次4問＋二次記述1問、計5問を選定: PASS
- H28一次 機械 問1: 直流機のトルク・誘導起電力・慣性モーメントと `J dω/dt=T-T_L`
- H28一次 機械 問5: 直流電気鉄道の直巻電動機
- H26一次 機械 問5: 始動時の大トルクと直巻電動機
- H25一次 機械 問3: `P=Tω` と `T_M=J dω/dt+T_L`
- H24二次 機械・制御 問1(4): 速度・トルク比から必要端子電圧を求める記述計算
- ゲート対象8小問: 8 / 8で公式解答・標準解答と整合
- e-sysnet＋電験王2で説明粒度・解法順を確認
- チョッパ、回生、誘導機V/f、ベクトル制御、等価RC過渡応答は対象外として固定
- 0系の未確認実車値は追加していない

## 判定
Topic 03を `topic_03_exam_alignment_complete` とする。完成数は `2 / 22` のまま。次工程は解説本文＋3段階例題。