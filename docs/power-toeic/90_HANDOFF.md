# Power TOEIC — handoff

## Current state

**APP TRACK Phase 8 is complete. The exact next APP TRACK task is Phase 9 / Task 9.1 — freeze platform-neutral models.**

The APP/UI track remains separate from production taxonomy/question generation and QA. No production question data was authored in this checkpoint.

## Phase 8.4 completed — Web beta entry point

The existing site had no standalone English subject landing page; `subjects/english/` contained only Power TOEIC. The smallest consistent learner-facing publish path was therefore the site top page.

Changes:

- added an `英語` navigation link pointing to `subjects/english/power-toeic/`;
- added a `Power TOEIC` card under `教科から探す`;
- marked the card `英語・β版`;
- explicitly states that question data is still being validated and expanded, so the app shell is not presented as a finished production question bank;
- added `https://homepage.hikaru0816tsc.workers.dev/subjects/english/power-toeic/` to `sitemap.xml`.

No synthetic fixture question was promoted or relabeled as production content.

## Web V1 status

The reference Web application now has:

- mobile-first home/navigation;
- common QuizSession;
- four-choice cloze renderer and immediate feedback;
- results;
- versioned browser persistence;
- deterministic mastery and weakness ranking;
- common WorkoutRecipe/selector for QUICK / TRAINING / POWER / WEAKNESS / CUSTOM / TEST / REVIEW;
- editable workout recipes and long/endless-style bounded sessions;
- deterministic review scheduling and mixed/review mastery gates;
- Drill Sergeant / Trainee presentation and deterministic progression;
- bad-question reporting;
- end-to-end regression coverage and synthetic 20,000-question performance regression;
- learner-facing beta entry point.

## Exact next work

### Phase 9 / Task 9.1 — freeze platform-neutral models

Before Swift code exists, inventory the actual Web V1 data shapes and freeze stable, platform-neutral contracts for at least:

- Question;
- WorkoutRecipe;
- Attempt;
- MasterySnapshot / per-skill state;
- ReviewEntry;
- Progression state/event inputs;
- QuestionReport;
- semantic Asset IDs where they cross platform boundaries.

Prefer a documented JSON-compatible contract plus validation/tests over exposing incidental JavaScript implementation details. Do not redesign learning behavior during the freeze unless a concrete ambiguity makes cross-platform equivalence impossible.

After 9.1, create deterministic cross-platform conformance fixtures in 9.2, then document the Web V1 behavior as the Swift reference in 9.3. Only after those gates pass should Phase 10 create the Swift/SwiftUI implementation.

## Verification policy

Power TOEIC tests run through `.github/workflows/power-toeic-tests.yml` on Node 22. For the Web beta publish change, the existing application code was not altered; the PR should still pass the complete Power TOEIC suite before merge.

## Fixed decisions

- Web = HTML/CSS/Vanilla JS/ES Modules until V1 freeze;
- Swift + SwiftUI starts only after Phase 9 conformance freeze;
- no target-score feature, skill-to-body-part mapping, runtime LLM, or production question creation in APP TRACK;
- temporary art = Irasutoya via semantic IDs, below 20 unique works;
- audio = existing Google Drive OtoLogic SE with CC BY 4.0 attribution preserved.
