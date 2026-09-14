# STATUS - 新幹線車両・電験三種

更新日: 2026-09-14

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 28 / 38
- current_status: `topic_29_explanation_source_complete`
- last_completed_topic: `28 空調・電熱`
- active_topic: `29 コンプレッサ・ポンプ・ファン`
- next_start: Topic 29の解説本文＋3段階例題をもとに解説PDFを作成する。固定EXAM_ALIGNMENT 5問の解法経路と系列SPEC固定範囲（コンプレッサ、ポンプ、ファン、電動機応用、トルク、出力、効率）を維持し、範囲外論点・未確認実車値を追加しない

## 新品質ゲート進捗
- [x] 01〜28 — PASS
- [ ] 29 コンプレッサ・ポンプ・ファン — EXPLANATION_SOURCE_COMPLETE

## 29 EXAM_ALIGNMENT
品質ゲート対象は公式過去問5問。系列SPEC固定範囲は、コンプレッサ、ポンプ、ファン、電動機応用、トルク、出力、効率。

1. R4下 機械 問11 — ポンプ揚水、損失水頭、ポンプ効率・電動機効率、必要電動機入力 — `4` — PASS
2. H30 機械 問10 — ポンプ揚水、余裕係数、100 kW電動機の必要台数 — `4` — PASS
3. H29 機械 問12 — 流体搬送負荷のトルク特性、送風機の風量・所要電力と速度の関係 — `4` — PASS
4. H27 機械 問12 — 実揚程・全揚程、ポンプ効率、余裕係数、電動機出力 — `5` — PASS
5. H18 機械 問10 — ポンプ揚水、損失水頭、ポンプ効率・電動機効率、必要電動機入力 — `3` — PASS

制作前独立解答: `5 / 5 PASS`。
教材外知識による正答補完: `0件`。
固定範囲外論点追加: `0件`。
未確認実車値追加: `0件`。

直近年度から確認したが、R8上〜R5の電動機応用でTopic 29へ直接対応しない巻上機・減速機・はずみ車等を件数合わせで採用していない。圧縮機固有の熱力学計算を要求する公式過去問は今回の調査範囲で確認できず、冷凍サイクル・断熱圧縮等は追加しない。

## 29 解説本文
- §1〜§15を作成
- 回転出力 `P=Tω`、`ω=2πN/60`
- 水動力 `P_w=ρgQH`、水に対する `9.8QH [kW]`
- 流量の時間単位換算、実揚程・損失水頭・全揚程
- ポンプ効率・電動機効率と入力/出力の向き
- 余裕係数、台数切上げ
- ファンの `Q∝n`、`T∝n^2`、`P∝n^3`
- コンプレッサは軸出力・トルク・回転速度・効率までに限定
- 固定5問の解法経路を本文へ `5 / 5` マッピング
- 3段階例題: コンプレッサ軸出力 / ポンプ必要電動機入力 / ファン速度低下
- 固定範囲外追加 `0件`、未確認実車値追加 `0件`

## 29 成果物
- 解説source / EXAM_ALIGNMENT: `topics/29_compressor_pump_fan/29_compressor_pump_fan.md` — 本文＋3段階例題まで完成
- 解説PDF: 未着手
- 練習source/PDF: 未着手
- 解説画像PowerPoint: 未着手
- 完成後独立再解答・最終QA: 未着手

## 28 EXAM_ALIGNMENT
品質ゲート対象は公式過去問5問・10小問。系列SPEC固定範囲は、空調、電熱、ジュール熱、熱量、電力、効率。

1. R8上 機械 問17(a)(b) — 木材・水の顕熱、蒸発潜熱、総合効率、乾燥時間 — `5 / 2` — PASS
2. R7上 機械 問17(a)(b) — 氷の融解熱、水の顕熱、電熱装置の熱効率・消費電力・時間 — `2 / 2` — PASS
3. R4上 機械 問17(a)(b) — ヒートポンプのCOP、消費電力量、供給熱量、水温上昇 — `5 / 5` — PASS
4. R1 機械 問17(a)(b) — 水の加熱熱量、COP、消費電力の逆算 — `2 / 3` — PASS
5. H28 機械 問17(a)(b) — 水の加熱熱量、COP、加熱時間 — `2 / 2` — PASS

制作前独立解答: `10 / 10 PASS`。
完成後独立再解答: `10 / 10 PASS`。
教材外知識補完: `0件`。
固定範囲外論点追加: `0件`。
未確認実車値追加: `0件`。

## 28 成果物
- 解説source: `topics/28_air_conditioning_heating/28_air_conditioning_heating.md`
- 解説PDF: `topics/28_air_conditioning_heating/28_air_conditioning_heating_explanation.pdf`
- 練習source: `topics/28_air_conditioning_heating/28_air_conditioning_heating_practice.md`
- 練習PDF: `topics/28_air_conditioning_heating/28_air_conditioning_heating_practice.pdf`
- 解説画像PowerPoint: `topics/28_air_conditioning_heating/28_air_conditioning_heating_images.pptx`
- 完成後独立再解答・最終QA: `topics/28_air_conditioning_heating/28_air_conditioning_heating_final_qa.md`

## 28 最終QA
- 固定5問・10小問を完成教材の式・判断経路だけで再計算し、公式解答と`10 / 10`一致
- 顕熱`Q=mcΔT`、潜熱`Q=mL`、複数過程`Q_total=ΣQ`、熱効率`η=Q_use/(Pt)`、COPと各逆算、単位換算を教材内で完結
- 解説PDF: A4縦4ページ、180 dpi全ページ表示QA PASS
- 練習PDF: A4縦5ページ・15問、180 dpi全ページ表示QA PASS、正答位置A/B/C/D/E各3問
- PowerPoint: 16:9・4スライド、全スライド表示QA PASS、overflow `0件`、ZIP整合性PASS
- 最終判定: `PASS / COMPLETED`

## 28 範囲境界
追加していない:
- 熱伝導率、熱抵抗、熱流、対流、放射伝熱
- 誘導加熱の表皮効果・浸透深さ・透磁率、誘電加熱、アーク加熱等の方式各論
- 冷媒物性、冷凍サイクル詳細、p-h線図、エンタルピー計算
- 湿度、換気、空気線図、顕熱比等の空調設計論点
- 未確認の新幹線車内空調・電熱実車値

## 次テーマ
Topic 29 `コンプレッサ・ポンプ・ファン` を進行中。
系列SPEC固定範囲:
- コンプレッサ
- ポンプ
- ファン
- 電動機応用
- トルク
- 出力
- 効率
