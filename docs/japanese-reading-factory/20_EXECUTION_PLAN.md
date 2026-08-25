# Japanese Reading Factory — execution plan

Complete work in order. Check an item only when its acceptance criteria are satisfied.

## Phase 0 — define corpus and create prefecture-first allocation

- [x] Define the corpus as 大和田建樹『地理教育鉄道唱歌』第1-5集 plus 鉄道省編『新鉄道唱歌』第1-10輯.
- [x] Create `PREFECTURE_ALLOCATION.json` as the machine-readable allocation ledger.
- [x] Create `PREFECTURE_ALLOCATION.md` as the human-readable prefecture reverse index.
- [x] Allocate all 334 verses of the 1900 corpus to one or more modern prefectures at working-draft level.
- [x] Allocate all ten 1929 volumes to their modern-prefecture route coverage without inventing unverified verse boundaries.
- [x] Mark Okinawa as currently uncovered by these two corpora rather than fabricating a source verse.

Acceptance: every prefecture can be queried against the current two-corpus source set; uncertain 1929 verse boundaries are explicitly marked rather than guessed.

## Phase 1 — verify the source corpus at verse/place level

### 1900 corpus

Verify the five collections in order:

1. 東海道 — 66 verses;
2. 山陽・九州 — 68 verses;
3. 奥州・磐城 — 64 verses;
4. 北陸 — 72 verses;
5. 関西・参宮・南海 — 64 verses.

For each bounded batch:

- [ ] Verify verse number and wording against reliable source evidence.
- [ ] Verify every named place and the current prefecture assignment.
- [ ] Record `place_names`, `modern_location`, and a specific `map_anchor` suitable for showing where the lyric is talking about.
- [ ] Record historical/geographical/cultural references and difficult vocabulary.
- [ ] Preserve provenance and correct `PREFECTURE_ALLOCATION.*` if the initial draft is wrong.

### 1929 corpus

Process 第1輯 through 第10輯 in order.

- [ ] Locate inspectable source text or primary/reliable source evidence for each volume.
- [ ] Determine verse count and exact verse-to-prefecture boundaries only from inspected text; never infer verse numbers merely from the route name.
- [ ] Record named places, `modern_location`, `map_anchor`, and provenance for verified verses.
- [ ] Check reuse/publication rights before copying any lyric excerpt into a public worksheet.
- [ ] Replace `primary_text_pending` / route-level entries with verse-level entries as evidence becomes available.

Acceptance: selected material can be traced to verified verse text, place, prefecture, map point, and source provenance.

## Phase 2 — build curriculum/textbook evidence map

- [ ] Record current MEXT elementary Japanese reading/language targets relevant to oral reading, vocabulary, kanji/readability, classical/historical language exposure where applicable.
- [ ] Record relevant MEXT Social Studies/Life Studies topics: local area, prefectures/regions, transport, industry, geography, historical/cultural heritage, and related topics actually present in the curriculum.
- [ ] Extract only public unit titles/curriculum mappings/annual-plan metadata from current 光村図書 materials.
- [ ] Do the same for 東京書籍.
- [ ] Do the same for 教育出版.
- [ ] Define and test the A/B/C priority classification using explicit evidence fields.

Acceptance: every priority claim can point to specific public curriculum/textbook evidence instead of intuition alone.

## Phase 3 — prefecture-by-prefecture analysis

Follow `PREFECTURE_QUEUE.md` in order.

For each prefecture:

- [ ] Gather all verified verses mapped to the prefecture from both corpora.
- [ ] Rank them A/B/C by curriculum/textbook overlap.
- [ ] Select the strongest coherent excerpt(s) for elementary reading aloud.
- [ ] Determine recommended grade range from curriculum placement and text difficulty.
- [ ] Prepare checked ruby/readings and minimal glossary/context notes.
- [ ] Define the map extent and exact location marker(s) from `map_anchor`.
- [ ] Select relevant documentary/historical image candidate(s) and record source/reuse information.
- [ ] If no usable source verse exists in the defined corpora, mark the prefecture `no_source_verse` and do not fabricate content.
- [ ] Update queue and handoff before ending the run.

Acceptance: the prefecture has a source-traceable decision: publishable excerpt specification, indexed-only material, or `no_source_verse`, with location/map and image requirements defined.

## Phase 4 — align with shared worksheet infrastructure

- [ ] Inspect latest math/science worksheet catalog, printable renderer, validation, and site navigation.
- [ ] Define the smallest extension needed for `subject=japanese`, `material_type=reading_aloud`.
- [ ] Add support needed for ruby, location maps, source captions, and documentary images without breaking existing worksheets.
- [ ] Preserve existing worksheet URLs and unrelated site behavior.

Acceptance: Japanese reading sheets have an explicit shared publication path without duplicating the whole worksheet system.

## Phase 5 — generate and publish reading sheets

- [ ] Add structured Japanese reading-sheet specifications/catalog entries.
- [ ] Render A4 printable sheets with large readable type and ruby support.
- [ ] Include prefecture, excerpt, compact explanation of what the song is and what place it describes, source/verse attribution, and a map that visibly marks the referenced place.
- [ ] Include relevant image(s) only when reuse/quotation conditions are satisfied and source information is displayed.
- [ ] Generate site listing/navigation for Japanese reading materials without hand-written duplicate cards.
- [ ] Validate links, print output, duplicate handling, source metadata, map data, image provenance, and ruby data.

Acceptance: selected A-priority materials are published and printable through the shared site pipeline.

## Phase 6 — expand B-priority coverage

- [ ] Publish suitable B-priority excerpts after A-priority material is covered.
- [ ] Keep C-priority material indexed unless needed for legitimate prefecture coverage.
- [ ] Revisit grade assignment only when evidence changes; do not inflate coverage by relabeling the same sheet.

## Phase 7 — final audit

- [ ] Confirm all 334 verses of the 1900 corpus were verified or explicitly accounted for.
- [ ] Confirm all ten 1929 volumes were inspected to the extent required for every published excerpt and all remaining gaps are explicit.
- [ ] Confirm all 47 prefectures have a queue outcome.
- [ ] Verify every published excerpt against source/provenance records.
- [ ] Verify all curriculum/textbook overlap evidence remains attributable to current public sources.
- [ ] Verify no modern textbook passage was copied into the materials.
- [ ] Verify map markers correspond to the place actually described by the lyric.
- [ ] Verify image reuse/quotation status and source labels.
- [ ] Validate all Japanese material URLs and printable outputs.
- [ ] Document how future source corrections or curriculum changes should be propagated.

## Progress log

- 2026-08-25: factory initialized.
- 2026-08-25: scope expanded to include 鉄道省編『新鉄道唱歌』全10輯; prefecture-first allocation ledger and reverse index created. 1900 corpus is allocated at verse-draft level; 1929 corpus is allocated at route-volume level where full text is not yet inspectable, with exact verse boundaries intentionally left pending rather than guessed.
