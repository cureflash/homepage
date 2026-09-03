# Power Color — HANDOFF

## Active work

Grade 1 is the active priority by explicit user override. Grade 2 and Grade 3 remain incomplete. Do not mark either lower grade complete and do not relax any existing source/display gate.

Canonical Grade 1 working set:
- `docs/power-color/STATUS.json`
- `docs/power-color/20_EXECUTION_PLAN.md`
- `docs/power-color/60_GRADE1_EXECUTION_PLAN.md`
- `docs/power-color/61_GRADE1_SOURCE_INVENTORY.md`
- `docs/power-color/62_GRADE1_SPEC.md`

## Lower-grade preserved state

Grade 3 remains 223 verified / pending 0 and incomplete. Its deferred authority is `91_GRADE3_DEFERRED_HANDOFF.md`. Outstanding blockers remain: complete auditable conventional PCCS contrast-tone pair matrix; explicit readings for 24 Japanese PCCS hue names; approved current representative PCCS display values for monitor-facing drills; final Grade 3 completion gate.

Grade 2 remains 348 verified / pending 0 across 29 promoted skills and incomplete at its recorded source-blocked frontier. Detailed authority remains `50_GRADE2_EXECUTION_PLAN.md` and `51_GRADE2_CONCEPT_SOURCE_INVENTORY.md`. Do not reopen rejected Grade 2 source routes without new explicit auditable evidence.

## Grade 1 culture checkpoint

The Grade 1 canonical structure was established in PR #617. Current official order begins with p.006 `古代ヨーロッパの色彩`, then p.007 `中・近世のヨーロッパの色彩`, p.010 `近代ヨーロッパと色彩学`, p.014 `日本の古代の色`, p.017 `古代から中近世の日本の色彩`, and p.021 `近代の日本の色彩`.

p.006 is `SECONDARY_CORROBORATION_REQUIRED`: AFT publicly confirms the heading/order but not the body text. `docs/power-color/audits/2026-09-03-grade1-p006-ancient-europe-source-audit.md` resolves only a narrow nonvisual boundary from museum/scientific authority: Egyptian-blue production/use, Egyptian-faience material/copper coloration, and British Museum conservation evidence for Egyptian blue on Parthenon sculptures. Do not infer symbolic meanings, reconstructed palettes, RGB/HEX/display values, image appearance, or exhaustive unpublished AFT-text membership.

`qualifications/color-certification/data/grade1-authoring-culture-ancient-europe-materials-0001-0008.json` contains 8 records created pending-first and independently re-solved. Result: checked 8 / verified 8 / needs_revision 0 / rejected 0 / pending 0; A/B/C/D=2/2/2/2. Eight is an intentional cap because the current audit resolves four narrow fact families; do not inflate the batch to 12 through template repetition.

A dedicated Grade 1 p.006 authoring gate checks grade/skill/schema, source allowlist, full-fingerprint uniqueness, nonvisual constraints, answer-position balance, and shared renderer behavior.

## Exact next start point

Run the dedicated p.006 authoring gate and normal Power Color regression on the current authoring head. If green and current with no competing Power Color work, merge it. Then source-audit p.007 `中・近世のヨーロッパの色彩` before any further Grade 1 authoring.
