# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-13

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: 1 / 22
- current_status: `topic_02_exam_alignment_complete`
- last_completed_topic: `01 0系の主変圧器を等価回路で解剖する`
- active_topic: `02 0系の直流主電動機はどんな特性だった？`
- next_start: Topic 02の解説本文と3段階例題を作成する。制作前EXAM_ALIGNMENTで固定した直流機の電機子回路、逆起電力、トルク、速度、直巻特性、弱め界磁、損失・効率、指定3特性グラフを回収し、混合過去問のチョッパ・誘導機・VVVF・過渡制御は追加しない

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
- [ ] 解説本文＋3段階例題
- [ ] 解説PDF
- [ ] 練習PDF（解答・完全解説付き）
- [ ] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの独立再解答
- [ ] 最終QA PASS

## 今回進めた内容
Topic 02の制作前EXAM_ALIGNMENTを `topics/02_0series_dc_motor_characteristics/02_0series_dc_motor_characteristics.md` に作成した。

確認結果:

- 公式過去問: R6一次機械問2、H28一次機械問1・問5、H26一次機械問5、H24二次機械・制御問1
- 一次4問＋二次記述1問で、二種の一次・二次を含む原則5問以上の品質ゲートを満たす
- ゲート対象: 各混合問題のうちTopic 02のSPECに直接対応する計10小問
- 制作前独立検証: 10 / 10で公式解答と整合
- SPEC外のチョッパ、誘導電動機、VVVF、過渡制御はゲート対象外とし、教材範囲へ追加しない
- 完成後独立再解答は未実施

## 判定
Topic 02は `exam_alignment_complete`。完成数は `1 / 22` のまま。次工程は解説本文＋3段階例題。
