# Social Studies Worksheet Factory — master instructions

Purpose: build a source-grounded social-studies worksheet factory for `cureflash/homepage`, starting with junior-high history/civics and later expanding to high-school history/civics.

## Production order

1. Junior-high history
2. Junior-high civics
3. High-school History Comprehensive (`歴史総合`)
4. High-school Japanese History Advanced (`日本史探究`)
5. High-school World History Advanced (`世界史探究`)
6. High-school civics (`公共` and later related courses)

Do not force a topic into an exact school year when the national curriculum does not prescribe that year. Store school stage, formal subject/field, unit, era, and a practical grade grouping separately.

## Core workflow

The factory alternates two roles. `STATUS.json.next_role` is authoritative.

### GENERATE run

1. Read latest `main`, this file, `20_EXECUTION_PLAN.md`, `STATUS.json`, and `90_HANDOFF.md`.
2. Work only on the active unit.
3. Collect claims from authoritative/public sources, but do not copy textbook prose.
4. Convert source material into structured facts, then write short original study sentences from those facts.
5. Mark the minimum core terms that should be memorized. These terms are rendered red on the explanation sheet and are the only default cloze targets.
6. Prefer a small amount of information per A4 sheet. Use several concrete historical-source images where useful.
7. Do not use AI-generated historical images. Use photographs/scans of commonly taught artifacts, portraits, maps, ruins, documents, etc. whose reuse terms have been checked. Record source and license metadata.
8. Generate/update the worksheet tool from structured sentence definitions rather than hand-authoring many worksheet variants.
9. Mark changed claims/content as `pending_factcheck`; set `next_role` to `factcheck` before ending.

### FACTCHECK run

1. Start from latest `main` and read the same factory state files.
2. Treat every pending sentence as an untrusted claim. Do not approve it merely because the generator supplied a citation.
3. Independently re-open authoritative sources and verify dates, names, causal relations, terminology, curriculum placement, and image license/source.
4. Prefer MEXT curriculum/commentary plus museums, archives, government bodies, e-Gov, Diet/National Archives, universities, or similarly authoritative primary/curatorial sources.
5. Correct or reject unsupported claims. Record what source supports the final wording.
6. Do not copy protected textbook prose. Facts may be rewritten into original concise sentences.
7. When all pending content for the active batch is independently verified, mark it `verified`, set `next_role` to `generate`, and advance the queue only when acceptance criteria are met.

## Worksheet model

Each knowledge item should contain, at minimum:

- `id`
- `schoolStage`
- `field`
- `unit`
- `era`
- `importance`
- original `sentenceTemplate`
- explicit `terms` / cloze targets
- `sources`
- `factcheckStatus`

The generator must blank only explicit cloze targets. It must not randomly delete arbitrary nouns.

## Image rule

- Historical image generation is prohibited for published learning sheets.
- Prefer iconic objects that commonly appear in school history materials: pottery, dogu, dotaku, gold seal, portraits, maps, ruins, documents, etc.
- Verify the actual file license/terms, not merely the host website.
- Attribution/license notes must remain available in the printable output or accompanying source note.

## Publication rule

A sheet is publishable only when its included claims are independently fact-checked, cloze targets map to valid answers, the generated worksheet is reproducible from a seed, the print layout fits the intended paper size, and image reuse terms are recorded.
