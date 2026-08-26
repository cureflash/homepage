# Power TOEIC — handoff

## Current state

**Phase 4 is complete. The exact next APP TRACK task is Phase 5 / Task 5.1 — mixed/unlabeled test presentation.**

The Power TOEIC app/UI track remains separate from production taxonomy/question generation and QA. No production question data was authored in this run.

## Newly completed work

### Task 4.5 — user-editable workout editor

PR #70 was merged to `main`.

Added:

- `js/core/workout-editor-model.js` — pure immutable-ish draft transformations;
- `js/ui/workout-editor.js` — DOM-only mobile editor;
- result-screen route back to editing;
- demo startup through edited `WorkoutRecipe` + existing selector/session engine.

Behavior:

- system WEAKNESS recipes are converted to editable CUSTOM drafts;
- weighted weakness allocations resolve to concrete per-skill counts before display;
- user can change total count, change per-skill counts, remove skills and add repository-supplied skills;
- edited output always passes through `createWorkoutRecipe(...)` before session start;
- repository learner-facing labels are shown instead of exposing raw IDs as the primary UI;
- original recipes are not mutated.

Focused verification: **4 editor-model tests passed, 0 failed**. Coverage includes weight-to-count resolution, add/remove/count edits, shared validation rejection and duplicate/unknown-skill errors.

### Task 4.6 — finite and endless session planning

PR #71 was merged to `main`.

Added `js/core/session-planner.js` with:

- supported finite sizes: `10 / 30 / 50 / 100`;
- resizing that preserves allocation proportions through weights;
- endless continuation through bounded deterministic chunks;
- default endless chunk size 30;
- hard per-chunk maximum 100;
- later chunks preferentially receive unseen questions when accumulated attempts are supplied;
- no unbounded question array or separate endless quiz engine.

Focused verification: **4 session-planner tests passed, 0 failed**. Coverage includes all finite presets, deterministic chunks, unseen preference across chunks and hard bounds.

## Existing foundation

The Web reference implementation now has:

- `QuestionBankRepository` with synthetic fixture-only demo data;
- immutable `QuizSession` and attempt emission;
- mobile-first four-choice cloze UI and results;
- semantic character/audio `AssetCatalog`;
- versioned browser persistence;
- deterministic mastery and weakness ranking;
- common `WorkoutRecipe` and deterministic selector;
- QUICK / TRAINING / POWER / TEST / REVIEW presets;
- WEAKNESS recipe generation;
- user workout editing;
- finite and bounded-chunk endless session planning.

## Exact next work

### Phase 5 / Task 5.1 — mixed/unlabeled test presentation

Use the existing recipe `labelPolicy` contract. TEST recipes already enforce `hide_skill`; the next UI work must ensure the quiz header/presentation never leaks the underlying micro-skill when this policy is active.

Acceptance focus:

1. same question can render in labeled training and unlabeled TEST mode without duplicating content;
2. TEST view hides micro-skill labels/strategy hints while retaining progress/mode information;
3. session/domain correctness remains unchanged by presentation policy;
4. add focused renderer/UI tests for label visibility.

After 5.1, proceed to deterministic review scheduling (5.2), then gate mastery on mixed/review evidence (5.3).

## Verification summary

- Phase 2 adapter/session/renderer/asset contracts: 9 passed;
- Phase 3.1 persistence: 5 passed;
- Phase 3.2/3.3 mastery/weakness: 4 passed;
- Phase 4.1–4.4 workout builder/selector/presets/weakness: 4 passed;
- Phase 4.5 editor model: 4 passed;
- Phase 4.6 session planner: 4 passed.

## Fixed decisions

- Web remains HTML/CSS/Vanilla JavaScript/ES Modules until V1 is frozen;
- Swift + SwiftUI begins only after Web V1 and Phase 9 conformance fixtures;
- JS and Swift share contracts/fixtures, not runtime code;
- no target-score feature;
- no skill-to-body-part mapping;
- no runtime LLM generation;
- no production question generation in APP TRACK;
- characters remain presentation-only;
- temporary character art = Irasutoya via semantic IDs, below 20 unique works unless policy changes;
- audio = existing Google Drive OtoLogic SE with CC BY 4.0 attribution preserved.
