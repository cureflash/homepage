# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-13

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: 3 / 22
- current_status: `topic_04_explanation_pdf_complete`
- last_completed_topic: `03 0系を210km/hまで加速させる`
- active_topic: `04 200系のサイリスタ制御を計算する`
- next_start: Topic 04の練習PDF（解答・完全解説付き）を作成する。固定EXAM_ALIGNMENTの一次2問＋二次記述3問、ゲート対象12小問に必要なサイリスタ、制御角、三相全波位相制御整流、平均直流電圧、電流、基本波力率、高調波の基本、直流主電動機との接続を練習できる構成とし、固定範囲外は追加しない

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
- [ ] 練習PDF（解答・完全解説付き）
- [ ] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの独立再解答
- [ ] 最終QA PASS

## 今回進めた内容
Topic 04のsource Markdownを正本に、`topics/04_200series_thyristor_control/04_200series_thyristor_control_explanation.pdf` を作成した。

確認結果:
- A4縦4ページで作成: PASS
- 固定EXAM_ALIGNMENTのゲート対象12小問に必要な内容をPDFへ収録: PASS
- 三相全波位相制御整流器の60°区間平均値積分と `V_d=(3√2/π)V cosα`: PASS
- `α=0`、`0≤α≤π/2`、`α-V_d` 特性: PASS
- サイリスタ印加電圧、一素子平均電流、平均値・実効値・直流側電流の区別: PASS
- H30二次条件の `P`、`I_1`、`S_1`、`Q_1` と基本波力率: PASS
- 基本波力率と高調波を含む総合力率の区別: PASS
- 高調波の発生源と過熱・振動・誤動作等の基本的影響: PASS
- `V_d(α)=E+I_aR_a`、`T=kΦI_a` による直流主電動機との接続: PASS
- `α-V_d`、`α-I_a`、`α-T` の3グラフを収録し、`α-I_a`・`α-T` は教材上の比較モデルで実車値ではないと明記: PASS
- 基礎・本試験標準・二次相当の3段階例題: PASS
- 全4ページをレンダリングして表示QA。クリッピング、重なり、黒四角、文字化けなし: PASS
- 200系の未確認実車値を追加していない: PASS
- 固定範囲外のチョッパ、PWM、インバータ、回生、サイクロコンバータ固有制御を追加していない: PASS

## 判定
Topic 04は `explanation_pdf_complete`。完成数は `3 / 22` のまま。次工程は練習PDF（解答・完全解説付き）。