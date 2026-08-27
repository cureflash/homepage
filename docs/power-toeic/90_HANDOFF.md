# Power TOEIC — handoff

## Current state

**APP TRACK Phase 10 / Tasks 10.6 and 10.7 are complete. The exact next APP TRACK task is Phase 10 / Task 10.8 — run the JavaScript/Swift conformance suite on one shared commit.**

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

The reconciled implementation passed the macOS Swift CI before merge. The obsolete stale PR was closed rather than merged.

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

`AppStoreTests.swift` covers round-trip persistence, corrupt/unsupported fallback, mutation isolation, storage-failure behavior, and invalid-state rejection. The final 10.6+10.7 branch passed the native Swift CI and was merged as PR #102.

## Exact next work

### Phase 10 / Task 10.8 — cross-platform conformance closeout

1. Use a docs-only checkpoint commit after the merged 10.6/10.7 code so both existing workflows trigger on the same SHA:
   - `.github/workflows/power-toeic-tests.yml` -> Node 22 / Web `npm test`;
   - `.github/workflows/power-toeic-swift-tests.yml` -> macOS / `swift test`.
2. Confirm both suites are green on the same commit.
3. Confirm Swift continues to consume the canonical Web fixture directly at `subjects/english/power-toeic/tests/fixtures/cross-platform-conformance-v1.json` rather than a copied Swift fixture.
4. If both are green, mark 10.8 complete and advance the APP TRACK to Phase 11 / Task 11.1.
5. Do not modify production question content while closing Phase 10.

## Fixed decisions

- Web remains the behavioral reference implementation;
- native uses Swift + SwiftUI + standard Apple frameworks first;
- JavaScript code is not embedded or mechanically translated line-by-line into Swift;
- shared contracts/fixtures determine cross-platform behavior;
- no target-score feature, skill-to-body-part mapping, runtime LLM, or production question creation in APP TRACK;
- temporary art = Irasutoya via semantic asset IDs, below 20 unique works;
- audio = existing Google Drive OtoLogic SE with CC BY 4.0 attribution preserved;
- persistence failures must not block quiz operation.
