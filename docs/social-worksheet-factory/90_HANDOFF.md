# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use retired `social-worksheets/`.
- GENERATE scope defined by `00_MASTER_INSTRUCTIONS.md` is **complete**.
- FACTCHECK is manual batch work only.
- Junior-high generated coverage is fully independently verified.
- High-school `歴史総合` is fully independently verified and learner-facing: **19 / 19 units**.
- `日本史探究` FACTCHECK has started and is verified through the first ancient-history batch.
- Pending backlog count: **155 units**.
- Public selector remains verified-only.

## FACTCHECK progress this session

- Batch 01: 5 modern junior-high history units — `FACTCHECK_BATCH_01.md`
- Batch 02: 6 constitution / three-powers junior-high civics units — `FACTCHECK_BATCH_02.md`
- Batch 03: 8 remaining junior-high civics units — `FACTCHECK_BATCH_03.md`
- Batch 04: 7 `歴史総合` A / B units — `FACTCHECK_BATCH_04.md`
- Batch 05: 6 `歴史総合` C units — `FACTCHECK_BATCH_05.md`
- Batch 06: 6 `歴史総合` D units — `FACTCHECK_BATCH_06.md`
- Batch 07: 6 opening `日本史探究` units — `FACTCHECK_BATCH_07.md`

Total independently verified this session: **44 units**. Pending backlog moved from **199 to 155**.

## Batch 07 — `日本史探究` A opening block

Verified and published:

1. `japanese-history-paleolithic-environment`
2. `japanese-history-jomon-society`
3. `japanese-history-yayoi-agriculture`
4. `japanese-history-yayoi-polities-exchange`
5. `japanese-history-kofun-yamato`
6. `japanese-history-ancient-sources-outlook`

The current MEXT high-school Geography/History commentary is the curriculum authority. Public institutional material from Tokyo National Museum, the National Museum of Japanese History, and the official Jomon archaeological-sites resource was used to independently cross-check specific life/culture claims.

## Important corrections in Batch 07

- The generated curriculum placement was not trusted. MEXT A(1) covers the change from Paleolithic to Jomon culture and the establishment of Yayoi culture; it does not simply contain every pre-Asuka topic.
- `yayoi-polities-exchange` was moved from generated A(1) to A(2), and rewritten as a case study combining Chinese historical writing and archaeology to examine small-polity formation and political integration.
- The generated Himiko memorization sentence was removed from that source-method unit rather than approving an unsupported shortcut.
- `kofun-yamato` was moved from generated A(1) to A(3) `古代の国家・社会の展開と画期`, matching MEXT's explicit `国家の形成と古墳文化` treatment.
- The Kofun unit now uses distribution, scale, form and grave goods to reason about broad political alliances, rather than defining an unspecified “Yamato government”.
- `ancient-sources-outlook` now explicitly covers source characteristics/limitations, collection and reading of information, hypothesis formation, and the handoff into A(3).

## Publication / backlog state

- All six Batch 07 units have unit/fact/sentence `factcheckStatus: "verified"`.
- No Batch 07 unit contains an image, so no image-license decision was required.
- Learner-facing order follows the formal curriculum structure: A(1) foundation → A(2) source work → A(3) Kofun/state formation, even though the old generation backlog order differed.
- Current pending backlog: **155**.
- The next pending unit remains unpublished.

## Exact next social action

Continue `日本史探究` A(3) from:

1. `japanese-history-asuka-state-formation`
2. `japanese-history-ritsuryo-state`
3. `japanese-history-nara-government-society`
4. `japanese-history-tenpyo-culture-east-asia`
5. `japanese-history-early-heian-rule`
6. `japanese-history-sekkan-politics`
7. `japanese-history-shoen-warrior-rise`

After those, continue to the medieval transition/source-work block in backlog order. GENERATE is finished; do not invent additional generation work.

## Factcheck discipline retained

- Treat every pending fact, learner sentence, key point/timeline claim, source record and image claim as untrusted until independently reopened and checked.
- Prefer current MEXT commentary for formal curriculum placement and official/primary archives or institutions for specific historical facts.
- Correct or reject unsupported wording rather than preserving generated text for convenience.
- Verify exact image identity, provenance and reuse terms before learner-facing publication.
- Only verified units may be added to the public selector and removed from `unverified_backlog`.
- Reconcile latest `main` before shared writes and never roll back parallel progress.
