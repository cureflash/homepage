# Power Color — Grade 3 Deferred Handoff

Updated: 2026-09-01

## Purpose

Grade 3 is intentionally left incomplete while Grade 2 proceeds in parallel by explicit user direction. This file is the dedicated restart handoff for the unfinished Grade 3 work. Do not interpret Grade 2 progress as Grade 3 completion, and do not relax any existing Grade 3 source/display gate.

Canonical companion documents:
- `docs/power-color/STATUS.json`
- `docs/power-color/20_EXECUTION_PLAN.md`
- `docs/power-color/40_PCCS_SOURCE_CONTRACT.md`
- `docs/power-color/41_RELATION_BOUNDARY_AUDIT.md`
- `docs/power-color/42_RELIABLE_SECONDARY_SOURCE_AMENDMENT.md`
- `docs/power-color/90_HANDOFF.md`

## Frozen current Grade 3 state

- Grade 3 complete: false
- Runtime: 223 verified / pending 0
- Authoring: 207 generated / 207 checked / 207 verified / 0 needs_revision / 0 rejected / 0 pending
- Shared engine: existing Power TOEIC question-bank / workout / session engine only
- Separate Power Color engine: prohibited / not created

Runtime composition at handoff:
- 127 conventional-color questions
- 12 `pc3.pccs.complementary_hue_number`
- 12 `pc3.relation.same_tone`
- 12 `pc3.relation.same_hue`
- 12 `pc3.relation.hue_difference`
- 12 `pc3.value.gradient`
- 24 `pc3.scheme.identification`
- 12 `pc3.relation.hue_classification`

The most recent Grade 3 runtime frontier is 223. Do not restore obsolete 211-count assertions.

## Unfinished work

### G3-1 — Conventional contrast-tone pair matrix

Status: blocked on authority acquisition.

Needed before generation:
- complete auditable pair membership for all 12 chromatic PCCS tones under the conventional Grade 3 `対照トーン配色` rule;
- independent cross-check against level-1/2 authority as required by `42_RELIABLE_SECONDARY_SOURCE_AMENDMENT.md`.

Candidate grouping already corroborated by level-3 educational sources:
- lightness contrast: `p/lt/b × dkg/dk/dp`
- saturation contrast: high-saturation `v/b/s/dp` × low-saturation `p/ltg/g/dkg`
- `sf` and `d` have no contrast-tone partner

This candidate is NOT yet authorized as the canonical matrix. Do not generate from it alone.

Accepted corroborating evidence already recorded:
- current official Grade 3 sample confirms `対照トーン配色` is in scope;
- peer-reviewed 2026 evidence defines contrast tone conceptually and confirms `b` / `dk`;
- peer-reviewed 2001 日本色彩学会誌 table explicitly labels multiple individual pairs including `v`–`lt`, `dk`–`sf`, `dp`–`b`, `s`–`dk`, `p`–`dk`, but only as an experimental subset;
- KAKEN report supplies isolated contrast examples such as vivid–White and deep–pale;
- current Japan Color Research teaching-material catalog confirms PCCS same/similar/contrast tone relations but does not expose the pair table;
- JCRI 2022 annual report documents a PCCS Color Calc-derived pair-analysis implementation that returns pair-level `トーン配色` judgments.

Exact restart route for G3-1:
1. Prefer direct JCRI first-party evidence: obtain pair-analysis output for all unordered pairs among the 12 chromatic tones, retaining auditable input → `トーン配色` output evidence.
2. Alternatively obtain an explicit JCRI/Japan Color Enterprise rule/table/manual, or the current official Grade 3 text pp.84–89, that enumerates or deterministically defines the full matrix.
3. Cross-check the resulting complete matrix against the accepted peer-reviewed / pair-level evidence already recorded.
4. Only then generate `pc3.relation.tone_difference` pending-first.
5. Independently re-derive every answer without reading the proposed answer first.
6. Run schema, duplicate fingerprint, answer-position, coverage and shared-engine gates.
7. Promote verified records record-identically to runtime.
8. Expand `pc3.scheme.identification` with contrast-tone questions only after the same matrix is canonical.

Do not repeat without a genuinely new lead:
- generic J-STAGE searches
- generic CiNii searches
- generic university-repository searches
- generic KAKEN searches
- university/vocational syllabus searches
- already-audited official-text-derived specialist pages

### G3-2 — Japanese readings for the 24 PCCS hue names

Status: source pending.

- 24/24 Japanese hue-name mappings are source-confirmed.
- Reading fields remain intentionally null because an explicit acceptable source for readings has not been acquired.

Exact restart route:
- obtain an explicit auditable first-party or accepted reliable-secondary source that gives the readings;
- populate only source-confirmed readings;
- keep null for any unconfirmed reading.

Do not infer readings from kanji spelling, memory, generic dictionaries or pronunciation guesses.

### G3-3 — Current representative digital display values for PCCS

Status: blocked on authoritative numeric acquisition.

Approved route:
- current licensed JCRI PCCS Color Calc direct numeric output under the already approved audited procedure; or
- a current official table/export with exact auditable representative sRGB values.

Existing confirmed facts:
- JCRI documentation confirms PCCS representative values can be output as sRGB under D65 / 2-degree conditions;
- the current digital color manual advertises RGB hexadecimal/CMYK values but exact current values have not been acquired or equivalence-verified.

Until approved numeric values exist, keep all monitor-facing PCCS drills blocked, including:
- color → PCCS hue
- color → PCCS tone
- color → PCCS notation
- PCCS notation → color
- any other swatch-based PCCS identification requiring representative display color

Strict prohibitions:
- no screenshot sampling
- no RGB/HEX guessing
- no hand tuning
- no Munsell reconstruction as a substitute
- no tone-map visual sampling
- no treating monitor appearance as structural authority

### G3-4 — Final Grade 3 completion gate

Grade 3 may be marked complete only after all required Grade 3 master/question families that remain in scope are completed or explicitly dispositioned under the canonical plan, all required QA/gates pass, pending remains 0, and the source/display blockers above are resolved as required.

Do not set `grade3_complete: true` merely because Grade 2 work has begun.

## Invariants to preserve on restart

- Hue 20 remains `V` until current authority actually changes it; current JCRI material treats `PB` only as a future rename.
- Named hue classification remains canonical: 0 same, 1 adjacent, 2–3 similar, 4–7 medium-difference, 8–10 contrast, 11–12 complementary.
- Do not invent a numeric general tone-distance algorithm; conventional PCCS contrast-tone membership is a categorical relation requiring source authority.
- Reliable secondary structural evidence is allowed only under `42_RELIABLE_SECONDARY_SOURCE_AMENDMENT.md`.
- The amendment does not relax the monitor RGB/HEX gate.
- Use the existing shared Power TOEIC engine only.
- Generate pending-first and independently QA before verified promotion.
- Preserve record-level equality on runtime promotion.

## Exact Grade 3 restart point

When Grade 3 work resumes, start with G3-1: acquire level-1/2 authority for the complete conventional 12-tone contrast-tone pair matrix through direct JCRI pair-analysis output, an equivalent JCRI/Japan Color Enterprise table/manual, or the current official Grade 3 text pp.84–89. Do not perform another generic source search first. Do not generate `pc3.relation.tone_difference` until that matrix is complete and independently cross-checked.
