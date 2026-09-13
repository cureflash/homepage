# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-13

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: 3 / 22
- current_status: `topic_04_practice_pdf_complete`
- last_completed_topic: `03 0系を210km/hまで加速させる`
- active_topic: `04 200系のサイリスタ制御を計算する`
- next_start: Topic 04の解説画像PowerPointを作成する。固定EXAM_ALIGNMENTの一次2問＋二次記述3問、ゲート対象12小問と解説・練習PDFの対応を維持し、固定範囲外は追加しない

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
- [ ] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの独立再解答
- [ ] 最終QA PASS

## 今回進めた内容
Topic 04の固定EXAM_ALIGNMENTと解説本文を正本に、`topics/04_200series_thyristor_control/04_200series_thyristor_control_practice.pdf` を作成した。

確認結果:
- A4縦5ページ、全15問で作成: PASS
- 一次試験型の五肢択一10問＋二次試験型の記述5問: PASS
- 固定EXAM_ALIGNMENTのゲート対象12小問に必要な論点を全件練習可能: PASS
- 三相全波位相制御整流器の60°区間平均値積分と `V_d=(3√2/π)V cosα`: PASS
- サイリスタ一素子の平均電流・実効値・直流側電流の区別: PASS
- H30二次条件の `P`、`I_1`、`S_1`、`Q_1`、基本波力率: PASS
- 高調波の発生源・基本的影響、基本波力率と総合力率の区別: PASS
- `V_d=E+I_aR_a`、`T=kΦI_a` による直流主電動機との接続: PASS
- 数値問題は使用式・理由・代入・単位・中間計算・最終値・検算を収録: PASS
- 記述問題は前提・途中式・理由説明まで採点可能な形で収録: PASS
- 全5ページを200 dpiでレンダリングして表示QA。クリッピング、重なり、黒四角、文字化けなし: PASS
- 200系の未確認実車値を追加していない: PASS
- 固定範囲外のチョッパ、PWM、インバータ、回生、能動フィルタ補償設計、サイクロコンバータ固有制御を追加していない: PASS

## 判定
Topic 04は `practice_pdf_complete`。完成数は `3 / 22` のまま。次工程は解説画像PowerPoint。