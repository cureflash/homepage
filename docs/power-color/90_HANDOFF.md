# Power Color — HANDOFF

## Active work

Grade 2 is the active priority by explicit user override while Grade 3 remains incomplete. Grade 3 deferred state is preserved in `docs/power-color/91_GRADE3_DEFERRED_HANDOFF.md`; do not mark Grade 3 complete or relax its source/display gates.

## Grade 2 current checkpoint

The PR #483 authoring batch must not be runtime-promoted. A fresh 2026-09-01 re-open of the current Color Certification Association Grade 2 page and its currently linked official sample PDF found that the present sample no longer contains the hexad/dyad/CMY items used as the authority for that batch. The old answers are not declared false; the batch is source-stale/unresolved under the current-source contract.

Current-source recovery work:

1. `docs/power-color/51_GRADE2_CONCEPT_SOURCE_INVENTORY.md` records the current official sample/answer authority and eligible text-only facts.
2. New micro-skill: `pc2.image.color_image_rules`.
3. `grade2-authoring-color-image-rules-0001-0012.json` contains 12 current-source text-only questions.
4. All 12 were independently re-derived from the current sample text plus current published answer key before comparison with proposed answers.
5. QA result: 12 checked / 12 verified / 0 needs_revision / 0 rejected / 0 pending; A/B/C/D = 3/3/3/3.
6. No sample illustration, screen color, RGB/HEX, or inferred diagram geometry is used.
7. `grade2-runtime.json` promotes those 12 records record-identically as the first Grade 2 runtime bank.
8. Runtime gates require exact authoring equality, zero full-fingerprint duplicates, zero collisions with the stale PR #483 batch, exclusion of all stale-batch IDs, and execution through the existing shared Power TOEIC question-bank/workout/session engine.
9. No Grade 2-specific engine was created.

Grade 2 runtime frontier after this branch is merged: 12 verified / pending 0.
Grade 3 remains 223 verified / pending 0 and incomplete.

## Current source facts used

From current official sample (1), using current published answers E=3 and F=3:
- clear image: `p` / `lt` tones centered with white;
- elegant image: `p` / `ltg`, purple-family hues, suppressed lightness difference.

From current official sample (2), using current published answers C=1, E=4, F=2:
- sports: `p` / `lt` tones;
- elegant representative tone: `ltg`;
- urban central color: basic color.

## Exact next start point

First confirm the current PR head is green and merge it. On the next run, fetch latest main and re-open the current Association Grade 2 sample before doing any source-derived work. Then evaluate `pc2.scheme.natural_harmony_text` from current sample (2) D. Generate it only if explicit current authority supports enough non-template learning value; otherwise continue the current Grade 2 concept/source inventory.

Do not revive or promote `grade2-authoring-official-sample-facts-0001-0012.json` unless the exact former first-party sample/version is independently recovered and auditable.
