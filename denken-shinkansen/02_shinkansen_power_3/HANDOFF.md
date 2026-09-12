# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-13

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は1/16。Topic 01は完成し、次のactive topicは02 `上越新幹線を水の力で走らせる`。

## 今回進捗
Topic 01を1段階進め、完成後の独立再解答と最終QAを完了した。

完成済み成果物:
- `topics/01_power_system_overview/01_power_system_overview.md`
- `topics/01_power_system_overview/01_power_system_overview_explanation.pdf`
- `topics/01_power_system_overview/01_power_system_overview_practice.pdf`
- `topics/01_power_system_overview/01_power_system_overview_images.pptx`
- `topics/01_power_system_overview/01_power_system_overview_final_qa.md`

## 完成後過去問対応ゲート
完成教材の既定範囲だけで選定5問を再解答し、解答確定後に電気技術者試験センター公式解答と照合した。

1. R7上 電力 問13 — 独立解答 (2) / 公式 (2) — PASS
2. R6下 電力 問12 — 独立解答 (2) / 公式 (2) — PASS
3. R6上 電力 問11 — 独立解答 (2) / 公式 (2) — PASS
4. R4上 電力 問8 — 独立解答 (5) / 公式 (5) — PASS
5. R1 電力 問7 — 独立解答 (3) / 公式 (3) — PASS

結果: `5/5 PASS`。教材外知識の補完0件。

## Topic 01で維持した境界
- 水力・火力・原子力・再エネ詳細 → Topic 02〜05
- 変電所設備・計算詳細 → Topic 06
- 三相→単相変換詳細 → Topic 07
- 電圧降下・詳細電力計算 → Topic 08・10
- き電・送電設備詳細 → Topic 09
- 保護・遮断詳細 → Topic 11
- 配電・地中線詳細 → Topic 14
- 系統・蓄電詳細 → Topic 15

仕様追加は行っていない。

## QA判定
Topic 01: `PASS / completed`。解説・練習・PowerPoint・source、計算確認、表示確認、完成後独立再解答を満たした。完成数は1/16。

## 次の正確な開始点
Topic 02 `上越新幹線を水の力で走らせる` の制作前 `EXAM_ALIGNMENT`。公式過去問を直近年度から遡り、水力発電の `流量・有効落差・水力・水車出力・発電機出力・各効率・水車種類・揚水発電・ベルヌーイの基本` という `SPEC.md` 既定範囲に適合する問題を原則5問以上選定する。
