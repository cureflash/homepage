# Japanese Reading Factory — master instructions

Purpose: continuously build free elementary-school Japanese reading-aloud materials from the public-domain lyrics of 大和田建樹『地理教育鉄道唱歌』, organized by prefecture and prioritized by overlap with current Japanese elementary curriculum and textbook teaching content.

## Every run

1. Read latest `main`; never work from stale contents.
2. Read every file under `docs/japanese-reading-factory/` in lexical path order.
3. Also read the shared worksheet-factory instructions/design principles needed to reuse the existing catalog, printable-PDF, validation, and site infrastructure. Do not create a competing publication pipeline without a documented reason.
4. Resume from `STATUS.json`, `90_HANDOFF.md`, and the first unfinished item in `20_EXECUTION_PLAN.md` / `PREFECTURE_QUEUE.md`.
5. Work in small verified batches. During corpus indexing, process only a bounded run of verses. During prefecture production, normally complete one prefecture per run.
6. The core source corpus is the original five collections of 『地理教育鉄道唱歌』 by 大和田建樹: 東海道, 山陽・九州, 奥州・磐城, 北陸, 関西・参宮・南海. Do not silently expand the corpus to unrelated later railway songs.
7. Treat National Diet Library bibliographic/original-edition records as primary bibliographic authority. A public transcription such as Japanese Wikisource may be used as working text, but uncertain wording, readings, verse numbering, proper nouns, and old orthography must be cross-checked before publication.
8. Preserve the original lyric text as the source text. For elementary reading output, add ruby/readings and minimal explanatory notes rather than silently rewriting the lyric into modern prose.
9. Map every selected verse to one or more modern prefectures, named places, historical/cultural/geographical references, and difficult/archaic vocabulary. If a prefecture has no usable verse in the original five collections, record `no_source_verse`; do not invent one.
10. Verify curriculum relevance from current authoritative/public sources before assigning priority or grade. At minimum use the current MEXT elementary curriculum guidance. For textbook overlap, compare publicly available current unit lists/annual teaching plans from 光村図書, 東京書籍, and 教育出版. Relevant Social Studies/Life Studies curriculum may also be used when the lyric's content is geographical, historical, industrial, or local-community knowledge.
11. Never reproduce copyrighted textbook passages. Use only public metadata such as unit titles, curriculum mappings, annual plans, and short factual descriptions needed to establish overlap.
12. `test_priority` is a heuristic ranking, not a factual prediction of what a school will test. Store the evidence that produced the ranking.
13. Target output is elementary-school reading-aloud material: readable typography, ruby appropriate to the recommended grade, short notes only where needed, source attribution, and a clearly identified prefecture/topic. Avoid turning the page into a long explanatory textbook.
14. Prefer excerpts whose content has strong curriculum overlap. Local-interest-only verses may be indexed but should not displace higher-priority material.
15. Preserve source provenance for each published excerpt: collection, verse number, transcription source, verification source, and curriculum/textbook evidence URLs or identifiers.
16. Do not knowingly leave `main` broken. Re-check latest `main` before committing when implementation changes touch shared files.
17. Commit safe completed batches with descriptive messages.
18. Before ending every run, update `STATUS.json`, `90_HANDOFF.md`, and any affected queue/progress markers with the exact next starting point.

## Source anchors

- MEXT: current elementary-school Course of Study and commentary, especially Japanese and Social Studies/Life Studies.
- National Diet Library: bibliographic/original-edition records for 『地理教育鉄道唱歌』.
- Japanese Wikisource: working transcription of the original five collections, subject to verification.
- Current elementary Japanese textbook public planning materials: 光村図書, 東京書籍, 教育出版.

## Publication rule

A reading sheet is publishable only when:

- the excerpt belongs to the defined source corpus;
- verse numbering and text have been checked against reliable sources;
- modern-prefecture mapping is supported;
- recommended grade and curriculum-overlap evidence are recorded;
- ruby/readings and difficult place-name readings are checked;
- copyrighted textbook prose has not been copied;
- printable output succeeds;
- catalog metadata and links are valid;
- the same excerpt is not accidentally published as a duplicate under another page without a deliberate cross-prefecture reason;
- site/catalog validation passes.
