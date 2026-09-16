# STATUS - 新幹線車両・電験二種

更新日: 2026-09-17

## 状態
- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `11 / 39`
- current_status: `topic_12_exam_alignment_complete`
- last_completed_topic: `11 300系② PWMコンバータ`
- active_topic: `12 300系③ VVVFインバータと誘導機制御`
- next_start: Topic 12の解説本文＋3段階例題

## 品質ゲート進捗
- [x] 01 0系① 主変圧器の等価回路 — PASS
- [x] 02 0系② 整流回路の波形解析 — PASS
- [x] 03 0系③ 直流主電動機の電圧方程式とトルク — PASS
- [x] 04 0系④ タップ制御と加速特性 — PASS
- [x] 05 0系⑤ 発電ブレーキのエネルギー解析 — PASS
- [x] 06 0系⑥ 主回路全体の電力・損失・効率 — PASS
- [x] 07 直流主回路の高出力化 — PASS
- [x] 08 位相制御と平均直流電圧 — PASS
- [x] 09 直流機方式の損失・熱設計 — PASS
- [x] 10 300系① 誘導電動機等価回路 — PASS
- [x] 11 300系② PWMコンバータ — PASS
- [ ] 12 300系③ VVVFインバータと誘導機制御 — EXAM_ALIGNMENT_COMPLETE / IN_PROGRESS

## Topic 12 固定EXAM_ALIGNMENT
- source: `topics/12_300series_vvvf_inverter_induction_control/12_300series_vvvf_inverter_induction_control.md`
- 固定過去問: 一次4問＋二次1問、計5問
- 固定答案要素: 一次11＋二次2、計13
- R6 一次 機械 問2 (1),(5)
- R4 一次 機械 問2 (3)〜(5)
- R2 一次 機械 問3 (1),(4),(5)
- H30 二次 機械・制御 問1 (4)
- H26 一次 機械 問5 (3)〜(5)
- 制作前独立検証: 一次 `11 / 11 PASS`、二次 `2 / 2 PASS`、合計 `13 / 13 PASS`
- 二次記述問題: `1問`
- 公式解答との不一致: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`

## Topic 12 固定範囲
- VVVF
- PWM
- V/f
- 同期速度
- すべり
- 定トルク領域
- 定出力領域
- 電圧制限
- 電流制限

SPEC指定可視化:
- 周波数―同期速度
- 周波数―電圧
- 回転速度―トルク
- 回転速度―出力

範囲境界:
- Topic 13の回生・四象限運転・回生エネルギーは追加しない
- ベクトル制御・センサレス制御等のSPEC外制御方式は追加しない
- Topic 11のPWMコンバータ側の高調波・力率制御・直流中間電圧制御を再展開しない
- 未確認の300系基底周波数、最大電圧、最大電流、PWMキャリア周波数、制御定数等を実車値として追加しない
- SPEC指定9項目との対応: `9 / 9 PASS`
- SPEC指定4可視化との対応: `4 / 4 PASS`
- Topic 13先取り: `0件`
- SPEC外制御方式追加: `0件`
- 未確認300系実車値追加: `0件`

## Topic 11 完成成果物・QA
- 固定EXAM_ALIGNMENT: 一次2問＋二次3問、計5問・27答案要素
- 解説source/PDF、練習source/PDF、解説画像PowerPoint: 完成
- 完成後独立再解答: `27 / 27 PASS`
- 最終QA: `PASS / completed`

## 次工程
Topic 12「300系③ VVVFインバータと誘導機制御」の解説本文＋3段階例題を作成する。固定一次4問＋二次1問・13答案要素を本文へ全件マッピングし、固定EXAM_ALIGNMENTは変更しない。