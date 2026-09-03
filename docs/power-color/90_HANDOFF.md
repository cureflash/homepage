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

p.006 `古代ヨーロッパの色彩`: `SECONDARY_CORROBORATION_REQUIRED`; `pc1.culture.ancient_europe_materials` has 8 independently verified records, pending 0. CI `33744000544`; PR #618 merged.

p.007 `中・近世のヨーロッパの色彩`: `SECONDARY_CORROBORATION_REQUIRED`; `pc1.culture.medieval_early_modern_europe_materials` has 8 independently verified records, pending 0. CI `33745825195`; PR #621 merged.

p.010 `近代ヨーロッパと色彩学`: `SECONDARY_CORROBORATION_REQUIRED`; `pc1.culture.modern_europe_color_science` has 8 independently verified records, pending 0, A/B/C/D=2/2/2/2. CI `33747834603`; PR #623 merged. These records are not yet promoted to Grade 1 runtime.

p.014 `日本の古代の色`: `SECONDARY_CORROBORATION_REQUIRED` under `docs/power-color/audits/2026-09-03-grade1-p014-ancient-japan-colour-source-audit.md`. `pc1.culture.ancient_japan_colour` now has 8 pending-first records independently re-solved as 8/8 verified, pending 0, A/B/C/D=2/2/2/2. The accepted boundary remains only Shosoin eighth-century/Nara-period relations, continental influence, named textile/dye-technique categories, Horyuji/Shosoin surviving-material context, and selected Kyoto National Museum catalogue title/period/material facts. Do not infer dye chemistry, reconstructed appearance, RGB/HEX/display values, court-rank symbolism, universal colour meanings, or exhaustive unpublished AFT membership.

Dedicated source/nonvisual/full-fingerprint/shared-renderer checks and normal Power Color regression passed in CI `33749556806` on PR #625 head `86c1bc93bba65d3f377f1cccd15d527189f7aa04`. Canonical STATUS/PLAN/source inventory/handoff synchronization is on the same PR; require a green current-head rerun before merge. No Grade 1 runtime promotion has occurred yet.

## Exact next start point

After PR #625 merges green on the synchronized current head, source-audit p.017 `古代から中近世の日本の色彩` in official AFT order. Use AFT scope first and only explicit museum/government/NDL/university/academic text facts for corroboration. Do not infer unpublished AFT membership, image appearance, reconstructed colours or display values.