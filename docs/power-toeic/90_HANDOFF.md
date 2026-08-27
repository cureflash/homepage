# Power TOEIC — handoff

## Current state

**APP TRACK Phase 11 / Task 11.4 is in progress.** The repository-owned App Store submission-readiness audit is now explicit and machine-checkable, but the task must remain incomplete until the shipping asset blockers below are resolved.

The APP/UI track remains separate from production taxonomy/question generation and QA. No production question data was authored or validated in this checkpoint.

## Phase 11.4 progress completed

### In-app credits

Added `Sources/PowerTOEIC/Views/Home/CreditsView.swift` and linked it from `HomeView`.

It preserves the exact required OtoLogic credit:

`OtoLogic (CC BY 4.0) / https://otologic.jp/`

The credits surface is presentation-only and does not own quiz/domain logic.

### Machine-checkable submission readiness

Added:

`subjects/english/power-toeic-ios/Release/SubmissionReadiness.json`

It records repository requirements separately from external Apple/operator inputs and refuses to claim `submission_ready: true` while repository blockers remain.

Current repository blockers are:

1. the four planned Irasutoya character binary resources are still not bundled;
2. the three planned OtoLogic MP3 resources are still not bundled;
3. final original 1024x1024 AppIcon artwork has not been supplied.

`Package.swift` currently declares no binary resource processing for these character/audio files, and `Release/AssetManifest.json` correctly leaves all seven entries as `not_yet_bundled`. Do not change any entry to `bundled` until the actual file exists in the repository/app resource graph and its source/license has been checked.

### App Store metadata/privacy audit

Apple's current App Store Connect documentation was rechecked on 2026-08-27. The release metadata now records the current constraints used by the repository tests:

- app name: maximum 30 characters;
- subtitle: maximum 30 characters;
- iOS privacy policy URL: required.

`Power TOEIC` and `弱点を問題数で鍛えるTOEIC特訓` are within those limits.

The current native binary still has no account, advertising, analytics, tracking, or off-device data collection. The existing privacy declaration therefore remains appropriate for the current implementation, subject to re-audit if network/account/analytics behavior is later added.

### External operator inputs that must remain outside the repository

- Apple Developer Team ID;
- production bundle identifier;
- App Store Connect app ID;
- SKU;
- distribution signing/provisioning configuration;
- marketing version and build number;
- public privacy-policy URL;
- public support URL.

Do not invent or commit these values.

## Exact next work

Continue Phase 11.4 from latest `main` after this checkpoint is merged:

1. obtain and bundle the actual four Irasutoya character files and three OtoLogic audio files only with verified source/license provenance;
2. update `Package.swift` / app resource wiring as needed and mark only verified files `bundled` in `Release/AssetManifest.json`;
3. provide a final original 1024x1024 AppIcon and verify it is in the app target asset catalog;
4. rerun Swift Package tests plus the iOS unsigned build/archive regression;
5. update `SubmissionReadiness.json` to `submission_ready: true` only when every repository requirement is complete and all remaining inputs are external operator/account values;
6. only then mark 11.4 complete. Do not claim TestFlight upload or App Store submission without a real signed upload.

## Fixed decisions

- Web remains the behavioral reference implementation;
- native uses Swift + SwiftUI + standard Apple frameworks first;
- shared contracts/fixtures determine cross-platform behavior;
- no target-score feature, skill-to-body-part mapping, runtime LLM, or production question creation in APP TRACK;
- temporary art = Irasutoya via semantic asset IDs, below 20 unique works;
- audio = existing Google Drive OtoLogic SE with CC BY 4.0 attribution preserved;
- persistence failures must not block quiz operation;
- runtime remains offline-capable and does not require network access for the core quiz loop.
