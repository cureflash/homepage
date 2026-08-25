# Social Studies Worksheet Factory — handoff

## Current state

- Active stage: junior-high
- Active field: history
- Verified production unit: Jomon / Yayoi overview
- Next active unit: Yayoi society, small states, Yamatai / Himiko
- Next role: GENERATE
- Canonical implementation path: `subjects/social/worksheets/`

## Completed fact-check

The first Jomon / Yayoi prototype was independently checked against fresh authoritative sources rather than accepting the generator's citations.

Verified curriculum placement:

- MEXT current junior-high Social Studies commentary places the material under historical field `古代までの日本` and explicitly treats the spread of agriculture and resulting changes in life as part of `日本列島における国家形成`.

Verified content:

- Jomon settled life and hunting/gathering/fishing: National Museum of Japanese History, Room 1.
- Jomon pit dwellings: National Museum of Japanese History khirin archaeological record.
- Jomon pottery used for cooking: Agency for Cultural Affairs / Cultural Heritage Online.
- Shell mounds containing discarded eaten shells: Agency for Cultural Affairs / Cultural Heritage Online.
- Dogu as ritual/prayer objects: Agency for Cultural Affairs cultural-property explanations.
- Wet-rice agriculture reached northern Kyushu from the Korean Peninsula and spread through the archipelago; current Rekihaku chronology places its northern-Kyushu beginning around the 10th century BCE (about 3,000 years ago).
- Bronze and iron objects and dotaku used in ritual contexts: National Museum of Japanese History / Kids Rekihaku.
- Yoshinogari as a major moated Yayoi settlement, with high-floored storehouses and storage of rice/grain: Yoshinogari Historical Park official pages.

All seven sentence records in `subjects/social/worksheets/data/jomon-yayoi.js` now carry explicit source references and `factcheckStatus: "verified"`.

## Image-license review

All four image file pages were reopened and checked individually.

- Shakoki-dogu: CC BY-SA 4.0; source/author shown as Tokyo National Museum on the Commons file page.
- Yayoi pottery: wording corrected from vague `CC BY 4.0 compatible terms` to `Government of Japan Standard Terms of Use (Ver. 2.0, CC BY 4.0 compatible)` with ColBase attribution.
- Dotaku photograph: uploader Saigen Jiro released the photograph to the public domain (PD-self).
- Yoshinogari reconstructed high-floored storehouse photograph: uploader AsPJT, CC0 1.0.

No AI-generated historical images are used.

## Generator / layout check

- `app.js` blanks only the explicit `terms` entries.
- Blank selection is deterministic for the same seed/rate through the seeded PRNG.
- Worksheet and answer modes use the same selected blank set, so answers correspond to the generated blanks.
- The print stylesheet fixes the sheet to A4 portrait and keeps the prototype intentionally low-density.

## Progress

`20_EXECUTION_PLAN.md` now marks the independent prototype fact-check and first verified production-unit registration complete. `STATUS.json` has advanced to `yayoi-society-states-yamatai-himiko` with `next_role: generate`.

## Exact next starting point

On the next GENERATE run, work only on `Yayoi society, small states, Yamatai / Himiko`. Build its concise explanation-sheet facts first, then explicit cloze targets and suitable non-AI source images. Mark all new claims/images `pending_factcheck` and return `next_role` to `factcheck` before ending.
