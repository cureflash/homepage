# Power Color — HANDOFF

## Active work

Grade 2 is the active priority by explicit user override while Grade 3 remains incomplete. Grade 3 deferred state is preserved in `docs/power-color/91_GRADE3_DEFERRED_HANDOFF.md`; do not mark Grade 3 complete or relax its source/display gates.

## Grade 2 current checkpoint

Grade 2 runtime on `main` is 36 verified / pending 0:
- 12 `pc2.foundation.official_sample_facts`
- 12 `pc2.scheme.triad_hue_positions`
- 12 `pc2.munsell.notation_components`

The next official-text area after Munsell was audited. The current official Grade 2 TOC places natural harmony and complex harmony in scope, but the public first-party material does not expose the detailed relation. Two independently checked professional sources agree on the same nonvisual rule:
- Rock Paint: natural harmony follows the natural hue/lightness relation, making the hue nearer yellow lighter and the hue nearer blue darker; complex harmony reverses it.
- Daiwa House: natural harmony is yellow-near higher lightness / blue-violet-near lower lightness; complex harmony reverses this.

Only that intersecting rule is accepted. No hue-difference limit, tone restriction, RGB/HEX, monitor color, screenshot or diagram geometry is inferred.

`pc2.scheme.natural_complex_harmony` now has 12 pending-first records independently re-derived and verified: 12 checked / 12 verified / 0 needs_revision / 0 rejected / 0 pending, A/B/C/D = 3/3/3/3. Dedicated authoring/shared-renderer/full-fingerprint gates are present on branch `power-color-grade2-natural-complex-harmony`.

Grade 3 runtime remains 223 verified / pending 0 and incomplete.

## Exact next start point

1. Run Power Color CI for the `pc2.scheme.natural_complex_harmony` authoring checkpoint and merge if green.
2. From fresh main, promote those 12 verified records record-identically after the current 36 runtime records, producing Grade 2 runtime 48 verified / pending 0.
3. Extend `grade2-runtime-promotion.test.js` to require exact equality with all four verified authoring batches, zero full-fingerprint duplicates, and shared Power TOEIC engine execution for all four skills.
4. Run CI and merge the promotion if green.
5. Continue the official-text source inventory after natural/complex harmony; do not generate a new micro-skill unless its complete nonvisual answer rule is explicit and auditable.
