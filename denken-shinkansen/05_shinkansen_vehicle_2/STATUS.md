# STATUS - 新幹線車両・電験二種

更新日: 2026-09-13

## 状態
- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: 0 / 39
- current_status: `topic_01_independent_reanswer_complete`
- last_completed_topic: `none`
- active_topic: `01 0系① 主変圧器の等価回路`
- next_start: Topic 01の最終QAを行う。完成成果物とEXAM_ALIGNMENT、独立再解答記録の整合、一次・二次の要求論点、実車値と計算値・仮定値の区別、成果物の存在を確認し、PASSならTopic 01を`completed`にする

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
- [ ] 最終QA PASS

## 今回進めた内容
Topic 01 `0系① 主変圧器の等価回路` の完成教材による公式過去問独立再解答を実施した。

記録:
`topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_exam_reanswer.md`

対象は制作前EXAM_ALIGNMENTで選定済みの6問。

- R7 一次 機械 問3
- R6 二次 機械・制御 問2
- R3 二次 機械・制御 問2
- R2 二次 機械・制御 問2
- H28 二次 機械・制御 問2
- H27 二次 機械・制御 問2

公式問題文を起点に、完成済み教材に収録した公式・解法・成立条件だけで再計算・再導出し、その後に電気技術者試験センターの公式標準解答と照合した。一次1問・二次記述5問の全6問で結果が一致し、教材外知識の補完は不要だった。

確認できた範囲は、巻数比と一次/二次換算、無負荷試験・短絡試験、`%Z/%r/%x`、遅れ力率の電圧変動率、鉄損・銅損・規約効率・最大効率条件、フェーザ関係と一次近似導出を含む。

## 判定
独立再解答ゲートは `PASS`。Topic 01は独立再解答まで完了したが、最終QAが残っているためまだ `completed` ではない。
