# Science Worksheet Factory — execution plan

Complete work in order. Check an item only when its acceptance criteria are satisfied.

## Phase 0 — align with shared math infrastructure

- [x] Inspect latest math worksheet catalog/generator/validator/PDF/site implementation.
- [x] Identify which components can be generalized for science without breaking math.
- [x] Record existing worksheet URLs and site behavior that must remain stable.
- [x] Add/extend validation so science entries cannot publish broken links or invalid answers.

Acceptance: science has an explicit integration path into the shared worksheet pipeline and no duplicate standalone architecture is required without a documented reason.

## Phase 1 — science catalog/schema support

- [x] Extend structured metadata for `subject=science`, science field, school level, grade/course, formal high-school course, unit, skill/fact-set, worksheet mode, difficulty, seed, title, description, output path.
- [x] Support both numerical-answer and finite accepted-answer-set validation.
- [x] Support focused, mixed, and cumulative-review worksheet series.
- [x] Ensure site navigation can group/filter science independently from mathematics.

Acceptance: science worksheets can be registered and listed without hand-written HTML cards.

## Phase 2 — shared science generation foundation

- [ ] Implement reusable numerical formula-drill helpers.
- [ ] Implement reusable retrieval-drill helpers: forward/reverse, matching, classification, true/false, fill, ordering.
- [ ] Add independent answer validation for each supported problem family.
- [ ] Add duplicate detection based on normalized problem content.
- [ ] Add deterministic seed tests and printable-output tests.

Acceptance: new science topics can be defined mostly as structured content/rules rather than one-off page scripts.

## Phase 3 — physics production

Follow `curriculum/physics/PLAN.md` strictly in this order:

1. junior-high grade 1;
2. junior-high grade 2;
3. junior-high grade 3;
4. 物理基礎;
5. 物理.

- [ ] Cover all suitable basic calculation skills with multiple validated variants.
- [ ] Add basic retrieval drills only where needed for formula/symbol/concept recall.
- [ ] Add focused → mixed → cumulative review after core skills exist.

Acceptance: the defined physics production map has broad basic repetition coverage before chemistry production begins.

## Phase 4 — chemistry production

Follow `curriculum/chemistry/PLAN.md` strictly in this order:

1. junior-high grade 1;
2. junior-high grade 2;
3. junior-high grade 3;
4. 化学基礎;
5. 化学.

- [ ] Mass-produce suitable basic calculation drills.
- [ ] Build high-volume retrieval sets for nomenclature, formulae, properties, reactions, classifications, inorganic chemistry, organic chemistry and other curriculum-aligned memory content.
- [ ] Use reverse-direction questioning and mixed review extensively where answers remain unambiguous.

Acceptance: both quantitative and memorization-heavy chemistry topics have systematic repetition coverage.

## Phase 5 — biology production

Follow `curriculum/biology/PLAN.md` strictly in this order:

1. junior-high grade 1;
2. junior-high grade 2;
3. junior-high grade 3;
4. 生物基礎;
5. 生物.

- [ ] Produce calculation drills for genuinely quantitative curriculum topics.
- [ ] Produce retrieval drills for terminology, structures, functions, pathways, classifications, sequences and relationships.
- [ ] Add diagram-label drills only after deterministic rendering/validation is reliable.

Acceptance: basic biology facts and suitable calculations have broad repetition coverage.

## Phase 6 — earth-science production

Follow `curriculum/earth-science/PLAN.md` strictly in this order:

1. junior-high grade 1;
2. junior-high grade 2;
3. junior-high grade 3;
4. 地学基礎;
5. 地学.

- [ ] Produce calculation drills for suitable geology, meteorology and astronomy quantities.
- [ ] Produce retrieval drills for rocks/minerals, weather, geological processes, astronomy and related classifications/relationships.

Acceptance: basic earth-science facts and suitable calculations have broad repetition coverage.

## Phase 7 — scale and usability

- [ ] Increase legitimate variant counts for high-use topics.
- [ ] Add science-specific search/filter/navigation by field, grade/course, unit and mode.
- [ ] Add related-worksheet links and cumulative review sets.
- [ ] Keep catalog usable at hundreds/thousands of worksheets.

## Phase 8 — final audit

- [ ] Validate all registered science worksheet URLs and outputs.
- [ ] Validate numerical and retrieval answers across generated samples.
- [ ] Validate deterministic regeneration and duplicate detection.
- [ ] Validate production-order/curriculum metadata.
- [ ] Document how to add future science topic definitions safely.

## Progress log

- 2026-08-25: science factory instruction set initialized; implementation not yet started.
- 2026-08-25: Phase 0 completed. Inspected the live math generator/catalog/site/test implementation, documented the shared integration boundary and stable public worksheet URLs in `40_SHARED_INTEGRATION.md`, and extended the shared generator with catalog/link/science-metadata validation plus tests.
- 2026-08-25: Phase 1 completed. Generalized the shared catalog with difficulty/series/answer-type metadata, added numerical and finite accepted-answer-set representations, validated junior-high science grades and formal high-school course names, generalized the shared worksheet listing to filter by subject/school/course/science field/unit/series, and linked the science landing page to the shared catalog.
