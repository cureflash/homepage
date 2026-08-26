# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use retired `social-worksheets/`.
- GENERATE scope defined by `00_MASTER_INSTRUCTIONS.md` is **complete**.
- FACTCHECK is manual batch work only.
- Junior-high generated coverage is fully independently verified.
- High-school `歴史総合` is now **fully independently verified and learner-facing: 19 / 19 units**.
- Pending backlog count: **161 units**.
- Public selector remains verified-only.

## FACTCHECK progress this session

- Batch 01: 5 modern junior-high history units — `FACTCHECK_BATCH_01.md`
- Batch 02: 6 constitution / three-powers junior-high civics units — `FACTCHECK_BATCH_02.md`
- Batch 03: 8 remaining junior-high civics units — `FACTCHECK_BATCH_03.md`
- Batch 04: 7 `歴史総合` A / B units — `FACTCHECK_BATCH_04.md`
- Batch 05: 6 `歴史総合` C units — `FACTCHECK_BATCH_05.md`
- Batch 06: 6 `歴史総合` D units — `FACTCHECK_BATCH_06.md`

Total independently verified this session: **38 units**. Pending backlog moved from **199 to 161**.

## Batch 06 — `歴史総合` D「グローバル化と私たち」

Verified and published:

1. `history-comprehensive-globalization-questions` — グローバル化への問い
2. `history-comprehensive-cold-war-decolonization` — 冷戦・脱植民地化と国際政治の変容
3. `history-comprehensive-high-growth-order-change` — 世界経済の拡大と日本の高度経済成長
4. `history-comprehensive-cold-war-end-regional-integration` — 冷戦終結・民主化と地域統合
5. `history-comprehensive-market-information-globalization` — 市場経済・情報通信とグローバル化
6. `history-comprehensive-contemporary-issues-outlook` — 現代的な諸課題の形成と展望

The current MEXT high-school Geography/History commentary is the curriculum authority for this batch. Generated text was not treated as evidence.

## Corrections made during Batch 06

- `globalization-questions`: aligned D(1) to MEXT's full inquiry examples: 冷戦と国際関係、人と資本の移動、高度情報通信、食料と人口、資源・エネルギーと地球環境、感染症、多様な人々の共存.
- `cold-war-decolonization`: expanded the unit beyond a simple US-Soviet confrontation to include decolonization, Asian/African nation-building, regional conflicts, military expansion and nuclear-arms management.
- `high-growth-order-change`: aligned the world-economy strand to Western European / Southeast Asian regional cooperation, planned economies, Japanese high economic growth and associated environmental/social change.
- `cold-war-end-regional-integration`: aligned the post-Cold-War international-politics strand to Cold War termination, democratization, regional integration, diversified regional-conflict causes and responses including UN/PKO activity.
- `market-information-globalization`: added MEXT's required oil crises, Asian economic development, market opening/economic liberalization and information-communications development. The unit now treats achievements and problems of market globalization rather than only cross-border flows.
- `contemporary-issues-outlook`: converted a generic summary into the required capstone inquiry. Students set their own theme with a sustainable society in view, use evidence, compare/relate Japan and other countries/regions, and consider historical background, causes, results and effects.

## Publication / backlog state

- All 19 generated `歴史総合` units are now `verified` and loaded by `subjects/social/worksheets/index.html`.
- Batch 06 contains no images, so no image-license decision was required.
- `pending_factcheck_count`: **161**.
- The next pending unit is not public.

## Exact next social action

The next backlog item is the first `日本史探究` unit:

1. `japanese-history-paleolithic-environment`
2. `japanese-history-jomon-society`
3. `japanese-history-yayoi-agriculture`
4. `japanese-history-yayoi-polities-exchange`
5. `japanese-history-kofun-yamato`
6. `japanese-history-ancient-sources-outlook`

Continue sequentially from `日本史探究` only when FACTCHECK is explicitly requested. GENERATE is finished; do not invent additional generation work.

## Factcheck discipline retained

- Treat every pending fact, learner sentence, key point/timeline claim, source record and image claim as untrusted until independently reopened and checked.
- Prefer current MEXT commentary for formal curriculum placement and official/primary archives or institutions for specific historical facts.
- Correct or reject unsupported wording rather than preserving generated text for convenience.
- Verify exact image identity, provenance and reuse terms before learner-facing publication.
- Only verified units may be added to the public selector and removed from `unverified_backlog`.
- Reconcile latest `main` before shared writes and never roll back parallel progress.
