# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-13

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: 3 / 22
- current_status: `topic_04_exam_alignment_complete`
- last_completed_topic: `03 0系を210km/hまで加速させる`
- active_topic: `04 200系のサイリスタ制御を計算する`
- next_start: Topic 04の解説本文＋3段階例題を作成する。固定EXAM_ALIGNMENTの一次2問＋二次記述3問、ゲート対象12小問で要求されたサイリスタ、制御角、三相位相制御整流、平均直流電圧、電流、力率、高調波の基本を全件本文へマッピングし、`V_d(α)=E+I_aR_a`、`T=kΦI_a` で直流主電動機との接続まで説明する。固定範囲外は追加しない

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
- [ ] 解説本文＋3段階例題
- [ ] 解説PDF
- [ ] 練習PDF（解答・完全解説付き）
- [ ] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの独立再解答
- [ ] 最終QA PASS

## 今回進めた内容
Topic 04の制作前EXAM_ALIGNMENTを `topics/04_200series_thyristor_control/04_200series_thyristor_control.md` に作成した。

選定過去問:
- R05 一次 機械 問4
- R01 一次 機械 問3
- R05 二次 機械・制御 問3
- H30 二次 機械・制御 問3
- H27 二次 機械・制御 問3

確認結果:
- 一次2問＋二次記述3問、計5問: PASS
- 固定範囲に対応するゲート対象12小問の公式解答照合付き独立検証: 12 / 12 PASS
- サイリスタ、制御角、三相位相制御整流、平均直流電圧、電流、力率、高調波の基本を過去問要求へ対応付け: PASS
- 直流主電動機との接続に必要な `V_d(α)=E+I_aR_a`、`T=kΦI_a` を本文必須事項として固定: PASS
- 降圧チョッパ、能動フィルタ設計、サイクロコンバータ固有制御、回生・逆変換、PWM・インバータをゲート対象外として明示: PASS
- 200系の未確認実車値を追加していない: PASS

## 判定
Topic 04は `exam_alignment_complete`。完成数は `3 / 22` のまま。次工程は解説本文＋3段階例題。