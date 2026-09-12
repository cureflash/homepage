# STATUS - 新幹線車両・電験三種

更新日: 2026-09-13

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 22 / 38
- current_status: `topic_23_explanation_pdf_complete`
- last_completed_topic: `22 L0系① リニア同期モータ`
- active_topic: `23 L0系② 500km/hと周波数制御`
- next_start: Topic 23のsource Markdownを正本として、練習問題12問以上と解答・完全解説を作成する

## 新品質ゲート進捗
- [x] 01〜22 — PASS
- [ ] 23 L0系② 500km/hと周波数制御 — 制作前EXAM_ALIGNMENT、解説本文、3段階例題、解説PDF＋全ページQAまで完了

## 23 EXAM_ALIGNMENT
品質ゲート対象は次の5問。制作前独立解答は5 / 5 PASS。

1. R7上 機械 問4 — 周波数・電圧を同率変更する定トルク運転、V/f — 解答3
2. R5下 機械 問6 — 極数・周波数・同期速度 — 解答3
3. H26 機械 問15(a) — 同期速度、三相電力、トルク — 解答3
4. H20 機械 問10 — V/f一定、磁気飽和、整流器、インバータ、PWM — 解答5
5. H19 機械 問15(a) — 同期速度と同期角速度 — 解答4

R8上問3はベクトル制御・始動トルク、R8上問4はすべり・二次入力、R6上問4はすべり、R5下問15はすべり周波数が必要なため除外。系列SPEC外の知識を追加していない。

## 23 解説範囲
source Markdownで確定した範囲のみを使用。

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
- source Markdown: `topics/23_l0_500kmh_frequency_control/23_l0_500kmh_frequency_control.md` — EXAM_ALIGNMENT、解説本文、3段階例題まで完了
- 解説PDF: `topics/23_l0_500kmh_frequency_control/23_l0_500kmh_frequency_control_explanation.pdf` — 3ページ、全ページQA PASS
- 練習PDF: 未着手
- 解説画像PowerPoint: 未着手

## 23 PDF QA
解説PDFを3ページすべてレンダリングして目視確認した。

- 3 / 3ページ PASS
- 文字欠け、黒四角、クリッピング、重なりなし
- 本文、3段階例題、過去問対応、公式まとめを収録
- 未確認のL0系極ピッチ・500 km/h時の実運転周波数、すべり・ベクトル制御は追加していない

## 23 QA判定
`IN_PROGRESS`。制作前EXAM_ALIGNMENT 5/5 PASS、解説PDF全ページQA PASS。完成後独立再解答は未実施のため、完成数は22/38のまま。

## 次
Topic 23の練習問題12問以上と解答・完全解説を作成する。少なくとも半数を五肢択一とし、現行SPECと制作前EXAM_ALIGNMENTの範囲外知識は追加しない。