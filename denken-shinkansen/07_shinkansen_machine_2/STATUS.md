# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-13

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: 3 / 22
- current_status: `topic_04_powerpoint_complete`
- last_completed_topic: `03 0系を210km/hまで加速させる`
- active_topic: `04 200系のサイリスタ制御を計算する`
- next_start: Topic 04の固定EXAM_ALIGNMENT一次2問＋二次記述3問、ゲート対象12小問を、完成教材だけで公式解答を先に見ず独立再解答する。教材外知識や固定範囲外論点で補完しない

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
- [ ] 公式過去問の教材のみでの独立再解答
- [ ] 最終QA PASS

## 今回進めた内容
Topic 04の固定EXAM_ALIGNMENT、解説本文、解説・練習PDFを正本に、`topics/04_200series_thyristor_control/04_200series_thyristor_control_images.pptx` を作成した。

確認結果:
- 16:9・1スライドの解法マップとして作成: PASS
- 固定EXAM_ALIGNMENTの一次2問＋二次記述3問、ゲート対象12小問に必要な論点を可視化: PASS
- 三相全波位相制御整流器の60°区間平均値積分と `V_d=(3√2/π)V cosα`: PASS
- `α=0`、`0≤α≤π/2`、制御角―平均直流電圧の関係: PASS
- サイリスタ一素子の平均電流・実効値・直流側電流の区別と代表式: PASS
- H30二次条件の `P`、`I_1`、`S_1`、`Q_1`、基本波力率: PASS
- 基本波力率と高調波を含む総合力率を区別: PASS
- 高調波の発生源・基本的影響を固定範囲内で収録: PASS
- `V_d=E+I_aR_a`、`T=kΦI_a` と `α-V_d`、`α-I_a`、`α-T` の読み方を収録: PASS
- `α-I_a`、`α-T` は `E`・`R_a`・`kΦ` 一定の教材上の比較モデルと明記: PASS
- 200系の未確認実車値を追加していない: PASS
- 固定範囲外のチョッパ、PWM、インバータ、回生、能動フィルタ補償設計、サイクロコンバータ固有制御を追加していない: PASS
- LibreOfficeで全スライドPDF化し表示QA。クリッピング、重なり、文字化けなし: PASS
- PPTX ZIP整合性検査: PASS

## 判定
Topic 04は `powerpoint_complete`。完成数は `3 / 22` のまま。次工程は固定5問・12小問の教材のみ独立再解答。