# Power TOEIC — handoff

## Current state

**APP TRACK Phase 11 / Task 11.4 — App Store submission readiness — is in progress.**

Phase 11.3 is complete: the real Xcode app target builds for Simulator and generic iOS, produces an unsigned `.xcarchive`, and includes the valid privacy manifest. No production question content is owned by this track.

## Phase 11.4 progress

### In-app attribution is now explicit

Added native `CreditsView` and a `home.credits` entry point from `HomeView`.

The screen preserves the exact required audio credit:

`OtoLogic (CC BY 4.0) / https://otologic.jp/`

It also identifies Irasutoya as the current temporary character-art source without claiming that unbundled placeholders are already shipping assets.

### Submission blockers are machine-readable

Added:

`subjects/english/power-toeic-ios/Release/SubmissionReadiness.json`

`submission_ready` intentionally remains `false`. The repository-owned blockers currently are:

1. final original App Store icon artwork is missing;
2. the exact approved Irasutoya temporary character files are not yet bundled in the app target/package;
3. the three approved OtoLogic MP3 files are not yet bundled/wired to a native audio player.

Swift release tests assert that these blockers remain explicit rather than silently treating placeholders as completed release assets.

### Google Drive SE verification

The three intended OtoLogic files were fetched from the user's existing Google Drive SE library during this checkpoint and confirmed as actual MP3 files:

- `otologic_correct.mp3` — Drive file ID `1WP7Mi1cCbv9hWWGdIRnKoR3NDOQaBRxt`;
- `otologic_incorrect.mp3` — Drive file ID `1DcJNhKfHNwifcWy1sAAgzzCjbOPa4iDE`;
- `otologic_inspiration.mp3` — Drive file ID `11uMGcDxfqPhhPsVc2HtNWtWTKgGixPSy`.

This verifies source availability, but they are **not marked bundled** until the exact binary files are committed as resources and the native audio adapter resolves the semantic IDs to those resources.

### External operator inputs remain separate

`SubmissionReadiness.json` separately lists Apple/account/release inputs that repository automation must not invent:

- Apple Developer Team ID;
- production bundle identifier;
- App Store Connect app ID and SKU;
- distribution signing/provisioning;
- marketing version/build number;
- public privacy-policy URL;
- public support URL;
- final App Store screenshots/listing review.

A signed TestFlight/App Store upload must not be claimed until these inputs exist and an actual upload succeeds.

## Exact next work

Continue **Phase 11.4** from the repository-owned asset blockers, in this order:

1. Bundle the three verified Google Drive OtoLogic MP3 files as native resources, add a small native audio player behind `AudioCuePlaying`, and keep audio failure non-blocking for quiz progression.
2. Re-run Swift tests and unsigned Xcode archive CI; only then change OtoLogic asset statuses to `bundled` and remove that blocker.
3. Acquire/bundle the exact four approved Irasutoya temporary character works behind the existing semantic IDs, re-check source/usage conditions, and only then mark those entries `bundled`.
4. Keep final AppIcon as a blocker until original submission artwork is supplied; do not synthesize a fake “final” icon from temporary Irasutoya art.
5. After all repository-owned blockers are resolved, re-audit App Store metadata/privacy and leave only genuine external Apple-account/operator inputs.
6. Only then check 11.4 complete. Do not claim TestFlight/App Store submission without a signed upload.

## Fixed decisions

- Web remains the behavioral reference implementation;
- native uses Swift + SwiftUI + standard Apple frameworks first;
- shared contracts/fixtures determine cross-platform behavior;
- no target-score feature, skill-to-body-part mapping, runtime LLM, or production question creation in APP TRACK;
- temporary art = Irasutoya via semantic asset IDs, below 20 unique works;
- audio = existing Google Drive OtoLogic SE with CC BY 4.0 attribution preserved;
- persistence/audio/character-presentation failures must not block quiz operation;
- runtime remains offline-capable and does not require network access for the core quiz loop.
