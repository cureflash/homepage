# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-13

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: 2 / 22
- current_status: `topic_03_explanation_source_complete`
- last_completed_topic: `02 0系の直流主電動機はどんな特性だった？`
- active_topic: `03 0系を210km/hまで加速させる`
- next_start: Topic 03の解説PDFを作成する。正本は `topics/03_0series_acceleration/03_0series_acceleration.md` とし、本文・3段階例題・一次資料確認済みの0系実車値だけを反映する

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
- [ ] 解説PDF
- [ ] 練習PDF（解答・完全解説付き）
- [ ] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの独立再解答
- [ ] 最終QA PASS

## 今回進めた内容
Topic 03の解説本文＋3段階例題を `topics/03_0series_acceleration/03_0series_acceleration.md` に追加した。

確認結果:
- `V=E+I_aR_a`、`E=kφω`、`T=kφI_a`、`P=Tω`、`Jdω/dt=T-T_L` を速度制御・加速へ接続: PASS
- 電圧制御、タップ制御、弱め界磁、定トルク領域、定出力領域を収録: PASS
- `主電動機 → 歯車 → 車輪 → 列車速度 → 駆動力・走行抵抗 → 加速度` の再利用可能な解法手順を収録: PASS
- 基礎・標準・二次相当の3段階例題を作成し、途中式・単位・成立条件を明記: PASS
- 日本車輌製造の一次資料で0系の2両8主電動機、連続定格1,480 kW・167 km/h、歯数比1:2.17、低圧タップ切換、25段、最高210 km/hを確認: PASS
- 車輪径・主電動機回転速度など一次資料未確認値を0系実値として追加していない: PASS
- チョッパ、回生、誘導機V/f、ベクトル制御、厳密な過渡応答は対象外のまま維持: PASS

## 判定
Topic 03を `topic_03_explanation_source_complete` とする。完成数は `2 / 22` のまま。次工程は解説PDF。