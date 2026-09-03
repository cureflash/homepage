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
| 2 | 色の分類 | 035 | SOURCE_BLOCKED | AFT public authority exposes only heading/order. CIE provides multiple legitimate classifications, but no authority ties an exact taxonomy/labels/counts to current AFT p.035. No authoring. |
| 3 | 照明 — 照明の性質を表すもの | 036 | SECONDARY_CORROBORATION_REQUIRED | Narrow CIE S 017:2020 facts only; 4/4 independently verified. Not promoted. |
| 4 | 照明 — 測色の照明 | 039 | SECONDARY_CORROBORATION_REQUIRED | Current CIE boundary only: illuminant definition, A, D65, D50. 4/4 independently verified, A/B/C/D=1/1/1/1; CI 33766411922; PR #651 merged. Not promoted. |
| 5 | 混色 — グラスマンの法則（加法混色の法則性） | 041 | UNCHECKED | Exact next source-audit frontier confirmed by current AFT official table of contents. |

## p.032 accepted corroborating boundary
Audit: `docs/power-color/audits/2026-09-03-grade1-p032-color-appearance-mode-source-audit.md`.

## p.035 blocked boundary
Audit: `docs/power-color/audits/2026-09-03-grade1-p035-color-classification-source-audit.md`.
Do not infer AFT's exact p.035 classification axis, Japanese labels, hierarchy, or closed list from CIE's broader colour vocabulary. Do not duplicate p.032 appearance-mode facts under p.035.

## p.036 accepted corroborating boundary
Audit: `docs/power-color/audits/2026-09-03-grade1-p036-lighting-properties-source-audit.md`.
Accepted only luminous flux→lm, luminous intensity→cd, illuminance→lx including 1 lm/m², and colour temperature→same-chromaticity Planckian radiator/K.

## p.039 accepted corroborating boundary
Audit: `docs/power-color/audits/2026-09-03-grade1-p039-measurement-illuminants-source-audit.md`.

Accepted narrow nonvisual facts only:
- CIE `illuminant` definition based on a defined relative spectral power distribution;
- CIE standard illuminant A: typical tungsten-filament lighting / approximately 2856 K Planckian radiator;
- CIE standard illuminant D65: average daylight / approximately 6500 K correlated colour temperature;
- CIE standard illuminant D50: daylight / approximately 5000 K correlated colour temperature.

Authoring batch: `qualifications/color-certification/data/grade1-authoring-measurement-illuminants-p039-0001-0004.json`.
Dedicated gate: `qualifications/color-certification/tests/grade1-measurement-illuminants-p039-authoring.test.js`.
Do not infer AFT's unpublished complete p.039 list/order/diagrams/application wording, lamp substitutions, spectral-curve appearance, display values, or later JIS light-source colour-name content.

## Known later source-risk candidates
- JISの光源色の色名 / 光源色の系統色名: exact current standard content must be auditable before authoring.
- 色彩とビジネス / カラーマーケティング / CMF®: AFT-specific procedures must not be filled from generic business practice.
- ファッション: AFT-specific practical procedures require explicit corroboration.
- 資料・CMF® `素材と工法`: current reference contents are not assumed from generic materials engineering sources.
- Grade 1 second-stage printed-color items: no monitor-facing substitute without approved display authority.

## Exact next source frontier
Source-audit p.041 `グラスマンの法則（加法混色の法則性）` before authoring. Resolve only individually auditable deterministic nonvisual facts and block any unpublished AFT-specific remainder.
