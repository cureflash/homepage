# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-14

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は28/38。01〜28がPASS。active topicは29 `コンプレッサ・ポンプ・ファン`。

## 今回進捗
Topic 28 `空調・電熱` の完成後独立再解答・最終QAを実施した。固定EXAM_ALIGNMENT 5問・10小問を完成教材の式・判断経路だけで再計算し、公式解答と `10 / 10 PASS`。教材外知識補完、固定範囲外論点追加、未確認実車値追加はいずれも0件。Topic 28を `PASS / COMPLETED` とした。

更新:
- `topics/28_air_conditioning_heating/28_air_conditioning_heating_final_qa.md` — 完成後独立再解答・最終QAを新規記録
- `STATUS.md` — 完成数28/38、Topic 29へ進行
- `HANDOFF.md`

## Topic 28 最終QA
1. R8上 機械 問17(a)(b) — `173364 kJ`、`3.98 h` → `5 / 2` — PASS
2. R7上 機械 問17(a)(b) — `1.33 kW`、`14.7 min` → `2 / 2` — PASS
3. R4上 機械 問17(a)(b) — `97.2 MJ`、`82.85 ℃` → `5 / 5` — PASS
4. R1 機械 問17(a)(b) — `100.529 MJ`、`1.164 kW` → `2 / 3` — PASS
5. H28 機械 問17(a)(b) — `136.519 MJ`、`7.075 h` → `2 / 2` — PASS

結果: `10 / 10 PASS`。

教材だけで完結した項目:
- 顕熱 `Q=mcΔT`
- 潜熱 `Q=mL`
- 複数過程 `Q_total=ΣQ`
- 熱効率 `η=Q_use/(Pt)` と逆算
- ヒートポンプ `COP=Q_out/W_in` と逆算
- `kW / kJ/s / kWh / MJ / s / min / h` の単位換算
- 過程ごとの質量整理

## Topic 28 成果物
- `topics/28_air_conditioning_heating/28_air_conditioning_heating.md`
- `topics/28_air_conditioning_heating/28_air_conditioning_heating_explanation.pdf`
- `topics/28_air_conditioning_heating/28_air_conditioning_heating_practice.md`
- `topics/28_air_conditioning_heating/28_air_conditioning_heating_practice.pdf`
- `topics/28_air_conditioning_heating/28_air_conditioning_heating_images.pptx`
- `topics/28_air_conditioning_heating/28_air_conditioning_heating_final_qa.md`

解説PDF・練習PDF・PowerPointの表示QAは既にPASS済み。固定範囲外の熱伝導、熱抵抗、熱流、加熱方式各論、冷凍サイクル詳細、湿度・空気線図、未確認実車値は追加していない。

## 現在の状態
- `current_status`: `topic_28_completed`
- 完成数: 28/38
- 01〜28: PASS
- active topic: 29 `コンプレッサ・ポンプ・ファン`
- Topic 29: NOT_STARTED

## 次の正確な開始点
Topic 29の制作前EXAM_ALIGNMENTを行う。系列SPEC固定範囲は `コンプレッサ、ポンプ、ファン、電動機応用、トルク、出力、効率`。公式過去問を直近年度から調査し、固定範囲だけで完結する問題を原則5問以上選定する。保存済み正答に依存しない制作前独立解答を行い、要求事項を分解してから本文制作へ進む。固定範囲外論点を件数合わせで追加しない。
