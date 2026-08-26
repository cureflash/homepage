# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use the retired root path `social-worksheets/`.
- Mode: GENERATE BACKLOG
- Normal target: **20 newly generated units per run**
- Fact-check policy: manual/later batch; do not alternate automatically
- Verified learner-facing coverage remains through: Meiji state / industrialization
- Pending backlog count: 31 units
- Junior-high history generation queue: complete
- Junior-high civics generation queue: complete
- Current high-school course: `歴史総合`
- Next generation start: C(4) `国際秩序の変化や大衆化と現代的な諸課題`
- Public selector remains verified-only; pending datasets must not be registered there.

## Throughput policy — 20 units per run

The previous 10-unit target is retired. Normal scheduled runs now target **20 sequential generated worksheet units**.

Rules:

1. Resume from the first ungenerated curriculum item.
2. Generate 20 new units before ending a normal run whenever there is no genuine blocker.
3. Crossing a course or school-stage boundary is expected when needed to reach 20.
4. If the next high-school formal course does not yet have a detailed production queue, expand that queue first from current MEXT curriculum/commentary, then continue generation in the same run.
5. Queue planning does **not** count as one of the 20 worksheet units.
6. Keep every new fact, sentence, key-point/timeline claim and image record `pending_factcheck`.
7. Append new unit IDs to `STATUS.json.unverified_backlog`.
8. Do not add pending units to the public selector.
9. Do not automatically FACTCHECK; independent verification remains a later explicit batch.
10. Only a real technical/source blocker justifies stopping below 20, and the blocker must be written precisely into this handoff.

## Latest completed GENERATE batch — 10 `歴史総合` units

Latest `main` already contains these generated units. They are all `pending_factcheck`; do not duplicate them.

1. B(1) `近代化への問い` — `history-comprehensive-modernization-questions`
2. B(2)-a `18世紀のアジアの経済と社会` — `history-comprehensive-18c-asia-economy-society`
3. B(2)-b `産業革命・世界市場・中国の開港・日本の開国` — `history-comprehensive-industrial-revolution-world-market-opening`
4. B(3) `国民国家と明治維新` — `history-comprehensive-nation-state-meiji-restoration`
5. B(4) `近代化と現代的な諸課題` — `history-comprehensive-modernization-contemporary-issues`
6. C(1) `国際秩序の変化や大衆化への問い` — `history-comprehensive-massification-questions`
7. C(2)-a `第一次世界大戦と国際協調体制` — `history-comprehensive-wwi-international-cooperation`
8. C(2)-b `大衆社会の形成と社会参加の拡大` — `history-comprehensive-mass-society-participation`
9. C(3)-a `世界恐慌・国際協調体制の動揺` — `history-comprehensive-world-depression-cooperation-crisis`
10. C(3)-b `第二次世界大戦と戦後国際秩序` — `history-comprehensive-wwii-postwar-order`

These ten raised the accumulated unverified backlog to 31 units. The datasets passed generation-stage syntax/structure validation noted in the prior handoff, but they remain unverified and learner-facing publication is unchanged.

## Exact next 20-unit run

Finish the remaining seven `歴史総合` units first:

1. C(4) 国際秩序の変化や大衆化と現代的な諸課題
2. D(1) グローバル化への問い
3. D(2)-a 冷戦と植民地独立
4. D(2)-b 高度経済成長・国際秩序の変容
5. D(3)-a 冷戦終結・地域統合
6. D(3)-b 市場経済の変容・情報通信・グローバル化
7. D(4) 現代的な諸課題の形成と展望

After unit 7, `歴史総合` generation is complete. Continue immediately into `日本史探究` within the same run:

- expand `日本史探究` into an ordered production queue using the current MEXT High School Course of Study Commentary for Geography and History;
- preserve formal MEXT section/subsection metadata and `formalCourse: 日本史探究`;
- do not assign the formal course to a fixed school year;
- generate the **first 13 sequential `日本史探究` worksheet units** from the newly recorded queue.

That produces the required total of 20 units for the run: 7 remaining `歴史総合` + 13 `日本史探究`.

If MEXT's structure is too broad for low-density A4 sheets, split broad middle sections into sensible worksheet-sized subunits, but record the formal MEXT parent placement in every dataset. Queue-definition work does not count toward the 13 generated `日本史探究` units.

## Backlog expectation

Current backlog: 31 units. If the next 20-unit run completes before any explicit FACTCHECK, expected backlog becomes 51 units.

All new material remains `pending_factcheck`. Later, when the user requests FACTCHECK, independently reopen MEXT and authoritative primary/curatorial/government sources, verify exact image provenance/licenses, correct or reject unsupported claims, and publish only units that pass.

## Generator / validation discipline

- Only explicit `terms` may become blanks.
- Seeded generation must remain deterministic.
- Explanation sheets stay low-density and A4-oriented.
- Use real historical/official source images where useful; never AI-generated historical images.
- Record generation-stage image source/license candidates, then independently recheck them before publication.
- Reconcile latest `main` before shared writes.
- Before ending every run, update `STATUS.json` and this handoff with the generated unit list, backlog count and exact next ungenerated curriculum item.
