# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use retired `social-worksheets/`.
- Mode: **GENERATE BACKLOG**
- Normal target: **20 newly generated units per run**
- FACTCHECK: manual/later batch only; do not alternate automatically
- Verified learner-facing coverage remains through `meiji-state-industrialization`
- Pending backlog count: **91 units**
- Junior-high history: generation complete
- Junior-high civics: generation complete
- `歴史総合`: generation complete
- `日本史探究`: generated through queue item 53, `japanese-history-world-war-one`
- Public selector remains verified-only; the new batch is deliberately not registered.

## Latest completed GENERATE batch — 20 units

No independent FACTCHECK was performed. Every new fact, learner sentence, key point and source claim remains `pending_factcheck`.

1. `japanese-history-land-survey-sword-hunt` — 検地・刀狩と社会秩序
2. `japanese-history-edo-shogunate-bakuhan` — 江戸幕府の成立と幕藩体制
3. `japanese-history-daimyo-court-temples` — 大名統制と朝廷・寺社
4. `japanese-history-foreign-relations-four-gates` — 近世の対外関係と四つの口
5. `japanese-history-status-village-town-society` — 身分・村・町と近世社会
6. `japanese-history-agriculture-goods-transport` — 農業・商品生産・交通の発達
7. `japanese-history-genroku-culture` — 元禄文化
8. `japanese-history-shogunate-finance-kyoho` — 幕府財政と享保の改革
9. `japanese-history-tanuma-kansei-reforms` — 田沼政治と寛政の改革
10. `japanese-history-kasei-culture-education-learning` — 化政文化と教育・学問
11. `japanese-history-social-change-tenpo-reforms` — 社会変動と天保の改革
12. `japanese-history-russia-western-ships-coastal-defense` — ロシア・欧米船接近と海防
13. `japanese-history-opening-bakumatsu-transition` — 近代への転換：開国と幕末政治
14. `japanese-history-meiji-restoration-new-government` — 明治維新と新政府
15. `japanese-history-modern-state-freedom-rights` — 近代国家形成と自由民権運動
16. `japanese-history-meiji-constitution-diet` — 大日本帝国憲法と議会政治
17. `japanese-history-treaty-revision-sino-japanese-war` — 条約改正・日清戦争
18. `japanese-history-russo-japanese-war-imperialism` — 日露戦争と帝国主義
19. `japanese-history-modern-industry-society-culture` — 近代産業・社会・文化
20. `japanese-history-world-war-one` — 第一次世界大戦と日本

The implementation is stored as one pending batch dataset, `subjects/social/worksheets/data/japanese-history-earlymodern-modern-34-53.js`. It creates 20 separate structured unit objects and pushes them to `window.SOCIAL_WORKSHEET_UNITS` only when explicitly loaded. `index.html` does not load it, so none of the batch is learner-facing.

## Validation added

`tests/test_social_japanese_history_batch_34_53.py` locks:

- exact queue numbers 34–53 and the 20 expected unit slugs;
- at least two explicit cloze terms per unit and term/template consistency;
- `日本史探究` / `pending_factcheck` generation contract;
- absence of the batch file and all 20 pending slugs from the public selector.

## Backlog / publication state

- Previous pending backlog: 71
- Newly generated: 20
- Current pending backlog: 91
- Verified-through marker remains unchanged.
- `subjects/social/worksheets/index.html` was deliberately not modified.

## Exact next run

Continue `日本史探究` D `近現代の地域・日本と世界` from queue item 54:

1. `japanese-history-taisho-democracy-mass-society` — 大正デモクラシーと大衆社会
2. 世界恐慌と政党政治の動揺
3. 満州事変から日中戦争
4. アジア太平洋戦争と戦時社会
5. 敗戦・占領と戦後改革
6. 冷戦・講和・国際社会復帰
7. 高度経済成長と社会変容
8. 1970年代以降の経済・政治・社会
9. 冷戦終結とグローバル化
10. 現代日本の課題を歴史的に探究する

After queue item 63, define the ordered `世界史探究` queue from the current MEXT curriculum/commentary, then continue generation in the same run if needed to reach the 20-unit target. Queue planning itself does not count toward the target.

## Generation discipline

- Only explicit `terms` may become blanks; seeded generation must remain deterministic.
- Keep sheets low-density and original in wording.
- Use real historical/official source images only when useful; never AI-generate historical images.
- Treat generation-stage source/image records as provisional until later independent FACTCHECK.
- Reconcile latest `main` before shared writes and never roll back parallel progress.
- Before ending a run, update `STATUS.json` and this handoff with the exact next ungenerated item.
