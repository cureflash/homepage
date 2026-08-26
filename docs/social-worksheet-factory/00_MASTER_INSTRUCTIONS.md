# Social Studies Worksheet Factory — master instructions

Purpose: build a source-grounded social-studies worksheet factory for `cureflash/homepage`, starting with junior-high history/civics and later expanding to high-school history/civics.

## Canonical path

The canonical implementation path is `subjects/social/worksheets/`.
Never recreate or use the retired root path `social-worksheets/`.

## Production order

1. Junior-high history
2. Junior-high civics
3. High-school History Comprehensive (`歴史総合`)
4. High-school Japanese History Advanced (`日本史探究`)
5. High-school World History Advanced (`世界史探究`)
6. High-school civics (`公共` and later related courses)

Do not force a topic into an exact school year when the national curriculum does not prescribe that year. Store school stage, formal subject/field, unit, era, and a practical grade grouping separately.

## Core workflow — generation backlog mode

As of 2026-08-26, the old one-unit GENERATE → FACTCHECK alternation is retired for normal scheduled runs.

The default scheduled mode is high-volume GENERATE-only production. Fact-checking is accumulated and performed later as an explicit batch operation.

`STATUS.json` is authoritative for the current production position, generation target, and unverified backlog.

### Normal scheduled GENERATE run

1. Read latest `main`, this file, `20_EXECUTION_PLAN.md`, `STATUS.json`, and `90_HANDOFF.md`.
2. Resume from the first ungenerated unit in the fixed production order.
3. Target **10 newly generated units per scheduled run**. This is a throughput target, not permission to create weak or duplicate material. If a genuinely hard blocker prevents ten safe units, finish the largest coherent safe batch and record the exact blocker.
4. A run may cross a history/civics or school-stage boundary when needed to reach ten units, but it must preserve the production order and update stage/field metadata correctly.
5. Collect claims from authoritative/public sources, but do not copy textbook prose.
6. Convert source material into structured facts, then write short original study sentences from those facts.
7. Mark the minimum core terms that should be memorized. These terms are rendered red on the explanation sheet and are the only default cloze targets.
8. Prefer a small amount of information per A4 explanation sheet. Use several concrete historical-source images where useful.
9. Do not use AI-generated historical images. Use photographs/scans of commonly taught artifacts, portraits, maps, ruins, documents, etc. whose reuse terms have been checked at generation time and must be rechecked before publication. Record exact source and license metadata.
10. Generate/update worksheet data from structured sentence definitions rather than hand-authoring many worksheet variants.
11. Every newly generated fact, learner sentence, image record, key-point claim, and timeline claim remains `pending_factcheck`.
12. Append every generated unit ID to `STATUS.json.unverified_backlog` without deleting earlier pending units.
13. **Do not add pending units to the public `subjects/social/worksheets/index.html` selector.** Public learner-facing material remains verified-only.
14. At the end of a normal scheduled run, keep the factory in generation mode and advance to the next ungenerated unit. Do not automatically switch to fact-check merely because a batch was generated.

### FACTCHECK batch — only when explicitly requested or state is deliberately switched

1. Do not run fact-check merely because pending material exists. A user instruction or deliberate state change must request batch fact-checking.
2. Treat every pending sentence and image claim as untrusted. Do not approve it merely because the generator supplied a citation.
3. Independently reopen MEXT curriculum/commentary and authoritative museum/archive/government/primary sources from scratch.
4. Verify dates, names, causal relations, terminology, curriculum placement, key-point/timeline wording, and the exact image identity/license/source.
5. Correct or reject unsupported claims. Record what source supports the final wording.
6. Do not copy protected textbook prose. Facts may be rewritten into original concise sentences.
7. Fact-check as large a backlog batch as can be safely completed; the intended use is to verify many accumulated units together rather than alternating after each unit.
8. Only verified units may be added to the public selector. Remove each approved unit from `unverified_backlog` and keep any unresolved units pending.
9. After a requested fact-check batch, return to generation mode unless the user explicitly asks to continue fact-checking.

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
- A generation-stage license check is provisional until the later independent fact-check confirms the exact file and terms.

## Publication rule

A sheet is publishable only when its included claims are independently fact-checked, cloze targets map to valid answers, the generated worksheet is reproducible from a seed, the print layout fits the intended paper size, and image reuse terms are independently verified.

Pending backlog units may exist in `subjects/social/worksheets/data/`, but they must not be learner-facing through the public selector until verified.
