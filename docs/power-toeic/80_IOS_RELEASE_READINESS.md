# Power TOEIC — iOS release readiness

This document records APP TRACK release-preparation state. It contains no App Store Connect credentials, signing secrets, or production question content.

## Current packaging state

Power TOEIC now has both:

- the reusable native Swift Package implementation at `subjects/english/power-toeic-ios/`;
- a real Xcode iOS application shell at `subjects/english/power-toeic-ios/AppShell/PowerTOEICApp.xcodeproj`.

The app shell depends on the existing local `PowerTOEIC` package product and does not duplicate domain logic. A shared `PowerTOEICApp` scheme builds the native application for iOS 17+.

Release CI has successfully validated unsigned Simulator and generic-device Release builds and an unsigned `.xcarchive`, including the archived app-target privacy manifest.

A real TestFlight upload still requires external user-owned Apple inputs:

- Apple Developer Team ID;
- production bundle identifier;
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

The Xcode app shell deliberately uses engineering-only placeholders in `AppShell/Config/PowerTOEIC.xcconfig`, including an invalid placeholder bundle identifier and marketing version `0.0.0`. They exist only so unsigned CI can build the target.

## App icon and launch presentation

The real app target contains an AppIcon asset-catalog slot, but final icon artwork has not been supplied. Do not treat temporary character illustrations as permanent brand artwork.

Temporary Irasutoya art remains presentation-only and must stay under the usage-policy threshold defined in `50_ASSET_POLICY.md`. Do not hotlink it at runtime. Before submission, every actually bundled character file must be marked `bundled` in `Release/AssetManifest.json` only after file-existence and source/license checks.

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

Therefore App Store Connect privacy answers for the **current binary** should state that the app does not collect data off-device. Re-audit this if later work adds sync, accounts, analytics, remote bad-question submission, payments, advertising, or another network service.

Apple requires an iOS privacy-policy URL in App Store Connect, and review guidance also requires the privacy policy to be accessible inside the app. `PrivacyPolicyView` is reachable from `HomeView`; the public URL remains a release-time input.

References:

- https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-privacy/
- https://developer.apple.com/app-store/review/guidelines/

## Required Reason API audit

The native persistence adapter uses `UserDefaults` solely for data accessible to this app itself. Apple's Required Reason API documentation identifies `NSPrivacyAccessedAPICategoryUserDefaults` and reason `CA92.1` for this use.

Canonical manifest template:

`subjects/english/power-toeic-ios/Release/PrivacyInfo.xcprivacy`

Actual app-target manifest:

`subjects/english/power-toeic-ios/AppShell/PowerTOEICApp/PrivacyInfo.xcprivacy`

Swift tests require these two files to remain byte-for-byte synchronized. The Xcode release workflow also verifies that the app-target manifest is present and valid inside the generated `.xcarchive`.

Reference:

- https://developer.apple.com/documentation/bundleresources/app-privacy-configuration/nsprivacyaccessedapitypes/nsprivacyaccessedapitype
- https://developer.apple.com/documentation/bundleresources/adding-a-privacy-manifest-to-your-app-or-third-party-sdk

## App Store metadata constraints to preserve

Before submission, validate all App Store Connect fields against Apple's then-current rules. Current fixed constraints include:

- app name must remain within App Store Connect's limit;
- subtitle must remain within App Store Connect's limit;
- privacy policy URL is required for iOS;
- bundle ID/SKU/account identifiers are created in the user's Apple account and must not be invented in repository automation.

Reference:

- https://developer.apple.com/help/app-store-connect/reference/app-information/app-information

## Phase 11.2 acceptance checklist

- [x] app identity/config boundary recorded without fake Apple account values.
- [x] final app-icon requirement separated from temporary Irasutoya character art.
- [x] temporary character sources and OtoLogic attribution recorded in machine-readable manifest.
- [x] actual local-only data handling audited.
- [x] UserDefaults Required Reason API declared in canonical privacy-manifest template.
- [x] privacy policy accessible inside native UI.
- [x] release metadata files can be repository-reviewed without App Store credentials.

## Phase 11.3 acceptance checklist

- [x] real Xcode iOS application target exists.
- [x] app shell imports the existing `PowerTOEIC` package rather than copying domain logic.
- [x] iOS 17 minimum and account-neutral CI config are explicit.
- [x] app-target privacy manifest is a target resource and synchronized with the canonical template.
- [x] AppIcon and AccentColor asset-catalog slots exist without fabricated final artwork.
- [x] unsigned Simulator build passes.
- [x] unsigned generic-device Release build passes.
- [x] unsigned `.xcarchive` generation passes.
- [x] archived app contains a valid `PrivacyInfo.xcprivacy`.
- [x] actual TestFlight upload is correctly gated on external Apple signing/App Store Connect inputs rather than fake credentials.

## Exact Phase 11.4 starting point

Close repository-owned App Store submission-readiness gaps: final Credits/About handling for OtoLogic if shipped, actual temporary-resource bundling/source verification, final original AppIcon requirement, machine-readable blocker checklist, and final metadata/privacy audit. Keep user/account/signing identifiers external. Do not claim submission or TestFlight upload without a signed real upload.
