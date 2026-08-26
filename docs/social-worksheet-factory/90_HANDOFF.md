# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use retired `social-worksheets/`.
- Mode: **GENERATE BACKLOG**
- Normal target: **20 newly generated units per run**
- FACTCHECK: manual/later batch only; do not alternate automatically
- Verified learner-facing coverage remains through `meiji-state-industrialization`
- Pending backlog count: **111 units**
- Junior-high history: generation complete
- Junior-high civics: generation complete
- `歴史総合`: generation complete
- `日本史探究`: 63-unit generation queue complete
- `世界史探究`: generated through queue item 10, `world-history-west-asia-mediterranean-characteristics`
- Public selector remains verified-only; the new batch is deliberately not registered.

## Latest completed GENERATE batch — 20 units

No independent FACTCHECK was performed. Every new fact, learner sentence, key point and source claim remains `pending_factcheck`.

### 日本史探究 54–63

1. `japanese-history-taisho-democracy-mass-society` — 大正デモクラシーと大衆社会
2. `japanese-history-depression-party-politics-crisis` — 世界恐慌と政党政治の動揺
3. `japanese-history-manchurian-incident-sino-japanese-war` — 満州事変から日中戦争
4. `japanese-history-asia-pacific-war-wartime-society` — アジア太平洋戦争と戦時社会
5. `japanese-history-defeat-occupation-postwar-reforms` — 敗戦・占領と戦後改革
6. `japanese-history-cold-war-peace-international-return` — 冷戦・講和・国際社会復帰
7. `japanese-history-high-growth-social-change` — 高度経済成長と社会変容
8. `japanese-history-post-1970s-economy-politics-society` — 1970年代以降の経済・政治・社会
9. `japanese-history-cold-war-end-globalization` — 冷戦終結とグローバル化
10. `japanese-history-contemporary-issues-inquiry` — 現代日本の課題を歴史的に探究する

### 世界史探究 1–10

11. `world-history-earth-environment-human-history` — 地球環境から見る人類の歴史
12. `world-history-daily-life-global-connections` — 日常生活から見る世界の歴史
13. `world-history-regional-characteristics-questions` — 諸地域の歴史的特質への問い
14. `world-history-agriculture-pastoralism-civilizations` — 農耕・牧畜と古代文明
15. `world-history-orient-civilizations` — オリエント文明
16. `world-history-indus-civilization` — インダス文明
17. `world-history-chinese-civilization` — 中華文明
18. `world-history-east-asia-central-eurasia` — 東アジアと中央ユーラシア
19. `world-history-south-southeast-asia-characteristics` — 南アジアと東南アジアの歴史的特質
20. `world-history-west-asia-mediterranean-characteristics` — 西アジアと地中海周辺の歴史的特質

The implementation is stored as one pending batch dataset, `subjects/social/worksheets/data/japanese-history-modern-54-63-world-history-1-10.js`. It creates 20 separate structured unit objects and pushes them to `window.SOCIAL_WORKSHEET_UNITS` only when explicitly loaded. `index.html` does not load it, so none of the batch is learner-facing.

## World History Advanced queue planning

Before generating the first `世界史探究` units, the detailed queue was defined from the current MEXT Course of Study commentary. The queue preserves the official large-section order:

1. A `世界史へのまなざし`
2. B `諸地域の歴史的特質の形成`
3. C `諸地域の交流・再編`
4. D `諸地域の結合・変容`
5. E `地球世界の課題`

The practical 38-unit split in `20_EXECUTION_PLAN.md` is a worksheet-production subdivision, not a claim that MEXT prescribes those exact 38 numbered subunits.

## Validation added

`tests/test_social_japanese_world_history_batch_54_63_1_10.py` locks:

- exactly 20 new units;
- Japanese History Advanced queue numbers 54–63 and the expected ten slugs;
- World History Advanced queue numbers 1–10 and the expected ten slugs;
- correct `formalCourse` separation between `日本史探究` and `世界史探究`;
- at least two explicit cloze terms per unit and term/template consistency;
- `pending_factcheck` generation contract;
- absence of the batch file and all 20 pending slugs from the public selector.

## Backlog / publication state

- Previous pending backlog: 91
- Newly generated: 20
- Current pending backlog: 111
- Verified-through marker remains unchanged.
- `subjects/social/worksheets/index.html` was deliberately not modified.

## Exact next run

Continue `世界史探究` from queue item 11:

1. `world-history-exchange-reorganization-questions` — 諸地域の交流・再編への問い
2. イスラーム世界の拡大と交易
3. モンゴル帝国とユーラシア交流
4. 海域アジアの交易ネットワーク
5. 明・清と東アジアの再編
6. オスマン・サファヴィー・ムガル帝国
7. ルネサンスと宗教改革
8. 大航海時代と大西洋世界
9. 主権国家体制と国際関係
10. 諸地域の結合・変容への問い

Continue sequentially into the D queue as needed to reach the normal 20-unit target. Do not switch to FACTCHECK automatically.

## Generation discipline

- Only explicit `terms` may become blanks; seeded generation must remain deterministic.
- Keep sheets low-density and original in wording.
- Use real historical/official source images only when useful; never AI-generate historical images.
- Treat generation-stage source/image records as provisional until later independent FACTCHECK.
- Reconcile latest `main` before shared writes and never roll back parallel progress.
- Before ending a run, update `STATUS.json` and this handoff with the exact next ungenerated item.
