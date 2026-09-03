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
| 3 | 近代ヨーロッパと色彩学 | 010 | SECONDARY_CORROBORATION_REQUIRED | AFT exposes heading/order but not body text. Royal Society resolves a narrow Newton/prism/light-and-colour historical boundary; Klassik Stiftung Weimar resolves a narrow Goethe/1810/perception-and-experiment boundary. |
| 4 | 日本の古代の色 | 014 | UNREVIEWED | Prefer AFT + Imperial Household Agency / NDL / museums / academic sources. |
| 5 | 古代から中近世の日本の色彩 | 017 | UNREVIEWED | Same source hierarchy. |
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

These sources authorize only the stated historical/material facts. They do not authorize unpublished AFT-specific wording, exhaustive p.006 membership, symbolic color meanings, exact palettes, RGB/HEX, or image-based questions.

## p.006 authored boundary
Authoring file: `qualifications/color-certification/data/grade1-authoring-culture-ancient-europe-materials-0001-0008.json`.

The 8-record cap is intentional. The audit resolves four narrow fact families; extending to the usual 12-record batch would force avoidable template repetition. Every record is text-only, source-bound and independently re-solved before `verified` status.

## p.007 accepted corroborating sources
Audit: `docs/power-color/audits/2026-09-03-grade1-p007-medieval-early-modern-europe-source-audit.md`.

Accepted narrow facts only:
- Getty: medieval manuscript pigments included materials derived from plants, minerals and metals; preparation could involve grinding colored earths or semiprecious stones and mixing with a binding medium, or other chemical/synthetic processing.
- Getty: ultramarine blue, vermilion red and orpiment yellow are documented among medieval manuscript pigments.
- Met: the `Belles Heures` used ultramarine made from lapis lazuli.
- National Gallery: Lorenzo Monaco's `The Coronation of the Virgin` documents lapis-lazuli blue described in that work's context as more expensive than gold, together with gilding and vermilion.

Do not generalize these records into a universal medieval palette, symbolic meaning, exact pigment price hierarchy, RGB/HEX/display values, or exhaustive p.007 AFT membership.

## p.007 authored boundary
Authoring file: `qualifications/color-certification/data/grade1-authoring-culture-medieval-early-modern-europe-0001-0008.json`.

The 8-record cap is intentional. The audit resolves four narrow fact families; every question stays within those relations and is text-only. All 8 records were created pending-first and independently re-solved as verified before gate execution.

## p.010 accepted corroborating sources
Audit: `docs/power-color/audits/2026-09-03-grade1-p010-modern-europe-color-science-source-audit.md`.

Accepted narrow facts only:
- Royal Society: Newton's prism/light-and-colour work is documented in the 1670s and later incorporated into `Opticks` (1704).
- Royal Society: archival records explicitly preserve Newton prism experiments and theory-of-light-and-colours material from 1672, 1675 and 1676.
- Klassik Stiftung Weimar: Goethe's `Farbenlehre` / `Zur Farbenlehre` was published in 1810 and is represented by preserved experimental apparatus/materials including prisms.
- Klassik Stiftung Weimar: Goethe investigated physiologically, physically and chemically produced colours and their psychological impressions, placing human sensory perception centrally in his studies.
- Royal Society: an 1817 optical work explicitly discussed prism phenomena in relation to Newton's and Goethe's theories of colour.

Do not infer an exhaustive p.010 scientist list, numerical optics, reconstructed prism geometry, RGB/HEX/display values, visual-spectrum answers, or modern scientific validity beyond the institutional descriptions.