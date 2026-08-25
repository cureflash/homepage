# Japanese Reading Factory — master instructions

Purpose: continuously build free elementary-school Japanese reading-aloud materials from historical railway-song sources, organized by prefecture and prioritized by overlap with current Japanese elementary curriculum and textbook teaching content.

## Every run

1. Read latest `main`; never work from stale contents.
2. Read every file under `docs/japanese-reading-factory/` in lexical path order.
3. Also read the shared worksheet-factory instructions/design principles needed to reuse the existing catalog, printable-PDF, validation, and site infrastructure. Do not create a competing publication pipeline without a documented reason.
4. Resume from `STATUS.json`, `90_HANDOFF.md`, `PREFECTURE_ALLOCATION.json`, and the first unfinished item in `20_EXECUTION_PLAN.md` / `PREFECTURE_QUEUE.md`.
5. Work in small verified batches. During source verification, process only a bounded run of verses. During prefecture production, normally complete one prefecture per run.
6. The defined source corpus is:
   - 大和田建樹『地理教育鉄道唱歌』（1900）第1-5集: 東海道, 山陽・九州, 奥州・磐城, 北陸, 関西・参宮・南海（計334番）;
   - 鉄道省編『新鉄道唱歌』（1929）第1-10輯: 東海道線, 山陽線・四国めぐり, 九州線, 東北線・常磐線・房総めぐり, 高崎・信越・中央線, 北陸・信越・羽越線, 山陰線, 関西線, 奥羽線, 北海道線.
   Do not silently expand beyond these two corpora unless the user changes scope.
7. Treat National Diet Library bibliographic/original-edition records and holding-institution records as primary bibliographic authority. A public transcription such as Japanese Wikisource may be used as working text for the 1900 corpus. For the 1929 corpus, if the text of a volume is not publicly inspectable, do not infer exact verse boundaries from the route alone: mark them `primary_text_pending` until verified.
8. Keep source text, bibliographic provenance, and publication-rights status separate. Do not publish a lyric excerpt from the 1929 corpus until the text and its reuse status have been checked. Do not copy text from a modern reprint merely because its bibliographic record is public.
9. Maintain `PREFECTURE_ALLOCATION.json` as the machine-readable allocation ledger and `PREFECTURE_ALLOCATION.md` as the human-readable reverse index. A verse that genuinely spans multiple prefectures may be assigned to each of them. Never force a single-prefecture assignment where the text supports several.
10. For every verse advanced toward publication, record at least: collection/volume, verse number, modern prefecture(s), named places, `modern_location`, `map_anchor`, historical/cultural/geographical references, difficult/archaic vocabulary, source provenance, verification status, and later curriculum/textbook evidence.
11. Verify curriculum relevance from current authoritative/public sources before assigning priority or grade. At minimum use the current MEXT elementary curriculum guidance. For textbook overlap, compare publicly available current unit lists/annual teaching plans from 光村図書, 東京書籍, and 教育出版. Relevant Social Studies/Life Studies curriculum may also be used when the lyric's content is geographical, historical, industrial, transport-related, or local-community knowledge.
12. Never reproduce copyrighted textbook passages. Use only public metadata such as unit titles, curriculum mappings, annual plans, and short factual descriptions needed to establish overlap.
13. `test_priority` is a heuristic ranking, not a factual prediction of what a school will test. Store the evidence that produced the ranking.
14. Target output is elementary-school reading-aloud material: readable typography, ruby appropriate to the recommended grade, short notes only where needed, source attribution, and a clearly identified prefecture/topic. Each published sheet should also make the location understandable with a map and appropriate image(s) when rights allow.
15. Map requirements: show where the lyric is talking about, not merely the prefecture. If a lyric refers to Sapporo, for example, the map must visibly mark Sapporo or the more specific referenced place. Use `map_anchor` derived from the verified lyric location; do not default to a prefectural capital or arbitrary centroid.
16. Image requirements: use historically/geographically relevant images that can legally be reused or quoted for the educational explanation. Store source and rights/provenance metadata. Do not use AI-generated images as substitutes for documentary/historical source images when the material is intended to show the actual place, object, person, or artifact.
17. Prefer excerpts whose content has strong curriculum overlap. Local-interest-only verses may be indexed but should not displace higher-priority material.
18. Preserve source provenance for each published excerpt: work/collection, verse number, transcription/source text, verification source, map/image source, and curriculum/textbook evidence URLs or identifiers.
19. Do not knowingly leave `main` broken. Re-check latest `main` before committing when implementation changes touch shared files.
20. Commit safe completed batches with descriptive messages.
21. Before ending every run, update `STATUS.json`, `90_HANDOFF.md`, and any affected queue/progress markers with the exact next starting point.

## Source anchors

- MEXT: current elementary-school Course of Study and commentary, especially Japanese and Social Studies/Life Studies.
- National Diet Library: bibliographic/original-edition records for both defined railway-song corpora.
- Japanese Wikisource: working transcription of the 1900 five-collection corpus, subject to verification.
- Holding institutions with inspectable 1929 source material, including museum/library records, for verse-level verification where available.
- Current elementary Japanese textbook public planning materials: 光村図書, 東京書籍, 教育出版.

## Publication rule

A reading sheet is publishable only when:

- the excerpt belongs to the defined source corpus;
- verse numbering and text have been checked against reliable sources;
- rights/reuse status for the excerpt and images is acceptable for the intended publication;
- modern-prefecture mapping and `map_anchor` are supported;
- recommended grade and curriculum-overlap evidence are recorded;
- ruby/readings and difficult place-name readings are checked;
- copyrighted textbook prose has not been copied;
- the location map and any documentary images have source/provenance metadata;
- printable output succeeds;
- catalog metadata and links are valid;
- the same excerpt is not accidentally published as a duplicate under another page without a deliberate cross-prefecture reason;
- site/catalog validation passes.
