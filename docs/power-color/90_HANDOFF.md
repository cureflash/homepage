# Power Color — HANDOFF

## Active work

Grade 1 is the active priority by explicit user override. Grade 2 and Grade 3 remain incomplete. Do not mark either lower grade complete and do not relax any existing source/display gate.

Canonical Grade 1 working set: `STATUS.json`, `20_EXECUTION_PLAN.md`, `60_GRADE1_EXECUTION_PLAN.md`, `61_GRADE1_SOURCE_INVENTORY.md`, `62_GRADE1_SPEC.md`.

## Lower-grade preserved state

Grade 3 remains 223 verified / pending 0 and incomplete with its recorded blockers unchanged. Grade 2 remains 348 verified / pending 0 across 29 promoted skills and incomplete at its source-blocked frontier. No lower-grade gate is relaxed.

## Grade 1 progress

Culture p.006/p.007/p.010/p.014/p.017/p.021 are source-audited and have 8 independently verified text-only records each. No Grade 1 runtime promotion has occurred yet.

Color-harmony p.024 Judd: 4/4 verified. p.025 Chevreul: 3/3 verified. p.027 Rood: 3/3 verified. p.028 Ostwald: 4/4 verified. p.029 Itten: 4/4 verified and merged via PR #643 as `94cccab5c53d994f92f0ee0de7f9d86af9efa3c8`.

## p.030 Moon & Spencer checkpoint

p.030 `ムーンとスペンサーの色彩調和論` is `SECONDARY_CORROBORATION_REQUIRED` under `docs/power-color/audits/2026-09-03-grade1-p030-moon-spencer-source-audit.md`.

Accepted narrow nonvisual boundary:
- AFT current Grade 1 TOC fixes p.030 membership/order.
- Japan Color Science Association / J-STAGE: harmony/ambiguity regions in Munsell color space; aesthetic measure (`美度`) based on order and complexity.
- NDL/CiNii/Optica bibliographic authority: three 1944 JOSA papers `Geometric Formulation of Classical Color Harmony`, `Area in Color Harmony`, and `Aesthetic Measure Applied to Color Harmony`.
- Peer-reviewed later literature: Moon-Spencer spatial balance involves chroma and value; contrast to background/adaptation point is the dominant factor.

`qualifications/color-certification/data/grade1-authoring-harmony-moon-spencer-p030-0001-0004.json` contains exactly four pending-first text-only questions, independently re-solved as 4/4 verified, pending 0, A/B/C/D=1/1/1/1. Dedicated gate `qualifications/color-certification/tests/grade1-harmony-moon-spencer-p030-authoring.test.js` checks source membership, nonvisual rendering, full fingerprints against all prior Grade 1 batches, and shared renderer behavior.

Do not reconstruct unpublished AFT p.030 equations, coefficients, thresholds, Japanese terminology, diagrams, area-ratio examples, RGB/HEX/display values, image-derived answers, or p.032 content.

## Canonical sequencing note

`docs/power-color/20_EXECUTION_PLAN.md` still contains the stale old Phase 5 start sentence. The explicit Grade 1 directive and Grade 1 canonical files control Grade 1 execution while Grade 2/3 remain incomplete and gated. Mechanical cleanup remains outstanding; do not treat the stale sentence as completion of Grade 2.

## Exact next start point

Pass current-head p.030 dedicated/Power Color CI and merge if green/current. Then continue in official order to p.032 `光と色：色の様相` and source-audit it before authoring.
