# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-13

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: 1 / 22
- current_status: `topic_02_exam_reanswer_complete`
- last_completed_topic: `01 0系の主変圧器を等価回路で解剖する`
- active_topic: `02 0系の直流主電動機はどんな特性だった？`
- next_start: Topic 02の最終QAを行う。必須4成果物の存在・内容整合、計算値とEXAM_ALIGNMENT記録の整合、PDF/PPTXの表示・構造確認結果を再確認し、全条件PASSの場合のみ `completed` とする

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
- [ ] 最終QA PASS

## 今回進めた内容
Topic 02の完成後独立再解答を実施した。

対象:
- R6 一次 機械 問2: 本テーマ対象1小問
- H28 一次 機械 問1: 2小問
- H28 一次 機械 問5: 1小問
- H26 一次 機械 問5: 2小問
- H24 二次 機械・制御 問1: (1)〜(4)
- 合計10小問

結果:
- 10 / 10正答
- 全問で完成教材内の式・説明から解答根拠を組み立てられた
- 公式標準解答と全件一致
- 教材外知識の補完0件
- H24二次(1)〜(4)は `R_a=0.500 Ω`、`E=188 V`、最大速度 `1480 min^-1`、50%トルク・1000 min^-1時端子電圧 `133 V` で一致
- H24(3)の最大正電圧は問題図の直流入力200 VとIGBT電圧降下2 VからKVLで198 Vとし、除外範囲のデューティ比・回生制御は使用していない
- 混合問題の誘導機、VVVF、チョッパ制御部分およびH24(5)(6)は本テーマの完答対象として扱っていない

独立再解答結果は `topics/02_0series_dc_motor_characteristics/02_0series_dc_motor_characteristics.md` の `完成後の独立再解答ゲート` に記録した。

## 判定
Topic 02は `exam_reanswer_complete`。完成数は `1 / 22` のまま。次工程は最終QA。最終QA PASS前は `completed` にしない。
