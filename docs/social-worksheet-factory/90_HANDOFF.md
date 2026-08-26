# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use retired `social-worksheets/`.
- GENERATE scope defined by `00_MASTER_INSTRUCTIONS.md` is **complete**.
- FACTCHECK is manual batch work only.
- Verified learner-facing coverage now runs through `contemporary-japan-cumulative-review`.
- Pending backlog count: **194 units**.
- Public selector remains verified-only.

## Latest independent FACTCHECK batch — first 5 backlog units

The following five units were independently checked against current MEXT curriculum/commentary plus government, archive, library, treaty, or other authoritative sources. Their unit-level, fact-level, learner-sentence-level, and retained image-level `factcheckStatus` values are now `verified`, and they have been added to the public selector.

1. `imperialism-sino-japanese-russo-japanese-wars` — 帝国主義と日清・日露戦争
2. `taisho-democracy-interwar-japan` — 大正デモクラシーと戦間期
3. `asia-pacific-war` — アジア・太平洋戦争
4. `postwar-japan` — 戦後日本の出発
5. `contemporary-japan-cumulative-review` — 現代日本と近現代の累積復習

## Corrections / image decisions

- `taisho-democracy-interwar-japan`: narrowed the learner sentence about the 1925 治安維持法 so that it describes the law's stated targets (organizations aiming at alteration of the kokutai or denial of the system of private property) instead of broadly saying it regulated social movements and thought in general.
- `taisho-democracy-interwar-japan`: removed the generation-stage Hara Takashi portrait. The Commons file page only established a U.S. public-domain claim and explicitly warned that the work might not be public domain outside the United States, so it was not retained for Japanese learner-facing publication.
- `asia-pacific-war`: removed the generation-stage surrender-document image for the same reason: the Commons reuse statement established U.S. public-domain status but did not provide a sufficiently clear Japan-side reuse basis for this factory's publication rule.
- `imperialism-sino-japanese-russo-japanese-wars`: retained the Shimonoseki Treaty ratification image and the Japan–Korea Annexation Treaty image after rechecking the Commons provenance and Japan-side public-domain tags.
- `postwar-japan`: retained the Constitution of Japan signature image after rechecking its Commons provenance and CC BY-SA 4.0 license.

## Evidence families used

- 文部科学省『中学校学習指導要領（平成29年告示）解説 社会編』 for curriculum placement and required historical scope.
- 国立公文書館 for the Sino-Japanese War, Russo-Japanese War, Shimonoseki/Portsmouth-related material, Korea annexation, wartime/end-of-war records, postwar reform, reconstruction, and high-growth chronology.
- 外務省外交史料館 for treaty and diplomatic-history cross-checks.
- 国立国会図書館 for Taisho democracy, universal male suffrage / Peace Preservation Law, and the Constitution of Japan.
- Wikimedia Commons only for exact file identity/provenance/license checks; a file was not retained merely because it existed on Commons.

## Backlog / publication state

- Previous pending backlog: 199
- Independently verified in this batch: 5
- Current pending backlog: 194
- `subjects/social/worksheets/index.html` now loads these five units after `meiji-state-industrialization.js` and before `app.js`.
- No unit after these five has been published or removed from the pending backlog.

## Exact next social action

Continue independent FACTCHECK from the new backlog head:

1. `constitution-constitutionalism`
2. `fundamental-human-rights`
3. `diet`
4. `cabinet`
5. `courts`
6. `separation-of-powers`

Continue sequentially from there only when FACTCHECK is explicitly requested. GENERATE is finished; do not invent additional generation work.

## Factcheck discipline retained

- Treat each selected pending fact, learner sentence, key point/timeline claim, and image claim as untrusted until independently reopened and checked.
- Correct or reject unsupported wording rather than preserving generated text for convenience.
- Verify exact image identity, provenance, and reuse terms before learner-facing publication.
- Only verified units may be added to the public selector and removed from `unverified_backlog`.
- Reconcile latest `main` before shared writes and never roll back parallel progress.
