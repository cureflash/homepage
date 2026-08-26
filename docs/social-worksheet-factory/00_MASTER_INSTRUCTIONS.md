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

Do not force a topic into an exact school year when the national curriculum does not prescribe that year. Store school stage, formal subject/field, unit, era, and practical grouping separately.

## Core workflow — generation backlog mode

The old per-unit GENERATE → FACTCHECK alternation is retired for normal scheduled runs. Normal scheduled operation is high-volume GENERATE-only production. Independent fact-checking is accumulated for a later explicit batch.

`STATUS.json` is authoritative for the current production position, generation target, and unverified backlog.

### Normal scheduled GENERATE run

1. Start from latest `main` and read this file, `20_EXECUTION_PLAN.md`, `STATUS.json`, and `90_HANDOFF.md`.
2. Resume from the first ungenerated unit in the fixed production order.
3. Target **20 newly generated sequential units per scheduled run**. Twenty is the normal target, not a ceiling and not permission to create weak/duplicate material. If a real source or technical blocker prevents twenty safe units, complete the largest coherent safe batch and record the exact blocker.
4. Cross field/course/school-stage boundaries when needed to reach twenty, while preserving curriculum order and correct metadata.
5. When production reaches a high-school course whose detailed queue has not yet been defined, use the current MEXT Course of Study/commentary to create its ordered queue first, then continue generating within the same run. Queue planning itself does not count as a generated worksheet unit.
6. Collect candidate facts from authoritative/public sources; do not copy textbook prose.
7. Convert source material into structured facts, then write concise original learner sentences.
8. Mark only genuine core terms as explicit `terms`. Those terms are rendered red in study mode and are the only default cloze targets.
9. Keep each A4 explanation sheet intentionally low-density. Use useful real historical/official source images where appropriate.
10. Never use AI-generated historical images. Record exact source/license candidates for every external image; these remain provisional until independent fact-check.
11. Generate worksheet behavior from structured sentence definitions, preserving deterministic seeded blank selection. Never blank arbitrary nouns.
12. Every newly generated fact, learner sentence, key-point/timeline claim, and image record remains `pending_factcheck`.
13. Append every generated unit ID to `STATUS.json.unverified_backlog` without deleting earlier pending units.
14. Pending units must NOT be added to the public `subjects/social/worksheets/index.html` selector. Public learner-facing content remains verified-only.
15. At the end of a normal run, remain in generation mode and advance `active_unit` to the next ungenerated curriculum item. Do not automatically switch to fact-check.

### FACTCHECK batch — only when explicitly requested or deliberately switched

1. Do not fact-check merely because pending material exists.
2. Treat every selected pending sentence, fact, key-point/timeline claim, and image claim as untrusted.
3. Independently reopen MEXT curriculum/commentary and authoritative museum/archive/government/primary sources from scratch.
4. Verify dates, names, causal relations, terminology, curriculum placement, exact image identity, provenance and license.
5. Correct or reject unsupported wording; record evidence for the final wording.
6. Do not copy protected textbook prose.
7. Fact-check as large a backlog batch as can be safely completed. The intended workflow is large independent review batches, not alternation after each unit.
8. Only verified units may be added to the public selector. Remove only passed units from `unverified_backlog`.
9. Return to generation mode afterward unless the user explicitly requests continued fact-checking.

## Worksheet model

Each knowledge item should contain, at minimum:

- `id`
- `schoolStage`
- `field`
- `unit`
- `era`
- high-school `formalCourse` where applicable
- `importance`
- original sentence/template
- explicit `terms` / cloze targets
- `sources`
- `factcheckStatus`

## Image rule

- Historical image generation is prohibited for learner-facing sheets.
- Prefer iconic real sources: artifacts, portraits, maps, ruins, documents, official photographs, etc.
- Verify the actual file license/terms rather than merely the host website.
- Attribution/license notes must remain available in printable output or accompanying source notes.
- Generation-stage license checks are provisional until the later independent fact-check.

## Publication rule

A sheet is publishable only after independent factual and image-license verification, valid cloze/answer mapping, reproducible seeded generation, and acceptable A4 print layout. Pending backlog units may exist under `subjects/social/worksheets/data/`, but they must remain outside the public selector until verified.
