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

Grade 2: 12 verified / pending 0 in `grade2-runtime.json`, all from `pc2.foundation.official_sample_facts`.

Grade 3 remains 223 verified / pending 0 and incomplete. See `91_GRADE3_DEFERRED_HANDOFF.md`.

## Grade 2 triad hue-position checkpoint

The current official Grade 2 sample explicitly states that three hues whose positions are evenly spaced on the PCCS hue circle form a triad. The existing source-confirmed Grade 3 PCCS structure fixes the hue circle at 24 positions. Under the user-authorized Grade 3 structural reuse rule, `24 / 3 = 8` is therefore a deterministic text-only derivation, not a visual inference.

- [x] Define `pc2.scheme.triad_hue_positions` from explicit current Grade 2 authority plus the source-confirmed 24-position PCCS structure.
- [x] Generate 12 pending-first text-only questions.
- [x] Independently recompute every answer using the 8-position interval modulo 24.
- [x] Verify 12/12; pending 0; A/B/C/D = 3/3/3/3.
- [x] Add a dedicated authoring/shared-renderer gate.
- [ ] Promote the verified batch record-identically to `grade2-runtime.json` after the authoring PR is green.

## Exact next start point

Promote `grade2-authoring-triad-hue-positions-0001-0012.json` record-identically to Grade 2 runtime, update the runtime frontier from 12 to 24, and run full-fingerprint plus shared Power TOEIC engine gates. After promotion, continue the current first-party source inventory in official-text order. Do not generate another named scheme unless its full nonvisual answer rule is explicit.
