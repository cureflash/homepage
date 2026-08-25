# Japanese Reading Factory — design principles

## Core data flow

```text
Railway Song source corpus
        ↓
Verified verse records
        ↓
Modern-prefecture mapping
        ↓
Curriculum/textbook overlap evidence
        ↓
Priority + recommended grade
        ↓
Reading-sheet specification
        ↓
Printable renderer / catalog / site
```

## Verse record

Each indexed verse should retain at least:

- collection and verse number;
- original source text;
- checked reading/ruby data where needed;
- modern prefecture(s);
- place names and historical/geographical/cultural references;
- difficult or archaic vocabulary;
- source/provenance references;
- curriculum evidence;
- textbook-overlap evidence;
- recommended grade range;
- `test_priority` and its evidence.

## Priority rule

Use evidence-based tiers rather than claiming actual exam frequency.

- `A`: direct MEXT curriculum relevance and/or repeated overlap across multiple current textbook publishers; especially suitable for school learning.
- `B`: clear curriculum relevance or overlap with at least one current textbook publisher, but less broadly repeated.
- `C`: valid local/cultural interest with weak direct curriculum overlap.

Publish A first, then B. C may remain indexed unless needed for prefecture coverage.

## Grade/readability rule

1. Assign grade only after checking curriculum placement and reading difficulty.
2. Do not force every verse into every grade.
3. Add ruby for kanji/readings beyond the intended learner level and for difficult place names or historical spellings.
4. Preserve source wording; explain archaic words briefly rather than replacing the poem wholesale.
5. Favor short excerpts that can be read aloud repeatedly without a large explanatory burden.

## Standard reading-sheet layout

A4 printable output should normally contain:

1. prefecture/title;
2. 1–3 selected verses or another short coherent excerpt;
3. ruby/readings;
4. a compact box of only the curriculum-relevant place names/words that need explanation;
5. source/verse attribution.

Do not add comprehension quizzes unless a later instruction explicitly expands the scope. The primary task is reading aloud.

## Cross-subject overlap

Although the artifact is a Japanese reading sheet, lyric content may be prioritized by overlap with elementary Social Studies or Life Studies when that makes the excerpt more school-relevant. This is supporting evidence, not a change of subject.

## Copyright/source rule

The source lyric is treated separately from modern textbook content. Do not copy textbook passages. Compare only public curriculum mappings, unit titles, annual plans, and factual metadata needed to establish overlap.
