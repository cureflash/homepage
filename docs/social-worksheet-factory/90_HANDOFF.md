# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use retired `social-worksheets/`.
- GENERATE scope defined by `00_MASTER_INSTRUCTIONS.md` is complete.
- FACTCHECK is manual batch work only.
- Junior-high generated coverage is fully independently verified.
- High-school `歴史総合` is fully independently verified and learner-facing: 19 / 19 units.
- `日本史探究` FACTCHECK is verified through B(3) 後期中世の諸産業・流通・地域経済ブロック。
- Pending backlog count: 135 units.
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

Total independently verified this session: 64 units. Pending backlog moved from 199 to 135.

## Batch 11 — `日本史探究` B(3) 後期中世

Verified and published:

1. `japanese-history-kenmu-nanbokucho`
2. `japanese-history-muromachi-shogunate-shugo`
3. `japanese-history-ming-trade-east-asia`
4. `japanese-history-ryukyu-kingdom-exchange`
5. `japanese-history-agriculture-commerce-distribution`

The current MEXT high-school Geography/History commentary was independently reopened for 日本史探究 B(3)(イ). It explicitly requires `武家政権の変容`、`日明貿易の展開と琉球王国の成立`、`村落や都市の自立`、`多様な文化の形成や融合`を基に、地域権力の成長、社会の変容と文化の特色を理解し、社会・経済の変化、東アジアの国際情勢、地域の多様性などから考察する学習を示している。

## Important corrections in Batch 11

- `kenmu-nanbokucho`: existing slug retained, but `建武政権` was not promoted from the adopted MEXT evidence alone. Learner-facing content is limited to post-Kamakura political-power change, warrior relations, and the Nanboku-cho conflicts over regional political/economic bases.
- `muromachi-shogunate-shugo`: aligned to MEXT's comparison of the Muromachi shogunate's political/economic power bases and differences in domain management between shugo daimyo and Sengoku-period daimyo.
- `ming-trade-east-asia`: aligned to the Ming-centered East Asian international order, Japan-Ming trade, Ming-coin inflow, private trade and domestic effects.
- `ryukyu-kingdom-exchange`: aligned to the international background of the Ryukyu Kingdom's formation/prosperity, its historical role in East Asian exchange, and culture formed through exchange/trade.
- `agriculture-commerce-distribution`: existing slug retained, but learner-facing content uses the later-medieval MEXT wording `諸産業と流通や地域経済の成長` instead of carrying the broader generated slug into verified text.

## Publication / backlog state

- All five Batch 11 units have unit/fact/sentence `factcheckStatus: "verified"`.
- No Batch 11 unit contains an image, so no image-license decision was required.
- All five are loaded by `subjects/social/worksheets/index.html` immediately after the Batch 10 Kamakura block.
- JavaScript syntax and term/template/source/status structure were checked before publication.
- Current pending backlog: 135.
- The next pending unit remains unpublished.

## Exact next social action

Continue `日本史探究` sequentially from the remaining B(3) later-medieval block:

1. `japanese-history-village-city-autonomy`
2. `japanese-history-onin-war-sengoku-daimyo`
3. `japanese-history-muromachi-regional-culture`
4. `japanese-history-sengoku-unification-transition`
5. `japanese-history-european-arrival-global-links`

After those, continue in the fixed queue. GENERATE is finished; do not invent additional generation work.

## Factcheck discipline retained

- Treat every pending fact, learner sentence, key point/timeline claim, source record and image claim as untrusted until independently reopened and checked.
- Prefer current MEXT commentary for formal curriculum placement and official/primary archives or institutions for specific historical facts.
- Correct or reject unsupported wording rather than preserving generated text for convenience.
- Verify exact image identity, provenance and reuse terms before learner-facing publication.
- Only verified units may be added to the public selector and removed from `unverified_backlog`.
- Reconcile latest `main` before shared writes and never roll back parallel progress.
