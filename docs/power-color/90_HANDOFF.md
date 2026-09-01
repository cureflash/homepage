# Power Color — HANDOFF

## Active work

Grade 2 is the active priority by explicit user override while Grade 3 remains incomplete. Grade 3 deferred state is preserved in `docs/power-color/91_GRADE3_DEFERRED_HANDOFF.md`; do not mark Grade 3 complete or relax its source/display gates.

## Grade 2 current checkpoint

PR #492 merged the first two checkpoints: `pc2.scheme.triad_hue_positions` was promoted record-identically, moving Grade 2 runtime 12 → 24, and `pc2.munsell.notation_components` was authored and independently QA-verified as 12/12 verified / pending 0. Power Color workflow run `33542589855` succeeded before merge; merge commit is `491adae17eacef1f339aadd37a94726b61455765`.

On branch `power-color-grade2-munsell-runtime`, the verified Munsell batch is now promoted record-identically after the existing foundation + triad records, moving the Grade 2 runtime frontier 24 → 36 verified / pending 0. `grade2-runtime-promotion.test.js` now requires exact equality with all three verified authoring batches, zero full-fingerprint duplicates, and successful execution of each Grade 2 skill through the shared Power TOEIC question-bank/session/workout engine.

Munsell authority remains:
- current official Grade 2 TOC places Munsell hue, value, chroma and notation in scope;
- current JCRI `Munsell Separation` explicitly accepts `H V/C` and splits it into hue numeric, hue letters, value numeric, slash and chroma numeric;
- current JCRI HVC training material explicitly maps H/V/C to hue/value/chroma;
- current JCRI Digital Color Manual page supplies the concrete Munsell notation examples used in the drills.

No RGB/HEX, monitor swatch, screenshot sampling, reconstructed Munsell color or inferred diagram geometry is used.

Grade 3 runtime frontier remains 223 verified / pending 0 and incomplete.

## Exact next start point

1. Confirm Power Color CI for `power-color-grade2-munsell-runtime` and merge its PR if green.
2. From fresh main, continue the current Grade 2 first-party source inventory in official-text order after Munsell notation.
3. Select the next nonvisual micro-skill only where current first-party material states the complete answer rule explicitly. Do not derive a rule from the TOC alone.
4. Do not revive `pc2.image.color_image_rules`, do not derive natural harmony from the TOC alone, and do not derive visual answer choices from screen appearance.
