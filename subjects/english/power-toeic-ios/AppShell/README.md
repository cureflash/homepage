# Power TOEIC iOS AppShell

This directory contains the minimal real Xcode iOS application target around the existing `PowerTOEIC` Swift Package module.

The application shell owns only platform packaging and launch concerns:

- `@main` iOS app entry point;
- Xcode application target/scheme;
- app-target privacy manifest;
- AppIcon/AccentColor asset-catalog slots;
- bundle/version build configuration boundaries.

It must not duplicate quiz, workout, mastery, review, persistence, character or question-bank domain logic from the Swift Package.

## Build-only placeholder values

`Config/PowerTOEIC.xcconfig` intentionally uses account-neutral CI placeholders such as:

- `invalid.placeholder.PowerTOEIC` bundle identifier;
- marketing version `0.0.0`;
- build number `1`.

These values prove the target can compile without committing Apple account information. They are **not submission metadata**.

Actual release values remain explicit release-time inputs in `../Release/AppStoreMetadata.json` and must be supplied by the release operator/App Store Connect account.

Never commit signing certificates, provisioning profiles, Apple Developer Team IDs or App Store Connect credentials.

## Privacy manifest

`PowerTOEICApp/PrivacyInfo.xcprivacy` is copied from the canonical release template and is an application-target resource. It currently declares only app-local UserDefaults access with reason `CA92.1`, no tracking and no collected data types.

If runtime behavior changes, update the canonical release template and this app-target copy together before shipping.

## App icon

The AppIcon catalog is intentionally empty during engineering CI. Final original icon artwork is a submission-readiness requirement and must not be fabricated from temporary Irasutoya character art.

## CI validation

The repository release workflow builds this target unsigned for both Simulator and generic iOS Release configurations. Package tests remain the domain-behavior gate. A real TestFlight upload remains gated on Apple signing/App Store Connect inputs.
