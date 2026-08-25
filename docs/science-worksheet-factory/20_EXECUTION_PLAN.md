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

- [x] Implement reusable numerical formula-drill helpers.
- [x] Implement reusable retrieval-drill helpers: forward/reverse, matching, classification, true/false, fill, ordering.
- [x] Add independent answer validation for each supported problem family.
- [x] Add duplicate detection based on normalized problem content.
- [x] Add deterministic seed tests and printable-output tests.

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
- 2026-08-25: Phase 2 completed. Added reusable structured formula drills and retrieval families (forward/reverse, matching, classification, true/false, fill, ordering), integrated them into the shared validator/text/PDF renderer, added independent recomputation, normalized duplicate hashing, deterministic-seed tests, corruption-detection tests, and PDF-render tests. No science content was published in this phase.
- 2026-08-25: Phase 3 started at junior-high grade 1. Re-verified the current MEXT placement, removed pressure from the grade-1 physics production map, added structured definitions and a shared-pipeline batch publisher for spring-extension/force proportionality and the approximate `100 g ≒ 1 N` mass-force conversion, plus deterministic definition tests.
- 2026-08-25: Published the first 12 junior-high grade-1 physics calculation worksheets through the shared catalog/PDF pipeline: spring extension/force proportionality and `100 g ≒ 1 N`, each in direct and reverse form with three deterministic seeds. GitHub Actions executed shared tests, physics tests, PDF generation, catalog validation, output existence checks and duplicate checks before committing the batch.
- 2026-08-25: Added and published 12 junior-high grade-1 force-concept retrieval worksheets: forward, reverse, true/false and fill-in, each with three deterministic seeds. Coverage includes N, mass vs weight, balance/spring scale, the three elements of force, and the conditions for two forces to balance. The publisher was made idempotent and the Actions path now validates all 24 JH1 physics PDFs together, including exact 12 numeric + 12 accepted-set catalog coverage and two-page PDF structure.
- 2026-08-25: Re-verified current MEXT junior-high grade-1 light/sound placement and terminology, then published 18 focused retrieval worksheets: light 9 and sound 9, each split into forward, reverse and fill families with three deterministic seeds. The text-heavy sheets use 10 problems so they remain in the shared renderer's first column rather than introducing a separate renderer. Actions passed shared and topic tests before and after publication and validated all 42 JH1 physics PDFs: 12 numeric + 30 accepted-set.
- 2026-08-26: Completed the first legitimate JH1 focused → mixed → review cycle by publishing 3 balanced light/sound/force mixed sheets and 3 cumulative review sheets that combine forward, reverse, true/false and fill retrieval. The batch reuses the verified structured fact registries, uses deterministic seeds, independently validates every answer, rejects duplicate normalized hashes, and passed the shared pipeline validation across all 48 JH1 physics PDFs. Phase 3 remains open because JH2, JH3, 物理基礎 and 物理 are not yet covered.
- 2026-08-26: Advanced to junior-high grade 2 after re-verifying current MEXT `電流とその利用`. Published 30 focused numerical Ohm-law worksheets using `V = I × R`: 10 direct voltage sheets, 10 current-reverse sheets and 10 resistance-reverse sheets, each with 20 problems and deterministic seeds 6201–6210. The shared and JH2 topic tests passed before and after publication; all 30 catalog entries/PDFs passed output existence, two-page structure and duplicate-hash validation. Phase 3 remains open for the remaining JH2 circuit/power topics and later physics stages.
- 2026-08-26: Re-confirmed the MEXT rules for current/voltage in simple series and parallel circuits and the requirement to touch on combined resistance, then published 30 more focused JH2 numerical worksheets: 10 series-voltage sum sheets, 10 parallel-current sum sheets, and 10 series-combined-resistance sum sheets. The batch reused the existing shared `sum` relation generator, preserved the original 30 Ohm-law sheets unchanged, and Actions run 32878756300 passed shared tests, JH2 tests, generation, duplicate/catalog/output validation, and two-page PDF checks for all 60 JH2 physics worksheets. Next JH2 work is electric power, electric energy and heat quantity, followed by mixed/review coverage.
- 2026-08-26: Re-verified the current MEXT treatment of electric power, electric energy and generated heat quantity, then published 30 more focused JH2 numerical worksheets: 10 electric-power sheets using `P = V × I`, 10 electric-energy sheets using `E = P × t`, and 10 electric-heater heat-quantity sheets using `Q = P × t`. The energy/heat sheets intentionally use seconds and joules rather than conversion-heavy variants. The batch reused the shared `product` relation and common validator/hash/PDF/catalog pipeline. Actions run 32884426705 passed shared/JH2 tests, generation, duplicate/catalog/output validation and two-page PDF checks for all 90 JH2 physics worksheets. Phase 3 remains open; next JH2 work is genuine mixed and cumulative review coverage before moving to JH3.
- 2026-08-26: Completed junior-high grade 2 with 15 cross-topic `mixed` and 15 cumulative `review` calculation sheets built only from verified JH2 formula registries. JH2 now has 120 published physics worksheets: 90 focused + 15 mixed + 15 review. Duplicate hashes, independent answers, PDF output and catalog metadata were validated before moving forward.
- 2026-08-26: Advanced to junior-high grade 3 after re-verifying current MEXT `運動とエネルギー`. Published 60 focused numerical worksheets: speed 10, distance reverse 10, average speed 10, work 10, force reverse 10 and work-rate 10. High-school fixed energy formulas `mgh` and `1/2 mv²` were intentionally not backported into JH3. Shared/JH3 tests, independent recomputation, duplicate hashes, catalog checks and two-page PDF structure all passed.
- 2026-08-26: Completed the JH3 first production cycle by publishing another 60 worksheets: 15 numerical `mixed`, 15 numerical cumulative `review`, and 30 finite-answer concept retrieval sheets (`forward` 10 + `reverse` 10 + `fill` 10). The concept set covers equal-speed straight motion/inertia, force composition/decomposition, qualitative potential/kinetic energy, mechanical energy and its conservation, plus work/work rate. The existing JH3 publisher/workflow was extended rather than forked. GitHub Actions generated publication commit `9ba516695d147db0fe3a24a8fc6e9ddcac8bb767` after validating exactly 120 JH3 entries, all output PDFs and duplicate/content rules. Junior-high physics is now complete through grade 3, with 48 JH1 + 120 JH2 + 120 JH3 = 288 published physics worksheets. Phase 3 remains open and the next required stage is formal high-school course `物理基礎`.
