# Power TOEIC — handoff

## Current state

**The Power TOEIC app/UI track is separate from the production question-database track.**

The `Power TOEIC 開発` scheduler focuses on application/program/UI work only. Production taxonomy authoring, Gold-bank production, bulk question generation, production QA and database scaling belong to another scheduler/content track.

The exact next app-track task is:

**Phase 2 / Task 2.0 — Create Web app skeleton and question-bank adapter.**

Phase 0 reuse audit remains complete.

## Platform plan

Current Web implementation uses:

- HTML;
- CSS;
- Vanilla JavaScript;
- ES Modules;
- Node tests.

Canonical Web path:

`subjects/english/power-toeic/`

After the Web V1 behavior is complete and frozen with deterministic cross-platform fixtures, build a native iOS version in Swift + SwiftUI using the same domain boundaries.

```text
Web JS                         Swift / SwiftUI
-----------------------------------------------------------
session.js                  -> QuizSession.swift
workout-builder.js          -> WorkoutBuilder.swift
mastery.js                  -> MasteryEngine.swift
review.js                   -> ReviewScheduler.swift
progression.js              -> ProgressionEngine.swift
question-bank-adapter.js    -> QuestionBankRepository protocol
quiz UI modules             -> SwiftUI Views
browser persistence         -> native persistence adapter
asset-catalog.js            -> AssetCatalog.swift
```

Do not translate DOM code line-by-line. Share the model/data contracts, deterministic fixtures and expected behavior.

## Content boundary

App-development runs may create only consumer-facing question/taxonomy adapter interfaces, tiny synthetic fixture data needed for tests/demo, and synthetic scale fixtures for performance testing. They must not spend runs writing or scaling the real TOEIC question bank.

Production question data should eventually arrive through a simple platform-neutral export, preferably JSON or an equivalently stable documented format, so both JavaScript and Swift can decode the same educational content.

## Temporary asset decision

Canonical asset rules are now in:

`docs/power-toeic/50_ASSET_POLICY.md`

### Character art

Use **いらすとや** as temporary character art for Web implementation. Keep the temporary commercial build below 20 unique Irasutoya illustrations unless the user later authorizes a paid license/replacement. Do not hotlink at runtime and do not scatter Irasutoya source filenames/URLs throughout UI code.

Initial conceptual mapping:

- Drill Sergeant: instructor/teacher-style Irasutoya illustration as temporary proxy;
- Trainee early stage: skinny/slender male illustrations;
- Trainee later stages: muscular male/bodybuilder illustrations.

All code must address characters through semantic IDs such as `sergeant.neutral` or `trainee.stage_3.neutral`, allowing later replacement with original art without changing domain/session logic.

### Sound effects

Use the existing Google Drive SE library. The initial confirmed set is under the Drive `se/otologic/` folder:

- `otologic_correct.mp3` -> correct answer;
- `otologic_incorrect.mp3` -> wrong answer;
- `otologic_inspiration.mp3` -> optional milestone/discovery cue.

Drive license metadata records these as OtoLogic sounds under CC BY 4.0 with publication attribution required. Preserve the source/license record and include the required credit when bundled publicly.

Drive also contains a `README_SE.txt` describing a separate programmatically synthesized UI SE set (`click.wav`, `confirm.wav`, `success.wav`, `error.wav`, etc.). That set may be used later when concrete files are brought into the build.

### Asset boundary

Character/audio failure must never block quiz play. Implement a presentation-only asset catalog/adapter and fallback behavior. The later SwiftUI port should preserve the same semantic asset contract through `AssetCatalog.swift`.

## Phase 0 architecture decision

Keep the proven social-quiz separation pattern:

`core / renderers / data / presentation / tests`

Do not cross-import the social quiz at runtime. Its current QuizEngine is deliberately a countdown game with wrong-answer time penalties and is not suitable as the Power TOEIC study-session core.

The existing `ChoiceRenderer` interface remains a useful pattern:

- `setAnswerHandler(handler)`;
- `render(question)`;
- `showResult(result)`.

## Exact next work

### Task 2.0

Create the initial `subjects/english/power-toeic/` structure:

```text
index.html
styles.css
assets/
  characters/
  audio/
js/
  core/
  data/
    question-bank-adapter.js
    fixtures.js
  renderers/
  ui/
    asset-catalog.js
  main.js
tests/
package.json
```

Define a narrow question-bank adapter so runtime code does not know where production questions come from.

Create only a tiny synthetic fixture set sufficient to exercise the UI. Clearly identify it as test/demo data, not production TOEIC content.

Create the semantic asset catalog/fallback layer early so Irasutoya/OtoLogic sources can be swapped without touching session logic.

Add smoke/adapter tests, then proceed directly to Task 2.1 common study-session core if safe.

## Fixed product behavior

Still canonical:

- Part 5-style sentence cloze, exactly four choices;
- fine-grained weak-skill concentration once external data supplies skill IDs;
- user-editable weakness-generated workout recipes;
- QUICK / TRAINING / POWER / WEAKNESS / CUSTOM / TEST / REVIEW through one session engine;
- no target-score feature;
- no skill-to-body-part mapping;
- no runtime LLM generation;
- Drill Sergeant presents the drill in the UI;
- skinny Trainee represents the learner and becomes progressively more muscular;
- characters do not own answer/mastery/workout logic.

## Swift transition gate

Do not begin the Swift port merely because a few Web screens exist. First complete Web V1 and the cross-platform freeze:

1. platform-neutral model definitions;
2. deterministic conformance fixtures;
3. expected session/mastery/review/progression behavior;
4. documented data adapter format;
5. semantic asset IDs and replacement/fallback behavior.

Then the native Swift/SwiftUI phase starts. Equivalent JavaScript and Swift fixtures must produce equivalent domain outputs.
