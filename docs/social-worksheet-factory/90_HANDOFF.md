# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use retired `social-worksheets/`.
- GENERATE scope defined by `00_MASTER_INSTRUCTIONS.md` is complete.
- FACTCHECK is manual batch work only.
- Junior-high generated coverage is fully independently verified.
- High-school `歴史総合` is fully independently verified and learner-facing: 19 / 19 units.
- `日本史探究` FACTCHECK is verified through C(3) `japanese-history-daimyo-court-temples`.
- Pending backlog count: 125 units.
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

Total independently verified this session: 74 units. Pending backlog moved from 199 to 125.

## Batch 13 — `日本史探究` C(1) / C(2) / C(3)

Verified and published:

1. `japanese-history-early-modern-sources-outlook`
2. `japanese-history-shokuho-unification`
3. `japanese-history-land-survey-sword-hunt`
4. `japanese-history-edo-shogunate-bakuhan`
5. `japanese-history-daimyo-court-temples`

The current MEXT high-school Geography/History commentary was independently reopened for 日本史探究 C(1), C(2) and C(3). Named early-modern laws in the fifth unit were independently checked against NDL / National Archives institutional records before learner-facing publication.

## Important corrections in Batch 13

- `early-modern-sources-outlook`: kept to MEXT's source-collection, reading, source-characteristic and hypothesis skills; no unsupported source example was promoted.
- `shokuho-unification`: avoided duplicating the already published transition unit and focused on the purposes and roles of 織豊政権 policies in state/social transformation.
- `land-survey-sword-hunt`: used `太閤検地` and `刀狩り` because MEXT directly names them as an inquiry example.
- `edo-shogunate-bakuhan`: aligned to MEXT's law/institutional order, status system and establishment of the bakuhan system, with comparison to the 織豊政権.
- `daimyo-court-temples`: named `武家諸法度` and `禁中並公家中諸法度` only after separate institutional verification; temple-law wording is limited to the National Archives record that laws were issued to various temples.

## Publication / backlog state

- All five Batch 13 units have unit/fact/sentence `factcheckStatus: "verified"`.
- No Batch 13 unit contains an image, so no image-license decision was required.
- All five are loaded by `subjects/social/worksheets/index.html` immediately after Batch 12.
- JavaScript syntax and term/template/source/status structure were checked before publication.
- Current pending backlog: 125.
- The next pending unit remains unpublished.

## Exact next social action

Continue `日本史探究` sequentially from the fixed queue:

1. `japanese-history-foreign-relations-four-gates`
2. `japanese-history-status-village-town-society`
3. `japanese-history-agriculture-goods-transport`
4. `japanese-history-genroku-culture`
5. `japanese-history-shogunate-finance-kyoho`

After those, continue in the fixed queue. GENERATE is finished; do not invent additional generation work.

## Factcheck discipline retained

- Treat every pending fact, learner sentence, key point/timeline claim, source record and image claim as untrusted until independently reopened and checked.
- Prefer current MEXT commentary for formal curriculum placement and official/primary archives or institutions for specific historical facts.
- Correct or reject unsupported wording rather than preserving generated text for convenience.
- Verify exact image identity, provenance and reuse terms before learner-facing publication.
- Only verified units may be added to the public selector and removed from `unverified_backlog`.
- Reconcile latest `main` before shared writes and never roll back parallel progress.
