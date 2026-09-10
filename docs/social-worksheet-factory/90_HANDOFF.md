# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use retired `social-worksheets/`.
- GENERATE scope defined by `00_MASTER_INSTRUCTIONS.md` is complete.
- FACTCHECK is manual batch work only.
- Junior-high generated coverage is fully independently verified.
- High-school `歴史総合` is fully independently verified and learner-facing: 19 / 19 units.
- `日本史探究` FACTCHECK is verified through B(3) 鎌倉期の宗教・文化ブロック。
- Pending backlog count: 140 units.
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

Total independently verified this session: 59 units. Pending backlog moved from 199 to 140.

## Batch 10 — `日本史探究` B(3) 鎌倉期

Verified and published:

1. `japanese-history-kamakura-shogunate`
2. `japanese-history-gokenin-landholding`
3. `japanese-history-song-exchange-medieval-economy`
4. `japanese-history-mongol-invasions-kamakura-change`
5. `japanese-history-kamakura-new-buddhism-culture`

The current MEXT high-school Geography/History commentary was independently reopened for 日本史探究 B(3). It explicitly requires `武家政権の成立と展開`、`産業の発達`、`宗教や文化の展開`を基にした理解と、`公武関係の変化`、宋・元などユーラシアとの交流とその影響に着目した考察を示している。

## Important corrections in Batch 10

- `kamakura-shogunate`: generated `東国を基盤とする武家政権` wording was not carried forward without an independently reopened specific source. Learner-facing content now follows MEXT's `武家政権の成立と展開` / `公武関係の変化` framework.
- `gokenin-landholding`: generated `御家人` / `所領の保障` explanation was not marked verified from the current source alone. The old slug is retained only for compatibility; learner-facing content is now `公武関係の変化と土地支配`, directly following MEXT's stated inquiry into effects on the structure of landholding.
- `song-exchange-medieval-economy`: replaced broad generated `日宋貿易` wording with the directly supported relationship among 宋銭の流入、流通、生産・商品の流通、貨幣経済の発達。
- `mongol-invasions-kamakura-change`: removed a simple causal shortcut from 元寇 to 幕府変容 and centered the MEXT-supported international background and domestic political impact of the Mongol invasions.
- `kamakura-new-buddhism-culture`: replaced the broad `鎌倉新仏教` label as the sole organizing concept with MEXT's framework of continuity/difference from Heian religion and culture and effects on commoners' faith and daily culture.

## Publication / backlog state

- All five Batch 10 units have unit/fact/sentence `factcheckStatus: "verified"`.
- No Batch 10 unit contains an image, so no image-license decision was required.
- All five are loaded by `subjects/social/worksheets/index.html` after the verified B(1)/B(2) transition/source block.
- JavaScript syntax for all five files was checked with `node --check` before publication.
- Current pending backlog: 140.
- The next pending unit remains unpublished.

## Exact next social action

Continue `日本史探究` sequentially from the post-Kamakura / later-medieval block:

1. `japanese-history-kenmu-nanbokucho`
2. `japanese-history-muromachi-shogunate-shugo`
3. `japanese-history-ming-trade-east-asia`
4. `japanese-history-ryukyu-kingdom-exchange`
5. `japanese-history-agriculture-commerce-distribution`

After those, continue in the fixed B-section queue. GENERATE is finished; do not invent additional generation work.

## Factcheck discipline retained

- Treat every pending fact, learner sentence, key point/timeline claim, source record and image claim as untrusted until independently reopened and checked.
- Prefer current MEXT commentary for formal curriculum placement and official/primary archives or institutions for specific historical facts.
- Correct or reject unsupported wording rather than preserving generated text for convenience.
- Verify exact image identity, provenance and reuse terms before learner-facing publication.
- Only verified units may be added to the public selector and removed from `unverified_backlog`.
- Reconcile latest `main` before shared writes and never roll back parallel progress.
