# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-14

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は3/16。Topic 01〜03は完成済み。active topicは04 `東京―佐世保「原子力新幹線」`。

## 今回進捗
Topic 04の完成後過去問独立再解答を実施し、固定6問すべて公式解答と一致した。教材外知識・固定範囲外論点の補完は0件。

更新対象:
- `topics/04_nuclear_power/04_nuclear_power_independent_reanswer.md`
- `STATUS.md`
- `HANDOFF.md`

## Topic 04 EXAM_ALIGNMENT
品質ゲート対象は次の公式過去問6問で固定。

1. R8上 電力 問4 — 原子核・質量欠損・結合エネルギー・`E=mc^2`・核分裂
2. R6上 電力 問4 — U-235核分裂エネルギーと石炭発熱量の換算
3. R5上 電力 問4 — ウラン燃料中U-235の質量欠損と重油発熱量の換算
4. H30 電力 問4 — 原子力発電所の蒸気タービン、湿分、蒸気条件、熱効率、蒸気量、回転速度
5. H27 電力 問4 — 軽水炉、PWR/BWR、冷却材・主要設備・蒸気発生
6. H21 電力 問4 — 原子力発電と汽力発電の対応、原子炉、U-235/U-238、濃縮燃料

解説本文・解説PDF・練習PDF・PowerPointで6問の要求事項を全件カバー。固定範囲外の新型炉・核燃料サイクル・放射線分類等は追加していない。

## 完成後独立再解答
記録: `topics/04_nuclear_power/04_nuclear_power_independent_reanswer.md`

再解答結果:
- R8上 電力 問4: `(2)` — 公式 `(2)` — PASS
- R6上 電力 問4: `(4)` — 公式 `(4)` — PASS
- R5上 電力 問4: `(3)` — 公式 `(3)` — PASS
- H30 電力 問4: `(2)` — 公式 `(2)` — PASS
- H27 電力 問4: `(1)` — 公式 `(1)` — PASS
- H21 電力 問4: `(2)` — 公式 `(2)` — PASS

結果: `6/6 PASS`。

確認:
- 必要公式を完成教材から選択: PASS
- 計算途中式を完成教材の手順だけで構成: PASS
- 知識問題の根拠を完成教材内で説明: PASS
- 教材外知識の補完: 0件
- 固定範囲外論点の追加: 0件

## 既存成果物
- 解説PDF: `topics/04_nuclear_power/04_nuclear_power_explanation.pdf`
- 練習PDF: `topics/04_nuclear_power/04_nuclear_power_practice.pdf`
- 解説画像PowerPoint: `topics/04_nuclear_power/04_nuclear_power_images.pptx`
- PowerPoint QA: `topics/04_nuclear_power/04_nuclear_power_powerpoint_qa.md`
- 独立再解答: `topics/04_nuclear_power/04_nuclear_power_independent_reanswer.md`

## 「むつ」一次資料境界
JAEA一次資料で確認済みの範囲だけを実在値として使用。

- PWR（加圧水型）
- 原子炉熱出力36 MWth
- 一次冷却水平均温度273.5 ℃
- 一次冷却系運転圧力110 kg/cm²G
- 蒸気発生器2基
- 蒸気圧力40 kg/cm²G
- 蒸気温度250.6 ℃
- 乾き度99.75%

実在の「むつ」は蒸気タービンの軸出力で船を推進する。本教材の `蒸気タービン → 同期発電機 → 電力 → 主電動機` はSPEC固定の架空列車側として明示し、未確認の発電端出力・走行性能は設定していない。

## 現在状態
- `current_status`: `topic_04_independent_reanswer_complete`
- 完成数: `3/16`
- last completed: Topic 03
- active: Topic 04 `東京―佐世保「原子力新幹線」`
- Topic 04完成後独立再解答: `6/6 PASS`
- Topic 04最終QA: 未実施

## 次の正確な開始点
Topic 04の最終QAを実施する。必須成果物の存在、EXAM_ALIGNMENT、独立再解答6/6 PASS、PDF/PPTX QA、実在値と架空設定の境界、SPEC範囲逸脱なしを再確認し、全件PASSの場合のみ `completed` にする。