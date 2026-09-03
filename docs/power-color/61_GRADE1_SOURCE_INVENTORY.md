# Power Color — Grade 1 Source Inventory

## Current AFT authority
- Current official Grade 1 level page: confirms Grade 1 scope includes cultural history, measurement, world color-harmony theory, color marketing, and advanced professional application.
- Current official Grade 1 textbook table of contents PDF: authoritative scope/order for headings and page starts.
- Current official Grade 1 first-stage sample questions: authoritative examples of current testable content/patterns.
- 2026 Grade 1 second-stage format notice: printed-color selection replaces the former New Color Card 199a operation; content tendency/approximate question count/difficulty remain unchanged.

## Culture chapter frontier
| Order | Official heading | Page | Status | Notes |
|---|---|---:|---|---|
| 1 | 古代ヨーロッパの色彩 | 006 | SECONDARY_CORROBORATION_REQUIRED | Narrow ancient-Egypt/Greek material and conservation facts are corroborated. `pc1.culture.ancient_europe_materials` has 8 independently rechecked verified records, pending 0, A/B/C/D=2/2/2/2. Authoring gate and normal regression passed in CI `33744000544`; PR #618 merged as `fff4022fdf0c4809b135b29c4277ec83def919c2`. Not yet promoted to runtime. |
| 2 | 中・近世のヨーロッパの色彩 | 007 | SECONDARY_CORROBORATION_REQUIRED | Narrow Getty/Met/National Gallery manuscript/pigment/material facts are corroborated. `pc1.culture.medieval_early_modern_europe_materials` has 8 independently rechecked verified records, pending 0, A/B/C/D=2/2/2/2. Dedicated gate and normal regression passed in CI `33745825195`; PR #621 merged as `6adb39143b0765e65fa0762a9fea75ee6ad76c65`. Not yet promoted to runtime. |
| 3 | 近代ヨーロッパと色彩学 | 010 | SECONDARY_CORROBORATION_REQUIRED | `pc1.culture.modern_europe_color_science` has 8 independently rechecked verified records, pending 0, A/B/C/D=2/2/2/2. Dedicated gate and normal regression passed in CI `33747834603`; PR #623 merged as `f26b52f8ef6d8e9426e614c39da9174f068d3d93`. Not yet promoted to runtime. |
| 4 | 日本の古代の色 | 014 | SECONDARY_CORROBORATION_REQUIRED | AFT exposes heading/order but not body text. Imperial Household Agency and Kyoto National Museum resolve a narrow Shosoin/Nara-period, continental-influence, textile/dye-technique and selected catalogue-record boundary. |
| 5 | 古代から中近世の日本の色彩 | 017 | UNREVIEWED | Prefer AFT + Imperial Household Agency / NDL / museums / academic sources. |
| 6 | 近代の日本の色彩 | 021 | UNREVIEWED | Same source hierarchy. |

## Known later source-risk candidates
- JISの光源色の色名 / 光源色の系統色名: exact current standard content must be auditable before authoring.
- 色彩とビジネス / カラーマーケティング / CMF®: AFT-specific procedures must not be filled from generic business practice.
- ファッション: AFT-specific practical procedures require explicit corroboration.
- 資料・CMF® `素材と工法`: current reference contents are not assumed from generic materials engineering sources.
- Grade 1 second-stage printed-color items: no monitor-facing substitute without approved display authority.

## p.006 accepted corroborating sources
- AFT official Grade 1 TOC: `古代ヨーロッパの色彩` begins p.006.
- The Metropolitan Museum of Art, `Lump of Blue Paste`: Egyptian blue is a synthetic pigment made from sand, lime, alkali and a copper compound, heated and then grindable as pigment.
- The Metropolitan Museum of Art, `Egyptian Faience: Technology and Production`: Egyptian faience has a siliceous body and bright glaze; characteristic turquoise blue is created with copper.
- British Museum, `Paint and the Parthenon`: surviving Egyptian-blue traces on Parthenon sculptures are detectable by VIL, establishing ancient Greek sculptural polychromy without relying on modern visual reconstruction.

## p.006 authored boundary
Authoring file: `qualifications/color-certification/data/grade1-authoring-culture-ancient-europe-materials-0001-0008.json`. Eight records only; every record is text-only, source-bound and independently re-solved before `verified` status.

## p.007 accepted corroborating sources
Audit: `docs/power-color/audits/2026-09-03-grade1-p007-medieval-early-modern-europe-source-audit.md`.
Accepted narrow facts only: Getty medieval manuscript material origins/preparation and ultramarine/vermilion/orpiment examples; Met `Belles Heures` ultramarine-from-lapis relation; National Gallery Lorenzo Monaco lapis/gilding/vermilion material record.

## p.007 authored boundary
Authoring file: `qualifications/color-certification/data/grade1-authoring-culture-medieval-early-modern-europe-0001-0008.json`. Eight records only; all independently re-solved as verified.

## p.010 accepted corroborating sources
Audit: `docs/power-color/audits/2026-09-03-grade1-p010-modern-europe-color-science-source-audit.md`.
Accepted narrow facts only: Royal Society Newton/prism/light-and-colour 1670s chronology and `Opticks` 1704 relation; Klassik Stiftung Weimar Goethe 1810 `Farbenlehre`, apparatus/materials and perception framing; Royal Society 1817 Newton-Goethe comparison context.

## p.010 authored boundary
Authoring file: `qualifications/color-certification/data/grade1-authoring-culture-modern-europe-color-science-0001-0008.json`. Eight records only; all independently re-solved as verified. CI `33747834603`; PR #623 merged as `f26b52f8ef6d8e9426e614c39da9174f068d3d93`.

## p.014 accepted corroborating sources
Audit: `docs/power-color/audits/2026-09-03-grade1-p014-ancient-japan-colour-source-audit.md`.
Accepted narrow facts only:
- Imperial Household Agency: most Shosoin treasures are eighth-century Nara-period objects; continental imports and domestically made objects are both represented; textiles are among the represented crafts.
- Kyoto National Museum: ancient Japanese textiles developed under Korean-peninsula and Chinese influence; Asuka/Nara material reflects Baekje, Goguryeo, Sui and Tang influence.
- Kyoto National Museum: `錦`, `綾`, `羅` and dye techniques `臈纈`, `夾纈`, `纐纈` are documented in the Asuka/Nara textile context as imports or imitated production.
- Kyoto National Museum: Horyuji and Shosoin textiles preserve ancient textile material; catalogue records textually identify Nara-period silk fragments including `緑地唐花文錦`, `赤地唐花文錦`, `淡青地葡萄唐草文綾`.

Do not infer dye chemistry, reconstructed original appearance, RGB/HEX/display values, court-rank symbolism, universal ancient-Japan colour meanings, or exhaustive p.014 AFT membership.