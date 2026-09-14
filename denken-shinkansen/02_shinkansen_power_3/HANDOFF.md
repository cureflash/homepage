# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-14

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は5/16。Topic 01〜05は完成済み。次のactive topicは06 `275,000Vをどうやって25,000Vにする？`。

## 今回進捗
Topic 05「新幹線を再エネだけで走らせられる？」の最終QAを実施し、`PASS / completed` とした。

確認結果:
- 必須成果物のGitHub実在: PASS
- 固定5過去問のEXAM_ALIGNMENT: PASS
- 解説PDF・練習PDF・PowerPoint表示QA: PASS
- 修正版完成教材での独立再解答: `5/5 PASS`
- 教材のみ完結: `5/5`
- 教材外知識補完: `0件`
- SPEC固定範囲・除外境界: PASS
- 仕様外追加: `0件`

最終QA記録:
- `topics/05_renewable_energy/05_renewable_energy_final_qa.md`

## Topic 05 完了内容
固定5過去問:
1. R8上 電力 問5 — `(4)` PASS
2. R7下 電力 問5 — `(5)` PASS
3. R6上 電力 問5 — `(1)` PASS
4. R5上 電力 問5 — `(2)` PASS
5. R2 電力 問5 — `(3)` PASS

初回独立再解答で不足した既存要求事項2点は補強済み。
- R2 電力 問5 — 地表日射代表値 `約1 kJ/(m²·s)`（=`約1 kW/m²`）
- R8上 電力 問5 — NaS電池の単位質量当たりエネルギー密度は同問では鉛蓄電池の約3倍

成果物:
- source: `topics/05_renewable_energy/05_renewable_energy.md`
- 解説PDF: `topics/05_renewable_energy/05_renewable_energy_explanation.pdf` — 補強後A4縦4ページ、200 dpi全ページ表示QA PASS
- 練習PDF: `topics/05_renewable_energy/05_renewable_energy_practice.pdf` — A4縦5ページ、12問、200 dpi全ページ表示QA・数値再計算PASS
- 解説画像PowerPoint: `topics/05_renewable_energy/05_renewable_energy_images.pptx` — 16:9・4枚、表示QA・overflow・ZIP整合性PASS
- PowerPoint QA: `topics/05_renewable_energy/05_renewable_energy_powerpoint_qa.md`
- 独立再解答: `topics/05_renewable_energy/05_renewable_energy_independent_reanswer.md`
- 最終QA: `topics/05_renewable_energy/05_renewable_energy_final_qa.md`

範囲境界は維持した。バイオマス、小水力、洋上風力の直流送電等を件数合わせで追加していない。未確認の新幹線消費電力、再エネ設備容量、蓄電容量も実値化していない。

## 現在状態
- `current_status`: `topic_05_completed`
- 完成数: `5/16`
- last completed: Topic 05
- active: Topic 06 `275,000Vをどうやって25,000Vにする？`

## Topic 06 SPEC固定範囲
- 変電所
- 変圧器
- 母線
- 遮断器
- 断路器
- 計器用変成器
- 避雷器
- 保護リレー
- 受電電圧
- き電電圧

基本構成は `電力系統 → 特別高圧受電 → 新幹線変電所 → き電用変圧器 → 交流25kV`。

## 次の正確な開始点
Topic 06の制作前EXAM_ALIGNMENTを実施する。電気技術者試験センターの直近公式過去問からSPEC固定範囲に直接対応する問題を原則5問以上調査し、要求知識・式・設問型・本文必要事項を固定する。制作前独立検証を通過するまで本文制作へ進まない。固定範囲外の論点を件数合わせで追加しない。
