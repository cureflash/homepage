# Japanese Reading Factory — handoff

## Current state

The source scope now includes both:

- 大和田建樹『地理教育鉄道唱歌』（1900）第1-5集、計334番;
- 鉄道省編『新鉄道唱歌』（1929）第1-10輯.

`PREFECTURE_ALLOCATION.json` and `PREFECTURE_ALLOCATION.md` have been created before downstream curriculum analysis, as required.

- The 1900 corpus has an initial verse-range-to-prefecture allocation covering all 334 numbered verses. This is a working allocation, not the final fact-check state.
- The 1929 corpus has all ten volumes assigned to their route/prefecture coverage. Exact verse boundaries are intentionally left `primary_text_pending` where inspectable source text has not yet been obtained.
- 第1輯 東海道線 is publicly documented as extending to verse 62.
- 第4輯 verse 3 is publicly documented as referring to the Matsudo/Nagareyama/Kashiwa/Noda area in Chiba.
- 第7輯 山陰線 is publicly documented as running from verse 1 at Kyoto to verse 52 at Toda-Kohama, with verse 23 referring to Iwami/Iwami-area material in Tottori; use the source record itself when later fixing exact place fields.
- Okinawa currently has no confirmed source in these two defined corpora and is marked uncovered rather than fabricated.

The master instructions and execution plan now require future reading sheets to explain what song/excerpt is being used, identify what place it describes, include a map marker for the actual referenced location, and use documentary/historical images only with recorded source/reuse information.

## Files added

- `docs/japanese-reading-factory/PREFECTURE_ALLOCATION.json` — machine-readable allocation ledger.
- `docs/japanese-reading-factory/PREFECTURE_ALLOCATION.md` — human-readable allocation ranges and 47-prefecture reverse index.

## Files updated

- `00_MASTER_INSTRUCTIONS.md` — expanded corpus and map/image/source rules.
- `20_EXECUTION_PLAN.md` — prefecture-first allocation is now Phase 0; source verification follows.
- `STATUS.json` — records allocation bootstrap as completed and source verification as next stage.

## Source anchors used for allocation bootstrap

- NDL/CiNii bibliographic record for the 1900 five-collection corpus.
- Japanese Wikisource as a working transcription for the 1900 corpus, subject to later verification.
- NDL record for the 1929 ten-volume corpus.
- 野田市郷土博物館 record for the 1929 publication, all ten volume titles, 第1輯 count, and 第4輯 verse 3 example.
- Publicly accessible 第7輯山陰線 material for selected verse-number/location anchors.

## Next exact starting point

1. Treat `PREFECTURE_ALLOCATION.*` as an initial index, not final truth.
2. Verify the 1900 assignment in bounded verse batches against the actual text; add `place_names`, `modern_location`, `map_anchor`, `source_text_verified`, and reading/provenance fields.
3. In parallel, locate inspectable source text for the 1929 volumes. Replace route-level entries with exact verse-level allocation only when the text is actually inspected.
4. Do not begin curriculum/test-priority ranking until source/place verification is sufficiently reliable for the relevant prefecture.
5. Do not publish 1929 lyric excerpts until reuse/publication rights have also been checked.

## Constraints

- Do not infer unavailable 1929 verse numbers from the route name.
- Do not claim actual test frequency; later use evidence-based A/B/C priority.
- Do not copy modern textbook prose.
- Do not use AI-generated images as substitutes for actual historical/place documentary images in these reading sheets.
