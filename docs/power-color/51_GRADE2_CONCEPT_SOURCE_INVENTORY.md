# Power Color — Grade 2 concept/source inventory

Checked: 2026-09-02

## Current first-party authority

Use the current Color Certification Association Grade 2 page:
`https://www.aft.or.jp/pages/feature/exam2`

Use the current official Grade 2 text table of contents for scope only:
`https://www.aft.or.jp/images/text_of-2st-grade_mokuji.pdf`

Current JCRI first-party Munsell references:
- `https://www.jcri.jp/square/tool` — `Munsell Separation`, explicitly parses `H V/C`;
- `https://www.jcri.jp/product/hvc_color_training` — explicitly identifies H/V/C as hue/value/chroma;
- `https://www.jcri.jp/product/digital_color_manual` — current Munsell notation examples.

## Source-resolved nonvisual skills

1. `pc2.foundation.official_sample_facts`
2. `pc2.scheme.triad_hue_positions`
3. `pc2.munsell.notation_components`
4. `pc2.scheme.natural_complex_harmony`
5. `pc2.scheme.dominant_color_tone`
6. `pc2.scheme.tone_on_tone`
7. `pc2.scheme.tone_in_tone`
8. `pc2.scheme.tonal`
9. `pc2.scheme.camaieu_faux_camaieu`
10. `pc2.scheme.bicolor_tricolor`
   - official Grade 2 TOC confirms scope/order;
   - Plus Colors and MEGASOFT independently agree on the retained nonvisual intersection: bicolor/bicolore is a clear-contrast two-color scheme; tricolor/tricolore is a clear-contrast three-color scheme; bicolore is also called bicolor;
   - exact hue differences, PCCS tone boundaries, saturation thresholds, achromatic placement, RGB/HEX, monitor values and image appearance are excluded;
   - audit: `docs/power-color/audits/2026-09-01-grade2-bicolor-tricolor.md`.
11. `pc2.scheme.hue_circle_division`
   - current official Grade 2 sample explicitly tests split complementary and pentad, permits achromatic colors in hexad, and states that two dyads can form a tetrad;
   - Plus Colors, supervised by a Color Certification Level 1 coordinator and citing the 2020 revised official text, explicitly fixes the retained nonvisual rules for dyad, split complementary, tetrad, PCCS pentad and hexad;
   - no image appearance, RGB/HEX, monitor value, inferred polygon geometry or unstated tone restriction is used;
   - audit: `docs/power-color/audits/2026-09-02-grade2-hue-circle-division.md`.

The first ten skills are runtime-promoted record-identically. Grade 2 runtime frontier is 120 verified / pending 0. `pc2.scheme.hue_circle_division` has a 12-question independently verified authoring batch awaiting record-identical runtime promotion.

## Current official-text scope inventory

The next current official Grade 2 TOC topics after hue-circle division include:
- image-based schemes;
- visual/media, fashion, interior and landscape color coordination;
- conventional color names;
- PCCS tone-by-value appendix.

The TOC establishes scope and search order only. Do not generate a micro-skill from a TOC label unless the answer rule is explicit in acceptable authority.

## Removed / blocked routes

- Do not recreate `pc2.image.color_image_rules` without current explicit first-party authority.
- Do not reconstruct official image choices from pixels or screenshots.
- Do not infer monitor-facing colors without approved display references.
- Do not broaden any resolved scheme beyond its independently corroborated text-only intersection.
- The stale incomplete `power-color-grade2-tonal-promotion` branch is not authority.

## Exact next order

1. Grade 2 runtime frontier is 120 verified / pending 0 across ten promoted skills.
2. Promote the independently verified `pc2.scheme.hue_circle_division` 12-question batch record-identically, extending runtime 120 → 132 after exact-equality/full-fingerprint/shared-engine gates pass.
3. Then continue source acquisition at the next official-TOC topic without inferring answers from images or unstated geometry.
