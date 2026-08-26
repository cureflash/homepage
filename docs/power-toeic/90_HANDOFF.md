# Power TOEIC — handoff

## Current state

**Phase 3 is complete. The exact next APP TRACK task is Phase 4 / Task 4.1 — platform-neutral workout recipe model.**

The Power TOEIC app/UI track remains separate from production taxonomy/question generation and QA. This work did not edit production question data.

## Completed foundation

The Web reference implementation now includes:

- `QuestionBankRepository` with synthetic fixture-only demo data;
- immutable `QuizSession` and attempt emission;
- mobile-first four-choice cloze UI and result screen;
- semantic character/audio `AssetCatalog`;
- versioned browser persistence through `VersionedAppStore`;
- deterministic mastery snapshots;
- deterministic weakness ranking.

## Phase 3.1 persistence

`js/core/persistence.js` owns the versioned root:

```text
version: 1
attempts: []
reviewEntries: []
progression: { points, stage }
```

Invalid JSON, unsupported versions and storage API failures fall back safely. Session attempts are persisted through this boundary; correctness/session state does not depend on persistence.

Focused persistence verification: **5 tests passed, 0 failed**.

## Phase 3.2 mastery engine

Added:

`subjects/english/power-toeic/js/core/mastery.js`

Initial deterministic/configurable rules:

- states exposed now: `unknown`, `training`, `weak`;
- `minimumAttempts = 4`;
- `recentWindow = 8`;
- `weakAccuracyThreshold = 0.60`;
- zero evidence -> `unknown`;
- some evidence below minimum sample -> `training`;
- enough evidence with recent accuracy below threshold -> `weak`;
- enough evidence at/above threshold -> `training`.

Important: Phase 3 deliberately does **not** expose `mastered`. Concentrated/labeled practice alone can never create a permanent mastered state. The snapshot already reserves deterministic `mixed` and `review` evidence counters so Phase 5 can introduce the transfer/review gate without redesigning the domain model.

Each snapshot includes overall attempts/correct/accuracy, recent-window equivalents, plus mixed/review evidence summaries. The engine consumes plain attempt history and external `skillId`; it has no DOM, character or question-generation dependency.

## Phase 3.3 weakness ranking

Added:

`subjects/english/power-toeic/js/core/weakness.js`

Ranking is deterministic and explainable:

- only attempted skills are ranked;
- unattempted/unknown skills are not mislabeled as demonstrated weakness;
- score uses recent error evidence with higher weight plus overall error evidence;
- a demonstrated `weak` mastery state adds a small explicit bonus;
- ties resolve by sample count then stable skill ID ordering.

This produces a ranked skill list suitable for the later weakness workout builder, but does not itself choose questions or mutate mastery.

## Verification

Added:

`subjects/english/power-toeic/tests/mastery-weakness.test.js`

Focused tests cover:

1. no evidence / insufficient evidence / weak / improving-training state distinction;
2. mixed/review evidence capture without promoting practice to mastered;
3. deterministic snapshot ordering including requested unknown skill IDs;
4. weakness ranking excluding unknown skills and prioritizing stronger error evidence.

Result: **4 focused mastery/weakness tests passed, 0 failed** using Node's built-in test runner against the exact new source.

Previously established tests remain unchanged:

- Phase 2 adapter/session/renderer/asset contracts: 9 passed;
- Phase 3.1 persistence: 5 passed.

## Current core tree

```text
subjects/english/power-toeic/js/core/
  session.js
  persistence.js
  mastery.js
  weakness.js
```

## Exact next work

### Task 4.1 — platform-neutral workout recipe model

Create `js/core/workout-builder.js` or a smaller recipe/model module first.

Requirements:

1. one common recipe representation for QUICK / TRAINING / POWER / WEAKNESS / CUSTOM / TEST / REVIEW;
2. recipe contains total desired count, skill allocations/weights, selection policy, label/mixed presentation policy and deterministic seed where needed;
3. validation rejects impossible/negative counts and duplicate/conflicting skill entries;
4. system-generated weakness recipes and user-edited recipes use exactly the same model;
5. no recipe owns fixed rendered DOM or character state;
6. keep JSON/Codable-friendly field shapes for later Swift port;
7. table-test serialization/validation before adding selection behavior.

After 4.1, proceed to **4.2 deterministic question selector through `QuestionBankRepository`** if safe.

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
