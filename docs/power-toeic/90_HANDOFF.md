# Power TOEIC — handoff

## Current state

**APP TRACK Phase 11 / Task 11.2 is complete. The exact next APP TRACK task is Phase 11 / Task 11.3 — create a real Xcode iOS app shell/target and run archive-oriented TestFlight release regression.**

The APP/UI track remains separate from production taxonomy/question generation and QA. No production question data was authored or validated in this checkpoint.

## Phase 11.2 completed — App Store assets / metadata / privacy

### Packaging audit

The native implementation at `subjects/english/power-toeic-ios/` is currently a Swift Package library. It is suitable for Swift compilation/tests and for sharing the native implementation, but it is **not itself an archiveable App Store application target**.

Phase 11.3 must therefore introduce the smallest real Xcode iOS app shell/target around the existing `PowerTOEIC` module. Do not duplicate domain logic inside that shell.

The release-time values that require the user's Apple account remain explicit inputs rather than invented repository values:

- Apple Developer Team ID;
- bundle identifier;
- App Store Connect app ID;
- SKU;
- signing/provisioning configuration;
- marketing version/build number;
- privacy-policy URL;
- support URL.

Canonical config boundary:

`subjects/english/power-toeic-ios/Release/AppStoreMetadata.json`

### Privacy

The actual native implementation was audited. Current local state consists of attempts, review entries, trainee progression and locally stored question reports. The current native runtime has no account backend, analytics/advertising/tracking SDK, runtime LLM, or required network service for the quiz loop.

Therefore the current shipping model is **local-only/no off-device collection**. This statement must be re-audited if a later phase adds sync, remote reporting, payments, analytics, advertising or accounts.

Apple requires a privacy-policy URL in App Store Connect for iOS, while App Review guidance also requires the policy to be accessible inside the app. A native `PrivacyPolicyView` was added and is reachable from `HomeView` through the `home.privacy` button. The public policy URL remains a release-time input.

### Required Reason API

`UserDefaultsPersistenceBackend` uses Foundation `UserDefaults` only for app-local state. Apple's current Required Reason API documentation maps this use to:

- `NSPrivacyAccessedAPICategoryUserDefaults`;
- reason `CA92.1`.

Added canonical template:

`subjects/english/power-toeic-ios/Release/PrivacyInfo.xcprivacy`

It declares no tracking, no collected data types, and only the current UserDefaults required-reason API. Because there is no real app target yet, the manifest intentionally lives under `Release/`; 11.3 must add it to the actual iOS application target resources.

### Asset and attribution manifest

Added:

`subjects/english/power-toeic-ios/Release/AssetManifest.json`

It records four planned unique Irasutoya works behind existing semantic IDs, below the temporary `<20` policy threshold, with runtime hotlinking disabled. It also records the three OtoLogic audio semantic IDs and required credit:

`OtoLogic (CC BY 4.0) / https://otologic.jp/`

Current files are marked `not_yet_bundled`; 11.3/11.4 must only change that status after actual target resources exist and source/license checks are repeated. Do not use temporary Irasutoya character art as the App Store icon unless licensing/branding suitability is explicitly cleared; prefer original icon artwork for submission.

### Repository validation

Added `ReleaseMetadataTests.swift` to parse and validate:

- the release metadata JSON and its explicit release-time placeholders;
- the temporary Irasutoya unique-asset count and OtoLogic credit;
- the privacy manifest, including `CA92.1`.

Full rationale, Apple-reference links and acceptance checklist:

`docs/power-toeic/80_IOS_RELEASE_READINESS.md`

## Exact next work

### Phase 11 / Task 11.3 — Xcode app shell + TestFlight release regression

1. Start from latest `main` and re-read the canonical docs.
2. Create the smallest real iOS application project/target that imports/depends on the existing `PowerTOEIC` Swift package/module; do not copy core/model/view logic into the app shell.
3. Use iOS 17 as the minimum target and preserve the release metadata boundary from `Release/AppStoreMetadata.json`.
4. Add the canonical `Release/PrivacyInfo.xcprivacy` to the application target resources.
5. Add placeholder-safe AppIcon/AccentColor asset catalogs. Do not fabricate final copyrighted branding; original final icon artwork may remain a submission blocker.
6. Wire the app entry point to the existing native root/environment.
7. Add build/archive-oriented CI validation that does not require signing credentials where possible (`CODE_SIGNING_ALLOWED=NO` or equivalent simulator/generic-device compile validation).
8. Re-run the Swift package tests and the Web/Swift conformance suites after introducing the app shell.
9. Do not attempt an actual TestFlight upload without valid Apple account/signing/App Store Connect inputs. Record those as explicit blockers rather than inventing them.
10. Only mark 11.3 complete when the real app target builds in CI and release-regression checks are green. Then proceed to 11.4 submission-readiness checkpoint.

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
