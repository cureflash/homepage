# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use retired `social-worksheets/`.
- Mode: **GENERATE BACKLOG**
- Normal target: **20 newly generated units per run**
- FACTCHECK: manual/later batch only; do not alternate automatically
- Verified learner-facing coverage remains through `meiji-state-industrialization`
- Pending backlog count: **151 units**
- Junior-high history: generation complete
- Junior-high civics: generation complete
- `歴史総合`: generation complete
- `日本史探究`: 63-unit generation queue complete
- `世界史探究`: 38-unit generation queue complete
- `公共`: 18-unit detailed MEXT-aligned queue defined; generated through item 12
- Public selector remains verified-only; the new batch is deliberately not registered.

## Latest completed GENERATE batch — 世界史探究 31–38 + 公共 1–12

No independent FACTCHECK was performed. Every new fact, learner sentence, key point and source claim remains `pending_factcheck`.

### 世界史探究 31–38

1. `world-history-wwii-regional-transformation` — 第二次世界大戦と諸地域の変容
2. `world-history-international-organizations-peace` — 国際機構の形成と平和への模索
3. `world-history-cold-war-decolonization` — 冷戦と脱植民地化
4. `world-history-high-growth-north-south` — 高度経済成長と南北問題
5. `world-history-cold-war-end-regional-integration` — 冷戦終結と地域統合
6. `world-history-globalization-inequality` — 経済のグローバル化と格差の是正
7. `world-history-science-technology-knowledge-society` — 科学技術の高度化と知識基盤社会
8. `world-history-global-issues-inquiry` — 地球世界の課題を歴史的に探究する

### 公共 1–12

9. `public-public-space-and-us` — 公共的な空間を作る私たち
10. `public-dignity-autonomy-diversity` — 個人の尊厳・自主自律・多様性
11. `public-happiness-justice-fairness` — 幸福・正義・公正
12. `public-basic-principles` — 公共的な空間の基本原理
13. `public-law-norms` — 法や規範の意義と役割
14. `public-contracts-consumer-rights` — 契約と消費者の権利・責任
15. `public-judicial-participation` — 司法参加の意義
16. `public-political-participation-public-opinion` — 政治参加と公正な世論の形成
17. `public-local-government` — 地方自治
18. `public-sovereignty-territory` — 国家主権と領土
19. `public-security-defense-international-contribution` — 安全保障・防衛と国際貢献
20. `public-career-employment-labor` — 職業選択・雇用と労働問題

The batch dataset is `subjects/social/worksheets/data/world-history-31-38-public-1-12.js`. It pushes the 20 units to `window.SOCIAL_WORKSHEET_UNITS` only when explicitly loaded. `subjects/social/worksheets/index.html` does not load this file, so none of the new units is learner-facing.

## 公共 queue authority

The ordered 18-unit practical queue is recorded in `20_EXECUTION_PLAN.md` and follows the current MEXT structure:

- A `公共の扉`
- B `自立した主体としてよりよい社会の形成に参画する私たち`
- C `持続可能な社会づくりの主体となる私たち`

Within B, the queue keeps the curriculum progression through law/norms and contracts, judicial participation, political participation/local government/state and international roles, then employment, public finance/taxation, social security, market economy, finance, and economic globalization. Queue splitting is practical worksheet granularity, not claimed as official MEXT sub-item numbering.

## Validation added

`tests/test_social_world_history_31_38_public_1_12.py` locks:

- exactly 20 new units;
- 世界史探究 queue numbers 31–38 in order;
- 公共 queue numbers 1–12 in order;
- expected slugs and `formalCourse` separation;
- at least two explicit cloze terms per unit and term/template consistency;
- the `pending_factcheck` generation contract;
- absence of the batch file and all 20 pending slugs from the public selector.

## Backlog / publication state

- Previous pending backlog: 131
- Newly generated: 20
- Current pending backlog: 151
- Verified-through marker remains unchanged.
- `subjects/social/worksheets/index.html` was deliberately not modified.

## Exact next run

Continue `公共` from queue item 13:

1. `public-public-finance-taxation` — 財政及び租税の役割
2. `public-social-security` — 少子高齢社会と社会保障
3. `public-market-economy-function-limits` — 市場経済の機能と限界
4. `public-finance-money` — 金融の働き
5. `public-economic-globalization-interdependence` — 経済のグローバル化と相互依存
6. `public-sustainable-society-inquiry` — 持続可能な社会づくりの課題探究

These six complete the current `公共` queue. In the same run, define the next MEXT-aligned high-school civics queue before generating further units, so the normal target remains 20 when safe. Do not count queue planning as generated units and do not switch to FACTCHECK automatically.

## Generation discipline

- Only explicit `terms` may become blanks; seeded generation must remain deterministic.
- Keep sheets low-density and original in wording.
- Use real historical/official source images only when useful; never AI-generate historical images.
- Treat generation-stage source/image records as provisional until later independent FACTCHECK.
- Reconcile latest `main` before shared writes and never roll back parallel progress.
- Before ending a run, update `STATUS.json` and this handoff with the exact next ungenerated item.
