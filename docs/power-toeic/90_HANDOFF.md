# Power TOEIC — handoff

## Current state

**Phase 4 / Tasks 4.1–4.4 are complete. The exact next APP TRACK task is Phase 4 / Task 4.5 — user-editable workout editor.**

The Power TOEIC app/UI track remains separate from production taxonomy/question generation and QA. This work did not edit production question data.

## Completed foundation

The Web reference implementation now includes:

- `QuestionBankRepository` with synthetic fixture-only demo data;
- immutable `QuizSession` and attempt emission;
- mobile-first four-choice cloze UI and result screen;
- semantic character/audio `AssetCatalog`;
- versioned browser persistence through `VersionedAppStore`;
- deterministic mastery snapshots;
- deterministic weakness ranking;
- common platform-neutral `WorkoutRecipe` model;
- deterministic question selection through `QuestionBankRepository`;
- QUICK / TRAINING / POWER / TEST / REVIEW presets through the same recipe model;
- WEAKNESS recipe generation from ranked weakness evidence.

## Phase 4.1 WorkoutRecipe

Added `subjects/english/power-toeic/js/core/workout-builder.js`.

Canonical recipe fields are JSON/Codable-friendly:

```text
mode
totalCount
skillAllocations[] { skillId, count | weight }
selectionPolicy
labelPolicy
seed
endless
```

Validation rejects unsupported modes/policies, non-positive total counts, negative/non-integer seeds, duplicate skill allocations, entries that specify both/neither `count` and `weight`, explicit counts exceeding the total, TEST recipes that expose skill labels, and REVIEW recipes that do not use `review_due` selection.

Returned recipes and allocation entries are frozen after construction. System weakness recommendations and future user-edited recipes use exactly this same model.

## Phase 4.2 deterministic selector

`selectQuestionIds(...)` consumes only the repository contract plus recipe/history metadata. It does not know fixture/production storage details.

Policy implemented:

1. restrict by requested skill allocation when present;
2. prefer unseen eligible questions;
3. among seen questions, prefer least-recently-seen;
4. use stable seed hashing for deterministic tie-breaking;
5. prevent duplicate IDs inside a finite session;
6. fill remaining capacity from the broader repository pool when an allocation is underfilled;
7. REVIEW mode restricts selection to supplied due-review IDs.

The selector returns a frozen ID list and never mutates question records or mastery state.

## Phase 4.3 presets

`createPresetRecipe(...)` now resolves these modes through the same model:

- QUICK: default 10;
- TRAINING: default 30 and requires a skill ID;
- POWER: default 100 and requires a skill ID;
- TEST: default 30 with `hide_skill` label policy;
- REVIEW: default 30 with `review_due` selection.

No separate quiz engine was introduced.

## Phase 4.4 weakness recipes

`createWeaknessWorkoutRecipe(...)` accepts the deterministic ranked weakness output and converts the top demonstrated weak skills into weighted allocations. Defaults are 30 questions across at most three skills. The result is an ordinary `WorkoutRecipe`, so the forthcoming editor does not need a separate weakness-specific data model.

## Verification

Added `subjects/english/power-toeic/tests/workout-builder.test.js`.

Focused Node verification against the exact new source and existing in-memory repository contract: **4 tests passed, 0 failed**.

Coverage includes:

1. recipe immutability/serialization and invalid duplicate/TEST-policy rejection;
2. deterministic selection, unseen preference, per-skill allocation and no duplicate IDs;
3. QUICK/TRAINING/POWER/TEST/REVIEW preset normalization plus due-only REVIEW selection;
4. WEAKNESS weighting resolving 3:1 allocation through the same selector.

Previously established verification remains:

- Phase 2 adapter/session/renderer/asset contracts: 9 passed;
- Phase 3.1 persistence: 5 passed;
- Phase 3.2/3.3 mastery/weakness: 4 passed.

## Exact next work

### Task 4.5 — user-editable workout editor

Build a mobile-first editor that edits a `WorkoutRecipe`, not fixed question IDs.

Requirements:

1. accept both system-generated WEAKNESS recipes and manually-created CUSTOM/TRAINING recipes;
2. allow add/remove skill allocation and count adjustment;
3. keep total count and allocations valid before start;
4. normalize edited output through `createWorkoutRecipe(...)` so machine/user recipes share one validation path;
5. use broad learner-facing skill/category labels supplied by the repository; do not expose dozens of raw micro-skill IDs at once;
6. keep DOM/UI code separate from the recipe domain module;
7. add focused editor tests for add/remove/count changes and invalid states.

After 4.5, proceed to 4.6 finite 10/30/50/100 and bounded-chunk endless session behavior if safe.

## Fixed decisions

- Web remains HTML/CSS/Vanilla JavaScript/ES Modules until V1 is frozen.
- Swift + SwiftUI begins only after Web V1 and Phase 9 cross-platform conformance fixtures.
- JS and Swift share contracts/fixtures, not runtime code.
- no target-score feature;
- no skill-to-body-part mapping;
- no runtime LLM generation;
- no production question generation in APP TRACK;
- characters remain presentation-only;
- temporary character art = Irasutoya via semantic IDs, below 20 unique works unless policy changes;
- audio = existing Google Drive OtoLogic SE with CC BY 4.0 attribution preserved.
