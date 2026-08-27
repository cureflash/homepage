# Power TOEIC — handoff

## Current state

**APP TRACK Phase 11 / Task 11.4 — App Store submission readiness — is still in progress.**

Phase 11.3 is complete. Phase 11.4 now has Credits, machine-readable submission blockers, the three verified OtoLogic MP3s committed as native SwiftPM resources, a non-blocking semantic audio playback path, and **all 4 approved temporary Irasutoya character works physically bundled for both Web and SwiftPM**. No production taxonomy/question generation/QA work belongs to this track.

## Phase 11.4 progress

### Credits and blocker tracking

Native `CreditsView` is reachable from Home and preserves the exact required attribution:

`OtoLogic (CC BY 4.0) / https://otologic.jp/`

`subjects/english/power-toeic-ios/Release/SubmissionReadiness.json` keeps `submission_ready: false` and separates repository-owned blockers from Apple/account/operator inputs.

The temporary character-art blocker and OtoLogic audio blocker are closed. The **only remaining repository-owned blocker is the final original App Store icon artwork**.

### Irasutoya character bundle checkpoint — complete

The official Irasutoya source article/title pairs remain fixed by `Release/AssetManifest.json`. Exact original Blogger-hosted PNGs are bundled for all four planned works:

- `irasutoya_sergeant_instructor.png` — 法務教官のイラスト（男性） — 416×450 — SHA256 `8137c37ef6868952a349f27773b0dee4af619594c5988798194de30873a5282e`;
- `irasutoya_trainee_skinny.png` — 痩せた男性のイラスト — 440×800 — SHA256 `9af166e1d9d00e421ab42e36a4379f5e34134839545ca62ac85b896b0e3d0428`;
- `irasutoya_trainee_muscular.png` — 筋肉質な人のイラスト（男性） — 640×800 — SHA256 `cc2c39ae95252b0fe36a8baad9230f0db028049e76a1139bdcc1c614d1862e80`;
- `irasutoya_trainee_bodybuilder.png` — ボディービルダーのイラスト — 240×450 — SHA256 `90a2c4090b7ccc0e00fced272edfb09fc5de1d935d87eb0d996b0fb4ee210e98`.

For Stage 5, the original Blogger asset is `body_builder.png` from the same 2014-06-14 Irasutoya article. Its direct source URL is corroborated by the historical `june29/irasutoya-data` metadata snapshot for the identical article URL/title/date. The committed bytes come from that original Blogger-hosted URL, not from Pinterest or another third-party copy.

The deterministic bundler keeps identical bytes in:

- `subjects/english/power-toeic/assets/characters/` for Web;
- `subjects/english/power-toeic-ios/Sources/PowerTOEIC/Resources/Character/` for SwiftPM.

Web `asset-catalog.js` maps neutral semantic IDs to the physical files while correct/wrong/complete reactions retain neutral fallback. Swift `AssetCatalog` retains the same semantic separation. `CharacterView` loads through `Bundle.module`; character presentation still does not own quiz correctness, selection, mastery, or progression truth.

Temporary Irasutoya accounting is **4 bundled / 4 planned**, safely below the project policy limit of 20 unique works. Runtime hotlinking remains disabled.

Release metadata regression now also treats provenance as an invariant: every character entry marked `bundled` must keep an official `irasutoya.com` article URL, an approved Blogger/Google-hosted direct image URL, a `resource_name`/PNG filename match, and a lowercase 64-hex SHA256. This prevents a later asset swap from silently retaining `bundled` status without pinned provenance.

### Validation for the 4/4 character checkpoint

One-shot GitHub Actions run `33035572949` passed end-to-end after two validation-only corrections:

- exact bodybuilder original file acquired successfully at 240×450;
- Web test suite: 64/64 passed;
- Swift Package test suite: 31/31 passed;
- SwiftPM copied all four character PNGs into the package resource bundle;
- Web and Swift copies of all four PNGs are byte-identical;
- all four SHA256 values were checked during the run;
- generated Stage 5 asset/provenance commit: `d0c009a`.

The earlier failed attempts were not content/provenance failures: run 1 rejected the valid portrait because the generic checker required width >=300; run 2 exposed a Web test that still intentionally simulated Stage 5 as absent. The checker now accepts a portrait with short side >=200 / long side >=300, and the fallback test explicitly makes Stage 5 absent before asserting Stage 0 fallback.

### OtoLogic native resources completed

The intended Google Drive SE files remain verified and bundled:

- `otologic_correct.mp3` — Drive `1WP7Mi1cCbv9hWWGdIRnKoR3NDOQaBRxt` — SHA256 `085e5a4a3fe2669ad1378423c412f7e76cc6b2b573b3081380207f5d8b8ea2fc`;
- `otologic_incorrect.mp3` — Drive `1DcJNhKfHNwifcWy1sAAgzzCjbOPa4iDE` — SHA256 `c5141a298f48e63c4606ab34b189590cd0f64611ae9546463511d63da7deb2eb`;
- `otologic_inspiration.mp3` — Drive `11uMGcDxfqPhhPsVc2HtNWtWTKgGixPSy` — SHA256 `4c61471b681bdb407fcdaa183e6881aaa76be05887accf761f73b0454f0f5f66`.

`BundleAudioCuePlayer` remains behind `AudioCuePlaying`, resolves semantic IDs through `AssetCatalog`, uses SwiftPM resources, safely no-ops on failures, and never owns QuizSession progression/correctness.

## Exact next work

Continue **Phase 11.4** only after the final original AppIcon artwork is supplied:

1. Reconcile latest `main` before changing release assets.
2. Populate the native `AppIcon.appiconset` from the supplied final original artwork. Do not use the temporary Irasutoya character art as the final brand icon by default and do not invent a final logo merely to clear the blocker.
3. Re-run Web tests, Swift tests, iOS simulator/device builds, unsigned archive, archived privacy-manifest validation, and verify the final icon is present in release packaging.
4. Re-audit `AppStoreMetadata.json`, `SubmissionReadiness.json`, privacy manifest, Credits, support/privacy URL placeholders, and repository-owned blockers.
5. Check Task 11.4 only when repository-owned readiness is complete and all remaining gates are genuinely external Apple/account/operator inputs.
6. Do not claim TestFlight/App Store submission until signing/App Store Connect inputs are supplied and a real signed upload succeeds.

## Fixed decisions

- Web remains the behavioral reference implementation;
- native uses Swift + SwiftUI + standard Apple frameworks first;
- shared contracts/fixtures determine cross-platform behavior;
- no target-score feature, skill-to-body-part mapping, runtime LLM, or production question creation in APP TRACK;
- temporary art = Irasutoya via semantic asset IDs, below 20 unique works;
- audio = verified OtoLogic resources with CC BY 4.0 attribution preserved;
- persistence/audio/character-presentation failures must not block quiz operation;
- runtime remains offline-capable and does not require network access for the core quiz loop.