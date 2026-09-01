# Power Color — HANDOFF

## Active work

Grade 2 is the active priority by explicit user override while Grade 3 remains incomplete. Grade 3 deferred state is preserved in `docs/power-color/91_GRADE3_DEFERRED_HANDOFF.md`; do not mark Grade 3 complete or relax its source/display gates.

## Grade 2 current checkpoint

A 2026-09-01 re-open of the current Color Certification Association Grade 2 page corrected the previous source-rebase decision. The current official page explicitly contains the PR #483 core facts: hexad may use achromatic color; two dyads can form a tetrad; subtractive mixing/CMY; equally spaced three PCCS hues form a triad; and Question 1 explicitly names tone-in-tone, split complementary, pentad and tonal schemes.

The earlier `pc2.image.color_image_rules` promotion was based on a different/stale sample route and is removed from the active corpus. Its authoring JSON and authoring gate are deleted in the current reconciliation branch.

`grade2-authoring-official-sample-facts-0001-0012.json` has been independently rechecked against the current official page. Questions 0009-0012 were rewritten only to remove unsupported semantic glosses and now ask exactly which scheme name is explicitly shown in Question 1 A-D. QA remains 12 checked / 12 verified / 0 needs_revision / 0 rejected / 0 pending; A/B/C/D = 3/3/3/3.

`grade2-runtime.json` now contains those 12 reconciled records record-identically. The shared Power TOEIC question-bank/workout/session engine remains the only engine.

Grade 2 runtime frontier: 12 verified / pending 0.
Grade 3 runtime frontier: 223 verified / pending 0, still incomplete.

## Exact next start point

First confirm the source-reconciliation PR is green and merge it. On the next run, fetch latest main and expand `51_GRADE2_CONCEPT_SOURCE_INVENTORY.md` from current first-party Grade 2 text/scope material. Select the next nonvisual micro-skill only when explicit current authority states the needed rule. Do not revive `pc2.image.color_image_rules` or `pc2.scheme.natural_harmony_text` without a current auditable first-party source.

Monitor-facing questions remain blocked without approved display references.
