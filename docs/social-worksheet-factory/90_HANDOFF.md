# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use retired `social-worksheets/`.
- Mode: **GENERATE BACKLOG**
- Normal target: **20 newly generated units per run**
- FACTCHECK: manual/later batch only; do not alternate automatically
- Verified learner-facing coverage remains through `meiji-state-industrialization`
- Pending backlog count: **131 units**
- Junior-high history: generation complete
- Junior-high civics: generation complete
- `歴史総合`: generation complete
- `日本史探究`: 63-unit generation queue complete
- `世界史探究`: generated through queue item 30, `world-history-depression-fascism`
- Public selector remains verified-only; the new batch is deliberately not registered.

## Latest completed GENERATE batch — 世界史探究 11–30

No independent FACTCHECK was performed. Every new fact, learner sentence, key point and source claim remains `pending_factcheck`.

1. `world-history-exchange-reorganization-questions` — 諸地域の交流・再編への問い
2. `world-history-islamic-expansion-trade` — イスラーム世界の拡大と交易
3. `world-history-mongol-empire-eurasian-exchange` — モンゴル帝国とユーラシア交流
4. `world-history-maritime-asia-trade-networks` — 海域アジアの交易ネットワーク
5. `world-history-ming-qing-east-asia-reorganization` — 明・清と東アジアの再編
6. `world-history-ottoman-safavid-mughal-empires` — オスマン・サファヴィー・ムガル帝国
7. `world-history-renaissance-reformation` — ルネサンスと宗教改革
8. `world-history-age-of-exploration-atlantic-world` — 大航海時代と大西洋世界
9. `world-history-sovereign-state-system-international-relations` — 主権国家体制と国際関係
10. `world-history-integration-transformation-questions` — 諸地域の結合・変容への問い
11. `world-history-industrial-revolution-world-market` — 産業革命と世界市場
12. `world-history-american-french-revolutions` — アメリカ独立とフランス革命
13. `world-history-nation-states-19c-europe` — 国民国家と19世紀ヨーロッパ
14. `world-history-latin-american-independence` — ラテンアメリカ諸国の独立
15. `world-history-asia-western-expansion` — アジア諸地域と欧米列強の進出
16. `world-history-imperialism-world-partition` — 帝国主義と列強の世界分割
17. `world-history-asian-african-national-movements` — アジア・アフリカの民族運動
18. `world-history-wwi-total-war` — 第一次世界大戦と総力戦
19. `world-history-russian-revolution-interwar-order` — ロシア革命と戦間期の国際秩序
20. `world-history-depression-fascism` — 世界恐慌とファシズム

The batch dataset is `subjects/social/worksheets/data/world-history-11-30.js`. It defines 20 separate structured `世界史探究` units and pushes them to `window.SOCIAL_WORKSHEET_UNITS` only when the file is explicitly loaded. `subjects/social/worksheets/index.html` does not load this file, so none of the batch is learner-facing.

## Validation added

`tests/test_social_world_history_batch_11_30.py` locks:

- exactly 20 new units;
- queue numbers 11–30 in order;
- the expected 20 slugs;
- `formalCourse: 世界史探究` for every unit;
- at least two explicit cloze terms per unit and term/template consistency;
- the `pending_factcheck` generation contract;
- absence of the batch file and all 20 pending slugs from the public selector.

## Backlog / publication state

- Previous pending backlog: 111
- Newly generated: 20
- Current pending backlog: 131
- Verified-through marker remains unchanged.
- `subjects/social/worksheets/index.html` was deliberately not modified.

## Exact next run

Continue `世界史探究` from queue item 31:

1. `world-history-wwii-regional-transformation` — 第二次世界大戦と諸地域の変容
2. 国際機構の形成と平和への模索
3. 冷戦と脱植民地化
4. 高度経済成長と南北問題
5. 冷戦終結と地域統合
6. 経済のグローバル化と格差の是正
7. 科学技術の高度化と知識基盤社会
8. 地球世界の課題を歴史的に探究する

That completes the current 38-unit `世界史探究` queue. In the same run, define the ordered `公共` queue from the current MEXT curriculum/commentary, then continue generating sequential `公共` units until the normal 20-unit target is reached. Queue planning itself does not count toward the 20 generated units. Do not switch to FACTCHECK automatically.

## Generation discipline

- Only explicit `terms` may become blanks; seeded generation must remain deterministic.
- Keep sheets low-density and original in wording.
- Use real historical/official source images only when useful; never AI-generate historical images.
- Treat generation-stage source/image records as provisional until later independent FACTCHECK.
- Reconcile latest `main` before shared writes and never roll back parallel progress.
- Before ending a run, update `STATUS.json` and this handoff with the exact next ungenerated item.
