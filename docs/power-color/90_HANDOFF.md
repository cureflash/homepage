# Power Color — HANDOFF

## Active work

Grade 2 is the active priority by explicit user override while Grade 3 remains incomplete. Grade 3 deferred state is preserved in `docs/power-color/91_GRADE3_DEFERRED_HANDOFF.md`; do not mark Grade 3 complete or relax its source/display gates.

## Grade 2 current checkpoint

On branch `power-color-grade2-triad-runtime`, Grade 2 runtime is advanced from 12 to 24 verified / pending 0 by record-identically appending the 12 verified `pc2.scheme.triad_hue_positions` questions after the existing 12 `pc2.foundation.official_sample_facts` questions. The runtime gate now requires exact equality with both authoring batches, zero full-fingerprint duplicates and successful execution of both skills through the shared Power TOEIC question-bank/session/workout engine. The obsolete misleading `grade2-color-image-rules-runtime-promotion.test.js` gate is removed and replaced with `grade2-runtime-promotion.test.js`.

A second checkpoint is authoring-complete: `pc2.munsell.notation_components`.

Authority chain:
- current official Grade 2 TOC places Munsell hue, value, chroma and notation in scope;
- current JCRI `Munsell Separation` explicitly accepts `H V/C` and splits it into hue numeric, hue letters, value numeric, slash and chroma numeric;
- current JCRI HVC training material explicitly maps H/V/C to hue/value/chroma;
- current JCRI Digital Color Manual page supplies the concrete Munsell notation examples used in the drills.

`grade2-authoring-munsell-notation-components-0001-0012.json` contains 12 pending-first text-only questions. Each answer was independently parsed/re-derived before comparison with the proposed answer. Result: 12 checked / 12 verified / 0 needs_revision / 0 rejected / 0 pending; A/B/C/D = 3/3/3/3. No RGB/HEX, monitor swatch, screenshot sampling, reconstructed Munsell color or inferred diagram geometry is used.

Grade 3 runtime frontier remains 223 verified / pending 0 and incomplete.

## Exact next start point

1. Confirm Power Color CI for the current branch and merge the PR if green.
2. From fresh main, promote the 12 verified `pc2.munsell.notation_components` records record-identically to `grade2-runtime.json`, moving Grade 2 runtime 24 → 36.
3. Extend the runtime exact-equality gate to all three authoring batches, rerun full-fingerprint duplicate and shared Power TOEIC engine gates, and merge only if green.
4. Continue first-party Grade 2 source inventory in official-text order. Do not revive `pc2.image.color_image_rules`, do not derive natural harmony from the TOC alone, and do not derive visual answer choices from screen appearance.
