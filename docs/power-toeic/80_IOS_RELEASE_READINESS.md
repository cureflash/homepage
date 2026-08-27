# Power TOEIC — iOS release readiness

This document freezes the APP TRACK release-preparation boundary for Phase 11.2. It does not contain App Store Connect credentials, signing secrets, or production question content.

## Current packaging state

The native implementation is currently a Swift Package library at:

`subjects/english/power-toeic-ios/`

This is sufficient for domain/UI compilation and Swift tests, but it is **not an App Store-archiveable iOS application target**. Phase 11.3 must create or wire a real Xcode iOS app target/project that depends on the existing `PowerTOEIC` package/module without moving domain logic into the app shell.

Required release-time values remain external inputs:

- Apple Developer Team ID;
- bundle identifier;
- App Store Connect app ID;
- SKU;
- signing certificate/provisioning configuration;
- marketing version/build number;
- privacy policy URL;
- support URL.

Do not commit signing credentials.

## App identity

Canonical product metadata source:

`subjects/english/power-toeic-ios/Release/AppStoreMetadata.json`

Fixed values:

- display name: `Power TOEIC`;
- primary category: Education;
- minimum iOS: 17.0.

Account-specific and release-number values remain explicit placeholders until a release operator provides them.

## App icon and launch presentation

A final App Store icon must be supplied by the real Xcode app target. Do not treat temporary character illustrations as permanent brand artwork.

Temporary Irasutoya art remains presentation-only and must stay under the usage-policy threshold defined in `50_ASSET_POLICY.md`. Do not hotlink it at runtime. Before submission, every actually bundled character file must be marked `bundled` in `Release/AssetManifest.json` and its exact source/license record must be rechecked.

Use the standard SwiftUI launch path unless a concrete product requirement justifies custom launch artwork. Do not add a decorative launch screen that delays startup.

## Audio attribution

If the three current OtoLogic sounds are bundled, the app must expose the credit:

`OtoLogic (CC BY 4.0) / https://otologic.jp/`

Canonical records are in `Release/AssetManifest.json`. Add an in-app Credits/About surface before App Store submission if the audio is still present in the shipping binary.

## Privacy audit

Current implementation stores these values locally:

- attempts;
- review entries;
- trainee progression;
- locally stored bad-question reports.

The current native runtime contains no account service, advertising SDK, analytics SDK, tracking SDK, location/contact/photo/camera/microphone collection, or runtime LLM/network dependency for the core quiz loop.

Therefore App Store Connect privacy answers for the **current binary** should state that the app does not collect data off-device. This must be re-audited if later work adds sync, accounts, analytics, remote bad-question submission, payments, advertising, or another network service.

Apple requires an iOS privacy-policy URL in App Store Connect, and review guidance also requires the privacy policy to be accessible inside the app. `PrivacyPolicyView` is therefore reachable from `HomeView`; the public URL remains a release-time input.

References:

- https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-privacy/
- https://developer.apple.com/app-store/review/guidelines/

## Required Reason API audit

The native persistence adapter uses `UserDefaults` solely for data that is accessible to this app itself. Apple's current Required Reason API documentation identifies `NSPrivacyAccessedAPICategoryUserDefaults` and reason `CA92.1` for this use.

Canonical manifest template:

`subjects/english/power-toeic-ios/Release/PrivacyInfo.xcprivacy`

It declares:

- tracking: false;
- collected-data types: none;
- accessed API: UserDefaults;
- reason: CA92.1.

The template intentionally lives under `Release/` while the project is Swift Package-only. Phase 11.3 must add it to the **actual iOS application target resources**. Do not assume a privacy manifest embedded only in an unrelated Swift Package resource bundle is sufficient for the final app target.

Reference:

- https://developer.apple.com/documentation/bundleresources/app-privacy-configuration/nsprivacyaccessedapitypes/nsprivacyaccessedapitype
- https://developer.apple.com/documentation/bundleresources/adding-a-privacy-manifest-to-your-app-or-third-party-sdk

## App Store metadata constraints to preserve

Before submission, validate all App Store Connect fields against Apple's then-current rules. At Phase 11.2 the important fixed constraints are:

- app name is limited by App Store Connect and must remain valid;
- subtitle must remain within App Store Connect's limit;
- privacy policy URL is required for iOS;
- bundle ID/SKU/account identifiers are created in the user's Apple account and must not be invented in repository automation.

Reference:

- https://developer.apple.com/help/app-store-connect/reference/app-information/app-information

## Phase 11.2 acceptance checklist

- [x] Swift Package-only packaging gap documented.
- [x] app identity/config boundary recorded without fake Apple account values.
- [x] final app-icon requirement separated from temporary Irasutoya character art.
- [x] temporary character sources and OtoLogic attribution recorded in machine-readable manifest.
- [x] actual local-only data handling audited.
- [x] UserDefaults Required Reason API declared in canonical privacy-manifest template.
- [x] privacy policy accessible inside native UI.
- [x] release metadata files can be repository-reviewed without App Store credentials.

## Exact Phase 11.3 starting point

Create the minimal real Xcode iOS application shell/target around the existing `PowerTOEIC` module, add the canonical privacy manifest to that target, supply placeholder-safe asset catalogs, then run archive-oriented release regression without committing signing credentials. TestFlight upload itself requires valid Apple account/signing inputs and must remain gated on those inputs.
