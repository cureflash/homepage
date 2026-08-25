# Science Worksheet Factory — design principles

## Core architecture

Science must extend the same shared worksheet system used by mathematics:

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

## Science-specific design rules

1. One shared catalog/pipeline where practical; subject-specific generators plug into it.
2. Taxonomy: school level → grade/course → science field → unit → skill/fact set → worksheet series → seed/variant.
3. Middle-school grade placement follows current MEXT guidance.
4. High-school site grouping must not erase formal course names; course metadata is authoritative.
5. Physics is calculation-first. Produce dense basic formula drills wherever the curriculum supports them.
6. Chemistry is calculation + retrieval. Quantitative topics use validated numerical drills; inorganic/organic/general knowledge uses multi-direction retrieval.
7. Biology and earth science use calculation drills wherever quantitatively appropriate; otherwise use repeated retrieval of basic facts, classifications, sequences, diagrams, and relationships.
8. Difficulty target is basic: a learner who knows the formula or basic fact should be able to answer without puzzle-like inference.
9. Quantity comes from legitimate variation: different numerical data, different retrieval direction, different item order, focused/mixed/review sets, and different seeds.
10. Avoid meaningless duplicates, superficial title changes, and answer formats that cannot be validated reliably.
11. Printable A4 first; problem pages and answer pages clearly separated.
12. Preserve existing public URLs and unrelated site/tools.

## Standard worksheet series

Calculation skills may expose:
- `basic`: direct formula substitution;
- `reverse`: solve for another variable when appropriate;
- `unit`: basic unit conversion plus formula use where curriculum-appropriate;
- `mixed`: related formulae mixed within one unit;
- `speed`: short timed repetition;
- `review`: cumulative basic calculation review.

Knowledge sets may expose:
- `forward`: term/name → property/meaning;
- `reverse`: property/meaning → term/name;
- `pair`: symbols/formulae/names or related pairs;
- `classify`: classification drills;
- `tf`: true/false;
- `fill`: fill-in-the-blank;
- `order`: sequence/order;
- `mixed`: unit-level mixed retrieval;
- `review`: cumulative review.

Not every series is appropriate to every topic. Generate only natural, curriculum-aligned forms.
