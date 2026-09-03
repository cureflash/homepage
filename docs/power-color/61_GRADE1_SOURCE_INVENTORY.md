# Power Color — Grade 1 Source Inventory

## Current AFT authority
- Current official Grade 1 level page: confirms Grade 1 scope includes cultural history, measurement, world color-harmony theory, color marketing, and advanced professional application.
- Current official Grade 1 textbook table of contents PDF: authoritative scope/order for headings and page starts.
- Current official Grade 1 first-stage sample questions: authoritative examples of current testable content/patterns.
- 2026 Grade 1 second-stage format notice: printed-color selection replaces the former New Color Card 199a operation; content tendency/approximate question count/difficulty remain unchanged.

## Culture chapter frontier
| Order | Official heading | Page | Status | Notes |
|---|---|---:|---|---|
| 1 | 古代ヨーロッパの色彩 | 006 | SECONDARY_CORROBORATION_REQUIRED | Narrow ancient-Egypt/Greek material and conservation facts are corroborated. `pc1.culture.ancient_europe_materials` has 8 independently rechecked verified records, pending 0, A/B/C/D=2/2/2/2. CI `33744000544`; PR #618 merged. Not yet promoted to runtime. |
| 2 | 中・近世のヨーロッパの色彩 | 007 | SECONDARY_CORROBORATION_REQUIRED | Narrow Getty/Met/National Gallery manuscript/pigment/material facts are corroborated. 8 independently verified records. CI `33745825195`; PR #621 merged. Not yet promoted to runtime. |
| 3 | 近代ヨーロッパと色彩学 | 010 | SECONDARY_CORROBORATION_REQUIRED | `pc1.culture.modern_europe_color_science` has 8 independently verified records. CI `33747834603`; PR #623 merged. Not yet promoted to runtime. |
| 4 | 日本の古代の色 | 014 | SECONDARY_CORROBORATION_REQUIRED | Narrow Shosoin/Nara-period, continental-influence, textile/dye-technique and selected catalogue-record boundary. `pc1.culture.ancient_japan_colour` has 8 independently rechecked verified records, pending 0, A/B/C/D=2/2/2/2. CI `33749556806`; PR #625. Not yet promoted to runtime. |
| 5 | 古代から中近世の日本の色彩 | 017 | UNREVIEWED | Prefer AFT + Imperial Household Agency / NDL / museums / academic sources. |
| 6 | 近代の日本の色彩 | 021 | UNREVIEWED | Same source hierarchy. |

## Known later source-risk candidates
- JISの光源色の色名 / 光源色の系統色名: exact current standard content must be auditable before authoring.
- 色彩とビジネス / カラーマーケティング / CMF®: AFT-specific procedures must not be filled from generic business practice.
- ファッション: AFT-specific practical procedures require explicit corroboration.
- 資料・CMF® `素材と工法`: current reference contents are not assumed from generic materials engineering sources.
- Grade 1 second-stage printed-color items: no monitor-facing substitute without approved display authority.

## p.006 accepted corroborating sources
- AFT official Grade 1 TOC.
- The Metropolitan Museum of Art, `Lump of Blue Paste`.
- The Metropolitan Museum of Art, `Egyptian Faience: Technology and Production`.
- British Museum, `Paint and the Parthenon`.

## p.006 authored boundary
`qualifications/color-certification/data/grade1-authoring-culture-ancient-europe-materials-0001-0008.json`: eight text-only independently verified records.

## p.007 accepted corroborating sources
Audit: `docs/power-color/audits/2026-09-03-grade1-p007-medieval-early-modern-europe-source-audit.md`.

## p.007 authored boundary
`qualifications/color-certification/data/grade1-authoring-culture-medieval-early-modern-europe-0001-0008.json`: eight independently verified records.

## p.010 accepted corroborating sources
Audit: `docs/power-color/audits/2026-09-03-grade1-p010-modern-europe-color-science-source-audit.md`.

## p.010 authored boundary
`qualifications/color-certification/data/grade1-authoring-culture-modern-europe-color-science-0001-0008.json`: eight independently verified records. CI `33747834603`; PR #623 merged.

## p.014 accepted corroborating sources
Audit: `docs/power-color/audits/2026-09-03-grade1-p014-ancient-japan-colour-source-audit.md`.
Accepted narrow facts only:
- Imperial Household Agency: most Shosoin treasures are eighth-century Nara-period objects; continental imports and domestically made objects are both represented; textiles are among the represented crafts.
- Kyoto National Museum: ancient Japanese textiles developed under Korean-peninsula and Chinese influence; Asuka/Nara material reflects Baekje, Goguryeo, Sui and Tang influence.
- Kyoto National Museum: `錦`, `綾`, `羅` and dye techniques `臈纈`, `夾纈`, `纐纈` are documented in the Asuka/Nara textile context.
- Kyoto National Museum: Horyuji and Shosoin textiles preserve ancient textile material; catalogue records identify Nara-period silk fragments including `緑地唐花文錦`, `赤地唐花文錦`, `淡青地葡萄唐草文綾`.

Do not infer dye chemistry, reconstructed original appearance, RGB/HEX/display values, court-rank symbolism, universal ancient-Japan colour meanings, or exhaustive p.014 AFT membership.

## p.014 authored boundary
`qualifications/color-certification/data/grade1-authoring-culture-ancient-japan-colour-0001-0008.json`: eight text-only records, all generated pending-first and independently re-solved as verified; pending 0; A/B/C/D=2/2/2/2. Dedicated source/nonvisual/full-fingerprint/shared-renderer gate and normal Power Color regression passed in CI `33749556806` on PR #625 head `86c1bc93bba65d3f377f1cccd15d527189f7aa04`. No runtime promotion yet.

## Exact next source frontier
After PR #625 merges green on its synchronized current head, source-audit p.017 `古代から中近世の日本の色彩` in official order.