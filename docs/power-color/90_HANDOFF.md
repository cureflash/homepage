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

Grade 3 remains 223 verified / pending 0 and incomplete. Its deferred authority is `91_GRADE3_DEFERRED_HANDOFF.md`. Outstanding blockers remain unchanged.

Grade 2 remains 348 verified / pending 0 across 29 promoted skills and incomplete at its recorded source-blocked frontier. Detailed authority remains `50_GRADE2_EXECUTION_PLAN.md` and `51_GRADE2_CONCEPT_SOURCE_INVENTORY.md`. Do not reopen rejected Grade 2 source routes without new explicit auditable evidence.

## Grade 1 culture checkpoint

p.006 `古代ヨーロッパの色彩`: `SECONDARY_CORROBORATION_REQUIRED`; 8 independently verified text-only records. CI `33744000544`; PR #618 merged.

p.007 `中・近世のヨーロッパの色彩`: `SECONDARY_CORROBORATION_REQUIRED`; 8 independently verified text-only records. CI `33745825195`; PR #621 merged.

p.010 `近代ヨーロッパと色彩学`: `SECONDARY_CORROBORATION_REQUIRED`; 8 independently verified text-only records. CI `33747834603`; PR #623 merged.

p.014 `日本の古代の色`: `SECONDARY_CORROBORATION_REQUIRED`; `pc1.culture.ancient_japan_colour` has 8 independently verified records, pending 0, A/B/C/D=2/2/2/2. Synchronized current-head Power Color CI `33749706830` passed and PR #625 merged as `7628b36b7fedec248b7c29a1a4dea47881be9619`. No Grade 1 runtime promotion has occurred yet.

p.017 `古代から中近世の日本の色彩`: `SECONDARY_CORROBORATION_REQUIRED` under `docs/power-color/audits/2026-09-03-grade1-p017-ancient-to-early-modern-japan-source-audit.md`. Accepted boundary remains limited to Okayama Prefectural University Library's Heian `襲色目` structural/seasonal-event facts and Agency for Cultural Affairs catalogue facts for `熨斗雪輪模様小袖`, `蛇籠桜樹模様小袖`, and `蒲公英蝶模様小袖`.

`qualifications/color-certification/data/grade1-authoring-culture-ancient-to-early-modern-japan-0001-0008.json` contains 8 records generated pending-first and independently re-derived: checked 8 / verified 8 / needs_revision 0 / rejected 0 / pending 0; A/B/C/D=2/2/2/2. The dedicated gate verifies source allowlisting, nonvisual rendering, schema invariants, answer balance, and full-fingerprint uniqueness against all earlier Grade 1 culture authoring batches. Power Color workflow `33751443115` passed on PR #628 before the documentation sync commit; current-head CI must be checked again before merge.

Do not infer exact `襲色目` pair tables or individual pair names, court-rank rules, universal symbolic meanings, reconstructed historical appearance, RGB/HEX/display values, image-derived answers, or exhaustive unpublished AFT p.017 membership.

## Canonical inconsistency to resolve before p.021

`docs/power-color/20_EXECUTION_PLAN.md` Phase 5 still contains the stale condition `Start only after Grade 2 is completely finished.` This conflicts with the explicit Grade 1 user override already recorded in STATUS and `60_GRADE1_EXECUTION_PLAN.md`, while Grade 2 intentionally remains incomplete. Do not begin p.021 authoring/audit by silently choosing one side. After PR #628 is merged, reconcile this stale top-level condition to the explicit Grade 1 override while preserving every Grade 2/3 blocker and gate.

## Exact next start point

1. Confirm current-head Power Color CI for PR #628 and merge only if green/current.
2. Reconcile the stale Phase 5 Grade 1 start condition in `20_EXECUTION_PLAN.md` without marking Grade 2 complete or relaxing its gates.
3. Only then audit p.021 `近代の日本の色彩` in official order.
