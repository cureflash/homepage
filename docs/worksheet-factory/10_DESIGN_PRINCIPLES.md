# Worksheet Factory — design principles

## Core idea

Treat worksheets as generated data products, not hand-written pages.

```text
Curriculum/topic registry
        ↓
Worksheet specification
        ↓
Problem generator
        ↓
Independent answer validator
        ↓
PDF renderer
        ↓
Catalog metadata
        ↓
Site renderer / index
```

## Design rules

1. **Single source of truth** — topic, grade, difficulty, problem type, seed, title, description and output path belong in structured worksheet/catalog data.
2. **Generators, not copies** — do not maintain hundreds of manually duplicated HTML cards or one-off scripts.
3. **Deterministic variants** — each worksheet variant has an explicit seed/spec so it can be regenerated.
4. **Independent validation** — answer checking must not merely trust the same formatted answer strings emitted by the problem generator.
5. **Batch-safe publishing** — a failed worksheet must not block unrelated valid worksheets, but a failed worksheet must not be registered as published.
6. **Stable URLs** — generated output paths should be predictable and should not change after publication without a migration reason.
7. **Useful variation** — variants should change actual numbers/expressions while preserving the advertised skill and difficulty.
8. **Printable first** — A4-friendly, legible monochrome-compatible problem layout. Problem numbers use plain integers without leading zeroes or a trailing period, and are spatially separated from the expression so they cannot be mistaken for decimals.
9. **Answer overlay** — the second page repeats the same problem layout and adds answers in red. It must not be an answer-only list.
10. **Simple taxonomy** — school level → grade/course → unit → worksheet series → variant.
11. **No content inflation for its own sake** — quantity is achieved by covering legitimate combinations of skill, range, format and seed, not by meaningless title permutations.

## Target site structure

The current homepage manually embeds many material cards. The target is:

```text
worksheet definitions/catalog data
        ↓
site build/generator
        ↓
materials index generated consistently
```

Existing non-worksheet tools/pages in the repository must remain unaffected.

## Target content breadth

Elementary examples:
- number recognition/order;
- addition/subtraction by appropriate number range;
- multiplication tables;
- multiplication/division algorithms;
- decimals;
- fractions;
- mixed four-operation practice where curriculum-appropriate.

Junior high examples:
- positive/negative numbers;
- algebraic expressions;
- monomials/polynomials;
- linear equations;
- simultaneous equations;
- expansion/factorization;
- square roots;
- quadratic equations and other mechanically checkable basic calculations where appropriate.

High school examples:
- polynomial expansion/factorization;
- radicals and real-number calculations;
- algebraic fractions;
- equations/inequalities;
- quadratic-expression calculations;
- trigonometric-value/basic expression drills;
- exponential/logarithmic calculations;
- sequences/basic formula substitution;
- differentiation/integration basic calculation drills;
- other mechanically verifiable calculations consistent with current course placement.

Exact grade/course placement must be verified before publication.
