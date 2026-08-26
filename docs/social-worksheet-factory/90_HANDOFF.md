# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use retired `social-worksheets/`.
- GENERATE scope defined by `00_MASTER_INSTRUCTIONS.md` is now **complete**.
- FACTCHECK remains manual/later batch only; do not start it automatically.
- Verified learner-facing coverage remains through `meiji-state-industrialization`.
- Pending backlog count: **199 units**.
- Public selector remains verified-only; pending batches are deliberately not registered.

## Completed generation queues

- Junior-high history: complete
- Junior-high civics: complete
- `歴史総合`: 19-unit queue complete
- `日本史探究`: 63-unit queue complete
- `世界史探究`: 38-unit queue complete
- `公共`: 18-unit queue complete
- `倫理`: 20-unit queue complete
- `政治・経済`: 22-unit queue complete

The master production order does not define an additional geography or other social-studies queue after these courses. Do not invent unrelated units merely to keep GENERATE running.

## Final GENERATE batch — 政治・経済 15–22

No independent FACTCHECK was performed. Every new fact, learner sentence and key point remains `pending_factcheck`.

1. `political-economy-international-society-law` — 国際社会の変遷と国際法
2. `political-economy-human-rights-sovereignty-territory` — 人権・国家主権・領土
3. `political-economy-un-international-organizations` — 国際連合と国際機構
4. `political-economy-security-defense-contribution` — 安全保障・防衛と国際貢献
5. `political-economy-trade` — 貿易の現状と意義
6. `political-economy-exchange-balance-payments` — 為替相場と国際収支
7. `political-economy-international-cooperation-economic-institutions` — 国際協調と国際経済機関
8. `political-economy-global-issues-inquiry` — グローバル化する国際社会の課題探究

The batch dataset is `subjects/social/worksheets/data/political-economy-15-22.js`. It only pushes units when explicitly loaded. `subjects/social/worksheets/index.html` is unchanged, so these units remain unpublished.

## Validation

`tests/test_social_political_economy_15_22.py` locks:

- exactly eight final units;
- queue numbers 15–22 in order;
- expected slugs and `formalCourse: 政治・経済`;
- at least two explicit cloze terms per unit and term/template consistency;
- the `pending_factcheck` generation contract;
- absence of the batch file and all eight slugs from the public selector.

## Backlog / publication state

- Previous pending backlog: 191
- Newly generated: 8
- Current pending backlog: 199
- Verified-through marker remains unchanged.
- No pending batch was added to the public selector.

## Exact next social action

There is **no automatic GENERATE continuation**. The next social action is only an explicitly requested independent FACTCHECK batch over `STATUS.json.unverified_backlog`. Until that is requested, leave the 199 pending units unpublished.

## Generation discipline retained

- Only explicit `terms` may become blanks; seeded generation must remain deterministic.
- Keep sheets low-density and original in wording.
- Use real historical/official source images only when useful; never AI-generate historical images.
- Treat generation-stage source/image records as provisional until independent FACTCHECK.
- Reconcile latest `main` before shared writes and never roll back parallel progress.
