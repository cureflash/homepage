# Social Studies Worksheet Factory — handoff

## Current state

- Active stage: junior-high
- Active field: history
- Active unit: Jomon / Yayoi overview
- Next role: FACTCHECK
- Prototype worksheet/generator has been created under `subjects/social/worksheets/`.

## Prototype intent

The first A4 study sheet is deliberately light on information. It introduces:

- Jomon: settled life, pit dwellings, Jomon pottery, shell mounds, dogu
- Yayoi: wet-rice agriculture, Yayoi pottery, high-floored storehouses, bronze/iron tools, dotaku, moated settlements / Yoshinogari

Core terms render red in study mode. The same explicit terms become eligible blanks in generated worksheet mode.

## Evidence used during generation (not yet independent approval)

- MEXT current junior-high Social Studies commentary: historical field, `古代までの日本` and large-flow understanding.
- National Museum of Japanese History: Jomon settled life; hunting/gathering/fishing/cultivation; wet-rice agriculture spreading from northern Kyushu; metal objects including dotaku.
- Yoshinogari Historical Park official pages: moated Yayoi settlement, pit buildings, storehouse areas, and development of the settlement.
- Wikimedia Commons file pages for the actual image-file licenses. The prototype uses only non-AI images and records file/license/source links.

## Required next run

1. Do not trust the wording above as proof.
2. Independently reopen MEXT and authoritative museum/archaeological sources.
3. Verify every sentence in `subjects/social/worksheets/data/jomon-yayoi.js`.
4. Verify each image file's actual reuse license and attribution requirement.
5. Correct or reject anything unsupported.
6. If all claims and image metadata pass, change each item to `verified`, update `STATUS.json.next_role` to `generate`, and mark the first independent fact-check checkbox in `20_EXECUTION_PLAN.md` complete.

## Important constraint

Do not use AI-generated historical images. Do not copy prose from current textbooks. Build original short sentences from independently verified facts.
