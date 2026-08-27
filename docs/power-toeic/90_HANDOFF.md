# Power TOEIC — handoff

## Current state

**APP TRACK Phase 11 / Task 11.4 — App Store submission readiness — is still in progress.**

Phase 11.3 is complete. Phase 11.4 now has Credits, machine-readable submission blockers, the three verified OtoLogic MP3s committed as native SwiftPM resources, a non-blocking semantic audio playback path, and **3 of the 4 approved temporary Irasutoya character works physically bundled for both Web and SwiftPM**. No production taxonomy/question generation/QA work belongs to this track.

## Phase 11.4 progress

### Credits and blocker tracking

Native `CreditsView` is reachable from Home and preserves the exact required attribution:

`OtoLogic (CC BY 4.0) / https://otologic.jp/`

`subjects/english/power-toeic-ios/Release/SubmissionReadiness.json` keeps `submission_ready: false` and separates repository-owned blockers from Apple/account/operator inputs.

Repository-owned blockers remain:

1. exact Stage 5 Irasutoya bodybuilder file still to bundle behind `trainee.stage_5.*` semantic IDs;
2. final original App Store icon artwork.

The OtoLogic audio blocker is closed. The sergeant/skinny/muscular character files are no longer blockers.

### Irasutoya character bundle checkpoint

The official Irasutoya source article/title pairs remain fixed by `Release/AssetManifest.json`. The exact official Blogger-hosted PNGs were pinned and bundled for three works:

- `irasutoya_sergeant_instructor.png` — 法務教官のイラスト（男性） — 416×450 — SHA256 `8137c37ef6868952a349f27773b0dee4af619594c5988798194de30873a5282e`;
- `irasutoya_trainee_skinny.png` — 痩せた男性のイラスト — 440×800 — SHA256 `9af166e1d9d00e421ab42e36a4379f5e34134839545ca62ac85b896b0e3d0428`;
- `irasutoya_trainee_muscular.png` — 筋肉質な人のイラスト（男性） — 640×800 — SHA256 `cc2c39ae95252b0fe36a8baad9230f0db028049e76a1139bdcc1c614d1862e80`.

The deterministic bundler commits identical bytes into:

- `subjects/english/power-toeic/assets/characters/` for Web;
- `subjects/english/power-toeic-ios/Sources/PowerTOEIC/Resources/Character/` for SwiftPM.

Web `asset-catalog.js` maps only neutral semantic IDs to those physical files; correct/wrong/complete reactions retain the existing neutral-fallback contract. Swift `AssetCatalog` likewise keeps semantic aliases independent from quiz correctness/mastery. `CharacterView` loads resources through `Bundle.module` and falls back safely when a resource is absent.

Stage 5 `irasutoya_trainee_bodybuilder` intentionally still has no physical resource. Its official article is `https://www.irasutoya.com/2014/06/blog-post_14.html`, but the exact official direct PNG URL has not yet been independently pinned. Do **not** substitute a Pinterest/third-party copy, another bodybuilder illustration, or generated art. Until verified, Stage 5 retains `resourceName: nil` and the existing safe presentation fallback.

Temporary Irasutoya accounting is therefore **3 bundled / 4 planned**, safely below the 20-work limit.

### Validation for this checkpoint

GitHub Actions run `33034891265` passed end-to-end:

- deterministic download/PNG validation for the three pinned official images;
- Web test suite: 64/64 passed;
- Swift Package test suite: passed after separating `3 bundled` from `4 planned` licensing/accounting assertions;
- Web and Swift copies of all three PNGs are byte-identical;
- the workflow explicitly asserts that an unverified bodybuilder file is absent instead of silently substituting one;
- SwiftPM build copied all three PNGs as package resources.

Generated asset/provenance commit: `eb344b08ee68822ee77f1f0bc65d769b12330411`.

### OtoLogic native resources completed

The intended Google Drive SE files remain verified and bundled:

- `otologic_correct.mp3` — Drive `1WP7Mi1cCbv9hWWGdIRnKoR3NDOQaBRxt` — SHA256 `085e5a4a3fe2669ad1378423c412f7e76cc6b2b573b3081380207f5d8b8ea2fc`;
- `otologic_incorrect.mp3` — Drive `1DcJNhKfHNwifcWy1sAAgzzCjbOPa4iDE` — SHA256 `c5141a298f48e63c4606ab34b189590cd0f64611ae9546463511d63da7deb2eb`;
- `otologic_inspiration.mp3` — Drive `11uMGcDxfqPhhPsVc2HtNWtWTKgGixPSy` — SHA256 `4c61471b681bdb407fcdaa183e6881aaa76be05887accf761f73b0454f0f5f66`.

`BundleAudioCuePlayer` remains behind `AudioCuePlaying`, resolves semantic IDs through `AssetCatalog`, uses SwiftPM resources, safely no-ops on failures, and never owns QuizSession progression/correctness.

## Exact next work

Continue **Phase 11.4** in this order:

1. Reconcile latest `main` before changing the character checkpoint; unrelated concurrent worksheet/content changes must not be overwritten.
2. Independently identify and pin the exact official Blogger-hosted PNG for Irasutoya `ボディービルダーのイラスト` from `https://www.irasutoya.com/2014/06/blog-post_14.html`.
3. Bundle that exact file to Web and SwiftPM under `irasutoya_trainee_bodybuilder.png`, set Stage 5 `resourceName` back to that resource, and update manifest SHA256/provenance. Keep runtime hotlinking disabled.
4. Re-run Web tests, Swift tests, byte-identity validation, and iOS app build/archive validation so all four character resources are demonstrated inside release packaging.
5. Remove any one-shot acquisition workflow before merging if it is no longer needed; runtime/release builds must not depend on network acquisition.
6. Only after all four character works are bundled should `temporary_character_assets_bundled` be marked complete. The next repository-owned blocker is the final original AppIcon.
7. Re-audit metadata/privacy after repository-owned assets are complete. Phase 11.4 may be checked only when all remaining blockers are genuine external Apple/account/operator inputs.
8. Do not claim TestFlight/App Store submission without a signed real upload.

## Fixed decisions

- Web remains the behavioral reference implementation;
- native uses Swift + SwiftUI + standard Apple frameworks first;
- shared contracts/fixtures determine cross-platform behavior;
- no target-score feature, skill-to-body-part mapping, runtime LLM, or production question creation in APP TRACK;
- temporary art = Irasutoya via semantic asset IDs, below 20 unique works;
- audio = verified OtoLogic resources with CC BY 4.0 attribution preserved;
- persistence/audio/character-presentation failures must not block quiz operation;
- runtime remains offline-capable and does not require network access for the core quiz loop.
