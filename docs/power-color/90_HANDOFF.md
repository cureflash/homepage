# Power Color — HANDOFF

## Active work

Grade 2 is the active priority by explicit user override while Grade 3 remains incomplete. Grade 3 deferred state is preserved in `docs/power-color/91_GRADE3_DEFERRED_HANDOFF.md`; do not mark Grade 3 complete or relax its source/display gates.

## Grade 2 current checkpoint

Grade 2 runtime is 84 verified / pending 0 through `pc2.scheme.tone_in_tone`. Runtime exact-equality/full-fingerprint/shared-engine gates cover all seven promoted runtime skills.

`pc2.scheme.tonal` is source-resolved and authoring-complete. Current official Grade 2 material explicitly includes tonal as an identification target. Plus Colors and UTO's room independently agree on the retained text-only intersection: the PCCS intermediate/muddy tones `sf`, `d`, `ltg`, `g` are the tonal set. No sample-image appearance or display value was used.

The 12-question tonal batch has been independently re-derived: 12 checked / 12 verified / 0 pending, A/B/C/D = 3/3/3/3. Dedicated authoring/shared-renderer/full-fingerprint gates are present. A parallel `power-color-grade2-tonal-promotion` branch exists, but as last reconciled it had only extended the runtime gate and had not yet changed `grade2-runtime.json`; do not treat runtime 96 as complete until the file and gate agree and CI passes.

`pc2.scheme.camaieu_faux_camaieu` is also source-resolved and authoring-complete as the next queued independent checkpoint. Plus Colors and ONCA agree on the retained nonvisual intersection: camaieu is almost monochromatic with extremely small hue/tone-related differences; faux-camaieu keeps the colors close but introduces slightly more variation, especially a small hue shift while lightness/chroma differences remain small. Exact numeric PCCS hue boundaries are excluded. The batch is 12 checked / 12 verified / 0 pending, A/B/C/D = 3/3/3/3, with a dedicated text-only authoring gate and source audit.

Grade 3 runtime remains 223 verified / pending 0 and incomplete.

## Exact next start point

First finish `pc2.scheme.tonal` record-identical runtime promotion from 84 to 96 and extend exact-equality/full-fingerprint/shared Power TOEIC engine gates. Only after that checkpoint is green and merged, promote the already verified `pc2.scheme.camaieu_faux_camaieu` batch in order. Do not introduce RGB/HEX, monitor values, image-derived answers or unstated numeric PCCS boundaries.
