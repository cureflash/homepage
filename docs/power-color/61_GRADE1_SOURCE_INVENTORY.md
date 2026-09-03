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

## Light/color and color-representation frontier
| Order | Official heading | Page | Status | Notes |
|---|---|---:|---|---|
| 1 | 心理的な見えによる色の分類 — 色の様相 | 032 | SECONDARY_CORROBORATION_REQUIRED | 3 audited nonvisual fact families authored; 3/3 verified; PR #647 merged. Not promoted. |
| 2 | 色の分類 | 035 | SOURCE_BLOCKED | AFT public authority exposes only heading/order. Exact taxonomy/labels/counts remain unauditable. No authoring. |
| 3 | 照明 — 照明の性質を表すもの | 036 | SECONDARY_CORROBORATION_REQUIRED | Narrow CIE facts only; 4/4 independently verified. Not promoted. |
| 4 | 照明 — 測色の照明 | 039 | SECONDARY_CORROBORATION_REQUIRED | Current CIE boundary only; 4/4 independently verified; PR #651. Not promoted. |
| 5 | 混色 — グラスマンの法則（加法混色の法則性） | 041 | SECONDARY_CORROBORATION_REQUIRED | Current CIE S 017:2020 boundary; 4/4 verified; CI 33768284181; PR #654. Not promoted. |
| 6 | 色の表示 — XYZ表色系 | 046 | SECONDARY_CORROBORATION_REQUIRED | Current CIE S 017:2020 boundary; 4/4 verified; CI 33768527950; PR #655. Not promoted. |
| 7 | 均等色空間とL*a*b*色空間 — 色差の表示 | 050 | SECONDARY_CORROBORATION_REQUIRED | Current ISO/CIE 11664-4:2019 and CIE S 017:2020 boundary; 4/4 verified; CI 33770191717; PR #657. Not promoted. |
| 8 | オストワルト表色系 — 色相環 | 053 | SECONDARY_CORROBORATION_REQUIRED | 4/4 verified; CI 33772390636; PR #659. Not promoted. |
| 9 | オストワルト表色系 — 色の表示方法 | 054 | SECONDARY_CORROBORATION_REQUIRED | 4/4 verified; CI 33772632526; PR #660. Not promoted. |
| 10 | オストワルト表色系 — 等色相面 | 054 | SECONDARY_CORROBORATION_REQUIRED | 4/4 verified; CI 33774043678; PR #663. Not promoted. |
| 11 | オストワルト表色系 — 色立体 | 055 | SECONDARY_CORROBORATION_REQUIRED | 3/3 verified; CI 33776217684; PR #665. Not promoted. |
| 12 | NCS — へリングの6主要色 | 056 | SECONDARY_CORROBORATION_REQUIRED | 4/4 verified; CI 33776482393; PR #666. Not promoted. |
| 13 | NCS — 色相環と色相の表し方 | 056 | SECONDARY_CORROBORATION_REQUIRED | Colour Circle/four chromatic elementary colours, R20B, neutral -N, and hue/nuance split only. 4/4 verified; CI 33778046172; PR #668. Not promoted. |
| 14 | NCS — 等色相面での色の表示 | 058 | SECONDARY_CORROBORATION_REQUIRED | One Colour Triangle per hue, triangle position→nuance, neutrals on vertical side, 1040 notation only. 4/4 verified; CI 33778226671; PR #669. Not promoted. |
| 15 | NCS — 色の表示方法 | 059 | SECONDARY_CORROBORATION_REQUIRED | Blackness/chromaticness digit-pair interpretation, whiteness formula, 3010→60% whiteness, and S 5020 R50B interpretation only. 4/4 verified; CI 33780351985; PR #672. Not promoted. |
| 16 | NCS — 色立体と色票集 | 059 | SECONDARY_CORROBORATION_REQUIRED | 3D Colour Space, white-top/black-bottom vertical axis, four chromatic elementary colours arranged around it, and Atlas 2050 all 2,050 Standard Colours arranged by hue/nuance. 4/4 verified; CI 33780517855; PR #673. Not promoted. |
| 17 | 色名 — 色を表す言葉の分類 | 060 | UNCHECKED | Exact next source-audit frontier. |
| 18 | 色名 — ISCC-NBS色名法 | 061 | UNCHECKED | Follow only after p.060. |
| 19 | 色名 — JISの光源色の色名 | 062 | UNCHECKED | Known source-risk candidate; exact current JIS content must be auditable when reached. |
| 20 | 色名 — 光源色の系統色名 | 062 | UNCHECKED | Known source-risk candidate; do not infer exact system from secondary summaries. |

## p.056 色相環と色相の表し方 accepted corroborating boundary
Audit: `docs/power-color/audits/2026-09-04-grade1-p056-ncs-hue-circle-notation-source-audit.md`.
Authoring batch: `qualifications/color-certification/data/grade1-authoring-ncs-hue-circle-notation-p056-0001-0004.json`.
Dedicated gate: `qualifications/color-certification/tests/grade1-ncs-hue-circle-notation-p056-authoring.test.js`.
Accepted facts are limited to the current NCS first-party statements that the Colour Circle describes hue relative to four chromatic elementary colours, `R20B` means red with 20% blue, neutral colours have no hue and use `-N`, and `R20B` is the hue portion of `NCS S 1040-R20B`. Exact AFT diagram geometry, angular placement, label layout, swatch appearance, and display values remain blocked.

## p.058 等色相面での色の表示 accepted corroborating boundary
Audit: `docs/power-color/audits/2026-09-04-grade1-p058-ncs-equal-hue-plane-source-audit.md`.
Authoring batch: `qualifications/color-certification/data/grade1-authoring-ncs-equal-hue-plane-p058-0001-0004.json`.
Dedicated gate: `qualifications/color-certification/tests/grade1-ncs-equal-hue-plane-p058-authoring.test.js`.
Accepted facts are limited to one NCS Colour Triangle per hue, triangle position defining nuance, neutrals lying along the vertical side, and `1040` meaning 10% blackness / 40% chromaticness. Exact AFT triangle geometry, label placement, orientation beyond explicit source text, swatch appearance, RGB/HEX values, and monitor judgments remain blocked.

## p.059 色の表示方法 accepted corroborating boundary
Audit: `docs/power-color/audits/2026-09-04-grade1-p059-ncs-color-notation-source-audit.md`.
Authoring batch: `qualifications/color-certification/data/grade1-authoring-ncs-color-notation-p059-0001-0004.json`.
Dedicated gate: `qualifications/color-certification/tests/grade1-ncs-color-notation-p059-authoring.test.js`.
Accepted facts are limited to current NCS first-party explicit notation examples: first digit pair→blackness, second digit pair→chromaticness; whiteness=`100-(blackness+chromaticness)`; 3010→60% whiteness; S 5020 R50B→blackness 50/chromaticness 20/hue R50B. Exact AFT notation layout/examples, swatches, RGB/HEX values, and monitor judgments remain blocked.

## p.059 色立体と色票集 accepted corroborating boundary
Audit: `docs/power-color/audits/2026-09-04-grade1-p059-ncs-color-space-atlas-source-audit.md`.
Authoring batch: `qualifications/color-certification/data/grade1-authoring-ncs-color-space-atlas-p059-0001-0004.json`.
Dedicated gate: `qualifications/color-certification/tests/grade1-ncs-color-space-atlas-p059-authoring.test.js`.
Accepted facts are limited to current NCS first-party statements that NCS Colour Space is 3D; white is at the top and black at the bottom of the vertical axis; four chromatic elementary colours are arranged around it in a circle; and Atlas 2050 contains all 2,050 NCS Standard Colours arranged by hue and nuance. Exact AFT solid geometry/figure, sample placement, swatch appearance, RGB/HEX values, and monitor judgments remain blocked.

## Known later source-risk candidates
- JISの光源色の色名 / 光源色の系統色名: exact current standard content must be auditable before authoring.
- 色彩とビジネス / カラーマーケティング / CMF®: AFT-specific procedures must not be filled from generic business practice.
- ファッション: AFT-specific practical procedures require explicit corroboration.
- 資料・CMF® `素材と工法`: current reference contents are not assumed from generic materials engineering sources.
- Grade 1 second-stage printed-color items: no monitor-facing substitute without approved display authority.

## Exact next source frontier
Source-audit p.060 `色名 — 色を表す言葉の分類` before authoring. Preserve official order; do not jump ahead to p.062 JIS topics merely because they are known blocked candidates.
