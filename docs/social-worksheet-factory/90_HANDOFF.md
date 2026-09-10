# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use retired `social-worksheets/`.
- GENERATE scope defined by `00_MASTER_INSTRUCTIONS.md` is **complete**.
- FACTCHECK is manual batch work only.
- Junior-high generated coverage is fully independently verified.
- High-school `歴史総合` is fully independently verified and learner-facing: **19 / 19 units**.
- `日本史探究` FACTCHECK is verified through the late A(3) ancient-state/social-change block.
- Pending backlog count: **148 units**.
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

Total independently verified this session: **51 units**. Pending backlog moved from **199 to 148**.

## Batch 08 — `日本史探究` A(3) 古代国家・社会

Verified and published:

1. `japanese-history-asuka-state-formation`
2. `japanese-history-ritsuryo-state`
3. `japanese-history-nara-government-society`
4. `japanese-history-tenpyo-culture-east-asia`
5. `japanese-history-early-heian-rule`
6. `japanese-history-sekkan-politics`
7. `japanese-history-shoen-warrior-rise`

The current MEXT high-school Geography/History commentary is the curriculum authority. National Archives chronology and public institutional material from the National Museum of Japanese History, Nara National Museum, Kyoto's official tourism resource, and National Diet Library Search were used to independently cross-check selected concrete claims.

## Important corrections in Batch 08

- `asuka-state-formation`: replaced a simple East-Asia-caused-reform claim with the MEXT state-formation framework; independently anchored the Taika Reform chronology.
- `ritsuryo-state`: aligned the unit to MEXT's `律令体制の成立過程と諸文化の形成` and independently anchored 701 / 大宝律令.
- `nara-government-society`: removed unverified `班田収授` emphasis from the generated title/key point; retained independently supported Heijo-kyo and census-register evidence.
- `tenpyo-culture-east-asia`: grounded the Tang-mission and Todaiji/Buddhist-culture examples in Nara National Museum material.
- `early-heian-rule`: anchored 794 / Heian-kyo and aligned the second learning point to MEXT's explicit local-rule change and ritsuryo-system transformation.
- `sekkan-politics`: aligned to MEXT's aristocratic-politics objective and uses Fujiwara Michinaga only as an independently supported exemplar.
- `shoen-warrior-rise`: the generated title/content overcommitted A(3) to `荘園・公領` and a direct causal explanation of warrior growth. Learner-facing content is now `地方支配の変化と武士の出現`, following MEXT. The old slug remains only for compatibility; detailed landholding treatment stays in the following medieval queue.

## Publication / backlog state

- All seven Batch 08 units have unit/fact/sentence `factcheckStatus: "verified"`.
- No Batch 08 unit contains an image, so no image-license decision was required.
- All seven are loaded by `subjects/social/worksheets/index.html` after the previously verified ancient-history block.
- Current pending backlog: **148**.
- The next pending unit remains unpublished.

## Exact next social action

Continue `日本史探究` from the medieval transition/source-work block:

1. `japanese-history-medieval-transition`
2. `japanese-history-landholding-transition`
3. `japanese-history-medieval-sources-outlook`

After those, continue sequentially into the Kamakura block. GENERATE is finished; do not invent additional generation work.

## Factcheck discipline retained

- Treat every pending fact, learner sentence, key point/timeline claim, source record and image claim as untrusted until independently reopened and checked.
- Prefer current MEXT commentary for formal curriculum placement and official/primary archives or institutions for specific historical facts.
- Correct or reject unsupported wording rather than preserving generated text for convenience.
- Verify exact image identity, provenance and reuse terms before learner-facing publication.
- Only verified units may be added to the public selector and removed from `unverified_backlog`.
- Reconcile latest `main` before shared writes and never roll back parallel progress.
