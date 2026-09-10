# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use retired `social-worksheets/`.
- GENERATE scope defined by `00_MASTER_INSTRUCTIONS.md` is **complete**.
- FACTCHECK is manual batch work only.
- Junior-high generated coverage is fully independently verified.
- High-school `歴史総合` is fully independently verified and learner-facing: **19 / 19 units**.
- `日本史探究` FACTCHECK is verified through B(2) `歴史資料と中世の展望`.
- Pending backlog count: **145 units**.
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

Total independently verified this session: **54 units**. Pending backlog moved from **199 to 145**.

## Batch 09 — `日本史探究` B 中世への転換・資料

Verified and published:

1. `japanese-history-medieval-transition`
2. `japanese-history-landholding-transition`
3. `japanese-history-medieval-sources-outlook`

The current MEXT high-school Geography/History commentary was independently reopened for 日本史探究 B. It explicitly places `貴族政治の変容と武士の政治進出` and `土地支配の変容` in B(1), and requires source collection/reading, attention to source characteristics, multidimensional consideration, and hypothesis formation in B(2).

## Important corrections in Batch 09

- `medieval-transition`: replaced the generated broad causal wording with the formal B(1) framework and the required viewpoints of changing political power and East-Asian relations.
- `landholding-transition`: removed the unsupported shortcut that `荘園・公領` simply formed the basis of medieval society. The verified wording follows MEXT's land-control transition and its example from ritsuryo land institutions toward warrior landholding.
- `medieval-sources-outlook`: replaced the arbitrary generated source list with the formal B(2) source-work objective: collect/read information, account for source characteristics, consider the medieval period from multiple perspectives, and express a hypothesis.

## Publication / backlog state

- All three Batch 09 units have unit/fact/sentence `factcheckStatus: "verified"`.
- No Batch 09 unit contains an image, so no image-license decision was required.
- All three are loaded by `subjects/social/worksheets/index.html` after the previously verified ancient-state block.
- Current pending backlog: **145**.
- The next pending unit remains unpublished.

## Exact next social action

Continue `日本史探究` sequentially into the Kamakura block:

1. `japanese-history-kamakura-shogunate`
2. `japanese-history-gokenin-landholding`
3. `japanese-history-song-exchange-medieval-economy`
4. `japanese-history-mongol-invasions-kamakura-change`
5. `japanese-history-kamakura-new-buddhism-culture`

After those, continue in the fixed B-section queue. GENERATE is finished; do not invent additional generation work.

## Factcheck discipline retained

- Treat every pending fact, learner sentence, key point/timeline claim, source record and image claim as untrusted until independently reopened and checked.
- Prefer current MEXT commentary for formal curriculum placement and official/primary archives or institutions for specific historical facts.
- Correct or reject unsupported wording rather than preserving generated text for convenience.
- Verify exact image identity, provenance and reuse terms before learner-facing publication.
- Only verified units may be added to the public selector and removed from `unverified_backlog`.
- Reconcile latest `main` before shared writes and never roll back parallel progress.
