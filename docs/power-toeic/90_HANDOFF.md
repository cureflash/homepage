# Power TOEIC — handoff

## Current state

**APP TRACK Phase 11 / Task 11.4 — App Store submission readiness — is still in progress.**

Phase 11.3 is complete. Phase 11.4 now has Credits, machine-readable submission blockers, the three verified OtoLogic MP3s committed as native SwiftPM resources, and a non-blocking semantic audio playback path. No production taxonomy/question generation/QA work belongs to this track.

## Phase 11.4 progress

### Credits and blocker tracking

Native `CreditsView` is reachable from Home and preserves the exact required attribution:

`OtoLogic (CC BY 4.0) / https://otologic.jp/`

`subjects/english/power-toeic-ios/Release/SubmissionReadiness.json` keeps `submission_ready: false` and separates repository-owned blockers from Apple/account/operator inputs.

Repository-owned blockers are now only:

1. final original App Store icon artwork;
2. exact approved Irasutoya temporary character files bundled behind semantic IDs.

The OtoLogic audio blocker is closed.

### OtoLogic native resources completed

The intended Google Drive SE files were re-fetched and verified:

- `otologic_correct.mp3` — Drive `1WP7Mi1cCbv9hWWGdIRnKoR3NDOQaBRxt` — SHA256 `085e5a4a3fe2669ad1378423c412f7e76cc6b2b573b3081380207f5d8b8ea2fc`;
- `otologic_incorrect.mp3` — Drive `1DcJNhKfHNwifcWy1sAAgzzCjbOPa4iDE` — SHA256 `c5141a298f48e63c4606ab34b189590cd0f64611ae9546463511d63da7deb2eb`;
- `otologic_inspiration.mp3` — Drive `11uMGcDxfqPhhPsVc2HtNWtWTKgGixPSy` — SHA256 `4c61471b681bdb407fcdaa183e6881aaa76be05887accf761f73b0454f0f5f66`.

A one-shot PR workflow downloaded the corresponding current public OtoLogic source URLs and required all three SHA256 values to match the connected Drive copies before committing any binary. The check passed, the exact MP3 bytes were committed under:

`subjects/english/power-toeic-ios/Sources/PowerTOEIC/Resources/Audio/`

The one-shot vendor workflow was then removed; normal builds no longer depend on network access.

`Release/AssetManifest.json` now records the actual Drive IDs, SHA256 values, and `bundle_status: bundled` for all three audio assets.

### Native audio playback path

`BundleAudioCuePlayer` remains behind the existing `AudioCuePlaying` protocol. It:

- resolves `audio.correct`, `audio.wrong`, and `audio.inspiration` through `AssetCatalog`;
- uses SwiftPM `Bundle.module` resources;
- handles both preserved `Audio/` and flattened SwiftPM resource layouts;
- uses `AVAudioPlayer` only as presentation infrastructure;
- safely no-ops for missing/invalid resources;
- never owns QuizSession progression/correctness;
- is the default audio adapter in `PowerTOEICAppEnvironment`.

Tests now require all three semantic audio IDs to resolve to real bundled data with the expected byte sizes, while keeping playback fire-and-forget.

## Exact next work

Continue **Phase 11.4** in this order:

1. Run the complete Swift Package and iOS app build/archive CI on the audio-bundled PR and confirm the SwiftPM resources survive app/archive packaging.
2. Reconcile latest `main`; merge the audio checkpoint only if all required CI is green.
3. Acquire/bundle the exact four approved Irasutoya temporary character works behind existing semantic IDs; verify the actual source files and current usage terms before changing their manifest entries from `not_yet_bundled`.
4. Keep the total temporary Irasutoya count below 20 unique works; current plan is only four.
5. Keep final AppIcon blocked until original submission artwork is supplied; do not use temporary Irasutoya art as a fake final icon.
6. Re-audit metadata/privacy after repository-owned assets are complete. Phase 11.4 may be checked only when all remaining blockers are genuine external Apple/account/operator inputs.
7. Do not claim TestFlight/App Store submission without a signed real upload.

## Fixed decisions

- Web remains the behavioral reference implementation;
- native uses Swift + SwiftUI + standard Apple frameworks first;
- shared contracts/fixtures determine cross-platform behavior;
- no target-score feature, skill-to-body-part mapping, runtime LLM, or production question creation in APP TRACK;
- temporary art = Irasutoya via semantic asset IDs, below 20 unique works;
- audio = verified OtoLogic resources with CC BY 4.0 attribution preserved;
- persistence/audio/character-presentation failures must not block quiz operation;
- runtime remains offline-capable and does not require network access for the core quiz loop.
