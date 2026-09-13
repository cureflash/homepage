# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-13

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は2/16。Topic 01・02は完成済み。active topicは03 `JR東日本はなぜ火力発電所まで持っている？`。

## 今回進捗
Topic 03を1段階進め、完成後の過去問独立再解答を実施した。完成教材に収録された説明・公式・解法だけを使って、制作前 `EXAM_ALIGNMENT` の6問・7小問を再計算・再判定し、解答確定後に電気技術者試験センター公式解答と照合した。

結果は `7/7 PASS`。教材外の新規公式・論点補完0件、固定範囲外追加0件。

追加・更新成果物:
- `topics/03_thermal_power/03_thermal_power_independent_reanswer.md`
- `STATUS.md`
- `HANDOFF.md`

## Topic 03 過去問対応ゲート
1. R8上 電力 問3 — 復水器の凝縮・真空度・タービン効率 — 完成後 `(1)` / 公式 `(1)` — PASS
2. R7下 電力 問15(a) — 発熱量・燃料消費量・発電電力量から発電端効率 — 完成後 `(4)` / 公式 `(4)` — PASS
3. R7上 電力 問2 — 蒸気タービン効率・比エンタルピー差・使用蒸気量 — 完成後 `(5)` / 公式 `(5)` — PASS
4. R6上 電力 問3 — ガスタービンコンバインドサイクルと汽力発電の比較 — 完成後 `(4)` / 公式 `(4)` — PASS
5. R3 電力 問15(a) — 発電端/送電端電力量・所内率 — 完成後 `(2)` / 公式 `(2)` — PASS
6. R3 電力 問15(b) — 燃料発熱量・発電端熱効率 — 完成後 `(4)` / 公式 `(4)` — PASS
7. R1 電力 問15(a) — タービン熱消費率・復水器損失・タービン出力 — 完成後 `(3)` / 公式 `(3)` — PASS

制作前独立再解答: `7/7 PASS`。
完成後独立再解答: `7/7 PASS`。

## Topic 03 固定範囲
`SPEC.md` から追加しない。

- 汽力発電
- ガスタービン発電
- コンバインドサイクル
- ボイラ
- 蒸気タービン
- 復水器
- 発電機
- 熱効率
- 熱消費率
- 発電端効率
- 所内率
- 発熱量と発電電力量
- 発電端出力と送電端出力

過去問から確定した中間知識:
- 復水器の凝縮・真空度とタービン出口圧力・効率の関係
- 比エンタルピー差とタービン効率から使用蒸気量を求める式
- `kW/kWh/MW/MWh/kJ/MJ` の単位換算
- 熱消費率 `q[kJ/(kWh)]` と `η=3600/q`
- 発電端/送電端と所内率 `Ps=Pg(1-L)`, `Ws=Wg(1-L)`
- ガスタービン・コンバインドサイクルと汽力発電の比較

境界:
- 詳細煙風道設備は追加しない
- 再熱/再生サイクル・給水加熱器等の個別論点は追加しない
- 炭素組成・化学量論・CO2計算は追加しない
- 保護装置・継電器・トリップ機構は追加しない
- 川崎発電所等の実設備値はJR東日本一次資料で確認できたものだけを使用する

## Topic 03 現在の成果物
- source Markdown: `topics/03_thermal_power/03_thermal_power.md`
- 解説PDF: `topics/03_thermal_power/03_thermal_power_explanation.pdf`
- 練習PDF: `topics/03_thermal_power/03_thermal_power_practice.pdf`
- 解説画像PowerPoint: `topics/03_thermal_power/03_thermal_power_images.pptx`
- PowerPoint QA: `topics/03_thermal_power/03_thermal_power_powerpoint_qa.md`
- 完成後独立再解答: `topics/03_thermal_power/03_thermal_power_independent_reanswer.md`

## 現在状態
- `current_status`: `topic_03_independent_reanswer_complete`
- 完成数: `2/16`
- last completed: Topic 02
- active: Topic 03

## 次の正確な開始点
Topic 03の最終QAを行う。解説PDF・練習PDF・PowerPoint・source Markdown・完成後独立再解答を横断確認し、`MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` の全品質ゲートを満たす場合のみTopic 03を `completed` にする。