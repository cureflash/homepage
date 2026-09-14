# STATUS - 新幹線車両・電験二種

更新日: 2026-09-14

## 状態
- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: 5 / 39
- current_status: `topic_06_practice_pdf_complete`
- last_completed_topic: `05 0系⑤ 発電ブレーキのエネルギー解析`
- active_topic: `06 0系⑥ 主回路全体の電力・損失・効率`
- next_start: Topic 06の解説画像PowerPointを作成し、全スライド表示QA・overflow検査・PPTX整合性確認を行う

## 品質ゲート進捗
- [x] 01 0系① 主変圧器の等価回路 — PASS
- [x] 02 0系② 整流回路の波形解析 — PASS
- [x] 03 0系③ 直流主電動機の電圧方程式とトルク — PASS
- [x] 04 0系④ タップ制御と加速特性 — PASS
- [x] 05 0系⑤ 発電ブレーキのエネルギー解析 — PASS
- [ ] 06 0系⑥ 主回路全体の電力・損失・効率 — 練習PDFまで完了

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

## Topic 06 練習PDF
- A4縦3ページ。
- 一次8問（全問五肢択一）＋二次記述4問、合計12問。
- 完成済み練習sourceの問題・正答・完全解説・途中式・単位・検算を反映。
- 180 dpi全3ページ Visual QA `PASS`。
- 文字抽出QA `PASS`。
- 計算・論理 `12 / 12 PASS`。
- 数値はすべて教材用仮定値。未確認0系実車値は追加していない。

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

次工程は解説画像PowerPointのみ。完成後独立再解答・最終QAはその後に行う。
