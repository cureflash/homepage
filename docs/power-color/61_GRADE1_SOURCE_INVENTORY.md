# Power Color — Grade 1 Source Inventory

## Current AFT authority
- Current official Grade 1 level page: confirms Grade 1 scope includes cultural history, measurement, world color-harmony theory, color marketing, and advanced professional application.
- Current official Grade 1 textbook table of contents PDF: authoritative scope/order for headings and page starts.
- Current official Grade 1 first-stage sample questions: authoritative examples of current testable content/patterns.
- 2026 Grade 1 second-stage format notice: printed-color selection replaces the former New Color Card 199a operation; content tendency/approximate question count/difficulty remain unchanged.

## Culture chapter frontier
| Order | Official heading | Page | Status | Notes |
|---|---|---:|---|---|
| 1 | 古代ヨーロッパの色彩 | 006 | SECONDARY_CORROBORATION_REQUIRED | 8 verified text-only records; CI `33744000544`; PR #618 merged. Not promoted. |
| 2 | 中・近世のヨーロッパの色彩 | 007 | SECONDARY_CORROBORATION_REQUIRED | 8 verified text-only records; CI `33745825195`; PR #621 merged. Not promoted. |
| 3 | 近代ヨーロッパと色彩学 | 010 | SECONDARY_CORROBORATION_REQUIRED | 8 verified records; CI `33747834603`; PR #623 merged. Not promoted. |
| 4 | 日本の古代の色 | 014 | SECONDARY_CORROBORATION_REQUIRED | 8 verified records; CI `33749706830`; PR #625 merged. Not promoted. |
| 5 | 古代から中近世の日本の色彩 | 017 | SECONDARY_CORROBORATION_REQUIRED | 8 verified text-only records; PR #628 merged. Not promoted. |
| 6 | 近代の日本の色彩 | 021 | SECONDARY_CORROBORATION_REQUIRED | 8 verified text-only records; CI `33755336513`; PR #630 merged. Not promoted. |

The detailed accepted fact boundaries and exclusions for p.006–p.021 remain authoritative in their dated files under `docs/power-color/audits/`; do not expand those sections beyond those audits merely from secondary study sites.

## Color-harmony frontier
| Order | Official heading | Page | Status | Notes |
|---|---|---:|---|---|
| 1 | 色彩調和論とは / ジャッドの色彩調和、四つの原理 | 024 | SECONDARY_CORROBORATION_REQUIRED | Finite 4/4 verified; CI `33756393481`; PR #632 merged. Not promoted. |
| 2 | シュヴルールの色彩調和論 | 025 | SOURCE_RESOLVED | Current AFT official sample fixes exactly 3 relations; 3/3 verified; head CI `33757328587`; PR #636 merged as `0b577fa0263b5f451b4941e1a9f04fe8f8b7f036`. Not promoted. |
| 3 | ルードの色彩調和論 | 027 | SECONDARY_CORROBORATION_REQUIRED | Narrow Library of Congress / Met / ISCC boundary; 4/4 verified authoring records; awaiting current-head CI/merge. Not promoted. |
| 4 | オストワルトの色彩調和論 | 028 | UNCHECKED | Next official source-audit frontier after p.027 merge. |
| 5 | イッテンの色彩調和論 | 029 | UNCHECKED | Follow official order. |
| 6 | ムーンとスペンサーの色彩調和論 | 030 | UNCHECKED | Follow official order. |

## p.024 accepted boundary
Audit: `docs/power-color/audits/2026-09-03-grade1-p024-color-harmony-judd-source-audit.md`.
Current AFT sample directly fixes `ナチュラルハーモニー` → Judd `なじみ`; academic corroboration supports the four-principle framework. Production Japanese wording for the other three principles must not be invented solely by translation.

## p.025 accepted boundary
Audit: `docs/power-color/audits/2026-09-03-grade1-p025-chevreul-source-audit.md`.
Current AFT official sample directly fixes only these authoring relations: `一つの主調色による調和` → `ドミナント`; this is one of three `類似色の調和`; `類似色の調和` includes `隣接・近似色相による色調類似の調和`. Do not reconstruct the figure or unpublished categories.

`qualifications/color-certification/data/grade1-authoring-harmony-chevreul-p025-0001-0003.json`: 3/3 independently verified, pending 0; CI `33757328587`; PR #636 merged.

## p.027 accepted corroborating boundary
Audit: `docs/power-color/audits/2026-09-03-grade1-p027-rood-source-audit.md`.
Accepted narrow facts only:
- Library of Congress: Ogden N. Rood, `Modern Chromatics, with Applications to Art and Industry`, 1879.
- ISCC: Rood divides colour into purity, luminosity, and hue.
- Metropolitan Museum of Art / ISCC: small separated dots or lines of differing colours can blend perceptually when viewed from a suitable distance; distinguish optical mixture from palette pigment premixing.
- ISCC: paired complementary colours can strengthen chromatic presence in painting.

`qualifications/color-certification/data/grade1-authoring-harmony-rood-p027-0001-0004.json`: four pending-first text-only records independently re-solved as 4/4 verified, pending 0, A/B/C/D=1/1/1/1. Dedicated gate checks source membership, nonvisual rendering, shared renderer behavior, and full fingerprints against all eight prior Grade 1 batches.

Do not infer exact AFT p.027 membership, exact Japanese AFT terminology beyond the heading, Rood wheel geometry/hue positions, pigment recipes, RGB/HEX/display values, image-derived answers, or p.028 Ostwald content.

## Known later source-risk candidates
- JISの光源色の色名 / 光源色の系統色名: exact current standard content must be auditable before authoring.
- 色彩とビジネス / カラーマーケティング / CMF®: AFT-specific procedures must not be filled from generic business practice.
- ファッション: AFT-specific practical procedures require explicit corroboration.
- 資料・CMF® `素材と工法`: current reference contents are not assumed from generic materials engineering sources.
- Grade 1 second-stage printed-color items: no monitor-facing substitute without approved display authority.

## Exact next source frontier
Pass current-head p.027 authoring CI and merge if green/current. Then continue in official order to p.028 `オストワルトの色彩調和論` and source-audit before any authoring.
