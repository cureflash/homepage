# Power Color — Grade 3 relation-boundary authority audit

Checked: 2026-08-31

## Question being resolved
Before `pc3.relation.tone_difference` or named hue-difference classes are encoded, Power Color needs current authoritative evidence for the exact Grade 3 classification boundaries. The existing source contract prohibits inferring these boundaries from the appearance of the PCCS tone map or from secondary study sites.

## New first-party evidence found
Japan Color Research Institute's official 2022 business report documents a PCCS COLOR CALC extension for calculating 配色形式. The report states that, after RGB or Munsell input is converted, the software can show how selected colors relate and can extract PCCS 配色形式/配色技法.

Official source:
- https://www.jcri.jp/wp-content/uploads/2024/11/2022-jigyohokoku.pdf
- relevant section: (7) 配色ソフトの開発, report pages 5–6

The official sample output shown in that report contains concrete classifications among three input colors:
- hue 19 / tone `b`
- hue 17 / tone `lt`
- hue 16 / tone `lt`

The displayed pairwise results include:
- `類似色相配色`
- `隣接色相配色`
- `同一トーン配色`
- `類似トーン配色`

This is materially stronger than merely seeing those labels in a study text: it confirms that JCRI itself implemented deterministic PCCS 配色形式 classification in software and supplies concrete classified examples.

JCRI's current product page for PCCS Color Calc also remains live and identifies the software as a JCRI-made PCCS conversion/aggregation product:
- https://www.jcri.jp/product/pccs_color_calc

JCRI's official color-slide product description independently lists `対照色相配色事例` and `同一・類似トーン配色事例`, confirming that these are first-party PCCS teaching categories:
- https://www.jcri.jp/product/cd_rom_color_slide

## What this evidence does and does not establish
It establishes:
- the named hue/tone relation classes are genuine first-party PCCS categories;
- JCRI has implemented deterministic classification logic for them;
- the sample supplies concrete positive examples for adjacent/similar hue and same/similar tone relationships.

It does not establish:
- the complete numeric hue-difference boundary table for every named class;
- the complete tone-pair membership/boundary table, including `対照トーン配色`;
- whether the 2022 software's complete boundary rules are byte-for-byte identical to the current Grade 3 exam rule set.

The report's sample rows are not sufficient to reverse-engineer all boundaries safely. Power Color therefore must not extrapolate a full classifier from those three example colors.

## Decision
- Keep `pc3.relation.tone_difference` blocked for full implementation.
- Keep named hue-difference classification blocked for full implementation.
- Do not infer missing boundaries from common textbook rules, third-party sites, tone-map geometry, or the detailed-PCCS revision algorithm.
- Preserve the already verified numeric circular hue-difference drill because it depends only on the source-confirmed 24-position hue circle and arithmetic, not on named-class boundaries.
- Continue source acquisition for an authoritative current table/manual/text excerpt that explicitly defines the complete boundaries or memberships.

This audit narrows the blocker from "are these first-party classifications?" to "what are the complete current boundary rules?" without inventing data.