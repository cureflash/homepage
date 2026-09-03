# Grade 1 p.036 照明の性質を表すもの — source audit

Status: `SECONDARY_CORROBORATION_REQUIRED`

## Official scope
The current AFT Grade 1 official textbook table of contents places `光と色 / 照明 / 照明の性質を表すもの` at p.036, followed by p.039 `測色の照明`.

Official TOC: https://www.aft.or.jp/images/text_of-1st-grade_mokuji.pdf

## Accepted narrow fact boundary
Only deterministic nonvisual photometric/lighting quantities that are explicitly defined by CIE S 017:2020 e-ILV are resolved here. This audit does not claim that the list below exhausts the unpublished AFT p.036 body.

Accepted facts:
- luminous flux is expressed in lumen (lm);
- luminous intensity is expressed in candela (cd);
- illuminance uses lux (lx), and 1 lx corresponds to 1 lm uniformly distributed over 1 m²;
- colour temperature is the temperature of a Planckian radiator having the same chromaticity as the stimulus and is expressed in kelvin (K).

## Authority
- CIE S 017:2020 e-ILV `luminous flux` / `lumen`.
- CIE S 017:2020 e-ILV `luminous intensity`.
- CIE S 017:2020 e-ILV `lux`.
- CIE S 017:2020 e-ILV `colour temperature`.

## Unresolved / excluded
- Exact AFT p.036 inventory, ordering, formulas, diagrams, examples, or any quantity not independently corroborated.
- Any inference from lamp photographs, rendered light appearance, RGB/HEX, or monitor colour.
- p.039 `測色の照明` content; that is a separate official item and is not folded into this audit.

## Classification rationale
AFT public material establishes the p.036 topic but not its body detail. The accepted individual facts are current international-lighting-standard definitions, so they are auditable and aligned to the official heading, but external corroboration cannot prove exhaustive AFT coverage. Therefore the topic is `SECONDARY_CORROBORATION_REQUIRED`, not `SOURCE_RESOLVED`.

## Exact continuation
Author only the four accepted nonvisual fact families pending-first, then independently QA and run schema/full-fingerprint/answer-position/shared-engine gates before any promotion.
