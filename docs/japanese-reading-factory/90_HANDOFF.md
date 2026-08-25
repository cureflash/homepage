# Japanese Reading Factory — handoff

## Current state

Factory documentation has been initialized. No corpus indexing, curriculum evidence extraction, prefecture analysis, or reading-sheet implementation has been completed yet.

## Next exact starting point

1. Read all files in `docs/japanese-reading-factory/`.
2. Inspect the current shared worksheet/catalog/PDF/site implementation and record the integration path required by Phase 0.
3. Begin Phase 1 with 『地理教育鉄道唱歌』第1集 東海道, verses 1 onward, in a small verified batch.
4. For each verse in that batch, preserve source text/provenance and map named locations to modern prefecture(s).
5. Update `STATUS.json` with the exact next verse before ending the run.

## Source baseline already identified

- National Diet Library records identify the original work and the five core collections.
- Japanese Wikisource exposes a working transcription of the five collections.
- MEXT publishes the current elementary Course of Study and Japanese commentary.
- 光村図書, 東京書籍, and 教育出版 publish current elementary Japanese annual plans/unit information suitable for overlap comparison without reproducing textbook passages.

## Constraints

- Do not expand to later unrelated railway songs unless the user explicitly changes scope.
- Do not claim actual test frequency; use evidence-based A/B/C priority.
- Do not copy modern textbook prose.
- Do not fabricate coverage for prefectures absent from the original five collections.
