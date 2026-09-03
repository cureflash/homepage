# Power Color — HANDOFF

## Active work

Grade 1 is the active priority by explicit user override. Grade 2 and Grade 3 remain incomplete. Do not mark either lower grade complete and do not relax any existing source/display gate.

Canonical Grade 1 working set:
- `docs/power-color/STATUS.json`
- `docs/power-color/20_EXECUTION_PLAN.md`
- `docs/power-color/60_GRADE1_EXECUTION_PLAN.md`
- `docs/power-color/61_GRADE1_SOURCE_INVENTORY.md`
- `docs/power-color/62_GRADE1_SPEC.md`

## Preserved lower-grade state

Grade 3 remains 223 verified / pending 0 and incomplete with all deferred blockers unchanged. Grade 2 remains 348 verified / pending 0 across 29 promoted skills and incomplete at its recorded source-blocked frontier. No lower-grade source/display gate is relaxed.

## Grade 1 completed culture checkpoints

- p.006 `古代ヨーロッパの色彩`: 8/8 verified; CI `33744000544`; PR #618 merged.
- p.007 `中・近世のヨーロッパの色彩`: 8/8 verified; CI `33745825195`; PR #621 merged.
- p.010 `近代ヨーロッパと色彩学`: 8/8 verified; CI `33747834603`; PR #623 merged.
- p.014 `日本の古代の色`: 8/8 verified; CI `33749706830`; PR #625 merged.
- p.017 `古代から中近世の日本の色彩`: 8/8 verified; PR #628 merged.
- p.021 `近代の日本の色彩`: 8/8 verified; CI `33755336513`; PR #630 merged.

## Grade 1 color-harmony checkpoints

p.024 `色彩調和論とは / ジャッドの色彩調和、四つの原理` is `SECONDARY_CORROBORATION_REQUIRED`; finite accepted state space is 4/4 verified, pending 0; CI `33756393481`; PR #632 merged.

p.025 `シュヴルールの色彩調和論` is `SOURCE_RESOLVED` for the narrow current-AFT-official-sample slice. Exactly three first-party relations were authored and independently re-solved as 3/3 verified, pending 0. Head Power Color CI `33757328587` succeeded; PR #636 merged as `0b577fa0263b5f451b4941e1a9f04fe8f8b7f036`. Do not waterfill beyond those three official-sample relations.

p.027 `ルードの色彩調和論` is `SECONDARY_CORROBORATION_REQUIRED` under `docs/power-color/audits/2026-09-03-grade1-p027-rood-source-audit.md`. AFT fixes the current heading/order but does not publicly expose the detailed textbook answer set. The accepted text-only boundary is limited to:
- Library of Congress: Ogden N. Rood, `Modern Chromatics, with Applications to Art and Industry`, 1879.
- ISCC: colour divided into purity, luminosity, and hue.
- Metropolitan Museum of Art / ISCC: separated small dots or lines of differing colours may blend perceptually at a suitable viewing distance; distinguish this from palette pigment premixing.
- ISCC: paired complementary colours may strengthen chromatic presence in painting.

`qualifications/color-certification/data/grade1-authoring-harmony-rood-p027-0001-0004.json` contains exactly four pending-first text-only questions, independently re-solved as 4/4 verified, pending 0, A/B/C/D=1/1/1/1. Dedicated gate `qualifications/color-certification/tests/grade1-harmony-rood-p027-authoring.test.js` checks source membership, nonvisual rendering, full fingerprints against all eight earlier Grade 1 batches, and shared renderer behavior.

Do not reconstruct the unpublished AFT p.027 body, exact Japanese terminology beyond the public heading, Rood wheel geometry, hue positions, pigment recipes, RGB/HEX/display values, or p.028 Ostwald content.

No Grade 1 runtime promotion has occurred yet.

## Phase 5 sequencing note

`docs/power-color/20_EXECUTION_PLAN.md` still contains the old Grade-2-complete start sentence. The user's repeated explicit directive makes Grade 1 active despite Grade 2/3 remaining incomplete; STATUS and `60_GRADE1_EXECUTION_PLAN.md` record this operational precedence for Grade 1 only. Do not interpret the override as completing or relaxing Grade 2/3.

## Exact next start point

Pass current-head p.027 dedicated/Power Color CI and merge if green/current. Then continue in official order to p.028 `オストワルトの色彩調和論` and source-audit it before authoring.
