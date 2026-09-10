# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use retired `social-worksheets/`.
- GENERATE scope defined by `00_MASTER_INSTRUCTIONS.md` is complete.
- FACTCHECK is manual batch work only.
- Junior-high generated coverage is fully independently verified.
- High-school `歴史総合` is fully independently verified and learner-facing: 19 / 19 units.
- `日本史探究` FACTCHECK is verified through C(1) `japanese-history-european-arrival-global-links`.
- Pending backlog count: 130 units.
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

Total independently verified this session: 69 units. Pending backlog moved from 199 to 130.

## Batch 12 — `日本史探究` B(3) / C(1)

Verified and published:

1. `japanese-history-village-city-autonomy`
2. `japanese-history-onin-war-sengoku-daimyo`
3. `japanese-history-muromachi-regional-culture`
4. `japanese-history-sengoku-unification-transition`
5. `japanese-history-european-arrival-global-links`

The current MEXT high-school Geography/History commentary was independently reopened for 日本史探究 B(3)(イ) and C(1). Learner-facing wording is limited to claims directly supported there.

## Important corrections in Batch 12

- `village-city-autonomy`: did not promote the generated `惣村` label from MEXT evidence alone; uses autonomous village/town units, ikki organizations and city formation.
- `onin-war-sengoku-daimyo`: aligned to MEXT's inquiry into Onin War and Kinai/local relations plus comparison of shugo and Sengoku-period domain management.
- `muromachi-regional-culture`: aligned to culture formation/fusion among court nobles, warriors and commoners, related to economic progress, village/city development and East Asian exchange.
- `sengoku-unification-transition`: existing slug retained; learner-facing text uses MEXT's `織豊政権` and medieval-to-early-modern transition instead of promoting unsupported generated chronology.
- `european-arrival-global-links`: existing slug retained; did not promote generated `鉄砲・キリスト教` from MEXT evidence alone; uses European exchange, international environment, foreign policy and domestic social/cultural change.

## Publication / backlog state

- All five Batch 12 units have unit/fact/sentence `factcheckStatus: "verified"`.
- No Batch 12 unit contains an image, so no image-license decision was required.
- All five are loaded by `subjects/social/worksheets/index.html` immediately after Batch 11.
- JavaScript syntax and term/template/source/status structure were checked before publication.
- Current pending backlog: 130.
- The next pending unit remains unpublished.

## Exact next social action

Continue `日本史探究` sequentially from the fixed queue:

1. `japanese-history-early-modern-sources-outlook`
2. `japanese-history-shokuho-unification`
3. `japanese-history-land-survey-sword-hunt`
4. `japanese-history-edo-shogunate-bakuhan`
5. `japanese-history-daimyo-court-temples`

After those, continue in the fixed queue. GENERATE is finished; do not invent additional generation work.

## Factcheck discipline retained

- Treat every pending fact, learner sentence, key point/timeline claim, source record and image claim as untrusted until independently reopened and checked.
- Prefer current MEXT commentary for formal curriculum placement and official/primary archives or institutions for specific historical facts.
- Correct or reject unsupported wording rather than preserving generated text for convenience.
- Verify exact image identity, provenance and reuse terms before learner-facing publication.
- Only verified units may be added to the public selector and removed from `unverified_backlog`.
- Reconcile latest `main` before shared writes and never roll back parallel progress.
