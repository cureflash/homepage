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

p.006 `古代ヨーロッパの色彩` remains `SECONDARY_CORROBORATION_REQUIRED` at the topic level because AFT does not publish the body text. The narrow audited material/conservation boundary produced `pc1.culture.ancient_europe_materials`: 8 pending-first records, independently re-solved as 8/8 verified, pending 0, A/B/C/D=2/2/2/2. Dedicated checks and normal Power Color regression passed in CI `33744000544`; PR #618 merged as `fff4022fdf0c4809b135b29c4277ec83def919c2`. These records are authored/verified but not yet promoted to Grade 1 runtime.

p.007 `中・近世のヨーロッパの色彩` remains `SECONDARY_CORROBORATION_REQUIRED`. `pc1.culture.medieval_early_modern_europe_materials` contains 8 pending-first independently re-solved records: 8/8 verified, pending 0, A/B/C/D=2/2/2/2. Dedicated source/nonvisual/full-fingerprint/shared-renderer checks and normal Power Color regression passed in CI `33745825195`; PR #621 merged as `6adb39143b0765e65fa0762a9fea75ee6ad76c65`. These records are authored/verified but not yet promoted to Grade 1 runtime.

p.010 `近代ヨーロッパと色彩学` remains `SECONDARY_CORROBORATION_REQUIRED` under `docs/power-color/audits/2026-09-03-grade1-p010-modern-europe-color-science-source-audit.md`. AFT confirms the heading/order but not the body text. The accepted narrow text-only boundary uses Royal Society archival authority for Newton's documented prism/light-and-colour work in the 1670s and its later incorporation into `Opticks` (1704), and Klassik Stiftung Weimar authority for Goethe's `Farbenlehre` (1810), preserved experimental apparatus/materials, and its physiological/physical/chemical/psychological-perception framing. Royal Society collection material also documents an 1817 work explicitly comparing Newton's and Goethe's colour theories.

`pc1.culture.modern_europe_color_science` now contains 8 records generated pending-first and independently re-solved: 8/8 verified, pending 0, A/B/C/D=2/2/2/2. The batch is intentionally capped at eight because the audit resolves only five narrow fact families; do not inflate it with repeated templates. A dedicated source/nonvisual/full-fingerprint/shared-renderer gate is present. CI and merge are still required before this checkpoint is complete.

Do not infer an exhaustive p.010 scientist list, numerical optics, reconstructed prism geometry, RGB/HEX/display values, visual-spectrum answers, or modern scientific correctness beyond the institutional descriptions.

## Exact next start point

Run/confirm the p.010 dedicated gate and normal Power Color regression on the current authoring head. If green and current with main, merge the PR. Then audit p.014 `日本の古代の色` using AFT scope first and Imperial Household Agency / NDL / museum / academic authority for individual facts.