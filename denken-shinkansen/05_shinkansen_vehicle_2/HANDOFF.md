# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-14

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜05は最終QAまで `PASS`。完成数は `5 / 39`。

現在地は `topic_06_explanation_pdf_complete`。active topicは Topic 06 `0系⑥ 主回路全体の電力・損失・効率`。

## Topic 05 完了記録
- final QA: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_final_qa.md` — `PASS`
- source: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy.md`
- 解説PDF: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_explanation.pdf`
- 練習source: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_practice_source.md`
- 練習PDF: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_practice.pdf`
- PowerPoint: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_images.pptx`
- 独立再解答: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_independent_reanswer.md` — `5 / 5 PASS`

## Topic 06 EXAM_ALIGNMENT
source:
- `topics/06_0series_main_circuit_power_loss_efficiency/06_0series_main_circuit_power_loss_efficiency.md`

品質ゲート対象の公式過去問を一次3問＋二次2問、計5問で固定している。

- R8 一次 機械 問3
  - 変圧器の損失、規約効率、最大効率条件
  - 公式解答 `(1)=ト, (2)=ロ, (3)=ヌ, (4)=リ, (5)=ヲ`
- R5 一次 機械 問1
  - 回転機の効率、機械損・鉄損・銅損・漂遊負荷損・固定損
  - 公式解答 `(1)=リ, (2)=ロ, (3)=ル, (4)=ニ, (5)=ヨ`
- H30 一次 機械 問5
  - 変圧器の無負荷損・負荷損・鉄損・規約効率
  - 公式解答 `(1)=ホ, (2)=ワ, (3)=ヌ, (4)=カ, (5)=ヘ`
- R2 二次 機械・制御 問2
  - 鉄損 `400 W`、定格銅損 `624 W`、最大効率負荷率 `80.0 %`、最大効率 `99.0 %`、負荷率30 %・力率60 %で `97.5 %`
- H22 二次 機械・制御 問2
  - 鉄損 `1.04 kW`、定格銅損 `4.93 kW`、最大効率条件 `鉄損=負荷時銅損`、負荷率 `0.45826`、最大効率約 `98.5 %`

二次記述2問を含み、二種一次・二次合計の原則5問以上を満たす。R7一次機械問3は等価回路・短絡試験が主眼でTopic 01寄りのため採用しない。整流器損失の件数合わせとしてIGBT等のスイッチング損失問題も追加しない。

## Topic 06 解説本文 完了内容
- `P_in = P_out + ΣP_loss` を主軸に、架線側入力→主変圧器→整流器→直流主電動機→軸出力を一つの収支へ統合。
- 主変圧器は鉄損・銅損、`P_c(x)=x^2P_c,r`、規約効率、最大効率条件 `P_i=x^2P_c,r` を整理。
- H30一次対応として無負荷試験・短絡試験・インピーダンス電圧の役割を必要最小限で説明。
- 整流器損失は交流側入力と直流側出力の差だけで扱い、後世代のスイッチング損失モデルは追加していない。
- 主電動機は銅損・鉄損・機械損・漂遊負荷損を軸出力との電力収支へ接続。
- 発熱 `Q=P_loss t` と冷却の必要性まで扱い、詳細熱モデルは追加していない。
- 軸出力と車輪側出力の境界を明示し、未確認の0系歯車・駆動系損失は実値化していない。
- 基礎・本試験標準・複合の3段階例題を完成。
- 選定5過去問の要求事項を本文へ全件マッピング済み。
- SPEC指定4グラフの作図条件を定義。学習用数値は明示的な仮定値のみ。

## Topic 06 解説PDF 完了内容
- `topics/06_0series_main_circuit_power_loss_efficiency/06_0series_main_circuit_power_loss_efficiency_explanation.pdf`
- A4縦5ページ。
- 本文、3段階例題、一次3問＋二次2問への接続、SPEC指定4グラフを収録。
- 全5ページ180 dpi Visual QA PASS。文字欠け・重なり・ページ外はみ出しなし。
- グラフ・例題は学習用仮定値のみ。未確認0系実車値は追加していない。
- サイリスタ位相制御、チョッパ、誘導機、PWM/VVVF、回生・四象限運転、IGBT/SiC、詳細熱モデルは追加していない。

## Topic 06 固定範囲
扱う内容:
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

範囲境界:
- サイリスタ位相制御、チョッパ、誘導機、PWM/VVVF、回生・四象限運転、IGBT/SiC、詳細熱モデルは追加しない。
- 未確認の0系固有損失値、冷却容量、編成出力、歯車損失は実値として置かない。
- 整流器損失はTopic 02を前提に交流入力と直流出力の差として扱い、後世代のスイッチング損失モデルへ拡張しない。

## 次の正確な開始点
Topic 06の練習問題・完全解説sourceを作成する。

1. `topics/06_0series_main_circuit_power_loss_efficiency/06_0series_main_circuit_power_loss_efficiency.md` と確定済みEXAM_ALIGNMENTを正本として使う。
2. 一次型と二次記述型を含め、確定済み一次3問＋二次2問の要求事項を固定範囲内で反映する。
3. 未確認0系実値、後続Topic論点、件数合わせの問題は追加しない。
4. 各問に完全解説を付け、計算・論理を検算する。
5. 練習PDF・PowerPoint・完成後独立再解答はこの次工程以降とし、今回は作らない。