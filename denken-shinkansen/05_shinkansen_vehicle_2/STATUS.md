# STATUS - 新幹線車両・電験二種

更新日: 2026-09-14

## 状態
- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: 5 / 39
- current_status: `topic_06_source_progress_synced`
- last_completed_topic: `05 0系⑤ 発電ブレーキのエネルギー解析`
- active_topic: `06 0系⑥ 主回路全体の電力・損失・効率`
- next_start: Topic 06の最終QAを再実施し、全品質ゲートPASSの場合のみcompletedへ進める

## 品質ゲート進捗
- [x] 01 0系① 主変圧器の等価回路 — PASS
- [x] 02 0系② 整流回路の波形解析 — PASS
- [x] 03 0系③ 直流主電動機の電圧方程式とトルク — PASS
- [x] 04 0系④ タップ制御と加速特性 — PASS
- [x] 05 0系⑤ 発電ブレーキのエネルギー解析 — PASS
- [ ] 06 0系⑥ 主回路全体の電力・損失・効率 — source進捗記録同期済み、最終QA再実施待ち

## Topic 06 EXAM_ALIGNMENT
品質ゲート対象の公式過去問:
- R8 一次 機械 問3 — 変圧器の損失・規約効率・最大効率条件
- R5 一次 機械 問1 — 回転機の効率・機械損・鉄損・銅損・漂遊負荷損・固定損
- H30 一次 機械 問5 — 変圧器の無負荷損・負荷損・鉄損・規約効率
- R2 二次 機械・制御 問2 — 鉄損・銅損・負荷率・最大効率・部分負荷効率
- H22 二次 機械・制御 問2 — 無負荷試験・銅損・最大効率条件

一次3問＋二次2問、合計5問を固定。二次記述問題を2問含む。R7一次機械問3やIGBT等を件数合わせで追加しない。

## Topic 06 成果物
- source: `topics/06_0series_main_circuit_power_loss_efficiency/06_0series_main_circuit_power_loss_efficiency.md`
- 解説PDF: `topics/06_0series_main_circuit_power_loss_efficiency/06_0series_main_circuit_power_loss_efficiency_explanation.pdf`
- 解説PDF QA: `topics/06_0series_main_circuit_power_loss_efficiency/06_0series_main_circuit_power_loss_efficiency_explanation_pdf_qa.md`
- 練習source: `topics/06_0series_main_circuit_power_loss_efficiency/06_0series_main_circuit_power_loss_efficiency_practice_source.md`
- 練習PDF: `topics/06_0series_main_circuit_power_loss_efficiency/06_0series_main_circuit_power_loss_efficiency_practice.pdf`
- 練習PDF QA: `topics/06_0series_main_circuit_power_loss_efficiency/06_0series_main_circuit_power_loss_efficiency_practice_qa.md`
- 解説画像PowerPoint: `topics/06_0series_main_circuit_power_loss_efficiency/06_0series_main_circuit_power_loss_efficiency_images.pptx`
- PowerPoint QA: `topics/06_0series_main_circuit_power_loss_efficiency/06_0series_main_circuit_power_loss_efficiency_images_qa.md`
- 完成後独立再解答: `topics/06_0series_main_circuit_power_loss_efficiency/06_0series_main_circuit_power_loss_efficiency_independent_reanswer.md`
- 最終QA: `topics/06_0series_main_circuit_power_loss_efficiency/06_0series_main_circuit_power_loss_efficiency_final_qa.md`

## Topic 06 完成後独立再解答
- 固定EXAM_ALIGNMENT 5問を完成教材だけで再構築し、公式解答・標準解答と照合。
- 一次3問・15小問: `15 / 15 PASS`。
- 二次2問・7設問: `7 / 7 PASS`。
- 全チェックポイント: `22 / 22 PASS`。
- 教材外知識による補完: `0件`。
- 固定範囲外論点の追加: `0件`。
- 未確認0系実値の追加: `0件`。
- 判定: `PASS`。

## Topic 06 最終QA
- 前回判定: `NEEDS_REVISION`。
- 必須成果物: `PASS`。
- 一次3問＋二次2問の過去問マッピング: `PASS`。
- 完成後独立再解答: `22 / 22 PASS`。
- 解説PDF・練習PDF・PowerPoint表示QA: `PASS`。
- 固定範囲・未確認0系実値: `PASS`。
- 前回FAIL要因だった進捗記録不整合は、主source・練習sourceとも現在地へ同期済み。
- 最終QA再実施前のため、まだ `completed` にはしない。

## Topic 06 解説画像PowerPoint
- 16:9・4スライド。
- 主回路エネルギーフロー、機器別損失内訳、負荷率―総合効率、入力電力―車輪側出力、条件変更時の損失感度比較を可視化。
- 固定EXAM_ALIGNMENT一次3問＋二次2問へ接続。
- 180 dpi全4スライド Visual QA `PASS`。
- overflow検査: `0件`。
- PPTX ZIP整合性: `PASS`。
- 数値は教材用仮定値のみ。未確認0系実車値は追加していない。

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

範囲外として追加しない:
- サイリスタ位相制御、チョッパ、誘導機、PWM/VVVF、回生・四象限運転、IGBT/SiC、詳細熱モデル
- 未確認の0系固有損失値、冷却容量、編成出力、歯車損失

次工程はTopic 06の最終QA再実施。全品質ゲートPASSの場合のみ `completed` にして完成数を `6 / 39` へ進める。