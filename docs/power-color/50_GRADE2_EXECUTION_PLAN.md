# Power Color — Grade 2 execution plan

Checked: 2026-09-01

## Authority and scope

Grade 2 proceeds by explicit user override while Grade 3 remains incomplete. This does not mark Grade 3 complete and does not relax any Grade 3 source/display gate.

Primary authority:
- current Color Certification Association Grade 2 page `https://www.aft.or.jp/pages/feature/exam2`;
- current official Grade 2 text/scope material;
- current JCRI / Japan Color Enterprise first-party material where relevant.

When public first-party material confirms Grade 2 scope but does not expose the detailed nonvisual rule, an auditable professional secondary source may be used only when the rule is explicit and independently corroborated. Secondary sources never authorize monitor RGB/HEX or image-derived answers.

Rules:
1. Use only facts that can be independently re-derived from explicit current authority.
2. Do not infer answers from sample-image appearance, RGB/HEX, screenshots or unstated diagram geometry.
3. Monitor-facing questions remain blocked without approved display references.
4. Reuse the shared Power TOEIC question-bank/workout/session engine only.
5. Generate pending-first, independently QA every record, then promote verified records record-identically.

## Current runtime frontier

Grade 2 runtime is 48 verified / pending 0: 12 `pc2.foundation.official_sample_facts` + 12 `pc2.scheme.triad_hue_positions` + 12 `pc2.munsell.notation_components` + 12 `pc2.scheme.natural_complex_harmony`.

Grade 3 remains 223 verified / pending 0 and incomplete. See `91_GRADE3_DEFERRED_HANDOFF.md`.

## Completed Grade 2 checkpoints

### Official-sample facts
- [x] 12 verified text-only questions promoted record-identically.

### PCCS triad hue positions
- [x] Current official Grade 2 sample explicitly states that three hues evenly spaced on the PCCS hue circle form a triad.
- [x] Reuse source-confirmed 24-position PCCS structure; derive 8-position interval modulo 24.
- [x] 12 verified text-only questions promoted record-identically.

### Munsell notation
- [x] Official Grade 2 TOC places Munsell hue/value/chroma/notation in scope.
- [x] JCRI first-party material explicitly supplies the `H V/C` parsing rule and examples.
- [x] 12 verified text-only questions promoted record-identically.

### Natural / complex harmony

The current official Grade 2 TOC explicitly places natural harmony and complex harmony in scope, but the public TOC does not state the detailed rule. Two independently checked professional sources state the same nonvisual relation:
- Rock Paint: natural harmony follows the natural hue/lightness relation, with the hue nearer yellow lighter and the hue nearer blue darker; complex harmony reverses the relation.
- Daiwa House: natural harmony makes the hue nearer yellow higher in lightness and the hue nearer blue-violet lower; complex harmony makes the hue nearer yellow lower and the hue nearer blue-violet higher.

Only the intersection of those explicit statements is authorized. Do not infer hue-difference limits, tone restrictions, monitor colors, RGB/HEX, or diagram geometry from these sources.

- [x] Define `pc2.scheme.natural_complex_harmony` from the corroborated lightness-direction rule only.
- [x] Generate 12 pending-first text-only questions.
- [x] Independently re-derive every answer from the corroborated rule.
- [x] Verify 12/12; pending 0; A/B/C/D = 3/3/3/3.
- [x] Add dedicated authoring/shared-renderer/fingerprint gate.
- [x] Promote the verified batch record-identically to `grade2-runtime.json`; runtime frontier 48.
- [x] Extend runtime exact-equality/full-fingerprint/shared Power TOEIC engine gate across all four Grade 2 skills.

## Exact next start point

Continue the official-text source inventory after natural/complex harmony, beginning with dominant schemes. Do not generate another micro-skill unless its complete nonvisual answer rule is explicit and auditable.
