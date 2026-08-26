# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use retired `social-worksheets/`.
- Mode: **GENERATE BACKLOG**
- Normal target: **20 newly generated units per run**
- FACTCHECK: manual/later batch only; do not alternate automatically
- Verified learner-facing coverage remains through `meiji-state-industrialization`
- Pending backlog count: **191 units**
- Junior-high history: generation complete
- Junior-high civics: generation complete
- `歴史総合`: generation complete
- `日本史探究`: 63-unit generation queue complete
- `世界史探究`: 38-unit generation queue complete
- `公共`: 18-unit generation queue complete
- `倫理`: 20-unit generation queue complete
- `政治・経済`: 22-unit MEXT-aligned practical queue defined; generated through item 14
- Public selector remains verified-only; the new batch is deliberately not registered.

## Latest completed GENERATE batch — 倫理 15–20 + 政治・経済 1–14

No independent FACTCHECK was performed. Every new fact, learner sentence, key point and source claim remains `pending_factcheck`.

### 倫理 15–20

1. `ethics-life-bioethics` — 生命と倫理
2. `ethics-nature-environment` — 自然・環境と倫理
3. `ethics-science-technology` — 科学技術と倫理
4. `ethics-welfare` — 福祉と倫理
5. `ethics-culture-religion-coexistence` — 文化・宗教と共生
6. `ethics-peace` — 平和と倫理

These six complete the current `倫理` queue.

### 政治・経済 1–14

7. `political-economy-politics-law` — 政治と法の意義・機能
8. `political-economy-rights-rule-of-law` — 基本的人権と法の支配
9. `political-economy-rights-obligations-private-law` — 権利と義務・私法
10. `political-economy-parliamentary-democracy` — 議会制民主主義と政治機構
11. `political-economy-elections-parties-participation` — 選挙・政党と政治参加
12. `political-economy-local-autonomy` — 地方自治
13. `political-economy-market-economic-activity` — 経済活動と市場
14. `political-economy-economic-actors-circular-flow` — 経済主体と経済循環
15. `political-economy-gdp-economic-growth` — 国民経済の大きさと経済成長
16. `political-economy-prices-business-cycle` — 物価と景気変動
17. `political-economy-fiscal-tax` — 財政と租税
18. `political-economy-finance-system` — 金融の働きと仕組み
19. `political-economy-market-failure-environment-consumer` — 市場の機能と限界
20. `political-economy-domestic-issues-inquiry` — 現代日本の政治・経済課題を探究する

The batch dataset is `subjects/social/worksheets/data/ethics-15-20-political-economy-1-14.js`. It pushes the 20 units to `window.SOCIAL_WORKSHEET_UNITS` only when explicitly loaded. `subjects/social/worksheets/index.html` does not load this file, so none of the new units is learner-facing.

## 政治・経済 queue authority

The practical 22-unit queue is recorded in `20_EXECUTION_PLAN.md`. It follows the current MEXT structure:

- A `現代日本における政治・経済の諸課題`
  - `(1) 現代日本の政治・経済`
  - `(2) 現代日本における政治・経済の諸課題の探究`
- B `グローバル化する国際社会の諸課題`
  - `(1) 現代の国際政治・経済`
  - `(2) グローバル化する国際社会の諸課題の探究`

The split is based on the concepts explicitly listed in the MEXT commentary: political/legal functions, rights and rule of law, parliamentary democracy and local autonomy, markets/economic circulation, national economy/economic growth, prices/business cycles, fiscal/tax, finance, then international law/sovereignty, international organizations, security, trade, exchange rates/balance of payments and international economic cooperation. Queue numbering is internal factory numbering, not official MEXT sub-item numbering.

## Validation added

`tests/test_social_ethics_15_20_political_economy_1_14.py` locks:

- exactly 20 new units;
- 倫理 queue numbers 15–20 in order;
- 政治・経済 queue numbers 1–14 in order;
- expected slugs and `formalCourse` separation;
- at least two explicit cloze terms per unit and term/template consistency;
- the `pending_factcheck` generation contract;
- absence of the batch file and all 20 pending slugs from the public selector.

## Backlog / publication state

- Previous pending backlog: 171
- Newly generated: 20
- Current pending backlog: 191
- Verified-through marker remains unchanged.
- `subjects/social/worksheets/index.html` was deliberately not modified.

## Exact next run

Continue `政治・経済` from queue item 15:

1. `political-economy-international-society-law` — 国際社会の変遷と国際法
2. `political-economy-human-rights-sovereignty-territory` — 人権・国家主権・領土
3. `political-economy-un-international-organizations` — 国際連合と国際機構
4. `political-economy-security-defense-contribution` — 安全保障・防衛と国際貢献
5. `political-economy-trade` — 貿易の現状と意義
6. `political-economy-exchange-balance-payments` — 為替相場と国際収支
7. `political-economy-international-cooperation-economic-institutions` — 国際協調と国際経済機関
8. `political-economy-global-issues-inquiry` — グローバル化する国際社会の課題探究

These eight complete the current `政治・経済` queue. If no further canonical social-studies course queue is defined after that, do not invent unrelated work merely to reach 20; first check the MASTER INSTRUCTIONS / production order and current MEXT course coverage, then record completion or define the next authorized queue only if it belongs to the project scope.

## Generation discipline

- Only explicit `terms` may become blanks; seeded generation must remain deterministic.
- Keep sheets low-density and original in wording.
- Use real historical/official source images only when useful; never AI-generate historical images.
- Treat generation-stage source/image records as provisional until later independent FACTCHECK.
- Reconcile latest `main` before shared writes and never roll back parallel progress.
- Before ending a run, update `STATUS.json` and this handoff with the exact next ungenerated item.
