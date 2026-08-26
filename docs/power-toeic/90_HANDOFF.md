# Power TOEIC — handoff

## Current state

**Phase 2 Web common quiz-session MVP is complete. The exact next APP TRACK task is Phase 3 / Task 3.1 — versioned browser persistence.**

The Power TOEIC app/UI track remains separate from the production question-database track. Production taxonomy authoring, Gold-bank production, bulk question generation, production QA and database scaling belong to the external content track.

## Completed in Phase 2

Implemented under `subjects/english/power-toeic/`:

- mobile-first `index.html` / `styles.css` quiz shell;
- `QuestionBankRepository` contract plus `InMemoryQuestionBank` fixture implementation;
- three explicitly synthetic fixture questions and two fixture skill labels;
- deterministic `QuizSession` with an immutable started-session question-ID list;
- per-answer attempt events containing question ID/version, skill ID, selected/correct index, correctness and response time;
- four-choice cloze renderer with immediate correct/wrong state and concise explanation;
- accessible result state that does not rely on color alone;
- result screen derived only from session attempts: answered, correct, accuracy and per-skill breakdown;
- restartable demo composition through `main.js`;
- presentation-only `AssetCatalog` with semantic character/audio IDs and `SafeAudioPlayer` failure isolation.

No production TOEIC question content was authored by this work. Existing production taxonomy/question folders created by the external content track were left unchanged. The runtime demo consumes fixture questions only through the repository adapter.

## Verification

Node tests were reconstructed and executed for the exact adapter/session/renderer/asset-catalog source in this checkpoint:

- adapter tests: repository lookup/filtering and frozen records;
- session tests: immutable started list, deterministic attempt payload, response timing, advance guard and results;
- renderer tests: exactly four semantic buttons, answer-index forwarding, disabled post-answer state, correct/wrong textual accessibility labels;
- asset tests: semantic lookup and fail-silent audio playback behavior.

Result: **9 tests passed, 0 failed**.

## Temporary asset decision

Canonical asset rules are in `docs/power-toeic/50_ASSET_POLICY.md`.

- Character art: temporary **いらすとや** assets, kept below 20 unique illustrations unless licensing/replacement policy changes. Runtime code uses semantic IDs rather than source names/URLs.
- Audio: existing Google Drive SE library. Initial semantic mapping is `audio.correct` -> `otologic_correct.mp3`, `audio.wrong` -> `otologic_incorrect.mp3`, `audio.inspiration` -> `otologic_inspiration.mp3`.
- OtoLogic attribution/CC BY 4.0 metadata must remain with the public bundle.
- Missing images or blocked audio must never block quiz play.

The initial Web skeleton does not yet bundle the binary Irasutoya/OtoLogic files. It already has the semantic catalog and expected local audio paths so later asset import is isolated from domain code.

## Current Web architecture

```text
subjects/english/power-toeic/
  index.html
  styles.css
  package.json
  js/
    core/
      session.js
    data/
      question-bank-adapter.js
      fixtures.js
      taxonomy/        # external content track; do not edit from APP TRACK
      questions/       # external content track; do not edit from APP TRACK
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
```

The session engine has no mandatory countdown or game-over semantics. Character presentation remains separate from correctness/session state.

## Exact next work

### Task 3.1 — versioned browser persistence

Implement a small storage adapter behind an explicit boundary. Persist at minimum:

- attempt history;
- review entries/state placeholder required by later Phase 5;
- character progression state placeholder required by later Phase 6.

Requirements:

1. use a versioned root record;
2. reject or safely reset corrupted payloads;
3. define deterministic migration/fallback behavior for unsupported versions;
4. keep storage API independent from DOM and question data;
5. use injectable storage in tests so Node tests do not require a browser;
6. wire emitted session attempts into persistence only after the storage contract is tested.

After 3.1, proceed to 3.2 deterministic mastery engine and 3.3 weakness ranking if safe.

## Fixed platform plan

Web remains HTML/CSS/Vanilla JavaScript/ES Modules first. After Web V1 and Phase 9 cross-platform fixtures are frozen, implement native iOS in Swift + SwiftUI.

Preserve responsibility mapping:

```text
Web JS                         Swift / SwiftUI
-----------------------------------------------------------
session.js                  -> QuizSession.swift
workout-builder.js          -> WorkoutBuilder.swift
mastery.js                  -> MasteryEngine.swift
review.js                   -> ReviewScheduler.swift
progression.js              -> ProgressionEngine.swift
question-bank-adapter.js    -> QuestionBankRepository protocol
asset-catalog.js            -> AssetCatalog.swift
quiz UI modules             -> SwiftUI Views
browser persistence         -> native persistence adapter
```

Do not translate DOM code line-by-line. Share contracts, data formats, deterministic fixtures and expected behavior.

## Fixed product behavior

Still canonical:

- Part 5-style sentence cloze, exactly four choices;
- fine-grained weak-skill concentration once external data supplies skill IDs;
- QUICK / TRAINING / POWER / WEAKNESS / CUSTOM / TEST / REVIEW through one session engine;
- no target-score feature;
- no skill-to-body-part mapping;
- no runtime LLM generation;
- Drill Sergeant presents the drill in the UI;
- skinny Trainee represents the learner and becomes progressively more muscular;
- characters do not own answer/mastery/workout logic.
