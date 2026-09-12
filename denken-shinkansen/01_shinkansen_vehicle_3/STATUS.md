# STATUS - 新幹線車両・電験三種

更新日: 2026-09-13

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 23 / 38
- current_status: `topic_23_completed`
- last_completed_topic: `23 L0系② 500km/hと周波数制御`
- active_topic: `24 L0系③ 超電導磁気浮上`
- next_start: Topic 24の制作前EXAM_ALIGNMENT。系列SPEC範囲（超電導磁石、磁界、電磁誘導、誘導電流、電磁力、浮上、案内）だけで、直近年度を優先して関連公式過去問5問以上を調査し要求事項を確定する

## 新品質ゲート進捗
- [x] 01〜23 — PASS
- [ ] 24 L0系③ 超電導磁気浮上 — 未着手

## 23 EXAM_ALIGNMENT
品質ゲート対象は次の5問。制作前独立解答は5 / 5 PASS、完成後独立再解答も5 / 5 PASS。

1. R7上 機械 問4 — 周波数・電圧を同率変更する定トルク運転、V/f — 再解答3 / 照合3 — PASS
2. R5下 機械 問6 — 極数・周波数・同期速度 — 再解答3 / 照合3 — PASS
3. H26 機械 問15(a) — 同期速度、三相電力、トルク — 再解答3 / 照合3 — PASS
4. H20 機械 問10 — V/f一定、磁気飽和、整流器、インバータ、PWM — 再解答5 / 照合5 — PASS
5. H19 機械 問15(a) — 同期速度と同期角速度 — 再解答4 / 照合4 — PASS

完成後再解答では、必要公式・適用条件・解法手順を完成済み教材内だけで再構成できた。R8上問3・問4、R6上問4、R5下問15は、すべり・ベクトル制御等の系列SPEC外知識が必要なため対象外のままとした。

## 23 解説範囲
- `Ns=120f/p`、`ωs=4πf/p`
- 回転磁界から移動磁界への対応
- V/fをほぼ一定にする理由と適用境界
- 整流器・インバータ・PWM
- 三相有効電力、効率、`P=ωT`
- 同期速度、V/f、電力・トルクの解法手順
- 基礎・本試験標準・複合の3段階例題
- 頻出ミス、選定5問との対応、公式まとめ

R7上問4の `T∝VI/f` は当該問題の近似条件としてのみ扱う。V/f一定も電験の一般原理として扱い、L0系実機の具体的制御則とは断定しない。

## 23 L0系一次資料
JR東海「超電導リニアの原理」で、時速500 km走行、推進コイルのN/S切替、周波数による切替速度・車両速度制御を確認済み。実機の極ピッチと500 km/h時の実運転周波数は一次資料で具体値を確定できていないため、実車値として置かない。

## 23 成果物
- source Markdown: `topics/23_l0_500kmh_frequency_control/23_l0_500kmh_frequency_control.md` — EXAM_ALIGNMENT、解説本文、3段階例題、完成後独立再解答まで完了
- 解説PDF: `topics/23_l0_500kmh_frequency_control/23_l0_500kmh_frequency_control_explanation.pdf` — 3ページ、全ページQA PASS
- 練習PDF: `topics/23_l0_500kmh_frequency_control/23_l0_500kmh_frequency_control_practice.pdf` — 7ページ、15問、解答・完全解説付き、全ページQA PASS
- 解説画像PowerPoint: `topics/23_l0_500kmh_frequency_control/23_l0_500kmh_frequency_control_images.pptx` — 7スライド、全スライドQA・overflow検査PASS

## 23 QA判定
`PASS`。制作前EXAM_ALIGNMENT、解説PDF・練習PDF・PowerPointの表示QA、完成後独立再解答5/5をすべて通過。Topic 23をcompletedとし、完成数を23/38へ更新した。

## 次
Topic 24 `L0系③ 超電導磁気浮上` の制作前EXAM_ALIGNMENTから開始する。系列SPEC外の論点を追加せず、公式過去問の要求事項から教材範囲を確定する。