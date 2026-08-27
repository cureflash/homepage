# Worksheet Factory — execution plan

Complete work in order. Check an item only when its acceptance criteria are satisfied.

## Phase 0 — protect current site

- [ ] Inventory current worksheet PDFs, links, index cards and non-worksheet pages/tools.
- [ ] Add validation for broken material links and duplicate published files/problem sets where detectable.
- [ ] Record current published URLs that must remain stable.

Acceptance: current site/material links can be checked automatically before structural changes.

## Phase 1 — structured catalog and generated listing

- [ ] Define a machine-readable worksheet catalog/schema: id, school level, grade/course, unit, skill, difficulty/range, variant/seed, title, description, output URL/type.
- [ ] Change the worksheet listing so cards are generated from catalog data rather than manually duplicated in `index.html`.
- [ ] Preserve existing visible materials and URLs during migration.
- [ ] Add school-level and grade/unit grouping/filtering suitable for hundreds or thousands of entries.

Acceptance: adding a worksheet normally requires adding/generating catalog data, not hand-editing another HTML card.

## Phase 2 — deterministic worksheet generation engine

- [ ] Implement shared worksheet specification and seeded random generation.
- [ ] Implement printable A4 layout with problem and answer sections/pages.
- [ ] Implement independent answer validation/recomputation.
- [ ] Add duplicate detection based on normalized problem content.
- [ ] Add tests for generator determinism, answer correctness, range constraints and catalog/output consistency.

Acceptance: a new supported skill can create multiple validated nonduplicate variants mechanically.

## Phase 3 — migrate existing calculation worksheets

- [ ] Represent existing positive/negative-number 100-square worksheets in the catalog/generator model where practical.
- [ ] Represent existing algebraic-expression 100-square worksheets likewise.
- [ ] Preserve their current download URLs or provide compatible aliases without breaking published links.

Acceptance: existing materials remain usable and new pipeline can coexist with them without duplication debt.

## Phase 4 — elementary school worksheet coverage

Before each grade, verify current Japanese curriculum placement with authoritative sources.

### Grade 1
- [ ] number order/comparison drills;
- [ ] addition within appropriate ranges;
- [ ] subtraction within appropriate ranges;
- [ ] mixed basic addition/subtraction;
- [ ] create multiple validated variants for each supported skill and publish/register them.

### Grade 2
- [ ] multi-digit addition/subtraction appropriate to grade;
- [ ] multiplication-table repetition by row and mixed;
- [ ] other mechanically checkable calculation drills appropriate to current curriculum;
- [ ] publish/register multiple variants.

### Grade 3
- [ ] multiplication algorithms;
- [ ] division/basic remainder drills as appropriate;
- [ ] decimal/fraction introductory calculations where appropriate;
- [ ] publish/register multiple variants.

### Grade 4
- [ ] larger multiplication/division;
- [ ] decimal calculations;
- [ ] fraction calculations appropriate to grade;
- [ ] mixed four-operation drills where appropriate;
- [ ] publish/register multiple variants.

### Grade 5
- [x] decimal multiplication/division;
- [x] fraction operations appropriate to grade;
- [x] mixed calculation drills;
- [x] publish/register multiple variants.

### Grade 6
- [ ] fraction multiplication/division and other grade-appropriate arithmetic;
- [ ] ratio/percentage-style numerical drills only where answers are mechanically verifiable and curriculum-appropriate;
- [ ] comprehensive elementary arithmetic repetition sets;
- [ ] publish/register multiple variants.

Acceptance for Phase 4: every supported elementary arithmetic skill has several validated variants, is navigable by grade/unit, and has no knowingly broken/duplicate publications.

## Phase 5 — junior-high calculation coverage

### Junior high 1
- [ ] positive/negative four operations;
- [ ] algebraic expressions;
- [ ] linear equations;
- [ ] other basic calculation drills appropriate to current curriculum;
- [ ] publish/register variants.

### Junior high 2
- [ ] polynomial/monomial calculations;
- [ ] simultaneous equations;
- [ ] other mechanically checkable grade-appropriate calculation drills;
- [ ] publish/register variants.

### Junior high 3
- [ ] expansion/factorization;
- [ ] square-root calculations;
- [ ] quadratic-equation basic solving drills;
- [ ] other mechanically checkable grade-appropriate calculations;
- [ ] publish/register variants.

Acceptance for Phase 5: core junior-high calculation topics have validated multi-variant coverage and grade/unit navigation.

## Phase 6 — high-school calculation coverage

Verify current course placement before publication. Organize by current Japanese high-school mathematics course rather than assuming old course names/content.

- [ ] polynomial/algebra manipulation drills;
- [ ] real-number/radical/algebraic-fraction calculations;
- [ ] equations/inequalities;
- [ ] quadratic-expression/function-related mechanical calculations;
- [ ] trigonometric basic-value/expression drills;
- [ ] exponential/logarithmic calculations;
- [ ] sequence/formula-substitution calculations;
- [ ] differentiation basic calculations;
- [ ] integration basic calculations;
- [ ] other mechanically verifiable calculation topics supported by the current curriculum;
- [ ] publish/register multiple validated variants for each supported skill.

Acceptance: high-school calculation practice is organized by verified course/unit and generated/validated through the same pipeline.

## Phase 7 — scale and usability

- [ ] Increase variant count for legitimate high-use skills without producing duplicate problem sets.
- [ ] Add search/filter/navigation so large catalog size remains usable.
- [ ] Add related-worksheet links by grade/unit/difficulty.
- [ ] Ensure titles/descriptions accurately distinguish variants and do not create meaningless SEO permutations.
- [ ] Add a reproducible batch command/process for generating and registering the next safe batch.

Acceptance: catalog can grow substantially without manual HTML maintenance or unusable browsing.

## Phase 8 — final audit

- [ ] Validate all registered worksheet URLs/outputs.
- [ ] Validate answer correctness across generated catalog samples and deterministic regeneration.
- [ ] Validate no known duplicate worksheet problem sets are published under different IDs.
- [ ] Validate elementary → junior high → high school navigation.
- [ ] Update project-facing documentation for how to add future generator types.

Acceptance: factory can continue adding new validated calculation worksheets from structured specs with minimal manual work.

## Progress log

- 2026-08-25: factory instruction set created; implementation/generation not yet started.
- 2026-08-27: Grade 5 planned worksheet coverage completed at 16 skills / 48 PDFs; next active grade is Grade 6.
