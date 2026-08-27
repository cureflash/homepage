# Power TOEIC — handoff

## Current state

**APP TRACK Phase 11 / Task 11.4 — App Store submission readiness — is still in progress.**

Phase 11.3 is complete. Phase 11.4 now has explicit Credits, machine-readable submission blockers, verified Google Drive OtoLogic source files, and a native semantic audio playback boundary. No production taxonomy/question generation/QA work belongs to this track.

## Phase 11.4 progress

### Credits and blocker tracking

Native `CreditsView` is reachable from Home and preserves the exact required attribution:

`OtoLogic (CC BY 4.0) / https://otologic.jp/`

`subjects/english/power-toeic-ios/Release/SubmissionReadiness.json` keeps `submission_ready: false` and separates repository-owned blockers from Apple/account/operator inputs.

Repository-owned blockers remain:

1. final original App Store icon artwork;
2. exact approved Irasutoya temporary character files bundled behind semantic IDs;
3. exact three OtoLogic MP3 binaries bundled as SwiftPM resources.

### OtoLogic source files verified

The intended files in the existing Google Drive SE library have been confirmed as actual `audio/mpeg` files:

- `otologic_correct.mp3` — `1WP7Mi1cCbv9hWWGdIRnKoR3NDOQaBRxt`;
- `otologic_incorrect.mp3` — `1DcJNhKfHNwifcWy1sAAgzzCjbOPa4iDE`;
- `otologic_inspiration.mp3` — `11uMGcDxfqPhhPsVc2HtNWtWTKgGixPSy`.

They remain `not_yet_bundled` in `Release/AssetManifest.json` until the exact binaries exist in the repository resource bundle.

### Native audio playback path completed

Added `BundleAudioCuePlayer` behind the existing `AudioCuePlaying` protocol. It:

- resolves `audio.correct`, `audio.wrong`, and `audio.inspiration` through `AssetCatalog`;
- uses SwiftPM `Bundle.module` resources under `Sources/PowerTOEIC/Resources/Audio/`;
- uses `AVAudioPlayer` only as presentation infrastructure;
- safely no-ops for missing/invalid resources;
- never throws into or owns QuizSession progression/correctness;
- is now the default audio adapter in `PowerTOEICAppEnvironment`.

The shipping filenames are fixed in the Audio resource directory README. The directory is declared through `Package.swift`, but the MP3 binaries themselves are intentionally still absent, so the blocker remains truthful.

An initial Xcode failure exposed a Swift visibility rule: internal `Bundle.module` cannot be used directly as a public initializer default argument. The initializer now accepts an optional bundle and resolves `Bundle.module` internally.

Validation after that fix:

- Swift tests run `33031064304`: success;
- iOS app build/archive run `33031064312`: success, including Simulator Debug, generic-device Release, unsigned archive, and archived privacy-manifest validation.

A parallel duplicate `BundleAudioCuePlayer` implementation appeared during this checkpoint and was removed rather than leaving two competing audio boundaries.

## Exact next work

Continue **Phase 11.4** in this order:

1. Commit the exact three already-verified OtoLogic MP3 binaries into `Sources/PowerTOEIC/Resources/Audio/` using the fixed filenames.
2. Strengthen release tests/CI to verify those three resources exist in `Bundle.module` and the generated/archive packaging contains the SwiftPM resource bundle.
3. Only after those checks pass, change the three OtoLogic entries in `Release/AssetManifest.json` to `bundled`, remove `otologic_audio_assets_bundled` from repository blockers, and retain exact Credits attribution.
4. Acquire/bundle the exact four approved Irasutoya temporary character works behind existing semantic IDs; verify source/usage conditions before marking them bundled.
5. Keep final AppIcon blocked until original submission artwork is supplied; do not use temporary Irasutoya art as a fake final icon.
6. Re-audit metadata/privacy after repository-owned assets are complete. Phase 11.4 may be checked only when all remaining blockers are genuine external Apple/account/operator inputs.
7. Do not claim TestFlight/App Store submission without a signed real upload.

## Fixed decisions

- Web remains the behavioral reference implementation;
- native uses Swift + SwiftUI + standard Apple frameworks first;
- shared contracts/fixtures determine cross-platform behavior;
- no target-score feature, skill-to-body-part mapping, runtime LLM, or production question creation in APP TRACK;
- temporary art = Irasutoya via semantic asset IDs, below 20 unique works;
- audio = existing Google Drive OtoLogic SE with CC BY 4.0 attribution preserved;
- persistence/audio/character-presentation failures must not block quiz operation;
- runtime remains offline-capable and does not require network access for the core quiz loop.
