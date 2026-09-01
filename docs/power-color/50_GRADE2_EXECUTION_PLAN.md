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

Grade 2 runtime is 84 verified / pending 0 through `pc2.scheme.tone_in_tone`. Grade 3 remains 223 verified / pending 0 and incomplete. See `91_GRADE3_DEFERRED_HANDOFF.md`.

## Completed Grade 2 checkpoints

- [x] `pc2.foundation.official_sample_facts`: 12 verified and promoted.
- [x] `pc2.scheme.triad_hue_positions`: 12 verified and promoted.
- [x] `pc2.munsell.notation_components`: 12 verified and promoted.
- [x] `pc2.scheme.natural_complex_harmony`: 12 verified and promoted.
- [x] `pc2.scheme.dominant_color_tone`: 12 verified and promoted.
- [x] `pc2.scheme.tone_on_tone`: 12 verified and promoted.
- [x] `pc2.scheme.tone_in_tone`: 12 verified and promoted; runtime 84; exact-equality/full-fingerprint/shared-engine gates cover seven skills.

### Tonal
- [x] Current official Grade 2 sample explicitly includes tonal as an identification target.
- [x] Independently cross-check Plus Colors and UTO's room and retain only their common nonvisual rule: tonal uses the PCCS intermediate/muddy tones `sf`, `d`, `ltg`, `g`.
- [x] Do not infer image appearance, RGB/HEX, monitor values, tone-map geometry, or extra numeric boundaries.
- [x] Generate 12 pending-first text-only questions.
- [x] Independently re-derive all 12; 12 verified / 0 pending; A/B/C/D = 3/3/3/3.
- [x] Add dedicated authoring/shared-renderer/full-fingerprint gate.
- [ ] Promote record-identically to Grade 2 runtime 96.

### Camaieu / faux-camaieu — queued after tonal promotion
- [x] Confirm current official Grade 2 TOC places camaieu / faux-camaieu in scope after tonal.
- [x] Independently cross-check Plus Colors and ONCA and retain only the common nonvisual rule: camaieu is almost monochromatic with extremely small hue/tone-related differences; faux-camaieu remains close but introduces slightly more variation, especially a small hue shift while lightness/chroma differences remain small.
- [x] Exclude exact numeric PCCS hue boundaries because the checked sources do not independently publish the same numeric boundary.
- [x] Generate 12 pending-first text-only questions.
- [x] Independently re-derive all 12; 12 verified / 0 pending; A/B/C/D = 3/3/3/3.
- [x] Add dedicated authoring/shared-renderer/full-fingerprint gate and source audit.
- [ ] Promote only after tonal runtime promotion is green and merged.

## Exact next start point

Finish `pc2.scheme.tonal` record-identical runtime promotion from 84 to 96 and extend exact-equality/full-fingerprint/shared-engine gates. Then promote the already verified `pc2.scheme.camaieu_faux_camaieu` batch in order.
