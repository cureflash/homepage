# Power TOEIC — handoff

## Current state

**APP TRACK Phase 10 / Task 10.5 is complete. The exact next APP TRACK task is Phase 10 / Task 10.6 — port the Drill Sergeant / Trainee character UX and progression using semantic asset IDs.**

The APP/UI track remains separate from production taxonomy/question generation and QA. No production question data was authored or validated in this checkpoint.

## Phase 10.5 completed — native SwiftUI screens

Added native presentation files under the existing responsibility boundaries:

- `Views/Home/HomeView.swift`
- `Views/Workout/WorkoutView.swift`
- `Views/Quiz/QuizView.swift`
- `Views/Result/ResultView.swift`
- `Views/Weakness/WeaknessView.swift`

The native UI now provides:

- mobile-first Home cards for QUICK / WEAKNESS / TRAINING / POWER / REVIEW / TEST / CUSTOM;
- Home summary values for trainee stage, POWER points and due-review count supplied by the caller;
- Workout configuration that edits mode/skill/count intent rather than fixed question IDs;
- four-choice cloze Quiz presentation backed directly by `QuizSession`;
- one-tap selection followed by explicit answer submission and explanation reveal;
- Result totals, accuracy and per-skill breakdown derived from `SessionResults`;
- Weakness list presentation with a callback to launch training for the selected skill;
- TEST/mixed context hides the micro-skill label.

The views intentionally do not calculate correctness, question selection, mastery transitions or review dates. Those remain in the previously ported domain engines. Character composition/progression is still separate and belongs to 10.6. Persistence is still separate and belongs to 10.7.

## Validation note

This checkpoint was authored against the existing Swift 6 package/domain contracts and uses only SwiftUI/Foundation APIs already allowed by the project. The repository connector available in this run cannot execute `swift test` locally, so final merge is gated on the repository's macOS Swift CI. No production question fixture or production database file was changed.

## Exact next work

### Phase 10 / Task 10.6 — native character UX/progression

1. Port the Web semantic asset mapping into a Swift `AssetCatalog` boundary; do not hard-code Irasutoya filenames in Quiz/Home views.
2. Port the deterministic progression calculation and consume `ProgressionState.stage` 0...5 without deriving correctness/mastery in the View.
3. Compose the Drill Sergeant as question presenter and Trainee as answer-side learner around `QuizView` without changing `QuizSession`.
4. Preserve the ability to remove/replace character presentation without touching domain behavior.
5. Keep temporary Irasutoya usage below 20 unique works and preserve later replacement by semantic ID.
6. Keep OtoLogic audio behind a separate semantic audio boundary; audio failure must never block quiz progress.

After 10.6, proceed to 10.7 native persistence, then 10.8 full JavaScript/Swift conformance.

## Fixed decisions

- Web remains the behavioral reference implementation;
- native uses Swift + SwiftUI + standard Apple frameworks first;
- JavaScript code is not embedded or mechanically translated line-by-line into Swift;
- shared contracts/fixtures determine cross-platform behavior;
- no target-score feature, skill-to-body-part mapping, runtime LLM, or production question creation in APP TRACK;
- temporary art = Irasutoya via semantic asset IDs, below 20 unique works;
- audio = existing Google Drive OtoLogic SE with CC BY 4.0 attribution preserved.
