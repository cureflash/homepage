# STATUS - 新幹線車両・電験二種

更新日: 2026-09-14

## 状態
- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: 5 / 39
- current_status: `topic_06_exam_alignment_complete`
- last_completed_topic: `05 0系⑤ 発電ブレーキのエネルギー解析`
- active_topic: `06 0系⑥ 主回路全体の電力・損失・効率`
- next_start: Topic 06の解説本文＋基礎・本試験標準・複合の3段階例題を、確定済みEXAM_ALIGNMENTの固定範囲だけで作成する

## 品質ゲート進捗
- [x] 01 0系① 主変圧器の等価回路 — PASS
- [x] 02 0系② 整流回路の波形解析 — PASS
- [x] 03 0系③ 直流主電動機の電圧方程式とトルク — PASS
- [x] 04 0系④ タップ制御と加速特性 — PASS
- [x] 05 0系⑤ 発電ブレーキのエネルギー解析 — PASS
- [ ] 06 0系⑥ 主回路全体の電力・損失・効率 — EXAM_ALIGNMENT完了

## Topic 05 最終結果
- final QA: `PASS`
- final QA record: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_final_qa.md`
- source: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy.md`
- 解説PDF: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_explanation.pdf`
- 練習問題source: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_practice_source.md`
- 練習PDF: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_practice.pdf`
- 解説画像PowerPoint: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_images.pptx`
- 完成後独立再解答: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_independent_reanswer.md`
  - 固定範囲5チェックポイント `5 / 5 PASS`
  - 教材外知識補完・固定範囲外論点・未確認0系実値の追加: 0件
- 練習問題: 一次8問＋二次記述4問、計算・論理 `12 / 12 PASS`
- 解説PDF: 全5ページ180 dpi Visual QA PASS
- 練習PDF: 全3ページ180 dpi Visual QA PASS
- PowerPoint: 全5スライド Visual QA・overflow検査・ZIP整合性 PASS
- 前回 `NEEDS_REVISION` の原因だった旧進捗記録不整合は解消済み

## Topic 05 EXAM_ALIGNMENT
固定範囲へ直接または必須計算基礎として接続した公式問題:
- R5 一次 機械 問2 — `(2)(3)` と車上抵抗消費の記述
- H24 二次 機械・制御 問1 — `(1)(2)`

二種一次・二次合計の原則5問以上は調査したが、固定範囲を守ってゲート化できたのは上記2問。件数合わせで回生、誘導機制動、可逆チョッパ、VVVF等を追加していない。

## Topic 06 EXAM_ALIGNMENT
source:
- `topics/06_0series_main_circuit_power_loss_efficiency/06_0series_main_circuit_power_loss_efficiency.md`

品質ゲート対象の公式過去問:
- R8 一次 機械 問3 — 変圧器の損失・規約効率・最大効率条件
- R5 一次 機械 問1 — 回転機の効率・機械損・鉄損・銅損・漂遊負荷損・固定損
- H30 一次 機械 問5 — 変圧器の無負荷損・負荷損・鉄損・規約効率
- R2 二次 機械・制御 問2 — 鉄損・銅損・負荷率・最大効率・部分負荷効率
- H22 二次 機械・制御 問2 — 無負荷試験・銅損・最大効率条件

一次3問＋二次2問、合計5問を固定。二次記述問題を2問含め、原則5問以上の品質ゲートを満たす。R7一次機械問3は等価回路・短絡試験が主眼でTopic 01寄りのため採用せず、IGBT等のスイッチング損失も件数合わせで追加しない。

## Topic 06 固定範囲
SPEC記載:
- 主変圧器損失
- 整流器損失
- 主電動機損失
- 機械損
- 入力電力
- 軸出力
- 総合効率
- 発熱
- 冷却

指定計算・グラフ:
- 負荷率―総合効率
- 機器別損失内訳
- 入力電力―車輪側出力
- 条件変更時の損失比較

次工程では、この固定範囲と確定済み5過去問から外れる論点を追加しない。未確認の0系固有損失値・冷却容量・歯車損失等は実値として置かない。