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
- [x] Resolve only the independently corroborated lightness-direction rule.
- [x] Generate and independently verify 12 text-only questions; A/B/C/D = 3/3/3/3.
- [x] Promote record-identically; runtime frontier 48.
- [x] Extend runtime exact-equality/full-fingerprint/shared Power TOEIC engine gate across all four runtime skills.

### Dominant color / dominant tone
- [x] Current official Grade 2 scope/TOC confirms dominant schemes are in scope.
- [x] Independently cross-check professional sources and fix only their common nonvisual rule: dominant color unifies hue and varies tone; dominant tone unifies tone and varies hue; both use 3 or more colors.
- [x] Define `pc2.scheme.dominant_color_tone` from that common rule only.
- [x] Generate 12 pending-first text-only questions.
- [x] Independently re-derive all 12; 12 verified / 0 pending; A/B/C/D = 3/3/3/3.
- [x] Add a dedicated authoring/shared-renderer/full-fingerprint gate.
- [ ] Promote record-identically to Grade 2 runtime 60 after authoring CI succeeds.

## Exact next start point

Run the dominant-color/tone authoring CI and merge if green. Then promote its 12 verified records record-identically to runtime 60 and extend exact-equality/full-fingerprint/shared-engine gates. After promotion, continue source inventory to tone-on-tone / tone-in-tone / tonal schemes.
