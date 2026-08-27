# Power TOEIC — handoff

## Current state

**APP TRACK Phase 10 is complete. The exact next APP TRACK task is Phase 11 / Task 11.1 — app lifecycle, offline behavior and accessibility pass.**

The APP/UI track remains separate from production taxonomy/question generation and QA. No production question data was authored or validated in these checkpoints.

## Phase 10.6 completed — native character UX/progression

The previously blocked character work was reconciled onto the latest `main` rather than merging a stale branch that was 23 commits behind.

Merged implementation includes:

- `Core/ProgressionEngine.swift` with the frozen Web stage thresholds `[0, 20, 60, 140, 280, 500]` and the same deterministic point rules;
- `Views/Character/AssetCatalog.swift` using stable semantic IDs for Sergeant/Trainee/audio resources;
- `Views/Character/CharacterView.swift` and `CharacterQuizView.swift` as detachable presentation composition;
- presentation-only callbacks from `QuizView` so character/audio reactions observe `Attempt` events without owning correctness or session state;
- OtoLogic `audio.correct`, `audio.wrong`, `audio.inspiration` mappings with CC BY 4.0 attribution metadata preserved;
- temporary Irasutoya mappings limited to four unique works, safely below the configured 20-work commercial threshold;
- shared Web conformance fixture coverage for native progression behavior.

The reconciled implementation passed the macOS Swift CI before merge. The obsolete stale PR #99 was closed rather than merged. PR #102 was merged at `cd44e42a67bc6add495802d47cb27ae4ac85edb5`.

## Phase 10.7 completed — native persistence

Added `Persistence/AppStore.swift` with:

- `VersionedNativeAppStore`;
- injected `AppStatePersistenceBackend` boundary;
- `UserDefaultsPersistenceBackend` as the standard native adapter;
- the same version-1 platform-neutral persistence envelope used by Web: attempts, review entries, progression;
- safe default state when nothing is stored;
- safe reset/fallback for corrupt JSON, unsupported versions, or backend read/remove failures;
- write failures that do not block quiz operation;
- mutation helpers for appending attempts and replacing review/progression domains without overwriting the other domains;
- validation of persisted attempts, review entries, and progression before writes.

`AppStoreTests.swift` covers round-trip persistence, corrupt/unsupported fallback, mutation isolation, storage-failure behavior, and invalid-state rejection. The final 10.6+10.7 branch passed the native Swift CI before merge.

## Phase 10.8 completed — JavaScript/Swift conformance closeout

A docs-only checkpoint after the merged native code intentionally triggered both existing Power TOEIC workflows on the exact same commit.

Results:

- Web Node 22 workflow run `33027870787`: **success** (`npm test`);
- native macOS Swift workflow run `33027870790`: **success** (`swift test`).

Swift continues to load the canonical Web fixture directly from:

`subjects/english/power-toeic/tests/fixtures/cross-platform-conformance-v1.json`

No copied Swift-only conformance fixture was introduced. This satisfies the Phase 10 cross-platform gate.

## Exact next work

### Phase 11 / Task 11.1 — app lifecycle, offline behavior and accessibility pass

1. Define the native composition/dependency-container boundary that creates the question repository, versioned app store, progression state and top-level SwiftUI navigation without putting domain rules in Views.
2. Verify app launch with no persisted state, valid persisted state, corrupt persisted state and unavailable/failed storage.
3. Verify the native quiz remains usable when optional character/audio resources are missing and that offline operation does not require runtime network/LLM access.
4. Audit SwiftUI semantics for VoiceOver: meaningful labels/hints for answer buttons, progress, correct/wrong feedback, character presentation, and primary actions; decorative artwork should stay hidden from accessibility where appropriate.
5. Check Dynamic Type / narrow-screen resilience and ensure correct/wrong meaning is not conveyed by color alone.
6. Add focused tests or deterministic presentation/state helpers where possible and keep domain logic out of UI.
7. After 11.1 passes CI, proceed to 11.2 App Store assets/metadata/privacy requirements.

## Fixed decisions

- Web remains the behavioral reference implementation;
- native uses Swift + SwiftUI + standard Apple frameworks first;
- JavaScript code is not embedded or mechanically translated line-by-line into Swift;
- shared contracts/fixtures determine cross-platform behavior;
- no target-score feature, skill-to-body-part mapping, runtime LLM, or production question creation in APP TRACK;
- temporary art = Irasutoya via semantic asset IDs, below 20 unique works;
- audio = existing Google Drive OtoLogic SE with CC BY 4.0 attribution preserved;
- persistence failures must not block quiz operation.
