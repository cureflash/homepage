# Social Studies Worksheet Factory — handoff

## Current state

- Active stage: junior-high
- Active field: history
- Verified production unit: Jomon / Yayoi overview
- Active unit: Yayoi society, small states, Yamatai / Himiko
- Next role: FACTCHECK
- Canonical implementation path: `subjects/social/worksheets/`

## Completed GENERATE work

Created `subjects/social/worksheets/data/yayoi-states-yamatai-himiko.js` as the second junior-high history unit. The sheet is intentionally low-density: two sections, six concise study sentences, and two historical-source images.

New core-term groups:

- 小国
- 奴国 / 後漢 / 漢委奴国王
- 魏志倭人伝 / 邪馬台国 / 卑弥呼
- 魏 / 親魏倭王

All six new sentence records are `factcheckStatus: "pending_factcheck"`. Both new image records are also `pending_factcheck`. Do not publish this unit as verified until the independent FACTCHECK run is complete.

## Source basis collected during generation

The generator used these only as candidate evidence; the next run must independently reopen them and verify every claim rather than accepting this summary.

- MEXT current junior-high Social Studies commentary for placement under `古代までの日本` and state formation.
- Fukuoka City Museum `金印` and `発掘が語る福岡の歴史` for the Na state, 57 CE, Later Han, the gold seal, and northern-Kyushu elite burials.
- National Diet Library `邪馬台国論争` for the bibliographic identity and historical importance of the `魏志倭人伝` record.
- Imperial Household Agency 2025 lecture material for the third-century Yamatai/Himiko description.
- Waseda University Library historical chronology for the 239 embassy and `親魏倭王` entry.
- Kyoto National Museum `謎多き「三角縁神獣鏡」` for Himiko's diplomacy with Wei and the `親魏倭王` title.
- National Museum of Japanese History FAQ and NDL material for the unresolved location of Yamatai.

## New image candidates

1. `King of Na gold seal faces.jpg`
   - explicitly labeled as a Toi Museum replica image, not the original artifact photograph
   - Wikimedia Commons file page currently states PHGCOM, CC BY-SA 3.0 / GFDL
   - must independently verify the exact file license and attribution on FACTCHECK

2. `Gishiwajinden.jpg`
   - image of text identified on Commons as `魏志倭人伝`
   - Commons file page currently states CC0 1.0
   - must independently verify provenance, labeling, and file license on FACTCHECK

No AI-generated historical images were added.

## Generator/tool changes

The previously verified Jomon/Yayoi unit remains in place. The worksheet UI now supports multiple registered units through a unit selector:

- `subjects/social/worksheets/data/jomon-yayoi.js` now registers the existing verified unit in `window.SOCIAL_WORKSHEET_UNITS` without changing its verified sentence content.
- `subjects/social/worksheets/data/yayoi-states-yamatai-himiko.js` registers the new pending unit.
- `subjects/social/worksheets/index.html` loads both datasets and exposes the unit selector.
- `subjects/social/worksheets/app.js` selects the active dataset while preserving seeded explicit-term-only blank generation.

The cloze algorithm itself was not broadened: only `sentence.terms` are eligible for blanks, and the same seed/rate still determines the blank set reproducibly.

## Exact next starting point

Perform an independent FACTCHECK of only `yayoi-society-states-yamatai-himiko`.

Treat these six claims as untrusted and reopen authoritative sources from scratch:

1. formation of small states and northern-Kyushu ruler tomb evidence;
2. Na-state embassy to Later Han in 57 CE;
3. identification/wording of the `漢委奴国王` gold seal;
4. what `魏志倭人伝` is and what it records about Yamatai/Himiko;
5. 239 embassy to Wei and the `親魏倭王` title/insignia wording;
6. statement that Yamatai's location remains unsettled, with Kyushu and Kinai as representative theories.

Also independently reopen both Commons file pages and verify the exact image identity, replica/original distinction, authorship, license, and attribution. Correct or reject any unsupported wording. If and only if all pending material is supportable, mark it `verified`, set `next_role` to `generate`, and advance to `kofun-period-yamato-polity`.
