# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use retired `social-worksheets/`.
- GENERATE scope defined by `00_MASTER_INSTRUCTIONS.md` is complete.
- FACTCHECK is manual batch work only.
- Junior-high generated coverage is fully independently verified.
- High-school `歴史総合` is fully independently verified and learner-facing: 19 / 19 units.
- `日本史探究` FACTCHECK is verified through C(3) `japanese-history-shogunate-finance-kyoho`.
- Pending backlog count: 120 units.
- Public selector remains verified-only.

## FACTCHECK progress this session

- Batch 01: 5 modern junior-high history units — `FACTCHECK_BATCH_01.md`
- Batch 02: 6 constitution / three-powers junior-high civics units — `FACTCHECK_BATCH_02.md`
- Batch 03: 8 remaining junior-high civics units — `FACTCHECK_BATCH_03.md`
- Batch 04: 7 `歴史総合` A / B units — `FACTCHECK_BATCH_04.md`
- Batch 05: 6 `歴史総合` C units — `FACTCHECK_BATCH_05.md`
- Batch 06: 6 `歴史総合` D units — `FACTCHECK_BATCH_06.md`
- Batch 07: 6 opening `日本史探究` units — `FACTCHECK_BATCH_07.md`
- Batch 08: 7 `日本史探究` A(3) ancient-state/social-change units — `FACTCHECK_BATCH_08.md`
- Batch 09: 3 `日本史探究` B(1) / B(2) medieval-transition/source units — `FACTCHECK_BATCH_09.md`
- Batch 10: 5 `日本史探究` B(3) Kamakura-state/economy/culture units — `FACTCHECK_BATCH_10.md`
- Batch 11: 5 `日本史探究` B(3) later-medieval state/trade/economy units — `FACTCHECK_BATCH_11.md`
- Batch 12: 5 `日本史探究` B(3) / C(1) autonomy, political/cultural change, early-modern transition units — `FACTCHECK_BATCH_12.md`
- Batch 13: 5 `日本史探究` C(1) / C(2) / C(3) early-modern source, policy and rule-order units — `FACTCHECK_BATCH_13.md`
- Batch 14: 5 `日本史探究` C(3) foreign relations, status/community, economy/transport, Genroku culture and Kyoho reform units — `FACTCHECK_BATCH_14.md`

Total independently verified this session: 79 units. Pending backlog moved from 199 to 120.

## Batch 14 — `日本史探究` C(3)

Verified and published:

1. `japanese-history-foreign-relations-four-gates`
2. `japanese-history-status-village-town-society`
3. `japanese-history-agriculture-goods-transport`
4. `japanese-history-genroku-culture`
5. `japanese-history-shogunate-finance-kyoho`

The current MEXT high-school Geography/History commentary was independently reopened for 日本史探究 C(3). Specific historical wording was separately checked against institutional or academic sources before learner-facing publication.

## Important corrections in Batch 14

- `foreign-relations-four-gates`: MEXT's Nagasaki/Ryukyu/Tsushima/Matsumae-Ainu relationships were cross-checked with the National Museum of Japanese History before using the `四つの口` model and the 長崎口・対馬口・薩摩口・松前口 names.
- `status-village-town-society`: did not promote the generated simplified `武士・百姓・町人` roles/burdens or village-autonomy wording; learner text is limited to MEXT's `身分制` and `村方・町方文書` framing.
- `agriculture-goods-transport`: did not promote the unsupported exact `綿・菜種` pairing. Used MEXT's directly stated spread of `商品作物` and NDL's independent evidence for the `五街道` network.
- `genroku-culture`: tied MEXT's urban/cultural-bearer perspective to Kyoto University's independently verified description of 井原西鶴 and his Enpo–Genroku cultural contribution.
- `shogunate-finance-kyoho`: did not promote the generated `上米の制` sentence without sufficiently direct independent authority. Learner text is limited to independently supported 享保の改革・財政立て直し and MEXT's policy/economic-change perspective.

## Publication / backlog state

- All five Batch 14 units have unit/fact/sentence `factcheckStatus: "verified"`.
- No Batch 14 unit contains an image, so no image-license decision was required.
- All five are loaded by `subjects/social/worksheets/index.html` immediately after Batch 13.
- JavaScript syntax and term/template/source/status structure were checked before publication.
- Current pending backlog: 120.
- The next pending unit remains unpublished.

## Exact next social action

Continue `日本史探究` sequentially from the fixed queue:

1. `japanese-history-tanuma-kansei-reforms`
2. `japanese-history-kasei-culture-education-learning`
3. `japanese-history-social-change-tenpo-reforms`
4. `japanese-history-russia-western-ships-coastal-defense`
5. `japanese-history-opening-bakumatsu-transition`

After those, continue in the fixed queue. GENERATE is finished; do not invent additional generation work.

## Factcheck discipline retained

- Treat every pending fact, learner sentence, key point/timeline claim, source record and image claim as untrusted until independently reopened and checked.
- Prefer current MEXT commentary for formal curriculum placement and official/primary archives or institutions for specific historical facts.
- Correct or reject unsupported wording rather than preserving generated text for convenience.
- Verify exact image identity, provenance and reuse terms before learner-facing publication.
- Only verified units may be added to the public selector and removed from `unverified_backlog`.
- Reconcile latest `main` before shared writes and never roll back parallel progress.
