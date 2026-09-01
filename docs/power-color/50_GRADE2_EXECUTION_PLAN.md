# Power Color — Grade 2 execution plan

Checked: 2026-09-01

## Authority and scope

Grade 2 proceeds by explicit user override while Grade 3 remains incomplete. This does not mark Grade 3 complete and does not relax any Grade 3 source/display gate.

Primary authority:
- current Color Certification Association Grade 2 page `https://www.aft.or.jp/pages/feature/exam2`;
- current official Grade 2 text/scope material;
- current JCRI / Japan Color Enterprise first-party material where relevant.

Rules:
1. Use only facts that can be independently re-derived from explicit current authority.
2. Do not infer answers from sample-image appearance, RGB/HEX, screenshots or unstated diagram geometry.
3. Monitor-facing questions remain blocked without approved display references.
4. Reuse the shared Power TOEIC question-bank/workout/session engine only.
5. Generate pending-first, independently QA every record, then promote verified records record-identically.

## Current runtime frontier

Grade 2 runtime is promoted to 24 verified / pending 0 on this branch: 12 `pc2.foundation.official_sample_facts` + 12 `pc2.scheme.triad_hue_positions`. The runtime promotion gate requires exact equality with both verified authoring batches, zero full-fingerprint duplicates, and execution through the shared Power TOEIC engine.

Grade 3 remains 223 verified / pending 0 and incomplete. See `91_GRADE3_DEFERRED_HANDOFF.md`.

## Grade 2 triad hue-position checkpoint

The current official Grade 2 sample explicitly states that three hues whose positions are evenly spaced on the PCCS hue circle form a triad. The existing source-confirmed Grade 3 PCCS structure fixes the hue circle at 24 positions. Under the user-authorized Grade 3 structural reuse rule, `24 / 3 = 8` is therefore a deterministic text-only derivation, not a visual inference.

- [x] Define `pc2.scheme.triad_hue_positions` from explicit current Grade 2 authority plus the source-confirmed 24-position PCCS structure.
- [x] Generate 12 pending-first text-only questions.
- [x] Independently recompute every answer using the 8-position interval modulo 24.
- [x] Verify 12/12; pending 0; A/B/C/D = 3/3/3/3.
- [x] Add a dedicated authoring/shared-renderer gate.
- [x] Promote the verified batch record-identically to `grade2-runtime.json`; runtime frontier 24.

## Grade 2 Munsell notation checkpoint

The current official Grade 2 TOC places Munsell hue, value, chroma and notation in scope. Current JCRI first-party material independently supplies the nonvisual answer rule:
- `Munsell Separation` accepts `H V/C` and splits it into hue numeric, hue letters, value numeric, slash and chroma numeric;
- current JCRI HVC training material explicitly identifies H/V/C as hue/value/chroma;
- current JCRI Digital Color Manual page publishes concrete Munsell examples such as `2.5R 6/10`, `5R 6/10`, `7.5R 6/12`, and `10R 6/14`.

- [x] Define `pc2.munsell.notation_components` without using display color.
- [x] Generate 12 pending-first text-only questions using only JCRI-published notation examples or the explicit H/V/C field rule.
- [x] Independently parse/re-derive every answer before verification.
- [x] Verify 12/12; pending 0; A/B/C/D = 3/3/3/3.
- [x] Add dedicated authoring/shared-renderer/fingerprint gate.
- [ ] Promote the verified Munsell batch record-identically after the current PR is green.

## Exact next start point

First confirm CI for the 24-question triad runtime promotion plus Munsell authoring checkpoint and merge it. Then promote `grade2-authoring-munsell-notation-components-0001-0012.json` record-identically to Grade 2 runtime, moving the frontier 24 → 36, and rerun exact-equality, full-fingerprint and shared-engine gates. After that continue the current first-party source inventory in official-text order.
