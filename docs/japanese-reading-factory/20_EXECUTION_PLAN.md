# Japanese Reading Factory — execution plan

Complete work in order. Check an item only when its acceptance criteria are satisfied.

## Phase 0 — align with shared worksheet infrastructure

- [ ] Inspect latest math/science worksheet catalog, printable renderer, validation, and site navigation.
- [ ] Define the smallest extension needed for `subject=japanese`, `material_type=reading_aloud`.
- [ ] Preserve existing worksheet URLs and unrelated site behavior.

Acceptance: Japanese reading sheets have an explicit shared publication path without duplicating the whole worksheet system.

## Phase 1 — establish the verified Railway Song corpus

Process the original five collections in order and in small batches:

1. 東海道 — 66 verses;
2. 山陽・九州 — 68 verses;
3. 奥州・磐城 — 64 verses;
4. 北陸 — 72 verses;
5. 関西・参宮・南海 — 64 verses.

Total core corpus: 334 verses.

For each bounded batch:

- [ ] Record collection/verse number and working transcription.
- [ ] Verify uncertain wording/readings/proper nouns against a reliable second source or original-edition evidence.
- [ ] Map named locations to modern prefecture(s).
- [ ] Record historical/geographical/cultural references and difficult vocabulary.
- [ ] Preserve provenance.

Acceptance: all 334 verses are represented by structured, source-traceable records before corpus indexing is considered complete.

## Phase 2 — build curriculum/textbook evidence map

- [ ] Record current MEXT elementary Japanese reading/language targets relevant to oral reading, vocabulary, kanji/readability, classical/historical language exposure where applicable.
- [ ] Record relevant MEXT Social Studies/Life Studies topics that can make Railway Song excerpts school-relevant: local area, prefectures/regions, transport, industry, geography, historical/cultural heritage, and related topics actually present in the curriculum.
- [ ] Extract only public unit titles/curriculum mappings/annual-plan metadata from current 光村図書 materials.
- [ ] Do the same for 東京書籍.
- [ ] Do the same for 教育出版.
- [ ] Define and test the A/B/C priority classification using explicit evidence fields.

Acceptance: every priority claim can point to specific public curriculum/textbook evidence instead of intuition alone.

## Phase 3 — prefecture-by-prefecture analysis

Follow `PREFECTURE_QUEUE.md` in order.

For each prefecture:

- [ ] Gather all indexed verses mapped to the prefecture.
- [ ] Rank them A/B/C by curriculum/textbook overlap.
- [ ] Select the strongest coherent excerpt(s) for elementary reading aloud.
- [ ] Determine recommended grade range from curriculum placement and text difficulty.
- [ ] Prepare checked ruby/readings and minimal glossary/context notes.
- [ ] If no usable source verse exists in the original five collections, mark the prefecture `no_source_verse` and do not fabricate content.
- [ ] Update queue and handoff before ending the run.

Acceptance: the prefecture has a source-traceable decision: publishable excerpt specification, indexed-only material, or `no_source_verse`.

## Phase 4 — generate and publish reading sheets

- [ ] Add structured Japanese reading-sheet specifications/catalog entries.
- [ ] Render A4 printable sheets with large readable type and ruby support.
- [ ] Include prefecture, excerpt, compact notes, and source/verse attribution.
- [ ] Generate site listing/navigation for Japanese reading materials without hand-written duplicate cards.
- [ ] Validate links, print output, duplicate handling, source metadata, and ruby data.

Acceptance: selected A-priority materials are published and printable through the shared site pipeline.

## Phase 5 — expand B-priority coverage

- [ ] Publish suitable B-priority excerpts after A-priority material is covered.
- [ ] Keep C-priority material indexed unless needed for legitimate prefecture coverage.
- [ ] Revisit grade assignment only when evidence changes; do not inflate coverage by relabeling the same sheet.

## Phase 6 — final audit

- [ ] Confirm all 334 core verses were indexed or explicitly accounted for.
- [ ] Confirm all 47 prefectures have a queue outcome.
- [ ] Verify every published excerpt against source/provenance records.
- [ ] Verify all curriculum/textbook overlap evidence remains attributable to current public sources.
- [ ] Verify no modern textbook passage was copied into the materials.
- [ ] Validate all Japanese material URLs and printable outputs.
- [ ] Document how future Railway Song corrections or curriculum changes should be propagated.

## Progress log

- 2026-08-25: factory initialized; source/curriculum research and implementation not yet started.
