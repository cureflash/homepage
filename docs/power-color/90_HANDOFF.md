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

p.006 `古代ヨーロッパの色彩`: `SECONDARY_CORROBORATION_REQUIRED`; `pc1.culture.ancient_europe_materials` has 8 independently verified records, pending 0. CI `33744000544`; PR #618 merged as `fff4022fdf0c4809b135b29c4277ec83def919c2`.

p.007 `中・近世のヨーロッパの色彩`: `SECONDARY_CORROBORATION_REQUIRED`; `pc1.culture.medieval_early_modern_europe_materials` has 8 independently verified records, pending 0. CI `33745825195`; PR #621 merged as `6adb39143b0765e65fa0762a9fea75ee6ad76c65`.

p.010 `近代ヨーロッパと色彩学`: `SECONDARY_CORROBORATION_REQUIRED`; `pc1.culture.modern_europe_color_science` has 8 independently verified records, pending 0, A/B/C/D=2/2/2/2. Dedicated source/nonvisual/full-fingerprint/shared-renderer checks and normal Power Color regression passed in CI `33747834603`; PR #623 merged as `f26b52f8ef6d8e9426e614c39da9174f068d3d93`. These records are not yet promoted to Grade 1 runtime.

p.014 `日本の古代の色` is source-audited as `SECONDARY_CORROBORATION_REQUIRED` under `docs/power-color/audits/2026-09-03-grade1-p014-ancient-japan-colour-source-audit.md`. AFT confirms the heading/order but not the body text. Imperial Household Agency authority resolves the Shosoin/eighth-century Nara-period/material-culture relation. Kyoto National Museum resolves a narrow ancient-textile boundary: Korean-peninsula/Chinese influence in ancient Japan; Asuka/Nara influence from Baekje, Goguryeo, Sui and Tang; textiles `錦`/`綾`/`羅`; dye techniques `臈纈`/`夾纈`/`纐纈`; and Horyuji/Shosoin textiles as surviving ancient material. Selected Kyoto National Museum catalogue records also textually identify Nara-period silk fragments including `緑地唐花文錦`, `赤地唐花文錦`, and `淡青地葡萄唐草文綾`.

Do not infer exact dye chemistry, reconstructed original colour appearance, RGB/HEX/display values, court-rank symbolism, universal ancient-Japan colour meanings, or exhaustive unpublished AFT p.014 membership.

## Exact next start point

Author a small pending-first p.014 text-only batch using only the resolved Shosoin/Nara-period, continental-influence, textile/dye-technique-category and catalogue-record relations. Independently QA every record before any promotion.