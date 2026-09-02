# Power Color Grade 2 — p.128 `慣用色名（JISの慣用色名より）` structure source audit

Checked: 2026-09-03

## Result

`source-resolved` for a narrow text-only structural skill. This audit does not authorize any individual Grade 2 color-name inventory, reading, swatch, RGB/HEX value, or name↔appearance question.

## Primary authority

1. Color Certification Association (AFT), current Grade 2 official-text table of contents.
   - After Landscape p.125 `色彩管理`, the next section is `慣用色名（JISの慣用色名より）` p.128.
   - The section is divided into `和色名` p.128 and `外来色名` p.132.
2. Japanese Standards Association, JIS Z 8102:2001 `物体色の色名`.
   - JSA currently lists this standard as valid, with confirmation date 2025-10-20.
   - The official preview defines `系統色名` as a color name intended to express an object color systematically.
   - It defines `慣用色名` as a color name expressed by a conventional customary calling/name.
   - The standard classifies color names into systematic color names and conventional color names; systematic names are further divided into chromatic and achromatic systematic color names.

## Accepted deterministic nonvisual boundary

A future `pc2.conventional.jis_name_structure` skill may test only explicitly source-confirmed structural facts such as:

- current Grade 2 official scope contains the JIS-based conventional-color-name section;
- its official-text order is p.128 `和色名` then p.132 `外来色名`;
- JIS Z 8102:2001 is the referenced current standard for names of non-luminous object colours / object surface colours;
- the JIS distinction between `系統色名` and `慣用色名`;
- the JIS definitions of those two categories;
- the JIS subdivision of systematic color names into chromatic and achromatic systematic names.

## Explicit exclusions

This source boundary does not authorize:

- treating the existing Grade 3 conventional-color list as the complete Grade 2 list;
- claiming any specific color name is a Grade 2 `和色名` or `外来色名` without a source that explicitly supports that membership;
- unverified Japanese readings, etymology, origin stories, historical periods, or translations;
- Munsell values unless independently source-confirmed for the exact question boundary;
- RGB/HEX/display values or monitor-facing swatches;
- answers inferred from a color sample, screenshot, illustration, or visual similarity;
- converting the Grade 3 reference display values into Grade 2 authority.

## Decision

The p.128 umbrella structure is source-resolved. Authoring may proceed pending-first for a small structural text-choice batch only if each record stays within the accepted boundary above. Individual `和色名` content remains a separate source-acquisition gate and must not be inferred from Grade 3 data.

Grade 2 runtime remains 336 verified / pending 0 across 28 promoted skills. Grade 3 remains incomplete at 223 verified / pending 0 and all existing source/display gates remain unchanged.

## Sources

- AFT current Grade 2 official-text table of contents: https://www.aft.or.jp/images/text_of-2st-grade_mokuji.pdf
- JSA, JIS Z 8102:2001 product/status page: https://webdesk.jsa.or.jp/books/W11M0090/index/?bunsyo_id=JIS+Z+8102%3A2001
- JSA official JIS Z 8102:2001 preview PDF: https://webdesk.jsa.or.jp/preview/pre_jis_z_08102_000_000_2001_j_pr20_i4.pdf
