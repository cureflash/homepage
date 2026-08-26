# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use retired `social-worksheets/`.
- Mode: **GENERATE BACKLOG**
- Normal target: **20 newly generated units per run**
- FACTCHECK: manual/later batch only; do not alternate automatically
- Verified learner-facing coverage remains through `meiji-state-industrialization`
- Pending backlog count: **171 units**
- Junior-high history: generation complete
- Junior-high civics: generation complete
- `歴史総合`: generation complete
- `日本史探究`: 63-unit generation queue complete
- `世界史探究`: 38-unit generation queue complete
- `公共`: 18-unit generation queue complete
- `倫理`: 20-unit detailed MEXT-aligned queue defined; generated through item 14
- Public selector remains verified-only; the new batch is deliberately not registered.

## Latest completed GENERATE batch — 公共 13–18 + 倫理 1–14

No independent FACTCHECK was performed. Every new fact, learner sentence, key point and source claim remains `pending_factcheck`.

### 公共 13–18

1. `public-public-finance-taxation` — 財政及び租税の役割
2. `public-social-security` — 少子高齢社会と社会保障
3. `public-market-economy-function-limits` — 市場経済の機能と限界
4. `public-finance-money` — 金融の働き
5. `public-economic-globalization-interdependence` — 経済のグローバル化と相互依存
6. `public-sustainable-society-inquiry` — 持続可能な社会づくりの課題探究

These six complete the current `公共` queue.

### 倫理 1–14

7. `ethics-mind-individuality-emotion` — 心の在り方と自己形成
8. `ethics-cognition-development` — 認知と発達
9. `ethics-happiness-love` — 幸福と愛
10. `ethics-virtue-good-life` — 徳とよく生きること
11. `ethics-religion-meaning` — 宗教の意義
12. `ethics-art-meaning` — 芸術の意義
13. `ethics-good-justice` — 善と正義
14. `ethics-duty-responsibility` — 義務と責任
15. `ethics-truth-knowledge` — 真理と知
16. `ethics-existence-world` — 存在と世界
17. `ethics-reading-primary-thought-sources` — 先哲の原典を読む
18. `ethics-japan-climate-human-view` — 日本の風土と人間観
19. `ethics-japan-religion-foreign-thought` — 日本の宗教観と外来思想の受容
20. `ethics-japanese-identity-global-society` — 国際社会に生きる日本人としての自覚

The batch dataset is `subjects/social/worksheets/data/public-13-18-ethics-1-14.js`. It pushes the 20 units to `window.SOCIAL_WORKSHEET_UNITS` only when explicitly loaded. `subjects/social/worksheets/index.html` does not load this file, so none of the new units is learner-facing.

## 倫理 queue authority

The ordered practical queue is recorded in `20_EXECUTION_PLAN.md` and follows the current MEXT structure:

- A `現代に生きる自己の課題と人間としての在り方生き方`
- B `現代の諸課題と倫理`

The practical split preserves the curriculum's conceptual clusters while keeping each worksheet low-density. Queue numbering is internal factory numbering, not claimed as official MEXT sub-item numbering.

## Validation added

`tests/test_social_public_13_18_ethics_1_14.py` locks:

- exactly 20 new units;
- 公共 queue numbers 13–18 in order;
- 倫理 queue numbers 1–14 in order;
- expected slugs and `formalCourse` separation;
- at least two explicit cloze terms per unit and term/template consistency;
- the `pending_factcheck` generation contract;
- absence of the batch file and all 20 pending slugs from the public selector.

## Backlog / publication state

- Previous pending backlog: 151
- Newly generated: 20
- Current pending backlog: 171
- Verified-through marker remains unchanged.
- `subjects/social/worksheets/index.html` was deliberately not modified.

## Exact next run

Continue `倫理` from queue item 15:

1. `ethics-life-bioethics` — 生命と倫理
2. `ethics-nature-environment` — 自然・環境と倫理
3. `ethics-science-technology` — 科学技術と倫理
4. `ethics-welfare` — 福祉と倫理
5. `ethics-culture-religion-coexistence` — 文化・宗教と共生
6. `ethics-peace` — 平和と倫理

These six complete the current `倫理` queue. In the same run, define the next current MEXT-aligned `政治・経済` queue before generating further units, so the normal target remains 20 when safe. Do not count queue planning as generated units and do not switch to FACTCHECK automatically.

## Generation discipline

- Only explicit `terms` may become blanks; seeded generation must remain deterministic.
- Keep sheets low-density and original in wording.
- Use real historical/official source images only when useful; never AI-generate historical images.
- Treat generation-stage source/image records as provisional until later independent FACTCHECK.
- Reconcile latest `main` before shared writes and never roll back parallel progress.
- Before ending a run, update `STATUS.json` and this handoff with the exact next ungenerated item.
