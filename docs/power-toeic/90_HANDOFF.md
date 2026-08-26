# Power TOEIC — handoff

## Current state

**Phase 3 / Task 3.1 versioned browser persistence is complete. The exact next APP TRACK task is Phase 3 / Task 3.2 — deterministic mastery engine.**

The Power TOEIC app/UI track remains separate from the production question-database track. Production taxonomy authoring, Gold-bank production, bulk generation, production QA and database scaling remain external.

## Completed through Phase 2

Existing Web reference implementation under `subjects/english/power-toeic/` already provides:

- mobile-first HTML/CSS/ES-module quiz shell;
- `QuestionBankRepository` + tiny synthetic fixture bank;
- immutable `QuizSession` and attempt emission;
- four-choice cloze renderer with immediate feedback;
- result screen derived only from session attempts;
- semantic `AssetCatalog` and fail-silent audio boundary.

Phase 2 verification remains **9 Node tests passed, 0 failed**. No Phase 2 production-content code was changed by Task 3.1.

## Task 3.1 completed work

Added:

`subjects/english/power-toeic/js/core/persistence.js`

The persistence boundary is `VersionedAppStore` with a versioned root record:

```text
{
  version: 1,
  attempts: [],
  reviewEntries: [],
  progression: {
    points: 0,
    stage: 0
  }
}
```

Canonical browser key:

`power-toeic.app-state`

Behavior is deliberately deterministic and conservative:

- missing storage -> return a clean version-1 default record;
- corrupted JSON -> remove invalid payload when possible and return defaults;
- unsupported/unknown version -> do not guess migration semantics; reset safely to defaults;
- storage API read/write/remove exceptions -> fail silently to safe in-memory/default behavior rather than blocking quiz play;
- returned/saved data is cloned so callers cannot mutate stored state by reference;
- attempt validation requires question ID/version, skill ID, selected/correct indexes, correctness and non-negative response duration;
- review entries and progression are already represented as root fields so Phase 5/6 can evolve them without changing the top-level storage boundary.

`createBrowserAppStore()` uses browser `localStorage` when available and falls back to an in-memory key/value implementation when unavailable.

Updated:

`subjects/english/power-toeic/js/main.js`

Each emitted `QuizSession` attempt is now appended through the persistence adapter after answer submission. Correctness/session logic still does not depend on persistence.

Added:

`subjects/english/power-toeic/tests/persistence.test.js`

Focused verification covers:

1. versioned default root;
2. attempts/review/progression surviving reload;
3. corrupted JSON safe reset;
4. unsupported-version deterministic reset;
5. storage API failures remaining non-fatal.

Result: **5 focused persistence tests passed, 0 failed** using Node's built-in test runner against the exact new persistence source.

## Current Web architecture

```text
subjects/english/power-toeic/
  index.html
  styles.css
  package.json
  js/
    core/
      persistence.js
      session.js
    data/
      question-bank-adapter.js
      fixtures.js
      taxonomy/        # EXTERNAL CONTENT TRACK; do not edit here
      questions/       # EXTERNAL CONTENT TRACK; do not edit here
    renderers/
      cloze-choice.js
    ui/
      result.js
      asset-catalog.js
    main.js
  tests/
    question-bank-adapter.test.js
    session.test.js
    cloze-choice.test.js
    asset-catalog.test.js
    persistence.test.js
```

## Exact next work

### Task 3.2 — deterministic mastery engine

Add `js/core/mastery.js` or equivalent with one centralized, configurable rule set.

Requirements:

1. consume persisted attempt history rather than DOM/UI state;
2. produce deterministic per-skill snapshots keyed by externally supplied `skillId`;
3. keep rules explainable and table-testable;
4. represent insufficient evidence distinctly from demonstrated weakness;
5. reserve explicit mixed-test/review evidence fields or counters so Phase 5 can later gate true mastery without redesigning the model;
6. do **not** mark a skill permanently mastered from concentrated/labeled practice alone;
7. keep character progression completely separate;
8. add table-driven tests for no evidence, insufficient sample, weak performance and improving/training performance.

After 3.2 passes, proceed to **3.3 weakness ranking** if it can be completed safely in the same run.

## Fixed product/platform decisions

- Web first: HTML/CSS/Vanilla JavaScript/ES Modules.
- Swift + SwiftUI native port begins only after Web V1 + Phase 9 conformance fixtures are frozen.
- JS and Swift share contracts/fixtures, not runtime code.
- no target-score feature;
- no skill-to-body-part mapping;
- no runtime LLM generation;
- no production question generation in APP TRACK;
- Drill Sergeant / Trainee UI remains presentation-only;
- temporary art = Irasutoya through semantic asset IDs, below 20 unique works unless policy changes;
- audio = existing Google Drive OtoLogic SE through semantic IDs with CC BY 4.0 attribution retained.
