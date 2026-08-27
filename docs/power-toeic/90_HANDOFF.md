# Power TOEIC — handoff

## Current state

**APP TRACK Phase 11 / Task 11.3 is complete. The exact next APP TRACK task is Phase 11 / Task 11.4 — App Store submission readiness checkpoint.**

The APP/UI track remains separate from production taxonomy/question generation and QA. No production question data was authored or validated in this checkpoint.

## Phase 11.3 completed — real iOS app target and release regression

### Real Xcode application target

Added the minimal application shell at:

`subjects/english/power-toeic-ios/AppShell/`

The real Xcode project is:

`subjects/english/power-toeic-ios/AppShell/PowerTOEICApp.xcodeproj`

and uses the shared scheme `PowerTOEICApp`.

The app target imports the existing local `PowerTOEIC` Swift Package product. The app shell owns only:

- `@main` application entry point;
- Xcode target/scheme;
- app-target privacy manifest;
- AppIcon/AccentColor asset-catalog slots;
- account-neutral bundle/version build configuration.

Quiz, workout, mastery, review, persistence, character and question-bank logic remain in the existing Swift Package; do not duplicate them in the app target.

### App-target resources and config

Added:

- `AppShell/PowerTOEICApp/PrivacyInfo.xcprivacy`;
- `AppShell/PowerTOEICApp/Assets.xcassets/`;
- `AppShell/Config/PowerTOEIC.xcconfig`;
- `AppShell/README.md`.

The privacy manifest is byte-for-byte checked against the canonical `Release/PrivacyInfo.xcprivacy` and declares app-local UserDefaults reason `CA92.1` only.

The AppIcon set is intentionally empty. Do not fabricate final icon artwork from temporary Irasutoya character art. A final original 1024x1024 App Store icon remains a submission-readiness requirement.

The xcconfig uses deliberately invalid/account-neutral engineering values (`invalid.placeholder.PowerTOEIC`, marketing version `0.0.0`) so CI can compile without storing Apple credentials. These must be replaced only at release time with user-owned values.

### Release CI

Added:

`.github/workflows/power-toeic-ios-app-build.yml`

It validates:

1. Xcode project/scheme discovery;
2. unsigned Debug build for generic iOS Simulator;
3. unsigned Release build for generic iOS device;
4. unsigned Release `.xcarchive` creation;
5. archived `PowerTOEICApp.app` existence;
6. archived `PrivacyInfo.xcprivacy` presence and plist validity.

Initial Xcode target CI proved the Simulator and generic-device builds. A later workflow edit introduced a GitHub workflow-evaluation error because `runner.temp` was referenced from job-level `env`; PR #114 replaced it with a workflow-safe fixed `/tmp/PowerTOEICApp.xcarchive` path. The corrected archive workflow then passed through unsigned archive creation and archived privacy-manifest validation.

The Swift package regression suite remained green while introducing the app shell.

### What is intentionally not done

No actual TestFlight upload was attempted. That requires user-owned Apple account and signing inputs that must not be invented or committed:

- Apple Developer Team ID;
- production bundle identifier;
- App Store Connect app ID;
- SKU;
- distribution certificate / signing mechanism;
- provisioning configuration;
- real marketing version/build number;
- public privacy-policy URL;
- public support URL.

An unsigned `.xcarchive` proves application packaging and release compilation; it is not an uploadable signed TestFlight artifact.

## Exact next work

### Phase 11 / Task 11.4 — App Store submission readiness checkpoint

1. Start from latest `main` and re-read canonical docs plus `80_IOS_RELEASE_READINESS.md`.
2. Audit the actual app target/resources and produce a machine-checkable submission blocker list. Do not invent user/account values.
3. Add an in-app Credits/About surface if the OtoLogic sounds remain in the intended shipping asset set; preserve exact CC BY 4.0 credit.
4. Verify whether temporary Irasutoya character files have actually been bundled. Only mark assets `bundled` in `Release/AssetManifest.json` after file existence and source/license checks; otherwise keep them as explicit blockers/placeholders.
5. Require final original AppIcon artwork before declaring submission-ready.
6. Validate App Store metadata strings and privacy declarations against then-current Apple requirements.
7. Keep account/signing/App Store Connect identifiers external and list them as operator inputs.
8. Run Swift Package tests plus iOS app unsigned archive regression after any release-readiness changes.
9. Mark 11.4 complete only if every repository-owned requirement is complete and every remaining blocker is solely an explicit external operator/account input. Do not claim that the app has been submitted or uploaded unless a real signed upload occurs.

## Fixed decisions

- Web remains the behavioral reference implementation;
- native uses Swift + SwiftUI + standard Apple frameworks first;
- shared contracts/fixtures determine cross-platform behavior;
- no target-score feature, skill-to-body-part mapping, runtime LLM, or production question creation in APP TRACK;
- temporary art = Irasutoya via semantic asset IDs, below 20 unique works;
- audio = existing Google Drive OtoLogic SE with CC BY 4.0 attribution preserved;
- persistence failures must not block quiz operation;
- runtime remains offline-capable and does not require network access for the core quiz loop.
