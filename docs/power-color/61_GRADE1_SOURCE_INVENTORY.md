# Power Color — Grade 1 Source Inventory

## Current AFT authority
- Current official Grade 1 level page: confirms Grade 1 scope includes cultural history, measurement, world color-harmony theory, color marketing, and advanced professional application.
- Current official Grade 1 textbook table of contents PDF: authoritative scope/order for headings and page starts.
- Current official Grade 1 first-stage sample questions: authoritative examples of current testable content/patterns.
- 2026 Grade 1 second-stage format notice: printed-color selection replaces the former New Color Card 199a operation; content tendency/approximate question count/difficulty remain unchanged.

## Completed culture / harmony frontier
- p.006/p.007/p.010/p.014/p.017/p.021: `SECONDARY_CORROBORATION_REQUIRED`, 8 verified text-only records each; not promoted.
- p.024 Judd: `SECONDARY_CORROBORATION_REQUIRED`, 4/4 verified; not promoted.
- p.025 Chevreul: narrow `SOURCE_RESOLVED`, 3/3 verified; not promoted.
- p.027 Rood: `SECONDARY_CORROBORATION_REQUIRED`, 3/3 verified; not promoted.
- p.028 Ostwald: `SECONDARY_CORROBORATION_REQUIRED`, 4/4 verified; not promoted.
- p.029 Itten: `SECONDARY_CORROBORATION_REQUIRED`, 4/4 verified; not promoted.
- p.030 Moon & Spencer: `SECONDARY_CORROBORATION_REQUIRED`, 4/4 verified; not promoted.

## Light and color frontier
| Order | Official heading | Page | Status | Notes |
|---|---|---:|---|---|
| 1 | 心理的な見えによる色の分類 — 色の様相 | 032 | SECONDARY_CORROBORATION_REQUIRED | 3 audited nonvisual fact families authored; 3/3 verified; PR #647 merged. Not promoted. |
| 2 | 色の分類 | 035 | SOURCE_BLOCKED | AFT public authority exposes only heading/order. CIE provides multiple legitimate classifications, but no authority ties an exact taxonomy/labels/counts to current AFT p.035. No authoring. Audit: `docs/power-color/audits/2026-09-03-grade1-p035-color-classification-source-audit.md`. |
| 3 | 照明 — 照明の性質を表すもの | 036 | SECONDARY_CORROBORATION_REQUIRED | Narrow CIE S 017:2020 facts only: luminous flux→lm, luminous intensity→cd, illuminance→lx including 1 lm/m² relation, colour temperature→Planckian radiator/same chromaticity and K. 4/4 independently verified, A/B/C/D=1/1/1/1. Not promoted. |
| 4 | 照明 — 測色の照明 | 039 | UNCHECKED | Exact next source-audit frontier. |

## p.032 accepted corroborating boundary
Audit: `docs/power-color/audits/2026-09-03-grade1-p032-color-appearance-mode-source-audit.md`.

Accepted narrow nonvisual facts only:
- mode of color appearance concerns qualitative differences associated with reflected/emitted/transmitted light;
- reflected-surface appearance and self-emitting-light appearance are distinct appearance modes;
- mode judgment is not determined solely by the target stimulus; surrounding/depth context can affect it.

Authoring batch: `qualifications/color-certification/data/grade1-authoring-light-color-appearance-p032-0001-0003.json`.
Dedicated gate: `qualifications/color-certification/tests/grade1-light-color-appearance-p032-authoring.test.js`.

## p.035 blocked boundary
Audit: `docs/power-color/audits/2026-09-03-grade1-p035-color-classification-source-audit.md`.

Do not infer AFT's exact p.035 classification axis, Japanese labels, hierarchy, or closed list from CIE's broader colour vocabulary. Do not duplicate p.032 appearance-mode facts under p.035.

## p.036 accepted corroborating boundary
Audit: `docs/power-color/audits/2026-09-03-grade1-p036-lighting-properties-source-audit.md`.

Accepted narrow nonvisual facts only:
- luminous flux is expressed in lumen (lm);
- luminous intensity is expressed in candela (cd);
- illuminance uses lux (lx), with 1 lx corresponding to 1 lm uniformly distributed over 1 m²;
- colour temperature is the temperature of a Planckian radiator with the same chromaticity and is expressed in kelvin (K).

Authoring batch: `qualifications/color-certification/data/grade1-authoring-lighting-properties-p036-0001-0004.json`.
Dedicated gate: `qualifications/color-certification/tests/grade1-lighting-properties-p036-authoring.test.js`.

## Known later source-risk candidates
- JISの光源色の色名 / 光源色の系統色名: exact current standard content must be auditable before authoring.
- 色彩とビジネス / カラーマーケティング / CMF®: AFT-specific procedures must not be filled from generic business practice.
- ファッション: AFT-specific practical procedures require explicit corroboration.
- 資料・CMF® `素材と工法`: current reference contents are not assumed from generic materials engineering sources.
- Grade 1 second-stage printed-color items: no monitor-facing substitute without approved display authority.

## Exact next source frontier
Source-audit p.039 `測色の照明` before authoring. If public AFT material does not expose exact body detail, resolve only individually auditable deterministic nonvisual facts and block the unresolved AFT-specific remainder.
