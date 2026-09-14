# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-14

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は28/38。01〜28がPASS。active topicは29 `コンプレッサ・ポンプ・ファン`。

## 今回進捗
Topic 29 `コンプレッサ・ポンプ・ファン` の制作前EXAM_ALIGNMENTを完了した。系列SPEC固定範囲（コンプレッサ、ポンプ、ファン、電動機応用、トルク、出力、効率）へ直接接続する公式過去問5問を固定し、問題条件から独立に再構成して `5 / 5 PASS`。固定範囲外論点、未確認実車値による補完は0件。

更新:
- `topics/29_compressor_pump_fan/29_compressor_pump_fan.md` — EXAM_ALIGNMENT、制作前独立解答、範囲境界を新規記録
- `STATUS.md` — `topic_29_exam_alignment_complete` へ更新
- `HANDOFF.md`

## Topic 29 固定EXAM_ALIGNMENT
1. R4下 機械 問11 — ポンプ揚水、損失水頭、ポンプ効率・電動機効率 — 導出`13.14 kW` → `4` — PASS
2. H30 機械 問10 — ポンプ揚水、余裕係数、必要台数 — 導出`673.75 kW`、`7台` → `4` — PASS
3. H29 機械 問12 — 送風機の負荷特性 — `T∝n^2`、`Q∝n`、`P∝n^3` → `4` — PASS
4. H27 機械 問12 — 実揚程・全揚程、ポンプ効率、余裕係数 — 導出`11.79 kW` → `5` — PASS
5. H18 機械 問10 — ポンプ揚水、損失水頭、ポンプ効率・電動機効率 — 導出`20.19 kW` → `3` — PASS

結果: `5 / 5 PASS`。

教材で必須となる要求事項:
- 回転出力 `P=Tω`、`ω=2πN/60`
- 水動力 `P_w=ρgQH` と、水に対する `9.8QH [kW]`
- 流量の `m^3/h`・`m^3/min` → `m^3/s` 換算
- 実揚程、損失水頭、全揚程
- ポンプ効率・電動機効率と入力/出力の向き
- 余裕係数と台数切上げ
- 送風機の `Q∝n`、`T∝n^2`、`P∝n^3`
- コンプレッサはSPEC固定範囲として軸出力・トルク・回転速度・効率まで扱う

## 直近年度の範囲判定
R8上〜R5の機械科目を直近から確認したが、Topic 29へ直接対応しない巻上機・減速機・はずみ車等を件数合わせで採用していない。圧縮機固有の熱力学計算を要求する公式過去問は今回の調査範囲で確認できないため、断熱・等温・ポリトロープ圧縮仕事、冷凍サイクル等は追加しない。

## 現在の状態
- `current_status`: `topic_29_exam_alignment_complete`
- 完成数: 28/38
- 01〜28: PASS
- active topic: 29 `コンプレッサ・ポンプ・ファン`
- Topic 29: EXAM_ALIGNMENT_COMPLETE / IN_PROGRESS

## 次の正確な開始点
`topics/29_compressor_pump_fan/29_compressor_pump_fan.md` の固定5問から要求事項を逆算し、解説本文＋3段階例題を作成する。全5問の解法経路を本文へマッピングする。系列SPEC固定範囲外を追加しない。未確認の新幹線コンプレッサ・ポンプ・ファン実車値を真値化しない。
