# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-13

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: 2 / 22
- current_status: `topic_03_independent_reanswer_complete`
- last_completed_topic: `02 0系の直流主電動機はどんな特性だった？`
- active_topic: `03 0系を210km/hまで加速させる`
- next_start: Topic 03の最終QAを行う。EXAM_ALIGNMENT、解説本文、解説PDF、練習PDF、解説画像PowerPoint、教材のみ独立再解答8/8 PASSの整合、仕様外論点混入、実車値/計算値/仮定値の区別を確認し、PASSならTopic 03をcompletedへ進める

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
- [ ] 最終QA PASS

## 今回進めた内容
Topic 03の固定EXAM_ALIGNMENTについて、完成済み教材だけを使う独立再解答を実施した。

対象と結果:
- H28 一次 機械 問1 (1): トルク（ト） / PASS
- H28 一次 機械 問1 (2): 誘導起電力（リ） / PASS
- H28 一次 機械 問1 (3): 慣性モーメント（ヘ） / PASS
- H28 一次 機械 問5 (1): 直巻電動機（チ） / PASS
- H26 一次 機械 問5 (1): 始動時のトルク（ロ） / PASS
- H26 一次 機械 問5 (2): 直巻電動機（リ） / PASS
- H25 一次 機械 問3 (1): 回転角速度（ヨ） / PASS
- H24 二次 機械・制御 問1 (4): `132.5 V ≒ 133 V` / PASS

確認結果:
- 教材内の `T=kφI_a`、`E=kφω`、`Jdω/dt=T-T_L`、`P=Tω` だけで一次対象を解答: PASS
- H24二次は `E∝n`、`T∝I_a`、`V=E+I_aR_a+V_b` を使い、`E_1=187.5 V`、`R_a=0.500 Ω`、`E_2=125 V`、`I_a2=10 A`、`V_2=132.5 V` と途中式まで再構成: PASS
- 公式解答・標準解答との照合: 8 / 8 PASS
- チョッパ、回生、誘導機V/f・ベクトル制御、等価RC始動過渡を補わずにゲート対象を完答: PASS

## 判定
Topic 03を `topic_03_independent_reanswer_complete` とする。完成数は `2 / 22` のまま。次工程は最終QA。