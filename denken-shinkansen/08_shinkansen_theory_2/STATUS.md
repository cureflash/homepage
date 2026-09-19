# STATUS - 新幹線・電験二種「理論」

更新日: 2026-09-19

## 状態
- active_series: `08_shinkansen_theory_2`
- exam_aligned_completed_topics: 20 / 21
- current_status: `topic_21_final_qa_complete`
- last_completed_topic: `20 East iは走りながら何をどう測る？`
- active_topic: `21 架線からEast iまで全部シミュレーションする`
- next_start: Topic 21 completed状態同期

## 完成済み

Topic 01〜20は、各テーマのEXAM_ALIGNMENT、必要成果物、完成後独立再解答、最終QAを通過し `PASS / completed`。

## Topic 21 固定範囲

系列SPECの第21章だけを扱う。

- 回路
- 交流
- 過渡
- 高調波
- 計測
- 簡略モデル: `25kV電源 → 架線等価回路 → 主変圧器 → 整流・DCリンク → PWMインバータ → 簡略負荷 → 電流・電圧センサ → 測定`
- 計算プログラムの代表点は手計算または別手法で独立再計算
- 未公開の実車主回路・East i内部回路・定数を推測で真値化しない

## Topic 21 固定EXAM_ALIGNMENT

品質ゲート対象は `5問・21答案要素`。

- R8 一次 理論 問3: 回路網、テブナン、相反定理 `5答案要素`
- R8 一次 理論 問4: 校正、零位法、測定 `5答案要素`
- R8 一次 理論 問6: RC・RL・RLC過渡 `5答案要素`
- H24 一次 機械 問3 (4)(5): 基本波、高調波、位相差、合成 `2答案要素`
- R2 二次 電力・管理 問6 (1)〜(3): P・Q・S、総合力率、P-Qベクトル、無効電力補償 `4答案要素`

集計:
- 一次: `4問・17答案要素`
- 二次: `1問・4答案要素`
- 二次数合わせ: `0件`
- 関連候補調査: `9件`
- 制作前blind独立再解答: `21 / 21 PASS`
- 公式標準解答照合: `21 / 21一致`
- 完成後独立再解答: `21 / 21 PASS`
- 候補答案変更: `0件`

令和8年度二次試験は2026-11-15実施予定のため、2026-09-19時点では未実施。既実施年度から固定範囲に直接対応するR2二次「電力・管理」問6を採用した。

## Topic 21 制作進捗

- [x] 制作前EXAM_ALIGNMENT: `PASS / 5問・21答案要素`
- [x] 制作前blind独立再解答: `21 / 21 PASS`
- [x] 公式標準解答照合: `21 / 21一致`
- [x] 解説本文＋3段階例題: `PASS / EXPLANATION_SOURCE_COMPLETE`
- [x] 解説PDF＋表示QA: `PASS / EXPLANATION_PDF_COMPLETE`
- [x] 練習問題source＋練習PDF: `PASS / PRACTICE_PDF_COMPLETE`
- [x] 解説画像PowerPoint＋表示QA: `PASS / POWERPOINT_COMPLETE`
- [x] 完成後独立再解答: `21 / 21 PASS / INDEPENDENT_REANSWER_COMPLETE`
- [x] 初回最終QA: `NEEDS_REVISION / FINAL_QA_BLOCKED`
- [x] 主source進捗記録同期
- [x] 最終QA再実施: `PASS / FINAL_QA_COMPLETE`
- [ ] completed状態同期

## 今回進めた内容

Topic 21最終QAを再実施した。

- 初回blocker「主source進捗記録不一致」: `解消済み / 1件中1件`
- 必須成果物欠落: `0件`
- 固定一次4問・17答案要素: `17 / 17 PASS`
- 固定二次1問・4答案要素: `4 / 4 PASS`
- 合計: `21 / 21 PASS`
- 公式標準解答照合: `21 / 21一致`
- SPEC固定範囲: `5 / 5領域`
- 簡略モデル: `8 / 8ブロック`
- 解説PDF表示QA: `4 / 4 PASS`
- 練習PDF表示QA: `4 / 4 PASS`
- PowerPoint表示QA: `8 / 8 PASS`
- 二次数合わせ: `0件`
- 固定範囲外追加: `0件`
- 実車主回路・East i内部回路・未公開定数の推測追加: `0件`
- 技術本文・固定EXAM_ALIGNMENT・過去問正答・教材成果物の変更: `0件`
- 仕様追加: `0件`
- 判定: `PASS / FINAL_QA_COMPLETE / IN_PROGRESS`

## 判定

`PASS / topic_21_final_qa_complete / IN_PROGRESS`。

完成数は `20 / 21`。次工程はTopic 21の `completed` 状態同期。
