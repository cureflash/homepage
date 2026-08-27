# Power TOEIC — handoff

## Current state

**APP TRACK Phase 11 / Task 11.1 is complete. The exact next APP TRACK task is Phase 11 / Task 11.2 — App Store assets, metadata and privacy requirements.**

The APP/UI track remains separate from production taxonomy/question generation and QA. No production question data was authored or validated in these checkpoints.

## Phase 11.1 completed — native lifecycle, offline behavior and accessibility

### App composition and launch lifecycle

Added a native composition boundary:

- `App/AppEnvironment.swift` defines `PowerTOEICAppEnvironment`, injected question-bank/persistence/asset/audio dependencies and `AppClock`;
- `AppLaunchSnapshot` restores persisted progression plus the deterministic count of due review entries outside SwiftUI Views;
- `PowerTOEICAppRoot` now renders the real `HomeView` from the launch snapshot instead of a placeholder `Text("Power TOEIC")` screen;
- `EmptyQuestionBankRepository` is an offline-safe no-content fallback and does not add runtime network or LLM behavior.

Launch behavior is covered for:

- no persisted state;
- valid persisted state;
- corrupt persisted state;
- storage read failure.

`AppEnvironmentTests.swift` uses an injected fixed clock and memory storage backend, so review-due restoration is deterministic.

### Offline/failure boundaries

The native runtime continues to require no network or runtime LLM service. Missing production content is handled through the repository boundary rather than online generation. Persisted-state failures fall back to defaults. Character artwork already falls back to SF Symbols/text, and audio remains behind the non-blocking presentation boundary.

### Accessibility and constrained layouts

Updated native presentation without moving correctness/mastery/review logic into Views:

- Home actions now expose explicit VoiceOver labels/hints; metric cards have combined accessible values and horizontal-to-vertical fallback;
- Quiz announces question progress, sentence, answer-choice letters/text, selected/correct/wrong states, explanation feedback and primary-action purpose;
- correct/wrong is communicated with text/icon semantics rather than color alone;
- Character presentation hides decorative art from VoiceOver, combines role/message into one accessible label, and stacks vertically for accessibility Dynamic Type sizes;
- Result uses Dynamic Type-friendly typography, explicit accuracy/count labels and vertical fallback for per-skill rows;
- Weakness rows adapt from horizontal to vertical layout and expose explicit accuracy/count and training-action labels;
- Workout Picker, Stepper and start action carry useful VoiceOver hints/values.

### Validation

Two safe implementation checkpoints were merged:

- PR #104 — lifecycle/offline/accessibility foundation, Swift workflow run `33028277241`: **success**;
- PR #105 — accessibility closeout for Result/Weakness/Workout, Swift workflow run `33028435596`: **success**.

No production question DB files were changed.

## Exact next work

### Phase 11 / Task 11.2 — App Store assets / metadata / privacy

1. Audit the current native package against actual App Store packaging requirements and identify what still requires a real Xcode app target/project rather than Swift Package-only structure.
2. Define the app identity metadata needed for packaging: display name, bundle-ID placeholder/config boundary, version/build-number ownership and minimum iOS target.
3. Define App Store icon/launch-screen requirements without creating final copyrighted/paid artwork; preserve temporary Irasutoya constraints and do not use Irasutoya as an App Store icon unless licensing/branding suitability is explicitly cleared.
4. Record OtoLogic attribution placement for bundled audio and the temporary Irasutoya source manifest/usage-policy references.
5. Audit privacy/data collection from actual implementation. Current local-only attempts/review/progression and bad-question reports must not be falsely described as server collection; add a privacy manifest only for APIs/reasons that the concrete app actually uses.
6. Add release metadata/checklists/config files that can be validated in repository CI without requiring App Store Connect credentials.
7. Do not invent App Store Connect IDs, signing-team IDs, certificates or account-specific values. Keep those as explicit release-time inputs.
8. After 11.2 is complete, proceed to 11.3 TestFlight build/release regression.

## Fixed decisions

- Web remains the behavioral reference implementation;
- native uses Swift + SwiftUI + standard Apple frameworks first;
- JavaScript code is not embedded or mechanically translated line-by-line into Swift;
- shared contracts/fixtures determine cross-platform behavior;
- no target-score feature, skill-to-body-part mapping, runtime LLM, or production question creation in APP TRACK;
- temporary art = Irasutoya via semantic asset IDs, below 20 unique works;
- audio = existing Google Drive OtoLogic SE with CC BY 4.0 attribution preserved;
- persistence failures must not block quiz operation;
- runtime remains offline-capable and does not require network access for the core quiz loop.
