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

p.006 `古代ヨーロッパの色彩` remains `SECONDARY_CORROBORATION_REQUIRED` at the topic level because AFT does not publish the body text. The narrow audited material/conservation boundary produced `pc1.culture.ancient_europe_materials`: 8 pending-first records, independently re-solved as 8/8 verified, pending 0, A/B/C/D=2/2/2/2. Dedicated schema/source/full-fingerprint/nonvisual/shared-renderer checks and normal Power Color regression passed in CI `33744000544`; PR #618 merged as `fff4022fdf0c4809b135b29c4277ec83def919c2`. These records are authored/verified but not yet promoted to Grade 1 runtime.

p.007 `中・近世のヨーロッパの色彩` is `SECONDARY_CORROBORATION_REQUIRED` under `docs/power-color/audits/2026-09-03-grade1-p007-medieval-early-modern-europe-source-audit.md`. AFT confirms the heading/order but not the body text. The accepted narrow text-only boundary uses Getty, Metropolitan Museum of Art and National Gallery authority for medieval manuscript pigment sources/preparation, ultramarine from lapis lazuli, documented vermilion/orpiment, and the specific Lorenzo Monaco `The Coronation of the Virgin` material record.

`qualifications/color-certification/data/grade1-authoring-culture-medieval-early-modern-europe-0001-0008.json` now contains 8 records created pending-first and independently re-solved. Result: checked 8 / verified 8 / needs_revision 0 / rejected 0 / pending 0; A/B/C/D=2/2/2/2. The 8-record cap is intentional because the audit resolves only four narrow fact families; do not inflate to 12 by template repetition.

Do not infer universal medieval palettes, color symbolism, universal/exact pigment price hierarchies, RGB/HEX/display values, image appearance, or exhaustive unpublished AFT-text membership.

## Exact next start point

Run `qualifications/color-certification/tests/grade1-culture-medieval-early-modern-europe-authoring.test.js` and the normal Power Color regression on the current authoring head. If green and current, merge the authoring checkpoint. Then audit p.010 `近代ヨーロッパと色彩学` before any further authoring.