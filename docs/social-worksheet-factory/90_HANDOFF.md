# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use retired `social-worksheets/`.
- Mode: **GENERATE BACKLOG**
- Normal target: **20 newly generated units per run**
- FACTCHECK: manual/later batch only; do not alternate automatically
- Verified learner-facing coverage remains through `meiji-state-industrialization`
- Pending backlog count: **71 units**
- Junior-high history: generation complete
- Junior-high civics: generation complete
- `歴史総合`: generation complete
- `日本史探究`: generated through queue item 33, `japanese-history-shokuho-unification`
- Public selector remains verified-only; the new batch is deliberately not registered.

## Latest completed GENERATE batch — 20 units

The batch crossed the B→C boundary exactly as planned. No independent FACTCHECK was performed. Every fact, learner sentence, key point, timeline entry, and source claim remains `pending_factcheck`.

1. `japanese-history-medieval-transition` — 中世への転換：院政・武士の政治進出
2. `japanese-history-landholding-transition` — 中世への転換：土地支配の変容
3. `japanese-history-medieval-sources-outlook` — 歴史資料と中世の展望
4. `japanese-history-kamakura-shogunate` — 鎌倉幕府の成立と公武関係
5. `japanese-history-gokenin-landholding` — 御家人制と土地支配
6. `japanese-history-song-exchange-medieval-economy` — 宋との交流と中世経済
7. `japanese-history-mongol-invasions-kamakura-change` — 元寇と鎌倉幕府の変容
8. `japanese-history-kamakura-new-buddhism-culture` — 鎌倉新仏教と中世文化
9. `japanese-history-kenmu-nanbokucho` — 建武政権・南北朝内乱
10. `japanese-history-muromachi-shogunate-shugo` — 室町幕府と守護大名
11. `japanese-history-ming-trade-east-asia` — 日明貿易と東アジア
12. `japanese-history-ryukyu-kingdom-exchange` — 琉球王国と列島周辺の交流
13. `japanese-history-agriculture-commerce-distribution` — 農業・商工業・流通の発達
14. `japanese-history-village-city-autonomy` — 村落・都市の自立
15. `japanese-history-onin-war-sengoku-daimyo` — 応仁の乱と戦国大名
16. `japanese-history-muromachi-regional-culture` — 室町文化・地域文化・文化の融合
17. `japanese-history-sengoku-unification-transition` — 近世への転換：戦国社会と統一
18. `japanese-history-european-arrival-global-links` — ヨーロッパ人来航と世界の結び付き
19. `japanese-history-early-modern-sources-outlook` — 歴史資料と近世の展望
20. `japanese-history-shokuho-unification` — 織豊政権と統一事業

The implementation is stored as one pending batch dataset, `subjects/social/worksheets/data/japanese-history-medieval-earlymodern-14-33.js`. It creates 20 separate structured unit objects and pushes them to `window.SOCIAL_WORKSHEET_UNITS` only when the file is explicitly loaded. Since `index.html` does not load it, the batch is not learner-facing.

## Validation added

`tests/test_social_japanese_history_batch_14_33.py` locks:

- exact queue numbers 14–33 and the 20 expected unit slugs;
- explicit cloze terms appearing in each sentence template;
- `日本史探究` / `pending_factcheck` generation contract;
- absence of the batch file and all 20 pending slugs from the public selector.

## Backlog / publication state

- Previous pending backlog: 51
- Newly generated: 20
- Current pending backlog: 71
- Verified-through marker remains unchanged.
- `subjects/social/worksheets/index.html` was deliberately not modified.

## Exact next run

Continue `日本史探究` C `近世の日本と世界` from queue item 34:

1. `japanese-history-land-survey-sword-hunt` — 検地・刀狩と社会秩序
2. 江戸幕府の成立と幕藩体制
3. 大名統制と朝廷・寺社
4. 近世の対外関係と四つの口
5. 身分・村・町と近世社会
6. 農業・商品生産・交通の発達
7. 元禄文化
8. 幕府財政と享保の改革
9. 田沼政治と寛政の改革
10. 化政文化と教育・学問
11. 社会変動と天保の改革
12. ロシア・欧米船接近と海防
13. 近代への転換：開国と幕末政治
14. 明治維新と新政府
15. 近代国家形成と自由民権運動
16. 大日本帝国憲法と議会政治
17. 条約改正・日清戦争
18. 日露戦争と帝国主義
19. 近代産業・社会・文化
20. 第一次世界大戦と日本

Cross C→D if needed. Keep all new work `pending_factcheck`, append to the backlog, and do not publish it.

## Generation discipline

- Only explicit `terms` may become blanks; seeded generation must remain deterministic.
- Keep sheets low-density and original in wording.
- Use real historical/official source images only when useful; never AI-generate historical images.
- Treat generation-stage source/image records as provisional until later independent FACTCHECK.
- Reconcile latest `main` before shared writes and never roll back parallel progress.
- Before ending a run, update `STATUS.json` and this handoff with the exact next ungenerated item.
